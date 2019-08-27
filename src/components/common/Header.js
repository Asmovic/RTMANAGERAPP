//import libraries to help create component
import React from 'react';
import { Text, View } from 'react-native';


//create component
const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;
    return (<View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text></View>
    );
}


const styles = {
    viewStyle: {
        backgroundColor: "pink",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 30,
        color: "green",


    }
}
//make component available to other part of the application
export { Header };