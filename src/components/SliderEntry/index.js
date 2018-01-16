import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles, { colors } from './index.style';
import { ENTRIES1, ENTRIES2 } from './entries';

const SLIDER_1_FIRST_ITEM = 1;

export default class Slid extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }

    _renderItem ({item, index}) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
            />
        );
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    get example1 () {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>Reparakit</Text>
   
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  enableMomentum={false}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={false}
                  loopClonesPerSide={2}
                  autoplay={false}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  customAnimationType={'spring'}
                  customAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                
                />
          
            </View>
        );
    }

    render () {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />

                    <ScrollView
                      style={styles.scrollview}
                      contentContainerStyle={styles.scrollviewContentContainer}
                      indicatorStyle={'white'}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                        { this.example1 }

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
