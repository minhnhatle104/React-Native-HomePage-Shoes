import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import StaggeredList from '@mindinventory/react-native-stagger-view'
import { Dimensions } from 'react-native';
import { styles } from '../styles/styles'

export default function ShoeMenu(props) {
  const {listShoe} = props

  const SCREEN_WIDTH = Dimensions.get('window').width;

  const getChildrenStyle = (id) => {
    const styleHeight = id%2==0 ? Number(0.75*20+12)*10 : Number(0.87*20+12)*10

    return {
      width: (SCREEN_WIDTH - 50) / 2,
      height: styleHeight,
      backgroundColor: 'white',
      margin: 4,
      padding:4,
      borderRadius: 18,
    };
  };

  const renderChildren = (item) => {
    return <TouchableOpacity style={getChildrenStyle(item.id)} key={item.id}>
      <View style={{height:"100%",width:"100%",justifyContent:"center"}}>
        <TouchableOpacity style={styles.likeContain}>
          <Image source={require("../../../assets/images/heart.png")} style={styles.likeContain_heart}/>
        </TouchableOpacity>
        <Image
          onError={() => { }}
          style={{height:"50%",width:"100%",alignSelf:"center"}}
          source={{
            uri: item.image,
          }}
          resizeMode={'cover'}
        />
        <Text style={styles.shoeName}>{item.name}</Text>
        <Text style={styles.shoeDesc}>Shoe</Text>
        <Text style={styles.shoePrice}>£{item.price}</Text>
      </View>
    </TouchableOpacity>
  }

  return (
    <View style={{flex:1,padding:15}}>
      <StaggeredList
      data={listShoe}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => renderChildren(item)}
    />
    </View>
  )
}