import React, {useContext, useState} from 'react';
import { View, Text, Image } from 'react-native';
import Logo from '../../assets/logo.png';
import {MyTextInput, MyButton} from '../../components';
import {useAuth} from '../../Context/AuthContext';

export const SignInScreen: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signIn} = useAuth();


  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Image 
        style={{width: 100, height: 100}}
        resizeMode='contain'
        source={Logo}
        />
    <MyTextInput placeholder='e-mail' value={email} onChangeText={setEmail} />
    <MyTextInput secureTextEntry  placeholder='senha' value={password} onChangeText={setPassword}/>


    <MyButton title='Entrar no APP' onPress={() => signIn(email,password)} />


    </View>
  )
}
