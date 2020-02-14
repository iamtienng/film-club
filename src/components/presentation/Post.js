import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../config';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      screenwidth: Dimensions.get('window').width,
      liked: false,
    };
  }
  commentpage() {
    this.props.navigation.navigate('login');
  }
  likeToggled() {
    this.setState({
      liked: !this.state.liked,
    });
  }
  render() {
    const imageSelection =
      this.props.item % 2 == 0
        ? 'https://www.interviewmagazine.com/wp-content/uploads/2009/04/img-emma-watson-fig-2_124713127345-750x1000.jpg'
        : 'https://i.pinimg.com/originals/ec/f8/36/ecf83643d1c2893f2db3327f55724b5d.png';
    const imageHeight = this.state.screenwidth * 1.1;
    const imageUri = imageSelection;
    const hearttype = this.state.liked ? 'heart' : 'hearto';
    const userName = this.props.item % 2 == 1 ? 'iamtienng' : 'quynhtran221995';
    return (
      <View>
        <View style={styles.userbar}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image style={styles.userPic} source={{uri: imageUri}} />
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 30, marginBottom: 15}}>...</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              this.likeToggled();
            }}>
            <Image
              style={{width: this.state.width, height: imageHeight}}
              source={{uri: imageUri}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconBar}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                this.likeToggled();
              }}>
              <Icon style={styles.icon} name={hearttype} size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.commentpage();
              }}>
              <Icon1 style={styles.icon} name="bubble" size={24} />
            </TouchableOpacity>
            <Icon1 style={styles.icon} name="paper-plane" size={24} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon style={{marginRight: 10}} name="download" size={24} />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginLeft: 10}}>128 likes</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.userName, {marginLeft: 10}]}>{userName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempbar: {
    height: 20,
    width: 100 + '%',
    backgroundColor: 'rgb(250,250,250)',
  },

  userbar: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userName: {
    paddingLeft: 5,
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 10,
  },
  commentBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    borderColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default Post;
