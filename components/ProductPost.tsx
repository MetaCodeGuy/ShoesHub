import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const ProductPost = ({ Imageurl, ProductName ,Data,price}) => {
    return (
        <Pressable 
        onPress={()=>{
            router.push(`/products/${Data.id}`)
        }}
        style={{
            width: "45%",
            height: 200,  
            marginBottom:70,
        }}>
            <Image
                source={{ uri: Imageurl[0] }}
                style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 30,
                    shadowColor:'black', 
                    shadowOffset:{
                        width:4,
                        height:4,
                    },
                    shadowOpacity:.3,
                    shadowRadius:8

                }}
            />
            <Text style={{fontWeight:'600',fontFamily:'poppins',marginVertical:5,fontSize:18}}>{ProductName}</Text>
            <Text style={{fontWeight:'800',fontFamily:'poppins',fontSize:18}}>${price}</Text>
        </Pressable>
    )
}

export default ProductPost

const styles = StyleSheet.create({})