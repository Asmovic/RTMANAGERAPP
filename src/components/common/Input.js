import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, placeholder, onChangeText, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput secureTextEntry={secureTextEntry}
                autoCorrect={false} placeholder={placeholder} style={inputStyle}
                value={value} onChangeText={onChangeText}
            />
        </View>
    );

}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2,
        fontSize: 18,
        lineHeight: 22
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    },
    containerStyle: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { Input };