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
import Icon from 'react-native-vector-icons/Entypo';

const TimeSelectBox = (props) => {


    return (
        <TouchableOpacity onPress={props.selectTime} activeOpacity={0.8}>
            <View style={props.time == props.index ? (styles.timeSlotItemSelect) : (styles.timeSlotItem)}>
                <Icon name="clock" size={20} color={props.time == props.index ? '#ffffff' : MainBlue} style={styles.clockIcon} />
                <Text style={{ color: props.time == props.index ? '#ffffff' : MainBlue }}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};
export default TimeSelectBox;

const styles = StyleSheet.create({
    timeSlotItem: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: MainBlue,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        color: MainBlue,
        backgroundColor: '#ffffff'
    },

    timeSlotItemSelect: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: MainBlue,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        color: MainBlue,
        backgroundColor: MainBlue
    },

    clockIcon: {
        marginRight: 5
    }
})

