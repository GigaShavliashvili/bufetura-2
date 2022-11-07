import React from 'react'
import {Text} from "react-native"
const ValidationErrorText = ({validationText}) => {
  return (
    <Text className="text-red-800 text-sm">{validationText}</Text>
  )
}

export default ValidationErrorText