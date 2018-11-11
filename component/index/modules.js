import React,{ Component } from 'react';
import { View, ImageBackground, Text, TouchableHighlight} from 'react-native';
import styles from '../../resources/style/styles';
import publics from '../../resources/style/public';
import Produce from '../util/produce';

export default class modules extends Component {
    constructor(props){
        super(props);
        this.state = {
            modules : props.modules
        }
    };

    handlerPage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };

    render(){
        return (
            <View>
            {
                this.state.modules.map((item,key)=>{
                    return (
                    <View key={'home-modules-item-'+key}>
                        <View style={[publics.flexRowCenterCenter,publics.paddingTopPercentage3]}>
                            <ImageBackground style={[publics.modulesTitleBackgroundWidth]} source={require('../../resources/image/home/home_title_background.png')}  resizeMode="contain">
                                <Text style={[styles.modulesTitleBackground,publics.paddingBottom_10,publics.font_4,publics.color333]}>{item.module}</Text>
                            </ImageBackground>
                        </View>
                        <View style={[publics.backgroundColorWhite]}>
                            {
                                item.items.map((node,index)=><Produce index={index} key={'home-modules-item-node-'+index} item={node}/>)
                            }
                            {
                                item.loading ? <TouchableHighlight style={[publics.flexRowCenterCenter,publics.paddingTopAndBottom2]}>
                                    <Text style={[publics.font_3,publics.color40]}>点击查看更多</Text>
                                </TouchableHighlight> : null
                            }
                        </View>


                    </View>
                    )
                })
            }
            </View>
        )
    }
}

