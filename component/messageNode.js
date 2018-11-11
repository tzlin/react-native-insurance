import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import Header from './util/header';
import ImageComponent from './util/image';
import LineText from './util/lineText';

export default class messageNode extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {id:0,image:'http://thyrsi.com/t6/601/1541864714x2890174447.jpg',date:'2018年06月20',title:'住院保，隆重上线拉',intro:'给家人，一份安心的医疗保障，送一份终身保障，一份安心... '},
                {id:1,date:'2018年06月20',title:'版本更新公告',intro:'给家人，一份安心的医疗保障，送一份终身保障，一份安心...给家人，一份安心的医疗保障，送一份终身保障，一份安心...给家人，一份安心的医疗保障，送一份终身保障，一份安心... '},
            ]
        }
    }
    handlerPage = (id) =>{
        //const { navigate } = this.props.navigation;
        //navigate(page)
    };
    render(){
        return (
            <View style={[styles.home]}>
                <Header {...this.props} backBool={true} title="系统消息"><View style={[publics.headerIconSize]} /></Header>
                <ScrollView contentContainerStyle={[publics.paddingLeftAndRight3]}>
                    {
                        this.state.items.map((item,key)=>{
                            return (
                                <View key={'messageNode-item-key'+key} style={[]}>
                                    <View style={[publics.flexRowCenterCenter]}><Text style={[publics.paddingLeftAndRight3,publics.paddingTopAndBottom1,publics.backgroundColorDbdbdb,publics.marginTopAndBottom15,publics.borderRadius5,publics.font_2,publics.colorWhite]}>昨天 19:05</Text></View>
                                    <TouchableOpacity onPress={()=>this.handlerPage(item.id)} activeOpacity={.8} style={[publics.backgroundColorWhite,styles.ImageBox,publics.paddingLeftAndRight3,publics.paddingTopAndBottom3]}>
                                        <LineText line={1} style={[publics.color333,publics.font_4,{fontWeight:'bold'}]}>{item.title}</LineText>
                                        <LineText line={1} style={[publics.color333,publics.font_2,publics.paddingTopAndBottom2,publics.backgroundColorWhite]}>{item.date}</LineText>
                                        {item.image ? <ImageComponent width={89} url={item.image}/> : null}
                                        <LineText line={item.image ? 1 : 3} style={[publics.color333,publics.font_2,item.image ? publics.paddingTopAndBottom2 : publics.paddingBottom2]}>{item.intro}</LineText>
                                        <View style={[publics.flexRowCenterFlexStart]}>
                                            <Text style={[publics.color5d,publics.font_2]}>点击了解更多详情</Text>
                                            <Image style={[publics.headerIconSize,publics.downSize]} source={require('../resources/image/message_right.png')} resizeMode="contain"/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                    <View style={{height:30}}/>
                </ScrollView>
            </View>
        )
    }
}