import React, { Component } from 'react';
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    StatusBar,
    Alert,
    Image,
} from 'react-native';
import { createNewUser } from '../models/User';

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
    }
})

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            repeatPassword: '',
        }
    }
    registerNewUser = () => {
        this.props.navigation.navigate('Login');
        const { name, password, repeatPassword } = this.state;
        if (name.length && 
            password.length && 
            password === repeatPassword) {
                createNewUser(name.toLocaleLowerCase(), password.toLocaleLowerCase())
                    .then(() => {
                        Alert.alert('Tudo certo!', 'Usuário criado com sucesso!');
                        this.props.navigation.navigate('Login');
                    })
                    .catch(() => {
                        Alert.alert('Oops!', 'Algo de errado não está certo. Não conseguimos criar seu usuário!');
                    })
            }
    }
    render() {
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
                <TextInput placeholder='Repetir senha'
                    secureTextEntry={true}
                    textContentType='password'
                    autoCompleteType='password'
                    style={[styles.formGroup, { marginTop: 30 }]}
                    onChangeText={(e) => this.setState({ repeatPassword: e })}
                    value={this.state.repeatPassword}/>
                <View style={styles.buttonContainer}>
                    <Button title="Cadastrar"
                        onPress={this.registerNewUser}/>
                </View>
            </View>
        )
    }
}