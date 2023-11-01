import { StyleSheet, Text, View, TextInput, Platform, Button,Image} from 'react-native'
import { KeyboardAvoidingView } from "react-native";
import React,{useState} from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CreatePostScreen = () => {
    const [description, setDescription] = useState('');
    const insets = useSafeAreaInsets()

    const handlePost = () => {
        console.warn("posting...", description)
        setDescription("")
    }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding":"height"}
    style={[styles.container,{marginBottom:insets.bottom}]}
    contentContainerStyle={{flex:1}}
    keyboardVerticalOffset={150}
    >
        <Text>Create Post Screen</Text>
        <View style={styles.header}>
          <Image
            source={{ uri: user.image }}
            style={styles.profileImage}
          />
          <View>
            <Text>{user.name}</Text>
            <Text>{user.createdAt}</Text>
          </View>
        </View>
        <TextInput placeholder="What's on your mind"
         value={description}
         onChangeText={setDescription}
         multiline
         />
         <View style={styles.buttonContainer}>
            <Button
            onPress={handlePost}
            disabled={!description}
            title='Post'
            />
         </View>
    </KeyboardAvoidingView>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
    header: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
      },
      name: {
        fontWeight: "500",
      },
      buttonContainer:{
        marginTop:"auto",
        marginVertical:10
      }
})
const user = {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
  };