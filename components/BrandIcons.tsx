import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

 

const BrandIcons = ({ImageData}:any) => {
    console.log(ImageData);
    
  return (
    <Pressable style={{width:60,height:60,marginHorizontal:10,borderWidth:1,borderColor:'gray',borderRadius:100,}}>
      <Image 
      source={ImageData}
      style={{flex:1,borderRadius:100,width:'100%',height:'100%'}}
      resizeMethod="scale"
       />
    </Pressable>
  )
}

export default BrandIcons