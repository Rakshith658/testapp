import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import Card from '../Components/Card'
import firebase from 'firebase'
import {db,auth}from '../firebase'
import Prifile from './Prifile'

const Info = ({next}) => {

    const [age, setage] = useState('')
    const [school, setschool] = useState('')
    const [college, setcollege] = useState('')
    const [isData, setisData] = useState(false)
    const [Data, setData] = useState({})
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        db.collection(auth.currentUser.uid).doc(auth.currentUser.uid).get().then((snapshot)=>{
            // console.log(snapshot.data);
            setisloading(false)
           if (snapshot.exists) {
            //    console.log(snapshot.data());

                setData({
                    id:snapshot.id,
                    data:snapshot.data()
                })
               setisData(true)
            //    console.log(Data);
           }else{
               console.log("data is not exists");
           }
       })
       setisloading(false)
   }, [])
    const sendInfo = () => {
       const d=auth.currentUser.uid
        db.collection(d).doc(d)
            .set({
                timestamp : firebase.default.firestore.FieldValue.serverTimestamp(),
                displayName:auth.currentUser.displayName,
                email:auth.currentUser.email,
                photoURL:auth.currentUser.photoURL,
                age:age,
                school:school,
                college:college,
                uid:auth.currentUser.uid,
            })
        // setisData(true) 
        db.collection(auth.currentUser.uid).doc(auth.currentUser.uid).get().then((snapshot)=>{
            // console.log(snapshot.data);
           if (snapshot.exists) {
            //    console.log(snapshot.data());
                setData({
                    id:snapshot.id,
                    data:snapshot.data()
                })
               setisData(true)
            //    console.log(Data);
           }else{
               console.log("data is not exists");
           }
       })   
    }

    if (isloading) {
        return(
          <View style={styles.container}>
            <Text>Loading.......</Text>
          </View>
        )
      } else {
            if (isData) {
                if (Data.data.uid===auth.currentUser.uid) {  
                    return(
                        <View>
                            <Prifile data={Data}/>
                        </View>
                    )
                }else{
                    return<View><Text>Rakshith</Text></View>
                }
                
            } else {
                return (
                            <View style={styles.main}>
                            <View style={styles.TextInput}>
                                <Card>
                                    <TextInput 
                                    placeholder="Age" 
                                    style={styles.Input}
                                    onChangeText={(age)=>setage(age)}
                                    />
                                    <TextInput 
                                    placeholder="School"
                                    style={styles.Input}
                                    onChangeText={(school)=>setschool(school)}
                                    />
                                    <TextInput 
                                    placeholder="collage"
                                    style={styles.Input}
                                    onChangeText={(collage)=>setcollege(collage)}
                                    />
                                </Card>
                            </View>
                            <View style={styles.Button}>
                                <Card >
                                    <View style={{margin:30,width:400,alignItems:'center',justifyContent:"center",flex:1}}>
                                        <Button title="Next" color='green' onPress={sendInfo} />
                                    </View>
                                </Card>
                            </View>
                        </View>
                        
                )
            }
    }
}

export default Info

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:30
    },
    Input:{
        // height:30,
        marginVertical:10,
        borderColor:'grey',
        borderBottomWidth:1,
    },
    TextInput:{
        marginHorizontal:20,
        marginVertical:10
    },
    Button:{
        marginTop:30,
        marginHorizontal:35
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:30
      }
})
