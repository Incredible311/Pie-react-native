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
import { ContainerStyle, InfluencerStyle, MainBlue } from '../assets/styles/styles';
import ButtonBox from '../components/layout/ButtonBox';
import TimeSelectBox from '../components/layout/TimeSelectBox';
import { ToggleButton } from 'react-native-paper';
import WeekDaySelectBox from '../components/layout/WeekDaySelectBox';

const Influencer = ({ navigation }) => {

    const [time, setTime] = useState(0);
    const [weekDay, setWeekDay] = useState(0);
    const [callType, setCallType] = useState(0);

    return (
        <SafeAreaView style={ContainerStyle.container}>
            <ScrollView style={ContainerStyle.scrollView}>
                <View style={ContainerStyle.content}>
                    <StatusBar />
                    <TopNavigation name={'Influencer'} navigation={navigation} />

                    <Text style={InfluencerStyle.InfluencerTitle}>June 2021</Text>
                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 90 }}>
                            <WeekDaySelectBox index={0} weekDay={weekDay} weekDayText={'Mon'} selectDay={() => setWeekDay(0)} />
                            <WeekDaySelectBox index={1} weekDay={weekDay} weekDayText={'Tue'} selectDay={() => setWeekDay(1)} />
                            <WeekDaySelectBox index={2} weekDay={weekDay} weekDayText={'Wed'} selectDay={() => setWeekDay(2)} />
                            <WeekDaySelectBox index={3} weekDay={weekDay} weekDayText={'Thu'} selectDay={() => setWeekDay(3)} />
                            <WeekDaySelectBox index={4} weekDay={weekDay} weekDayText={'Fri'} selectDay={() => setWeekDay(4)} />
                            <WeekDaySelectBox index={5} weekDay={weekDay} weekDayText={'Sat'} selectDay={() => setWeekDay(5)} />
                            <WeekDaySelectBox index={6} weekDay={weekDay} weekDayText={'Sun'} selectDay={() => setWeekDay(6)} />
                        </ScrollView>

                    </View>

                    <Text style={InfluencerStyle.InfluencerTitle} >Time Slot</Text>
                    <View style={InfluencerStyle.timeSlotView}>
                        <TimeSelectBox time={time} index={0} name={'5:30 PM'} selectTime={() => setTime(0)} />
                        <TimeSelectBox time={time} index={1} name={'6:00 PM'} selectTime={() => setTime(1)} />
                        <TimeSelectBox time={time} index={2} name={'6:30 PM'} selectTime={() => setTime(2)} />
                    </View>
                    <View style={InfluencerStyle.timeSlotView}>
                        <TimeSelectBox time={time} index={3} name={'7:00 PM'} selectTime={() => setTime(3)} />
                        <TimeSelectBox time={time} index={4} name={'7:30 PM'} selectTime={() => setTime(4)} />
                        <TimeSelectBox time={time} index={5} name={'8:00 PM'} selectTime={() => setTime(5)} />
                    </View>

                    <Text style={InfluencerStyle.InfluencerTitle}>Rate</Text>
                    <Text style={InfluencerStyle.rateNum}>$100 per hour</Text>

                    <View>
                        <Text style={InfluencerStyle.callTypeText}>Type of Call</Text>
                        <View style={InfluencerStyle.callTypeView}>
                            <ToggleButton
                                icon={() => <Text style={{ color: callType === 0 ? '#FFFFFF' : MainBlue, fontSize: 17 }}>Video</Text>}
                                value="Video"
                                color='#ffffff'
                                onPress={() => setCallType(0)}
                                style={callType === 0 ? InfluencerStyle.toggleBtnSelect : InfluencerStyle.toggleBtn}
                            />
                            <ToggleButton
                                icon={() => <Text style={{ color: callType === 1 ? '#FFFFFF' : MainBlue, fontSize: 17 }}>Phone</Text>}
                                value="Phone"
                                color='#ffffff'
                                onPress={() => setCallType(1)}
                                style={callType === 1 ? InfluencerStyle.toggleBtnSelect : InfluencerStyle.toggleBtn}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 0, marginTop: 'auto' }}><ButtonBox name={'BOOK APPOINTMENT'} /></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Influencer;

