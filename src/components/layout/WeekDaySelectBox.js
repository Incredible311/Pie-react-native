/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { MainBlue } from '../../assets/styles/styles';

const WeekDaySelectBox = (props) => {


    return (
        <TouchableOpacity onPress={props.selectDay} activeOpacity={0.8}>
            <View style={props.weekDay == props.index ? (styles.weekDaySelect) : (styles.weekDay)}>
                <Text style={[styles.weekDayText, { color: props.weekDay == props.index ? '#ffffff' : '#000000' }]}>{props.weekDayText}</Text>
                <Text style={[styles.weekDayIndex, { color: props.weekDay == props.index ? '#ffffff' : '#000000' }]}>{props.index + 14}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default WeekDaySelectBox;

const styles = StyleSheet.create({
    weekDay: {
        marginHorizontal: 5,
        width: 60,
        height: 80,
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#eeeeee',
        backgroundColor: '#ffffff',
        elevation: 5
    },

    weekDaySelect: {
        marginHorizontal: 5,
        width: 60,
        height: 80,
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderRadius: 7,
        backgroundColor: MainBlue,
        elevation: 10
    },

    weekDayIndex: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 9
    },

    weekDayText: {
        fontSize: 15,
        fontWeight: 'bold'        
    }

})

