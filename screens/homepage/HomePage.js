import { View, Text, SafeAreaView } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import AppBar from './components/AppBar'
import ShoeMenu from './components/ShoeMenu'
import Search from './components/Search'
import { useDispatch, useSelector } from 'react-redux'
import { getListShoe } from '../../redux/ShoeThunk'
import { searchShoe } from '../../redux/ReduxStateSlice'

export default function HomePage() {
  const { listShoe } = useSelector(state => state.ReduxReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListShoe())
  }, [])

  const filterShoe = useCallback((textSearch)=>{
    dispatch(searchShoe(textSearch))
  })

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"rgb(235,234,239)"}}>
      <AppBar/>
      <Search filterShoe={filterShoe}/>
      <ShoeMenu listShoe={listShoe} />
    </SafeAreaView>
  )
}