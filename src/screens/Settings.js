import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import {Acc, Logout, Noti, Pay, Prof, Search, Sec, Sup, Ud} from '../../assets/Svg';

const Settings = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <AppBar />
      <ScrollView>
      <View style={styles.whtCont}>
        <Text style={styles.Stg}>Settings</Text>
        <View style={styles.txtinput}>
          <TextInput placeholder="Search here" style={styles.input} />
          <View style={{alignSelf: 'center', marginLeft: '5%'}}>
            <Search />
          </View>
        </View>
        <TouchableOpacity style={styles.col}>
          <Prof/>
          <Text style={styles.txt}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <Acc/>
          <Text style={styles.txt}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <Ud/>
          <Text style={styles.txt}>User Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <Pay/>
          <Text style={styles.txt}>Payment receiver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <Noti/>
          <Text style={styles.txt}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <Sec/>
          <Text style={styles.txt}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <Sup/>
          <Text style={styles.txt}>Support Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <Logout/>
          <Text style={styles.txt}>Log out</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  whtCont: {
    display:'flex',
  
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginTop: '5%',
    paddingBottom:7
  },
  Stg: {
    padding: 12,
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  txtinput: {
    alignSelf: 'center',
    width: '90%',
    height: '8%',
    backgroundColor: 'rgba(237, 237, 237, 1)',
    borderColor: 'rgba(192, 192, 192, 1)',
    borderWidth: 1,
    borderRadius: 24,
    flexDirection: 'row',
  },
  input: {
    borderRadius: 20,
    width: '80%',
    color: 'rgba(192, 192, 192, 1)',
    marginLeft: '2%',
  },col:{
    flexDirection:'row',alignItems:'center',marginTop:'5%',paddingLeft:12
  },txt:{
paddingLeft:12,color:'black'
  }
});
