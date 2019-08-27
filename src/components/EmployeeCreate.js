import React, { Component } from 'react';
import { Card, Button, CardSection } from './common';
import { connect } from 'react-redux';
import { employeeCreate, clear } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.clear();

    }
    onButtonPress() {
        const { name, tell, shift, employeeCreate } = this.props;

        employeeCreate({ name, tell, shift: shift || 'Monday' });
    }

    render() {

        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
                </CardSection>
            </Card>
        );
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
export default connect(mapStateToProps, { employeeCreate, clear })(EmployeeCreate);