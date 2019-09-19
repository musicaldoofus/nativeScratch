import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';

export default function ProfileScreen() {
  return (
    <View style={profileStyles.profileContainer}>
      <View style={profileStyles.headerContainer}>
        <Header
          label="Profile"
        />
        <View style={profileStyles.headerBtnView}>
          <Button onPress={handleProfileSave} title="Save"/>
        </View>
      </View>
    </View>
  )
}

function handleProfileSave() {
  console.log('handleProfileSave');
}

ProfileScreen.navigationOptions = {
  header: null
};

const profileStyles = StyleSheet.create({
  profileContainer: {
    padding: 32
  },
  headerContainer: {
    flexDirection: 'row'
  },
  header: {
    flex: 5
  },
  headerBtnView: {
    flex: 1
  }
})