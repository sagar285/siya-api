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
} from 'react-native';

const Native = () => {
  const [data, setData] = useState('')

  const getApiData= async ()=>{
// console.warn ('hi')
const url = 'https://jsonplaceholder.typicode.com/posts/1'
let result = await fetch(url);
result = await result.json();
setData(result);
  }

useEffect(()=>{
 getApiData();
},[])


  return (

      <View>
        <Text>API CALL</Text>
        {
        data ? <View>
          <Text>userId :{ data.userId}</Text>
          <Text>Id :{ data.id}</Text>
          <Text>title :{ data.title}</Text>
          <Text>userId :{ data.body}</Text>
        </View> :null
         }
      </View>
  )
}
export default Native;