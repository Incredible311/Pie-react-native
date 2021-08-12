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

const ButtonBox = (props) => {


    return (
        <View >
            <TouchableOpacity
                style={styles.submitBtn}
                activeOpacity={0.6}
                onPress={props.submit}
            >
                <Text style={styles.submitText}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ButtonBox;

const styles = StyleSheet.create({
    submitBtn: {
        height: 40,
        borderRadius: 5,
        backgroundColor: MainBlue,
        color: '#ffffff',
        alignItems: 'center',
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 10
    },

    submitText: {
        fontSize: 15,
        color: '#ffffff',
    },
})

