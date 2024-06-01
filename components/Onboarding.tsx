import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { OnboardFlow } from 'react-native-onboard';
import Animated from 'react-native-reanimated';

const Onboarding = ({setIsVisited}:any) => {
  return (
     <SafeAreaView style={{ flex: 1 ,justifyContent:"space-between",flexDirection:'column'}}> 
     <ScrollView>
      
     <Image
     source={require("../assets/Brands/Onboard.png")}
     style={{
      width:'100%',
      height:"60%",
     }}
     resizeMode='cover'
     />
     <View>
     <Text style={Styles.Onboardtitle}>Shoes<Text style={{color:'black'}}>Hub</Text></Text>
     <Text style={Styles.Onboardtext} >
  { `Style that walks with you,\ncomfort that carries you,shoes\n for every step.`}
     </Text> 
     </View>
    
      
     <Pressable style={Styles.OnboardBtn} onPress={()=>{
      AsyncStorage.setItem("isVisited",'true');
      setIsVisited(true)
     }}>
      <Text style={Styles.OnboardbtnText}>Get Started</Text>
      <Ionicons name='arrow-forward-outline' color={"white"} size={20} />
     </Pressable> 

     </ScrollView>
     </SafeAreaView>
  );
};
export default Onboarding

const Styles = StyleSheet.create({
  Onboardtitle:{
    fontSize: 36, 
    paddingHorizontal:10,
    marginTop: -6,
    fontWeight:"bold",
    color:"gray"
  },
  Onboardtext:{
    fontSize: 22,
    lineHeight: 24, 
    marginTop:10,
    paddingHorizontal:10,
    color:"lightgray"
  }
,
OnboardBtn:{
  color:"#fff",
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  marginVertical:10,
  justifyContent:"space-between",
  borderRadius:25,
  paddingHorizontal:20,
  marginHorizontal:10,
  backgroundColor:"black",
},
OnboardbtnText:{
  color:"white",
  paddingVertical:15,  
}

})