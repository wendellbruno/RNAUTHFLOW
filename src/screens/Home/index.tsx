import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles'; 
import {MyButton} from '../../components';
import { useNavigation } from '@react-navigation/native';


export const Home: React.FC = () => {

    const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Essa tela só pode ser vista por usuarios logados.</Text>
        <MyButton title='Ir para Configurações' onPress={ () => navigation.navigate('Settings')} />
        <Text>By<Text style={styles.coffText}>Coffstack</Text></Text>
    </View>
  )
}
