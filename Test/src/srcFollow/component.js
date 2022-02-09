import React, {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import dataList from "./dataFollow";
import styles from "./stylesFollow"

const Component = ({id, name, image, isFollow, fromList}) => {
    const [textFollowed, setTextFollowed] = useState('');
    const [countFollow, setCountFollow] = useState(5);
    const [IsFollowStatus, setIsFollowStatus] = useState(isFollow);
    console.log("ahihi", countFollow);

    const changeStatus = () => {
        
        if(IsFollowStatus === true){
            setTextFollowed('Bỏ theo dõi');
            setIsFollowStatus(false);
            
            setCountFollow(countFollow + 1);
            dataList.push({id:id, name: name, image: image, isFollow: isFollow});
        }
        else {     
            for( let i = 0; i < dataList.length; i++){ 
                if ( dataList[i].id == id) { 
                    dataList.splice(i, 1); 
                }
            }
        //    let dataDelete = dataList.indexOf(key); // find index of this item in dataList
        // dataList.splice(dataDelete, 1);
            setTextFollowed('Theo dõi');
            setIsFollowStatus(true);
            
            if (countFollow > 0) {
                setCountFollow(countFollow - 1);
            }
        }
    }
    return (
        <View style={styles.viewA}>
            <Image source={{ uri: image}} style={styles.ImageA} />
            <Text style={{ marginLeft: 11, marginTop: 27, fontSize:14,flex: 0.99, }}>{name}</Text>
            {fromList ? (
                <TouchableOpacity style={IsFollowStatus ? styles.touchA : styles.touchA1} onPress={changeStatus}>
                 <Text style={styles.TextA}>{IsFollowStatus ? "Theo dõi" : "Bỏ theo dõi"}</Text>
                </TouchableOpacity>
            )  : (
                <View/>
            )
            }
        </View>
    )
}
export default Component;
