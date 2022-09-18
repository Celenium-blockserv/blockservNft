import {useState} from "react";
import Title from "./Title";
import React from "react";
import {Text, StyleSheet, TextInput, Image} from "react-native";
import Dropzone from "react-dropzone";

const {NFTStorage} = require("nft.storage/dist/bundle.esm.min.js");


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    dropzone: {
        padding: 20,
        border: "3px blue dashed",
        width: '60%',
        margin: 'auto'
    }
});

function NftImagesUpload() {

    const [nftApiKey, onChangeNftApiKey] = useState("NFT Storage API Key");
    const [choosenNftImagesList, onChangeChoosenNftImagesList] = useState([]);

    let NFTStorageClient = {};

    const uploadFiles = async () => {
        console.log('uploadFiles');
        let imagesToUpload = []
        choosenNftImagesList.forEach(file => {
            console.log(file);
            imagesToUpload.push(new File([file], file.path))
        })
        console.log(imagesToUpload);
        NFTStorageClient = new NFTStorage({token: nftApiKey});

        const cid = await NFTStorageClient.storeDirectory(imagesToUpload);
        console.log(cid);
        console.log('https://' + cid + '.ipfs.nftstorage.link');

    };

    return (
        <div className="demo">
            <Title/>
            <Text>Api Key = </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNftApiKey}
                value={nftApiKey}
            />
            <div style={styles.dropzone}>
                <Dropzone onDrop={acceptedFiles => {
                    onChangeChoosenNftImagesList(acceptedFiles);
                    console.log(acceptedFiles);
                }}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop NFT Images to upload</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

            </div>
            <ul>
                {
                    choosenNftImagesList.map((file) => (
                        <li key={file.path}>
                            {file.path} - {file.size} bytes
                        </li>
                    ))
                }
            </ul>
            <button type="submit" className="btn" onClick={uploadFiles}>Upload files</button>

        </div>
    );
}

export default NftImagesUpload;
