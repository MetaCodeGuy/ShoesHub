import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductPost = ({ Imageurl, ProductName ,Data,price}) => {
    return (
        <View style={{
            width: "45%",
            height: 200,  
            marginBottom:60,
        }}>
            <Image
                source={{ uri: Imageurl[0] }}
                style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 20,
                }}
            />
            <Text style={{fontWeight:'600',fontFamily:'poppins',marginVertical:5,fontSize:18}}>{ProductName}</Text>
            <Text style={{fontWeight:'800',fontFamily:'poppins',fontSize:18}}>${price}</Text>
        </View>
    )
}

export default ProductPost

const styles = StyleSheet.create({})