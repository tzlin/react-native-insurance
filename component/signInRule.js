import React,{ Component } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import Header from './util/header';
export default class signInRule extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : '',
            items : [
                {intro:'APP“签到”和在线公众号签到同属签到类活动，',warning: '一个用户每天总计只能参与一次签到。'},
                {intro:'每天签到可获取50积分奖励，连续签到7天可获得额外惊喜，',warning: '如签到中途中断，则重新开始计算连续签到'},
                {intro:'APP“签到”和在线公众号签到同属签到类活动，',warning: '一个用户每天总计只能参与一次签到。'},
                {intro:'每天签到可获取50积分奖励，连续签到7天可获得额外惊喜，',warning: '如签到中途中断，则重新开始计算连续签到'},
                {intro:'APP“签到”和在线公众号签到同属签到类活动，',warning: '一个用户每天总计只能参与一次签到。'},
                {intro:'每天签到可获取50积分奖励，连续签到7天可获得额外惊喜，',warning: '如签到中途中断，则重新开始计算连续签到'}
            ]
        }
    }
    handlePage = () =>{
        this.props.navigation.goBack();
    };
    render(){
        return (
            <View style={[styles.home]}>
                <Header {...this.props} backBool={true} title="签到规则">
                    <View style={[publics.headerIconSize]} />
                </Header>
                <ScrollView contentContainerStyle={[styles.main,publics.flexColumnCenterCenter]}>
                    <View style={[{paddingTop:20,paddingBottom:20}]}>
                        <View style={[publics.flexRowCenterCenter,publics.paddingBottom10]}>
                            <Text style={[publics.font_4,publics.color333]}>签到详细规则</Text>
                        </View>
                        <View style={[publics.paddingLeftAndRight10,publics.paddingBottom10]}>
                            {
                                this.state.items.map((item,key)=>{
                                    return (
                                        <Text key={'signInRule-key-'+key} style={[publics.paddingTop3,publics.font_3,publics.color6d]}>{key+1}. {item.intro}<Text style={[publics.colorFd]}>{item.warning}</Text></Text>
                                    )
                                })
                            }
                        </View>
                        <View style={[publics.flexRowCenterCenter]}>
                            <TouchableOpacity onPress={()=>this.handlePage()} activeOpacity={.8}>
                                <Image style={[publics.backSize]}  resizeMode="contain" source={require('../resources/image/signIn/signIn_close.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}