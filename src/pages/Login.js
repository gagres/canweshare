import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    Image,
    Alert,
} from 'react-native';

import { getUser } from '../models/User';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 50,
    },
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 250,
        height: 165,

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
    constructor(props) {
        super(props);
        this.state = {
            name: 'Gagres',
            password: 'Gagres',
        }
    }
    login = () => {
        const { name, password } = this.state;
        getUser(name.toLocaleLowerCase(), password.toLocaleLowerCase())
            .then((isUserValid) => {
                if (isUserValid === 'valid') {
                    this.props.navigation.navigate('Private')
                } else {
                    Alert.alert('Informações inválidas', 'Usuário ou senha inválidos');
                }
            })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} 
                        source={require('../../assets/logo.png')}></Image>
                </View>
                <TextInput placeholder='Nome do usuário'
                    style={styles.formGroup}
                    onChangeText={(e) => this.setState({ name: e })}
                    value={this.state.name}/>
                <TextInput placeholder='Senha do usuário'
                    secureTextEntry={true}
                    textContentType='password'
                    autoCompleteType='password'
                    style={[styles.formGroup, { marginTop: 30 }]}
                    onChangeText={(e) => this.setState({ password: e })}
                    value={this.state.password}/>
                <View style={styles.buttonContainer}>
                    <Button title="Entrar"
                        onPress={this.login}/>
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