import { NavigationContainer } from "@react-navigation/native";
import { CreatePostScreen, FeedScreen,ProfileScreen } from "./src/screens/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {FontAwesome} from "@expo/vector-icons";


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
       
      <Stack.Screen
  name="Feed"
  component={FeedScreen}
  options={({ navigation }) => ({
    headerRight: () => (
      <FontAwesome
        onPress={() => navigation.navigate("Profile")}
        name="user"
        size={24}
        color="gray"
      />
    ),
  })}
/>
         <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
