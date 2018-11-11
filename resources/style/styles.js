import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    //首页与公共组件样式
    main:{backgroundColor:'#f8f8f8'},
    home:{flex:1,backgroundColor:'#f8f8f8'},
    navBox:{backgroundColor:'#fff'},
    navBoxItem:{width:'25%',alignItems:'center',alignSelf:'center'},
    navSelected:{color:'#f96b5a'},
    bannerBox:{position: 'relative',zIndex:1},
    bannerSearchBox:{position:'absolute',top:35,left:0,right:0,zIndex:2,paddingTop:15,paddingLeft:30,paddingRight:10},
    searchInput:{paddingLeft:10,backgroundColor:'rgba(255,255,255,.7)',flex:1,marginRight:10,borderRadius:5},
    searchInputText:{flex:1,height:20,paddingTop:0,paddingBottom:0},
    messageRemind:{position: 'relative',zIndex:1},
    messageRemindPoint:{position: 'absolute',zIndex:2,right:1,top:8,backgroundColor:'#ff0000',borderRadius:20,width:10,height:10},
    messageRemindPointText:{width:10,height:10,fontSize:8,textAlign:'center',lineHeight:10,color:'#fff'},
    newsItemsLeft:{borderLeftWidth:1,borderLeftColor:'#fa2938',marginLeft:10,paddingLeft:10,flex:1},
    newsItemsTextIcon:{color:'#fa2938',marginRight:5},
    modulesTitleBackground:{textAlign:'center'},
    modulesItems:{paddingLeft:'1%',marginLeft:"1%",paddingRight:'5%',paddingTop:8,paddingBottom:8},
    homeBottom:{height:1,width:30,backgroundColor:'#b2b2b2'},
    homeBottomText:{paddingTop:20,paddingBottom:10},
    //个人中心样式
    myBox:{backgroundColor:'#f8f8f8',position:'relative',zIndex:1,paddingTop:30},
    myBackground:{backgroundColor:'#fd5353',position:'absolute',zIndex:2,top:0,left:0,right:0},
    myBoxNodeBox:{borderRadius:5,marginLeft:10,marginRight:10,zIndex:4,paddingTop:'5%',paddingBottom:'5%'},
    myLoginBtn:{paddingTop:8,paddingLeft:40,paddingBottom:8,paddingRight:40,borderWidth:1,borderColor:'#fd5353',borderRadius:5},
    myAuth:{backgroundColor:"#ffb545",paddingLeft:3,paddingRight:3,paddingTop:3,paddingBottom:3,borderRadius:3},
    myAuthIcon:{width:12,height:12,marginRight:3},
    myUserCode:{height:20,width:20},
    userHeadSize:{height:80,width:80,borderRadius:1000,overflow:'hidden',position:'absolute',zIndex:5,top:-10,left:26,right:0},
    userHeadImageSize:{height:80,width:80},
    // 保险产品
    textBoxWidth:{width:120},
    btnStyle:{width:56,height:22,marginLeft:-5},
    //消息
    messageText:{borderWidth:1,borderColor:'#fd5353',lineHeight:16,height:16,paddingLeft:5,paddingRight:5,marginLeft:5,borderRadius:3,fontSize:8},
    messageRadius:{position:'absolute',zIndex:3,width:10,height:10,top:6,left:54,backgroundColor:'#fc1919',borderRadius:10},
    //活动中心
    ImageBox:{borderRadius:5,overflow:'hidden'},
    ImageBoxPosition:{position:'relative',zIndex:1},
    ImageBoxPositionText:{position:'absolute',left:0,bottom:0,right:0,backgroundColor:'rgba(0,0,0,.7)',zIndex:2},
    //在线客服
    customerIconBox:{width:40,height:40,borderRadius:50,marginRight:10},
    customerIcon:{height:14,position:'absolute',left:51,top:14,zIndex:2},
    customerTextBox:{flex:1,borderWidth:1,borderColor:'#ededed',borderRadius:5},
    customerInput:{borderWidth:1,borderColor:'#999',flex:1,height:40,borderRadius:3,overflow:'hidden'},
    customerBtn:{color:'#1c8ffa',paddingLeft:25,paddingRight:15},
    //搜索
    searchBox:{borderRadius:50},
    searchBoxInput:{height:36,lineHeight:36,paddingTop:0,paddingBottom:0},
    recommendSearch:{paddingTop:'4%',paddingBottom:'3%'},
    recommendSearchItem:{marginRight:'3%',backgroundColor:'#eee',marginBottom:'2%',borderRadius:20},
    //签到
    splitHeight:{height:2,width:60},
    textLineHeight:{height:30,lineHeight:30,fontSize:26,paddingTop:0,paddingBottom:0},
    signInItemBox:{width:'48%',marginBottom:10},
    //筛选
    filterItem:{width:'30%',paddingTop:10,paddingBottom:10,backgroundColor:'white',borderWidth:1,position:'relative',zIndex:1,marginBottom:10},
    filterItemRight:{marginRight:10},
    filterItemNotSelected:{borderColor:'white'},
    filterItemSelected:{borderColor:'#f02b2b'},
    filterItemSelectedImageSize:{width:15,height:13,position:'absolute',right:-1,bottom:0,zIndex:2},
    filterBtnSplit:{width:'10%'},
    filterBtn:{borderWidth:1,width:'35%',overflow:'hidden'},
    filterBtnClear:{borderColor:'#dbdbdb',backgroundColor:'white'},
    filterBtnSubmit:{borderColor:'#fe414b',backgroundColor:'#fe414b'},

    //邀请有礼
    inviteItemWidth:{width:'46%'},
    inviteFontSize:{fontSize:10},
    inviteItemFontSize:{fontSize:10},
    inviteItemIcon:{backgroundColor:'#ff6b09',width:30,height:30,borderRadius:50,marginBottom:8},
    inviteItemIconSize:{width:14,height:14},
    inviteItemBox:{width:'33%',position:'relative',zIndex:2},
    inviteBoxLine:{position:'absolute',width:'75%',top:15,left:'12%',right:0,height:1,backgroundColor:'#ff6b09',zIndex:2},
    inviteCodeHeight:{paddingTop:'10%'},
    inviteCodeShadow:{textShadowOffset:{width:-1,height:1},textShadowRadius:3,textShadowColor:'#999'},
    inviteInputBox:{backgroundColor:'#e2e2e2',width:'75%'},
    inviteInputBtn:{backgroundColor:'#ffb78a',width:'75%'},
    inviteInputBtnMarginTop:{marginTop:'8%'},
    inviteInput:{paddingTop:0,paddingBottom:0}

});
export default styles;