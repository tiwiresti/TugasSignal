import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from '@rneui/base';
import { db } from '../firebase';

const CustomListItem = ({id, chatName,enterChat}) => {

  const [chatMessages,setChatMessages] = useState([])

  useEffect(() => {
    const unsubcribe = db.collection('chats').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => (
      setChatMessages(snapshot.docs.map(doc => doc.data()))
    ));
    return unsubcribe;
  })

  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
        <Avatar rounded source={{uri :chatMessages?.[0]?.photoURL || 'https://lastfm.freetls.fastly.net/i/u/ar0/341d3f6461fb4dcccd27f126c8efb519.jpg'}}/>

        <ListItem.Content>
            <ListItem.Title style={{fontWeight: "800"}}>
                {chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMod="tail">
                {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})