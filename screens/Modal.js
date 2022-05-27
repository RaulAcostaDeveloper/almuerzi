import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import useFetch from '../hooks/useFetch';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation}) => {
    const id = navigation.getParam('_id');
    const {loading, data} = useFetch(`https://serverless2-eosin.vercel.app/api/alimentos/${id}`)
    console.log(data);
    return (
        <View style= {styles.container}>
            {loading ? <Text>Cargando...</Text>: 
            <View>
                <Text>{data._id}</Text>
                <Text>{data.nombreAlimento}</Text>
                <Text>{data.descripcionAlimento}</Text>
                <Button title="Aceptar" onPress={()=> {
                    AsyncStorage.getItem('token')
                    .then( token => {
                        if (token) {
                            fetch(`https://serverless2-eosin.vercel.app/api/ordenes`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    authorization: token,
                                },
                                body: JSON.stringify({
                                    alimento_id: id,
                                    //el user id lo recibe en el servidor por el token
                                })
                            }).then(()=> {
                                alert('Orden Generada Con Éxito');
                                navigation.navigate('Alimentos');
                            })
                        }
                    })
                }}/>
                <Button title='Cancelar' onPress={()=> navigation.navigate('Alimentos')}/>
            </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
})