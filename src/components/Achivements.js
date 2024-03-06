import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppBar from './AppBar';
import {Blue, Bluei, Blues, I, Profile, Star} from '../../assets/Svg';
import {ProgressBar} from 'react-native-paper';
import Linearbtn from './Linearbtn';
const Achivements = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <AppBar />
      <ScrollView>
        <View style={styles.blueCont}>
          <Blues />
          <View style={styles.prof}>
            <Profile />
          </View>
          <View style={styles.i}>
            <I />
          </View>
          <Text style={styles.name}>John Benny</Text>
          <View style={styles.exps}>
            <View style={styles.leve1}>
              <Text style={styles.leveltxt}>1</Text>
              <Text style={styles.leveltxt}>Level</Text>
            </View>
            <View style={styles.expBox}>
              <Text style={styles.expText} >0/316 experience</Text>
              <ProgressBar
            progress={0.1}
            color={'green'}
            style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}
          />
            </View>
            <View style={styles.leve2}>   
            <Text style={styles.leveltxt}>1</Text>
              <Text style={styles.leveltxt}>Level</Text>
            </View>
          </View>
        </View>
        <View style={styles.greenCont}>
          <View style={styles.i1}>
            <Text style={styles.prog}>Progress</Text>
            <View style={{marginTop: '7%'}}>
              <I />
            </View>
          </View>
          <View style={styles.levels}>
            <Text style={styles.lvltxt}>Level</Text>
            <Text style={styles.lvltxt}>1/100</Text>
          </View>
          <ProgressBar
            progress={0.1}
            color={'rgba(255, 255, 255, 1)'}
            style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}
          />
          <View style={styles.levels}>
            <Text style={styles.lvltxt}>Experience</Text>
            <Text style={styles.lvltxt}>0</Text>
          </View>
          <ProgressBar
            progress={0}
            color={'rgba(255, 255, 255, 1)'}
            style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}
          />
          <View style={styles.levels}>
            <Text style={styles.lvltxt}>Achievements</Text>
            <Text style={styles.lvltxt}>1/30</Text>
          </View>
          <ProgressBar
            progress={1}
            color={'rgba(255, 255, 255, 1)'}
            style={{width: '95%', alignSelf: 'center', marginTop: '4%'}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.earntext}>Transactions</Text>
          <View style={{marginTop: '6%', marginRight: '5%'}}>
            <Bluei />
          </View>
        </View>
        <View style={styles.whtcont}>
          <View
            style={{
              width: '95%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: '3%',
            }}>
            <Text style={styles.notply}>Novice Player</Text>
            <View>
              <Star />
            </View>
          </View>
          <Text style={styles.greytxt}>+5 points for achievement</Text>
          <Text style={styles.greytxt}>+500 exp for achievement</Text>
          <Text style={styles.bigtxtt}>Score 500 points playing games</Text>
          <Linearbtn label="Play Games" />
        </View>
        <View style={styles.whtcont}>
          <View
            style={{
              width: '95%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              marginTop: '3%',
            }}>
            <Text style={styles.notply}>Casual Gamer</Text>
            <View>
              <Star />
            </View>
          </View>
          <Text style={styles.greytxt}>+5 points for achievement</Text>
          <Text style={styles.greytxt}>+500 exp for achievement</Text>
          <Text style={styles.bigtxtt}>Score 500 points playing games</Text>
          <Linearbtn label="Play Games" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Achivements;

const styles = StyleSheet.create({
  blueCont: {
   
    marginTop: '2%',
    flex: 1,
    alignSelf: 'center',
  },
  prof: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '5%',
  },
  i: {
    position: 'absolute',

    alignSelf: 'flex-end',
    marginRight: '5%', 
    marginTop: '5%',
    position: 'absolute',
  },
  name:{
color:'#fff',fontSize:24,position:'absolute',fontWeight:'700',alignSelf:'center',marginTop:130
  },
  leve1: {
    alignItems: 'center',
    marginLeft: '3%',
    paddingTop: 12,
    paddingBottom: 12,
  
  
  },
  leve2: {
    alignItems: 'center',
    marginRight: '3%',
    paddingTop: 12,
 
    paddingBottom: 12,
  },
  exps: {
    flex: 1,
    backgroundColor: 'rgba(210, 242, 255, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 320,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 200,
    borderRadius: 12,
    padding:7
  },
leveltxt:{
color:'black',
fontSize:12,fontWeight:'700'

},
expText:{
  color:'black',
  fontSize:12,fontWeight:'500'
},
expBox:{
  alignItems:'center',
   paddingLeft:10,paddingRight:10
}
  
  ,
  greenCont: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(69, 192, 121, 1)',
    borderRadius: 12,
    marginTop: '4%',
    paddingBottom: 20,
  },
  i1: {
    alignSelf: 'flex-end',
    marginRight: '6%',
    flexDirection: 'row',
  },
  prog: {
    textAlign: 'center',
    marginTop: '9%',
    width: '82%',
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  levels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
  },
  lvltxt: {
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 2,
  },
  earntext: {
    color: ' rgba(0, 164, 228, 1)',
    padding: 14,
    fontSize: 16,
    fontWeight: '700',
    marginTop: '3%',
  },
  whtcont: {
    display: 'flex',
    flex: 1,
    paddingBottom: 27,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: '3%',
  },
  notply: {
    color: 'black',
    fontWeight: '700',
    paddingTop: 9,
  },
  greytxt: {
    fontSize: 10,
    paddingLeft: 10,

    color: 'rgba(121, 121, 121, 1)',
  },
  bigtxtt: {
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 30,
    marginBottom:'7%',
    color: 'rgba(121, 121, 121, 1)',
  },
  btn: {
    
    alignItems: 'center',
    backgroundColor: 'rgba(0, 164, 228, 1)',
    padding: 18,
    width: '35%',
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: '10%',
  },
  btntxt: {},
});
