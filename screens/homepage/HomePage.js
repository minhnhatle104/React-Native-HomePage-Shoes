import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AppBar from './components/AppBar'
import ShoeMenu from './components/ShoeMenu'
import Search from './components/Search'

export default function HomePage() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"rgb(235,234,239)"}}>
      <AppBar/>
      <Search/>
      <ShoeMenu/>
    </SafeAreaView>
  )
}