import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {
  Notification,
  WithDraw,
  Earnmore,
  Billing,
  Analytics,
  Achieve,
  Referral,
  Mail,Info
} from '../../assets/Svg';
import AppBar from '../components/AppBar';
import CustomButton from '../components/CustomButton';
const DashBoard = () => {
  const theme = useTheme();
  const {colors, fonts} = theme || {};
  console;
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
     <AppBar/>
      <View style={styles.container}>
        <View>
          <Text style={styles.balanceNumber}>0.00 ₹ </Text>
          <Text style={styles.balanceTxt}>Balance</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: '7%'}}>
          <CustomButton style={styles.containerBtn}>
            <View style={{paddingTop:5}}>
            <WithDraw />
            </View>
         

            <Text style={styles.txt}>Withdraw</Text>
          </CustomButton>
          <CustomButton style={styles.containerBtn}>
            <Earnmore /> <Text style={styles.txt}>Earn more</Text>
          </CustomButton>
        </View>
      </View>
      <View style={styles.rowConatiner}>
        <View style={styles.rows}>
          <View style={styles.box}>
            <Billing />
          </View>
          <Text style={styles.rowtext}>Billings</Text>
        </View>
        <View style={styles.rows}>
          <View style={styles.box}>
            <Analytics />
          </View>
          <Text style={styles.rowtext}>Analytics</Text>
        </View>
        <View style={styles.rows}>
          <View style={styles.box}>
            <Achieve />
          </View>
          <Text style={styles.rowtext}>Achieve-</Text>
          <Text style={styles.rowtextb}>ments</Text>
        </View>

        <View style={styles.rows}>
          <View style={styles.box}>
            <Referral />
          </View>
          <Text style={styles.rowtext}>Referral</Text>
          <Text style={styles.rowtextb}>Program</Text>
        </View>
      </View>
      <Text style={styles.earntext}>Earning</Text>
      <View style={styles.boxContainer}>
        <View style={styles.bigbox}>
          <Text style={styles.balanceNum}>0.00 ₹ </Text>
          <Text style={styles.balanceTxtg}>This week</Text>

          <View style={styles.line} />
        </View>
        <View style={styles.bigbox}>
          <Text style={styles.balanceNum}>Last Withdrawal</Text>
          <Text style={styles.balanceTxtRs}>0.00 INR</Text>
          <Text style={styles.balanceTxtsmall}>You have reached 0% of payment threshold </Text>
         
        </View>
      </View>
      <Text style={styles.earntext}>Actions</Text>
      {/* <Button style={styles.btn1}>Email</Button>
      <Button style={styles.btn2}>Email</Button> */} 
      <View style={styles.whiteCont}>
        <TouchableOpacity style={styles.btn1}><Mail style={{marginTop:'2%'}}/><Text style={styles.mailText}>Verify your email</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn2}><Info style={{marginTop:'2%'}}/><Text style={styles.mailText}>Add basic information about yourself</Text></TouchableOpacity>

      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
  },
  icon: {
    justifyContent: 'center',
  },
  container: {
    height: '18%',
    width: '93%',
    backgroundColor: 'rgba(0, 164, 228, 1)',
    alignSelf: 'center',
    borderRadius: 9,
    marginTop: '2%',
  },
  balanceNumber: {
    paddingTop: 16,
    paddingLeft: 16,
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  balanceTxt: {
    color: '#fff',
    paddingLeft: 16,
  },
  containerBtn: {
    height: 33,
    width: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: '4%',
    paddingBottom:3,
    justifyContent:'center',
    alignItems: 'center',

  },
  txt: {
    flex: 1,
    color: '#fff',
textAlign:'center',
    fontSize: 14,
    
  },
  rowConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignSelf: 'center',
    marginTop: '8%',
  },
  rows: {},
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowtext: {
    color: 'black',
    fontSize: 12,
    paddingTop: 6,
    textAlign: 'center',
  },
  rowtextb: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
  earntext: {
    color: ' rgba(0, 164, 228, 1)',
    padding: 14,
    fontSize: 16,
    fontWeight: '700',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bigbox: {
  
    display: 'flex',
    // height: 160,
    width: 180,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  balanceNum: {

    color: 'rgba(69, 192, 121, 1)',
    fontSize: 18,
    fontWeight: '900',

    paddingTop: 16,
    paddingLeft: 16,
  },
  balanceTxtg: {
    fontSize: 10,
    paddingLeft: 16,
    color: 'rgba(196, 196, 196, 1)',
  },
  line: {
    borderColor: 'rgba(69, 192, 121, 1)',
    borderWidth: 1,
    width: '80%',
    alignSelf: 'center',
    marginTop: '48%',
    marginBottom:'6%'
  },
  balanceTxtRs: {
    fontWeight: '500',
    paddingLeft: 16,
  },
  balanceTxtsmall: {
    position:'absolute',
    fontSize: 10,
    paddingLeft: 16,
    color: 'rgba(196, 196, 196, 1)',
    marginTop: '65%', width:'90%'
  },
  btn1: {
  
    alignSelf: 'center',
    width: '97%',
    justifyContent:'flex-start',
    // borderRadius: 0,
    // borderTopLeftRadius: 14,
    // borderTopRightRadius: 14,
    flexDirection:'row',
    padding: 3,
    borderColor: 'rgba(196, 196, 196, 1)',
    borderBottomWidth: 1,
  },
  btn2: {
    
    alignSelf: 'center',
    width: '97%',
    justifyContent:'flex-start',
    // borderRadius: 0,
    // borderTopLeftRadius: 14,
    // borderTopRightRadius: 14,
    flexDirection:'row',
    padding: 3,
  
  },
  whiteCont: {
    height: 110,
    alignSelf: 'center',
    borderRadius: 14,
    width: '90%',
    backgroundColor: '#fff',
  },
  mailText:{
    color:'black',
    textAlign:'center',padding:12
  },
  balanceTxtg1: {
    fontSize: 10,
    paddingLeft: 16,
    color: 'rgba(196, 196, 196, 1)',
    marginTop:'42%'
  },
});
