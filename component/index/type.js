import React,{ Component } from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from '../../resources/style/styles';
import publics from '../../resources/style/public';
import News from './news';

export default class type extends Component {
    constructor(props){
        super(props);
        const type_1 = require('../../resources/image/home/home_nav_1.png');
        const type_2 = require('../../resources/image/home/home_nav_2.png');
        const type_3 = require('../../resources/image/home/home_nav_3.png');
        const type_4 = require('../../resources/image/home/home_nav_4.png');
        this.state = {
            items : [
                {typeText:'资讯圈',source:type_1,page:'my'},
                {typeText:'工资条',source:type_2,page:'my'},
                {typeText:'签到',source:type_3,page:'signIn'},
                {typeText:'车险',source:type_4,page:'my'},
            ]
        }

    }
    handlePage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    render(){
        return (
            <View style={[publics.marginTopAndBottom5,publics.backgroundColorWhite]}>
                <View style={[styles.width100,publics.flexRowCenter]}>
                    {
                        this.state.items.map((item,key)=><TouchableOpacity onPress={()=>this.handlePage(item.page)} activeOpacity={.8} key={'home-type-'+key} style={[styles.navBoxItem,publics.paddingTopAndBottom2]}><Image style={[publics.homeTypeImageSize]} source={item.source}/><Text style={[publics.font_3,publics.paddingTop3]}>{item.typeText}</Text></TouchableOpacity>)
                    }
                </View>
                <News news={this.props.news}/>
            </View>
        )
    }
}