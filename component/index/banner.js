import React,{ Component } from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import styles from '../../resources/style/styles';
import publics from '../../resources/style/public';
import Search from './search';
import Swiper from 'react-native-swiper';
/**
 * 多张图片使用List组件
 * */
class List extends  Component {
    constructor(props){
        super(props);
        this.state = {
            array : props.item,
            time : 10000,
            nav : false
        }
    }
    handlePage = (page) =>{
       const { navigate } = this.props.navigation;
       navigate(page)
    };
    render(){
        return (
            <Swiper showsPagination={false}>
                {
                    this.state.array.map((item,key)=>{
                        return (
                            <TouchableOpacity key={'banner-item-'+key} onPress={()=>this.handlePage(item.page)} activeOpacity={1}>
                                <Image source={{uri: item.url}}  style={[publics.width100,publics.bannerStyleHeight]} resizeMode="stretch" />
                            </TouchableOpacity>
                        )
                    })
                }
            </Swiper>
        )
    }
}

/**
 * 单张图片使用Single组件
 * */
const Single = ({item}) =>{
    let single = item[0];
    return (
    <TouchableOpacity key={'banner-item-'+key} onPress={()=>this.handlePage(single.page)} activeOpacity={1}>
        <Image source={{uri: single.url}}  style={[publics.width100,publics.bannerStyleHeight]} resizeMode="stretch" />
    </TouchableOpacity>
    )
};

export default class banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : props.items
        }
    };

    handlePage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };

    render(){
        let items = this.state.items;
        return (
            <View style={[publics.bannerStyleHeight,styles.bannerBox]}>
                <Search {...this.props}/>
                {this.state.items.length > 1 ? <List {...this.props} item={items}/> : <Single item={items}/>}
            </View>
        )
    }
}

