import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'

const { height: viewportHeight } = Dimensions.get('window');
const height = viewportHeight
const cardHeight = (height*0.625)

const Card = ( props ) => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <View style={{width:'100%',height:cardHeight,borderRadius:5}}>        
        <TouchableOpacity style={[{backgroundColor:'#34B7F1',flex:1, borderRadius:5, padding:10, justifyContent:'flex-end'}]}>
          <Text style={{color:'#000', fontSize:50, fontWeight:'bold'}}>Experiências</Text>
          <Text style={{color:'#000', fontSize:32}}>Encontre experiências com pessoas locais para fazer um role</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Card