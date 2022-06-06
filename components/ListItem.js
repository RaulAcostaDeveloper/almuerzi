import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';

export default ({name, onPress}) => {
    console.log(name);
    const [loaded] = useFonts({
        Kdam_Thmor_Pro: require('../assets/fonts/Kdam_Thmor_Pro/KdamThmorPro-Regular.ttf'),
    });
      
    if (!loaded) {
    return null;
    }
    return (
        <TouchableOpacity onPress={onPress} style= {styles.container}>
            <Text style= {styles.text}>{name}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:15,
        height:60,
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor: '#eee',
    },
    text: {
        fontSize:18,
        fontFamily:'Kdam_Thmor_Pro',
    },
})