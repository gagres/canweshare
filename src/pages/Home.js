import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TitleComponent from '../components/Home/Title';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        padding: 20,
    },
    content: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const tabStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
})

class PrivateTab extends Component {
    render() {
        return (
            <View style={tabStyles.container}>
                <Text>Private</Text>
            </View>
        )
    }
}

class PublicTab extends Component {
    render() {
        return (
            <View style={tabStyles.container}>
                <Text>Public</Text>
            </View>
        )
    }
}

const PrivateStack = createStackNavigator({
    Private: { screen: PrivateTab },
})
const PublicStack = createStackNavigator({
    Public: { screen: PublicTab },
})

const TabNavigator = createBottomTabNavigator({
    Private: { screen: PrivateStack },
    Public: { screen: PublicStack }
});

const TabNavigatorComponent = createAppContainer(TabNavigator);

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigation.headerLeft = null;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <TitleComponent />
                </View>
                <View style={styles.content}>
                    <TabNavigatorComponent/>
                </View>
            </View>
        );
    }
}