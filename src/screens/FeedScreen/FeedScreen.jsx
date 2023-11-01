import { ScrollView,FlatList } from 'react-native'
import React from 'react'
import { FeedPost } from '../../components'

const FeedScreen = ({feed}) => {
  return (
    <ScrollView>
     <FlatList
     data={feed}
     renderItem={({item}) => (
      <FeedPost feed={item}/>
     )}
     showsVerticalScrollIndicator={false}
     />
    </ScrollView>
  )
}

export default FeedScreen
