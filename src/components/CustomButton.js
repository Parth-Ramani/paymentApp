import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-paper';

const CustomButton = ({children, style, ...otherProps}) => {
  return (
    // <Button style={[styles.button, style]} {...otherProps}>
    //   {children}
    // </Button>
    <TouchableOpacity style={[styles.button, style]} {...otherProps}>
      <Text>{children}</Text>

    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
height:40
    // fontWeight: 'bold',


    //    marginBottom:'4%'
  },
});
