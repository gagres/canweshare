import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
} from 'react-native';

import FileList from '../components/FileLIst';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        flex: 1,
        fontSize: 30,
        paddingTop: 25,
        paddingLeft: 25,
    },
    listContainer: {
        flex: 5,
    },
});

const files = [
    {name: 'Arquivo 01', created_at: '2019-06-05', updated_at: '2019-06-05' },
    {name: 'Arquivo 02', created_at: '2019-06-05', updated_at: '2019-06-05' },
    {name: 'Arquivo 03', created_at: '2019-06-05', updated_at: '2019-06-05' },
]

export default class PrivateScreen extends Component {
    onPress = (e) => {
        this.props.navigation.navigate('FilePublic');
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <Text style={styles.title}>Arquivos Públicos</Text>
                <View style={styles.listContainer}>
                    <FileList files={files}
                        onPress={this.onPress}/>
                </View>
            </View>
        )
    }
};