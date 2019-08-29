import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, loginWithFB } from '../actions';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    loginUser() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });

    }
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={Styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner />
        } else {
            return (
                <Button onPress={this.loginUser.bind(this)}>Login</Button>
            )


        }
    }

    loginFacebook() {
        console.log('Inside');
        LoginManager.logInWithPermissions(['public_profile'])
            .then(result => {
                if (result.isCancelled) {
                    alert('Login was cancelled')
                } else {
                    console.log('Hurray');
                    alert('login was successful with permissions: ' + result.grantedPermissions.toString())
                    /* Actions.main(); */
                }
            }, error => {
                alert('Login failed with error - ', error);
            })
    }
    render() {
        const { email, password } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input label='Email' value={email} placeholder='enter email here!!!'
                        onChangeText={this.onEmailChange.bind(this)} />
                </CardSection>
                <CardSection>
                    <Input secureTextEntry label='Password' value={password} placeholder='enter password here!!!'
                        onChangeText={this.onPasswordChange.bind(this)} />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}

                </CardSection>

                <CardSection>

                    <Button onPress={this.loginFacebook.bind(this)}>Login With Facebook</Button>
                </CardSection>
            </Card>
        );
    }
}

const Styles = {
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red'
    }
}

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    return {
        email,
        password,
        error,
        loading
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, loginWithFB })(LoginForm);