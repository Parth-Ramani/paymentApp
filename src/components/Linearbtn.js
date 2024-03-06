import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Linearbtn = ({label,onPress,style}) => {
  return (
    <View style={{flex:1}}>
    <TouchableOpacity style={styles.gradContainer}>
      <LinearGradient
        colors={['rgba(0, 164, 228, 1)', 'rgba(30, 176, 233, 1)']} // Gradient colors
        start={{x: 0, y: 0}} // Gradient start point (left)
        end={{x: 1, y: 0}} // Gradient end point (right)
        style={styles.gradient}>
        {/* Content inside the gradient background */}
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
    </View>
  );
};

export default Linearbtn;

const styles = StyleSheet.create({
  gradContainer: {
    // height: '50%',
    bottom:0,
    // width: '95%',
    width: '32%',
flex:1, 
  bottom:0,top:0,
    // borderRadius: 110, // Set the border radius here
    alignSelf: 'center',
    borderRadius: 13,
  marginTop:'6%'
  },
  gradient: {

    height: '100%',
    width: '100%',
    padding: 7,
  //  padding:10,
    borderRadius: 13, // Set the border radius here
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  
  },
});
