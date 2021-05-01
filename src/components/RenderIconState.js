import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import {images} from '../assests/images'
import RenderIconButtons from './RenderIconButtons'

export default class RenderIconState extends Component {
    state= {
        icon: images.angry
    }
    handleIcon = (icon) => {
        this.setState({icon})
    }
    renderIconButton = () => {
        return(
            <View style={styles.ButtonGroup}>
                <RenderIconButtons handleIcon={()=> this.handleIcon(images.care)} icon={images.care}/>
                <RenderIconButtons handleIcon={()=> this.handleIcon(images.sad)} icon={images.sad}/>
                <RenderIconButtons handleIcon={()=> this.handleIcon(images.angry)} icon={images.angry}/>
                <RenderIconButtons handleIcon={()=> this.handleIcon(images.haha)} icon={images.haha}/>
                <RenderIconButtons handleIcon={()=> this.handleIcon(images.like)} icon={images.like}/>
                <RenderIconButtons handleIcon={()=> this.handleIcon(images.love)} icon={images.love}/>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.Container}>
                <Text>Bạn đang cảm thấy như thế nào ?</Text>
                <Image style= {styles.BigIcon} source={this.state.icon}/>
                {this.renderIconButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BigIcon: {
        width: 150,
        height: 150,
        marginVertical: 20
    },
    ButtonGroup: {
        flexDirection: 'row'
    }
})
