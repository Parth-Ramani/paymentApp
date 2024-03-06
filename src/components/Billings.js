import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppBar from './AppBar';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import CustomButton from './CustomButton';
import {Add, Blue, Hm, Notepen,En, Stg} from '../../assets/Svg';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from '../Navigation/BottomNavigation';

const Billings = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <AppBar />

      <Text style={[styles.blacktxt, styles.blacktxt1]}>
        You have not earned funds.
        <Text style={styles.blueTxt}> Go to the earn page</Text> to
      </Text>
      <Text style={styles.blacktxt}>earn money!</Text>

      <Text style={styles.earntext}>Earning</Text>
      <View style={styles.whiteCont}>
        <Text style={styles.earnmny}>
          Earned money : <Text style={styles.grntxt}>0.00 INR</Text>
        </Text>
        <Text style={styles.greytxt}>
          You have reached 0% of payment threshold (600)
        </Text>
        <ProgressBar
          progress={1}
          color={'rgba(216, 244, 255, 1)'}
          style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}
        />
        <CustomButton style={styles.containerBtn}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 4,
            }}>
            <Blue />

            <Text style={styles.txt}>Withdraw</Text>
          </View>
        </CustomButton>
      </View>
      <Text style={styles.earntext}>Payment methods</Text>
      <View style={styles.smlwhiteCont}>
        <Add />
        <Text style={styles.btxt}>Add payment method</Text>
      </View>
      <Text style={styles.earntext}>Transactions</Text>
      <View style={styles.whiteCont3}>
        <Text style={styles.greytxt1}>
          You have not made any transaction yet
        </Text>
      </View>
      <Text style={styles.earntext}>General information</Text>
      <View style={styles.whiteCont4}>
        <Text style={styles.txtblck}>
          You didnt add any personal information to transfers.
        </Text>
        <Text style={styles.txtblck1}>Add them to get the correct billing</Text>
        {/* <CustomButton style={styles.containerBtn1}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 4,
              
            }}>
            <View
              style={{height: 10, width: 10, marginBottom: 5, marginRight: 7}}>
              <Notepen />
            </View>

            <Text style={styles.txt1}>Make changes</Text>
          </View>
        </CustomButton> */}
         <CustomButton style={styles.containerBtnBlu}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 4,
            }}>
            <Notepen/>

            <Text style={styles.txtWhit}>Make changes</Text>
          </View>
        </CustomButton>
      </View>
     

      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Screen1')} style={styles.tab}>
        <Hm/>
        <Text style={styles.tabtxt}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Screen2')} style={styles.tab}>
      <En/>
        <Text style={styles.tabtxt}>Earn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Screen3')} style={styles.tab}>
      <Stg/>
        <Text style={styles.tabtxt}>Settings</Text>
      </TouchableOpacity>
      
    </View>
      
    </View>
  );
};

export default Billings;

const styles = StyleSheet.create({
  blacktxt: {
    color: 'black',
    textAlign: 'center',
  },
  blueTxt: {
    color: 'rgba(0, 164, 228, 1)',
  },
  blacktxt1: {
    marginTop: '3%',
  },
  earntext: {
    color: ' rgba(0, 164, 228, 1)',
    padding: 14,
    fontSize: 16,
    fontWeight: '700',
    marginTop: '3%',
  },
  whiteCont: {
    paddingBottom:10,
    alignSelf: 'center',
    borderRadius: 14,
    width: '90%',
    backgroundColor: '#fff',
  },
  earnmny: {
    color: 'black',
    fontSize: 11,
    paddingLeft: 12,
    paddingTop: 12,
  },
  grntxt: {
    color: 'rgba(69, 192, 121, 1)',
    fontSize: 14,
    fontWeight: '700',
  },
  greytxt: {
    fontSize: 10,
    paddingLeft: 12,
    paddingTop: 5,
    color: 'rgba(121, 121, 121, 1)',
  },
  containerBtn: {
    height: 30,
    width: 120,
    backgroundColor: 'rgba(242, 244, 250, 1)',
    alignSelf: 'flex-end',

    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4%',
    marginRight: '4%',
  },
  txt: {
    color: 'rgba(0, 164, 228, 1)',

    fontSize: 12,
    textAlign: 'center',
    paddingLeft: 5,
    marginTop: 1,
  },
  smlwhiteCont: {
    height: 60,
    alignSelf: 'center',
    borderRadius: 14,
    width: '90%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btxt: {
    color: 'black',
    fontSize: 12,
    marginLeft: '4%',
  },
  whiteCont3: {
    height: 40,
    alignSelf: 'center',
    borderRadius: 14,
    width: '90%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  greytxt1: {
    fontSize: 12,
    paddingLeft: 12,
    color: 'rgba(121, 121, 121, 1)',
  },
  whiteCont4: {
  paddingBottom:10,
    alignSelf: 'center',
    borderRadius: 14,
    width: '90%',
    backgroundColor: '#fff',
  },
  txtblck: {
    color: 'rgba(121, 121, 121, 1)',
    fontSize: 12,
    paddingLeft: 12,
    paddingTop: 12,
  },
  txtblck1: {
    color: 'rgba(121, 121, 121, 1)',
    fontSize: 12,
    paddingLeft: 12,
  },
  containerBtn1: {
  paddingLeft:7,paddingRight:7,
    alignSelf:'flex-end',
    backgroundColor: 'rgba(0, 164, 228, 1)',
    // alignSelf: 'flex-end',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // // marginTop: '4%',
    marginRight: '4%',
    // padding:2
  },
  txt1: {
    color: '#fff',

    fontSize: 10,
    textAlign: 'center',
    paddingTop: 4,
    paddingLeft: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
   paddingTop:2
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabtxt:{
    fontSize:12,color:'rgba(207, 229, 237, 1)'
  },
  containerBtnBlu: {
    height: 30,
    // width: 120,
    paddingLeft:7,paddingRight:7,
    backgroundColor: 'rgba(0, 164, 228, 1)',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4%',
    marginRight: '4%',
  },
  txtWhit: {
    color: '#fff',
marginRight:2,
    fontSize: 10,
    textAlign: 'center',
    paddingLeft: 5,
    marginTop: 1,
  },
});
