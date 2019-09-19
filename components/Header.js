import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const headerStyle = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingBottom: 32
    },
    text: {
        fontSize: 32
    }
});

const Header = (props) => {
    console.log(props);
    const {center, label, style = {}} = props;
    return (
        <View style={headerStyle.container}>
            <Text style={[headerStyle.text, style, center ? {textAlign: 'center'} : {}]}>{label}</Text>
        </View>
    )
}

export default Header;