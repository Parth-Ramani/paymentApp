import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import AppBar from './AppBar';
import {Clp, En, Env, Hm, Stg} from '../../assets/Svg';

const Referral = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <AppBar />
      <View style={styles.whtCont}>
        <View style={styles.smCont}>
          <Text style={styles.txt}>Earn more with Referral Program</Text>
        </View>
        <Text style={styles.grytxt}>
          Invite a friend or someone from the internet to earn money on
          Paidwork. If the person makes their first payout, you’ll both Rs.600
          for free.
        </Text>
        <Text style={styles.blktxt}>Your referral link</Text>
        <View style={styles.txtinput}>
          <TextInput placeholder="Search here" style={styles.input} />
          <View style={styles.clp}>
            <Clp />
          </View>
        </View>
        <Text style={styles.bluetxt}>Share Link</Text>
      </View>
      <View style={styles.whtsml}>
        <Env />
        <Text style={styles.blk}>Invite someone to appear here</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen1')}
          style={styles.tab}>
          <Hm/>
          <Text style={styles.tabtxt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen2')}
          style={styles.tab}>
          <En />
          <Text style={styles.tabtxt}>Earn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen3')}
          style={styles.tab}>
          <Stg />
          <Text style={styles.tabtxt}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Referral;

const styles = StyleSheet.create({
  whtCont: {
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '4%',
    borderRadius: 12,
    borderColor: 'rgba(204, 237, 250, 1)',
    borderWidth: 1,
  },
  smCont: {
    position: 'absolute',
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(0, 164, 228, 1)',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'center',
  },
  txt: {
    color: '#fff',
    textAlign: 'center',
  },
  grytxt: {
    color: 'rgba(121, 121, 121, 1)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: '18%',
  },
  blktxt: {
    paddingLeft: 12,
    color: 'black',
    marginTop: '6%',
  },
  txtinput: {
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    borderColor: 'rgba(192, 192, 192, 1)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '5%',
  },
  input: {
    borderRadius: 20,
    width: '80%',
    color: 'rgba(192, 192, 192, 1)',
    marginLeft: '2%',
    padding: 5,
  },
  clp: {
    padding: 7,

    backgroundColor: 'rgba(0, 164, 228, 1)',

    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bluetxt: {
    color: 'rgba(0, 164, 228, 1)',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: '7%',
    marginBottom:'3%',

  },
  whtsml: {
    height: 60,
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '7%',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blk: {
    marginLeft: '5%',
    color: 'black',
  },  container: {
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
});
