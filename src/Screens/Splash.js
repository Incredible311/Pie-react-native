/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    View, Image
} from 'react-native';
import { SplashStyle } from '../assets/styles/styles'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Signup');
        }, 3000)
    }, []);

    return (
        <View style={SplashStyle.container} >
            <Image
                source={require('../../assets/img/back-image.png')}
                resizeMode="cover"
                style={SplashStyle.image}
            />
            <View style={SplashStyle.loadingDiv}>
                <Image
                    source={require('../../assets/img/loading.png')}
                    resizeMode="contain"
                    style={SplashStyle.loading}
                />
            </View>

        </View>
    );
};
export default Splash;

