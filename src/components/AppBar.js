import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Notification} from '../../assets/Svg';
import { Avatar } from 'react-native-paper';
const AppBar = () => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection:'row'}}>
      <Avatar.Text size={24} label="J" />
      <Text style={styles.headerText}>John Benny</Text>
      </View>

      <View style={styles.icon}>
        <Notification />
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    fontWeight:'600',
   paddingLeft:5
  },
  icon: {
    justifyContent: 'center',
  },
});
