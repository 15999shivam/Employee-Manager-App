import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
//import { Actions, PARAMS } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
    onEmailChange(text) {
       // console.log('YOOOOOOOOOOOOOOO');
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        //console.log('hiiiiiiiiiiiiiiiii');
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderError() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Text style={Styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            </View>
        );
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
       }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
            Log IN
            </Button>);
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    onChangeText={this.onEmailChange.bind(this)}
                    label='Email'
                    placeholder='eamil@gmail.com'
                    value={this.props.email}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                    onChangeText={this.onPasswordChange.bind(this)}
                    secure 
                    label='Password'
                    placeholder='password'
                    value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                
                    {this.renderButton()}
                </CardSection>
            </Card>
        
        );
    }
}

const Styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    //console.log('password=' + state.auth.password); 
    const { email, password, error, loading } = state.auth;
    return {
        email,
         password,
         error,
        loading
    }; 
};
export default connect(
    mapStateToProps,
    { emailChanged, passwordChanged, loginUser }
    )(LoginForm);
