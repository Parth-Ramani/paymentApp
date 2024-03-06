import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Hand} from '../../assets/Svg';
import LinearGradient from 'react-native-linear-gradient';
import Skipbtn from './Skipbtn';

const OnBoarding2 = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <View style={styles.txtCont}>
        <Text style={styles.bluetxt}>Choose method </Text>
        <Text style={styles.bluetxt}>of earning!</Text>
        <Text style={styles.blktxt}>
          Make money by playing games, filling out surveys, watching videos,
          shopping online or doing tasks.
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: '7%'}}>
        <Hand />
      </View>
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

export default OnBoarding2;

const styles = StyleSheet.create({
  bluetxt: {
    color: 'rgba(0, 164, 228, 1)',
    fontSize: 20,
    fontWeight: '700',
    padding: 2,
  },
  txtCont: {
    alignItems: 'center',
    marginTop: '10%',
  },
  blktxt: {
    color: 'black',
    padding: 2,
    textAlign: 'center',
    width: '48%',
    fontWeight: '500',
    marginTop: '4%',
  },
  gradContainer: {
    height: '6%',
    bottom: 0,
    width: '95%',
    width: '52%',

    // borderRadius: 110, // Set the border radius here
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: '15%',
  },
  gradient: {
    height: '100%',
    width: '100%',
    // padding: 10,
    paddingTop: 7,
    borderRadius: 15, // Set the border radius here
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 6,
  },
  skip: {
    marginTop: '10%',
  },
  txt: {
    color: 'rgba(0, 164, 228, 1)',
  },
});
