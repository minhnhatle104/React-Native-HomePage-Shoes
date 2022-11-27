import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/styles'
import { useDispatch } from 'react-redux'
import { searchShoe } from '../../../redux/ReduxStateSlice'

export default function Search() {
  const dispatch = useDispatch()

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
            <TextInput onChangeText={newText=>{
              dispatch(searchShoe(newText))
            }} placeholder='Search Shoes' />
          </View>
        </View>

        <View style={styles.search_view_filter}>
          <Image source={require("../../../assets/images/filter.png")} style={[styles.img50,{alignSelf:"center"}]} />
        </View>
      </View>
    </View>
  )
}