import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import styles from "./stylesFollow"
import Component from "./component";
import dataList from './dataFollow';
import dataList1 from './component';
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity,} from "react-native";
const FirstRoute = () => {
    return (
    <SafeAreaView>
        <View style={{ marginTop: 15, }}>
        {
            dataList.map(item => (
            <Component id={item.id} name={item.name} image={item.image} isFollow={item.isFollow} fromList={false}/>
            ))
        }
        </View>
    </SafeAreaView>
    )
}
  

export default FirstRoute;