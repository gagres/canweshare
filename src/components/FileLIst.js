import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 15,
        fontSize: 18,
        borderWidth: 2,
        padding: 35,
        margin: 10,
        borderColor: '#C6C6C6',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class FileList extends Component {
    render() {
        const {files} = this.props;

        const generateFileList = ({item}) => {
            return (
                <TouchableOpacity
                    onPress={this.props.onPress}>
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <FlatList data={files}
                renderItem={generateFileList}
                keyExtractor={(item) => item.name}/>
        )
    }
}

FileList.propTypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            created_at: PropTypes.string,
            updated_at: PropTypes.string,
        })
    ).isRequired,
    onPress: PropTypes.func.isRequired,
}