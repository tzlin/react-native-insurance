import React,{ Component } from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../resources/style/styles';
import publics from '../../resources/style/public';
const Icon = ({item,bool,click}) =>{
    return (
        <TouchableOpacity activeOpacity={1} style={[styles.navBoxItem]} onPress={()=>{click(item.page)}}>
            <Image resizeMode="contain" source={item.source} style={publics.navImageSize}/>
            <Text style={[publics.font_2,publics.paddingTop3,bool ? styles.navSelected : null]}>
                {item.navText}
            </Text>
        </TouchableOpacity>
    )
};

export default class nav extends Component {
    constructor(props){
        super(props);
        let selected = props.selecetd;
        const icon_1 = require('../../resources/image/nav/home_1.png');
        const icon_2 = require('../../resources/image/nav/nav_1.png');
        const icon_3 = require('../../resources/image/nav/classroom_1.png');
        const icon_4 = require('../../resources/image/nav/my_1.png');

        const icon_5 = require('../../resources/image/nav/home_2.png');
        const icon_6 = require('../../resources/image/nav/nav_2.png');
        const icon_7 = require('../../resources/image/nav/classroom_2.png');
        const icon_8 = require('../../resources/image/nav/my_2.png');
        this.state = {
            nav : [
                {navText:'首页',source:selected !== 0 ? icon_1:icon_5,page:'home'},
                {navText:'保险产品',source:selected !== 1 ? icon_2:icon_6,page:'product'},
                {navText:'在线课堂',source:selected !== 2 ? icon_3:icon_7,page:'home'},
                {navText:'个人中心',source:selected !== 3 ? icon_4:icon_8,page:'my'},
            ]
        }
    };
    handlePage = (page) =>{
       const { navigate } = this.props.navigation;
       navigate(page)
    };

    render(){
        let selected = this.props.selecetd;
        return (
            <View style={[publics.flexRowCenter,publics.height56,styles.navBox,publics.borderTop]}>
                {
                    this.state.nav.map((item,key)=><Icon click={this.handlePage} bool={key === selected} key={'nav-'+key} item={item} />)
                }
            </View>
        )
    }
}

