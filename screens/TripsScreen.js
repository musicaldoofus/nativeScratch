import React from 'react';
import { View, TouchableOpacity, Text, Button, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

const cardButtonStyles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 24
  },
  labelText: {
    fontSize: 16
  },
  date: {
    fontSize: 12
  }
})

const CardButton = ({trip, onPress}) => {
  return (
    <TouchableOpacity style={cardButtonStyles.container} onPress={onPress}>
      <View>
        <Text style={cardButtonStyles.labelText}>{trip.destination.label}</Text>
      </View>
      <View>
        <Text style={cardButtonStyles.date}>{trip.destination.scheduleTime}</Text>
      </View>
    </TouchableOpacity>
  )
}

const handleUpcomingPress= (e) => {
  //console.log(e);
}

const handlePastPress= (e) => {
  //console.log(e);
}

const userTrips = [
  {
    key:0,
    destination: {
      label: 'Chicago O\'Hare',
      code: 'CHI',
      scheduleTime: new Date().toDateString()
    },
    departure: {
      label: 'Phoenix Sky Harbor International',
      code: 'PHX',
      scheduleTime: new Date().toDateString()
    },
    notes: [
      {
        label: 'Remember to pick up client after landing',
        timestamp: new Date().toDateString()
      }
    ]
  }
];

const handleTripPress = (trip) => {
  console.log(trip);
}

export default function TripsScreen() {
  return (
    <View style={tripStyles.tripsContainer}>
      <View style={tripStyles.headerContainer}>
        <Header
          label="My trips"
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Button onPress={handleUpcomingPress} title="Upcoming"/>
        </View>
        <View>
          <Button onPress={handlePastPress} title="Past"/>
        </View>
      </View>
      <ScrollView style={tripStyles.scrollContainer}>
        {userTrips.map(trip => {
          return (
            <CardButton
              key={trip.key}
              trip={trip}
              onPress={() => handleTripPress(trip)}
            />
          )
        })}
      </ScrollView>
    </View>
  );
}

TripsScreen.navigationOptions = {
  header: null
};

const tripStyles = StyleSheet.create({
  tripsContainer: {
    padding: 32
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 32
  },
  scrollContainer: {
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});