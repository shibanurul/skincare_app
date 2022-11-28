import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import {TouchableOpacity } from "react-native";


function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData(){
    fetch('http://192.168.43.232:3000/brandlist')
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  return (
    <View style={{flex:1}}>
      <View style={{marginTop: 10, marginBottom: 10, paddingVertical: 10, display: 'flex', alignItems: 'center'}}>
        <Text style={{color: '#000000', fontSize: 20}}>Select Your Brand</Text>
      </View>
      
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('BRAND', {msg: item}) } style={{
            backgroundColor: '#212121',
            paddingVertical: 20,
            marginBottom: 10,
            borderRadius: 10,
            elevation: 2,
            marginHorizontal: 10
           }}>
            <Text  numberOfLines={1}  style={{color: '#FFFFFF', textAlign: "center", fontSize: 30, width: '100%', marginTop: 5, textTransform: 'uppercase'}}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      
      </View>
  );
};


export default HomeScreen;