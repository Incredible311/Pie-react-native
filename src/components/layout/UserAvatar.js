/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View, Text, StyleSheet, Image
} from 'react-native';

const UserAvatar = (props) => {


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../../assets/img/avatar2.png')}
                    resizeMode="cover"
                    style={styles.avatar}
                />
                <View style={styles.nameView}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.follow}>{props.follow} Follower</Text>
                </View>
            </View>
            <Image
                source={require('../../../assets/img/sold.png')}
                resizeMode="contain"
                style={styles.sold}
            />
        </View>
    );
};
export default UserAvatar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    content: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    avatar: {
        borderRadius: 100,
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#22B7ED'
    },

    name: {
        color: '#393939',
        fontSize: 12
    },

    follow: {
        color: '#393939',
        fontSize: 12
    },

    nameView: {
        alignSelf: 'center',
        textAlign: 'left',
        marginLeft: 10
    },

    sold: {
        width: 20
    }
})

