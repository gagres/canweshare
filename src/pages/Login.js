import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar
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
    },
    signup: {
        marginTop: 15,
        alignItems: 'flex-end',
    },
    signupText: {
        fontSize: 15,
        color: 'blue'
    }
})

export default class RegisterScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <TextInput placeholder='Nome do usuário'
                    style={styles.formGroup}/>
                <TextInput placeholder='Senha do usuário'
                    secureTextEntry={true}
                    textContentType='password'
                    autoCompleteType='password'
                    style={[styles.formGroup, { marginTop: 30 }]}/>
                <View style={styles.buttonContainer}>
                    <Button title="Entrar"
                        onPress={() => navigate('Private')}/>
                </View>
                <View style={styles.signup}>
                    <TouchableOpacity
                        onPress={() => navigate('Signup')}>
                        <Text style={styles.signupText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}