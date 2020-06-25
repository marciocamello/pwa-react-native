import React, { useState } from 'react';
import { View } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
// import { Container } from './styles';

const Camera: React.FC = () => {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);

  return <View style={{flex: 1}}>
    <ExpoCamera style={{flex: 1}}/>
  </View>;
}

export default Camera;