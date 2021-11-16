import React from "react";
import { Text, StyleSheet , View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  const button1Title = 'Button1'
  const button2Title = 'Button2'
  return <View>
       

             <TouchableOpacity
               style = {styles.textStyle}
               onPress={() => navigation.navigate("Component")} 
              >
                <Text> List Screen</Text>  
             </TouchableOpacity> 

             <TouchableOpacity
                style = {styles.textStyle}
               onPress={() =>  navigation.navigate("List")} 
              >
                <Text> Component Screen</Text>  
             </TouchableOpacity> 

             <TouchableOpacity
                style = {styles.textStyle}
               onPress={() =>  navigation.navigate("Images")} 
              >
                <Text> Image Screen</Text>  
             </TouchableOpacity> 

        </View>;
};

const styles = StyleSheet.create({
  textStyle: {
    margin:5,
    padding:10,
    fontSize: 20
  }
});

export default HomeScreen;
