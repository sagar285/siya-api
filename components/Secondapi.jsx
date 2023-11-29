import React from 'react'
import {useState, useEffect } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  Image,
} from 'react-native';

const Native = () => {
  const [data, setData] = useState([])

  const getApiData= async ()=>{
// console.warn ('hi')
const url = 'https://fakestoreapi.com/products'
let result = await fetch(url);
result = await result.json();
console.log(result)
setData(result);
  }

useEffect(()=>{
 getApiData();
},[])


const Item = ({data}) => (
    // const Image_Http_URL ={uri:`${data.image}`}
    <View style={{backgroundColor: '#ede4e4', flexDirection:"row",justifyContent:"space-around"}}>
        {/* <View style={{}}> */}
      <Image source={{uri:data.image}} style = {{height: 100, width: 50, marginTop: 2,flex:1,objectFit:"fill"}} /> 
      
     <View style={{flexDirection:"column", flex: 3, padding: 4}}>
      <Text style={{ color:'black' ,marginTop:30, textTransform:'capitalize'}}>{data.title}</Text>
      {/* </View> */}
      <Text style={{ color: 'blue',marginLeft:20}}>Rs: {data.price}</Text>
         </View> 
        </View>
  );


  return (

      <View >
        <Text style={{display:"flex", backgroundColor: '#aaaab3', color:'white', textAlign:"center",padding:3,marginBottom:6}}>API CALL</Text>
        <FlatList
        data={data}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
      </View>
  )
}
export default Native;