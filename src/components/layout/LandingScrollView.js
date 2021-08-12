/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, ScrollView
} from 'react-native';
import { MainBlue } from '../../assets/styles/styles';

const LandingScrollView = (props) => {


    return (
        <View >
            <Text style={styles.carouselTitle}>{props.name}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    props.items && props.items.map((item, key) => {
                        return <TouchableOpacity style={{
                            height: 90,
                            width: 130,
                            marginHorizontal: 5
                        }}
                            activeOpacity={0.6}
                            key={key}
                            onPress={() => props.navigate('ContentView')}
                        >
                            <Image
                                source={item.source}
                                resizeMode="cover"
                                style={{
                                    borderRadius: 5,
                                    height: 90,
                                    width: '100%'
                                }}
                            />
                        </TouchableOpacity>

                    })
                }
            </ScrollView>
        </View>
    );
};
export default LandingScrollView;

const styles = StyleSheet.create({
    carouselTitle: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: MainBlue,
        fontStyle: 'italic'
    }
})

