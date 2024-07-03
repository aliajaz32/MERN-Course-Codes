import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={{ flex: 0.1, backgroundColor: 'red' }} />
      <View style={{ flex: 1, backgroundColor: 'green' }} />
      <View style={{ flex: 0.1, backgroundColor: 'blue' }} /> */}
      <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'green' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: 'row', //flex-direction: 'column' (by default)
  //   backgroundColor: '#fff',
  //   justifyContent: 'center', //vertical alignment in column case
  //   alignItems: 'flex-end' //horizontal alignment in column case
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around', //vertical alignment in column case
    alignItems: 'center' //horizontal alignment in column case
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   // justifyContent: 'center', //vertical alignment in column case
  //   // alignItems: 'center' //horizontal alignment in column case
  // }
});