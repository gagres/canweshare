import {
    AsyncStorage,
} from 'react-native';

export const createNewUser = async (name, password) => {
    try {
        return await AsyncStorage.setItem(`${name}_${password}`, 'valid');
    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (name, password) => {
    try {
        return await AsyncStorage.getItem(`${name}_${password}`);;
    } catch (error) {
        console.log(error);
    }
}