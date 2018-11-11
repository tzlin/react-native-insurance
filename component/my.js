import React, { Component } from 'react';
import {ScrollView, View, Image, TouchableOpacity, Text, ImageBackground} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import Header from './util/header';
import Nav from './util/nav';
class NoLogin extends Component{
    render(){
        return (
        <View style={[publics.backgroundColorWhite,styles.myBoxNodeBox]}>
            <View style={[publics.flexRowCenterCenter]}><TouchableOpacity onPress={this.props.loginEvent} activeOpacity={.8} style={[styles.myLoginBtn]}><Text style={[publics.colorFd,publics.font_3]}>登录</Text></TouchableOpacity></View>
            <Text style={[publics.color6d,{textAlign:'center',paddingTop:20}]}>--</Text>
            <Text style={[publics.color6d,{textAlign:'center'}]}>我的积分</Text>
        </View>
        )
    }
}
class Login extends Component{
    render(){
        let item = this.props.user;
        return (
        <View>
            <View style={[styles.userHeadSize]}>
                <Image style={[styles.userHeadImageSize]}  resizeMode="contain" source={item.head}/>
            </View>
            <View style={[publics.backgroundColorWhite,styles.myBoxNodeBox]}>
                <View style={[publics.flexRowCenter,publics.paddingLeftAndRight15]}>
                    <View style={[publics.flexRowCenterFlexStart,{marginTop:-18}]}>
                        <View style={[styles.userHeadImageSize]}/>
                        <View style={[publics.paddingLeft15]}>
                            <View style={[publics.flexRowCenterFlexEnd]}>
                                <Text style={[publics.font_3,publics.color333]}>{item.name}</Text>
                                <Text style={[publics.font_1,publics.color6d,publics.paddingLeft3]}>{item.auth ? '已' : '未'}认证</Text>
                            </View>
                            <View style={[publics.flexRowCenterFlexStart,styles.myAuth,{width:55,marginTop:5}]}>
                                <Image style={[styles.myAuthIcon]}  resizeMode="contain" source={require('../resources/image/my/icon_1.png')}/>
                                <Text style={[{fontSize:8},publics.colorWhite]}>申请认证</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[publics.flexRowCenterFlexStart]}>
                        <Image style={[styles.myUserCode]}  resizeMode="contain" source={require('../resources/image/my/qcode.png')}/>
                        <Image style={[publics.headerIconSize,publics.nextSize]} source={require('../resources/image/my/my_right.png')} resizeMode="contain"/>
                    </View>
                </View>
                <Text style={[publics.color6d,{textAlign:'center',paddingTop:20}]}>{this.props.integral}</Text>
                <Text style={[publics.color6d,{textAlign:'center'}]}>我的积分</Text>
            </View>
        </View>
        )
    }
}
export default class my extends Component {
    constructor(props){
        super(props);
        this.state = {
            login : false,
            items : [
                {text:'我的保单',page:'home',icon:require('../resources/image/my/icon_2.png'),top:true},
                {text:'车险保单',page:'home',icon:require('../resources/image/my/icon_3.png')},
                {text:'我的工资条',page:'home',icon:require('../resources/image/my/icon_4.png'),top:true},
                {text:'我的收藏',page:'home',icon:require('../resources/image/my/icon_5.png')},
                {text:'客户管理',page:'home',icon:require('../resources/image/my/icon_6.png')},
                {text:'邀请好友',page:'invite',icon:require('../resources/image/my/icon_7.png')},
                {text:'邀请码',page:'inviteInput',icon:require('../resources/image/my/icon_7.png')},
                {text:'更改绑定',page:'home',icon:require('../resources/image/my/icon_9.png')},
                {text:'我的客服',page:'home',icon:require('../resources/image/my/icon_8.png')},
                {text:'关于我们',page:'home',icon:require('../resources/image/my/icon_0.png')}
            ],
            integral : 1000,
            user : {auth:false,name:'克里斯',head:require('../resources/image/my/my_head.png')}
        }
    }
    handlePage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    handleLogin = () =>{
        this.setState({login:true})
    };
    render(){
        return (
            <View style={[styles.home]}>
                <Header {...this.props} backBool={true} title="个人中心">
                    {
                        this.state.login ?
                            <TouchableOpacity activeOpacity={1}>
                                <Image style={[publics.headerIconSize]} source={require('../resources/image/my/eye.png')} resizeMode="contain"/>
                            </TouchableOpacity>
                            : <View style={[publics.headerIconSize]} />
                    }
                </Header>
                <ScrollView contentContainerStyle={styles.main}>
                    <View style={[styles.myBox]}>
                        <View style={[styles.myBackground]}>
                            <Image style={[publics.width100,{height:120}]}  resizeMode="stretch" source={require('../resources/image/my/my_background.jpg')}/>
                        </View>
                        {
                            this.state.login ? <Login integral={this.state.integral} user={this.state.user}/> : <NoLogin loginEvent={this.handleLogin}/>
                        }
                    </View>
                    <View>
                    {
                        this.state.items.map((item,key)=>{
                            return (
                                <View key={'my-item-page-'+key}>
                                    <TouchableOpacity onPress={()=>this.handlePage(item.page)} activeOpacity={.8} style={[publics.flexRowCenterFlexStart,publics.paddingLeft3,publics.itemHeight,publics.backgroundColorWhite,item.top ? publics.marginTop3 : null]}>
                                        <Image style={[publics.ItemIconSize]} source={item.icon} resizeMode="contain"/>
                                        <View style={[publics.flexRowCenter,publics.paddingRight3,publics.itemHeight,publics.marginLeft3,{flex:1}, !item.top ? publics.borderBottom : null]}>
                                            <Text style={[publics.font_3,publics.color333]}>{item.text}</Text>
                                            <Image style={[publics.headerIconSize,publics.nextSize]} source={require('../resources/image/my/my_right.png')} resizeMode="contain"/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                    </View>
                </ScrollView>
                <Nav {...this.props} selecetd={3}/>
            </View>
        )
    }
}