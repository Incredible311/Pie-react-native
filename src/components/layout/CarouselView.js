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
    StyleSheet, View, Image, Text, Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MainBlue } from '../../assets/styles/styles'
const carouselItems = [
    {
        source: require('../../../assets/img/Image23.png')
    },
    {
        source: require('../../../assets/img/back-image.png')
    },
    {
        source: require('../../../assets/img/Image23.png')
    },
    {
        source: require('../../../assets/img/Image28.png')
    },
    {
        source: require('../../../assets/img/Image23.png')
    },
];

const SLIDER_WIDTH = Dimensions.get('window').width * 5 / 3;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1 / 5);

const CarouselView = (props) => {
    useEffect(() => {

    }, []);

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{
                height: 90,
            }}>
                <Image
                    source={item.source}
                    resizeMode="cover"
                    style={{
                        borderRadius: 5,
                        height: 90,
                        width: '100%'
                    }}
                />
            </View>

        )
    }

    return (
        <View>
            <Text style={styles.carouselTitle}>{props.name}</Text>
            <View style={{ marginLeft: (-1) * SLIDER_WIDTH * 2 / 5 }}>
                <Carousel
                    layout={"default"}
                    data={carouselItems}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={_renderItem}

                    onSnapToItem={index => console.log(index)} />
            </View>
        </View>
    );
};
export default CarouselView;

const styles = StyleSheet.create({
    carouselTitle: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: MainBlue,
        fontStyle: 'italic'
    }
  });



