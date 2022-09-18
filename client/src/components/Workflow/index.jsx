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
function Workflow() {

  return (
          <Text style={styles.baseText}>
              <Text style={styles.titleText}>
                  Workflow
                  {"\n"}
                  {"\n"}
              </Text>
              <Text numberOfLines={6}>
                  Uploader les fichiers d'image
                  {"\n"}
                  Recuperer le cid
                  {"\n"}
                  Recuperer les json et mettre dedans l'uri des images
                  {"\n"}
                  Uploader les JSON et recuperer le cid
                  {"\n"}
                  Ensuite: modifier le NFTS contract avec le cid des json</Text>
          </Text>
  );
}

export default Workflow;
