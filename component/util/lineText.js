import React,{ Component } from 'react';
import {Text} from 'react-native';
export default class lineTextlineText extends Component {
    render(){
        return (
             <Text numberOfLines={this.props.line} ellipsizeMode='tail' {...this.props}>{this.props.children}</Text>
        )
    }
}

