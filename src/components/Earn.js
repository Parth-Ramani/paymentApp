import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppBar from './AppBar';
import {Adj, Aye, Fyber, Right, Tapjoy} from '../../assets/Svg';
import CustomButton from './CustomButton';

const Earn = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <AppBar />
      <View style={styles.whtsml}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.rghtbtn}>
            <Right />
          </TouchableOpacity>
          <Text style={styles.bluetxt}>Play games</Text>
        </View>

        <Text style={styles.blktxt}>Earning: 8.30 - 4.15K</Text>
        <Text style={styles.greytxt}>(for completing a task in a game)</Text>
        <View style={styles.txtCnt}>
          <Text style={styles.txt}>
            You need to install the game you like and complete a specific task
            in the game, for example : “ Rich a certain character level or
            unlock a feature.” Some tasks take several days to complete. The
            more difficult the task, the more you earn.
          </Text>
        </View>
      </View>
      <View style={styles.whiteCont}>
      <Fyber/>
        
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Play</Text>
        </CustomButton>
      </View>
      <View style={styles.whiteCont}>
      <Tapjoy/>
        
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Play</Text>
        </CustomButton>
      </View>
      <View style={styles.whiteCont}>
      <Aye/>
        
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Play</Text>
        </CustomButton>
      </View>
      <View style={styles.whiteCont}>
      <Adj/>
        
        <CustomButton style={styles.comBtn}>
          <Text style={styles.btntxt}>Play</Text>
        </CustomButton>
      </View>
    </View>
  );
};

export default Earn;

const styles = StyleSheet.create({
  whtsml: {
    
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '7%',
    borderRadius: 12,
  },
  bluetxt: {
    color: 'rgba(0, 164, 228, 1)',
    textAlign: 'center',
    padding: 13,
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 4,
  },
  rghtbtn: {
    padding: 12,
  },
  blktxt: {
    paddingLeft: 18,
    color: 'black',
    fontWeight: '700',
  },
  greytxt: {
    color: 'rgba(121, 121, 121, 1)',
    fontSize: 12,
    paddingLeft: 18,
    paddingTop: 4,
  },
  txtCnt: {
    width: '69%',
    
  
    height: 130,
    marginTop: '4%',
    marginLeft: 12
  },
  txt: {
    color: 'black',
    fontSize: 14,
    
  },  whiteCont: {
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
    justifyContent:'space-between',
    paddingLeft:12,paddingRight:12,
    alignItems:'center'
  }, comBtn: {
    backgroundColor: 'rgba(242, 244, 250, 1)',
    width: 90,
    justifyContent:'center',alignItems:'center',
    height: 30,
  },
  btntxt: {
   color:'rgba(0, 164, 228, 1)',
   fontSize:12,
   fontWeight:'700'
  },
});
