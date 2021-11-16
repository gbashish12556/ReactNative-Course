import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ListScreen = function() {
    const listData = [{name:'Ashish', age:20},{name:'Abhishe', age:23},{name:'Anuj', age:27},{name:'Anik', age:29},{name:'Arju', age:32}]
    return (
        <View>
            <FlatList 
                keyExtractor =  {(friend) => friend.name}
                data={listData}  
                renderItem = {( { item }) =>{
                      return <Text style={style.textStyle}>{ item.name} - {item.age}</Text>      
                }}
           />
        </View>
    );
}

const style = StyleSheet.create({
    textStyle: {
        paddingTop: 80,
        fontSize: 20
    }
});
export default ListScreen

