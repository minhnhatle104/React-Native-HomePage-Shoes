import { View,TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import { styles } from '../styles/styles'

function AppBar() {
  return (
    <View style={styles.appBar}>
      <TouchableOpacity style={styles.appBar_img}>
        <Image source={require("../../../assets/images/arrow_back.png")} style={styles.img24} />
      </TouchableOpacity>
        <Image source={require("../../../assets/images/human.jpg")} style={{height:36,width:36}} />
    </View>
  )
}

export default memo(AppBar)