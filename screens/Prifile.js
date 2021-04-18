import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import {auth,db}from '../firebase'
import Card from '../Components/Card'

const Prifile = ({data}) => {
    console.log(data.data);
    
    return (
        <View style={styles.container}>
            <Image source={{uri:data.data.photoURL}}  style={styles.image}/>
            <Card>
                <Text style={styles.name}>{data.data.displayName}</Text>
                <Text style={styles.text}>{data.data.email}</Text>  
                <Text style={styles.text}>{data.data.age}</Text>  
                <Text style={styles.text}>{data.data.school}</Text>  
                <Text style={styles.text}>{data.data.college}</Text>
            </Card>
            <View style={styles.buttoncontainer}>
                <Button title="Next" color='green' onPress={()=>auth.signOut()} />
            </View>
        </View>
    )
    
}

export default Prifile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:30
    },
    image:{
        width:100,
        height:100,
        borderRadius:20
    },
    name:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:15
    },
    text:{
        padding:5,
        fontSize:14,
        fontWeight:"600"
    },
    buttoncontainer:{
        margin:30,
        width:400,
        alignItems:'center',
        justifyContent:"center",
        flex:1
    }
  });
