import { useState, useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Switch, Button, Image, TouchableOpacity, NativeModules } from 'react-native';
import { WebView } from 'react-native-webview';
import { Camera } from 'expo-camera';
import RegistrationModal from './src/components/RegistrationModal'
const { StatusBarManager } = NativeModules

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [modalVisible, setModalVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState()
  const cameraRef = useRef(null);

  useEffect(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setHasPermission(status === 'granted')
  }, [])

  if (!hasPermission) {
    return <View>
      <Text>You don't have camera permission</Text>
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
  console.log('statusBarHeight: ', StatusBarManager.HEIGHT);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={"red"}
        ios_backgroundColor="#3e3e3e"
        // onValueChange={toggleSwitch}
        // value={isEnabled}
      />
      <RegistrationModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <Button title="Modal open kar oye!" onPress={() => setModalVisible(true)}/>
      {currentImage ? <Image
        style={styles.tinyLogo}
        source={{
          uri: currentImage
        }}
      /> : <View />
      // <Camera style={styles.camera} type={type} ref={cameraRef}>
      //   <View style={styles.buttonContainer}>
      //     <TouchableOpacity
      //       style={styles.button}
      //       onPress={() => {
      //         setType(
      //           type === Camera.Constants.Type.back
      //             ? Camera.Constants.Type.front
      //             : Camera.Constants.Type.back
      //         );
      //       }}>
      //       <Text style={styles.text}> Flip </Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity
      //       style={styles.button}
      //       onPress={takePicture}>
      //       <Text style={styles.text}> Picture lelay! </Text>
      //     </TouchableOpacity>
      //   </View>
      // </Camera>
      }
      <StatusBar style="auto" backgroundColor="red"/>
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
    backgroundColor: '#fff',
    marginTop: StatusBarManager.HEIGHT
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
 EXPO vs React Native CLI

 EXPO
 ====
 PROS:
 1. You don't need Android Studio/Xcode (SDK: Software Development Kit).
 2. Less build errors
 3. You don't need MAC OS for iOS app during development. 
 You can see the Output in real iOS device
 4. External hardware libraries (Camera, Microphone etc)
 don't require Linking
 5. Easy to maintain
 
 CONS:
 1. Development is slow
 2. We can't link our Native code with Expo apps.
 3. You are limited to Expo (Hardware) libraries
 4. Build size is always huge.
 
 RN CLI:
 ======
 
 PROS:
 1. Development is fasts
 2. We can link our Native code with Expo apps.
 3. You are not to limited to any particular library.
 4. Build size is always less.

 CONS:
 1. You need Android Studio/Xcode (SDK)
 2. More build errors (Specially in iOS)
 3. You will need MAC OS for iOS build even during 
 development
 4. External hardware libraries (Camera, Microphone etc)
 require Linking
 5. Difficult to Maintain

*/

/*
  Linking: Connecting Native code (Java/Swift) with your RN app
*/



/*
  React Native Basic UI components.
  1. https://reactnative.dev/docs
  
  React Native APIs for e.g. (Camera, Webview, Video, Flashlight, Contacts, Gallery, Push Notifications, Map etc).
  1. https://docs.expo.dev/
*/