import { useState, useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [currentImage, setCurrentImage] = useState()
  const cameraRef = useRef(null);

  useEffect(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setHasPermission(status === 'granted')
  }, [])

  if (!hasPermission) {
    return <View>
      <Text>You don't camera permission</Text>
    </View>
  }

  const takePicture = async () => {
    const camera = cameraRef?.current
    if (camera) {
      let photo = await camera.takePictureAsync()
      console.log('photo --->', photo)
      setCurrentImage(photo.uri)
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      {currentImage ? <Image
        style={styles.tinyLogo}
        source={{
          uri: currentImage
        }}
      /> :
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={takePicture}>
            <Text style={styles.text}> Picture lelay! </Text>
          </TouchableOpacity>
        </View>
      </Camera>}
      <StatusBar style="auto" />
      {/* <WebView
        style={styles.container}
        source={{ uri: 'https://olx.com.pk' }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tinyLogo: {
    width: 300,
    height: 300
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: 'white'
  }
});


/*
  React Native Basic UI components.
  1. https://reactnative.dev/docs
  
  React Native APIs for e.g. (Camera, Webview, Video, Flashlight, Contacts, Gallery, Push Notifications, Map etc).
  1. https://docs.expo.dev/
*/