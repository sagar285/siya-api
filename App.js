import React, { useState } from 'react';
import { useEffect } from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
} from 'react-native';
// import Firstapi from './components/Firstapi'
// import Secondapi from './components/Secondapi'
import Thirdapi from './components/api';
function App() {
return(
  <>
{/* <Secondapi/> */}
<Thirdapi/>
</>
)
}
export default App;