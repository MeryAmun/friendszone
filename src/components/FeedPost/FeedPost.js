import { Text, View, Image,Pressable } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { likeImage } from "../../../assets/index";
import { useNavigation } from "@react-navigation/native";

const Post = ({ feed }) => {
  const [isLiked, setIsLiked] = useState(false)
  const navigation = useNavigation();
  console.log(feed)
  return (
    <Pressable onPress={() => navigation.navigate("Profile", {id:feed.User.id})}
    style={styles.header}
    >
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.header}>
          <Image
            source={{ uri: feed.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text>{feed.User.name}</Text>
            <Text>{feed.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="gray"
            style={styles.icon}
          />
        </View>
        <Text style={styles.description}>{feed.description}</Text>
        <Image
          source={{
            uri: feed.image,
          }}
          style={styles.image}
        />
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <Image source={likeImage} style={styles.likeImageIcon} />
          <Text style={styles.likeImagedBy}>
            Elon Musk and {feed.numberOfLikes}  others
          </Text>
          <Text style={styles.shares}>{feed.numberOfShares} shares</Text>
        </View>
        {/* buttons */}
        <View style={styles.buttonRow}>
          <View style={styles.iconButton}>
            <AntDesign name="like2" size={18} 
            onPress={() => setIsLiked(!isLiked)}
            color={isLiked ? "royalblue":"gray"} />
            <Text style={[styles.iconButtonText,
            {color:isLiked ? "royalblue":"gray"}
            ]}>Like</Text>
          </View>
          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={16} color="gray" />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>
          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>
        </View>
      </View>
    </View>
    </Pressable>
  );
};

export default Post;
