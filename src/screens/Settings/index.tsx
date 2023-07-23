import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles'; 
import { MyButton } from '../../components';

// import { Container } from './styles';

export const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >Configurações</Text>
        <MyButton title='Sair do App' onPress={() => {}} style={{backgroundColor: 'red'}} />
    </View>
  )
}
