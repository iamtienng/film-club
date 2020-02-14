import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PostFeed} from '../container';

class MainFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
        <View style={styles.topbar}>
          <Text style={{fontFamily: 'Billabong', fontSize: 30}}>Film Club</Text>
        </View>
        <PostFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, width: 100 + '%', height: 100 + '%'},
  statusbar: {
    width: 100 + '%',
    paddingTop: 5 + '%',
    backgroundColor: 'rgb(250,250,250)',
  },
  topbar: {
    width: 100 + '%',
    height: 50,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainFeed;
