/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import { MainBlue } from '../../assets/styles/styles';

const WeekScheduleBox = (props) => {


    return (
        <View style={props.weekDay == props.index ? (styles.weekDaySelect) : (styles.weekDay)}>
            <Text style={[styles.weekDayText, { color: props.weekDay == props.index ? '#ffffff' : '#000000' }]}>{props.weekDayText}</Text>
            <Text style={[styles.weekDayIndex, { color: props.weekDay == props.index ? '#ffffff' : '#000000' }]}>{props.index + 14}</Text>
        </View>
    );
};
export default WeekScheduleBox;

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
        elevation: 2
    },

    weekDaySelect: {
        marginHorizontal: 5,
        width: 60,
        height: 80,
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 10,
        borderRadius: 7,
        backgroundColor: '#049D06'
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

