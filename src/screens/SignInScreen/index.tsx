import React, {useContext, useState} from 'react';
import { Image, Switch } from 'react-native';
import Logo from '../../assets/logo.png';
import {MyTextInput, MyButton} from '../../components';
import {useAuth} from '../../Context/AuthContext';
import { Container } from './styles';
import { ThemeContext, ThemeType } from '../../theme/theme';

export const SignInScreen: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signIn} = useAuth();
    const {toggleTheme, theme} = useContext(ThemeContext)

    const isDarkMode = theme === ThemeType.dark
    


  return (
    <Container>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
        <Image 
        style={{width: 100, height: 100}}
        resizeMode='contain'
        source={Logo}
        />
    <MyTextInput placeholder='e-mail' value={email} onChangeText={setEmail} />
    <MyTextInput secureTextEntry  placeholder='senha' value={password} onChangeText={setPassword}/>


    <MyButton title='Entrar no APP' onPress={() => signIn(email,password)} />

    </Container>
  )
}
