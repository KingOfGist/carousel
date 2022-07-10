import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Card from './Card'

const wp = (percentage) => {
  const { width, height } = Dimensions.get('window');
  const value = (percentage * width) / 100;
  return Math.round(value);
}

const hp = (percentage) => {
  const { width, height } = Dimensions.get('window');
  const value = (percentage * height) / 100;
  return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');
const slideWidth = wp(90);
const slideHeight = hp(80);
//const slideWidth = wp(75)
//const itemHorizontalMargin = wp(2);
const itemHorizontalMargin = wp(0)
const itemVerticalMargin = hp(0)
const sliderWidth = viewportWidth
const sliderHeight = viewportWidth
const itemWidth = slideWidth + itemHorizontalMargin * 2
const itemHeight = slideHeight + itemVerticalMargin * 2

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        vertical={false}
        style={{flex:1}}
        containerCustomStyle={{flex:1}}
        firstItem={0}
        data={[1,2,3,4,5]}
        keyExtractor={(item,index)=> index}
        renderItem={({item,index})=> <Card data={item} /> }
        hasParallaxImages={true}
        inactiveSlideScale={0.925}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        decelerationRate={0.9}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth} 
        itemHeight={itemHeight} 
        sliderHeight={sliderHeight} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
