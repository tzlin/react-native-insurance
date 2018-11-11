import React, { Component } from 'react';
import {ScrollView, View, TouchableOpacity, Image, Text, StatusBar, ImageBackground,} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import Nav from './util/nav';
import Header from './util/header';
import Produce from './util/produce';
import LineText from './util/lineText';
const Type = ({click,item}) =>{
    return (
        <TouchableOpacity onPress={()=>{click()}} activeOpacity={1}  style={[publics.flexRowCenterFlexStart]}>
            <Text style={[publics.font_3,publics.color333]}>{item.text}{' '}</Text>
            <Image style={[publics.downSize,item.order ? null : publics.deg90]} source={require('../resources/image/activity/down.png')} resizeMode="contain"/>
        </TouchableOpacity>
    )
};
class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            types : [{text:'保险种类',order:true},{text:'公司分类',order:true},{text:'精细筛选',order:true}],
            items:[
                {
                    image:'http://thyrsi.com/t6/601/1541861208x2890208841.jpg',
                    title:'健康之享重疾计划',
                    intro:'七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额，千万医疗保障高额 住院津贴',
                    price:192,
                    popularize:30
                },
                {
                    image:'http://thyrsi.com/t6/601/1541861208x2890208841.jpg',
                    title:'健康之享重疾计划',
                    intro:'七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额，千万医疗保障高额 住院津贴',
                    price:192,
                    popularize:30
                },
                {
                    image:'http://thyrsi.com/t6/601/1541861208x2890208841.jpg',
                    title:'健康之享重疾计划',
                    intro:'七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额七大重疾无免赔额，千万医疗保障高额 住院津贴',
                    price:192,
                    popularize:30
                }
            ]
        }
    }
    handlerTypeOrder = (index) =>{
        let types = this.state.types;
        let order = !types[index].order;
        types[index].order = order;
        this.setState({types});
        const { navigate } = this.props.navigation;
        navigate('filter')
    };
    render(){
        return (
            <View style={[publics.backgroundColorWhite]}>
                <View style={[publics.flexRowCenter,publics.paddingLeftAndRight5,publics.paddingTopAndBottom5]}>
                    {
                        this.state.types.map((item,key)=><Type click={()=>this.handlerTypeOrder(key)} key={'activity-type-'+key} item={item}/>)
                    }
                </View>
                <View style={[publics.borderTop]}>
                    {
                        this.state.items.map((node,index)=><Produce key={'home-activity-item-node-'+index} index={index} item={node}/>)
                    }
                </View>
            </View>
        )
    }
}
export default class product extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    handlerPage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    render(){
        return (
            <View style={[styles.home]}>
                <Header {...this.props} title="保险产品">
                    <TouchableOpacity onPress={()=>this.handlerPage('search')} activeOpacity={1}>
                        <Image style={[publics.headerIconSize]} source={require('../resources/image/activity/white-query.png')} resizeMode="contain"/>
                    </TouchableOpacity>
                </Header>
                <ScrollView contentContainerStyle={styles.main}>
                    <TouchableOpacity onPress={()=>this.handlerPage('activity')}  activeOpacity={.8} style={[publics.paddingLeftAndRight3,publics.paddingTopAndBottom2,publics.backgroundColorWhite,publics.marginBottom3]}>
                        <ImageBackground style={[{height:100},publics.flexColumnCenter,publics.paddingLeftAndRight5]} source={{uri:'http://thyrsi.com/t6/601/1541864803x2890174447.jpg'}} resizeMode="contain">
                            <View style={[publics.flexRowCenterFlexStart,publics.marginBottom1]}>
                                <Text style={[publics.font_4,publics.colorWhite,publics.paddingRight3px,{fontWeight:"bold"}]}>活动中心</Text>
                                <Image style={[publics.downSize,publics.deg90]} source={require('../resources/image/7.png')} resizeMode="contain"/>
                            </View>
                            <LineText line={2} style={[publics.font_1,publics.colorWhite,styles.textBoxWidth]}>2个活动进行时，点击进入 了解更多活动详情</LineText>
                            <Image style={[publics.marginTop1,styles.btnStyle]} source={require('../resources/image/activity/acvitity-btn.png')} resizeMode="contain"/>
                        </ImageBackground>
                    </TouchableOpacity>
                    <List {...this.props}/>
                </ScrollView>
                <Nav {...this.props} selecetd={1}/>
            </View>
        )
    }
}