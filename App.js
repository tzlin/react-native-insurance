

import React, {Component} from 'react';
import { StackNavigator,SafeAreaView } from 'react-navigation';
import publics from './resources/style/public';
import index from './component/index';
import my from './component/my';
import product from './component/product';
import activity from './component/activity';
import message from './component/message';
import messageNode from './component/messageNode';
import customer from './component/customer';
import search from './component/search';
import signIn from './component/signIn';
import signInRule from './component/signInRule';
import filter from './component/filter';
import invite from './component/invite';
import inviteGift from './component/inviteGift';
import inviteInput from './component/inviteInput';
const App = StackNavigator({
    home: {
        screen: index,
        navigationOptions:{
            headerTitle:'主页'
        }
    },
    message: {
        screen: message,
        navigationOptions:{
            headerTitle:'消息'
        }
    },
    my: {
        screen: my,
        navigationOptions:{
            headerTitle:'个人中心'
        }
    },
    product: {
        screen: product,
        navigationOptions:{
            headerTitle:'保险产品'
        }
    }
    ,
    activity: {
        screen: activity,
        navigationOptions:{
            headerTitle:'活动中心'
        }
    },
    messageNode: {
        screen: messageNode,
        navigationOptions:{
            headerTitle:'系统消息'
        }
    },
    customer: {
        screen: customer,
        navigationOptions:{
            headerTitle:'在线客服'
        }
    },
    search: {
        screen: search,
        navigationOptions:{
            headerTitle:'搜索'
        }
    },
    signIn: {
        screen: signIn,
        navigationOptions:{
            headerTitle:'签到'
        }
    },
    signInRule: {
        screen: signInRule,
        navigationOptions:{
            headerTitle:'签到'
        }
    },
    filter: {
        screen: filter,
        navigationOptions:{
            headerTitle:'筛选'
        }
    },
    invite: {
        screen: invite,
        navigationOptions:{
        headerTitle:'我的邀请'
        }
    },
    inviteGift: {
        screen: inviteGift,
        navigationOptions:{
            headerTitle:'邀请有礼'
        }
    },
    inviteInput: {
        screen: inviteInput,
        navigationOptions:{
            headerTitle:'邀请有礼'
        }
    }
    }, {
    navigationOptions: {
        gesturesEnabled: false,
        headerBackTitle:null,
        elevation: 0,
        headerStyle: {height:0},
        headerTitleStyle: {alignSelf:'center'}
    },
    initialRouteName: 'home',
    mode: 'card',
    headerMode: 'screen',
    gesturesEnabled:false,
    onTransitionStart:'',
    onTransitionEnd:''
});
const SafeView = () => {
    return <SafeAreaView style={[publics.iPhoneX]}><App/></SafeAreaView>
};
export default SafeView;


