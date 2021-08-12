/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    View, Image, SafeAreaView, ScrollView, Text, StatusBar
} from 'react-native';
import TopNavigation from '../components/layout/TopNavigation'
import Icon from 'react-native-vector-icons/Entypo';
import { ContainerStyle, UserFeedStyle, MainBlue } from '../assets/styles/styles';
import ButtonBox from '../components/layout/ButtonBox';
import TimeSelectBox from '../components/layout/TimeSelectBox';
import { ToggleButton } from 'react-native-paper';

const UserFeed = ({ navigation }) => {

    const [time, setTime] = useState(0);
    const [callType, setCallType] = useState(0);

    return (
        <SafeAreaView style={ContainerStyle.container}>
            <ScrollView style={ContainerStyle.scrollView}>
                <View style={ContainerStyle.content}>
                    <StatusBar />
                    <TopNavigation name={'User Feed'} navigation={navigation} />

                    <View style={UserFeedStyle.feedView}>
                        <Image
                            source={require('../../assets/img/check-icon.png')}
                            resizeMode="contain"
                        />
                        <Text style={UserFeedStyle.feedText}>2:30 PM "Cooking with Mushroom" by <Text style={{ color: MainBlue }}>@Varun_Bansal</Text></Text>
                    </View>
                    <View style={UserFeedStyle.feedView}>
                        <Image
                            source={require('../../assets/img/check-icon.png')}
                            resizeMode="contain"
                        />
                        <Text style={UserFeedStyle.feedText}>4:00 PM "How to Start a Business" by <Text style={{ color: MainBlue }}>@mark_Zuck</Text></Text>
                    </View>
                    <View style={UserFeedStyle.feedView}>
                        <Image
                            source={require('../../assets/img/check-icon.png')}
                            resizeMode="contain"
                        />
                        <Text style={UserFeedStyle.feedText}>5:00 PM "How to Active in a Business" by <Text style={{ color: MainBlue }}>@mark_Zuck</Text></Text>
                    </View>
                    <View style={UserFeedStyle.feedView}>
                        <Image
                            source={require('../../assets/img/check-icon.png')}
                            resizeMode="contain"
                        />
                        <Text style={UserFeedStyle.feedText}>6:00 PM "Which Social Platform is best for Business" by <Text style={{ color: MainBlue }}>@Varun_Bansal</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default UserFeed;

