import React, {useState, useEffect} from "react";
import {View, Image} from 'react-native';

import Title from "./Title";


import getImages from "../../content/DataUtils";
import useEth from "../../contexts/EthContext/useEth";
import loading_icon from '../../assets/loading_icon.gif';

function Gallery({lastId}) {
    const {state: {contract}} = useEth();

    const [images, setImages] = useState([]);



    useEffect(() => {
        if (contract) {
            const getNfts = async () => {
                let promisesToResolve= [];
                console.log(lastId)
                for(let i = 1; i<= lastId;i++) {
                    promisesToResolve.push(new Promise(async (resolve, reject) => {
                        let nftJsonUri = await contract.methods.uri(i).call();
                        console.log(nftJsonUri);
                        nftJsonUri = nftJsonUri.replace("ipfs://", "https://ipfs.io/ipfs/");
                        fetch(nftJsonUri)
                            .then(response => response.json())
                            .then(responseData => {
                                let imageUri = responseData.image.replace("ipfs://", "https://ipfs.io/ipfs/");
                                resolve({src: imageUri})
                            });
                    }));
                    Promise.all(promisesToResolve).then((imgeUrisList) => {
                        setImages(imgeUrisList)
                        console.log(imgeUrisList)
                    })

                }

            };
            getNfts()
        }
    }, [contract,lastId]);

    return (
        <div className="demo">
            <Title/>

            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <div className="grid-container">
                    {
                        images.map((image, i) => {
                            return (
                                <div key={i} className="grid-item">
                                    <Image
                                        source={{uri: image.src}}
                                        style={{width: 200, height: 200}}
                                        onError={event => {
                                            event.target.src = {loading_icon}
                                            event.onerror = null
                                        }}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </View>
        </div>
    );
}

export default Gallery;
