import React, { Component } from 'react';
import {Image,Dimensions} from 'react-native';

export default class image extends Component {
    constructor(props){
        super(props);
        this.state = {
            width : 0,
            height: 0
        }
    }
    componentWillMount(){
        let windowWidth = Dimensions.get('window').width;
        let pw = parseInt(this.props.width);
        Image.getSize(this.props.url, (w,h) => {
            let width   = w;
            let height  = h;
            if(pw){
                width  = Math.floor(windowWidth/100*pw);
                height = width / w * h;
            }
            this.setState({width:width, height:height});
        });
    }
    render(){
        //{this.props.children ? this.props.children : false}
        return <Image source={{uri:this.props.url}} {...this.props} style={[this.props.css ? this.props.css : '',this.props.style ? this.props.style : '',{width:this.state.width,height:this.state.height}]}/>
    }
}