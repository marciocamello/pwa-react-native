import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
// import { Container } from './styles';

const Camera: React.FC = () => {
  
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return <View style={{flex: 1}}>
    <ExpoCamera style={{flex: 1}} type={type}/>
  </View>;
}

export default Camera;