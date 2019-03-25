import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/list-item/ListItem';
import PlaceInput from './src/components/place-input/PlaceInput';

export default class App extends Component {
  state = {
    places: []
  };


  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };


  render() {

    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));

    return (
      <View style={styles.container}>
        
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      
        <View style={styles.listContainer}>{placesOutput}</View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  placeInputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
