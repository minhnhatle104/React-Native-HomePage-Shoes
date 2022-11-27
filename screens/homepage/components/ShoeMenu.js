import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListShoe } from '../../../redux/ShoeThunk'

export default function ShoeMenu() {
    const {listShoe} = useSelector(state => state.ReduxReducer)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getListShoe())
    },[])

  return (
    <View>
      <Text>ShoeMenu</Text>
    </View>
  )
}