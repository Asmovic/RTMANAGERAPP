import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Text } from 'react-native';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';


class EmployeeEdit extends Component {
    state = {
        ShowModal: false
    }
    componentWillMount() {
        _.map(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onButtonPress() {
        const { name, tell, shift } = this.props;
        this.props.employeeSave({ name, tell, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { name, tell, shift } = this.props;
        Communications.text(tell, `Hello ${name}, your next shift is on ${shift}`);
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid })
    }
    onDecline() {
        this.setState({ ShowModal: false })
    }
    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Edit
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({ ShowModal: !this.state.ShowModal })}>Fire Employee</Button>
                </CardSection>
                <Confirm
                    visible={this.state.ShowModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    {`Are you sure you want to fire ${name} ?`}
                </Confirm>
            </Card>
        )
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
export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);