/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper'
import {
    View, Image, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SelectDropdown from 'react-native-select-dropdown';
import { ContainerStyle, LandingStyle, MainBlue } from '../assets/styles/styles';
import LandingScrollView from '../components/layout/LandingScrollView';
import TopNavigation from '../components/layout/TopNavigation';
import SideMenu from 'react-native-side-menu-updated';
import Menu from '../components/layout/Menu'

const carouselItems1 = [
    {
        source: require('../../assets/img/Image23.png')
    },
    {
        source: require('../../assets/img/Image29.png')
    },
    {
        source: require('../../assets/img/Image25.png')
    },
    {
        source: require('../../assets/img/Image28.png')
    },
    {
        source: require('../../assets/img/Image23.png')
    },
];

const carouselItems2 = [
    {
        source: require('../../assets/img/Image25.png')
    },
    {
        source: require('../../assets/img/Image26.png')
    },
    {
        source: require('../../assets/img/Image27.png')
    },
    {
        source: require('../../assets/img/Image28.png')
    },
    {
        source: require('../../assets/img/Image23.png')
    },
];

const carouselItems3 = [
    {
        source: require('../../assets/img/Image28.png')
    },
    {
        source: require('../../assets/img/Image29.png')
    },
    {
        source: require('../../assets/img/Image30.png')
    },
    {
        source: require('../../assets/img/Image28.png')
    },
    {
        source: require('../../assets/img/Image23.png')
    },
];

const carouselItems4 = [
    {
        source: require('../../assets/img/Image31.png')
    },
    {
        source: require('../../assets/img/Image30.png')
    },
    {
        source: require('../../assets/img/Image33.png')
    },
    {
        source: require('../../assets/img/Image29.png')
    },
    {
        source: require('../../assets/img/Image33.png')
    },
];

const carouselItems5 = [
    {
        source: require('../../assets/img/Image34.png')
    },
    {
        source: require('../../assets/img/Image35.png')
    },
    {
        source: require('../../assets/img/Image36.png')
    },
    {
        source: require('../../assets/img/Image29.png')
    },
    {
        source: require('../../assets/img/Image33.png')
    },
];
const Landing = ({ navigation }) => {
    useEffect(() => {

    }, []);

    const menu = <Menu navigator={navigation} />;

    const [menuView, setMenuView] = useState(false);

    const onSideMenu = () => {
        setMenuView(!menuView);

    }

    const offSideMenu = () => {
        setMenuView(false);
    }

    return (
        <SideMenu menu={menu} isOpen={menuView} onChange={() => onSideMenu()} onMove={() => offSideMenu()} overlayColor={'#000000a6'}>
            <SafeAreaView style={ContainerStyle.container}>
                <ScrollView style={ContainerStyle.scrollView}>
                    <View style={ContainerStyle.content}>
                        <StatusBar />
                        <View style={{flexDirection: "row", lexWrap: "wrap", justifyContent: 'space-between', alignItems: 'center'}}>
                            <TopNavigation name={'User Landing Page'} navigation={navigation} onSideMenu={() => onSideMenu()} />
                            <TouchableOpacity style={{
                                width: 36,
                                height: 36,
                                padding: 5,
                                borderRadius: 100,
                                borderWidth: 1
                            }} activeOpacity={0.6} onPress={() => onSideMenu()}>
                                <Icon name="menu" size={24} color={'#000000'} />
                            </TouchableOpacity>
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


                        <LandingScrollView name="Soccer" navigate={navigation.navigate} items={carouselItems1} />

                        <LandingScrollView name="Fashion" navigate={navigation.navigate} items={carouselItems2} />

                        <LandingScrollView name="Business" navigate={navigation.navigate} items={carouselItems3} />

                        <LandingScrollView name="Makeup" navigate={navigation.navigate} items={carouselItems4} />

                        <LandingScrollView name="Cooking" navigate={navigation.navigate} items={carouselItems5} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SideMenu>
    );
};
export default Landing;

