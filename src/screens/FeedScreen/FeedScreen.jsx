import { ScrollView } from 'react-native'
import React from 'react'
import { FeedPost } from '../../components'

const FeedScreen = ({feed}) => {
  return (
    <ScrollView>
     {
      feed.map((post) => (
        <FeedPost key={post.id} feed={post}/>
      ))
     }
    </ScrollView>
  )
}

export default FeedScreen
