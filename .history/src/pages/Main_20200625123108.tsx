import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

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
  return <View />;
}

export default Main;