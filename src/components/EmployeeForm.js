import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions'

class EmployeeForm extends Component {
    render() {
        const { name, tell, shift, employeeUpdate } = this.props;
        return (
            <View>
                <CardSection>
                    <Input value={name} onChangeText={value => employeeUpdate({ prop: 'name', value })}
                        label='Name' placeholder='enter name here!!!' />
                </CardSection>
                <CardSection>
                    <Input value={tell} label='Tell' onChangeText={value => employeeUpdate({ prop: 'tell', value })}
                        placeholder='enter phone number here!!!' />
                </CardSection>
                <CardSection /* style={{ flexDirection: 'row' }} */ >
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={shift}
                        onValueChange={value => employeeUpdate({ prop: 'shift', value })}>
                        <Picker.Item label='Monday' value='Monday' />
                        <Picker.Item label='Tuesday' value='Tuesday' />
                        <Picker.Item label='Wednesday' value='Wednesday' />
                        <Picker.Item label='Thursday' value='Thursday' />
                        <Picker.Item label='Friday' value='Friday' />
                        <Picker.Item label='Saturday' value='Saturday' />
                        <Picker.Item label='Sunday' value='Sunday' />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = state => {
    const { name, tell, shift } = state.employeeForm;
    return ({
        name,
        tell,
        shift
    })
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);