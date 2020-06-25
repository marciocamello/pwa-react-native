import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

interface Member{
  email: string;
  avatar_url: string;
}

const Main: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        response.json().then(data => {
          data = data.map(d => {
            d.avatar_url = "https://avatars1.githubusercontent.com/u/4071580?s=460&u=a4c7ef937ff842afd94b05821fc0cd84225c99c0&v=4";
            return d;
          })
          setMembers(data);
        });
      })
  }, []);

  return (
    <FlatList
      contentContainerStyle={{padding: 24}}
      data={members}
      keyExtractor={member => member.email}
      renderItem={({item: member}) => (
        <View style={styles.member}>
          <Image style={styles.image} source={{uri: member.avatar_url}} />
          <Text>{member.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  }
})

export default Main;