import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const chatListItem = ({ item }) => (
<View style={styles.chat_list_item}>
<Image
    style={styles.sender_profile_pic}
    source={{uri: item.sender_profile_pic}}
    />
<Text style={styles.sender_message}>{item.sender_message}</Text>
<Text style={styles.your_message}>{item.your_message}</Text>
</View>
  );

const ChatList = ({ item }) => (
<FlatList
    style={styles.chat_list}
    data={item}
    renderItem={chatListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ChatList;

const styles = StyleSheet.create({
    'sender_profile_pic': {
        'width': '10vw',
        'height': '10vw',
        'marginTop': 10,
        'borderRadius': 50,
        'marginLeft': 20
    },
    'sender_message': {
        'fontSize': 13,
        'fontWeight': '400',
        'paddingHorizontal': 20,
        'paddingTop': 5
    },
    'your_message': {
        'fontSize': 13,
        'fontWeight': '400',
        'paddingHorizontal': 20,
        'textAlign': 'right',
        'marginTop': 10
    }
});