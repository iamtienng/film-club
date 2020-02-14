import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import firebase from 'firebase';

class Profile extends Component {
  logout() {
    this.setState({currentUser: firebase.auth().signOut()});
    this.props.navigation.navigate('loading');
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Sign out!"
          onPress={() => {
            this.logout();
          }}
        />
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
