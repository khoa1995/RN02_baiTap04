import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default class RenderIconButtons extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.handleIcon}>
                    <Image style={styles.ButtonIcon} source={this.props.icon}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    ButtonIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
        marginVertical: 20
    }
})