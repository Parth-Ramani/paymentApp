import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-paper';

const Skipbtn = ({children, style, ...otherProps}) => {
  return (
    // <Button style={[styles.button, style]} {...otherProps}>
    //   {children}
    // </Button>
    <TouchableOpacity style={[styles.button, style]} {...otherProps}>
      <Text>{children}</Text>

    </TouchableOpacity>
  );
};

export default Skipbtn;

const styles = StyleSheet.create({
  button: {
    borderColor:'rgba(0, 164, 228, 1)',height:50,width:'50%',borderWidth:2,alignSelf:'center',alignItems:'center',justifyContent:'center',
borderRadius:5,backgroundColor:'#fff'
  },
});
