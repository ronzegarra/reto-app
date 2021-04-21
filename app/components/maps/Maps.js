//var Dimensions = require("Dimensions");

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        {
          name: 'Ripley Arequipa',
          coordinates: {
            latitude: -16.4185595,
            longitude: -71.5156015,
          },
        },
        {
          name: 'Ripley Lima',
          coordinates: {
            latitude: -12.0940761,
            longitude: -77.0270453,
          },
        },
        
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -16.409046,
            longitude: -71.537453,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.state.places.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.coordinates.latitude,
                  longitude: item.coordinates.longitude,
                }}>
                <Callout>
                  <View
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 5,
                    }}
                  >
                    <Text>
                      {item.name}
                    </Text>
                  </View>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
