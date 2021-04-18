import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {auth,db}from './firebase'
import Info from './screens/Info';
import Login from './screens/Login';

export default function App() {

  const [login, setlogin] = useState(null)
  const [isloading, setisloading] = useState(true)
 
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if (authUser) {
        setlogin(true)
        setisloading(false)
      }else{
        setisloading(false)
        setlogin(false)
      }
    })
  }, [login])

  if (isloading) {
    return(
      <View style={styles.container}>
        <Text>Loading.......</Text>
      </View>
    )
  } else {
    if (!login) {
      return(
        <Login/>
      )
    } else {
      return(
        <Info/>
      ) 
    }
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
