(function(e){function t(t){for(var i,l,r=t[0],o=t[1],c=t[2],f=0,d=[];f<r.length;f++)l=r[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},a={app:0},s=[];function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/oss-explorer/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04d9":function(e,t,n){"use strict";var i=n("1557"),a=n.n(i);a.a},"0e55":function(e,t,n){},1:function(e,t){},1557:function(e,t,n){},2:function(e,t){},"22d7":function(e,t,n){"use strict";var i=n("0e55"),a=n.n(i);a.a},"29d6":function(e,t,n){"use strict";var i=n("f4de"),a=n.n(i);a.a},3:function(e,t){},"371f":function(e,t,n){},4:function(e,t){},4330:function(e,t,n){"use strict";var i=n("371f"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.token?e._e():n("a",{staticClass:"btn btn-success",attrs:{href:e.link}},[e._v("登录")]),e.token?n("explorer",{attrs:{token:e.token,meta:e.meta,stsPath:e.stsPath,multiple:!0,path:e.path,privatePath:e.privatePath,limit:5,maxKeys:1e3},on:{select:e.onSelect},model:{value:e.objects,callback:function(t){e.objects=t},expression:"objects"}}):e._e()],1)},s=[],l=(n("386d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel panel-default explorer"},[n("div",{staticClass:"panel-heading clearfix"},[n("toolbar",{attrs:{multiple:e.multiple,prefix:e.prefix},on:{upload:function(t){e.showUploader=!0},remove:e.remove,hide:e.hide,mkdir:e.mkdir,refresh:e.list,userspace:e.changeUserspace,view:e.changeView,sort:e.sort}})],1),n("breadcrumb",{attrs:{prefix:e.prefix},on:{change:e.cd}}),n("message",{ref:"message"}),n("div",{ref:"container",staticClass:"panel-body"},["list"==e.view?n("list",{attrs:{files:e.files,nextMarker:e.nextMarker},on:{cd:e.cd,select:e.select,remove:e.remove},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):e._e(),"grid"==e.view?n("grid",{attrs:{files:e.files,nextMarker:e.nextMarker,prefix:e.prefix},on:{cd:e.cd,select:e.select,remove:e.remove},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):e._e(),e.showUploader?n("modal",{ref:"modal",attrs:{title:"上传文件"},on:{close:e.onCloseUploader}},[e.showUploader?n("uploader",{attrs:{multiple:e.multiple,accept:e.accept,uploader:e.upload},on:{change:e.uploaded}}):e._e()],1):e._e()],1)],1)}),r=[],o=(n("7f7f"),n("55dd"),n("28a5"),n("75fc")),c=(n("ac6a"),n("5df3"),n("4f7f"),n("c5f6"),n("1dc8"),n("5a0c")),u=n.n(c),f=n("5ab9"),d=n("1d3a"),A=n.n(d),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn-toolbar clearfix",attrs:{role:"toolbar","aria-label":"..."}},e._l(e.toolbar,(function(t){return n("div",{key:t.name,staticClass:"btn-group btn-group-sm",class:{"pull-right":t.pullRight,open:t.open}},[e._l("radio"==t.type&&t.options||[t],(function(i){return[t.hidden?e._e():n("button",{key:i.name,staticClass:"btn btn-default btn-sm",class:[i.className,i.name==t.value&&"active"],attrs:{title:i.label},on:{click:function(n){return e.onClick(t,i)}}},[i.icon?n("i",{staticClass:"glyphicon",class:"glyphicon-"+i.icon}):e._e(),i.showLabel?n("span",[e._v(e._s(i.label))]):e._e(),"select"==t.type?n("span",{staticClass:"caret"}):e._e()])]})),"select"==t.type?n("ul",{staticClass:"dropdown-menu"},e._l(t.options,(function(i){return n("li",{key:i.name},[n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.onClick(t,i)}}},[i.icon?n("i",{staticClass:"glyphicon",class:"glyphicon-"+i.icon}):e._e(),e._v("\n          "+e._s(i.label)+"\n        ")])])})),0):e._e()],2)})),0)},p=[],m={name:"Toolbar",props:{toolbar:{type:Array,default:function(){return[{name:"upload",label:"上传文件",icon:"upload"},{name:"mkdir",label:"新建文件夹",icon:"folder-open"},{name:"refresh",label:"刷新",icon:"refresh"},{name:"hide",label:"隐藏已选文件",icon:"lock",hidden:!0},{name:"sort",value:"lastModified-desc",label:"排序",type:"select",icon:"sort-by-attributes-alt",className:"dropdown-toggle",open:!1,options:[{name:"lastModified-desc",label:"按时间倒序"},{name:"lastModified-asc",label:"按时间正序"},{name:"name-asc",label:"按文件名正序"},{name:"name-desc",label:"按文件名倒序"}]},{name:"view",value:"grid",type:"radio",options:[{name:"grid",label:"按缩略图显示",icon:"th"},{name:"list",label:"按列表显示",icon:"th-list"}]},{name:"userspace",pullRight:!0,value:"public",type:"radio",options:[{name:"public",label:"公共文件夹",icon:"home"},{name:"private",label:"我的文件夹",icon:"user"}]},{name:"remove",label:"批量删除",icon:"trash",hidden:!0}]}}},methods:{onClick:function(e,t){e.open=!e.open,t.options||(e.value=t.name,this.$emit(e.name,t.name))}}},v=m,g=n("2877"),b=Object(g["a"])(v,h,p,!1,null,null,null),x=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",{staticClass:"breadcrumb explorer-breadcrumb"},[n("li"),e._l(e.path,(function(t,i){return n("li",{key:t},[n("a",{attrs:{href:t},on:{click:function(t){return t.preventDefault(),e.openFolder(i)}}},[e._v(e._s(t))])])}))],2)},y=[],C={name:"Breadcrumb",props:{prefix:{type:String,default:""}},computed:{path:function(){return this.prefix.split("/")}},methods:{openFolder:function(e){var t=this.path.slice(0,e+1).join("/")+"/";this.$emit("change",t)}}},k=C,M=(n("29d6"),Object(g["a"])(k,w,y,!1,null,null,null)),E=M.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"explorer-grid"},[n("div",{staticClass:"row"},[e._l(e.files,(function(t){return[t.name!=e.prefix?n("div",{key:t.name,staticClass:"col-xs-3 col-sm-2"},[n("media",{class:{active:~e.value.indexOf(t)},attrs:{file:t},on:{remove:function(t){return e.$emit("remove",t)},select:function(t){return e.$emit("select",t)},cd:function(t){return e.$emit("cd",t)}}})],1):e._e()]}))],2),n("div",{staticClass:"row"},[e.nextMarker?n("button",{staticClass:"btn btn-block btn-link",on:{click:function(t){return t.preventDefault(),e.more(t)}}},[e._v("加载更多")]):e._e()])])},j=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"explorer-media-object"},[n("div",{staticClass:"thumbnail"},[e.imageTypes[e.ext]?n("img",{staticClass:"media-object-img",attrs:{src:e.file.dataURL,"data-src":e.thumb},on:{click:function(t){return e.$emit("select",e.file)}}}):e._e(),e.file.folder||e.imageTypes[e.ext]?e._e():n("span",{staticClass:"media-object-img",class:e._f("mime")(e.file.name),on:{click:function(t){return e.$emit("select",e.file)}}}),e.file.folder?n("span",{staticClass:"media-object-img",class:e._f("mime")(".folder"),on:{click:function(t){return e.$emit("cd",e.file.name)}}}):e._e(),n("a",{staticClass:"media-object-name",attrs:{href:e.file.url,target:"_blank"},on:{click:function(t){e.file.folder&&e.$emit("cd",e.file.name)}}},[e._v("\n        "+e._s(e._f("cutpath")(e.file.name))+"\n    ")])]),n("button",{staticClass:"close",attrs:{type:"button",title:"双击删除"},on:{dblclick:function(t){return t.stopPropagation(),e.$emit("remove",e.file)}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},B=[],D=function(e){var t=e.split("/");return t.pop()||t.pop()||"/"},R=function(e){return"fiv-cla fiv-icon-"+e.split(".").pop().toLowerCase()},O={name:"Media",filters:{cutpath:D,mime:R},props:{file:{type:Object,default:function(){return{}}}},data:function(){return{imageTypes:{png:!0,jpg:!0,gif:!0,svg:!0,bmp:!0,jpeg:!0,webp:!0},videoTypes:{mp4:!0,ogg:!0,avi:!0}}},computed:{ext:function(){return this.file.name.split(".").pop().toLowerCase()},thumb:function(){var e="?x-oss-process=image/auto-orient,1/resize,m_pad,w_200,h_200/quality,q_100";return"svg"===this.ext?this.file.url:this.file.url+e}},methods:{select:function(e){this.$emit("change",e)}}},S=O,Y=(n("04d9"),Object(g["a"])(S,Q,B,!1,null,null,null)),I=Y.exports,U={name:"ExplorerGrid",components:{Media:I},props:{files:{type:Array,default:function(){return[]}},nextMarker:{type:String,default:""},value:{type:Array,default:function(){return[]}},prefix:{type:String,default:""}}},G=U,P=Object(g["a"])(G,_,j,!1,null,null,null),Z=P.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"explorer-list table table-hover"},[e._m(0),n("tbody",e._l(e.files,(function(t){return n("tr",{key:t.name,class:{success:~e.value.indexOf(t)},on:{click:function(n){return e.$emit("select",t)}}},[n("td",[n("span",{staticClass:"explorer-mime",class:e._f("mime")(t.name)})]),n("td",[n("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(e._f("cutpath")(t.name)))])]),n("td",[e._v(e._s(t.size))]),n("td",[e._v(e._s(t.lastModified))]),n("td",[n("button",{staticClass:"btn btn-sm btn-link",attrs:{title:"双击删除"},on:{dblclick:function(n){return e.$emit("remove",t)}}},[e._v("删除")])])])})),0)])},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",{staticClass:"info"},[n("td",[e._v("类型")]),n("td",[e._v("文件名")]),n("td",[e._v("大小")]),n("td",[e._v("修改时间")]),n("td",[e._v("操作")])])])}],F={name:"ExplorerList",filters:{cutpath:D,mime:R},props:{files:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}},nextMarker:{type:String,default:""}}},N=F,K=(n("f62b"),Object(g["a"])(N,J,T,!1,null,null,null)),H=K.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"explorer-uploader"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-3 col-sm-2"},[n("div",{staticClass:"explorer-media-object"},[n("div",{staticClass:"thumbnail",staticStyle:{border:"1px dashed #ccc"}},[n("span",{staticClass:"explorer-uploader-handle"},[e._v("+")]),n("input",{ref:"fileBox",staticClass:"explorer-uploader-input",attrs:{type:"file",title:"点击或拖动文件到这里上传文件",multiple:e.multiple},on:{change:e.onChange}})])])]),e._l(e.files,(function(t){return n("div",{key:t.name,staticClass:"col-xs-3 col-sm-2"},[n("media",{class:{active:~e.uploads.indexOf(t),loading:e.uploading.name===t.name},attrs:{file:t},on:{remove:e.remove}}),t.message?n("div",{staticClass:"text-danger",staticStyle:{"margin-top":"-20px"}},[e._v(e._s(t.message))]):e._e()],1)}))],2),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2"},[n("button",{staticClass:"btn btn-success btn-sm",on:{click:e.upload}},[e._v("上传全部")])]),n("div",{staticClass:"col-xs-4"},[e.failed.length?n("label",{staticClass:"checkbox-inline",attrs:{for:""}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.autorename,expression:"autorename"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.autorename)?e._i(e.autorename,null)>-1:e.autorename},on:{change:function(t){var n=e.autorename,i=t.target,a=!!i.checked;if(Array.isArray(n)){var s=null,l=e._i(n,s);i.checked?l<0&&(e.autorename=n.concat([s])):l>-1&&(e.autorename=n.slice(0,l).concat(n.slice(l+1)))}else e.autorename=a}}}),e._v(" 自动重命名同名文件\n        ")]):e._e()]),n("div",{staticClass:"col-xs-6"},[e.message?n("div",{staticClass:"bg-warning well-sm"},[e._v(e._s(e.message))]):e._e()])])])},q=[],W=(n("20d6"),n("1c4c"),{name:"ExplorerUploader",components:{Media:I},props:{multiple:{type:Boolean,default:!0},uploader:{type:Function,default:null}},data:function(){return{files:[],uploads:[],failed:[],uploading:{},message:"",autorename:!1}},methods:{onChange:function(e){this.message="",this.files=Array.from(e.target.files).map((function(e){return{name:e.name,dataURL:window.URL.createObjectURL(e),lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate,size:e.size,file:e}}))},remove:function(e){var t=this.files.findIndex((function(t){return t.name===e.name}));this.files.splice(t,1)},upload:function(){var e=this;this.message="",this.failed=[];var t=Promise.resolve(null);this.files.forEach((function(n){var i=n.name;if(e.autorename){var a=i.split(".");a.splice(-1,0,Date.now()),i=a.join(".")}t=t.then((function(){return e.message="正在上传:".concat(n.name),e.uploading=n,e.uploader(i,n.file).then((function(){e.uploads.push(n)})).catch((function(t){n.message=t.message,e.failed.push(n)}))}))})),t.then((function(){e.message="成功:".concat(e.uploads.length,",失败:").concat(e.failed.length),e.uploads=[],e.uploading={},e.files=e.failed,!e.failed.length&&e.$emit("change")}))}}}),L=W,z=(n("d045"),Object(g["a"])(L,V,q,!1,null,null,null)),$=z.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal fade in explorer-modal"},[n("div",{staticClass:"modal-backdrop fade in",on:{click:function(t){return e.$emit("close")}}}),n("div",{ref:"dialog",staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return e.$emit("close")}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])]),n("h4",{staticClass:"modal-title"},[e._v(e._s(e.title))])]),n("div",{staticClass:"modal-body"},[e._t("default")],2)])])])},ee=[],te={name:"ExplorerModal",props:{title:{type:String,default:""}},mounted:function(){this.$el.style.height=this.$el.parentNode.scrollHeight+"px",this.$refs.dialog.style.top=this.$el.parentNode.scrollTop+"px"}},ne=te,ie=(n("22d7"),Object(g["a"])(ne,X,ee,!1,null,null,null)),ae=ie.exports,se=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"alert alert-warning well-sm explorer-message fade",class:{in:!!e.message||e.loading}},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{src:n("fa5e"),width:"15px",height:"15px"}}),e.loading?i("span",[e._v("加载中...")]):i("span",[e._v(e._s(e.message))])])},le=[],re={name:"ExplorerMessage",data:function(){return{message:"",loading:!1}},methods:{open:function(e){var t=this;if(e.finally)return this.loading=!0,e.finally((function(){t.loading=!1}));this.message=e.message||e,this.close()},close:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=setTimeout((function(){e.message="",clearTimeout(n)}),t)}}},oe=re,ce=(n("f87e"),Object(g["a"])(oe,se,le,!1,null,null,null)),ue=ce.exports,fe={name:"Explorer",components:{Toolbar:x,Breadcrumb:E,Grid:Z,List:H,Modal:ae,Message:ue,Uploader:$},props:{delimiter:{type:String,default:"/"},maxKeys:{type:Number,default:1e3},multiple:{type:Boolean,default:!1},accept:{type:String,default:""},limit:{type:Number,default:0},token:{type:String,default:""},stsPath:{type:String,default:"/api/sts"},path:{type:String,default:""},privatePath:{type:String,default:""},value:{type:Array,default:function(){return[]}}},data:function(){return{files:[],prefix:"",nextMarker:null,uploads:[],showUploader:!1,view:"grid"}},created:function(){this.prefix=this.path+u()().format("YYYY-MM/"),this.client=new f["a"]({delimiter:this.delimiter,maxKeys:this.maxKeys,stsPath:this.stsPath,token:this.token})},methods:{changeUserspace:function(e){return this.prefix="public"===e?this.path:this.privatePath,this.nextMarker=null,this.files=[],this.list()},changeView:function(e){var t=this;this.view=e,this.$nextTick((function(){t.$emit("lazyload")}))},cd:function(e){return this.prefix=e,this.nextMarker=null,this.list({prefix:e})},select:function(e){var t,n=new Set(this.value);if(!n.has(e)&&this.value.length>=this.limit)return this.showMessage("最多选".concat(this.limit,"个"));n.has(e)?n.delete(e):n.add(e),(t=this.value).splice.apply(t,[0,this.value.length].concat(Object(o["a"])(n)))},list:function(e){var t=this,n=this.client.list(Object.assign({prefix:this.prefix,marker:this.nextMarker},e)).then((function(e){return t.value.splice(0,t.value.length),t.files=[],e})).then((function(e){t.files=e.files,t.nextMarker=e.nextMarker})).catch((function(e){t.showMessage(e)})).finally((function(){t.$emit("lazyload")}));return this.showMessage(n),n},refresh:function(){return this.nextMarker="",this.list()},more:function(){return this.list()},sort:function(e){var t=this,n=e.split("-"),i=n[0],a="asc"===n[1]?-1:1,s=this.files.filter((function(e){return e.folder})).sort((function(e,t){return e<t?a:-a})),l=this.files.filter((function(e){return!e.folder})).sort((function(e,t){return e[i]<t[i]?a:-a}));this.files=[],setTimeout((function(){t.files=s.concat(l),t.$nextTick((function(){t.$emit("lazyload")}))}))},upload:function(e,t){return this.client.upload(e,t)},uploaded:function(){return this.showUploader=!1,this.refresh()},remove:function(e){var t=this;if(e){var n=this.client.delete(e.name).then((function(){return t.list()}));return this.showMessage(n),n}if(!this.value.length)return this.showMessage("没有选择文件");var i=[];this.value.forEach((function(e){i.push(t.client.delete(e.name))}));var a=Promise.all(i).then((function(e){return t.value.splice(0,t.value.length),t.list()})).catch((function(e){t.showMessage(e)})).finally((function(){t.loading=!1}));return this.showMessage(a),a},hide:function(){var e=this;if(!this.value.length)return this.showMessage("没有选择文件");var t=[];this.value.forEach((function(n){t.push(e.client.hide(n.name))}));var n=Promise.all(t).then((function(t){return e.value.splice(0,e.value.length),e.list()})).catch((function(t){e.showMessage(t)})).finally((function(){e.loading=!1}));return this.showMessage(n),n},mkdir:function(){var e=this,t=prompt("请输入文件夹名",u()().format("YYYY-MM"));if(t)return this.loading=!0,this.client.mkdir(this.prefix+t).then((function(t){return e.list()})).catch((function(t){e.showMessage(t)})).finally((function(){e.loading=!1}))},showMessage:function(e){this.$refs.message.open(e)},onCloseUploader:function(){this.showUploader=!1,this.refresh()}},mounted:function(){var e=this;this.lazyLoad=new A.a({container:this.$refs.container}),this.$on("lazyload",(function(){e.lazyLoad.update()})),this.list()},beforeDestroy:function(){this.lazyLoad.destroy()}},de=fe,Ae=(n("4330"),Object(g["a"])(de,l,r,!1,null,null,null)),he=Ae.exports,pe=n("14b7"),me=n.n(pe),ve=n("4328"),ge=n.n(ve),be="61c1b757d0bcf064bcd5",xe="https://github.com/login/oauth/authorize",we="".concat(xe,"?client_id=").concat(be),ye={name:"app",components:{Explorer:he},data:function(){return{clientConfig:null,token:"",path:"",privatePath:"",stsPath:"https://1517151847053460.us-west-1.fc.aliyuncs.com/2016-08-15/proxy/auth/oss/",objects:[],meta:{},link:we}},methods:{onSelect:function(e){}},created:function(){if(this.token=ge.a.parse(location.search,{ignoreQueryPrefix:!0}).token,this.token){var e=me.a.decode(this.token);this.path="".concat(e.company,"/"),this.privatePath="".concat(e.user_id,"/")}}},Ce=ye,ke=Object(g["a"])(Ce,a,s,!1,null,null,null),Me=ke.exports;t["default"]=new i["a"]({el:"#app",render:function(e){return e(Me)}})},"5ab9":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));n("55dd"),n("f751"),n("551c");var i=n("d225"),a=n("b0b4"),s=n("5a0c"),l=n.n(s),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{maxKeys:1e3,delimiter:"/"};Object(i["a"])(this,t),this.options=e,this.currentPath="",this.expiration="",this.client=null,this.prefixes=[],this.objects=[]}return Object(a["a"])(t,[{key:"getClient",value:function(){var e=this;return this.client&&l()(this.expiration).isAfter(l()())?Promise.resolve(this.client):OSS.urllib.request(this.options.stsPath,{method:"GET",headers:{Authorization:this.options.token}}).then((function(t){var n=JSON.parse(t.data);if(200!==t.status)throw new Error(n.message);return n=n.data||n,e.expiration=n.expiration,e.client=new OSS(n),e.client}))}},{key:"list",value:function(e){var t=this;return this.currentPath=e.prefix,this.callMethod("list",Object.assign({delimiter:this.options.delimiter,"max-keys":this.options.maxKeys},e),{headers:{"Content-Type":"application/xml"}}).then((function(n){return n.prefixes=(n.prefixes||[]).concat(e.marker?t.prefixes:[]).sort((function(e,t){return e>t?-1:1})),t.prefixes=n.prefixes,n.objects=(n.objects||[]).concat(e.marker?t.objects:[]).sort((function(e,t){return l()(e.lastModified).isAfter(l()(t.lastModified))?-1:1})),t.objects=n.objects,n.files=n.prefixes.map((function(e){return{name:e,folder:!0}})).concat(n.objects),n}))}},{key:"upload",value:function(e,t,n){var i=this,a=this.currentPath+e;return Promise.resolve().then((function(){return i.callMethod("head",a).then((function(e){return Promise.reject(new Error("同名文件"))})).catch((function(e){return 404===e.status?Promise.resolve(e):Promise.reject(e)}))})).then((function(){return i.callMethod("put",a,t,n)}))}},{key:"mkdir",value:function(t){var n=e.from("");return this.callMethod("put",t+"/",n)}},{key:"delete",value:function(e,t){return this.callMethod("delete",e)}},{key:"hide",value:function(e){return this.callMethod("putACL",e,"private")}},{key:"deleteMulti",value:function(e){return this.callMethod("deleteMulti",e)}},{key:"callMethod",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.getClient().then((function(e){return e[t.shift()].apply(e,t)}))}}]),t}()}).call(this,n("b639").Buffer)},"629d":function(e,t,n){},"976f":function(e,t,n){},"9e3c":function(e,t,n){},d045:function(e,t,n){"use strict";var i=n("976f"),a=n.n(i);a.a},f4de:function(e,t,n){},f62b:function(e,t,n){"use strict";var i=n("629d"),a=n.n(i);a.a},f87e:function(e,t,n){"use strict";var i=n("9e3c"),a=n.n(i);a.a},fa5e:function(e,t){e.exports="data:image/gif;base64,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"}});
//# sourceMappingURL=app.b1c49e67.js.map