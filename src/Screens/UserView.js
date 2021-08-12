/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    View, Image, SafeAreaView, ScrollView, Text, StatusBar
} from 'react-native';
import { Button } from 'react-native-paper'
import TopNavigation from '../components/layout/TopNavigation'
import Icon from 'react-native-vector-icons/Entypo';
import { ContainerStyle, UserViewStyle, MainBlue } from '../assets/styles/styles';
import UserAvatarBig from '../components/layout/UserAvatarBig';
import ButtonBox from '../components/layout/ButtonBox';

const UserView = ({ navigation }) => {



    return (
        <SafeAreaView style={ContainerStyle.container}>
            <ScrollView style={ContainerStyle.scrollView}>
                <View style={ContainerStyle.content}>
                    <StatusBar/>
                    <TopNavigation name={'Amelia'} navigation={navigation}/>

                    <UserAvatarBig name={'Amelia Jessa'} video={'150'} follow={'700'} like={'500'} />

                    <View
                        style={{
                            borderBottomColor: '#cccccc',
                            borderBottomWidth: 1,
                            marginVertical: 20,
                            marginHorizontal: -20
                        }}
                    />

                    <Text style={UserViewStyle.subTitleText}>Classes</Text>
                    <View style={UserViewStyle.subContentView}>
                        <View style={UserViewStyle.subContentLeftView}>
                            <Image
                                source={require('../../assets/img/week.png')}
                                resizeMode="contain"
                                style={UserViewStyle.subContentIcon}
                            />
                            <Text style={UserViewStyle.subContentLeftText}>12 Week</Text>
                        </View>
                        <Text style={UserViewStyle.subContentRightText}>$59</Text>
                    </View>

                    <Text style={UserViewStyle.subTitleText}>Service</Text>
                    <View style={UserViewStyle.subContentView}>
                        <View style={UserViewStyle.subContentLeftView}>
                            <Image
                                source={require('../../assets/img/review.png')}
                                resizeMode="contain"
                                style={UserViewStyle.subContentIcon}
                            />
                            <Text style={UserViewStyle.subContentLeftText}>Resume Review</Text>
                        </View>
                        <Text style={UserViewStyle.subContentRightText}>$59</Text>
                    </View>

                    <Text style={UserViewStyle.subTitleText}>Products</Text>
                    <View style={UserViewStyle.subContentView}>
                        <View style={UserViewStyle.subContentLeftView}>
                            <Image
                                source={require('../../assets/img/starter.png')}
                                resizeMode="contain"
                                style={UserViewStyle.subContentIcon}
                            />
                            <Text style={UserViewStyle.subContentLeftText}>Starter Kit</Text>
                        </View>
                        <Text style={UserViewStyle.subContentRightText}>$109</Text>
                    </View>

                    <View style={{marginBottom: 0, marginTop: 'auto'}}><ButtonBox name={'BOOK APPOINTMENT'}/></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default UserView;

