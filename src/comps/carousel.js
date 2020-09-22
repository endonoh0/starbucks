import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ScrollView
} from 'react-native';

const Carousel = ({imageUri, description}) => {
  return (
    <ScrollView>
      <View style={{ height: 300, width: 300, marginLeft: 20 }}>
        <View style={{ flex: 2 }}>
          <Image source={imageUri}
            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Carousel;
