import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ChatList from './ChatList'

const Chats = () => (
<ScrollView style={styles.chats} showsVerticalScrollIndicator={false}>
<ChatList item={item.chat_list}/>
</ScrollView>
)

export default Chats;

const styles = StyleSheet.create({
    
});