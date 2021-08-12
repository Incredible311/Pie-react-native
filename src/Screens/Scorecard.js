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
import { ContainerStyle, ScorecardStyle } from '../assets/styles/styles';
import { ToggleButton } from 'react-native-paper';

const Scorecard = ({ navigation }) => {

    const [time, setTime] = useState(0);
    const [callType, setCallType] = useState(0);

    return (
        <SafeAreaView style={ContainerStyle.container}>
            <ScrollView style={ContainerStyle.scrollView}>
                <View style={ContainerStyle.content}>
                    <StatusBar />
                    <TopNavigation name={'Host Scorecard'} navigation={navigation} />

                    <View style={ScorecardStyle.scoreview}>
                        <View style={ScorecardStyle.scorelist}>
                            <Text style={ScorecardStyle.scoretext}>Shows to Date</Text>
                            <Text style={ScorecardStyle.scorenum}>50</Text>
                        </View>
                        <View style={ScorecardStyle.scorelist}>
                            <Text style={ScorecardStyle.scoretext}>Free Shows</Text>
                            <Text style={ScorecardStyle.scorenum}>20</Text>
                        </View>
                        <View style={ScorecardStyle.scorelist}>
                            <Text style={ScorecardStyle.scoretext}>Paid Shows</Text>
                            <Text style={ScorecardStyle.scorenum}>30</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#dddddd',
                                borderBottomWidth: 1,
                                marginVertical: 10,
                                marginHorizontal: -20
                            }}
                        />
                        <View style={ScorecardStyle.scorelist}>
                            <Text style={ScorecardStyle.scoretext}>Average viewer per show</Text>
                            <Text style={ScorecardStyle.scorenum}>1000</Text>
                        </View>
                        <View style={ScorecardStyle.scorelist}>
                            <Text style={ScorecardStyle.scoretext}>Average viewer per paid</Text>
                            <Text style={ScorecardStyle.scorenum}>1000</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#dddddd',
                                borderBottomWidth: 1,
                                marginVertical: 10,
                                marginHorizontal: -20
                            }}
                        />
                        <View style={ScorecardStyle.scorelist}>
                            <Text style={ScorecardStyle.scoretext}>Average $ per show</Text>
                            <Text style={ScorecardStyle.scorenum}>$75</Text>
                        </View>
                        <View style={ScorecardStyle.scorelist}>
                            <Text style={ScorecardStyle.scoretext}>Average $ per 1 on 1</Text>
                            <Text style={ScorecardStyle.scorenum}>$90</Text>
                        </View>
                        <View style={ScorecardStyle.scorelist}>
                            <Text style={ScorecardStyle.scoretext}>Average $ per group show</Text>
                            <Text style={ScorecardStyle.scorenum}>$90</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Scorecard;

