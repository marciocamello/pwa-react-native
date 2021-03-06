import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text } from 'react-native';

interface Member{
  login: string;
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
      keyExtractor={member => member.login}
      renderItem={({item: member}) => (
        <View>
          <Image source={{uri: member.avatar_url}} />
          <Text>{member.login}</Text>
        </View>
      )}
    />
  );
}

export default Main;