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

const MenuItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.menuItem} onPress={() => props.navigator.navigate(props.route)}>
            <Text style={styles.itemText}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const Menu = (props) => {


    return (
        <View style={styles.container}>

            <MenuItem name={'User Landing'} navigator={props.navigator} route={'Landing'}/>
            <MenuItem name={'User Detail'} navigator={props.navigator} route={'UserView'}/>
            <MenuItem name={'Influencer'} navigator={props.navigator} route={'Influencer'}/>
            <MenuItem name={'User Feed'} navigator={props.navigator} route={'UserFeed'}/>
            <MenuItem name={'Questions'} navigator={props.navigator} route={'Questions'}/>
            <MenuItem name={'Host Scorecard'} navigator={props.navigator} route={'Scorecard'}/>
            <MenuItem name={'Host Schedule'} navigator={props.navigator} route={'Schedule'}/>
        </View>
    );
};
export default Menu;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 30,
        backgroundColor: '#ffffff',
        paddingTop: 40
    },
    menuItem: {
        marginVertical: 5
    },
    focusedMenuItem: {

    },

    itemText: {
        fontSize: 20,
        color: MainBlue
    }
})

