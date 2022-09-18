import React, { useState, useEffect } from "react";
import {  View, Image } from 'react-native';

import Title from "./Title";


import getImages from "../../content/DataUtils";

function Gallery() {
    const [images, setImages] = useState([]);

   // setImages(getImages());
    useEffect(() => {
        setImages(getImages());
    }, []);

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
                                    source={{uri: image.src}}
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

export default Gallery;
