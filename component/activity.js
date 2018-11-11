import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity,Image} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import Nav from './util/nav';
import Header from './util/header';
import ImageComponent from './util/image';
import LineText from './util/lineText';

export default class activity extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {id:0,image:'http://thyrsi.com/t6/601/1541864686x2890174447.jpg',date:'2018.06.08',title:'问卷小调查',intro:'亲爱的用户相处一段时间了，希望您做一个小调查，给我们意见，让我们变得更优秀更完美。'},
                {id:2,image:'http://thyrsi.com/t6/601/1541864714x2890174447.jpg',date:'2018.06.08',title:'问卷小调查',intro:'亲爱的用户相处一段时间了，希望您做一个小调查，给我们意见，让我们变得更优秀更完美。'},
                {id:1,image:'http://thyrsi.com/t6/601/1541864686x2890174447.jpg',date:'2018.06.08',title:'问卷小调查',intro:'亲爱的用户相处一段时间了，希望您做一个小调查，给我们意见，让我们变得更优秀更完美。'}
            ]
        }
    }
    handlerPage = (id) =>{
        alert(id.toString())
        //const { navigate } = this.props.navigation;
        //navigate(page)
    };
    render(){
        return (
            <View style={[styles.home]}>
                <Header {...this.props} backBool={true} title="活动中心"><View style={[publics.headerIconSize]} /></Header>
                <ScrollView contentContainerStyle={[styles.main,publics.paddingLeftAndRight3,publics.paddingTopPercentage3]}>
                    {
                        this.state.items.map((item,key)=>{
                            return (
                                <View key={'activity-item-key'+key}>
                                    <TouchableOpacity onPross={()=>this.handlerPage(item.id)} activeOpacity={.8} style={[publics.backgroundColorWhite,styles.ImageBox]}>
                                        <View style={[styles.ImageBoxPosition]}>
                                            <ImageComponent width={95} url={item.image}/>
                                            <Text style={[publics.colorWhite,publics.font_2,styles.ImageBoxPositionText,publics.paddingLeftAndRight3,publics.paddingTopAndBottom2]}>活动时间：{item.date}</Text>
                                        </View>
                                        <View style={[publics.paddingLeftAndRight3,publics.paddingTopAndBottom2]}>
                                            <LineText line={1} style={[publics.color333,publics.font_4]}>{item.title}</LineText>
                                            <LineText line={2} style={[publics.color6d,publics.font_2]}>{item.intro}</LineText>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={[publics.marginTop3]} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <Nav {...this.props} selecetd={2}/>
            </View>
        )
    }
}