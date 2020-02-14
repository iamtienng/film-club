import React, {Component} from 'react';
import {View, KeyboardAvoidingView, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class Comment extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <View style={styles.container}>
          <View style={styles.comebackButton}>
            <Button
              type="clear"
              icon={<Icon name="arrow-left" size={15} color="black" />}
              onPress={() => {
                this.props.navigation.navigate('mainfeed');
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Comment;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-around'},
  comebackButton: {
    width: 100 + '%',
    height: 80,
    paddingTop: 35,
    alignItems: 'flex-start',
  },
});
