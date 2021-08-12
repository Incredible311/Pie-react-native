/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { MainBlue } from '../../assets/styles/styles';

const UserAvatarBig = (props) => {


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../../assets/img/avatar2.png')}
                    resizeMode="cover"
                    style={styles.avatar}
                />
                <View style={styles.nameView}>
                    <Text style={styles.name}>Video</Text>
                    <Text style={styles.follow}>{props.video}</Text>
                </View>
                <View style={styles.nameView}>
                    <Text style={styles.name}>Following</Text>
                    <Text style={styles.follow}>{props.follow}</Text>
                </View>
                <View style={styles.nameView}>
                    <Text style={styles.name}>Likes</Text>
                    <Text style={styles.follow}>{props.like}</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={styles.username}>{props.name}</Text>
                    <Text style={styles.subtext}>video_making_specialist</Text>
                    <Text style={styles.subtext}>Great_video_dubbing_skill</Text>
                </View>
                <View style={styles.socialView}>
                    <Icon name="twitter" size={20} color={MainBlue} style={styles.socialViewIcon}/>
                    <Text style={styles.socialViewText}>Twitter</Text>
                </View>
                <View style={styles.socialView}>
                    <Icon name="instagram" size={20} color={MainBlue} style={styles.socialViewIcon}/>
                    <Text style={styles.socialViewText}>Instagram</Text>
                </View>
                <View style={styles.socialView}>
                    <Icon name="facebook" size={20} color={MainBlue} style={styles.socialViewIcon}/>
                    <Text style={styles.socialViewText}>Facebook</Text>
                </View>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.userActionBtn} activeOpacity={0.6}>
                    <Text style={styles.userActionBtnText}>Events</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userActionBtn} activeOpacity={0.6}>
                    <Text style={styles.userActionBtnText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userActionBtn} activeOpacity={0.6}>
                    <Text style={styles.userActionBtnText}>Store</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userActionBtn} activeOpacity={0.6}>
                    <Text style={styles.userActionBtnText}>Videos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default UserAvatarBig;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center'
    },

    content: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
        justifyContent: 'space-between',
    },

    avatar: {
        borderRadius: 100,
        width: 66,
        height: 66,
        borderColor: '#22B7ED',
        borderWidth: 2
    },

    name: {
        color: '#393939',
        fontSize: 17
    },

    follow: {
        color: '#22B7ED',
        fontSize: 15
    },

    nameView: {
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: 10,
        alignItems: 'center'
    },

    socialView: {
        textAlign: 'center',
        alignItems: 'center'
    },

    socialViewText: {
        fontSize: 12,
        fontWeight: '100'
    },

    socialViewIcon: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#22B7ED',
        width: 36,
        height: 36,
        padding: 8
    },

    username: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    }, 

    subtext: {
        fontSize: 11,
        fontWeight: '100',
        marginVertical: 5
    },

    userActionBtn: {
        marginTop: 10,
        borderColor: '#22B7ED',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 50
    },

    userActionBtnText: {
        color: '#22B7ED',
        fontSize: 14
    }

})

