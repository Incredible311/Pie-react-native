/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Button } from 'react-native-paper'
import {
    View, Image, Text, SafeAreaView, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SelectDropdown from 'react-native-select-dropdown';
import { LandingStyle, MainBlue } from '../assets/styles/styles'
import CarouselView from '../components/layout/CarouselView'

const Landing = ({ navigation }) => {
    useEffect(() => {

    }, []);

    const onBackBtn = () => {
        navigation.replace('Signup');
    }

    return (
        <SafeAreaView style={LandingStyle.container}>
            <ScrollView style={LandingStyle.scrollView}>
                <View style={LandingStyle.content}>
                    <View style={LandingStyle.topNavView}>
                        <Button labelStyle={LandingStyle.topNavBtnLabel} color="#ffffff" icon="arrow-left" onPress={() => onBackBtn()}></Button>
                        <Text style={LandingStyle.topNavText}>User Landing Page</Text>
                    </View>

                    <View style={LandingStyle.selectTagView}>
                        <SelectDropdown
                            data={['#Music', '#Health', '#Sports']}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            renderDropdownIcon={() => <Icon name="chevron-down" size={20} color={MainBlue} />}
                            dropdownIconPosition="right"
                            defaultButtonText="Hashtags"
                            buttonStyle={LandingStyle.seletBoxButton}
                            buttonTextStyle={LandingStyle.selectBoxText}
                            dropdownStyle={LandingStyle.dropdownContent}
                            rowTextStyle={LandingStyle.dropdownRowText}
                        />

                        <SelectDropdown
                            data={['#Music', '#Health', '#Sports']}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            renderDropdownIcon={() => <Icon name="chevron-down" size={20} color={MainBlue} />}
                            dropdownIconPosition="right"
                            defaultButtonText="Categories"
                            buttonStyle={LandingStyle.seletBoxButton}
                            buttonTextStyle={LandingStyle.selectBoxText}
                            dropdownStyle={LandingStyle.dropdownContent}
                            rowTextStyle={LandingStyle.dropdownRowText}
                        />
                    </View>

                    
                    <CarouselView name="Soccer"/>

                    <CarouselView name="Business"/>

                    <CarouselView name="Makeup"/>

                    <CarouselView name="Cooking"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Landing;

