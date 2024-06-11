
import { CartItems } from '@/helpers/Datahub';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10,backgroundColor:'white' }}>
      {/* Links To Navigate */}
      <View style={{ flexDirection: 'row',  justifyContent: 'space-between',paddingVertical:20, }}>
        
        <TouchableOpacity
        onPress={()=>router.back()}
         style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 50,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>


      </View>


      {/* cart items */}
      {
        CartItems.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: item.ProductImages }}
                style={{ width: 80, height: 80, marginRight: 10 }}
              />
              <View>
                <Text style={{ fontFamily: 'poppinsbold', fontSize: 18 }}>{item.ProductName}</Text>
                <Text style={{ fontFamily: 'poppinsbold', fontSize: 18 }}>${item.price}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => removeFromCart(item)}
              style={{
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 50,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <Feather name="trash-2" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))
      }

      {/* Info section */}

    </SafeAreaView>
  );
};

export default CartScreen;
