import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { styles } from '../styles/styles'

function Search(props) {
  const { filterShoe } = props

  return (
    <View style={styles.search}>
      <Text style={styles.search_title}>Find Your</Text>
      <Text style={styles.search_title}>Dream Shoes</Text>
      <View style={styles.search_view}>

        <View style={styles.search_view_bar}>
          <TouchableOpacity style={styles.search_view_bar_icon} >
            <Image source={require("../../../assets/images/search.png")} style={styles.img28} />
          </TouchableOpacity>
          <View>
            <TextInput onChangeText={newText => {
              filterShoe(newText)
            }} placeholder='Search Shoes' />
          </View>
        </View>

        <View style={styles.search_view_filter}>
          <Image source={require("../../../assets/images/filter.png")} style={[styles.img50, { alignSelf: "center" }]} />
        </View>
      </View>
    </View>
  )
}

export default memo(Search)