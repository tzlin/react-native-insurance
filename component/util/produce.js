import React,{ Component } from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../../resources/style/styles';
import publics from '../../resources/style/public';
import LineText from './lineText';
export default class produce extends Component {
    render(){
        let node = this.props.item;
        let index = this.props.index;
        return (
            <View style={[publics.flexRowCenterFlexStart,styles.modulesItems,index !== 0 ? publics.borderTop : null]}>
                <Image style={[publics.produceImageSize]} source={{uri:node.image}} resizeMode="contain"/>
                <View style={[{flex:1},publics.paddingLeftAndRight2]}>
                    <LineText line={1} style={[publics.font_3,publics.color333]}>{node.title}</LineText>
                    <LineText line={2} style={[publics.font_2,publics.color6d,publics.paddingTopAndBottom2]}>{node.intro}</LineText>
                    <View style={[publics.flexRowCenter]}>
                        <Text style={[publics.font_3,publics.colorHome]}>{node.price}元起</Text>
                        <Text style={[publics.font_3,publics.colorHome]}>推广费{node.popularize}%</Text>
                    </View>
                </View>
            </View>
        )
    }
}

