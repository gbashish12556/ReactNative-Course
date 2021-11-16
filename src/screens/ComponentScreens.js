import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentScreens = function() {
    const myName = 'Ashish'
    return (
        <View>
            <Text style={style.textStyle} >My name is {myName}</Text>
            </View>
    );
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});
export default ComponentScreens
