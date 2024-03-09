import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {Button} from 'react-native-paper';
import {Apple, Google, Mai, Micro, Password, RightArr} from '../../assets/Svg';
import LinearGradient from 'react-native-linear-gradient';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = () => {

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

///// SIGN IN ///////
const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};


  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      
      <View style={styles.cont}>
        <Text style={styles.langtxt}>English (United States)</Text>

        <Button style={styles.signinbtn}>
          <Text style={styles.txt}>Sign in</Text>
        </Button>
      </View>
      <Text style={styles.bluetxt}>Start earning online</Text>
      <Text style={styles.blktxt}>Welcome to Paidwork</Text>

      <View style={styles.mailCont}>
        <Mai />
        <TextInput
          placeholder="Email"
          style={{width: '85%', color: 'rgba(121, 121, 121, 1)',padding:3}}
          placeholderTextColor="rgba(121, 121, 121, 1)"
        />
      </View>
      <View style={styles.mailCont}>
        <Password />
        <TextInput
          placeholder="Password"
          style={{width: '85%', color: 'rgba(121, 121, 121, 1)',padding:3}}
          placeholderTextColor="rgba(121, 121, 121, 1)"
        />
      </View>

      <TouchableOpacity style={styles.gradContainer}>
        <LinearGradient
          colors={['rgba(0, 164, 228, 1)', 'rgba(30, 176, 233, 1)']} // Gradient colors
          start={{x: 111, y: 0}} // Gradient start point (left)
          end={{x: 1, y: 0}} // Gradient end point (right)
          style={styles.gradient}>
          {/* Content inside the gradient background */}
          <Text style={styles.text}>Continue</Text>
          <View
            style={{
              marginLeft: '4%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 7,
            }}>
            <RightArr />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.textOr}>OR</Text>
      <TouchableOpacity style={styles.Socibtn}>
        <Google />
        <Text style={styles.socialtxt}>Sign up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Socibtn}>
        <Apple />
        <Text style={styles.socialtxt}>Sign up with Apple</Text>
      </TouchableOpacity>
   

    
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  langtxt: {
    color: 'black',
    fontSize: 12,
  },
  signinbtn: {
    backgroundColor: 'transparent',
  },
  txt: {
    color: 'rgba(0, 164, 228, 1)',
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4%',
    marginLeft: '3%',
    marginRight: '3%',
    alignItems: 'center',
  },
  bluetxt: {
    color: 'rgba(0, 164, 228, 1)',
    textAlign: 'center',
    marginTop: '40%',
    fontSize: 18,
    fontWeight: '700',
  },
  blktxt: {
    color: 'rgba(121, 121, 121, 1)',
    textAlign: 'center',
    marginBottom: '5%',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 2,
  },
  mailCont: {
    width: '90%',
    borderColor: 'rgba(204, 237, 250, 1)',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 40,
    alignSelf: 'center',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  gradContainer: {
    height: '6%',
    bottom: 0,
    width: '95%',
    width: '52%',
    flexDirection: 'row',
    // borderRadius: 110, // Set the border radius here
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: '7%',
    alignItems:'center'
  },
  gradient: {
    height: '100%',
    width: '100%',
    // padding: 10,
    paddingTop: 7,
    borderRadius: 15, // Set the border radius here
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  paddingBottom:5,
    marginLeft: '25%',
  },
  textOr: {
    color: 'rgba(121, 121, 121, 1)',
    textAlign: 'center',
    marginTop: '7%',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  Socibtn: {
    width: '90%',
    borderColor: 'rgba(204, 237, 250, 1)',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    height: 40,
    alignSelf: 'center',
    marginTop: '5%',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'flex-start',

    flexDirection: 'row',
  },
  socialtxt: {
    color: 'rgba(121, 121, 121, 1)',
    paddingLeft: 15,
  },
});
