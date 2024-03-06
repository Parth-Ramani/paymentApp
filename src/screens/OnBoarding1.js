import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Cash} from '../../assets/Svg';
import Linearbtn1 from '../components/Linearbtn';
import LinearGradient from 'react-native-linear-gradient';
import Skipbtn from '../components/Skipbtn';

const OnBoarding1 = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <View style={{alignItems: 'center', marginTop: '30%'}}>
        <Text style={styles.bluetext}>How to start</Text>
        <Text style={styles.bluetext}>earning?</Text>
        <View style={{marginTop: '5%'}}>
          <Cash />
        </View>
      </View>

      {/* <TouchableOpacity style={{width:'50%',height:50,borderRadius:12,backgroundColor:['rgba(0, 164, 228, 1)', 'rgba(30, 176, 233, 1)']}}>
        <Text>Next</Text>
    </TouchableOpacity> */}
      <TouchableOpacity style={styles.gradContainer}>
        <LinearGradient
          colors={['rgba(0, 164, 228, 1)', 'rgba(30, 176, 233, 1)']} // Gradient colors
          start={{x: 111, y: 0}} // Gradient start point (left)
          end={{x: 1, y: 0}} // Gradient end point (right)
          style={styles.gradient}>
          {/* Content inside the gradient background */}
          <Text style={styles.text}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Skipbtn style={styles.skip}>
        <Text style={styles.txt}>Skip</Text>
      </Skipbtn>
      
    </View>
  );
};

export default OnBoarding1;

const styles = StyleSheet.create({
  bluetext: {
    color: 'rgba(0, 164, 228, 1)',
    fontSize: 20,
    fontWeight: '700',
  },
  btn: {
    height: 33,
    width: '70%',
  },
  gradContainer: {
    height: '6%',
    bottom: 0,
    width: '95%',
    width: '52%',
    alignItems:'center',

    // borderRadius: 110, // Set the border radius here
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: '15%',
  },
  gradient: {
    height: '100%',
    width: '100%',
    // padding: 10,
    alignItems:'center',
    paddingTop: 15,
    borderRadius: 15, // Set the border radius here
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    // paddingTop:9,
  },
  skip:{
    marginTop:'10%'
  },txt:{
color:'rgba(0, 164, 228, 1)'  }
 
});
