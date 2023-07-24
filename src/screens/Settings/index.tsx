import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles'; 
import { MyButton } from '../../components';
import { useAuth } from '../../Context/AuthContext';

// import { Container } from './styles';

export const Settings: React.FC = () => {

    const {signOut} = useAuth();

  return (
    <View style={styles.container}>
        <Text style={styles.title} >Configurações</Text>
        <MyButton title='Sair do App' onPress={signOut} style={{backgroundColor: 'red'}} />
    </View>
  )
}
