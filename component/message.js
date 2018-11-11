import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import Header from './util/header';
import LineText from './util/lineText';

export default class message extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {page:'customer',image:'http://thyrsi.com/t6/601/1541866634x2918527206.jpg',date:'06月20日',title:'小XX',intro:'欢迎,你的到来感到热烈欢迎...',icon:'客服',news:false},
                {page:'messageNode',image:'http://thyrsi.com/t6/601/1541866649x2918527206.jpg',date:'06月20日',title:'系统消息',intro:'您的优惠劵即将过期',icon:'',news:true},
            ]
        }
    }
    handlerPage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    render(){
        return (
            <View style={[styles.home]}>
                <Header {...this.props} backBool={true} title="消息"><View style={[publics.headerIconSize]} /></Header>
                <ScrollView contentContainerStyle={[styles.home]}>
                    {
                        this.state.items.map((item,key)=>{
                            return (
                                <View key={'activity-item-key'+key} style={[publics.backgroundColorWhite]}>
                                    <TouchableOpacity onPress={()=>this.handlerPage(item.page)} activeOpacity={.8} style={[styles.messageRemind,publics.padding10px,publics.flexRowCenterFlexStart,key !== 0 ? publics.borderTop : null]}>
                                        <Image style={[publics.homeTypeImageSize]} source={{uri:item.image}}/>
                                        {item.news ? <View style={[styles.messageRadius]}/> : null}
                                        <View style={[publics.paddingLeftAndRight3,{flex:1}]}>
                                            <View style={[publics.flexRowCenter,publics.marginBottom3]}>
                                                <View  style={[publics.flexRowCenterFlexStart]}>
                                                    <LineText line={1} style={[publics.color333,publics.font_4]}>{item.title}</LineText>
                                                    {item.icon ? <Text style={[publics.colorFd,styles.messageText]}>{item.icon}</Text> : null}
                                                </View>
                                                <Text style={[publics.font_2]}>{item.date}</Text>
                                            </View>
                                            <LineText line={1} style={[publics.color6d,publics.font_3]}>{item.intro}</LineText>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}