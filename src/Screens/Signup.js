/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useMemo } from 'react';
import { TextInput, RadioButton, ToggleButton } from 'react-native-paper';
import {
    View, Text, SafeAreaView, ScrollView, Alert, TouchableOpacity, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SelectDropdown from 'react-native-select-dropdown';
import { ContainerStyle, SignUpStyle, MainBlue } from '../assets/styles/styles';
import ButtonBox from '../components/layout/ButtonBox';

const countries = ["Egypt", "Canada", "Australia", "Ireland", "Egypt", "Canada", "Australia", "Ireland"]
const Signup = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(true);
    const [influencer, setInfluencer] = useState(true);
    const [search, setSearch] = useState('');

    const [sports, setSports] = useState('checked');
    const [health, setHealth] = useState('unchecked');
    const [music, setMusic] = useState('unchecked');

    const [notification, setNotification] = useState(true);

    const onSportsToggle = value => {
        setSports(sports === 'checked' ? 'unchecked' : 'checked');
    };

    const onHealthToggle = value => {
        setHealth(health === 'checked' ? 'unchecked' : 'checked');
    };

    const onMusicToggle = value => {
        setMusic(music === 'checked' ? 'unchecked' : 'checked');
    };

    const passwordIcon = useMemo(() => {
        return showPass ? <Icon name="eye" size={20} color={MainBlue} /> : <Icon name="eye-with-line" size={20} color={MainBlue} />
    }, [showPass])

    const influencerContent = useMemo(() => {
        return influencer ?
            <View>
                <Text style={SignUpStyle.socialTitle}>Connect Your Social Media</Text>
                <View style={SignUpStyle.socialView}>
                    <Icon name="facebook" size={20} color={MainBlue} style={SignUpStyle.socialButton} />
                    <Icon name="instagram" size={20} color={MainBlue} style={SignUpStyle.socialButton} />
                    <Icon name="twitter" size={20} color={MainBlue} style={SignUpStyle.socialButton} />
                </View>

            </View>
            : <View>
                <Text style={SignUpStyle.hashTagTitile}>Select any hashtag that you want in your field?</Text>
                <View style={SignUpStyle.searchAddView}>
                    <TextInput
                        style={SignUpStyle.searchInputBox}
                        label="Search"
                        value={search}
                        placeholder="Search"
                        onChangeText={setSearch}
                        mode="outlined"
                        outlineColor={MainBlue}
                        theme={{ roundness: 20, colors: { primary: MainBlue } }}
                        right={<TextInput.Icon name={() => { return <Icon name="magnifying-glass" size={20} color={MainBlue} /> }} />}
                    />
                    <Icon name="plus" size={20} color={MainBlue} style={SignUpStyle.plusBtnIcon} />
                </View>
                <Text style={SignUpStyle.recentlyAddText}>Recently Added</Text>
                <View style={SignUpStyle.toggleBtnView}>
                    <ToggleButton
                        icon={() => <Text style={{ color: sports === 'checked' ? '#FFFFFF' : MainBlue }}>#Sports</Text>}
                        value="#Sports"
                        color='#ffffff'
                        status={sports}
                        onPress={onSportsToggle}
                        style={sports === 'checked' ? SignUpStyle.toggleBtnSelect : SignUpStyle.toggleBtn}
                    />
                    <ToggleButton
                        icon={() => <Text style={{ color: health === 'checked' ? '#FFFFFF' : MainBlue }}>#Health</Text>}
                        value="#Health"
                        color='#ffffff'
                        status={health}
                        onPress={onHealthToggle}
                        style={health === 'checked' ? SignUpStyle.toggleBtnSelect : SignUpStyle.toggleBtn}
                    />
                    <ToggleButton
                        icon={() => <Text style={{ color: music === 'checked' ? '#FFFFFF' : MainBlue }}>#Music</Text>}
                        value="#Music"
                        color='#ffffff'
                        status={music}
                        onPress={onMusicToggle}
                        style={music === 'checked' ? SignUpStyle.toggleBtnSelect : SignUpStyle.toggleBtn}
                    />
                </View>

                <Text style={SignUpStyle.notificationTitle}>Would you like to receive notifications of show prior to scheduled time?</Text>

                <View style={SignUpStyle.radioView}>
                    <RadioButton
                        value={true}
                        status={notification === true ? 'checked' : 'unchecked'}
                        onPress={() => setNotification(true)}
                        color={MainBlue}
                        uncheckedColor={MainBlue}
                    />
                    <Text style={SignUpStyle.radioItemTitle}>Yes</Text>
                    <RadioButton
                        value={false}
                        status={notification === false ? 'checked' : 'unchecked'}
                        onPress={() => setNotification(false)}
                        color={MainBlue}
                        uncheckedColor={MainBlue}
                    />
                    <Text style={SignUpStyle.radioItemTitle}>No</Text>
                </View>
            </View>
    })

    const onShowPass = () => {

        setShowPass(!showPass);
    }

    const onsubmit = () => {
        navigation.navigate('Landing');
    }

    useEffect(() => {
    }, []);

    return (
        <SafeAreaView style={ContainerStyle.container}>
            <ScrollView style={ContainerStyle.scrollView}>
                <View style={ContainerStyle.content}>
                    <StatusBar/>
                    <Text style={SignUpStyle.title}>Create a Profile</Text>
                    <TextInput
                        style={SignUpStyle.inputBox}
                        label="Enter Username"
                        value={username}
                        placeholder="Username"
                        onChangeText={setUsername}
                        mode="outlined"
                        outlineColor={MainBlue}
                        theme={{ roundness: 20, colors: { primary: MainBlue } }}
                        right={<TextInput.Icon name={() => { return <Icon name="add-user" size={20} color={MainBlue} /> }} />}
                    />

                    <TextInput
                        style={SignUpStyle.inputBox}
                        label="Enter Password"
                        value={password}
                        placeholder="Password"
                        onChangeText={setPassword}
                        mode="outlined"
                        outlineColor={MainBlue}
                        theme={{ roundness: 20, colors: { primary: MainBlue } }}
                        secureTextEntry={showPass}
                        right={<TextInput.Icon onPress={() => onShowPass()} forceTextInputFocus={false} name={() => { return passwordIcon }} />}
                    />

                    <Text style={SignUpStyle.radioTitle}>Are you a influencer?</Text>
                    <View style={SignUpStyle.radioView}>
                        <RadioButton
                            value={true}
                            status={influencer === true ? 'checked' : 'unchecked'}
                            onPress={() => setInfluencer(true)}
                            color={MainBlue}
                            uncheckedColor={MainBlue}
                        />
                        <Text style={SignUpStyle.radioItemTitle}>Yes</Text>
                        <RadioButton
                            value={false}
                            status={influencer === false ? 'checked' : 'unchecked'}
                            onPress={() => setInfluencer(false)}
                            color={MainBlue}
                            uncheckedColor={MainBlue}
                        />
                        <Text style={SignUpStyle.radioItemTitle}>No</Text>
                    </View>

                    <Text style={SignUpStyle.categoryTitle}>What are your Categories of expertise?</Text>

                    <SelectDropdown
                        data={countries}
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
                        defaultButtonText="Select"
                        buttonStyle={SignUpStyle.seletBoxButton}
                        buttonTextStyle={SignUpStyle.selectBoxText}
                        dropdownStyle={SignUpStyle.dropdownContent}
                    />

                    <SelectDropdown
                        data={countries}
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
                        defaultButtonText="Select"
                        buttonStyle={SignUpStyle.seletBoxButton}
                        buttonTextStyle={SignUpStyle.selectBoxText}
                        dropdownStyle={SignUpStyle.dropdownContent}
                    />

                    <SelectDropdown
                        data={countries}
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
                        defaultButtonText="Select"
                        buttonStyle={SignUpStyle.seletBoxButton}
                        buttonTextStyle={SignUpStyle.selectBoxText}
                        dropdownStyle={SignUpStyle.dropdownContent}
                    />

                    {influencerContent}

                    <ButtonBox name={'CREATE PROFILE'} submit={() => onsubmit()} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Signup;
