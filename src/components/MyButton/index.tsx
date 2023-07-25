import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from 'styled-components/native';
interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function MyButton({title, style, ...rest}: MyButtonProps) {
 
    const {colors} = useTheme();
    return (
    <TouchableOpacity {...rest} style={[styles.button, {backgroundColor: colors.primary}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#550AB1',
    borderRadius: 8,
    padding: 20,
  },
});