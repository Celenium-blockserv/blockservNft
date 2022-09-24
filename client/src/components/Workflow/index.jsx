import React from "react";
import { Text, StyleSheet } from "react-native";
import Title from "./Title";

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Montserrat, sans-serif"
    },
});
function Workflow() {
  return (<>
      <Title />
          <Text style={styles.baseText}>
                  This page gives you acces to your NFT collection.
                  {"\n"}
                  In the Gallery, you can see all NFTs that are already part of the collection.
                  {"\n"}
                  Other paragraphs gives you the opportunity to add more NFTs to this collection
          </Text>
  </>
  );
}

export default Workflow;
