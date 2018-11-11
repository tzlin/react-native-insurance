import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styles from '../../resources/style/styles';
import publics from '../../resources/style/public';
export default class bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handlePage = (page) =>{
        const { navigate } = this.props.navigation;
        navigate(page)
    };
    render(){
        return (
            <View style={[publics.flexRowCenterCenter,styles.homeBottomText]}>
                <Text style={styles.homeBottom}/>
                <Text style={[publics.font_2,publics.color6d,publics.paddingLeftAndRight2]}>{this.props.children}</Text>
                <Text style={styles.homeBottom}/>
            </View>
        )
    }
}