import React, { Component } from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 50,
    },
    formGroup: {
        borderBottomWidth: 2,
        borderColor: '#C6C6C6',
        fontSize: 18,
    },
    buttonContainer: {
        marginTop: 50,
    }
})

export default class RegisterScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome do usuário'
                    style={styles.formGroup}/>
                <TextInput placeholder='Senha do usuário'
                    secureTextEntry={true}
                    textContentType='password'
                    autoCompleteType='password'
                    style={[styles.formGroup, { marginTop: 30 }]}/>
                <TextInput placeholder='Repetir senha'
                    secureTextEntry={true}
                    textContentType='password'
                    autoCompleteType='password'
                    style={[styles.formGroup, { marginTop: 30 }]}/>
                <View style={styles.buttonContainer}>
                    <Button title="Cadastrar"
                        onPress={(e) => console.log(e.target.toString())}/>
                </View>
            </View>
        )
    }
}