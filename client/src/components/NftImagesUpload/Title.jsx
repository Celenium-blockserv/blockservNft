import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Arial"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

const nftStorageUrl = 'https://nft.storage/manage/';

function Title() {
  return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          NFT image upload
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={6}>
          Please set the NFT Storage API Key from <a href={nftStorageUrl} className="button">NFTStorage</a>
          {"\n"}
          Then use the file selector to select your images
          {"\n"}
          Then clic on upload
          {"\n"}
          {"\n"}</Text>
      </Text>
  );
}

export default Title;
