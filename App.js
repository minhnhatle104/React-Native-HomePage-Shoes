import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import HomePage from './screens/homepage/HomePage'

export default function App() {
  return (
    <Provider store={store}>
      <>
        <HomePage/>
      </>
    </Provider>
  )
}