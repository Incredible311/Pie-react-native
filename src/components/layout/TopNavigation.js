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
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Entypo';
import { MainBlue } from '../../assets/styles/styles';

const TopNavigation = (props) => {


    return (
        <View style={styles.container}>
            <View style={styles.topNavView}>
                <Button labelStyle={styles.topNavBtnLabel}
                    color="#ffffff"
                    icon="arrow-left"
                    onPress={() => {
                        props.onSideMenu
                        props.navigation.goBack()
                    }}></Button>
                <Text style={styles.topNavText}>{props.name}</Text>
            </View>
            {/* <TouchableOpacity style={styles.menuBtn} activeOpacity={0.6} onPress={props.onSideMenu}>
                <Icon name="menu" size={24} color={'#000000'} />
            </TouchableOpacity> */}
        </View>
    );
};
export default TopNavigation;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    topNavView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        marginTop: -20,
        marginLeft: -15,
        marginBottom: 10
    },

    topNavBtnLabel: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000'
    },

    topNavText: {
        fontSize: 20,
        fontWeight: 'bold',

    },

    menuBtn: {
        width: 36,
        height: 36,
        padding: 5,
        borderRadius: 100,
        borderWidth: 1
    }
})

