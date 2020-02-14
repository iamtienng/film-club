/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import firebase from 'firebase';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namen: '',
      emailn: '',
      passwordn: '',
      passwordr: '',
      errorMessage: '',
    };
  }
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  register() {
    if (this.state.passwordn.length < 6) {
      Alert.alert('Please enter password at least 6 characters long.');
    } else if (!this.validateEmail(this.state.emailn)) {
      Alert.alert('Please enter a valid email.');
    } else if (this.state.passwordn !== this.state.passwordr) {
      Alert.alert('Please enter the same password for both.');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.emailn, this.state.passwordn)
        .then(() => this.props.navigation.navigate('login'))
        .catch(error => this.setState({errorMessage: error.message}));
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <View style={styles.container}>
          <View style={styles.comebackButton}>
            <Button
              type="clear"
              icon={<Icon name="arrow-left" size={15} color="black" />}
              onPress={() => {
                this.props.navigation.navigate('login');
              }}
            />
          </View>
          <View style={styles.logoView}>
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
              onChangeText={user_email => this.setState({emailn: user_email})}
            />
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              inputStyle={{marginLeft: 10}}
              autoCorrect={false}
              leftIcon={<Icon name="lock" size={24} color="black" />}
              onChangeText={user_password =>
                this.setState({passwordn: user_password})
              }
            />
            <Input
              placeholder="Repeat Password"
              autoCapitalize="none"
              secureTextEntry={true}
              inputStyle={{marginLeft: 10}}
              autoCorrect={false}
              leftIcon={<Icon name="lock" size={24} color="black" />}
              onChangeText={user_passwordr =>
                this.setState({passwordr: user_passwordr})
              }
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Sign Up"
              type="outline"
              titleStyle={{color: 'black'}}
              buttonStyle={{borderColor: 'black'}}
              onPress={() => {
                this.register();
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around'},
  topbar: {
    width: 100 + '%',
    height: 80,
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbar: {
    width: 100 + '%',
    height: 40 + '%',
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 100 + '%',
    paddingTop: 20,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {fontFamily: 'Billabong', fontSize: 60},
  comebackButton: {
    width: 100 + '%',
    height: 80,
    paddingTop: 35,
    alignItems: 'flex-start',
  },
  logoView: {justifyContent: 'center', flex: 1, alignItems: 'center'},
});
