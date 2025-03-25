System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,s,a,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.CCFloat,c=e.Vec3,p=e.Component}],execute:function(){var u,d,l,h,f;o._RF.push({},"9af15P+Ge5PWIUDDMCMIfSs","Background",void 0);var y=s.ccclass,g=s.property;e("background",(u=y("Background"),d=g({type:a}),u((f=t((h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).speed=void 0,r(t,"speedX",f,i(t)),t}n(t,e);var o=t.prototype;return o.start=function(){this.speed=new c(this.speedX,0,0)},o.update=function(e){this.speed.x=this.speedX*e,this.node.translate(this.speed),this.node.position.x<-288&&this.node.translate(new c(288,0,0))},t}(p)).prototype,"speedX",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-288}}),l=h))||l));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,a,r,o,u,s,c,p,h,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,u=t.Node,s=t.input,c=t.Input,p=t.Vec3,h=t.UITransform,l=t.Component}],execute:function(){var d,g,m,y,f;r._RF.push({},"7c725UjcQRF6K1hLfWj/YBu","Bird",void 0);var v=o.ccclass,B=o.property;t("Burung",(d=v("Burung"),g=B({type:u}),d((f=e((y=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).nodeImage=void 0,e.curRotation=0,e.isLagiTurun=!0,e.kecepatanBurung=50,e.defaultKecepatan=250,e.gravitasi=650,n(e,"nodeSekumpulanPipa",f,a(e)),e}i(e,t);var r=e.prototype;return r.start=function(){this.nodeImage=this.node.getChildByName("image_bird"),s.on(c.EventType.TOUCH_START,this.onTouchStart,this)},r.onTouchStart=function(t){this.isLagiTurun=!1,this.kecepatanBurung=this.defaultKecepatan},r.update=function(t){this.kecepatanBurung-=this.gravitasi*t,this.node.translate(new p(0,this.kecepatanBurung*t,0)),this.kecepatanBurung<0?this.curRotation>-60&&(this.curRotation-=60*t):this.curRotation<60&&(this.curRotation+=60*t),this.nodeImage.setRotationFromEuler(new p(0,0,this.curRotation)),this.isNabrakPipa(this.nodeSekumpulanPipa)&&alert("Game Over")},r.isNabrakPipa=function(t){if(!t)return!1;var e=t.getChildByName("pipa1"),i=t.getChildByName("pipa2");if(!e||!i)return!1;var n=this.nodeImage.getComponent(h),a=n.width,r=n.height,o=this.nodeImage.worldPosition,u=o.x-a/2,s=o.x+a/2,c=o.y+r/2,p=o.y-r/2,l=e.getComponent(h),d=l.width,g=l.height,m=e.worldPosition,y=m.x-d/2,f=m.x+d/2,v=m.y+g/2,B=m.y-g/2,k=i.getComponent(h),R=k.width,w=k.height,P=i.worldPosition,T=P.x-R/2,C=P.x+R/2,I=P.y+w/2,b=P.y-w/2;return s>y&&u<f&&p<v&&c>B||s>T&&u<C&&p<I&&c>b},e}(l)).prototype,"nodeSekumpulanPipa",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=y))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Background.ts","./Bird.ts","./pipa.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/pipa.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,i,r,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,i=t.Vec3,r=t.randomRangeInt,s=t.Component}],execute:function(){var a;e._RF.push({},"44ebehQ8R5P+7ECbow0FxVx","pipa",void 0);var p=o.ccclass;o.property,t("pipa",p("pipa")(a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){this.node.translate(new i(-100*t,0,0)),this.node.position.x<-256&&(this.node.translate(new i(346,0,0)),this.node.position.y<=0?this.node.translate(new i(340,r(100,150),0)):this.node.translate(new i(340,r(-50,0),0)))},e}(s))||a);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});