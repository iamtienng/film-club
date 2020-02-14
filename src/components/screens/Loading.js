import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {DotIndicator} from 'react-native-indicators';

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'mainfeed' : 'login');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={{fontFamily: 'Billabong', fontSize: 50}}>Film Club</Text>
        </View>
        <DotIndicator size={8} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 100 + '%',
    height: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
