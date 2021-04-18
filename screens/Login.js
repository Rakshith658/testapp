import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {provider,auth} from '../firebase'

const Login = () => {
    
    const SignIn=()=>{
        auth.signInWithPopup(provider).catch(error=> alert(error))
    }
    return (
        <View style={styles.container}>
           <Button onPress={SignIn} title="Gooogle login"/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
