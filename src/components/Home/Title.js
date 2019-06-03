import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    name: {
        fontSize: 22
    }
})

export default class TitleComponent extends Component {
    render() {
        return (
            <View>
                <Text style={styles.name}>Gabriel</Text>
                <Text>Arquivo: 5</Text>
                <Text>Compartilhados: 2</Text>
            </View>
        )
    }
}