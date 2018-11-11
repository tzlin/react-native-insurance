import React,{ Component } from 'react';
import {View, Text, ScrollView, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import ImageComponent from './util/image';
import Header from './util/header';
export default class inviteInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        }
    }
    handlePage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    render(){
        return (
            <ScrollView contentContainerStyle={[publics.backgroundColorWhite,{flex:1}]}>
                <StatusBar backgroundColor="#fd5353" barStyle="light-content" hidden={true}/>
                <Header {...this.props} backBool={true} title="填写邀请码"><View style={[publics.headerIconSize]} /></Header>
                <View style={[publics.paddingLeftAndRight3,publics.paddingTopPercentage5]}>
                    <View style={[publics.borderRadius5,publics.backgroundColorWhite,publics.paddingTopPercentage3]}>
                        <View style={[publics.flexRowCenterCenter]}>
                            <ImageComponent width={50} url='http://thyrsi.com/t6/601/1541903322x2372231982.jpg'/>
                        </View>
                        <Text/>
                        <Text/>
                        <View>
                            <Text style={[publics.font_1,publics.colorHome,publics.textAlignCenter,styles.inviteInputBtnMarginTop]}>一个账号只能填写一次邀请码，并且无法更改</Text>
                            <View style={[publics.flexRowCenterCenter,publics.paddingTopAndBottom2]}>
                                <View style={[styles.inviteInputBox,publics.borderRadius5]}>
                                    <TextInput style={[styles.inviteInput,publics.height56,publics.textAlignCenter,publics.font_5]} placeholderTextColor='rgba(253,132,58,1)' placeholder={'输入邀请码'} underlineColorAndroid="transparent" />
                                </View>
                            </View>
                            <View style={[publics.flexRowCenterCenter,styles.inviteInputBtnMarginTop]}>
                                <TouchableOpacity  onPress={()=>{}} activeOpacity={.8} style={[publics.flexRowCenterCenter,styles.inviteInputBtn,publics.height56,publics.borderRadius5]}>
                                    <Text style={[publics.font_5,publics.colorWhite]}>确定提交</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text/>
                        <Text/>
                        <View style={[styles.inviteInputBtnMarginTop]}>
                            <ImageComponent width={94} url='http://thyrsi.com/t6/601/1541903344x2372231982.jpg'/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}