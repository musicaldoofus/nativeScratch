import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

const userPasses = [
  /*{
    key: 0,
    provider: 'gmail'
  }*/
];

export default function PassScreen() {
  return (
    <View style={passStyles.passContainer}>
      {userPasses.length === 0 ? (
        <View style={passStyles.noPasses}>
          <Header center label="No passes loaded yet."/>
        </View>
      ) : (
        <View>
          <Text>[pass]</Text>
        </View>
      )}
    </View>
  );
}

PassScreen.navigationOptions = {
  header: null,
};

const passStyles = StyleSheet.create({
  passContainer: {
    justifyContent: 'center',
    height: '100%'
  },
  noPasses: {
    justifyContent: 'center'
  }
});