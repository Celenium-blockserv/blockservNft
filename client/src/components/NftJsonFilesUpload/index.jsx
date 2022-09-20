import {useState} from "react";
import Title from "./Title";
import React from "react";
import {Text, StyleSheet, TextInput} from "react-native";
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

function NftJsonFilesUpload({setUploadedJsonFilesList, cid}) {

    const [nftApiKey, onChangeNftApiKey] = useState("");
    const [choosenNftJsonFilesList, onChangeChoosenNftJsonFilesList] = useState([]);

    let NFTStorageClient = {};


    async function parse(file) {
        const reader = new FileReader();
        reader.readAsText(file);
        const result = await new Promise((resolve, reject) => {
            reader.onload = function(event) {
                resolve(reader.result)
            }
        })
        console.log(result)
        return result;
    }


    async function setImageAddressInList(selectedFiles, cidForReplace) {
        let acceptedFiles = [];

        // mettre cela dans une async
        for(let file of selectedFiles) {
            let fileContent = await parse(file);
            let replacedContent = toFile(JSON.parse(fileContent), file.name, cidForReplace);
            acceptedFiles.push(replacedContent);
        }

        console.log(acceptedFiles)
        return acceptedFiles;
    }

    function toFile(jsonObject, fileName, cid) {
        // NewUriToReplace
        let ipfsImageAddr = jsonObject.image;
        ipfsImageAddr = ipfsImageAddr.replace('NewUriToReplace', cid);
        jsonObject.image = ipfsImageAddr;
        console.log(jsonObject);
        let jsonAsString = JSON.stringify(jsonObject);
        let myBlob = new Blob([jsonAsString], {type: "application/json"});
        let file = new File([myBlob], fileName);
        return file;
    }

    const uploadFiles = async () => {
        console.log('uploadFiles');
        NFTStorageClient = new NFTStorage({token: nftApiKey});

        const cid = await NFTStorageClient.storeDirectory(choosenNftJsonFilesList);
        console.log(cid);
        console.log('https://' + cid + '.ipfs.nftstorage.link');

        let ipfsJsonFilesList = choosenNftJsonFilesList.map(file => {
            return {
                'cid': cid,
                path: 'https://' + cid + '.ipfs.nftstorage.link/' + file.name,
                ipfs: 'ipfs://' + cid + '/' + file.name
            }
        })
        console.log('ipfsJsonFilesList');
        console.log(ipfsJsonFilesList);
        setUploadedJsonFilesList(ipfsJsonFilesList);

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
                <Dropzone onDrop={async (selectedFiles) => {
                    // Replace NewUriToReplace by cid of images in json files
                    let acceptedFiles = await setImageAddressInList(selectedFiles,cid)
                    onChangeChoosenNftJsonFilesList(acceptedFiles);
                    console.log('acceptedFiles');
                    console.log(acceptedFiles);

                }}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop NFT json files to upload</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

            </div>
            <ul>
                {
                    choosenNftJsonFilesList.map((file) => (
                        <li key={file.name}>
                            {file.name} - {file.size} bytes
                        </li>
                    ))
                }
            </ul>
            <button type="submit" className="btn" onClick={uploadFiles}>Upload files</button>

        </div>
    );
}

export default NftJsonFilesUpload;
