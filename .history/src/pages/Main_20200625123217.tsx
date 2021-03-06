import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

// import { Container } from './styles';

const Main: React.FC = () => {
  const [members,setMembers] = useState();

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
      renderItem={(item: member) => (
        <View>
          <Image>
            
          </Image>
        </View>
      )}
  );
}

export default Main;