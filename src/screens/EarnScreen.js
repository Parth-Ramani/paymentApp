import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import {Game, Laptop, Note, Shopping, Task} from '../../assets/Svg';
import CustomButton from '../components/CustomButton';

const EarnScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <AppBar />
      <View style={styles.container}>
        <Text style={styles.bluetxt}>Choose the method of</Text>
        <Text style={styles.bluetxt}>earning!</Text>
        <Text style={styles.blacktxt}>100 Points = 90 ₹</Text>
      </View>
      <View style={styles.whiteCont}>
        <Game />
        <Text style={styles.boxtxt}>Play Games</Text>
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Earn</Text>
        </CustomButton>
      </View>
      <View style={styles.whiteCont}>
        <Note/>
        <Text style={styles.boxtxt}>Fill out surveys</Text>
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Earn</Text>
        </CustomButton>
      </View>
      <View style={styles.whiteCont}>
        <Laptop/>
        <Text style={styles.boxtxt}>Watch videos</Text>
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Earn</Text>
        </CustomButton>
      </View>
      <View style={styles.whiteCont}>
        <Shopping/>
        <Text style={styles.boxtxt}>Online shopping</Text>
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Earn</Text>
        </CustomButton>
      </View>
      <View style={styles.whiteCont}>
        <Task/>
        <Text style={styles.boxtxt}>Microtasks</Text>
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Earn</Text>
        </CustomButton>
      </View>
    </View>
  );
};

export default EarnScreen;

const styles = StyleSheet.create({
  bluetxt: {
    color: 'rgba(0, 164, 228, 1)',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  blacktxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    marginTop: '5%',
  },
  whiteCont: {
    display: 'flex',
    height: 100,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: 'rgba(204, 237, 250, 1)',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  comBtn: {
    backgroundColor: 'rgba(242, 244, 250, 1)',
    width: 90,
    justifyContent:'center',alignItems:'center',
    height: 30,
  },
  btntxt: {
   color:'rgba(0, 164, 228, 1)',
   fontSize:12,
   fontWeight:'700'
  },boxtxt:{
    fontSize:16,color:'black',fontWeight:'700',width:'40%',
  }
});
