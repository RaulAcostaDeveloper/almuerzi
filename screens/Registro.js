import React from 'react';
import {Alert,Text, TextInput, View, StyleSheet, Button} from 'react-native';
import useForm from '../hooks/useForm';

export default ({navigation}) => {
    const initialState = {
        email: '',
        password: '',
    }
    const onSubmit = (values) => {
        fetch('https://serverless2-eosin.vercel.app/api/autenticacion/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(values),
        })
        .then( respuesta => respuesta.text())
        .then( respuesta => {

            if(respuesta === 'usuario Creado con éxito'){
                return Alert.alert(
                    'Exito',
                    respuesta,
                    [
                        { text: 'Ir al inicio', onPress: () => navigation.navigate('Login')}
                    ]
                )
            }
            Alert.alert(
                'Error',
                respuesta,
                )
        })
    }
    const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrarse</Text>
            <TextInput
                autoCapitalize='none'
                value={inputs.email}
                onChangeText={subscribe('email')}
                style={styles.input} 
                placeholder='Email'
                />
            <TextInput
                autoCapitalize='none'
                value={inputs.password}
                onChangeText={subscribe('password')}
                style={styles.input} 
                placeholder='Password'
                secureTextEntry={true}
            />
            <Button style={styles.button} title='Registrarse' onPress={ handleSubmit}/>
            <Button style={styles.button} title='Regresar' onPress={ () => navigation.navigate('Login')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal: 15,
    },
    input: {
        height:40,
        borderColor: '#ccc',
        borderWidth:1,
        alignSelf:'stretch',
        marginBottom:10,
        paddingHorizontal:5,
    },
    title: {
        fontSize:18,
        marginBottom:16,
    },
    button: {
        marginBottom:15,
    }
})