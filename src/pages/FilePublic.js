import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    historicoContainer: {
        flex: 5,
        padding: 30,
    },
    historicoList: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    historicoItem: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    }
});

export default class FilePublic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Arquivo 01</Text>
                </View>
                <View style={styles.historicoContainer}>
                    <Text>Histórico de alterações</Text>
                    <ScrollView style={styles.historicoList}>
                        <Text style={styles.historicoItem}>01/04/2019 22:10</Text>
                        <Text style={styles.historicoItem}>01/04/2019 21:05</Text>
                    </ScrollView>
                </View>
                <View style={styles.actions}>
                    <Button title="Publicar"
                        onPress={() => this.props.navigation.navigate('Public')}></Button>
                </View>
            </View>
        )
    }
}