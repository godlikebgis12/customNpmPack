import { View, Text, } from 'react-native'
import React, { useState, useEffect } from 'react'

const customlibrarynew = ({
  setData = () => { },
  text
}) => {

  useEffect(() => {
    setData('log')
  }, [])

  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default customlibrarynew
