import React, { Component } from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import Header from './util/header';
import LineText from './util/lineText';

const Problem = ({value,index,click}) => {
    return (
        <View style={[{height:26}]}>
            <TouchableOpacity onPress={()=>click(value.id)} activeOpacity={.8} >
                <LineText line={1} style={[publics.color1c,publics.font_4]}>{index+1}.{value.text}</LineText>
            </TouchableOpacity>
        </View>
    )
};

const Item = ({item,click}) =>{
    return (
        <View style={[publics.paddingLeftAndRight3,publics.flexColumnFlexStart]}>
            <View style={[publics.flexRowCenterCenter]}>
                <Text style={[publics.paddingLeftAndRight3,publics.paddingTopAndBottom1,publics.backgroundColorDbdbdb,publics.marginTopAndBottom15,publics.borderRadius5,publics.font_2,publics.colorWhite]}>昨天 19:05</Text>
            </View>
            <View style={[publics.paddingLeft3AndRight8,publics.flexRowStart]}>
                <Image style={[styles.customerIcon]} resizeMode="contain" source={require('../resources/image/kf_icon_03.png')}/>
                <View style={[styles.customerIconBox,publics.backgroundColorWhite,publics.flexRowCenterCenter]}>
                    <Image style={[publics.ItemIconSize]} resizeMode="contain" source={require('../resources/image/customer.png')}/>
                </View>
                <View style={[publics.backgroundColorWhite,styles.customerTextBox,publics.paddingLeftAndRight5,publics.paddingTopAndBottom2]}>
                    <LineText line={2} style={[publics.color333,publics.font_4, publics.paddingBottom2]}>{item.intro}</LineText>
                    {
                        item.items.length > 0 ?
                            <View style={[publics.borderTop,publics.paddingTopAndBottom2,publics.marginTop1]}>
                                {
                                    item.items.map((value,index)=><Problem click={click} index={index} value={value} key={'customer-item-index-'+index}/>)
                                }
                            </View>
                            : null
                    }
                </View>
            </View>
        </View>
    )
};

export default class customer extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    date:'2018年06月20',
                    intro:'给家人，一份安心的医疗保障，送一份终身保障，一份安心... ',
                    items:[
                        {id:1,text:'推广费是多少？'},
                        {id:2,text:'推广费会返还到哪里？'},
                        {id:3,text:'多件奖励是什么？'},
                        {id:4,text:'怎么体现？'},
                        {id:5,text:'体现了推广费怎么还没到账？'},
                        {id:6,text:'推广费？'},
                    ]
                },
                {
                    date:'2018年06月20',
                    intro:'给家人，一份安心的医疗保障，送一份终身保障，一份安心... ',
                    items:[
                        {id:1,text:'推广费是多少？'},
                        {id:2,text:'推广费会返还到哪里？'},
                        {id:3,text:'多件奖励是什么？'},
                        {id:4,text:'怎么体现？'},
                        {id:5,text:'体现了推广费怎么还没到账？'},
                        {id:6,text:'推广费？'},
                    ]
                }
            ]
        }
    }
    componentDidMount() {
        this.handlerScroll();
    }
    handlerClickItem = (id) => {
        alert(id.toString())
    };
    handlerScroll(){
        let scroll = this.refs.scrollDocument;
        //scroll.scrollTo({x: 0, y:10000, animated:false});
    };
    render(){
        return (
        <View style={[styles.home]}>
            <Header {...this.props} backBool={true} title="在线客服"><View style={[publics.headerIconSize]} /></Header>
            <ScrollView ref="scrollDocument"  keyboardDismissMode={'on-drag'} contentContainerStyle={styles.main}>
                {
                    this.state.items.map((item,key)=><Item click={this.handlerClickItem} key={'messageNode-item-key'+key} item={item}/>)
                }
                <View style={[{height:30}]}/>
            </ScrollView>
            <View style={[publics.height56,publics.paddingLeftAndRight3,publics.flexRowCenter,publics.backgroundColorWhite]}>
                <TextInput placeholder={'发表评论'} style={[styles.customerInput]}/>
                <TouchableOpacity>
                    <Text style={[styles.customerBtn,publics.font_4]}>发送</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}