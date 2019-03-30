import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import DefaultInput from '../ui/DefaultInput';

const placeInput = props => (

  <DefaultInput
    placeholder="Place Name"
    value={props.placeName}
    onChangeText={props.onChangeText}
  />
);

export default placeInput;
