import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Image, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
;

const Onboarding = ({ setIsVisited }: any) => {
  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: 'white',
      justifyContent: "space-between", flexDirection: 'column'
    }}>
        
         <Image 
         source={require('.././assets/images/applogo.png')}
     style={{
      width:'100%',
      minHeight:300,
      maxHeight:650,
      height:"70%"       
     }}
         transition={1000}
     
     resizeMode='cover'
     /> 
        <View>
          <Text style={Styles.Onboardtitle}>Shoes<Text style={{ color: 'black',fontFamily:"poppins", }}>Hub</Text></Text>
          <Text style={Styles.Onboardtext} >
            {`Style that walks with you,\ncomfort that carries you,shoes\nfor every step.`}
          </Text>
        </View>


        <TouchableOpacity style={Styles.OnboardBtn} onPress={() => {
          AsyncStorage.setItem("isVisited", 'true');
          setIsVisited(true)
        }}>
          <Text style={Styles.OnboardbtnText}>Get Started</Text>
          <Ionicons name='arrow-forward-outline' color={"white"} size={20} />
        </TouchableOpacity> 
 
    </SafeAreaView>
  );
};
export default Onboarding

const Styles = StyleSheet.create({
  Onboardtitle: {
    fontSize: 36,
    paddingHorizontal: 10, 
    fontFamily:"poppins",  
    color: "gray"
  },
  Onboardtext: {
    fontSize: 18, 
    fontFamily:"poppins",
    marginTop: 5, 
    paddingHorizontal: 10,
    color: "gray"
  }
  ,
  OnboardBtn: {
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    maxHeight: 80,
    justifyContent: "space-between",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    backgroundColor: "black",
  },
  OnboardbtnText: {
    color: "white",
    fontFamily:"poppins",
    paddingVertical: 15,
  }

})


