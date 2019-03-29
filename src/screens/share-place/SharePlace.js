import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';

import { connect } from 'react-redux';

import { addPlace } from '../../store/actions/index';
import DefaultInput from '../../components/ui/DefaultInput';
import HeaderText from '../../components/ui/HeaderText';
import MainText from '../../components/ui/MainText';
import imagePlaceHolder from '../../assets/img/beautiful-place.jpg';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }
  
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeaderText>Share a Place with us!</HeaderText>
          </MainText>

          <View style={styles.placeholder}>
            <Image source={imagePlaceHolder} style={styles.imagePreview}/>
          </View>
          
          <View style={styles.button}>
            <Button title="Pick Image" />
          </View>

          <View style={styles.placeholder}>
            <Text>Map</Text>
          </View>
         
          <View style={styles.button}>
            <Button title="Locate Me" />
          </View>

          <DefaultInput placeholder="Place Name" />
          <Button title="Share the Place!" />
        </View>
      </ScrollView>
    );
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  imagePreview: {
    width: "100%",
    height: "100%"
  },
  button: {
    margin: 8
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
