import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
;

const Onboarding = ({ setIsVisited }: any) => {
  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: 'white',
      justifyContent: "space-between", flexDirection: 'column'
    }}>
      <ScrollView style={{ flex: 1, minHeight: '100%' }}>

        {/* <Image
     source={require("../assets/Brands/Onboard.png")}
     style={{
      width:'100%',
      height:600, 
     }}
     resizeMode='cover'
     /> */}
        <View>
          <Text style={Styles.Onboardtitle}>Shoes<Text style={{ color: 'black' }}>Hub</Text></Text>
          <Text style={Styles.Onboardtext} >
            {`Style that walks with you,\ncomfort that carries you,shoes\nfor every step.`}
          </Text>
        </View>


        <Pressable style={Styles.OnboardBtn} onPress={() => {
          AsyncStorage.setItem("isVisited", 'true');
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
  Onboardtitle: {
    fontSize: 36,
    paddingHorizontal: 10,
    marginTop: -6,
    fontWeight: "bold",
    color: "gray"
  },
  Onboardtext: {
    fontSize: 24,
    lineHeight: 24,
    marginTop: 15,
    paddingHorizontal: 10,
    color: "lightgray"
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
    paddingVertical: 15,
  }

})


