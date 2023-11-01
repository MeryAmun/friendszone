import { StyleSheet,SafeAreaView } from 'react-native';
import { FeedScreen } from './src/screens';
import posts from "./assets/data/posts.json"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <FeedScreen feed={posts}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:20
  },
});
