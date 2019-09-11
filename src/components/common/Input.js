import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secure }) => {
    const { inputStyle, labelStyle, ContainerStyle } = styles;
     return (
        <View style={ContainerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput 
        secureTextEntry={secure}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
        />
        </View>
    );
};
    const styles = {
        inputStyle: {
            color: '#000',
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 18,
            lineHeight: 23,
            flex: 2
        },
        labelStyle: {
            fontSize: 18,
            flex: 1,
            paddingLeft: 20
        },
        ContainerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }
    };
export { Input };
