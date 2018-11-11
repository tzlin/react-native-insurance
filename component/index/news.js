import React,{ Component } from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import styles from '../../resources/style/styles';
import publics from '../../resources/style/public';
import LineText from '../util/lineText';
const NewsType = (type) =>{
    switch (type){
        case 'new' : return 'new';break;
        case 'hot' : return '热门';break;
        default : return 'new';break;
    }
};
export default class news extends Component {
    constructor(props){
        super(props);
        this.state = {
            news: props.news,
            index:0,
            time : 5000,
            height:0
        }

    };
    componentDidMount() {
        let count = Math.ceil(this.state.news.length/2);
        let {height,index,time} = this.state;
        let scroll = this.refs.newsScrolls;
        this.timer = setInterval(()=>{
            if(height === 0){
                height = this.state.height;
            }
            index++;
            if(index > count){
                index = 0;
                let y = height * 2 * index;
                scroll.scrollTo({x: 0, y:y});
            }else{
                let y = height * 2 * index;
                scroll.scrollTo({x: 0, y:y, animated:true});
            }
            this.setState({index});
        },time);
    }
    componentWillUnmount(){
        this.timer && clearInterval(this.timer);
    }
    handlerLayout(event) {
        let { height } = event.nativeEvent.layout;
        this.setState({ height })
    }
    handlerPage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    render(){
        const news_icon = require('../../resources/image/home/xa_news.png');
        return (
            <View style={[publics.flexRowCenterFlexStart,publics.paddingLeftAndRight5]}>
                <Image source={news_icon} resizeMode="contain" style={[publics.typeNewsImageSize]}/>
                <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} ref="newsScrolls"  style={[styles.newsItemsLeft,{height:this.state.height*2}]}>
                {
                    this.state.news.map((item,key)=>{
                        return (
                                <View onLayout={(event)=>this.handlerLayout(event)} key={'news_index'+key} style={[publics.flexRowCenterFlexStart]}>
                                    <Text style={[publics.font_1,styles.newsItemsTextIcon]}>{NewsType(item.type)}</Text>
                                    <LineText line={1} style={[publics.font_3,{flex:1},]} >{item.title}</LineText>
                                </View>

                        )
                    })
                }
                </ScrollView>
            </View>
        )
    }
}