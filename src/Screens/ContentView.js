/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    View, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, StatusBar
} from 'react-native';
import { Button } from 'react-native-paper'
import Video from 'react-native-video';
import UserAvatar from '../components/layout/UserAvatar'
import TopNavigation from '../components/layout/TopNavigation'
import Icon from 'react-native-vector-icons/Entypo';
import { ContainerStyle, ContentViewStyle, MainBlue } from '../assets/styles/styles'

const ContentView = ({navigation}) => {

    const onUserView = () => {
        navigation.navigate('UserView');
    }
    return (
        <SafeAreaView style={ContainerStyle.container}>
            <ScrollView style={ContainerStyle.scrollView}>
                <View style={ContainerStyle.content}>
                    <StatusBar/>
                    <TopNavigation name={'Video'} navigation={navigation}/>

                    <TouchableOpacity onPress={() => onUserView()} activeOpacity={0.6}><UserAvatar name={'Amelia'} follow={'20k'}/></TouchableOpacity>
                    <Video 
                        source={require('../../assets/video/4k.mp4')}
                        posterResizeMode="center"
                        resizeMode="contain"
                        // controls={true}
                        fullscreen={true}
                        style={ContentViewStyle.backgroundVideo} />
                    
                    <View style={ContentViewStyle.videoTagSubView}>
                        <View>
                            <View style={ContentViewStyle.videoRankView}>
                                <Icon name="calendar" size={20} color={MainBlue} />
                                <Text style={ContentViewStyle.postDateText}>Posted on 13 June 2021</Text>
                            </View>
                            <View>
                                <Text>#live Show</Text>
                                <Text>#live Events</Text>
                                <Text>#Events</Text>
                                <Text>#show</Text>
                                <Text>#Book Show</Text>
                                <Text>#live Event Book</Text>
                            </View>
                        </View>
                        
                        <View style={ContentViewStyle.videoRankView}>
                            <Icon name="eye" size={20} color={MainBlue} />
                            <Text style={ContentViewStyle.viewNumText}>#31k View</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default ContentView;

