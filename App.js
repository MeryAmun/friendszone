import { StyleSheet, Text, View } from 'react-native';
import { Post } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Post/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
