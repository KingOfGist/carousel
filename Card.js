import React from 'react'
import { Dimensions, Text, TouchableOpacity, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const { height: viewportHeight } = Dimensions.get('window');
const height = viewportHeight
const cardHeight = (height*0.625)

const Card = (props) => {
  const {data} = props
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <TouchableOpacity style={{width:'100%',height:cardHeight,borderRadius:5}} onPress={()=>{alert(data.name)}}>
        <View style={{width:'100%',height:'100%',borderRadius:5}}>
          <Image source={data.image} style={{width:'100%',height:'100%',borderRadius:5}} />
        </View>
        <View style={{position:'absolute',bottom:-1,left:0,right:0}}>
          <LinearGradient colors={['rgba(0,0,0,0)','rgba(0,0,0,0.5)','rgba(0,0,0,0.85)']} style={{flex:1}}>
            <Text style={{fontSize:64,color:'#fff'}}> </Text>
            <View style={{margin:10,flex:1,alignItems:'flex-start'}}>
              <Text style={{color:'#fff',fontSize:32,fontWeight:'bold'}}>{data.name}</Text>
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Card