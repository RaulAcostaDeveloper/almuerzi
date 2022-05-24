import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default ({name, onPress}) => {
    console.log(name);
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
    },
})