import React, { Component } from 'react';
import {StatusBar, ScrollView, View, TouchableOpacity} from 'react-native';
import styles from '../resources/style/styles';
import Image from './util/image';
import Bottom from './util/bottom';
import Nav from './util/nav';
import Banner from './index/banner';
import Type from './index/type';
import Modules from './index/modules';
export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {page:'activity',url:'https://img.alicdn.com/imgextra/i4/86/O1CN011CVQWpfePIzaf46_!!86-0-luban.jpg_q100.jpg'},
                {page:'customer',url:'https://img.alicdn.com/simba/img/TB1ik.tmrvpK1RjSZPiSuvmwXXa.jpg'},
                {page:'message',url:'https://img.alicdn.com/simba/img/TB19yaVl3HqK1RjSZFgSuu7JXXa.jpg'}
            ],
            news : [
                {type:'new',title:'1热烈庆祝在线保险经纪有限公司开...'},
                {type:'hot',title:'2热烈庆祝在线保险经纪有限公司开...'},
                {type:'new',title:'3热烈庆祝在线保险经纪有限公司开...'},
                {type:'hot',title:'4热烈庆祝在线保险经纪有限公司开...'},
                {type:'new',title:'5热烈庆祝在线保险经纪有限公司开...'},
            ],
            modules:[
                {
                    module:'热销产品',
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
                    ],
                    loading:true
                },

                {
                    module:'特色服务',
                    items:[
                        {
                            image:'http://thyrsi.com/t6/601/1541861208x2890208841.jpg',
                            title:'金汇直升飞机救援服务',
                            intro:'七大快速免流程救援，百种救援保障服 务，极速救援响应。，千万医疗保障高额 住院津贴',
                            price:192,
                            popularize:30
                        }
                    ],
                    loading:false
                },
            ]
        }
    }
    handlePage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    render(){
        return (
            <View style={[styles.home]}>
                <StatusBar backgroundColor="#fd5353" barStyle="light-content" hidden={true}/>
                <ScrollView contentContainerStyle={styles.main}>
                    <Banner messageNumber={2} {...this.props} items={this.state.items}/>
                    <Type {...this.props} news={this.state.news}/>
                    <TouchableOpacity activeOpacity={1}>
                        <Image width={100} url='http://thyrsi.com/t6/601/1541861113x2890174142.jpg'/>
                    </TouchableOpacity>
                    <Modules modules={this.state.modules}/>
                    <Bottom>已经到达我的底线啦</Bottom>
                </ScrollView>
                <Nav {...this.props} selecetd={0}/>
            </View>
        )
    }
}