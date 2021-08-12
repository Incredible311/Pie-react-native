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
 import { ContainerStyle, QuestionsStyle, MainBlue } from '../assets/styles/styles';
 import ButtonBox from '../components/layout/ButtonBox';
 import TimeSelectBox from '../components/layout/TimeSelectBox';
 import { ToggleButton } from 'react-native-paper';
 
 const Questions = ({ navigation }) => {
 
     const [time, setTime] = useState(0);
     const [callType, setCallType] = useState(0);
 
     return (
         <SafeAreaView style={ContainerStyle.container}>
             <ScrollView style={ContainerStyle.scrollView}>
                 <View style={ContainerStyle.content}>
                     <StatusBar />
                     <TopNavigation name={'Questions'} navigation={navigation} />
 
                     <View style={QuestionsStyle.questionView}>
                         <Text style={QuestionsStyle.questionNum}>1.</Text>
                         <Text style={QuestionsStyle.questionText}>how many jobs should I apply for at one time?</Text>
                     </View>

                     <View style={QuestionsStyle.questionView}>
                         <Text style={QuestionsStyle.questionNum}>2.</Text>
                         <Text style={QuestionsStyle.questionText}>should I use the same font for everything on the resume?</Text>
                     </View>

                     <View style={QuestionsStyle.questionView}>
                         <Text style={QuestionsStyle.questionNum}>3.</Text>
                         <Text style={QuestionsStyle.questionText}>how can I better articulate my experience so that I can really show how valuable I can be to the organization?</Text>
                     </View>

                 </View>
             </ScrollView>
         </SafeAreaView>
     );
 };
 export default Questions;
 
 