import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text } from 'react-native';

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
  }, [members]);

  return (
    <FlatList
      data={members}
      keyExtractor={member => member.email}
      renderItem={({item: member}) => (
        <View>
          <Text>{member.email}</Text>
        </View>
      )}
    />
  );
}

export default Main;