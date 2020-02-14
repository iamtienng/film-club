import React, { Component } from "react";
import { Post } from "../presentation";
import { FlatList } from "react-native";

class NotificationList extends Component {
  _renderPost({ item }) {
    return <Post item={item} />;
  }
  _returnKey(item) {
    return item.toString();
  }
  render() {
    return (
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={this._returnKey}
        renderItem={this._renderPost}
      />
    );
  }
}

export default NotificationList;
