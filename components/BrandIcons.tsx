import { View, Text,  TouchableOpacity } from 'react-native'
import {Image} from "expo-image"
import React from 'react'

 

const BrandIcons = ({ImageData}:any) => {
     console.log("image data : ",ImageData)
  return (
    <TouchableOpacity style={{width:60,elevation:2,padding:10,backgroundColor:"white",height:60,marginHorizontal:10,borderRadius:100,}}>
      <Image 
      source={ImageData}
              transition={1000}
      
      style={{borderRadius:20,width:'100%',height:'100%'}}
       />
    </TouchableOpacity>
  )
}

export default BrandIcons
