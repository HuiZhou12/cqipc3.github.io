"use strict";(self["webpackChunkvue3_musicbox"]=self["webpackChunkvue3_musicbox"]||[]).push([[238],{857:function(s,a,t){t.r(a),t.d(a,{default:function(){return is}});var e=t(6768),i=t(4232);const l=s=>((0,e.Qi)("data-v-2edaedb8"),s=s(),(0,e.jt)(),s),o={class:"detail"},n={class:"detail-container"},c={class:"detail-main"},r={class:"cover"},d={class:"cover-img"},u=l((()=>(0,e.Lk)("i",{class:"inconfont icon-placeholder"},null,-1))),m={class:"cover-desc"},v=l((()=>(0,e.Lk)("h4",null,"标签",-1))),k={key:0,class:"cover-tags"},f=l((()=>(0,e.Lk)("h4",null,"更新时间",-1))),L=l((()=>(0,e.Lk)("h4",null,"喜欢这个歌单的人",-1))),p={class:"sub-playlist"},y=l((()=>(0,e.Lk)("h4",null,"介绍",-1))),g={class:"cover-desc-all"},h={class:"detail-info"},b={class:"cover-info"},C={class:"cover-header"},_={class:"cover-author"},I={class:"cover-name"},F={class:"cover-date"},X={class:"cover-digital"},$={class:"cover-playCount"},E=l((()=>(0,e.Lk)("i",{class:"iconfont icon-playnum"},null,-1))),W={class:"cover-collect"},K=l((()=>(0,e.Lk)("i",{class:"iconfont icon-collect"},null,-1))),U={class:"cover-comment"},q=l((()=>(0,e.Lk)("i",{class:"iconfont icon-comment"},null,-1))),Q={class:"song-main"},S={class:"song-header"},A=l((()=>(0,e.Lk)("i",{class:"iconfont icon-audio-play"},null,-1))),D={key:0,class:"showAllSongsTips"},w={class:"detail-aside"},H=l((()=>(0,e.Lk)("div",{class:"aside-title"},"相关表单推荐",-1))),T={class:"aside-main recom-main"},M={class:"recom-info"},N={class:"recom-name"},P={class:"recom-author"},V={key:1,class:"playlist-comment"},x=l((()=>(0,e.Lk)("div",{class:"aside-title"}," 歌单评论",-1))),j={class:"aside-main comment-main"},B={class:"comment-info"},R={class:"comment-userInfo"},O={class:"comment-date"},z={class:"comment-desc"};function G(s,a,t,l,G,J){const Y=(0,e.g2)("el-image"),Z=(0,e.g2)("router-link"),ss=(0,e.g2)("SongList");return(0,e.uX)(),(0,e.CE)("div",o,[(0,e.Lk)("div",n,[(0,e.Lk)("div",c,[(0,e.Lk)("div",r,[(0,e.Lk)("div",d,[(0,e.bF)(Y,{src:l.info.details.coverImgUrl},{default:(0,e.k6)((()=>[u])),_:1},8,["src"])]),(0,e.Lk)("div",m,[l.info.details.tags&&l.info.details.tags.length?((0,e.uX)(),(0,e.CE)(e.FK,{key:0},[v,l.info.details.tags?((0,e.uX)(),(0,e.CE)("div",k,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(l.info.details.tags,((s,a)=>((0,e.uX)(),(0,e.Wv)(Z,{to:{path:"/playlist",query:{cat:s}},key:a,class:"tag"},{default:(0,e.k6)((()=>[(0,e.eW)("#"+(0,i.v_)(s),1)])),_:2},1032,["to"])))),128))])):(0,e.Q3)("",!0)],64)):(0,e.Q3)("",!0),l.info.details.trackUpdateTime?((0,e.uX)(),(0,e.CE)(e.FK,{key:1},[f,(0,e.Lk)("p",null,(0,i.v_)(s.$utils.formartDate(l.info.details.trackNumberUpdateTime,"yyyy-MM-dd HH:mm:ss")),1)],64)):(0,e.Q3)("",!0),l.info.details.subscribers?((0,e.uX)(),(0,e.CE)(e.FK,{key:2},[L,(0,e.Lk)("div",p,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(l.info.details.subscribers,(s=>((0,e.uX)(),(0,e.Wv)(Z,{to:{path:"/home",query:{id:s.userId}},key:s.userId,class:"User-home"},{default:(0,e.k6)((()=>[(0,e.bF)(Y,{src:s.avatarUrl,class:"cover-avatarIcon"},null,8,["src"])])),_:2},1032,["to"])))),128))])],64)):(0,e.Q3)("",!0),l.info.details.description?((0,e.uX)(),(0,e.CE)(e.FK,{key:3},[y,(0,e.Lk)("div",g,(0,i.v_)(l.info.details.description),1)],64)):(0,e.Q3)("",!0)])]),(0,e.Lk)("div",h,[(0,e.Lk)("div",b,[(0,e.Lk)("div",C,(0,i.v_)(l.info.details.name),1),(0,e.Lk)("div",_,[l.info.details.creator?((0,e.uX)(),(0,e.CE)(e.FK,{key:0},[(0,e.bF)(Z,{to:{path:"/home",query:{id:l.info.details.creator.userId}},class:"User-home"},{default:(0,e.k6)((()=>[(0,e.bF)(Y,{src:l.info.details.creator.avatarUrl,class:"cover-avatar"},null,8,["src"])])),_:1},8,["to"]),(0,e.Lk)("div",I,[(0,e.bF)(Z,{to:{path:"/home",query:{id:l.info.details.creator.userId}},class:"User-home"},{default:(0,e.k6)((()=>[(0,e.eW)((0,i.v_)(l.info.details.creator.nickname),1)])),_:1},8,["to"]),l.info.details.creator.avatarDetail?((0,e.uX)(),(0,e.Wv)(Y,{key:0,src:l.info.details.creator.avatarDetail.identityIconUrl,class:"cover-avatarIcon"},null,8,["src"])):(0,e.Q3)("",!0)]),(0,e.Lk)("div",F,(0,i.v_)(s.$utils.formartDate(l.info.details.createTime,"yyyy-MM-dd"))+" 创建",1)],64)):(0,e.Q3)("",!0)]),(0,e.Lk)("div",X,[(0,e.Lk)("span",$,[E,(0,e.eW)(" "+(0,i.v_)(s.$utils.formartNum(l.info.details.playCount))+"次播放",1)]),(0,e.Lk)("span",W,[K,(0,e.eW)(" "+(0,i.v_)(s.$utils.formartNum(l.info.details.subscribedCount))+"次收藏",1)]),(0,e.Lk)("span",U,[q,(0,e.eW)(" "+(0,i.v_)(s.$utils.formartNum(l.info.details.commentCount))+"条留言",1)])])]),(0,e.Lk)("div",Q,[(0,e.Lk)("div",S,[(0,e.Lk)("h4",null,[(0,e.eW)("歌曲列表"),(0,e.Lk)("em",null,"共"+(0,i.v_)(l.info.total+"首歌"),1)]),(0,e.Lk)("span",{class:"play-all",onClick:a[0]||(a[0]=(...s)=>l.playAllSongs&&l.playAllSongs(...s))},[A,(0,e.eW)("播放全部")]),(0,e.Lk)("span",{class:(0,i.C4)(["collect",l.info.details.subscribed?"active":""]),onClick:a[1]||(a[1]=(...s)=>l.subPlayList&&l.subPlayList(...s))},[(0,e.Lk)("i",{class:(0,i.C4)(["iconfont","icon-collect"+(l.info.details.subscribed?"-active":"")])},null,2),(0,e.eW)(" "+(0,i.v_)(l.info.details.subscribed?"已收藏":"收藏"),1)],2)]),l.info.isLoading?((0,e.uX)(),(0,e.CE)(e.FK,{key:0},[(0,e.eW)(" 123 ")],64)):((0,e.uX)(),(0,e.CE)(e.FK,{key:1},[(0,e.bF)(ss,{songList:l.info.songList,stripe:!0},null,8,["songList"]),l.accountInfo.getLogin?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("div",D,[(0,e.Lk)("span",{onClick:a[2]||(a[2]=(...s)=>l.loginHanlder&&l.loginHanlder(...s))},"登录后查看全部歌曲")]))],64))])])]),(0,e.Lk)("div",w,[l.info.playlists.length?((0,e.uX)(),(0,e.CE)(e.FK,{key:0},[H,(0,e.Lk)("div",T,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(l.info.playlists,(s=>((0,e.uX)(),(0,e.Wv)(Z,{key:s.id,class:"recom-item",to:{path:"/playlist/detail",query:{id:s.id}}},{default:(0,e.k6)((()=>[(0,e.bF)(Y,{src:s.coverImgUrl,class:"image"},null,8,["src"]),(0,e.Lk)("div",M,[(0,e.Lk)("div",N,(0,i.v_)(s.name),1),(0,e.Lk)("div",P,[(0,e.eW)(" By "),(0,e.bF)(Z,{to:{path:"/home",query:{id:s.creator.userId}},class:"user-name"},{default:(0,e.k6)((()=>[(0,e.eW)((0,i.v_)(s.creator.nickname),1)])),_:2},1032,["to"])])])])),_:2},1032,["to"])))),128))])],64)):(0,e.Q3)("",!0),l.info.comments.length?((0,e.uX)(),(0,e.CE)("div",V,[x,(0,e.Lk)("div",j,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(l.info.comments,(a=>((0,e.uX)(),(0,e.CE)("div",{class:"comment-item",key:a.commentId},[(0,e.bF)(Z,{to:{path:"/home",query:{id:a.commentId}}},{default:(0,e.k6)((()=>[(0,e.bF)(Y,{src:a.user.avatarUrl,class:"image"},null,8,["src"])])),_:2},1032,["to"]),(0,e.Lk)("div",B,[(0,e.Lk)("div",R,[(0,e.bF)(Z,{to:{path:"/home",query:{id:a.commentId}},class:"comment-name"},{default:(0,e.k6)((()=>[(0,e.eW)((0,i.v_)(a.user.nickname),1)])),_:2},1032,["to"]),(0,e.Lk)("span",O,(0,i.v_)(s.$utils.formatTime(a.time)),1)]),(0,e.Lk)("div",z,(0,i.v_)(a.content),1)])])))),128))])])):(0,e.Q3)("",!0)])])])}t(4114);var J=t(3688),Y=t(1387),Z=t(144),ss=t(603),as={name:"playListDetail",components:{SongList:J.A},setup(){const{proxy:s}=(0,e.nI)(),a=ss.A.accountInfoStore(),t=ss.A.loginDialogStore(),i=ss.A.playListInfoStore(),l=(0,Y.lq)(),o=(0,Z.Kh)({id:"",details:{},isLoading:!0,songList:[],playlists:[],comments:[],total:0,loading:!0}),n=async t=>{o.isLoading=!0;const{data:e}=await s.$http.playListDetail(t);if(200!==e.code)return s.$msg.error(`请求数据失败,${e.message}`);o.details=e.playlist,a.getLogin?c(e.playlist.trackIds):(o.songList=s.$utils.formatSongs(e.playlist.tracks,e.privileges),o.total=o.songList.length,console.log(o.total),o.isLoading=!1)},c=async a=>{const t=[],e=500;let i=[];for(let s=0;s<a.length;s+=e)t.push(a.slice(s,s+e));for(let l=0;l<t.length;l++){const a=[];t[l].map((s=>{a.push(s.id)})),o.isLoading=!0;const{data:e}=await s.$http.songDetail({ids:a.join(","),timestamp:(new Date).valueOf()+l});i=i.concat(s.$utils.formatSongs(e.songs,e.privileges))}o.songList=i,o.total=i.length,o.isLoading=!1},r=async a=>{const{data:t}=await s.$http.playlistRelated(a);if(200!==t.code)return s.$msg.error("数据请求失败");o.playlists=t.playlists},d=async a=>{const{data:t}=await s.$http.playlistComment(a);if(200!==t.code)return s.$msg.error("数据请求失败");o.comments=t.comments},u=s=>{n({id:s,s:8}),d({id:s}),r({id:s,limit:8})};(0,e.sV)((()=>{o.id=l.query.id||"",u(o.id)})),(0,Y.V6)((s=>{o.songList=[],o.total=0,o.id=s.query.id,u(o.id)}));const m=()=>{t.loginDialogVisible=!0},v=()=>{i.playAll(o.songList)},k=async()=>{const{data:a}=await s.$http.subPlayList({id:o.details.id,t:o.details.subscribed?2:1});if(200!==a.code)return s.$msg.error("数据请求失败");o.details.subscribed=!o.details.subscribed};return{info:o,onBeforeRouteUpdate:Y.V6,loginHanlder:m,playAllSongs:v,subPlayList:k,accountInfo:a}}},ts=t(1241);const es=(0,ts.A)(as,[["render",G],["__scopeId","data-v-2edaedb8"]]);var is=es}}]);
//# sourceMappingURL=238.751ff925.js.map