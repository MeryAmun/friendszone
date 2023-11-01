import { StyleSheet,SafeAreaView, StatusBar} from 'react-native';
import { FeedScreen,CreatePostScreen } from './src/screens';
import posts from "./assets/data/posts.json"
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
    {/* <SafeAreaView style={styles.container}> */}
       <StatusBar style="auto" />
       <CreatePostScreen/>
     <FeedScreen feed={posts}/>
    {/* </SafeAreaView> */}
    </SafeAreaProvider>
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
