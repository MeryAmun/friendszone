import { StyleSheet, Text, View, TextInput, Platform, Button, Image } from 'react-native'
import { KeyboardAvoidingView } from "react-native";
import React, { useState } from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons";
import { isLessOrEqualMaxSize, getFileInfo } from '../../utils';
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from '@react-navigation/native';

const CreatePostScreen = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()


  if (hasGalleryPermission === false) {

    return <View style={styles.container} >
      <Text>Waiting for Camera permissions...</Text>
    </View>;
  }
  const handleImagePicker = async () => {
    // No permissions request is necessary for launching the image library
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,

      });
      if (result.assets[0].canceled) return


      if (!result.assets[0].canceled && result.assets[0].type === "image") {
        setImage(result.assets[0].uri);

      }

      //=================CALL CHECK FILE INFO AND FILE SIZE CHECK FUNCTIONS ==================== 

      const { assets } = result
      const fileInfo = await getFileInfo(assets[0].uri)

      if (!fileInfo?.size) {
        Alert.alert('Warning', "Can't select this file as the size is unknown.", [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ])
      }
      if (assets[0].type === 'image') {
        const imageSizeLimit = isLessOrEqualMaxSize(fileInfo.size, 50)
        if (!imageSizeLimit) {
          Alert.alert('Warning', 'Image size must be smaller than 50MB!!', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Ok',
              onPress: () => { onReset },
            }
          ])
          return
        }
      }


    } catch (error) {
      console.log(error)
    }
  };
  const handlePost = () => {
    console.warn("posting...", description)
    setDescription("")
    navigation.goBack()
  }
  return (
    <SafeAreaProvider style={styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: insets.bottom }]}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={150}
    >
      <Text>Create Post Screen</Text>
      <View style={styles.header}>
        <Image
          source={{ uri: user.image }}
          style={styles.profileImage}
        />

        <Text>{user.name}</Text>
        <Entypo
          onPress={handleImagePicker}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>
      <TextInput placeholder="What's on your mind"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={handlePost}
          disabled={!description}
          title='Post'
        />
      </View>
    </KeyboardAvoidingView>
    </SafeAreaProvider>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical:10
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
  buttonContainer: {
    marginTop: "auto",
    marginVertical: 10
  },
  icon: {
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
})
const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};