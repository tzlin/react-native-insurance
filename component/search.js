import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, TextInput, StatusBar, Image} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import {isiPhoneX} from '../resources/style/util';

const Recommend = ({recommends,click}) =>{
    return (
        <View style={[publics.flexColumnFlexStart,styles.recommendSearch]}>
            <Text style={[publics.color333,publics.font_4,publics.paddingTopAndBottom1]}>推荐搜索</Text>
            <View style={[publics.paddingTop3,publics.flexRowStart,{flexWrap:'wrap'}]}>
                {
                    recommends.map((item,key)=>{
                        return (
                            <TouchableOpacity activeOpacity={.8} key={'Recommend-item-'+key} onPress={()=>click(item.id)} style={[styles.recommendSearchItem,publics.paddingTopAndBottom2,publics.paddingLeftAndRight3]}>
                                <Text style={[publics.font_3,publics.color6d]}>{item.text}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
};
const History = ({history,click,clear}) =>{
  return (
    <View>
        <View style={publics.marginTop3}/>
        <View style={[publics.paddingLeftAndRight3,publics.backgroundColorWhite,styles.recommendSearch]}>
            <Text style={[publics.color333,publics.font_4,publics.marginBottom3]}>历史搜索</Text>
            <View style={[publics.paddingTop3]}>
                {
                    history.map((item,key)=>{
                        return (
                            <TouchableOpacity key={'history-item-'+key} activeOpacity={.8} onPress={()=>click(item.id)}>
                                <Text style={[publics.font_3,publics.color6d,publics.marginBottom3,publics.marginTop3]}>{item.text}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <TouchableOpacity activeOpacity={.8} onPress={()=>clear()} style={[publics.flexRowCenterCenter,publics.paddingTopAndBottom5]}>
                <Image style={[publics.nextSize]} source={require('../resources/image/delete.png')} resizeMode="contain"/>
                <Text style={[publics.font_3,publics.color6d,publics.paddingLeft3px]}>清除搜索记录</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
};
export default class search extends Component {
    constructor(props){
        super(props);
        this.state = {
            recommend:[
                {id:0,text:'臻爱医疗2018'},
                {id:1,text:'住院保'},
                {id:2,text:'平安福2017'},
                {id:3,text:'安心防癌险'},
                {id:4,text:'意外旅游险'}
            ],
            history:[
                {id:0,text:'臻爱医疗2018'},
                {id:1,text:'住院保'},
                {id:2,text:'平安福2017'},
                {id:3,text:'安心防癌险'},
                {id:4,text:'意外旅游险'}
            ],
        }
    }
    handleRecommend = (id) =>{
        alert(id.toString());
    };
    handleHistory = (id) =>{
        alert(id.toString());
    };
    handleClear = () =>{
        this.setState({history:[]})
    };
    handleBack = () =>{
        this.props.navigation.goBack();
    };
    render(){
        return (
            <View style={isiPhoneX() ? [{paddingTop:60,flex:1},publics.backgroundColorWhite]:[styles.home]}>
                <StatusBar backgroundColor="#fff" barStyle="dark-content" hidden={false}/>
                <ScrollView contentContainerStyle={styles.main}>
                    <View style={[publics.paddingLeftAndRight3,publics.paddingTopAndBottom3,publics.backgroundColorWhite]}>
                        <View style={[publics.flexRowCenter,publics.flex1]}>
                            <View style={[publics.paddingLeftAndRight2,publics.flexRowCenterFlexStart,publics.flex1,publics.backgroundColorDbdbdb,styles.searchBox]}>
                                <Image style={[publics.backSize]} source={require('../resources/image/search_icon.png')} resizeMode="contain"/>
                                <TextInput style={[styles.searchBoxInput,publics.flex1,publics.font_3]} placeholder={'产品、计划书'}/>
                            </View>
                            <TouchableOpacity activeOpacity={.8} onPress={()=>this.handleBack()} style={[publics.paddingLeft5,publics.paddingRight2]}><Text style={[publics.font_3]}>取消</Text></TouchableOpacity>
                        </View>
                        {this.state.recommend ? <Recommend click={this.handleRecommend} recommends={this.state.recommend}/> : null}
                    </View>
                    {this.state.history.length > 0 ? <History history={this.state.history} clear={this.handleClear} click={this.handleHistory}/> : null}
                </ScrollView>
            </View>
        )
    }
}