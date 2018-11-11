import React,{ Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image} from 'react-native';
import styles from '../resources/style/styles';
import publics from '../resources/style/public';
import Header from './util/header';
const selected = <Image style={[styles.filterItemSelectedImageSize]}  resizeMode="contain" source={require('../resources/image/filter_selected.png')}/>;
const Items = ({items,click}) => {
    return (
        <View>
            {
                items.map((item,key)=>{
                    return (
                        <View key={'filter-key-'+key}>
                            <Text style={[publics.font_3,publics.color6d,publics.marginBottom2]}>{item.title}</Text>
                            <View style={[publics.flexRowCenter,{flexWrap:'wrap'}]}>
                                {
                                    item.children.map((node,index)=>{
                                        let right = (index+1)%3 !== 0;
                                        return (
                                            <TouchableOpacity onPress={()=>click(node.id)} key={'filter-node-key'+index} activeOpacity={1}  style={[styles.filterItem, node.selected ? styles.filterItemSelected : styles.filterItemNotSelected, right ? styles.filterItemRight : null]}>
                                                <Text style={[publics.font_3,publics.color333,publics.textAlignCenter]}>{node.text}</Text>
                                                {node.selected ? selected : null}
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
};
export default class filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : '',
            items : [
                {title:'排序',children:[{id:1,text:'默认排序',selected:true},{id:2,text:'销量排序',selected:false},{id:3,text:'推广费优先',selected:false}]},
                {title:'年龄',children:[{id:4,text:'不限年龄',selected:true},{id:5,text:'0-17周岁',selected:false},{id:6,text:'18-65周岁',selected:false},{id:7,text:'66-100周岁',selected:false}]},
                {title:'保险类别',children:[{id:8,text:'不限种类',selected:true},{id:9,text:'体育保险',selected:false},{id:10,text:'精选寿险',selected:false},{id:11,text:'其他',selected:false}]},
                {title:'职业类别',children:[{id:12,text:'全部',selected:true},{id:13,text:'一类',selected:false},{id:14,text:'二类',selected:false},{id:15,text:'三类',selected:false},{id:16,text:'四类',selected:false},{id:17,text:'五类',selected:false},{id:18,text:'六类',selected:false}]},
            ]
        }
    }
    handlePage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    handleSelected = (id) =>{
        let items = this.state.items;
        items.map((item,key)=>{
            item.children.map((node,index)=>{
                if(node.id === id){
                    let children = items[key].children;
                    children.map((setting,nodeIndex)=>{
                        children[nodeIndex].selected = false;
                    });
                    children[index].selected = true;
                    items[key] = item;
                }
            })
        });
        this.setState({items:items})
    };
    handleSubmit(){
        let items = this.state.items;
        let result = [];
        items.map((item)=>{
            item.children.map((node)=>{
                if(node.selected){
                    result.push(node.id);
                }
            })
        });
        alert(result.toString())
    }
    handleClear(){
        let items = this.state.items;
        items.map((item,key)=>{
            item.children.map((node,index)=>{
                if(index === 0){
                    node.selected = true;
                }else{
                    node.selected = false;
                }
                items[key].children[index] = node;
            });
        });
        this.setState({items:items})
    }
    render(){
        return (
            <View style={[styles.home]}>
                <Header {...this.props} backBool={true} title="筛选">
                    <View style={[publics.headerIconSize]} />
                </Header>
                <ScrollView contentContainerStyle={styles.main}>
                    <View style={[publics.paddingLeftAndRight3,publics.paddingTopAndBottom3]}>
                        <Items click={this.handleSelected} items={this.state.items}/>
                    </View>
                </ScrollView>
                <View style={[publics.flexRowCenterCenter,publics.height56,styles.navBox,styles.borderTop]}>
                    <TouchableOpacity style={[styles.filterBtn,publics.paddingTopAndBottom3,styles.filterBtnClear,publics.borderRadius5]} onPress={()=>this.handleClear()}  activeOpacity={.8}>
                        <Text style={[publics.font_4,publics.color333,publics.textAlignCenter]}>清空筛选</Text>
                    </TouchableOpacity>
                    <View style={[styles.filterBtnSplit]}/>
                    <TouchableOpacity style={[styles.filterBtn,publics.paddingTopAndBottom3,styles.filterBtnSubmit,publics.borderRadius5]} onPress={()=>this.handleSubmit()} activeOpacity={.8}>
                        <Text style={[publics.font_4,publics.colorWhite,publics.textAlignCenter]}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}