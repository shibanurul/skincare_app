import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

function DetailBahan({route}) {
  const [databahan, setDatabahan] = useState([]);
  const id = route.params.msg;

  useEffect (() => {
    getDatabahan();
})

function getDatabahan(){
    fetch('https://skincare-api.herokuapp.com/product?q='+id)
	.then((response) => response.json())
    .then((json) => {
        setDatabahan(json)
    })
	.catch(err => console.error(err));
}
  
  return (
    <View style={{flex:1}}>
        <Text style={{textAlign: 'center', textTransform: 'uppercase', fontSize: 20, padding: 10}}>
            {id}
        </Text>
      <FlatList
        data={databahan}
        renderItem={({ item }) => (
          <View  style={{
            padding: 10,
            marginHorizontal: 10,
            backgroundColor: '#464343',
            borderRadius: 5
          }}>
            <FlatList data={item.ingredient_list}
            renderItem={({item}) => (
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={faCircleDot} style={{color: 'white'}}/>
                  <Text style={{color: 'white', marginHorizontal: 10, fontSize: 20, marginVertical: 5}}>{item}</Text>
                </View>
                    
            )}
            >
            </FlatList>
            
          </View>
        )}
      />
      </View>
  );
};

export default DetailBahan;