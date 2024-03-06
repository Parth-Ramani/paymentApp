import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from './AppBar';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
const Analytics = () => {
    const data=[ {value:4,label:'Mon'}, {value:0.2,label:'Tue'}, {value:0.2,label:'Wed'}, {value:0.2,label:'Thu'},{value:0.2,label:'Fri'},{value:0.2,label:'Sat'},{value:0.2,label:'Sun'}]


  return (
    <View style={{flex:1,backgroundColor:'rgb(229, 243, 253)',}}>
              <AppBar />
        <View style={{backgroundColor:'#fff',width:'90%',alignSelf:'center',flexWrap:'wrap',paddingBottom:10}}>
        <BarChart data = {data} barWidth={10} 
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
 

    </View>
  )
}

export default Analytics

const styles = StyleSheet.create({})