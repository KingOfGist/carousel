import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Card from './Card'

const wp = (percentage) => {
  const { width } = Dimensions.get('window');
  const value = (percentage * width) / 100;
  return Math.round(value);
}

const hp = (percentage) => {
  const { height } = Dimensions.get('window');
  const value = (percentage * height) / 100;
  return Math.round(value);
}

const { width: viewportWidth } = Dimensions.get('window');
const slideWidth = wp(90);
const slideHeight = hp(80);
const itemHorizontalMargin = wp(0)
const itemVerticalMargin = hp(0)
const sliderWidth = viewportWidth
const sliderHeight = viewportWidth
const itemWidth = slideWidth + itemHorizontalMargin * 2
const itemHeight = slideHeight + itemVerticalMargin * 2

const data = [
  {
    name: 'Kevin De Bruyne',
    image: require('./images/kevin.jpeg')
  },
  {
    name: 'Robert Lewandowski',
    image: require('./images/lewandowski.jpeg')
  },
  {
    name: 'Kylian Mbappé',
    image: require('./images/mbappe.jpeg')
  },
  {
    name: 'Lionel Messi',
    image: require('./images/messi.jpeg')
  },
  {
    name: 'Neymar',
    image: require('./images/neymar.jpeg')

  },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:32,top:50}}>Figurinhas da copa</Text>
      <Carousel
        vertical={false}
        style={{flex:1}}
        containerCustomStyle={{flex:1}}
        firstItem={0}
        data={data}
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
