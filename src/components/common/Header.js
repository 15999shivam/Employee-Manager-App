//import library
import React from 'react';
import { Text, View } from 'react-native';

//make a componen
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
  return (
      <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#007aff',
        justyfycontent: 'center',
        alignItems: 'center',
        height: 40,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    
    textStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '500',
       // paddingTop: 10,
        paddingBottom: 10
    }
};
//make component available to other part of app
export { Header };
//justyfycontent = align vertivally 
//alognItems =horizontly
