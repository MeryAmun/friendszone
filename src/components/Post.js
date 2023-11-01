import { StyleSheet, Text, View,Image, } from 'react-native'
import React from 'react'
import { Entypo,AntDesign,
  FontAwesome5,
  MaterialCommunityIcons, } from "@expo/vector-icons";
import { like } from '../../assets/index'

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.header}>
        <Image source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg"}}
        style={styles.profileImage}
        />
        <View>
          <Text>Chebs Suso</Text>
          <Text>19 m</Text>
        </View>
        <Entypo
        name='dots-three-horizontal'
        size={18}
        color='gray'
        style={styles.icon}
        />
        </View>
        <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </Text>
        <Image source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"}}
        style={styles.image}/>
      </View>
      <View>

      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container:{
    
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start"
  },
  post:{
    backgroundColor:"#fff",
    marginVertical:5
  },
  header:{
    padding:10,
    flexDirection:"row",
    alignItems:"center",
    width:"100%"
  },
  profileImage:{
    width:40,
    height:40,
    borderRadius:25,
    marginRight:10
  },
  name:{
    fontWeight:"500",
  },
  subtitle:{
    color:"gray"
  },
  icon:{
    marginLeft:"auto"
  },
  description:{
    lineHeight:20,
    padding:10
  },
  image:{
    width:"100%",
    aspectRatio:1,
  },
  footer:{
    paddingHorizontal:10
  },
  statsRow:{
    flexDirection:"row",
    borderBottomWidth:"",
    paddingVertical:10,
    borderColor:"lightgray"
  },
  likeIcon:{
    width:20,
    height:20,
    marginRight:5
  },
  likedBy:{
    color:"gray"
  },
  shares:{
    color:"gray",
    marginLeft:"auto"
  }

})