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
import PlaceInput from '../../components/place-input/PlaceInput';
import PickImage from '../../components/pick-image/PickImage';
import PickLocation from '../../components/pick-location/PickLocation';
import HeaderText from '../../components/ui/HeaderText';
import MainText from '../../components/ui/MainText';

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"  
  }

  state = {
    placeName: ""
  };

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
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName);
    }
  };

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeaderText>Share a Place with us!</HeaderText>
          </MainText>

          <PickImage />
          
          <PickLocation />

          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <View style={styles.button}>
            <Button
              title="Share the Place!"
              onPress={this.placeAddedHandler}
            />
          </View>
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
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
