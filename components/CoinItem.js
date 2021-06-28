import React from 'react'
import { View, Text } from 'react-native'

const CoinItem = ({coin}) => {
    return (
        <View>
            <Text>{coin.name}</Text>
        </View>
    )
}

export default CoinItem
