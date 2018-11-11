import React,{ Component } from 'react';
import {Image, View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from '../../resources/style/styles';
import publics from '../../resources/style/public';

export default class search extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : ''
        }
    }
    handlerChange(text) {
        this.setState({text});
    }
    handlerPage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    render(){
        return (
            <View style={[styles.bannerSearchBox,publics.flex1]}>
                <View style={[publics.flexRowCenter]}>
                    <View style={[styles.searchInput,publics.flexRowCenterFlexStart,publics.paddingTopAndBottom2]}>
                        <Image source={require('../../resources/image/home/home_query.png')} style={[publics.nextSize]} resizeMode="contain"/>
                        <TextInput style={[styles.searchInputText]} placeholderTextColor="#fff" placeholder="产品、计划书" onChangeText={(text) => this.handlerChange(text)}/>
                    </View>
                    <TouchableOpacity onPress={()=>this.handlerPage('message')} activeOpacity={.8} style={[styles.messageRemind]}>
                        <Image source={require('../../resources/image/home/home_message.png')} style={[publics.iconSize18]} resizeMode="contain"/>
                        {this.props.messageNumber > 0 ? <View style={[styles.messageRemindPoint]}><Text style={styles.messageRemindPointText}>{this.props.messageNumber}</Text></View> : null}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}