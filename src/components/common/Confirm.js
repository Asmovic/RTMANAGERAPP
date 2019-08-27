import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {

    const { CardSectionStyle, containerStyle, textStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
            onRequestClose={() => { }}
        >
            <View style={containerStyle}>
                <CardSection style={CardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = {
    CardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        lineHeight: 40,
        textAlign: 'center'
    },
    containerStyle: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
}
export { Confirm }