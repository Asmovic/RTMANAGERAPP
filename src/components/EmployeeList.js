import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        /* this.createDataSource(this.props); */
    }

    componentWillReceiveProps(nextProps) {
        /* this.createDataSource(nextProps); */
    }

    createDataSource({ employees }) {
        const dts = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = dts.cloneWithRows(employees);
    }

    renderRow(employee) {
        const data = employee.item;
        return <ListItem employee={data} />
    }
    render() {

        return (
            /*             <ListView
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this.renderRow}
                        /> */

            <FlatList
                data={this.props.employees}
                renderItem={this.renderRow}
                keyExtractor={employee => employee.uid}
            />

        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    });
    return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);