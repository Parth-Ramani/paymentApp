import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppBar from './AppBar';
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from 'react-native-gifted-charts';
import { En, Hm, Stg } from '../../assets/Svg';
const Analytics = () => {
  const data = [
    {value: 4, label: 'Mon'},
    {value: 0.2, label: 'Tue'},
    {value: 0.2, label: 'Wed'},
    {value: 0.2, label: 'Thu'},
    {value: 0.2, label: 'Fri'},
    {value: 0.2, label: 'Sat'},
    {value: 0.2, label: 'Sun'},
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'rgb(229, 243, 253)'}}>
      <AppBar />
      <View
        style={{
          backgroundColor: '#fff',
          width: '90%',
          alignSelf: 'center',
          flexWrap: 'wrap',
          paddingBottom: 10,
        }}>
        <BarChart
          data={data}
          barWidth={10}
          noOfSections={10}
          barBorderRadius={4}
          frontColor="rgba(0, 164, 228, 1)"
          yAxisThickness={0}
          // xAxisThickness={0}
          spacing={30}
          stepHeight={37}
          dashGap={0}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen1')}
          style={styles.tab}>
          <Hm />
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

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingTop: 2,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabtxt: {
    fontSize: 12,
    color: 'rgba(207, 229, 237, 1)',
  },
});
