import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Shivam"
                        value={this.props.name}
                       onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                    onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        label="Phone"
                        placeholder="+91 8168386500"
                        value={this.props.phone}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
