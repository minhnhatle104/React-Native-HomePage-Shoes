import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

export default function Search() {
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
            <TextInput placeholder='Search Shoes' />
          </View>
        </View>

        <View style={styles.search_view_filter}>
          <Image source={require("../../../assets/images/filter.png")} style={[styles.img32,{alignSelf:"center"}]} />
        </View>
      </View>
    </View>
  )
}