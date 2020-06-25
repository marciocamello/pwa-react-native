import React, { useState, useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';

interface Member{
  login: string;
  avatar_url: string;
}

const Main: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch('https://api.gihub.com/orgs/rocketseat/members')
      .then(response => {
        response.json().then(data => {
          setMembers(data);
        });
      })
  })
  return (
    <FlatList
      data={members}
      keyExtractor={member => member.login}
      renderItem={({item: member}) => (
        <View>
          <Image source={{uri: member.avatar_url}} />
        </View>
      )}
    />
  );
}

export default Main;