import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

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
        <View>
          <Image source={{uri: member.avatar_url}} />
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