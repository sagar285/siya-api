// fe07f505272e4f31b2e0de13a9bc5c18

// https:"//newsapi.org/v2/everything?q=tesla&from=2023-10-20&sortBy=publishedAt&apiKey=fe07f505272e4f31b2e0de13a9bc5c18"

import { Button, Image, StyleSheet, Text, View,} from 'react-native'
import WebView from 'react-native-webview'
import React, { useEffect, useState } from 'react'

const Thirdapi = () => {
    const [New, setNew] = useState([])
   
  const getApi = async ()=>{
     const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-10-20&sortBy=publishedAt&apiKey=fe07f505272e4f31b2e0de13a9bc5c18"
    let value = await fetch(url)
    console.log(value.articles)
    value = await value.json();
setNew(value.articles)
  }
useEffect(()=>{
    getApi()
})

    return (
    <View>
      <Button title='Get News'/>
      {
          New.map((d)=>(
            <View>
            <Text>1...{d.title}</Text> 
            <Image source={{uri:d.urlToImage}} style = {{height: 100, width: 50,objectFit:"fill"}}/>
             <Text>{d.description}</Text>
             <Text>{d.content}</Text>
             <Text>{d.publishedAt}</Text>
             <Text>{d.name}</Text>
             <WebView source={{html:"newfamhello"}} originWhitelist={['*']} />
            </View>
          ))
      }
    </View>
  )
}

export default Thirdapi;

