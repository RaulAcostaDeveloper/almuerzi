import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import useFetch from '../hooks/useFetch';

const Alimentos = ({navigation}) => {
    const {loading, data:alimentos} = useFetch('https://serverless2-eosin.vercel.app/api/alimentos');
    return (
        <View style={styles.container}>
            { loading ? <Text>Cargando...</Text> :
            <FlatList 
                style = {styles.list}
                data = {alimentos}
                keyExtractor = { item => item._id}
                renderItem = { ({item}) => 
                    <ListItem 
                        onPress = { () => navigation.navigate('Modal', { _id: item._id})}
                        name= {item.nombreAlimento}
                    />
                }
            />
        }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems:'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    },
});
Alimentos.navigationOptions = ({
    title: 'Comidas disponibles'
});
export default Alimentos;