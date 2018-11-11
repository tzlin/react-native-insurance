import React, { Component } from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import publics from '../../resources/style/public';
import { isiPhoneX } from '../../resources/style/util';
export default class header extends Component {
    constructor(props){
        super(props);
    }
    handleBack = () =>{
        this.props.navigation.goBack();
    };
    render(){
        let color = this.props.color ? this.props.color : '#fd5353';
        return (
            <View style={[publics.header,publics.flexRowCenter,{backgroundColor:color}]}>
                <StatusBar backgroundColor={color} barStyle="light-content" hidden={false}/>
                {
                    this.props.backText ? <TouchableOpacity onPress={this.handleBack} activeOpacity={.8}><Text style={[publics.headerBackText]}>返回</Text></TouchableOpacity> : null
                }
                {
                    this.props.backBool ? <TouchableOpacity onPress={this.handleBack} activeOpacity={.8}>{isiPhoneX() ? <Image style={[publics.backSize]} source={require('../../resources/image/7.png')} resizeMode="contain"/> : <View style={[publics.headerIconSize]} />}</TouchableOpacity>: null

                }
                {
                    !this.props.backText && !this.props.backBool ? <TouchableOpacity style={[publics.backSize]} activeOpacity={1}/> : null
                }
                <Text style={[publics.headerTitle]}>{this.props.title}</Text>
                {this.props.children}
            </View>
        )
    }
}