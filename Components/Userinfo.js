import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Userinfo = ({data}) => {
    console.log(data);
    return (
        <View>
            <Text>{data.id}</Text>
        </View>
    )
}

export default Userinfo

const styles = StyleSheet.create({})
