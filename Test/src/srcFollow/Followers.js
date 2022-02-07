{/* <TouchableOpacity>
                <Image source={image} style={{ height: 220, width: 329, alignSelf: 'center', }} />
            </TouchableOpacity>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 20, }}>Bạn chưa theo dõi ai</Text> */}
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from "./stylesFollow"
import Component from "./component";


import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, } from "react-native";

const FirstRoute = () => (
    <SafeAreaView>
        <View style={{ marginTop: 15, }}>
        </View>
    </SafeAreaView>
);
const SecondRoute = () => {

    return (
        <SafeAreaView>
            <View style={{ marginTop: 45, }}>
                <TouchableOpacity>
                    <Image source={{ uri: "https://s3-alpha-sig.figma.com/img/bdad/a153/bc98314cbda2b49b217ed38dbe1d62f8?Expires=1644192000&Signature=T6zXYYBibdB6gM7KJB15E2cAK0pSY3jw91-EqmOfakMo3JtSOq37AVnvjZrebji7C7Boe1lcfJN0HUlBY3t0i~DBG2C6dgq6xFqO-ADid1mp6OqjNnZdjcc1lVyvwyDbFJciBHXH7gvKTqrZQtDBNYLXvgIkQW2~XpofYffKQUBBrqVsm4F8UQRNnGlB1eSKLaJQaV5tVMEnK2HSMpWby-5yBYpIXZwzukZ9UE~mjaQwi5TtTqByFH6CM5a2iihu~1fAb68zfmQGD6614aSNe1foZ55WKNqY5AhkoAjd9G-at1QZzhoKBPrpfYONtaFWdU2Zdjgvs4Rqp3jZc2jlMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" }} style={{ height: 220, width: 329, alignSelf: 'center', }} />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 20, }}>Bạn chưa theo dõi ai</Text>
            </View>
        </SafeAreaView>
    );

};

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});
const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#60B939' }}
        style={{ backgroundColor: '#FFFFFF', }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color: 'black', margin: 8 }}>
                {route.title}
            </Text>
        )}
    />
);

export default function TabViewExample() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: '5 người theo dõi', },
        { key: 'second', title: 'Theo dõi 5 người' },
    ]);

    return (

        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width, }}
            renderTabBar={renderTabBar}
            style={{ marginTop: 80, }}
        />
    );
}