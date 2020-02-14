/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import firebase from 'firebase';
import {DotIndicator} from 'react-native-indicators';

firebase.initializeApp({
  apiKey: 'AIzaSyC8OvjesWSGr3IBtL7yJ7i-Z3abpC9UY_4',
  authDomain: 'filmclub-1e0a3.firebaseapp.com',
  databaseURL: 'https://filmclub-1e0a3.firebaseio.com',
  projectId: 'filmclub-1e0a3',
  storageBucket: 'filmclub-1e0a3.appspot.com',
  messagingSenderId: '453135087089',
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false,
    };
  }
  registerPage() {
    this.props.navigation.navigate('register');
  }

  onLoginPress() {
    this.setState({error: '', loading: true});
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({error: '', loading: false});
        this.props.navigation.navigate('mainfeed');
      })
      .catch(() => {
        this.setState({error: 'Authenticate failed!', loading: false});
      });
  }
  renderButtonOrLoading() {
    if (this.state.loading) {
      return (
        <View style={styles.button}>
          <DotIndicator size={4} />
        </View>
      );
    }
    return (
      <View style={styles.button}>
        <Button
          title="Register"
          titleStyle={{color: 'black'}}
          buttonStyle={{borderColor: 'black'}}
          type="outline"
          onPress={() => {
            this.registerPage();
          }}
        />
        <Button
          title="Login"
          type="outline"
          titleStyle={{color: 'black'}}
          buttonStyle={{borderColor: 'black'}}
          onPress={() => {
            this.onLoginPress();
          }}
        />
      </View>
    );
  }
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <View style={styles.container}>
          <View style={styles.topbar} />
          <View style={styles.logoview}>
            <Text style={styles.logo}>Film Club</Text>
          </View>
          <View style={styles.loginbar}>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              inputStyle={{marginLeft: 10}}
              autoCorrect={false}
              leftIcon={<Icon name="envelope" size={24} color="black" />}
              onChangeText={email => this.setState({email: email})}
            />
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              returnKeyType="done"
              inputStyle={{marginLeft: 10}}
              autoCorrect={false}
              leftIcon={<Icon name="lock" size={24} color="black" />}
              onSubmitEditing={() => {
                this.onLoginPress();
              }}
              onChangeText={password => this.setState({password: password})}
            />
          </View>
          <View style={styles.error}>
            <Text>{this.state.error}</Text>
          </View>
          {this.renderButtonOrLoading()}
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  logoview: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  error: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {flex: 1, justifyContent: 'space-around'},
  topbar: {
    width: 100 + '%',
    height: 80,
    paddingTop: 35,
  },
  loginbar: {
    width: 100 + '%',
    height: 40 + '%',
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100 + '%',
    paddingTop: 20,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    fontFamily: 'Billabong',
    fontSize: 60,
  },
});
export default Login;
