import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CoinItem = ({coin}) => {
    return (
        <View style = {styles.containerItem}>
            <View style = {styles.coinName}>
                <Image style= {styles.image}
                    source = {{uri: coin.image}}
                />
                <Text style = {styles.text}>{coin.name}</Text>
                <Text style = {styles.textSymbol}>{coin.symbol}</Text>
            </View>
            <Text style = {styles.text}>1000</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coinName: {
        flexDirection: 'row'
    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        color: '#ffffff'
    },
    textSymbol: {
        color: '#434343',
        textTransform: "uppercase"
    }
})

export default CoinItem
