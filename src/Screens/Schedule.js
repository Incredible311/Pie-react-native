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
import { ContainerStyle, ScheduleStyle, MainBlue } from '../assets/styles/styles';
import { ToggleButton } from 'react-native-paper';
import UserAvatarBig from '../components/layout/UserAvatarBig';
import WeekScheduleBox from '../components/layout/WeekScheduleBox';

const Schedule = ({ navigation }) => {
    const [weekDay, setWeekDay] = useState(0);

    return (
        <SafeAreaView style={ContainerStyle.container}>
            <ScrollView style={ContainerStyle.scrollView}>
                <View style={ContainerStyle.content}>
                    <StatusBar />
                    <TopNavigation name={'Host Schedule'} navigation={navigation} />

                    <UserAvatarBig name={'Amelia Jessa'} video={'150'} follow={'700'} like={'500'} />
                    <View
                        style={{
                            borderBottomColor: '#dddddd',
                            borderBottomWidth: 1,
                            marginVertical: 15,
                            marginHorizontal: -20
                        }}
                    />

                    <View style={ScheduleStyle.scheduleTitleView}>
                        <Text style={ScheduleStyle.scheduleTitleText}>Today</Text>
                        <Text style={ScheduleStyle.scheduleTitleDate}>17 June 2021</Text>
                    </View>
                    <View style={ScheduleStyle.scheduleTimeView}>
                        <Text style={ScheduleStyle.scheduleTime}>2:30 PM</Text>
                        <Text style={ScheduleStyle.scheduleTimeContent}>Live show in Asteria Kremlin Palace in Turkey</Text>
                    </View>
                    <View style={ScheduleStyle.scheduleTimeView}>
                        <Text style={ScheduleStyle.scheduleTime}>4:30 PM</Text>
                        <Text style={ScheduleStyle.scheduleTimeContent}>Live show in Park  Hotel  Palace in Istanbul</Text>
                    </View>
                    <View style={ScheduleStyle.scheduleTimeView}>
                        <Text style={ScheduleStyle.scheduleTime}>6:00 PM</Text>
                        <Text style={ScheduleStyle.scheduleTimeContent}>Live show in Park  Hotel  Palace in Istanbul</Text>
                    </View>
                    <View style={ScheduleStyle.scheduleTimeView}>
                        <Text style={ScheduleStyle.scheduleTime}>8:00 PM</Text>
                        <Text style={ScheduleStyle.scheduleTimeContent}>Live show in Asteria Kremlin Palace in Turkey</Text>
                    </View>

                    <View
                        style={{
                            borderBottomColor: '#dddddd',
                            borderBottomWidth: 1,
                            marginVertical: 15,
                            marginHorizontal: -20
                        }}
                    />
                    <View style={ScheduleStyle.scheduleTitleView}>
                        <Text style={ScheduleStyle.scheduleTitleText}>Weekly</Text>
                        <Text style={ScheduleStyle.scheduleTitleMonth}>June 2021</Text>
                    </View>
                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 85 }}>
                            <WeekScheduleBox index={0} weekDay={weekDay} weekDayText={'Mon'} />
                            <WeekScheduleBox index={1} weekDay={weekDay} weekDayText={'Tue'} />
                            <WeekScheduleBox index={2} weekDay={weekDay} weekDayText={'Wed'} />
                            <WeekScheduleBox index={3} weekDay={weekDay} weekDayText={'Thu'} />
                            <WeekScheduleBox index={4} weekDay={weekDay} weekDayText={'Fri'} />
                            <WeekScheduleBox index={5} weekDay={weekDay} weekDayText={'Sat'} />
                            <WeekScheduleBox index={6} weekDay={weekDay} weekDayText={'Sun'} />
                        </ScrollView>

                    </View>
                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 20}}>
                            <View style={ScheduleStyle.liveShowView}>
                                <Image
                                    source={require('../../assets/img/live-show-icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 40,
                                    }}
                                />
                                <Text style={{fontSize: 12, marginTop: 5}}>08:00 - 11:00AM</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>@Aksaray</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>Turkey</Text>
                            </View>
                            <View style={ScheduleStyle.liveShowView}>
                                <Image
                                    source={require('../../assets/img/live-show-icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 40,
                                    }}
                                />
                                <Text style={{fontSize: 12, marginTop: 5}}>01:00 - 11:00AM</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>@Aksaray</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>Turkey</Text>
                            </View>
                            <View style={ScheduleStyle.liveShowView}>
                                <Image
                                    source={require('../../assets/img/live-show-icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 40,
                                    }}
                                />
                                <Text style={{fontSize: 12, marginTop: 5}}>04:00 - 06:00AM</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>@Aksaray</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>Turkey</Text>
                            </View>
                            <View style={ScheduleStyle.liveShowView}>
                                <Image
                                    source={require('../../assets/img/live-show-icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 40,
                                    }}
                                />
                                <Text style={{fontSize: 12, marginTop: 5}}>08:00 - 11:00AM</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>@Aksaray</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>Turkey</Text>
                            </View>
                            <View style={ScheduleStyle.liveShowView}>
                                <Image
                                    source={require('../../assets/img/live-show-icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 40,
                                    }}
                                />
                                <Text style={{fontSize: 12, marginTop: 5}}>01:00 - 11:00AM</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>@Aksaray</Text>
                                <Text style={{fontSize: 13, color: MainBlue}}>Turkey</Text>
                            </View>
                            
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Schedule;

