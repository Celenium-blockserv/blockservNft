import React from "react";
import {  View, Image } from 'react-native';

import Title from "./Title";


function IpfsImagesGallery({images}) {



  return (
    <div className="demo">
      <Title />

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <div className="grid-container">
                {
                    images.map((image,i) => {
                        return (
                            <div key={i} className="grid-item">
                                <Image
                                    source={{uri: image.path}}
                                    style={{width: 200, height: 200}}
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

export default IpfsImagesGallery;
