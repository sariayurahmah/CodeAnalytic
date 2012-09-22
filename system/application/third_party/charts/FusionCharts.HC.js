/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @version fusioncharts/3.2.3-sr1.5347
*/
(function(){
    var D=FusionCharts(["private","modules.renderer.highcharts-lib"]);
    if(D!==void 0){
        var g="",J="0",p=".",aa=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,d=/msie/i.test(navigator.userAgent)&&!window.opera,B=/\s+/g,a=/^#?/,e=/^rgba/i,u=/[#\s]/ig,w=/\{br\}/ig,t=Math.abs,z=Math.pow,$=Object.prototype.toString,x=function(a,e){
            return!a&&a!==!1&&a!==0?e:a
            },E=function(){
            var a,e,l;
            e=0;
            for(l=arguments.length;e<l;e+=1)if((a=arguments[e])||
                !(a!==!1&&a!==0))return a;return g
            },o=function(){
            var a,e,l;
            e=0;
            for(l=arguments.length;e<l;e+=1)if((a=arguments[e])||!(a!==!1&&a!==0))return a
                },y=function(){
            var a,e,l;
            e=0;
            for(l=arguments.length;e<l;e+=1)if((a=arguments[e])||!(a!==!1&&a!==0))if(!isNaN(a=Number(a)))return a
                },R=function(a,e){
            a=!a&&a!==!1&&a!==0?NaN:Number(a);
            return isNaN(a)?null:e?t(a):a
            },Lb=function(a){
            return typeof a==="string"?a.replace(w,"<br />"):g
            },Qa=function(a,e){
            var l,g;
            if(e instanceof Array)for(l=0;l<e.length;l+=1)typeof e[l]!==
                "object"?a[l]=e[l]:(typeof a[l]!=="object"&&(a[l]=e[l]instanceof Array?[]:{}),Qa(a[l],e[l]));else for(l in e)typeof e[l]==="object"?(g=$.call(e[l]),g==="[object Object]"?(typeof a[l]!=="object"&&(a[l]={}),Qa(a[l],e[l])):g==="[object Array]"?(a[l]instanceof Array||(a[l]=[]),Qa(a[l],e[l])):a[l]=e[l]):a[l]=e[l];return a
            },Wb=function(a,e){
            if(typeof a!=="object"&&typeof e!=="object")return null;
            typeof e!=="object"&&(e=a,a=void 0);
            typeof a!=="object"&&(a=e instanceof Array?[]:{});
            Qa(a,e);
            return a
            },cb=function(a,
            e){
            a=Number(a);
            a=isNaN(a)?100:a;
            e!==void 0&&(a=a*e/100);
            return a%101
            },ga=function(a,e,l){
            var a=a.split(","),g;
            l!==void 0&&(l=y(l.split(",")[0]));
            a[0]=cb(a[0],l);
            for(g=1;g<e;g+=1)a[g]=a[0]*cb(a[g],l)/100;
            return a.join(",")
            },bb=function(a,d,l){
            var t=0,o=0,Xa=0;
            l&&l.match(e)&&(l=l.split(","),t=l[0].slice(l[0].indexOf("(")+1),o=l[1],Xa=l[2],!d&&d!==0&&(d=parseInt(l[3].slice(0,l[3].indexOf(")"))*100,10)));
            if(a)if(a.match(e))l=a.split(","),t=l[0].slice(l[0].indexOf("(")+1),o=l[1],Xa=l[2];
                else{
                a=a.replace(u,
                    g).split(",")[0];
                switch(a.length){
                    case 3:
                        a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2];
                        break;
                    case 6:
                        break;
                    default:
                        a=(a+"FFFFFF").slice(0,6)
                        }
                        t=parseInt(a.slice(0,2),16);
                o=parseInt(a.slice(2,4),16);
                Xa=parseInt(a.slice(4,6),16)
                }!d&&d!=0&&(d=100);
            typeof d==="string"&&(d=d.split(",")[0]);
            d=parseInt(d,10)/100;
            return"rgba("+t+","+o+","+Xa+","+d+")"
            },Y=function(a,e){
            e=e<0||e>100?100:e;
            e/=100;
            var a=a.replace(u,g),l=parseInt(a,16),d=Math.floor(l/65536),t=Math.floor((l-d*65536)/256);
            return("000000"+(d*e<<16|t*e<<8|(l-d*65536-
                t*256)*e).toString(16)).slice(-6)
            },Ua=function(a,e){
            e=e<0||e>100?100:e;
            e/=100;
            var a=a.replace(u,g),l=parseInt(a,16),d=Math.floor(l/65536),t=Math.floor((l-d*65536)/256);
            return("000000"+(256-(256-d)*e<<16|256-(256-t)*e<<8|256-(256-(l-d*65536-t*256))*e).toString(16)).slice(-6)
            },$a={
            circle:"circle",
            triangle:"triangle",
            square:"square",
            diamond:"diamond",
            poly:"poly_"
        },Oa,L=function(){
            function a(e){
                var da;
                if(e&&e.offsetWidth&&e.offsetHeight){
                    if(e.appendChild)return e.appendChild(da=document.createElement("span")),
                        da.className="_SmartLabel_Container",da
                        }else if((e=document.getElementsByTagName("body")[0])&&e.appendChild)return da=document.createElement("span"),da.className="_SmartLabel_Container",E+=1,e.appendChild(da),da
                    }
                    function e(a,da,l){
                l.innerHTML=a;
                var g,d,t,o=l.offsetWidth;
                g=da;
                d=Math.ceil(da/w);
                if(o<da)return a.length-1;
                if(d>a.length)g=da-o,d=a.length;
                for(;g>0;)if(l.innerHTML=a.substr(0,d),g=da-l.offsetWidth,t=Math.floor(g/w))d+=t;else return d;for(d+=t;g<0;)if(l.innerHTML=a.substr(0,d),g=da-l.offsetWidth,
                    t=Math.floor(g/w))d+=t;else break;return d
                }
                function l(e,da,l){
                if(!(typeof e==="undefined"||typeof e==="object"))this.id=e,typeof da==="string"&&(da=document.getElementById(da)),this.parentContainer=da,this.container=a(da,e),this.showNoEllipses=!l,this.init=!0,this.style={}
                }
                var g={
            font:"font",
            fontFamily:"font-family",
            "font-family":"font-family",
            fontWeight:"font-weight",
            "font-weight":"font-weight",
            fontSize:"font-size",
            "font-size":"font-size",
            lineHeight:"line-height",
            "line-height":"line-height",
            textDecoration:"text-decoration",
            "text-decoration":"text-decoration",
            color:"color",
            whiteSpace:"white-space",
            "white-space":"white-space",
            padding:"padding",
            margin:"margin",
            background:"background",
            backgroundColor:"background-color",
            "background-color":"background-color",
            backgroundImage:"background-image",
            "background-image":"background-image",
            backgroundPosition:"background-position",
            "background-position":"background-position",
            backgroundPositionLeft:"background-position-left",
            "background-position-left":"background-position-left",
            backgroundPositionTop:"background-position-top",
            "background-position-top":"background-position-top",
            backgroundRepeat:"background-repeat",
            "background-repeat":"background-repeat",
            border:"border",
            borderColor:"border-color",
            "border-color":"border-color",
            borderStyle:"border-style",
            "border-style":"border-style",
            borderThickness:"border-thickness",
            "border-thickness":"border-thickness",
            borderTop:"border-top",
            "border-top":"border-top",
            borderTopColor:"border-top-color",
            "border-top-color":"border-top-color",
            borderTopStyle:"border-top-style",
            "border-top-style":"border-top-style",
            borderTopThickness:"border-top-thickness",
            "border-top-thickness":"border-top-thickness",
            borderRight:"border-right",
            "border-right":"border-right",
            borderRightColor:"border-right-color",
            "border-right-color":"border-right-color",
            borderRightStyle:"border-right-style",
            "border-right-style":"border-right-style",
            borderRightThickness:"border-right-thickness",
            "border-right-thickness":"border-right-thickness",
            borderBottom:"border-bottom",
            "border-bottom":"border-bottom",
            borderBottomColor:"border-bottom-color",
            "border-bottom-color":"border-bottom-color",
            borderBottomStyle:"border-bottom-style",
            "border-bottom-style":"border-bottom-style",
            borderBottomThickness:"border-bottom-thickness",
            "border-bottom-thickness":"border-bottom-thickness",
            borderLeft:"border-left",
            "border-left":"border-left",
            borderLeftColor:"border-left-color",
            "border-left-color":"border-left-color",
            borderLeftStyle:"border-left-style",
            "border-left-Style":"border-left-style",
            borderLeftThickness:"border-left-thickness",
            "border-left-thickness":"border-left-thickness"
        };
        Oa=function(){
            var a=document.createElement("span"),e,da={
                lineHeight:!0,
                "line-height":!0
                },l=function(){
                return y(parseInt(a.style.fontSize,10),10)*1.4+"px"
                };
                
            a.innerHTML="fy";
            e=window.getComputedStyle?function(){
                var e=window.getComputedStyle(a,null);
                return e&&e.getPropertyValue("line-height")?e.getPropertyValue("line-height"):l.apply(this,arguments)
                }:a.currentStyle?function(){
                return a.currentStyle.lineHeight
                }:l;
            return function(t){
                var o,rb="";
                for(o in t)!da[o]&&g[o]&&(rb+=g[o]+" : "+t[o]+";");d&&!aa?
                a.style.setAttribute("cssText",rb):a.setAttribute("style",rb);
                o=e();
                parseFloat(o)||(o=l());
                return t.lineHeight=o
                }
            }();
    var t={
        position:"absolute",
        width:'auto',
        top:"-9999em",
        whiteSpace:"nowrap"
    },o=0,da=/\b_SmartLabel\b/,kc=/\b_SmartLabelBR\b/,rb=/(\<[^\<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/ig,u=RegExp("<span[^>]+?_SmartLabel[^>]+?>(.*?)</span>","ig"),p=/<[^>][^<]*[^>]+>/i,x=0,z=0,w=0,C=0,E=0,Ca,R,D;
    document.getElementsByClassName?(Ca="getElementsByClassName",R="_SmartLabel",D=!0):(Ca="getElementsByTagName",R="span",
        D=!1);
    l.prototype={
        dispose:function(){
            var a=this.container,e;
            if(this.init){
                if(a&&(e=a.parentNode))e.removeChild(a),delete this.container;
                delete this.id;
                delete this.style;
                delete this.parentContainer;
                delete this.showNoEllipses
                }
            },
    useEllipsesOnOverflow:function(a){
        if(this.init)this.showNoEllipses=!a
            },
    getSmartText:function(l,g,d,t){
        if(!this.init)return!1;
        if(!this.container)this.container=a(this.parentContainer),this.setStyle();
        var Q={
            text:l,
            maxWidth:g,
            maxHeight:d,
            width:null,
            height:null,
            oriTextWidth:null,
            oriTextHeight:null,
            oriText:l,
            isTruncated:!1
            },Ra=!1,y,w,E,Ma,$=-1,B=-1,J=-1,L=this.container,xb=[],ga=this.showNoEllipses?"":"...",X=function(c){
            for(var c=c.replace(/^\s\s*/,""),f=/\s/,h=c.length;f.test(c.charAt(h-=1)););
            return c.slice(0,h+1)
            };
            
        if(L){
            L.innerHTML=l;
            Q.oriTextWidth=E=L.offsetWidth;
            Q.oriTextHeight=Ra=L.offsetHeight;
            if(Ra<=d&&E<=g)return Q.width=Q.oriTextWidth=E,Q.height=Q.oriTextHeight=Ra,Q;
            if(x>d)return Q.text="",Q.width=Q.oriTextWidth=0,Q.height=Q.oriTextHeight=0,Q;
            l=X(l).replace(/(\s+)/g,
                " ");
            Ra=p.test(l);
            i=0;
            E=this.showNoEllipses?g:g-o;
            if(Ra){
                Ma=l.replace(rb,"$2");
                l=l.replace(rb,'$1<span class="_SmartLabel">$2</span>');
                l=l.replace(/(\<br\s*\/*\>)/g,"<span class='_SmartLabel _SmartLabelBR'>$1</span>");
                L.innerHTML=l;
                for(var Ra=L[Ca](R),f,X=[],h=-1,r=-1,$=0,B=Ra.length;$<B;$+=1)if(l=Ra[$],D||da.test(l.className))if(f=l.innerHTML,f!=""){
                    if(f==" ")r=X.length;
                    else if(f=="-")h=X.length;
                    X.push({
                        spaceIdx:r,
                        dashIdx:h,
                        elem:l
                    });
                    xb.push(f)
                    }
                    delete Ra;
                i=0;
                Ra=X.length;
                z=X[0].elem.offsetWidth;
                if(z>
                    g)return Q.text="",Q.width=Q.oriTextWidth=Q.height=Q.oriTextHeight=0,Q;else z>E&&!this.showNoEllipses&&(E=g-2*C,E>z?ga="..":(E=g-C,E>z?ga=".":(E=0,ga="")));
                if(t)for(;i<Ra;i+=1)l=X[i].elem,t=l.offsetLeft+l.offsetWidth,t>E&&(w||(w=i),L.offsetWidth>g&&(y=i,i=Ra));else for(;i<Ra;i+=1)if(l=X[i].elem,$=l.offsetHeight+l.offsetTop,t=l.offsetLeft+l.offsetWidth,xb=null,t>E){
                    if(w||(w=i),t>g)B=X[i].spaceIdx,$=X[i].dashIdx,B>J?(X[B].elem.innerHTML="<br/>",J=B):$>J?(X[$].elem.innerHTML=$===i?"<br/>-":"-<br/>",
                        J=$):l.parentNode.insertBefore(xb=document.createElement("br"),l),l.offsetHeight+l.offsetTop>d?(xb?xb.parentNode.removeChild(xb):J===$?X[$].elem.innerHTML="-":X[B].elem.innerHTML=" ",y=i,i=Ra):w=null
                        }else $>d&&(y=i,i=Ra);if(y<Ra){
                    Q.isTruncated=!0;
                    w=w?w:y;
                    for(i=Ra-1;i>=w;i-=1)l=X[i].elem,l.parentNode.removeChild(l);
                    for(;i>=0;i-=1)l=X[i].elem,kc.test(l.className)?l.parentNode.removeChild(l):i=0
                        }
                        Q.text=L.innerHTML.replace(u,"$1");
                if(Q.isTruncated)Q.text+=ga,Q.text='<span title="'+Ma+'">'+Q.text+"</span>"
                    }else{
                xb=
                l.split("");
                Ra=xb.length;
                y="";
                w=[];
                L.innerHTML=xb[0];
                z=L.offsetWidth;
                if(E>z)w=l.substr(0,e(l,E,L)).split(""),i=w.length-1;
                else if(z>g)return Q.text="",Q.width=Q.oriTextWidth=Q.height=Q.oriTextHeight=0,Q;else this.showNoEllipses||(E=g-2*C,E>z?ga="..":(E=g-C,E>z?ga=".":(E=0,ga="")));
                if(t)for(;i<Ra;i+=1){
                    if(w[i]=xb[i],L.innerHTML=Ma=w.join(""),L.offsetWidth>E&&(y||(y=Ma.substr(0,Ma.length-1)),L.offsetWidth>g))return L.innerHTML=Q.text='<span title="'+Q.oriText+'">'+X(y)+ga+"</span>",Q.width=L.offsetWidth,
                        Q.height=L.offsetHeight,Q
                        }else for(;i<Ra;i+=1)if(w[i]=xb[i],L.innerHTML=Ma=w.join(""),L.offsetWidth>E&&(y||(y=Ma.substr(0,Ma.length-1)),L.offsetWidth>g))if(B=l.substr(0,w.length).lastIndexOf(" "),$=l.substr(0,w.length).lastIndexOf("-"),B>J?(w.splice(B,1,"<br/>"),J=B,t=B+1):$>J?($===w.length-1?w.splice($,1,"<br/>-"):w.splice($,1,"-<br/>"),J=$,t=$+1):(w.splice(w.length-1,1,"<br/>"+xb[i]),t=i),L.innerHTML=Ma=w.join(""),L.offsetHeight>d)return Q.text=L.innerHTML="<span title='"+Q.oriText+"'>"+X(y)+ga+
                    "</span>",Q.width=L.offsetWidth,Q.height=L.offsetHeight,Q;
                else if(y=null,$=e(l.substr(t),E,L),w.length<t+$)w=w.concat(l.substr(w.length,t+$-w.length).split("")),L.innerHTML=Ma=w.join(""),i=w.length-1;Q.text=L.innerHTML=Ma;
                Q.width=L.offsetWidth;
                Q.height=L.offsetHeight;
                return Q
                }
                Q.height=L.offsetHeight;
            Q.width=L.offsetWidth
            }else Q.error=Error("Body Tag Missing!");
        return Q
        },
    setStyle:function(a){
        if(!this.init)return!1;
        var e;
        if(a!==this.style||this.styleNotSet){
            if(a){
                if(this.style&&this.container)for(e in this.style)a[e]||
                    (this.container.style[e]="");delete this.style;
                this.style=a
                }
                if(this.container){
                a=this.container;
                e=this.style;
                for(var da in e)a.style[da]=e[da];for(da in t)a.style[da]=t[da];this.container.innerHTML="WgI";
                w=Math.ceil(this.container.offsetWidth/3);
                x=this.container.offsetHeight;
                this.container.innerHTML="...";
                o=this.container.offsetWidth;
                this.container.innerHTML=".";
                C=this.container.offsetWidth;
                this.styleNotSet=!1
                }else this.styleNotSet=!0
                }
            },
getTextSize:function(e,da,l){
    if(!this.init)return!1;
    if(!this.container)this.container=
        a(this.parentContainer),this.setStyle();
    var g={
        text:e,
        width:null,
        height:null,
        oriTextWidth:null,
        oriTextHeight:null,
        isTruncated:!1
        },d=this.container;
    if(d&&(d.innerHTML=e,g.oriTextWidth=d.offsetWidth,g.oriTextHeight=d.offsetHeight,g.width=Math.min(g.oriTextWidth,da),g.height=Math.min(g.oriTextHeight,l),g.width<g.oriTextWidth||g.height<g.oriTextHeight))g.isTruncated=!0;
    return g
    },
getOriSize:function(e){
    if(!this.init)return!1;
    if(!this.container)this.container=a(this.parentContainer),this.setStyle();
    var da=

    {
        text:e,
        width:null,
        height:null
    },l=this.container;
    if(l)l.innerHTML=e,da.width=l.offsetWidth,da.height=l.offsetHeight;
    return da
    }
};

return l.prototype.constructor=l
}(),C=function(){
    var a={
        top:{
            align:"center",
            verticalAlign:"top",
            textAlign:"center"
        },
        right:{
            align:"right",
            verticalAlign:"middle",
            textAlign:"left"
        },
        bottom:{
            align:"center",
            verticalAlign:"bottom",
            textAlign:"center"
        },
        left:{
            align:"left",
            verticalAlign:"middle",
            textAlign:"right"
        }
    },e=/([^\,^\s]+)\)$/g,l=function(a,e){
    var l;
    if(/^(bar|bar3d)$/.test(a))this.isBar=
        !0,this.yPos="bottom",this.yOppPos="top",this.xPos="left",this.xOppPos="right";
    l=parseInt(e.labelstep,10);
    this.labelStep=l>1?l:1;
    this.showLabel=y(e.showlabels,e.shownames,1);
    this.is3D=/3d$/.test(a)
    };
    
l.prototype={
    isBar:!1,
    yPos:"left",
    yOppPos:"right",
    xPos:"bottom",
    xOppPos:"top",
    addAxisGridLine:function(l,g,d,da,t,o,u,p){
        var w=d===""?!1:!0,z=da>0||o.match(e)[1]>0?!0:!1;
        if(w||z){
            z||(o="rgba(0,0,0,0)",da=0.1);
            g={
                isGrid:!0,
                width:da,
                dashStyle:t,
                color:o,
                value:g,
                zIndex:u===void 0?2:u
                };
                
            if(w)p=l.opposite?p?
                this.xOppPos:this.yOppPos:p?this.xPos:this.yPos,p=a[p],g.label={
                    text:d,
                    style:l.labels.style,
                    textAlign:p.textAlign,
                    align:p.align,
                    verticalAlign:p.verticalAlign,
                    rotation:0,
                    x:0,
                    y:0
                };
                
            l.plotLines.push(g)
            }
        },
addAxisAltGrid:function(a,e){
    if(!this.is3D){
        var l=y(a._lastValue,a.min),da=o(a._altGrid,!1);
        da&&a.plotBands.push({
            isGrid:!0,
            color:a.alternateGridColor,
            to:e,
            from:l,
            zIndex:1
        });
        a._lastValue=e;
        a._altGrid=!da
        }
    },
addXaxisCat:function(e,l,g,da){
    g%this.labelStep===0&&(g=e.opposite?this.xOppPos:this.xPos,g=a[g],
        l={
            isGrid:!0,
            width:0.1,
            color:"rgba(0,0,0,0)",
            value:l,
            label:{
                text:da,
                style:e.labels.style,
                textAlign:g.textAlign,
                align:g.align,
                verticalAlign:g.verticalAlign,
                rotation:0,
                x:0,
                y:0
            }
        },e.plotLines.push(l))
},
addVline:function(a,e,l,da){
    var g=da._FCconf,d=g.isBar,da=da.chart.plotBorderWidth,t=da%2,u=g.divlineStyle,p=Lb(e.label),w=Boolean(y(e.showlabelborder,g.showVLineLabelBorder,1)),z=Boolean(y(e.showlabelbackground,1)),x=o(e.labelhalign,d?"left":"center"),ib=o(e.labelvalign,d?"middle":"bottom").toLowerCase(),
    E=y(e.labelposition,0),C=y(e.lineposition,0.5),$=y(e.alpha,g.vLineAlpha,80),L=o(e.color,g.vLineColor,"333333").replace(/^#?/,"#"),R=o(e.labelbgcolor,g.vLineLabelBgColor,"333333").replace(/^#?/,"#"),D=L,B=y(e.thickness,g.vLineThickness,1),J=B*0.5,X=Boolean(Number(o(e.dashed,0))),jb=y(e.dashlen,5),ga=y(e.dashgap,2),Qa=g.smartLabel,Y=parseInt(u.fontSize,10)+2,aa=0,oa=y(e.rotatelabel,g.rotateVLineLabels)?270:0,C=C<0||C>1?0.5:C,E=E<0||E>1?0:E;
    Qa.setStyle(u);
    Qa=Qa.getOriSize(p);
    L=bb(L,$);
    if(d){
        switch(ib){
            case "top":
                Y-=
                Qa.height+J+2;
                break;
            case "middle":
                Y-=Qa.height*0.5+1;
                break;
            default:
                Y+=J
                }
                e.labelhalign||(aa-=Qa.width*E)
        }else{
        switch(ib){
            case "top":
                Y-=Qa.height+2+(da||1)*(1-E)+E;
                break;
            case "middle":
                Y-=Qa.height*0.5+da*(1-E*2);
                break;
            default:
                Y+=(da-t)*E
                }
                switch(x){
            case "left":
                aa+=B;
                break;
            case "right":
                aa-=B+1
                }
            }
    a.plotLines.push({
    isVline:!0,
    color:L,
    width:B,
    value:l-1+C,
    zIndex:!g.is3d&&e.showontop==="1"?5:3,
    dashStyle:X?Ta(jb,ga,B):void 0,
    label:{
        text:p,
        align:d?"left":"center",
        offsetScale:E,
        rotation:oa,
        y:Y,
        x:aa,
        textAlign:x,
        style:{
            color:D,
            fontSize:u.fontSize,
            fontFamily:u.fontFamily,
            lineHeight:u.lineHeight,
            border:w?"1px solid":void 0,
            borderColor:w?D:void 0,
            backgroundColor:z?R:void 0,
            backgroundOpacity:z?o(e.labelbgalpha,g.vLineLabelBgAlpha)/100:0
            }
        }
})
}
};

return l.prototype.constructor=l
}(),X=function(){
    function a(e,l,g){
        var d;
        if(l<=0)return String(Math.round(e));
        if(isNaN(l))return e=e.toString(),e.length>12&&e.indexOf(p)!=-1&&(l=12-e.split(p)[0].length,d=z(10,l),e=String(Math.round(e*d)/d)),e;
        d=z(10,l);
        e=String(Math.round(e*
            d)/d);
        if(g==1){
            e.indexOf(p)==-1&&(e+=".0");
            g=e.split(p);
            l-=g[1].length;
            for(g=1;g<=l;g++)e+=J
                }
                return e
        }
        function e(a,l,d,t){
        var o=Number(a);
        if(isNaN(o))return g;
        var u=g,Q=!1,w=g,z=g,x=w=0,w=0,x=a.length;
        a.indexOf(p)!=-1&&(u=a.substring(a.indexOf(p)+1,a.length),x=a.indexOf(p));
        o<0&&(Q=!0,w=1);
        w=a.substring(w,x);
        a=w.length;
        o=t.length-1;
        x=t[o];
        if(a<x)z=w;else for(;a>=x;)z=(a-x?d:g)+w.substr(a-x,x)+z,a-=x,x=(o-=1)<=0?t[0]:t[o],a<x&&(z=w.substring(a,0)+z);
        u!=g&&(z=z+l+u);
        Q==!0&&(z="-"+z);
        return z
        }
        var l=

        {
        formatnumber:"1",
        formatnumberscale:"1",
        defaultnumberscale:g,
        numberscaleunit:["K","M"],
        numberscalevalue:[1E3,1E3],
        numberprefix:g,
        numbersuffix:g,
        decimals:g,
        forcedecimals:J,
        yaxisvaluedecimals:"2",
        decimalseparator:p,
        thousandseparator:",",
        thousandseparatorposition:[3],
        indecimalseparator:g,
        inthousandseparator:g,
        sformatnumber:"1",
        sformatnumberscale:J,
        sdefaultnumberscale:g,
        snumberscaleunit:["K","M"],
        snumberscalevalue:[1E3,1E3],
        snumberprefix:g,
        snumbersuffix:g,
        sdecimals:"2",
        sforcedecimals:J,
        syaxisvaluedecimals:"2",
        xFormatNumber:J,
        xFormatNumberScale:J,
        xDefaultNumberScale:g,
        xNumberScaleUnit:["K","M"],
        xNumberScaleValue:[1E3,1E3],
        xNumberPrefix:g,
        xNumberSuffix:g
    },d={
        mscombidy2d:{
            formatnumberscale:"1"
        }
    },u=function(a,e){
    var g,t,u,w,p,z,ib,Xa,C,L,$,Ra=e.name,B=d[Ra];
    typeof B!=="object"&&(B=l);
    x(a.numberscaleunit)&&(g=a.numberscaleunit.split(","));
    if(t=x(a.snumberscaleunit,a.numberscaleunit))t=t.split(",");
    if(u=x(a.xnumberscaleunit,a.numberscaleunit))u=u.split(",");
    if(w=x(a.ticknumberscaleunit,a.numberscaleunit))w=
        w.split(",");
    if(p=x(a.ynumberscaleunit,a.numberscaleunit))p=p.split(",");
    x(a.numberscalevalue)&&(z=a.numberscalevalue.split(","));
    if($=x(a.snumberscalevalue,a.numberscalevalue))$=$.split(",");
    if(ib=x(a.xnumberscalevalue,a.numberscalevalue))ib=ib.split(",");
    if(Xa=x(a.ticknumberscalevalue,a.numberscalevalue))Xa=Xa.split(",");
    if(C=x(a.ynumberscalevalue,a.numberscalevalue))C=C.split(",");
    if(x(a.thousandseparatorposition)){
        L=a.thousandseparatorposition.split(",");
        for(var R=L.length,D,J=y(L[R]),J=J?J:l.thousandseparatorposition[0];R;)R-=
            1,(D=y(Math.abs(L[R])))?J=D:D=J,L[R]=D
            }
            e||(e={});
    R=y(a.scalerecursively,0);
    D=y(a.sscalerecursively,R);
    var J=y(a.xscalerecursively,R),X=y(a.maxscalerecursion,-1),ga=y(a.smaxscalerecursion,X),jb=y(a.xmaxscalerecursion,X),Qa=x(a.scaleseparator," "),Y=x(a.sscaleseparator,Qa),aa=x(a.xscaleseparator,Qa);
    if(!X||X==0)X=-1;
    this.paramLabels=g={
        formatnumber:o(a.formatnumber,e.formatnumber,B.formatnumber,l.formatnumber),
        formatnumberscale:o(a.formatnumberscale,e.formatnumberscale,B.formatnumberscale,l.formatnumberscale),
        defaultnumberscale:E(a.defaultnumberscale,e.defaultnumberscale,B.defaultnumberscale,l.defaultnumberscale),
        numberscaleunit:o(g,e.numberscaleunit,B.numberscaleunit,l.numberscaleunit).concat(),
        numberscalevalue:o(z,e.numberscalevalue,B.numberscalevalue,l.numberscalevalue).concat(),
        numberprefix:E(a.numberprefix,e.numberprefix,B.numberprefix,l.numberprefix),
        numbersuffix:E(a.numbersuffix,e.numbersuffix,B.numbersuffix,l.numbersuffix),
        decimalprecision:parseInt(o(a.decimals,a.decimalprecision,e.decimals,B.decimals,
            l.decimals,e.decimalprecision,B.decimalprecision,l.decimalprecision),10),
        forcedecimals:o(a.forcedecimals,e.forcedecimals,B.forcedecimals,l.forcedecimals),
        decimalseparator:o(a.decimalseparator,e.decimalseparator,B.decimalseparator,l.decimalseparator),
        thousandseparator:o(a.thousandseparator,e.thousandseparator,B.thousandseparator,l.thousandseparator),
        thousandseparatorposition:o(L,e.thousandseparatorposition,B.thousandseparatorposition,l.thousandseparatorposition),
        indecimalseparator:E(a.indecimalseparator,
            e.indecimalseparator,B.indecimalseparator,l.indecimalseparator),
        inthousandseparator:E(a.inthousandseparator,e.inthousandseparator,B.inthousandseparator,l.inthousandseparator),
        scalerecursively:R,
        maxscalerecursion:X,
        scaleseparator:Qa
    };
    
    if(!e.useScaleRecursively||(g.numberscalevalue&&g.numberscalevalue.length)!=(g.numberscaleunit&&g.numberscaleunit.length))g.scalerecursively=R=0;
    this.param1=z={
        formatnumber:g.formatnumber,
        formatnumberscale:g.formatnumberscale,
        defaultnumberscale:g.defaultnumberscale,
        numberscaleunit:g.numberscaleunit.concat(),
        numberscalevalue:g.numberscalevalue.concat(),
        numberprefix:g.numberprefix,
        numbersuffix:g.numbersuffix,
        decimalprecision:parseInt(o(a.yaxisvaluedecimals,g.decimalprecision,2)),
        forcedecimals:o(a.forceyaxisvaluedecimals,g.forcedecimals),
        decimalseparator:g.decimalseparator,
        thousandseparator:g.thousandseparator,
        thousandseparatorposition:g.thousandseparatorposition.concat(),
        indecimalseparator:g.indecimalseparator,
        inthousandseparator:g.inthousandseparator,
        scalerecursively:R,
        maxscalerecursion:X,
        scaleseparator:Qa
    };
    this.paramX={
        formatnumber:o(a.xformatnumber,g.formatnumber),
        formatnumberscale:o(a.xformatnumberscale,g.formatnumberscale),
        defaultnumberscale:E(a.xdefaultnumberscale,g.defaultnumberscale),
        numberscaleunit:o(u,g.numberscaleunit.concat()),
        numberscalevalue:o(ib,g.numberscalevalue.concat()),
        numberprefix:o(a.xnumberprefix,g.numberprefix),
        numbersuffix:o(a.xnumbersuffix,g.numbersuffix),
        decimalprecision:parseInt(o(a.xaxisvaluedecimals,a.xaxisvaluesdecimals,g.decimalprecision,2)),
        forcedecimals:o(a.forcexaxisvaluedecimals,
            0),
        decimalseparator:g.decimalseparator,
        thousandseparator:g.thousandseparator,
        thousandseparatorposition:g.thousandseparatorposition.concat(),
        indecimalseparator:g.indecimalseparator,
        inthousandseparator:g.inthousandseparator,
        scalerecursively:J,
        maxscalerecursion:jb,
        scaleseparator:aa
    };
    
    if(!e.useScaleRecursively||(this.paramX.numberscalevalue&&this.paramX.numberscalevalue.length)!=(this.paramX.numberscaleunit&&this.paramX.numberscaleunit.length))this.paramX.scalerecursively=J=0;
    this.param2={
        formatnumber:o(a.sformatnumber,
            e.sformatnumber,l.sformatnumber),
        formatnumberscale:o(a.sformatnumberscale,e.sformatnumberscale,l.sformatnumberscale),
        defaultnumberscale:E(a.sdefaultnumberscale,e.sdefaultnumberscale,g.defaultnumberscale),
        numberscaleunit:o(t,e.snumberscaleunit,l.snumberscaleunit).concat(),
        numberscalevalue:o($,e.snumberscalevalue,l.snumberscalevalue).concat(),
        numberprefix:E(a.snumberprefix,e.snumberprefix,l.snumberprefix),
        numbersuffix:E(a.snumbersuffix,e.snumbersuffix,l.snumbersuffix),
        decimalprecision:parseInt(o(a.syaxisvaluedecimals,
            a.sdecimals,e.sdecimals,l.sdecimals),10),
        forcedecimals:o(a.forcesyaxisvaluedecimals,a.sforcedecimals,e.sforcedecimals,l.sforcedecimals),
        decimalseparator:o(a.decimalseparator,e.decimalseparator,l.decimalseparator),
        thousandseparator:o(a.thousandseparator,e.thousandseparator,l.thousandseparator),
        thousandseparatorposition:g.thousandseparatorposition.concat(),
        indecimalseparator:o(a.indecimalseparator,e.indecimalseparator,l.indecimalseparator),
        inthousandseparator:o(a.inthousandseparator,e.inthousandseparator,
            l.inthousandseparator),
        scalerecursively:D,
        maxscalerecursion:ga,
        scaleseparator:Y
    };
    
    if(!e.useScaleRecursively||(this.param2.numberscalevalue&&this.param2.numberscalevalue.length)!=(this.param2.numberscaleunit&&this.param2.numberscaleunit.length))this.param2.scalerecursively=D=0;
    this.paramScale={
        formatnumber:o(a.tickformatnumber,g.formatnumber),
        formatnumberscale:o(a.tickformatnumberscale,g.formatnumberscale),
        defaultnumberscale:E(a.tickdefaultnumberscale,g.defaultnumberscale),
        numberscaleunit:o(w,g.numberscaleunit.concat()),
        numberscalevalue:o(Xa,g.numberscalevalue.concat()),
        numberprefix:o(a.ticknumberprefix,g.numberprefix),
        numbersuffix:o(a.ticknumbersuffix,g.numbersuffix),
        decimalprecision:parseInt(o(a.tickvaluedecimals,g.decimalprecision,"2")),
        forcedecimals:o(a.forcetickvaluedecimals,g.forcedecimals,0),
        decimalseparator:g.decimalseparator,
        thousandseparator:g.thousandseparator,
        thousandseparatorposition:g.thousandseparatorposition.concat(),
        indecimalseparator:g.indecimalseparator,
        inthousandseparator:g.inthousandseparator,
        scalerecursively:R,
        maxscalerecursion:X,
        scaleseparator:Qa
    };
    
    if(/^(bubble|scatter|selectscatter)$/.test(Ra))z.formatnumber=o(a.yformatnumber,z.formatnumber),z.formatnumberscale=o(a.yformatnumberscale,z.formatnumberscale),z.defaultnumberscale=E(a.ydefaultnumberscale,z.defaultnumberscale),z.numberscaleunit=o(p,z.numberscaleunit),z.numberscalevalue=o(C,z.numberscalevalue),z.numberprefix=o(a.ynumberprefix,z.numberprefix),z.numbersuffix=o(a.ynumbersuffix,z.numbersuffix),g.formatnumber=o(a.yformatnumber,g.formatnumber),
        g.formatnumberscale=o(a.yformatnumberscale,g.formatnumberscale),g.defaultnumberscale=E(a.ydefaultnumberscale,g.defaultnumberscale),g.numberscaleunit=o(a.ynumberscaleunit,g.numberscaleunit.concat()),g.numberscalevalue=o(a.ynumberscalevalue,g.numberscalevalue.concat()),g.numberprefix=o(a.ynumberprefix,g.numberprefix),g.numbersuffix=o(a.ynumbersuffix,g.numbersuffix);
    if(/^(mscombidy2d|mscombidy3d)$/.test(Ra))this.param2.formatnumberscale=y(a.sformatnumberscale,"1");
    if(/^(pie2d|pie3d|doughnut2d|doughnut3d|marimekko|pareto2d|pareto3d)$/.test(Ra))g.decimalprecision=
        o(a.decimals,"2");
    R&&(g.numberscalevalue.push(1),g.numberscaleunit.unshift(this.paramLabels.defaultnumberscale),this.param1.numberscalevalue.push(1),this.param1.numberscaleunit.unshift(this.param1.defaultnumberscale),this.paramScale.numberscalevalue.push(1),this.paramScale.numberscaleunit.unshift(this.paramScale.defaultnumberscale));
    D&&(this.param2.numberscalevalue.push(1),this.param2.numberscaleunit.unshift(this.param2.defaultnumberscale));
    J&&(this.paramX.numberscalevalue.push(1),this.paramX.numberscaleunit.unshift(this.paramX.defaultnumberscale))
    };
u.prototype={
    percentValue:function(g){
        var l=isNaN(this.paramLabels.decimalprecision)?"2":this.paramLabels.decimalprecision;
        return e(a(g,l,this.paramLabels.forcedecimals),this.paramLabels.decimalseparator,this.paramLabels.thousandseparator,this.paramLabels.thousandseparatorposition)+"%"
        },
    getCleanValue:function(a,e){
        var l=a,d=this.paramLabels.indecimalseparator,o=this.paramLabels.inthousandseparator;
        l+=g;
        x(o)&&(o=o.replace(/(\W)/ig,"\\$1"),l=l.toString().replace(RegExp(o,"g"),g));
        x(d)&&(l=l.replace(d,
            p));
        a=!isNaN(l=parseFloat(l))&&isFinite(l)?l:NaN;
        return isNaN(a)?null:e?t(a):a
        },
    dataLabels:function(a,e){
        return w(a,e?this.param2:this.paramLabels)
        },
    yAxis:function(a){
        return w(a,this.param1)
        },
    xAxis:function(a){
        return w(a,this.paramX)
        },
    sYAxis:function(a){
        return w(a,this.param2)
        },
    scale:function(a){
        return w(a,this.paramScale)
        }
    };

u.prototype.constructor=u;
var w=function(l,d){
    if(l!==null){
        var l=Number(l),t=l+g,u;
        u=d.formatnumberscale==1?d.defaultnumberscale:g;
        var w;
        w=(w=t.split(".")[1])?w.length:d.forcedecimals?
        "2":g;
        if(d.formatnumberscale==1){
            var z,t=l;
            u=d.numberscalevalue;
            z=d.numberscaleunit;
            var p={},Q=d.defaultnumberscale,x=0,Xa,E=[],C=[];
            if(d.scalerecursively){
                for(x=0;x<u.length;x++)if(Xa=y(u[x])||1E3,Math.abs(Number(t))>=Xa&&x<u.length-1)Q=t%Xa,t=(t-Q)/Xa,Q!=0&&(E.push(Q),C.push(z[x]));
                    else{
                    E.push(t);
                    C.push(z[x]);
                    break
                }
                E.reverse();
                C.reverse();
                p.value=E;
                p.scale=C
                }else{
                if(u.length===z.length)for(x=0;x<u.length;x++)if((Xa=y(u[x])||1E3)&&Math.abs(Number(t))>=Xa)Q=z[x]||g,t=Number(t)/Xa;else break;p.value=
                t;
                p.scale=Q
                }
                z=p;
            l=t=z.value;
            u=z.scale
            }
            if(d.scalerecursively&&d.formatnumberscale!=0){
            u=z.value;
            z=z.scale;
            p=d.maxscalerecursion==-1?u.length:Math.min(u.length,d.maxscalerecursion);
            if(d.formatnumber==1){
                t="";
                for(E=0;E<p;E++)x=E==0?u[E]:Math.abs(u[E]),Xa=String(x),E==p-1&&(Xa=a(x,o(d.decimalprecision,w),d.forcedecimals)),t=t+e(Xa,d.decimalseparator,d.thousandseparator,d.thousandseparatorposition)+z[E]+(E<p-1?d.scaleseparator:"")
                    }else{
                t="";
                for(E=0;E<p;E++)t=t+String(E==0?u[E]:Math.abs(u[E]))+z[E]+(E<
                    p-1?d.scaleseparator:"")
                }
                t=(d.numberprefix||g)+t+(d.numbersuffix||g);
            delete u;
            delete z
            }else d.formatnumber==1&&(t=a(l,o(d.decimalprecision,w),d.forcedecimals),t=e(t,d.decimalseparator,d.thousandseparator,d.thousandseparatorposition)),t=(d.numberprefix||g)+t+u+(d.numbersuffix||g);
        return t
        }
    };

return u
}(),oa=function(){
    var a=function(a,g,d,t,o){
        a=Math.abs(g-a);
        g=a/(d+1);
        e(a/(d+1))>e(t)&&(o&&Number(g)/Number(t)<(t>1?2:0.5)&&(t/=10),g=(Math.floor(g/t)+1)*t,a=g*(d+1));
        return a
        },e=function(a){
        var a=Math.abs(a),
        a=String(a),e=0,g=a.indexOf(p);
        g!=-1&&(e=a.length-g-1);
        return e
        };
        
    return function(l,d,t,o,u,z,p,w){
        var x,l=isNaN(l)==!0||l==void 0?0.1:l,d=isNaN(d)==!0||d==void 0?0:d;
        l==d&&l==0&&(l=0.1);
        var z=typeof z===void 0?!0:z,E=Math.max(Math.floor(Math.log(Math.abs(d))/Math.LN10),Math.floor(Math.log(Math.abs(l))/Math.LN10));
        x=Math.pow(10,E);
        Math.abs(l)/x<2&&Math.abs(d)/x<2&&(E--,x=Math.pow(10,E));
        E=Math.pow(10,Math.floor(Math.log(l-d)/Math.LN10));
        l-d>0&&x/E>=10&&(x=E);
        var E=(Math.floor(l/x)+1)*x,y;
        d<0?y=-1*
        (Math.floor(Math.abs(d/x))+1)*x:z?y=0:(y=Math.floor(Math.abs(d/x)-1)*x,y=y<0?0:y);
        (typeof u===void 0||u)&&l<=0&&(E=0);
        u=t==null||t==void 0||t==g?!1:!0;
        z=o==null||o==void 0||o==g||isNaN(Number(o))?!1:!0;
        l=u==!1||u==!0&&Number(t)<l?E:Number(t);
        d=z==!1||z==!0&&Number(o)>d?y:Number(o);
        o=Math.abs(l-d);
        if(z==!1&&u==!1&&w==!0)if(l>0&&d<0)for(var w=!1,t=x>10?x/10:x,u=a(d,l,p,t,!1)-(p+1)*t,C,L,$,B;w==!1;){
            if(u+=(p+1)*t,!(e(u/(p+1))>e(t)))if(C=u-o,z=u/(p+1),y=Math.min(Math.abs(d),l),E=y==Math.abs(d)?-1:1,p==
                0)w=!0;else for(B=1;B<=Math.floor((p+1)/2);B++)L=z*B,!(L-y>C)&&L>y&&($=u-L,$/z==Math.floor($/z)&&L/z==Math.floor(L/z)&&(o=u,l=E==-1?$:L,d=E==-1?-L:-$,w=!0))
                }else w=a(d,l,p,x,!0),C=w-o,o=w,l>0?l+=C:d-=C;
        else if(w==!0&&p>0){
            w=0;
            for(t=1;;){
                C=p+w*t;
                C=C==0?1:C;
                if(!(e(o/(C+1))>e(x)))break;
                w=t==-1||w>p?++w:w;
                if(w>25){
                    C=0;
                    break
                }
                t=w<=p?t*-1:1
                }
                p=C
            }
            return{
            Max:l,
            Min:d,
            Range:o,
            interval:x,
            divGap:(l-d)/(p+1)
            }
        }
}(),Sa=function(){
    var a=function(a,e){
        this.title.y=a.offsetHeight/2;
        if(e!==void 0)this.title.text=e
            };
            
    a.prototype=

    {
        chart:{
            events:{},
            margin:[0,0,0,0]
            },
        credits:{
            href:"http://www.codeanalytic.com",
            text:"",
            enabled:0
        },
        legend:{
            enabled:!1
            },
        title:{
            text:"Chart Placeholder",
            style:{
                fontFamily:"Verdana",
                fontSize:"10px",
                color:"#666666"
            }
        },
    plotOptions:{
        series:{}
},
series:[],
exporting:{
    enabled:!1
    }
};

return a.prototype.constructor=a
}(),pb={
    "true":{
        "true":"bottom",
        "false":"top"
    },
    "false":{
        "true":"top",
        "false":"bottom"
    }
},db=function(){
    var e=/^s$/i,d=function(){
        return{
            x:this.category,
            y:this.y,
            series:this.series,
            point:this,
            percentage:this.percentage,
            total:this.total||this.stackTotal
            }
        },l=function(a){
    var e;
    e={
        series:{},
        chart:this.chart,
        id:this.id,
        label:this.label,
        options:this.options,
        svgElm:this.svgElm,
        toolText:a,
        getLabelConfig:d,
        tooltipPos:[]
    };
    
    return{
        mouseover:function(a){
            var g=this.chart.plotTop;
            e.tooltipPos[0]=(a.layerX||a.x||a.offsetX||a.originalEvent&&a.originalEvent.layerX)-this.chart.plotLeft+20;
            e.tooltipPos[1]=(a.layerY||a.y||a.offsetY||a.originalEvent&&a.originalEvent.layerY)-g-15;
            this.chart.tooltip.refresh(e)
            },
        mousemove:function(a){
            var g=this.chart.plotTop;
            e.tooltipPos[0]=(a.layerX||a.x||a.offsetX||a.originalEvent&&a.originalEvent.layerX)-this.chart.plotLeft+20;
            e.tooltipPos[1]=(a.layerY||a.y||a.offsetY||a.originalEvent&&a.originalEvent.layerY)-g-15;
            this.chart.tooltip.refresh(e)
            },
        mouseout:function(){
            this.chart.tooltip.hide()
            }
        }
};

return function(d,t,u,z,p,w){
    var x,E=u.trendStyle,C,L,$,B,R,D,X,ga,S,Qa,jb,Y,aa,na=parseInt(E.fontSize,10)/2+2;
    if(u.showTrendlines!=J){
        x=0;
        for(L=d.length;x<L;x+=1)if(d[x].line){
            C=
            0;
            for($=d[x].line.length;C<$;C+=1)if(B=d[x].line[C],aa=B.allowdrag=="1",jb=y(B.startvalue,B.value,0),Y=y(B.endvalue,jb),S=w?t:z&&B.parentyaxis&&e.test(B.parentyaxis)?t[1]:t[0],D=S.max,R=S.min,D>=jb&&D>=Y&&R<=jb&&R<=Y){
                R=B.parentyaxis&&e.test(B.parentyaxis)?o(B.valueonleft,u.trendlineValuesOnOpp)!=="1":o(B.valueonright,u.trendlineValuesOnOpp)==="1";
                D=Boolean(y(B.istrendzone,w?1:0));
                if(X=u.showTrendlinesLabels?Lb(o(B.displayvalue,u.numberFormatter[w?"xAxis":"dataLabels"](jb))):g){
                    if(R={
                        text:X,
                        textAlign:p?
                        "center":R?"left":"right",
                        align:p?D?"center":jb<Y?"right":"left":R?"right":"left",
                        verticalAlign:p?"bottom":D?"middle":pb[jb>Y][R],
                        rotation:0,
                        x:0,
                        y:p?na:2,
                        style:Wb(E)
                        },X=o(B.color,u.trendlineColor),B.alwaysVisible=D,X)R.style.color=X.replace(a,"#")
                        }else R=void 0;
                ga=o(B.tooltext);
                X=ga!==void 0?l(ga):{};
                
                if(aa)X.drag=function(){};
                    
                Qa=y(B.thickness,u.trendlineThickness,1);
                D?S.plotBands.push({
                    isTrend:!0,
                    color:bb(o(B.color,u.trendlineColor),o(B.alpha,u.trendlineAlpha,40)),
                    from:jb,
                    to:Y,
                    label:R,
                    zIndex:!u.is3d&&
                    o(B.showontop,u.showTrendlinesOnTop)==="1"?5:3,
                    events:X,
                    tooltext:ga,
                    alwaysVisible:B.alwaysVisible,
                    dragable:aa
                }):S.plotLines.push({
                    isTrend:!0,
                    color:bb(o(B.color,u.trendlineColor,u.trendlineColor),o(B.alpha,u.trendlineAlpha,99)),
                    value:jb,
                    to:Y,
                    width:Qa,
                    dashStyle:o(B.dashed,u.trendlinesAreDashed)=="1"?Ta(y(B.dashlen,u.trendlinesDashLen),y(B.dashgap,u.trendlinesDashGap),Qa):void 0,
                    label:R,
                    zIndex:!u.is3d&&o(B.showontop,u.showTrendlinesOnTop)==="1"?5:3,
                    events:X,
                    tooltext:ga,
                    dragable:aa
                })
                }
            }
        }
}
}(),Ta=function(a,
    e,g,d){
    if(d||d===void 0)return g=g?g:1,y(a,5)/g+","+y(e,3)/g
        },nb=function(){},yb=function(a,e,g){
    var d,t=yb[a];
    if(!t)t=function(){},t.prototype=g instanceof nb?g:new nb,t.prototype.constructor=t,t=yb[a]=new t;
    if(g)t.base=g;
    t.name=a;
    for(d in e)switch(typeof e[d]){
        case "object":
            if(e[d]instanceof nb){
            t[d]=e[d][d];
            break
        }
        default:
            t[d]=e[d];
            break;
        case "undefined":
            delete t[d]
    }
    return this instanceof yb?(a=function(){},a.prototype=t,a.prototype.constructor=a,new a):t
    };
    
D.extend(D.hcLib,{
    BLANKSTRINGPLACEHOLDER:"#BLANK#",
    BLANKSTRING:g,
    COLOR_BLACK:"000000",
    COLOR_WHITE:"FFFFFF",
    COLOR_TRANSPARENT:"rgba(0,0,0,0)",
    HASHSTRING:"#",
    BREAKSTRING:"<br />",
    STRINGSTRING:"string",
    OBJECTSTRING:"object",
    COMMASTRING:",",
    ZEROSTRING:J,
    SAMPLESTRING:"Ay0",
    TESTSTR:"Ag",
    ONESTRING:"1",
    DECIMALSTRING:p,
    STRINGUNDEFINED:"undefined",
    POSITION_TOP:"top",
    POSITION_RIGHT:"right",
    POSITION_BOTTOM:"bottom",
    POSITION_LEFT:"left",
    POSITION_CENTER:"center",
    POSITION_MIDDLE:"middle",
    FC_CONFIG_STRING:"_FCconf",
    HUNDREDSTRING:"100",
    PXSTRING:"px",
    COMMASPACE:", ",
    regex:{
        stripWhitespace:B,
        dropHash:a,
        startsRGBA:e,
        cleanColorCode:u,
        breakPlaceholder:w,
        hexcode:/^#?[0-9a-f]{6}/i
    },
    extend2:Wb,
    pluck:o,
    pluckNumber:y,
    getFirstDefinedValue:function(){
        var a,e,d;
        e=0;
        for(d=arguments.length;e<d;e+=1)if((a=arguments[e])||!(a!==!1&&a!==0&&a!=g))return a
            },
    pluckFontSize:function(){
        var a,e,g;
        e=0;
        for(g=arguments.length;e<g;e+=1)if((a=arguments[e])||!(a!==!1&&a!==0))if(!isNaN(a=Number(a)))return a<1?1:a;return 1
        },
    getValidValue:x,
    getDefinedColor:function(a,e){
        return!a&&a!=0&&a!=!1?
        e:a
        },
    getFirstValue:E,
    getFirstColor:function(e){
        e=e.split(",")[0];
        e=e.replace(B,g);
        e==g&&(e="000000");
        return e.replace(a,"#")
        },
    getColorCodeString:function(a,e){
        var g="",d,t,u=0,o=e.split(",");
        for(t=o.length;u<t;u+=1)d=o[u].split("-"),g+=d.length===2?d[0].indexOf("dark")!=="-1"?Ua(a,100-parseInt(d[1],10))+",":Y(a,100-parseInt(d[1],10))+",":o[u]+",";
        return g.substring(0,g.length-1)
        },
    pluckColor:function(e){
        if(x(e))return e=e.split(",")[0],e=e.replace(B,g),e==g&&(e="000000"),e.replace(a,"#")
            },
    getFirstAlpha:function(a){
        a=
        parseInt(a,10);
        if(isNaN(a)||a>100||a<0)a=100;
        return a
        },
    parsePointValue:R,
    parseUnsafeString:Lb,
    toPrecision:function(a,e){
        var g=z(10,e);
        return Math.round(a*g)/g
        },
    stubFN:function(){},
    falseFN:function(){
        return!1
        },
    hasSVG:aa,
    isIE:d,
    getLinkAction:function(a,e){
        return function(){
            var d,t,u,z,p;
            z=window;
            p=E(this.link,g);
            p=o(p,this.options&&this.options.chart&&this.options.chart.link||g,this.series&&this.series.chart&&this.series.chart.options&&this.series.chart.options.chart&&this.series.chart.options.chart.link||
                g);
            if(p!==void 0)switch(p=z.decodeURIComponent(p).replace(/^\s+/,g).replace(/\s+$/,g),p.search(/^[a-z]*\s*[\-\:]\s*/i)!==-1&&(d=p.split(/\s*[\-\:]\s*/)[0].toUpperCase()),d){
                case "J":
                    p=p.replace(/^j\s*\-/i,"j-");
                    d=p.indexOf("-",2);
                    if(d===-1)try{
                    eval(p.slice(2))
                    }catch(w){}else try{
                    z[p.substr(2,d-2).replace(/\s/g,g)](p.slice(d+1))
                    }catch(x){}
                    break;
                case "JAVASCRIPT":
                    p=p.replace(/^JAVASCRIPT\s*\:/i,"javascript:");
                    try{
                    eval(p.slice(11))
                    }catch(B){}
                    break;
                case "N":
                    p.replace(/^n\s*\-/i,"n-");
                    z.open(p.slice(2));
                    break;
                case "F":
                    p=p.replace(/^f\s*\-/i,"f-");
                    d=p.indexOf("-",2);
                    d!==-1?(t=p.substr(2,d-2))&&z.frames[t]?z.frames[t].location=p.slice(d+1):z.open(p.slice(d+1),t):z.open(p.slice(2));
                    break;
                case "P":
                    p=p.replace(/p\s*\-/i,"p-");
                    d=p.indexOf("-",2);
                    t=p.indexOf(",",2);
                    d===-1&&(d=1);
                    u=p.slice(d+1);
                    z.open(u,p.substr(2,t-2),p.substr(t+1,d-t-1)).focus();
                    break;
                case "NEWCHART":
                    d=p.indexOf("-",9);
                    z=p.substring(9,d).toUpperCase();
                    if(z=="XMLURL")t=p.substring(d+1,p.length);
                    else if(z=="JSONURL")t=p.substring(d+1,p.length);
                    else if(z=="XML"||z=="JSON"){
                        p=p.substring(d+1,p.length);
                        z={
                            chart:{}
                    };
                    
                    FcJSON=a;
                    p=p.toLowerCase();
                    if(FcJSON.linkeddata)for(d=0;d<FcJSON.linkeddata.length;d+=1)if(FcJSON.linkeddata[d].id.toLowerCase()===p)z=FcJSON.linkeddata[d].linkedchart;t=z;
                    z="JSON"
                    }
                    D.raiseEvent("LinkedChartInvoked",{
                    linkType:z,
                    data:t
                },e);
                break;
            default:
                z.location.href=p
                }
            }
    },
graphics:{
    parseAlpha:ga,
    convertColor:bb,
    getDarkColor:Y,
    getLightColor:Ua,
    mapSymbolName:function(a){
        var e=$a.circle,a=R(a);
        a>=3&&(e=$a.poly+a);
        return e
        },
    getColumnColor:function(a,
        e,g,d,t,p,u,o,z){
        var w,x;
        w=a.split(",");
        x=e.split(",");
        p=p.split(",");
        u=u.split(",");
        z?o={
            FCcolor:{
                color:w[0],
                alpha:x[0]
                }
            }:t?(a=w[0],x=x[0],o={
        FCcolor:{
            color:Y(a,75)+","+Ua(a,25)+","+Y(a,80)+","+Ua(a,65)+","+Y(a,80),
            alpha:x+","+x+","+x+","+x+","+x,
            ratio:"0,10,13,57,20",
            angle:o?"-180":"0"
            }
        },p=[Y(a,70)]):(e=ga(e,w.length),o={
    FCcolor:{
        color:a,
        alpha:e,
        ratio:g,
        angle:o?180-d:d
        }
    });
return[o,{
    FCcolor:{
        color:p[0],
        alpha:u[0]
        }
    }]
},
getAngle:function(a,e,g){
    a=Math.atan(e/a)*180/Math.PI;
    g==2?a=180-a:g==3?a+=180:
    g==4&&(a=360-a);
    return a
    },
parseColor:function(e){
    return e.replace(u,g).replace(a,"#")
    }
},
setImageDisplayMode:function(a,e,g,d,t,p,u,o){
    var z=o.width*(d/100),d=o.height*(d/100),o={},w,x=p-t*2;
    w=u-t*2;
    var E=function(a,e,g,d,o,p){
        var l={};
        
        switch(a){
            case "top":
                l.y=t;
                break;
            case "bottom":
                l.y=p-d-t;
                break;
            case "middle":
                l.y=(p-d)/2
                }
                switch(e){
            case "left":
                l.x=t;
                break;
            case "right":
                l.x=o-g-t;
                break;
            case "middle":
                l.x=(o-g)/2
                }
                return l
        };
        
    switch(a){
        case "center":
            o.width=z;
            o.height=d;
            o.y=u/2-d/2;
            o.x=p/2-z/2;
            break;
        case "stretch":
            o.width=
            p-t*2;
            o.height=u-t*2;
            o.y=t;
            o.x=t;
            break;
        case "tile":
            o.width=z;
            o.height=d;
            o.tileInfo={};
            
            o.tileInfo.xCount=a=Math.ceil(x/z);
            o.tileInfo.yCount=w=Math.ceil(w/d);
            alignObj=E(e,g,z*a,d*w,p,u);
            o.y=alignObj.y;
            o.x=alignObj.x;
            break;
        case "fit":
            a=z/d>x/w?x/z:w/d;
            o.width=z*a;
            o.height=d*a;
            alignObj=E(e,g,o.width,o.height,p,u);
            o.y=alignObj.y;
            o.x=alignObj.x;
            break;
        case "fill":
            a=z/d>x/w?w/d:x/z;
            o.width=z*a;
            o.height=d*a;
            alignObj=E(e,g,o.width,o.height,p,u);
            o.y=alignObj.y;
            o.x=alignObj.x;
            break;
        default:
            alignObj=E(e,g,z,d,
            p,u),o.width=z,o.height=d,o.y=alignObj.y,o.x=alignObj.x
        }
        return o
    },
SmartLabelManager:L,
setLineHeight:Oa,
NumberFormatter:X,
getAxisLimits:oa,
createTrendLine:db,
getDashStyle:Ta,
axisLabelAdder:C,
chartAPI:yb,
createDialog:Sa,
defaultPaletteOptions:{
    bgColor:["CBCBCB,E9E9E9","CFD4BE,F3F5DD","C5DADD,EDFBFE","A86402,FDC16D","FF7CA0,FFD1DD"],
    bgAngle:[270,270,270,270,270],
    bgRatio:["0,100","0,100","0,100","0,100","0,100"],
    bgAlpha:["50,50","60,50","40,20","20,10","30,30"],
    canvasBgColor:["FFFFFF","FFFFFF","FFFFFF",
    "FFFFFF","FFFFFF"],
    canvasBgAngle:[0,0,0,0,0],
    canvasBgAlpha:["100","100","100","100","100"],
    canvasBgRatio:[g,g,g,g,g],
    canvasBorderColor:["545454","545454","415D6F","845001","68001B"],
    canvasBorderAlpha:[100,100,100,90,100],
    showShadow:[0,1,1,1,1],
    divLineColor:["717170","7B7D6D","92CDD6","965B01","68001B"],
    divLineAlpha:[40,45,65,40,30],
    altHGridColor:["EEEEEE","D8DCC5","99C4CD","DEC49C","FEC1D0"],
    altHGridAlpha:[50,35,10,20,15],
    altVGridColor:["767575","D8DCC5","99C4CD","DEC49C","FEC1D0"],
    altVGridAlpha:[10,
    20,10,15,10],
    anchorBgColor:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],
    toolTipBgColor:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],
    toolTipBorderColor:["545454","545454","415D6F","845001","68001B"],
    baseFontColor:["555555","60634E","025B6A","A15E01","68001B"],
    borderColor:["767575","545454","415D6F","845001","68001B"],
    borderAlpha:[50,50,50,50,50],
    legendBgColor:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],
    legendBorderColor:["545454","545454","415D6F","845001","D55979"],
    plotGradientColor:["FFFFFF",
    "FFFFFF","FFFFFF","FFFFFF","FFFFFF"],
    plotBorderColor:["333333","8A8A8A","FFFFFF","FFFFFF","FFFFFF"],
    plotFillColor:["767575","D8DCC5","99C4CD","DEC49C","FEC1D0"],
    bgColor3D:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],
    bgAlpha3D:["100","100","100","100","100"],
    bgAngle3D:[90,90,90,90,90],
    bgRatio3D:[g,g,g,g,g],
    canvasBgColor3D:["DDE3D5","D8D8D7","EEDFCA","CFD2D8","FEE8E0"],
    canvasBaseColor3D:["ACBB99","BCBCBD","C8A06C","96A4AF","FAC7BC"],
    divLineColor3D:["ACBB99","A4A4A4","BE9B6B","7C8995","D49B8B"],
    divLineAlpha3D:[100,
    100,100,100,100],
    legendBgColor3D:["F0F3ED","F3F3F3","F7F0E8","EEF0F2","FEF8F5"],
    legendBorderColor3D:["C6CFB8","C8C8C8","DFC29C","CFD5DA","FAD1C7"],
    toolTipbgColor3D:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],
    toolTipBorderColor3D:["49563A","666666","49351D","576373","681C09"],
    baseFontColor3D:["49563A","4A4A4A","49351D","48505A","681C09"],
    anchorBgColor3D:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"]
    }
})
}
})();
(function(D){
    D.fn.drag=function(a,g,d){
        var t=typeof a=="string"?a:"",p=D.isFunction(a)?a:D.isFunction(g)?g:null;
        t.indexOf("drag")!==0&&(t="drag"+t);
        d=(a==p?g:d)||{};
        
        return p?this.bind(t,d,p):this.trigger(t)
        };
        
    var g=D.event,J="ontouchstart"in document.documentElement,p=J?"touchstart":"mousedown",aa=J?"touchmove touchend":"mousemove mouseup",d=function(a,g){
        if(!g.touchXY||!a.originalEvent)return a;
        var d=a.originalEvent.changedTouches||a.originalEvent.touches;
        d&&d.length&&D.extend(a,d[0]);
        return a
        },B=
    g.special,a=B.drag={
        defaults:{
            which:1,
            distance:0,
            not:":input",
            handle:null,
            relative:!1,
            drop:!1,
            click:!1,
            touchXY:!0
            },
        datakey:"dragdata",
        livekey:"livedrag",
        add:function(e){
            var d=D.data(this,a.datakey),p=e.data||{};
            
            d.related+=1;
            if(!d.live&&e.selector)d.live=!0,g.add(this,"draginit."+a.livekey,a.delegate);
            D.each(a.defaults,function(a){
                p[a]!==void 0&&(d[a]=p[a])
                })
            },
        remove:function(){
            D.data(this,a.datakey).related-=1
            },
        setup:function(){
            if(!D.data(this,a.datakey)){
                var e=D.extend({
                    related:0
                },a.defaults);
                D.data(this,
                    a.datakey,e);
                g.add(this,p,a.init,e);
                this.attachEvent&&this.attachEvent("ondragstart",a.dontstart)
                }
            },
    teardown:function(){
        D.data(this,a.datakey).related||(D.removeData(this,a.datakey),g.remove(this,p,a.init),g.remove(this,"draginit",a.delegate),a.textselect(!0),this.detachEvent&&this.detachEvent("ondragstart",a.dontstart))
        },
    init:function(e){
        var d=e.data,p;
        if((p=e.originalEvent?e.originalEvent.changedTouches||e.originalEvent.touches:[])&&p.length){
            if(p.length>1)return
        }else if(d.which>0&&e.which!=d.which)return;
        if(!D(e.target).is(d.not)&&(!d.handle||D(e.target).closest(d.handle,e.currentTarget).length))if(d.propagates=1,d.interactions=[a.interaction(this,d)],d.target=e.target,d.pageX=e.pageX,d.pageY=e.pageY,d.dragging=null,p=a.hijack(e,"draginit",d),d.propagates){
            if((p=a.flatten(p))&&p.length)d.interactions=[],D.each(p,function(){
                d.interactions.push(a.interaction(this,d))
                });
            d.propagates=d.interactions.length;
            d.drop!==!1&&B.drop&&B.drop.handler(e,d);
            a.textselect(!1);
            g.add(document,aa,a.handler,d);
            if(!J)return!1
                }
            },
interaction:function(e,d){
    return{
        drag:e,
        callback:new a.callback,
        droppable:[],
        offset:D(e)[d.relative?"position":"offset"]()||{
            top:0,
            left:0
        }
    }
},
handler:function(e){
    var p=e.data;
    if(!p.dragging&&(e.type==="mousemove"||e.type==="touchmove")){
        if(Math.pow(e.pageX-p.pageX,2)+Math.pow(e.pageY-p.pageY,2)<Math.pow(p.distance,2))return;
        e.target=p.target;
        a.hijack(e,"dragstart",p);
        if(p.propagates)p.dragging=!0
            }
            switch(e.type){
        case "touchmove":
            p.dragging&&(e.preventDefault(),d(e,p));
        case "mousemove":
            if(p.dragging){
            a.hijack(e,
                "drag",p);
            if(p.propagates){
                p.drop!==!1&&B.drop&&B.drop.handler(e,p);
                break
            }
            e.type="mouseup"
            }
            case "mouseup":case "touchend":
            if(g.remove(document,aa,a.handler),p.dragging&&(p.drop!==!1&&B.drop&&B.drop.handler(e,p),a.hijack(e,"dragend",p)),a.textselect(!0),p.click===!1&&p.dragging)jQuery.event.triggered=!0,setTimeout(function(){
            jQuery.event.triggered=!1
            },20),p.dragging=!1
        }
        },
delegate:function(e){
    var d=[],p,t=D.data(this,"events")||{};
    
    D.each(t.live||[],function(t,B){
        if(B.preType.indexOf("drag")===0&&(p=
            D(e.target).closest(B.selector,e.currentTarget)[0]))g.add(p,B.origType+"."+a.livekey,B.origHandler,B.data),D.inArray(p,d)<0&&d.push(p)
            });
    if(!d.length)return!1;
    return D(d).bind("dragend."+a.livekey,function(){
        g.remove(this,"."+a.livekey)
        })
    },
hijack:function(e,d,p,t,z){
    if(p){
        var B={
            event:e.originalEvent,
            type:e.type
            },x=d.indexOf("drop")?"drag":"drop",E,o=t||0,y,R,t=!isNaN(t)?t:p.interactions.length;
        e.type=d;
        e.sourceEvent=B.event;
        e.originalEvent=null;
        p.results=[];
        do if((y=p.interactions[o])&&!(d!=="dragend"&&
            y.cancelled)){
            R=a.properties(e,p,y);
            y.results=[];
            D(z||y[x]||p.droppable).each(function(t,o){
                E=(R.target=o)?g.handle.call(o,e,R):null;
                if(E===!1){
                    if(x=="drag")y.cancelled=!0,p.propagates-=1;
                    d=="drop"&&(y[x][t]=null)
                    }else d=="dropinit"&&y.droppable.push(a.element(E)||o);
                if(d=="dragstart")y.proxy=D(a.element(E)||y.drag)[0];
                y.results.push(E);
                delete e.result;
                if(d!=="dropinit")return E
                    });
            p.results[o]=a.flatten(y.results);
            if(d=="dropinit")y.droppable=a.flatten(y.droppable);
            d=="dragstart"&&!y.cancelled&&R.update()
            }while(++o<
            t);
        e.type=B.type;
        e.originalEvent=B.event;
        return a.flatten(p.results)
        }
    },
properties:function(e,d,g){
    var t=g.callback;
    t.drag=g.drag;
    t.proxy=g.proxy||g.drag;
    t.startX=d.pageX;
    t.startY=d.pageY;
    t.deltaX=e.pageX-d.pageX;
    t.deltaY=e.pageY-d.pageY;
    t.originalX=g.offset.left;
    t.originalY=g.offset.top;
    t.offsetX=e.pageX-(d.pageX-t.originalX);
    t.offsetY=e.pageY-(d.pageY-t.originalY);
    t.drop=a.flatten((g.drop||[]).slice());
    t.available=a.flatten((g.droppable||[]).slice());
    return t
    },
element:function(a){
    if(a&&(a.jquery||
        a.nodeType==1))return a
        },
flatten:function(e){
    return D.map(e,function(e){
        return e&&e.jquery?D.makeArray(e):e&&e.length?a.flatten(e):e
        })
    },
textselect:function(e){
    D(document)[e?"unbind":"bind"]("selectstart",a.dontstart).attr("unselectable",e?"off":"on").css("MozUserSelect",e?"":"none")
    },
dontstart:function(){
    return!1
    },
callback:function(){}
};

a.callback.prototype={
    update:function(){
        B.drop&&this.available.length&&D.each(this.available,function(a){
            B.drop.locate(this,a)
            })
        }
    };

B.draginit=B.dragstart=B.dragend=
a
})(jQuery);
(function(D){
    function g(g){
        var J=g||window.event,d=[].slice.call(arguments,1),B=0,a=0,e=0,g=D.event.fix(J);
        g.type="wheelchange";
        g.wheelDelta&&(B=g.wheelDelta/120);
        g.detail&&(B=-g.detail/3);
        e=B;
        J.axis!==void 0&&J.axis===J.HORIZONTAL_AXIS&&(e=0,a=-1*B);
        J.wheelDeltaY!==void 0&&(e=J.wheelDeltaY/120);
        J.wheelDeltaX!==void 0&&(a=-1*J.wheelDeltaX/120);
        d.unshift(g,B,a,e);
        return D.event.handle.apply(this,d)
        }
        var J=["DOMMouseScroll","mousewheel"];
    D.event.special.wheelchange={
        setup:function(){
            if(this.addEventListener)for(var p=J.length;p;)this.addEventListener(J[--p],
                g,!1);else this.onmousewheel=g
                },
        teardown:function(){
            if(this.removeEventListener)for(var p=J.length;p;)this.removeEventListener(J[--p],g,!1);else this.onmousewheel=null
                }
            };
    
D.fn.extend({
    wheelchange:function(g){
        return g?this.bind("wheelchange",g):this.trigger("wheelchange")
        },
    unwheelchange:function(g){
        return this.unbind("wheelchange",g)
        }
    })
})(jQuery);
(function(){
    var D=FusionCharts(["private","modules.renderer.highcharts-interface"]);
    if(D!==void 0){
        var g=D.hcLib,J=D.renderer.getRenderer("javascript"),p=g.hasModule,aa=g.loadModule,d=g.moduleCmdQueue,B=g.executeWaitingCommands,a=g.moduleDependencies,e=g.getDependentModuleName,u=g.eventList={
            loaded:"FC_Loaded",
            dataloaded:"FC_DataLoaded",
            rendered:"FC_Rendered",
            drawcomplete:"FC_DrawComplete",
            resized:"FC_Resized",
            dataxmlinvalid:"FC_DataXMLInvalid",
            nodatatodisplay:"FC_NoDataToDisplay"
        };
        
        g.raiseEvent=function(a,
            e,d,g){
            var p=u[a];
            D.raiseEvent(a,e,d);
            p&&typeof window[p]==="function"&&setTimeout(function(){
                window[p].apply(window,g)
                },0)
            };
            
        a.charts=D.extend(a.charts||{},{
            column2d:0,
            column3d:0,
            pie2d:0,
            pie3d:0,
            line:0,
            bar2d:0,
            area2d:0,
            doughnut2d:0,
            doughnut3d:0,
            pareto2d:0,
            pareto3d:0,
            mscolumn2d:0,
            mscolumn3d:0,
            msline:0,
            msarea:0,
            msbar2d:0,
            msbar3d:0,
            stackedcolumn2d:0,
            marimekko:0,
            stackedcolumn3d:0,
            stackedarea2d:0,
            stackedcolumn2dline:0,
            stackedcolumn3dline:0,
            stackedbar2d:0,
            stackedbar3d:0,
            msstackedcolumn2d:0,
            mscombi2d:0,
            mscombi3d:0,
            mscolumnline3d:0,
            mscombidy2d:0,
            mscolumn3dlinedy:0,
            stackedcolumn3dlinedy:0,
            msstackedcolumn2dlinedy:0,
            scatter:0,
            bubble:0,
            ssgrid:0,
            scrollcolumn2d:0,
            scrollcolumn3d:0,
            scrollline2d:0,
            scrollarea2d:0,
            scrollstackedcolumn2d:0,
            scrollcombi2d:0,
            scrollcombidy2d:0,
            zoomline:0
        });
        a.powercharts=D.extend(a.powercharts||{},{
            spline:0,
            splinearea:0,
            msspline:0,
            mssplinearea:0,
            multiaxisline:0,
            multilevelpie:0,
            waterfall2d:0,
            msstepline:0,
            inversemsline:0,
            inversemscolumn2d:0,
            inversemsarea:0,
            errorbar2d:0,
            horizontalerrorbar2d:0,
            errorscatter:0,
            errorline:0,
            logmsline:0,
            logmscolumn2d:0,
            radar:0,
            dragnode:0,
            candlestick:0,
            selectscatter:0,
            dragcolumn2d:0,
            dragline:0,
            dragarea:0,
            kagi:0
        });
        a.widgets=D.extend(a.widgets||{},{
            angulargauge:0,
            bulb:0,
            cylinder:0,
            drawingpad:0,
            funnel:0,
            hbullet:0,
            hled:0,
            hlineargauge:0,
            vlineargauge:0,
            pyramid:0,
            realtimearea:0,
            realtimecolumn:0,
            realtimeline:0,
            realtimelinedy:0,
            realtimestackedarea:0,
            realtimestackedcolumn:0,
            sparkcolumn:0,
            sparkline:0,
            sparkwinloss:0,
            thermometer:0,
            vbullet:0,
            vled:0
        });
        a.maps=D.extend(a.maps||

        {},{});
        D.extend(J,{
            render:function(a,t){
                var z=this.chartType(),u=this.jsVars,x;
                x=u.isMap===!0?["maps"]:e(z);
                u.hcObj&&u.hcObj.destroy&&u.hcObj.destroy();
                x.length?g.chartAPI[z]?(this.__state.lastRenderedSrc=this.src,delete u.waitingModule,D.hcLib.createChart(this,a,z,t),g.raiseEvent("rendered",{},u.fcObj,[u.fcObj.id])):p(x)?(D.raiseError(this,11112822001,"run","HC-interface~renderer.render","Chart runtimes not loaded even when resource is present"),D.hcLib.createChart(this,a,"stub",void 0,u.msgStore.ChartNotSupported)):
                (d[x[x.length-1]].push({
                    cmd:"render",
                    obj:this,
                    args:arguments
                }),u.waitingModule||(D.hcLib.createChart(this,a,"stub",void 0,u.msgStore.LoadingText),J.load.apply(this))):D.hcLib.createChart(this,a,"stub",void 0,u.msgStore.ChartNotSupported)
                },
            update:function(a){
                var e=this.ref,d=this.jsVars;
                d.hcObj&&d.hcObj.destroy&&d.hcObj.destroy();
                a.error===void 0?(delete d.stallLoad,delete d.loadError,this.isActive()&&(this.src!==this.__state.lastRenderedSrc?this.render():D.hcLib.createChart(this,d.container,d.type))):
                (this.isActive()&&typeof e.showChartMessage==="function"&&e.showChartMessage("InvalidXMLText"),delete d.loadError)
                },
            resize:function(a){
                var e=this.ref,d,g=this.jsVars;
                if(e&&e.resize){
                    if(g.isResizing)g.isResizing=clearTimeout(g.isResizing);
                    g.isResizing=setTimeout(function(){
                        d=D.normalizeCSSDimension(a.width,a.height,e);
                        if(a.width!==void 0)e.style.width=d.width;
                        if(a.height!==void 0)e.style.height=d.height;
                        e.resize();
                        delete g.isResizing
                        },0)
                    }
                },
        dispose:function(){
            var a;
            a=this.jsVars;
            var e=a.hcObj||{};
            
            a.instanceAPI&&
            a.instanceAPI.dispose&&a.instanceAPI.dispose();
            if(a=this.ref)D.purgeDOM(a),a.parentNode&&a.parentNode.removeChild(a);
            return e&&e.destroy&&e.destroy()
            },
        load:function(){
            var a=this,d=a.jsVars,p=a.chartType(),u=D.hcLib.chartAPI[p],p=e(p),x=p[p.length-1];
            if(u||!p||p&&p.length===0)delete d.waitingModule;
            else if(!d.waitingModule)d.waitingModule=!0,aa(p,function(){
                delete d.waitingModule;
                B(g.moduleCmdQueue[x]||[])
                },function(e){
                D.raiseError(a,"11171116151","run","HC-interface~renderer.load","Unable to load required modules and resources: "+
                    e)
                },a),d.moduleLoadRequested=!0
            },
        config:function(a){
            var e,d=this.jsVars,g=d.msgStore,d=d.cfgStore;
            for(e in a)g[e]?g[e]=a[e]:d[e.toLowerCase()]=a[e]
                }
            })
}
})();
(function(){
    function D(b,k,m,A,a,c,f){
        var h=[K],c=Fb(typeof c.color==="string"?c.color:c.color.FCcolor.color),e,d,j;
        j=f.box.tagName&&f.box.tagName.toLowerCase()==="div";
        f=c.replace(Ta,"");
        e=Sa(f,40);
        c=oa(f,60).replace(Ta,ib);
        f={
            FCcolor:{
                color:f+","+f+","+e+","+f+","+f,
                ratio:"0,30,30,30,10",
                angle:0,
                alpha:"100,100,100,100,100"
            }
        };
        
    switch(a){
        case "column":case "column3d":
            e=parseInt(m*25)/100;
            d=parseInt(e*50)/100;
            a=parseInt(A*30)/100;
            j=parseInt(A*60)/100;
            h=h.concat([b,k+A,M,b,k+a,b+e,k+a,b+e,k+A,b+e+d,
            k+A,b+e+d,k,b+e+e+d,k,b+e+e+d,k+A,b+e+e+d+d,k+A,b+e+e+d+d,k+j,b+m,k+j,b+m,k+A,"Z"]);
        f.FCcolor.angle=270;
        break;
        case "bar":case "bar3d":
            e=m*0.3;
            d=m*0.6;
            a=A/4;
            j=a/2;
            h=h.concat([b,k,M,b+d,k,b+d,k+a,b,k+a,b,k+a+j,b+m,k+a+j,b+m,k+a+j+a,b,k+2*a+j,b,k+2*(a+j),b+e,k+2*(a+j),b+e,k+A,b,k+A,"Z"]);
            break;
        case "area":case "area3d":
            a=A*0.6;
            j=A*0.2;
            A*=0.8;
            h=h.concat([b,k+A,M,b,k+a,b+m*0.3,k+j,b+m*0.6,k+a,b+m,k+j,b+m,k+A,"Z"]);
            f.FCcolor.angle=270;
            break;
        case "pie":case "pie3d":
            e=m/2;
            d=m*0.7;
            a=A/2;
            h=j?h.concat([b+e,
            k+a,M,b+d,k,"at",b,k,b+m,k+A,b+d,k,b,k+a,M,b+e,k+a,K,b+e,k+a,M,b,k+a,"at",b,k,b+m,k+A,b,k+a,b+d,k+A,M,b+e,k+a,K,b+e,k+a,M,b+d,k+A,"at",b,k,b+m,k+A,b+d,k+A,b+d,k,"Z"]):h.concat([b+e,k+a,M,b+d,k,"A",e,a,0,0,0,b,k+a,M,b+e,k+a,K,b+e,k+a,M,b,k+a,"A",e,a,0,0,0,b+d,k+A,M,b+e,k+a,K,b+e,k+a,M,b+d,k+A,"A",e+1,a+1,0,0,0,b+d,k,"Z"]);
            break;
        default:
            h=h.concat([b,k,M,b+m,k,b+m,k+A,b,k+A,"Z"]),f.FCcolor.angle=270,f.FCcolor.ratio="0,70,30"
            }
            return{
        path:h,
        color:f,
        strokeWidth:0.5,
        strokeColor:c
    }
}
function g(b,k){
    var m;
    b||(b={});
    for(m in k)b[m]=k[m];return b
    }
    function J(b,k){
    return parseInt(b,k||10)
    }
    function p(b){
    return typeof b==="string"
    }
    function aa(b){
    return typeof b==="object"
    }
    function d(b){
    return typeof b==="number"
    }
    function B(b){
    return fa.log(b)/fa.LN10
    }
    function a(b,k){
    for(var m=b.length;m--;)if(b[m]===k){
        b.splice(m,1);
        break
    }
    }
    function e(b){
    return b!==wa&&b!==null
    }
    function u(b,k,m){
    var a,N;
    if(p(k))e(m)?b.setAttribute(k,m):b&&b.getAttribute&&(N=b.getAttribute(k));
    else if(e(k)&&aa(k))for(a in k)b.setAttribute(a,
        k[a]);return N
    }
    function w(b){
    return Object.prototype.toString.call(b)==="[object Array]"?b:[b]
    }
    function t(){
    var b=arguments,k,m,a=b.length;
    for(k=0;k<a;k++)if(m=b[k],typeof m!=="undefined"&&m!==null)return m
        }
        function z(b,k){
    if(Db&&k&&k.opacity!==wa)k.filter="alpha(opacity="+k.opacity*100+")";
    g(b.style,k)
    }
    function $(b,k,m,a,N){
    b=Ca.createElement(b);
    k&&g(b,k);
    N&&z(b,{
        padding:0,
        border:lb,
        margin:0
    });
    m&&z(b,m);
    a&&a.appendChild(b);
    return b
    }
    function x(b,k){
    var m=function(){};
    
    m.prototype=new b;
    g(m.prototype,
        k);
    return m
    }
    function E(b,k,m,a){
    var N=s.lang,c=isNaN(k=na(k))?2:k,k=m===void 0?N.decimalPoint:m,a=a===void 0?N.thousandsSep:a,N=b<0?"-":"",m=String(J(b=na(+b||0).toFixed(c))),f=m.length>3?m.length%3:0;
    return N+(f?m.substr(0,f)+a:"")+m.substr(f).replace(/(\d{3})(?=\d)/g,"$1"+a)+(c?k+na(b-m).toFixed(c).slice(2):"")
    }
    function o(b){
    for(var k={
        left:b.offsetLeft,
        top:b.offsetTop
        },b=b.offsetParent;b;)k.left+=b.offsetLeft,k.top+=b.offsetTop,b!==Ca.body&&b!==Ca.documentElement&&(k.left-=b.scrollLeft,k.top-=
        b.scrollTop),b=b.offsetParent;
    return k
    }
    function y(){
    this.symbol=this.color=0
    }
    function R(b,k,m,a,N,c,f){
    var e=f.x,f=f.y,h=e-b+m-25,d=f-k+a+10,j;
    h<7&&(h=m+e+15);
    h+b>m+N&&(h-=h+b-(m+N),d-=k,j=!0);
    d<5?(d=5,j&&f>=d&&f<=d+k&&(d=f+k-5)):d+k>a+c&&(d=a+c-k-5);
    return{
        x:h,
        y:d
    }
}
function Lb(b,k){
    var m=b.length,a;
    for(a=0;a<m;a++)b[a].ss_i=a;
    b.sort(function(b,m){
        var a=k(b,m);
        return a===0?b.ss_i-m.ss_i:a
        });
    for(a=0;a<m;a++)delete b[a].ss_i
        }
        function Qa(b){
    for(var k=b.length,m=b[0];k--;)b[k]<m&&(m=b[k]);
    return m
    }
    function Wb(b){
    for(var k=
        b.length,m=b[0];k--;)b[k]>m&&(m=b[k]);
    return m
    }
    function cb(b){
    for(var k in b)b[k]&&b[k].destroy&&b[k].destroy(),delete b[k]
    }
    function ga(b,k){
    O=t(b,k.animation)
    }
    function bb(){
    var b=s.global.useUTC;
    pc=b?Date.UTC:function(b,m,a,N,c,f){
        return(new Date(b,m,t(a,1),t(N,0),t(c,0),t(f,0))).getTime()
        };
        
    yc=b?"getUTCMinutes":"getMinutes";
    zc=b?"getUTCHours":"getHours";
    Ac=b?"getUTCDay":"getDay";
    I=b?"getUTCDate":"getDate";
    ba=b?"getUTCMonth":"getMonth";
    qc=b?"getUTCFullYear":"getFullYear";
    Ic=b?"setUTCMinutes":"setMinutes";
    la=b?"setUTCHours":"setHours";
    Bc=b?"setUTCDate":"setDate";
    Jc=b?"setUTCMonth":"setMonth";
    Kc=b?"setUTCFullYear":"setFullYear"
    }
    function Y(b){
    v||(v=$(xa));
    b&&v.appendChild(b);
    v.innerHTML=""
    }
    function Ua(){}
function $a(b,k){
    function m(b){
        function k(b,m){
            this.pos=b;
            this.minor=m;
            this.isNew=!0;
            m||this.addLabel()
            }
            function m(b){
            if(b)this.options=b,this.id=b.id;
            return this
            }
            function a(b,k,m,A){
            this.isNegative=k;
            this.options=b;
            this.x=m;
            this.stack=A;
            this.alignOptions={
                align:b.align||(Pa?k?"left":"right":"center"),
                verticalAlign:b.verticalAlign||(Pa?"middle":k?"bottom":"top"),
                y:t(b.y,Pa?4:k?14:-6),
                x:t(b.x,Pa?k?-6:6:0)
                };
                
            this.textAlign=b.textAlign||(Pa?k?"right":"left":"center")
            }
            function A(){
            var b=[],k=[],m;
            G=Ja=null;
            xa=[];
            T(eb,function(A){
                m=!1;
                T(["xAxis","yAxis"],function(b){
                    if(A.isCartesian&&(b==="xAxis"&&j||b==="yAxis"&&!j)&&(A.options[b]===ea.index||A.options[b]===wa&&ea.index===0))A[b]=pa,xa.push(A),m=!0
                        });
                !A.visible&&sa.ignoreHiddenSeries&&(m=!1);
                if(m){
                    var N,c,f,h,ia,d;
                    if(!j){
                        N=A.options.stacking;
                        D=N===
                        "percent";
                        if(N)ia=A.options.stack,h=A.type+t(ia,""),d="-"+h,A.stackKey=h,c=b[h]||[],b[h]=c,f=k[d]||[],k[d]=f;
                        D&&(G=0,Ja=99)
                        }
                        A.isCartesian&&(T(A.data,function(b){
                        var k=b.x,m=b.y,A=m<0,ia=A?f:c,ya=A?d:h;
                        G===null&&(G=Ja=b[o]);
                        j?k>Ja?Ja=k:k<G&&(G=k):e(m)&&(N&&(ia[k]=e(ia[k])?ia[k]+m:m),m=ia?ia[k]:m,b=t(b.low,m),D||(m>Ja?Ja=m:b<G&&(G=b)),N&&(n[ya]||(n[ya]={}),n[ya][k]||(n[ya][k]=new a(ea.stackLabels,A,k)),n[ya][k].setTotal(m)))
                        }),/(area|column|bar)/.test(A.type)&&!j&&(G>=0?(G=0,Nc=!0):Ja<0&&(Ja=0,Mc=!0)))
                    }
                })
        }
    function N(b,k){
        var m,a;
        X=k?1:fa.pow(10,tb(fa.log(b)/fa.LN10));
        m=b/X;
        if(!k&&(k=[1,2,2.5,5,10],ea.allowDecimals===!1||v))X===1?k=[1,2,5,10]:X<=0.1&&(k=[1/X]);
        for(a=0;a<k.length;a++)if(b=k[a],m<=(k[a]+(k[a+1]||k[a]))/2)break;b*=X;
        return b
        }
        function c(b){
        var k;
        k=b;
        X=t(X,fa.pow(10,tb(fa.log(Z)/fa.LN10)));
        X<1&&(k=S(1/X)*10,k=S(b*k)/k);
        return k
        }
        function f(){
        var b,k,m,a,A=ea.tickInterval,h=ea.tickPixelInterval;
        b=ea.maxZoom||(j&&!e(ea.min)&&!e(ea.max)?ob(V.smallestInterval*5,Ja-G):null);
        O=r?ab:Va;
        R?(m=V[j?
            "xAxis":"yAxis"][ea.linkedTo],a=m.getExtremes(),F=t(a.min,a.dataMin),y=t(a.max,a.dataMax)):(F=t(Ob,ea.min,G),y=t(ub,ea.max,Ja));
        v&&(F=B(F),y=B(y));
        y-F<b&&(a=(b-y+F)/2,F=Aa(F-a,t(ea.min,F-a),G),y=ob(F+b,t(ea.max,F+b),Ja));
        if(!Q&&!D&&!R&&e(F)&&e(y)){
            b=y-F||1;
            if(!e(ea.min)&&!e(Ob)&&L&&(G<0||!Nc))F-=b*L;
            if(!e(ea.max)&&!e(ub)&&W&&(Ja>0||!Mc))y+=b*W
                }
                Z=F===y?1:R&&!A&&h===m.options.tickPixelInterval?m.tickInterval:t(A,Q?1:(y-F)*h/O);
        !p&&!e(ea.tickInterval)&&(Z=N(Z));
        pa.tickInterval=Z;
        Za=ea.minorTickInterval===
        "auto"&&Z?Z/5:ea.minorTickInterval;
        if(p){
            Wa=[];
            var A=s.global.useUTC,ia=1E3/q,d=6E4/q,ya=36E5/q,h=864E5/q;
            b=6048E5/q;
            a=2592E6/q;
            var ta=31556952E3/q,g=[["second",ia,[1,2,5,10,15,30]],["minute",d,[1,2,5,10,15,30]],["hour",ya,[1,2,3,4,6,8,12]],["day",h,[1,2]],["week",b,[1,2]],["month",a,[1,2,3,4,6]],["year",ta,null]],qa=g[6],n=qa[1],va=qa[2];
            for(m=0;m<g.length;m++)if(qa=g[m],n=qa[1],va=qa[2],g[m+1]&&Z<=(n*va[va.length-1]+g[m+1][1])/2)break;n===ta&&Z<5*n&&(va=[1,2,5]);
            g=N(Z/n,va);
            va=new Date(F*q);
            va.setMilliseconds(0);
            n>=ia&&va.setSeconds(n>=d?0:g*tb(va.getSeconds()/g));
            if(n>=d)va[Ic](n>=ya?0:g*tb(va[yc]()/g));
            if(n>=ya)va[la](n>=h?0:g*tb(va[zc]()/g));
            if(n>=h)va[Bc](n>=a?1:g*tb(va[I]()/g));
            n>=a&&(va[Jc](n>=ta?0:g*tb(va[ba]()/g)),k=va[qc]());
            n>=ta&&(k-=k%g,va[Kc](k));
            if(n===b)va[Bc](va[I]()-va[Ac]()+ea.startOfWeek);
            m=1;
            k=va[qc]();
            ia=va.getTime()/q;
            d=va[ba]();
            for(ya=va[I]();ia<y&&m<ab;)Wa.push(ia),n===ta?ia=pc(k+m*g,0)/q:n===a?ia=pc(k,d+m*g)/q:!A&&(n===h||n===b)?ia=pc(k,d,ya+m*g*(n===h?1:7)):ia+=n*g,m++;
            Wa.push(ia);
            hb=ea.dateTimeLabelFormats[qa[0]]
            }else{
            m=c(tb(F/Z)*Z);
            k=c(Pb(y/Z)*Z);
            Wa=[];
            for(m=c(m);m<=k;)Wa.push(m),m=c(m+Z)
                }
                if(!R){
            if(Q||j&&V.hasColumn){
                k=(Q?1:Z)*0.5;
                if(Q||!e(t(ea.min,Ob)))F-=k;
                if(Q||!e(t(ea.max,ub)))y+=k
                    }
                    k=Wa[0];
            m=Wa[Wa.length-1];
            ea.startOnTick?F=k:F>k&&Wa.shift();
            ea.endOnTick?y=m:y<m&&Wa.pop();
            Rb||(Rb={
                x:0,
                y:0
            });
            if(!p&&Wa.length>Rb[o])Rb[o]=Wa.length
                }
            }
    function h(){
    var b,k;
    w=F;
    mc=y;
    A();
    f();
    ja=l;
    l=O/(y-F||1);
    if(!j)for(b in n)for(k in n[b])n[b][k].cum=0;if(!pa.isDirty)pa.isDirty=F!==w||y!==mc
        }
function ia(b){
    b=(new m(b)).render();
    ha.push(b);
    return b
    }
    function d(){
    var b=ea.title,a=ea.stackLabels,A=ea.alternateGridColor,N=ea.lineWidth,c,f,h=(c=V.hasRendered)&&e(w)&&!isNaN(w);
    f=C(ea.showAlways,xa.length&&e(F)&&e(y));
    O=r?ab:Va;
    l=O/(y-F||1);
    Nb=r?Ia:oa;
    if(f||R){
        if(Za&&!Q)for(f=F+(Wa[0]-F)%Za;f<=y;f+=Za)ma[f]||(ma[f]=new k(f,!0)),h&&ma[f].isNew&&ma[f].render(null,!0),ma[f].isActive=!0,ma[f].render();
        T(Wa,function(b,k){
            if(!R||b>=F&&b<=y)h&&vb[b].isNew&&vb[b].render(k,!0),vb[b].isActive=!0,vb[b].render(k)
                });
        A&&T(Wa,function(b,k){
            if(k%2===0&&b<y)fc[b]||(fc[b]=new m),fc[b].options={
                from:b,
                to:Wa[k+1]!==wa?Wa[k+1]:y,
                color:A
            },fc[b].render(),fc[b].isActive=!0
                });
        c||T((ea.plotLines||[]).concat(ea.plotBands||[]),function(b){
            ha.push((new m(b)).render())
            })
        }
        T([vb,ma,fc],function(b){
        for(var k in b)b[k].isActive?b[k].isActive=!1:(b[k].destroy(),delete b[k])
            });
    N&&(c=Ia+(ta?ab:0)+ca,f=Ya-oa-(ta?Va:0)+ca,c=za.crispLine([K,r?Ia:c,r?f:La,M,r?fb-Sb:c,r?f:Ya-oa],N),u?u.animate({
        d:c
    }):u=za.path(c).attr({
        stroke:ea.lineColor,
        "stroke-width":N,
        zIndex:7
    }).add());
    if(va)c=r?Ia:La,N=J(b.style.fontSize||12),c={
        low:c+(r?0:O),
        middle:c+O/2,
        high:c+(r?O:0)
        }
        [b.align],N=(r?La+Va:Ia-N*0.37)+(r?1:-1)*(ta?-1:1)*$+(qa===2?N:0),va[va.isNew?"attr":"animate"]({
        x:r?c:N+(ta?ab:0)+ca+(b.x||0),
        y:r?N-(ta?Va:0)+ca:c+(b.y||0)
        }),va.isNew=!1;
    if(a&&a.enabled){
        var ia,ya,a=pa.stackTotalGroup;
        if(!a)pa.stackTotalGroup=a=za.g("stack-labels").attr({
            visibility:Da,
            zIndex:6
        }).translate(Ia,La).add();
        for(ia in n)for(ya in b=n[ia],b)b[ya].render(a)
            }
            ia=ea.scroll;
    ya=pa.scroller;
    if(ia&&ia.enabled&&(r?(b=Ia+ca-2,a=Ya-oa-(!ta?0:Va)+ca+ia.padding-1):(b=Ia+(ta?ab:0),a=Ya-oa),!ya))ya=pa.scroller=za.scroller(b,a,O+4,ia.height,r,{
        size:ia.buttonWidth,
        padding:ia.buttonPadding
        },!1).attr({
        fill:ia.color
        }).setScrollRatio(ia.scrollRatio).setScrollPosition(ia.startPercent).callback(function(){
        pa.scroll.apply(pa,arguments)
        }).add(Vb);
    pa.isDirty=!1
    }
    function ya(b){
    for(var k=ha.length;k--;)ha[k].id===b&&ha[k].destroy()
        }
        var j=b.isX,ta=b.opposite,r=Pa?!j:j,qa=r?ta?0:2:ta?1:3,n=
{},ea=ka(j?rc:Cc,[Pc,Qc,Lc,Rc][qa],b),pa=this,va,U=ea.type,p=U==="datetime",v=U==="logarithmic",ca=ea.offset||0,o=j?"x":"y",O,l,ja,Nb=r?Ia:oa,z,x,Vb,P,u,G,Ja,xa,Ob,ub,y=null,F=null,w,mc,L=ea.minPadding,W=ea.maxPadding,R=e(ea.linkedTo),Nc,Mc,D,U=ea.events,gc,ha=[],Z,Za,X,Wa,vb={},ma={},fc={},lb,Kb,$,hb,Q=ea.categories,Xb=ea.labels.formatter||function(){
    var b=this.value;
    return hb?ra(hb,b):Z%1E6===0?b/1E6+"M":Z%1E3===0?b/1E3+"k":!Q&&b>=1E3?E(b,0):b
    },Ub=r&&ea.labels.staggerLines,Y=ea.reversed,da=Q&&ea.tickmarkPlacement===
"between"?0.5:0;
k.prototype={
    addLabel:function(){
        var b=this.pos,k=ea.labels,m=!(b===F&&!t(ea.showFirstLabel,1)||b===y&&!t(ea.showLastLabel,0)),a=Q&&r&&Q.length&&!k.step&&!k.staggerLines&&!k.rotation&&ab/Q.length||!r&&ab/2,A=Q&&e(Q[b])?Q[b]:b,N=this.label,b=Xb.call({
            isFirst:b===Wa[0],
            isLast:b===Wa[Wa.length-1],
            dateTimeLabelFormat:hb,
            value:v?fa.pow(10,A):A
            }),a=a&&{
            width:Aa(1,S(a-2*(k.padding||10)))+gb
            },a=g(a,k.style);
        N===wa?this.label=e(b)&&m&&k.enabled?za.text(b,0,0,k.useHTML).attr({
            align:k.align,
            rotation:k.rotation
            }).css(a).add(Vb):null:N&&N.attr({
            text:b
        }).css(a)
        },
    getLabelSize:function(){
        var b=this.label;
        return b?(this.labelBBox=b.getBBox())[r?"height":"width"]:0
        },
    render:function(b,k){
        var m=!this.minor,a=this.label,A=this.pos,N=ea.labels,c=this.gridLine,f=m?ea.gridLineWidth:ea.minorGridLineWidth,ia=m?ea.gridLineColor:ea.minorGridLineColor,h=m?ea.gridLineDashStyle:ea.minorGridLineDashStyle,d=this.mark,ya=m?ea.tickLength:ea.minorTickLength,j=m?ea.tickWidth:ea.minorTickWidth||0,g=m?ea.tickColor:
        ea.minorTickColor,qa=m?ea.tickPosition:ea.minorTickPosition,n=N.step,va=k&&sc||Ya,pa;
        pa=r?z(A+da,null,null,k)+Nb:Ia+ca+(ta?(k&&Dc||fb)-Sb-Ia:0);
        va=r?va-oa+ca-(ta?Va:0):va-z(A+da,null,null,k)-Nb;
        if(f){
            A=x(A+da,f,k);
            if(c===wa){
                c={
                    stroke:ia,
                    "stroke-width":f
                };
                
                if(h)c.dashstyle=h;
                if(m)c.zIndex=1;
                this.gridLine=c=f?za.path(A).attr(c).add(P):null
                }!k&&c&&A&&c.animate({
                d:A
            })
            }
            if(j)qa==="inside"&&(ya=-ya),ta&&(ya=-ya),m=za.crispLine([K,pa,va,M,pa+(r?0:-ya),va+(r?ya:0)],j),d?d.animate({
            d:m
        }):this.mark=za.path(m).attr({
            stroke:g,
            "stroke-width":j
        }).add(Vb);
        if(a&&!isNaN(pa)){
            pa=pa+N.x-(da&&r?da*l*(Y?-1:1):0);
            va=va+N.y-(da&&!r?da*l*(Y?1:-1):0);
            e(N.y)||(va+=J(a.styles.lineHeight)*0.9-a.getBBox().height/2);
            Ub&&(va+=b/(n||1)%Ub*16);
            if(n)a[b%n?"hide":"show"]();
            a[this.isNew?"attr":"animate"]({
                x:pa,
                y:va
            })
            }
            this.isNew=!1
        },
    destroy:function(){
        cb(this)
        }
    };

m.prototype={
    render:function(){
        var b=this,k=b.options,m=k.label,a=b.label,A=k.width,N=k.to,c=k.from,f=k.value,h,ia=k.dashStyle,ya=b.svgElem,d=[],ta,g,qa=k.color;
        g=k.zIndex;
        var ea=k.events;
        b.chart=V;
        A===0&&m&&e(m.text)&&(A=1,qa=dc);
        v&&(c=B(c),N=B(N),f=B(f));
        if(A){
            if(d=x([k.value,C(k.to,k.value)],A),k={
                stroke:qa,
                "stroke-width":A
            },ia)k.dashstyle=ia
                }else if(e(c)&&e(N))c=Aa(c,F),N=ob(N,y),h=x(N),(d=x(c))&&h?(this.options.alwaysVisible&&(r?h[1]=h[4]+=d[1]===h[1]&&d[4]===h[4]:h[2]=h[5]+=d[2]===h[2]&&d[5]===h[5]),d.push(h[4],h[5],h[1],h[2])):d=null,k={
            fill:qa
        };else return;
        if(e(g))k.zIndex=g;
        if(ya)d?ya.animate({
            d:d
        },null,ya.onGetPath):(ya.hide(),ya.onGetPath=function(){
            ya.show()
            });
        else if(d&&
            d.length&&(b.svgElem=ya=za.path(d).attr(k).add(),ea))for(ta in ia=function(k){
            ya.on(k,function(m){
                ea[k].apply(b,[m])
                })
            },ea)ia(ta);if(m&&e(m.text)&&d&&d.length&&ab>0&&Va>0){
            m=ka({
                align:r&&h&&"center",
                x:r?!h&&4:10,
                verticalAlign:!r&&h&&"middle",
                y:r?h?16:10:h?6:-4,
                rotation:r&&!h&&90
                },m);
            ta=m.style;
            h=J(ta.lineHeight,10);
            if(!a)b.label=a=za.text(m.text,0,0).attr({
                align:m.textAlign||m.align,
                rotation:m.rotation,
                zIndex:g
            }).css(ta).add();
            ia=[d[1],d[4],t(d[6],d[1])];
            k=[d[2],d[5],t(d[7],d[2])];
            g=Qa(ia);
            ta=Qa(k);
            ia=Wb(ia)-g;
            k=Wb(k)-ta;
            m.offsetScale!==void 0&&(m.offsetScaleIndex!==void 0?(A=(j?V.yAxis:V.xAxis)[m.offsetScaleIndex],r?ta+=A.translate(m.offsetScale,0,1)+(m.offsetScale<0?2:-2):(g=d[1]+ia/2-A.translate(m.offsetScale,0,1)+(m.offsetScale<0?-2:2),ta+=J(h,10)*0.37)):r?ta+=Va*m.offsetScale:g+=ab*m.offsetScale);
            a.align(m,!1,{
                x:g,
                y:ta,
                width:ia,
                height:k
            });
            a.textBound();
            a.show()
            }else a&&a.hide();
        return b
        },
    destroy:function(){
        for(var b in this)b!=="chart"&&this[b]&&this[b].destroy&&this[b].destroy(),delete this[b]
        }
    };
a.prototype={
    destroy:function(){
        cb(this)
        },
    setTotal:function(b){
        this.cum=this.total=b
        },
    render:function(b){
        var k=this.options.formatter.call(this);
        this.label?this.label.attr({
            text:k,
            visibility:Fa
        }):this.label=V.renderer.text(k,0,0).css(this.options.style).attr({
            align:this.textAlign,
            rotation:this.options.rotation,
            visibility:Fa
        }).add(b)
        },
    setOffset:function(b,k){
        var m=this.isNegative,a=pa.translate(this.total),A=pa.translate(0),A=na(a-A),N=V.xAxis[0].translate(this.x)+b,c=V.plotHeight,m={
            x:Pa?m?a:a-A:
            N,
            y:Pa?c-N-k:m?c-a-A:c-a,
            width:Pa?A:k,
            height:Pa?k:A
            };
            
        this.label&&this.label.align(this.alignOptions,null,m).attr({
            visibility:Da
        })
        }
    };

z=function(b,k,m,a,A,N){
    var c=1,f=0,h=a?ja:l,a=a?w:F;
    h||(h=l);
    m&&(c*=-1,f=O);
    Y&&(c*=-1,f-=c*O);
    N?k?(b/=h,v&&A&&(b=fa.pow(10,b))):(v&&A&&(b=B(b)),b*=h):k?(Y&&(b=O-b),b=b/h+a,v&&A&&(b=fa.pow(10,b))):(v&&A&&(b=B(b)),b=c*(b-a)*h+f);
    return b
    };
    
x=function(b,k,m){
    var a,A,N,c,f=m&&sc||Ya,h=m&&Dc||fb,ia;
    b instanceof Array||(b=[b,b]);
    N=z(b[0],null,null,m);
    c=z(b[1],null,null,m);
    b=S(N+Nb);
    a=S(c+Nb);
    m=S(f-N-Nb);
    A=S(f-c-Nb);
    if(isNaN(N)||isNaN(c))ia=!0;
    else if(r){
        if(m=La,A=f-oa,b<Ia||b>Ia+ab)ia=!0
            }else if(b=Ia,a=h-Sb,m<La||m>La+Va)ia=!0;
    return ia?null:za.crispLine([K,b,m,M,a,A],k||0)
    };
    
Pa&&j&&Y===wa&&(Y=!0);
g(pa,{
    addPlotBand:ia,
    addPlotLine:ia,
    adjustTickAmount:function(){
        if(Rb&&!p&&!Q&&!R){
            var b=lb,k=Wa.length;
            lb=Rb[o];
            if(k<lb){
                for(;Wa.length<lb;)Wa.push(c(Wa[Wa.length-1]+Z));
                l*=(k-1)/(lb-1);
                y=Wa[Wa.length-1]
                }
                if(e(b)&&lb!==b)pa.isDirty=!0
                }
            },
categories:Q,
getExtremes:function(){
    return{
        min:F,
        max:y,
        dataMin:G,
        dataMax:Ja,
        userMin:Ob,
        userMax:ub
    }
},
getPlotLinePath:x,
getThreshold:function(b){
    F>b?b=F:y<b&&(b=y);
    return z(b,0,1)
    },
isXAxis:j,
options:ea,
plotLinesAndBands:ha,
getOffset:function(){
    var b=C(ea.showAlways,xa.length&&e(F)&&e(y)),m=0,a=0,A=ea.title,N=ea.labels,c=[-1,1,1,-1][qa],f;
    Vb||(Vb=za.g("axis").attr({
        zIndex:7
    }).add(),P=za.g("grid").attr({
        zIndex:1
    }).add());
    Kb=0;
    if(b||R)T(Wa,function(b){
        vb[b]?vb[b].addLabel():vb[b]=new k(b);
        if(qa===0||qa===2||{
            1:"left",
            3:"right"
        }
        [qa]===N.align)Kb=Aa(vb[b].getLabelSize(),
            Kb)
        }),Ub&&(Kb+=(Ub-1)*16);else for(f in vb)vb[f].destroy(),delete vb[f];if(A&&A.text){
        if(!pa.axisTitle)va=pa.axisTitle=za.text(A.text,0,0,A.useHTML).attr({
            zIndex:7,
            rotation:A.rotation||0,
            align:A.textAlign||{
                low:"left",
                middle:"center",
                high:"right"
            }
            [A.align]
            }).css(A.style).add(),va.isNew=!0;
        m=va.getBBox()[r?"height":"width"];
        a=t(A.margin,r?5:10)
        }
        ca=c*(ea.offset||Ka[qa]);
    $=Kb+(qa!==2&&Kb&&c*ea.labels[r?"y":"x"])+a;
    Ka[qa]=Aa(Ka[qa],$+m+c*ca)
    },
render:d,
setCategories:function(k,m){
    pa.categories=b.categories=
    Q=k;
    T(xa,function(b){
        b.translate();
        b.setTooltipPoints(!0)
        });
    pa.isDirty=!0;
    t(m,!0)&&V.redraw()
    },
setExtremes:function(b,k,m,a){
    m=t(m,!0);
    Ha(pa,"setExtremes",{
        min:b,
        max:k
    },function(){
        Ob=b;
        ub=k;
        m&&V.redraw(a)
        })
    },
setScale:h,
setTickPositions:f,
translate:z,
redraw:function(){
    Tb.resetTracker&&Tb.resetTracker();
    d();
    T(ha,function(b){
        b.render()
        });
    T(xa,function(b){
        b.isDirty=!0
        })
    },
removePlotBand:ya,
removePlotLine:ya,
reversed:Y,
stacks:n,
scroll:function(b,k,m){
    var a=this.options,A=a.scroll,a=a.min,N=A.vxLength,c=
    A.viewPortMin,b=(A.viewPortMax-c-N)*b+c,A=b+N,f;
    m===void 0&&(m=!0);
    Tb.resetTracker&&(m?Tb.resetTracker():V.tooltip&&V.tooltip.hide());
    Ob=b;
    ub=A;
    ga(t(k,!1),V);
    $b&&(Mb||(Rb=null,this.setScale()),T(ha,function(b){
        b.render()
        }),f=l*(b-a),T(xa,function(b){
        b.scroll(f,0,m)
        }));
    Ha(V,"scroll")
    },
destroy:function(){
    var b;
    Hb(pa);
    for(b in n)cb(n[b]),n[b]=null;if(pa.stackTotalGroup)pa.stackTotalGroup=pa.stackTotalGroup.destroy();
    T([vb,ma,fc,ha],function(b){
        cb(b)
        });
    T([u,Vb,P,va],function(b){
        b&&b.destroy()
        });
    u=Vb=
    P=va=null
    }
});
for(gc in U)Ea(pa,gc,U[gc]);h()
}
function a(){
    var k={};
    
    return{
        add:function(m,a,A,N){
            k[m]||(a=za.text(a,0,0).css(b.toolbar.itemStyle).align({
                align:"right",
                x:-Sb-20,
                y:La+30
                }).on("click",N).attr({
                align:"right",
                zIndex:20
            }).add(),k[m]=a)
            },
        remove:function(b){
            Y(k[b].element);
            k[b]=null
            }
        }
}
function N(b){
    function k(){
        var b=this.points||w(this),m=b[0].series.xAxis,a=this.x,m=m&&m.options.type==="datetime",A=p(a)||m,N;
        N=A?['<span style="font-size: 10px">'+(m?ra("%A, %b %e, %Y",a):a)+"</span>"]:[];
        T(b,function(b){
            N.push(b.point.tooltipFormatter(A))
            });
        return N.join("<br/>")
        }
        function m(b,k){
        r=ya?b:(2*r+b)/3;
        g=ya?k:(g+k)/2;
        n.translate(r,g);
        Yb=na(b-r)>1||na(k-g)>1?function(){
            m(b,k)
            }:null
        }
        function a(){
        if(!ya){
            var b=V.hoverPoints;
            n.hide();
            T(f,function(b){
                b&&b.hide()
                });
            b&&T(b,function(b){
                b.setState()
                });
            V.hoverPoints=null;
            ya=!0
            }
        }
    var A,N=b.borderWidth,c=b.crosshairs,f=[],h=b.style,ia=b.shared,d=J(h.padding),e=N+d,ya=!0,ta,j,r=0,g=0,qa="plot",ea=!1;
h.padding=0;
var n=za.g("tooltip").attr({
    zIndex:8
}).add(),
va=za.rect(e,e,0,0,b.borderRadius,N).attr({
    fill:b.backgroundColor,
    "stroke-width":N
}).add(n).shadow(b.shadow,void 0,b.shadow),pa=za.text("",d+e,J(h.fontSize)+d+e).attr({
    zIndex:1
}).css(h).add(n);
n.hide();
return{
    shared:ia,
    refresh:function(N,h){
        var r,g,q,s=0,U={},p=[];
        q=N.tooltipPos;
        r=b.formatter||k;
        U=V.hoverPoints;
        if(ea)a();
        else if(qa=N.tooltipConstraint||"plot",ia?(U&&T(U,function(b){
            b.setState()
            }),V.hoverPoints=N,T(N,function(b){
            b.setState(Z);
            s+=b.plotY;
            p.push(b.getLabelConfig())
            }),g=N[0].plotX,s=
        S(s)/N.length,U={
            x:N[0].category
            },U.points=p,N=N[0]):U=N.getLabelConfig(),U=r.call(U),A=N.series,g=ia?g:N.plotX,s=ia?s:N.plotY,r=S(q?q[0]:Pa?ab-s:g),g=S(q?q[1]:Pa?Va-g:s),q=ia||!N.series.isCartesian||pb(r,g),U===!1||!q?a():(ya&&!h&&(n.show(),ya=!1),pa.attr({
            text:U
        }),q=pa.getBBox(),ta=q.width+2*d,j=q.height+2*d,va.attr({
            width:ta,
            height:j,
            stroke:b.borderColor||N.color||A.color||"#606060"
            }),r=R(ta,j,Ia,La,ab,Va,{
            x:r,
            y:g
        }),m(S(r.x-e),S(r.y-e))),c){
            c=w(c);
            for(r=c.length;r--;)if(g=N.series[r?"yAxis":"xAxis"],
                c[r]&&g)if(g=g.getPlotLinePath(N[r?"y":"x"],1),f[r])f[r].attr({
                d:g,
                visibility:Da
            });
            else{
                q={
                    "stroke-width":c[r].width||1,
                    stroke:c[r].color||"#C0C0C0",
                    zIndex:2
                };
                
                if(c[r].dashStyle)q.dashstyle=c[r].dashStyle;
                f[r]=za.path(g).attr(q).add()
                }
            }
            },
hide:a,
destroy:function(){
    T(f,function(b){
        b&&b.destroy()
        });
    T([va,pa,n],function(b){
        b&&b.destroy()
        });
    va=pa=n=null
    },
currentConstraint:function(){
    return qa
    },
move:m,
block:function(b){
    (ea=Boolean(b))&&a()
    },
visible:function(){
    return ya
    }
}
}
function c(b){
    function k(b){
        var m,
        a=f&&Ca.width/Ca.body.scrollWidth-1,A,N,c,b=b||kb.event;
        if(!b.target)b.target=b.srcElement;
        m=b.touches?b.touches.item(0):b;
        if(b.type!=="mousemove"||kb.opera||a)Jb=o(Na),A=Jb.left,N=Jb.top;
        Db?(c=b.x,m=b.y):m.layerX===wa?(c=m.pageX-A,m=m.pageY-N):(c=b.layerX,m=b.layerY);
        a&&(c+=S((a+1)*A-A),m+=S((a+1)*N-N));
        return g(b,{
            chartX:c,
            chartY:m
        })
        }
        function m(b){
        var k={
            xAxis:[],
            yAxis:[]
        };
        
        T(qb,function(m){
            var a=m.translate,A=m.isXAxis;
            k[A?"xAxis":"yAxis"].push({
                axis:m,
                value:a((Pa?!A:A)?b.chartX-Ia:Va-b.chartY+
                    La,!0)
                })
            });
        return k
        }
        function a(){
        var b=V.hoverSeries,k=V.hoverPoint;
        if(k)k.onMouseOut();
        if(b)b.onMouseOut();
        nb&&nb.hide();
        Zb=null
        }
        function A(){
        if(r){
            var b={
                xAxis:[],
                yAxis:[]
            },k=r.getBBox(),m=k.x-Ia,a=k.y-La;
            b.selectionLeft=m;
            b.selectionTop=a;
            b.selectionWidth=k.width;
            b.selectionHeight=k.height;
            ya&&(T(qb,function(A){
                var N=A.translate,c=A.isXAxis,f=Pa?!c:c,h=N(f?m:Va-a-k.height,!0,0,0,1),N=N(f?m+k.width:Va-a,!0,0,0,1);
                b[c?"xAxis":"yAxis"].push({
                    axis:A,
                    min:ob(h,N),
                    max:Aa(h,N)
                    })
                }),Ha(V,"selection",b,sa.nativeZoom?
                Ec:void 0));
            r=r.destroy()
            }
            V.mouseIsDown=nc=ya=!1;
        Hb(Ca,ca?"touchend":"mouseup",A)
        }
        function h(b){
        var k=e(b.pageX)?b.pageX:b.page.x,b=e(b.pageX)?b.pageY:b.page.y,m=V.tooltip&&V.tooltip.currentConstraint();
        if(Jb)switch(m){
            case "plot":
                !pb(k-Jb.left-Ia,b-Jb.top-La)&&a();
                break;
            default:
                !mb(k-Jb.left,b-Jb.top)&&a()
                }
            }
        var ia,d,ya,r,ta=sa.zoomType,j=/x/.test(ta),qa=/y/.test(ta),ea=j&&!Pa||qa&&Pa,n=qa&&!Pa||j&&Pa;
Gb=function(){
    zb?(zb.translate(Ia,La),Pa&&zb.attr({
        width:V.plotWidth,
        height:V.plotHeight
        }).invert()):
    V.trackerGroup=zb=za.g("tracker").attr({
        zIndex:9
    }).add()
    };
    
Gb();
if(b.enabled)V.tooltip=nb=N(b);
(function(){
    Na.onmousedown=function(b){
        b=k(b);
        !ca&&b.preventDefault&&b.preventDefault();
        V.mouseIsDown=nc=!0;
        ia=b.chartX;
        d=b.chartY;
        Ea(Ca,ca?"touchend":"mouseup",A)
        };
        
    var N=function(m){
        if(!m||!(m.touches&&m.touches.length>1)){
            m=k(m);
            if(!ca)m.returnValue=!1;
            var a=m.chartX,A=m.chartY,N=!pb(a-Ia,A-La);
            Jb||(Jb=o(Na));
            ca&&m.type==="touchstart"&&(u(m.target,"isTracker")?V.runTrackerClick||m.preventDefault():!wb&&
                !N&&m.preventDefault());
            N&&(a<Ia?a=Ia:a>Ia+ab&&(a=Ia+ab),A<La?A=La:A>La+Va&&(A=La+Va));
            if(nc&&m.type!=="touchstart"){
                if(ya=Math.sqrt(Math.pow(ia-a,2)+Math.pow(d-A,2)),ya>10){
                    if($b&&(j||qa)&&pb(ia-Ia,d-La))r||(r=za.rect(Ia,La,ea?1:ab,n?1:Va,0).attr({
                        fill:sa.selectionMarkerFill||"rgba(69,114,167,0.25)",
                        zIndex:7
                    }).add());
                    r&&ea&&(a-=ia,r.attr({
                        width:na(a),
                        x:(a>0?0:a)+ia
                        }));
                    r&&n&&(A-=d,r.attr({
                        height:na(A),
                        y:(A>0?0:A)+d
                        }))
                    }
                }else if(!N){
            var c,A=V.hoverPoint,a=V.hoverSeries,f,h,e=fb,ta=Pa?m.chartY:m.chartX-
            Ia;
            if(nb&&b.shared){
                c=[];
                f=eb.length;
                for(h=0;h<f;h++)if(eb[h].visible&&eb[h].tooltipPoints.length)m=eb[h].tooltipPoints[ta],m._dist=na(ta-m.plotX),e=ob(e,m._dist),c.push(m);for(f=c.length;f--;)c[f]._dist>e&&c.splice(f,1);
                if(c.length&&c[0].plotX!==Zb)nb.refresh(c),Zb=c[0].plotX
                    }
                    if(a&&a.tracker&&(m=a.tooltipPoints[ta+((Pa?a.yShift:a.xShift)||0)])&&m!==A)m.onMouseOver()
                }
                return N||!$b
        }
    };

Na.onmousemove=N;
Ea(Na,"mouseleave",a);
Ea(Ca,"mousemove",h);
Na.ontouchstart=function(b){
    if(j||qa)Na.onmousedown(b);
    N(b)
    };
    
Na.ontouchmove=N;
Na.ontouchend=function(){
    ya&&a()
    };
    
Na.onclick=function(b){
    var a=V.hoverPoint,b=k(b);
    b.cancelBubble=!0;
    if(!ya)if(a&&u(b.target,"isTracker")){
        var A=a.plotX,N=a.plotY;
        g(a,{
            pageX:Jb.left+Ia+(Pa?ab-N:A),
            pageY:Jb.top+La+(Pa?Va-A:N)
            });
        Ha(a.series,"click",g(b,{
            point:a
        }));
        a.firePointEvent("click",b)
        }else g(b,m(b)),Ha(V,"click",b);
    ya=!1
    }
})();
cc=setInterval(function(){
    Yb&&Yb()
    },32);
g(this,{
    normalizeMouseEvent:k,
    getMouseCoordinates:m,
    zoomX:j,
    zoomY:qa,
    resetTracker:a,
    destroy:function(){
        if(V.trackerGroup)V.trackerGroup=
            zb=V.trackerGroup.destroy();
        Hb(Ca,"mousemove",h);
        Na.onclick=Na.onmousedown=Na.onmousemove=Na.ontouchstart=Na.ontouchend=Na.ontouchmove=null
        }
    })
}
function d(b){
    var k=b.type||sa.type||sa.defaultSeriesType,m=Ga[k],a=V.hasRendered;
    if(a)if(Pa&&k==="column")m=Ga.bar;
        else if(!Pa&&k==="bar")m=Ga.column;
    k=new m;
    k.init(V,b);
    !a&&k.inverted&&(Pa=!0);
    if(k.isCartesian)$b=k.isCartesian;
    eb.push(k);
    return k
    }
    function ta(){
    sa.alignTicks!==!1&&T(qb,function(b){
        b.adjustTickAmount()
        });
    Rb=null
    }
    function qa(b){
    var k=V.isDirtyLegend,
    m,a=V.isDirtyBox,A=eb.length,N=A,c=V.clipRect;
    for(ga(b,V);N--;)if(b=eb[N],b.isDirty&&b.options.stacking){
        m=!0;
        break
    }
    if(m)for(N=A;N--;)if(b=eb[N],b.options.stacking)b.isDirty=!0;T(eb,function(b){
        b.isDirty&&(b.cleanData(),b.getSegments(),b.options.legendType==="point"&&(k=!0))
        });
    if(k&&Bb.renderLegend)Bb.renderLegend(),V.isDirtyLegend=!1;
    $b&&(Mb||(Rb=null,T(qb,function(b){
        b.setScale()
        })),ta(),lc(),T(qb,function(b){
        if(b.isDirty||a)b.redraw(),a=!0
            }));
    a&&(bc(),Gb(),c&&(ac(c),c.animate({
        width:V.plotSizeX,
        height:V.plotSizeY
        })));
    T(eb,function(b){
        b.isDirty&&b.visible&&(!b.isCartesian||b.xAxis)&&b.redraw()
        });
    Tb&&Tb.resetTracker&&Tb.resetTracker();
    Ha(V,"redraw")
    }
    function n(){
    var k=b.xAxis||{},a=b.yAxis||{},A,k=w(k);
    T(k,function(b,k){
        b.index=k;
        b.isX=!0
        });
    a=w(a);
    T(a,function(b,k){
        b.index=k
        });
    qb=k.concat(a);
    V.xAxis=[];
    V.yAxis=[];
    qb=Xb(qb,function(b){
        A=new m(b);
        V[A.isXAxis?"xAxis":"yAxis"].push(A);
        return A
        });
    ta()
    }
    function va(k,m){
    ic=ka(b.title,k);
    Ub=ka(b.subtitle,m);
    T([["title",k,ic],["subtitle",m,Ub]],function(b){
        var k=
        b[0],m=V[k],a=b[1],b=b[2];
        m&&a&&(m=m.destroy());
        b&&b.text&&!m&&(V[k]=za.text(b.text,0,0,b.useHTML).attr({
            align:b.align,
            "class":"highcharts-"+k,
            zIndex:1
        }).css(b.style).add().align(b,!1,bb))
        })
    }
    function pa(){
    Ib=sa.renderTo;
    Ma=G+ja++;
    p(Ib)&&(Ib=Ca.getElementById(Ib));
    Ib.innerHTML="";
    Ib.offsetWidth||(ua=Ib.cloneNode(0),z(ua,{
        position:P,
        top:"-9999px",
        display:""
    }),Ca.body.appendChild(ua));
    Oa=(ua||Ib).offsetWidth;
    tc=(ua||Ib).offsetHeight;
    V.chartWidth=fb=sa.width||Oa||600;
    V.chartHeight=Ya=sa.height||tc||400;
    V.container=Na=$(xa,{
        className:"highcharts-container"+(sa.className?" "+sa.className:""),
        id:Ma
    },g({
        position:F,
        overflow:Fa,
        width:fb+gb,
        height:Ya+gb,
        textAlign:"left"
    },sa.style),ua||Ib);
    V.renderer=za=sa.forExport?new uc(Na,fb,Ya,!0):new j(Na,fb,Ya);
    za.lighting3D=V.options.chart.use3DLighting;
    za.smartLabel=Ua.smartLabel;
    var b,k;
    h&&Na.getBoundingClientRect&&(b=function(){
        z(Na,{
            left:0,
            top:0
        });
        k=Na.getBoundingClientRect();
        z(Na,{
            left:-(k.left-J(k.left))+gb,
            top:-(k.top-J(k.top))+gb
            })
        },b(),Ea(kb,"resize",b),
        Ea(V,"destroy",function(){
            Hb(kb,"resize",b)
            }))
    }
    function U(){
    function b(){
        var m=sa.width||Ib.offsetWidth,a=sa.height||Ib.offsetHeight;
        if(m&&a){
            if(m!==Oa||a!==tc)clearTimeout(k),k=setTimeout(function(){
                Fc(m,a,!1)
                },100);
            Oa=m;
            tc=a
            }
        }
    var k;
Ea(kb,"resize",b);
Ea(V,"destroy",function(){
    Hb(kb,"resize",b)
    })
}
function v(){
    Ha(V,"endResize",null,function(){
        Mb-=1
        })
    }
    function x(){
    var b=this.options.chart.canvasBaseColor3D,k=this.options.chart.canvasBaseDepth,m=this.options.chart.canvasBgDepth,a=this.options.chart.canvasBgColor,
    A=this.renderer,N=this.options.chart.defaultSeriesType,c=this.xDepth,f=this.yDepth;
    if(this.options.chart.showCanvasBase)this.base3D=N==="bar3d"?A.rect3d(this.plotLeft-c-k,this.plotTop+f,k,this.plotHeight,c,f,0,"canvasBase3D"):A.rect3d(this.plotLeft-c,this.plotTop+this.plotHeight+f,this.plotWidth,k,c,f,0,"canvasBase3D"),this.base3D.attr({
        fill:b,
        lighting3D:this.options.chart.use3DLighting
        }).add();
    if(this.options.chart.showCanvasBg)jc.depth3D=N==="bar3d"?A.path(["M",this.plotLeft,this.plotTop,"L",this.plotLeft+
        m*1.2,this.plotTop-m,this.plotLeft+this.plotWidth-m,this.plotTop-m,this.plotLeft+this.plotWidth,this.plotTop,"Z"]).attr({
        fill:a
    }).add():A.path(["M",this.plotLeft+this.plotWidth,this.plotTop,"L",this.plotLeft+this.plotWidth+m,this.plotTop+m*1.2,this.plotLeft+this.plotWidth+m,this.plotTop+this.plotHeight-m,this.plotLeft+this.plotWidth,this.plotTop+this.plotHeight,"Z"]).attr({
        fill:a
    }).add()
        }
        function mc(){
    var k=b.labels,m=b.credits,N,c={},f;
    va();
    Bb=V.legend=new xc;
    lc();
    T(qb,function(b){
        b.setTickPositions(!0)
        });
    ta();
    lc();
    bc();
    $b&&T(qb,function(b){
        b.render()
        });
    if(!V.seriesGroup)V.seriesGroup=za.g("series-group").attr({
        zIndex:3
    }).add();
    T(eb,function(k){
        k.translate();
        k.setTooltipPoints();
        b.chart.is3D?(f=k.type,c[f]||(c[f]=[]),c[f].push(k)):k.render()
        });
    if(b.chart.is3D)V.xDepth=X(b.chart.xDepth,10),V.yDepth=X(b.chart.yDepth,10),x.call(V),xb(V,c);
    k.items&&T(k.items,function(){
        var b=g(k.style,this.style),m=J(b.left)+Ia,a=J(b.top)+La;
        delete b.left;
        delete b.top;
        b=za.text(this.html,m,a).attr({
            zIndex:X(this.zIndex,
                2),
            align:C(this.textAlign,"left")
            }).css(b).add();
        this.vAlign==="bottom"&&b.attr({
            y:a-b.getBBox().height
            });
        this.vAlign==="middle"&&b.attr({
            y:a-b.getBBox().height/2
            })
        });
    if(!V.toolbar)V.toolbar=a(V);
    if(m.enabled&&!V.credits)N=m.href,za.text(m.text,0,0).on("click",function(){
        if(N)location.href=N
            }).attr({
        align:m.position.align,
        zIndex:8
    }).css(m.style).add().align(m.position);
    Gb();
    if(b.buttons)for(var h in b.buttons)V.addButton(b.buttons[h]);if(b.subCharts&&b.subCharts.length&&!za.forExport)V.subCharts=
        [],T(b.subCharts,function(k){
            var m=k.chart;
            m.renderTo=$(xa,null,{
                position:"relative",
                background:"transparent",
                left:m.left+gb,
                top:(Db&&!r?m.top:m.top-Ya)+gb,
                width:m.width+gb,
                height:m.height+gb
                },Na);
            g(k,{
                instanceAPI:b.instanceAPI
                });
            V.subCharts.push(new $a(k))
            });
    b.chart.hasScroll&&$b&&T(qb,function(b){
        var k=b.options.scroll;
        k&&k.enabled&&b.scroll(k.startPercent,!1,!0)
        });
    V.hasRendered=!0;
    ua&&(Ib.appendChild(Na),Y(ua))
    }
    function ub(){
    var b,k=Na&&Na.parentNode;
    if(V!==null){
        Ha(V,"destroy");
        Hb(kb,"unload",
            ub);
        Hb(V);
        for(b=qb.length;b--;)qb[b]=qb[b].destroy();
        for(b=eb.length;b--;)eb[b]=eb[b].destroy();
        T(["title","subtitle","seriesGroup","clipRect","credits","tracker"],function(b){
            var k=V[b];
            k&&(V[b]=k.destroy())
            });
        T([Ba,ib,jc,Bb,nb,za,Tb],function(b){
            b&&b.destroy&&b.destroy()
            });
        Ba=ib=jc=Bb=nb=za=Tb=null;
        if(Na)Na.innerHTML="",Hb(Na),k&&Y(Na),Na=null;
        clearInterval(cc);
        for(b in V)delete V[b];V=null
        }
    }
function L(){
    !r&&kb==kb.top&&Ca.readyState!=="complete"?Ca.attachEvent("onreadystatechange",function(){
        Ca.detachEvent("onreadystatechange",
            L);
        Ca.readyState==="complete"&&L()
        }):(Ua.hcInstance=V,pa(),ec(),hc(),T(b.series||[],function(b){
        d(b)
        }),V.inverted=Pa=t(Pa,b.chart.inverted),n(),V.render=mc,V.tracker=Tb=new c(b.tooltip),mc(),Ha(V,"load"),T(V.callbacks,function(b){
        b.apply(V,[V,Ua])
        }),T(b.callbacks,function(b){
        b.apply(V,[V,Ua])
        }))
    }
    rc=ka(rc,s.xAxis);
Cc=ka(Cc,s.yAxis);
s.xAxis=s.yAxis=null;
b=ka(s,b);
k&&b.callbacks.push(k);
var sa=b.chart,Ja=sa.margin,Ja=aa(Ja)?Ja:[Ja,Ja,Ja,Ja],W=t(sa.marginTop,Ja[0]),ha=t(sa.marginRight,Ja[1]),gc=t(sa.marginBottom,
    Ja[2]),vb=t(sa.marginLeft,Ja[3]),Kb=sa.spacingTop,Gc=sa.spacingRight,Hc=sa.spacingBottom,vc=sa.spacingLeft,bb,ic,Ub,La,Sb,oa,Ia,Ka,Ib,ua,Na,Ma,Oa,tc,fb,Ya,Dc,sc,Ba,jc,Eb,Ua=b.instanceAPI,Sa,Ta,db,Ab,mb,ib,V=this,wb=(Ja=sa.events)&&!!Ja.click,sb,pb,nb,nc,rb,Fb,Cb,Va,ab,Tb,zb,Gb,Bb,yb,Qb,Jb,$b=sa.showAxes,Mb=0,qb=[],Rb,eb=[],Pa,za,Yb,cc,Zb,bc,lc,ec,hc,Fc,Ec,oc,xc=function(){
    function b(k){
        var m=k.pageX+o.dragOffsetX,k=k.pageY+o.dragOffsetY;
        if(m<o.movementBoundaryOrigin)m=o.movementBoundaryOrigin;
        else if(m>
            o.movementBoundaryX)m=o.movementBoundaryX;
        if(k<o.movementBoundaryOrigin)k=o.movementBoundaryOrigin;
        else if(k>o.movementBoundaryY)k=o.movementBoundaryY;
        o.translate(m,k)
        }
        function k(b,m){
        var a=b.legendItem,A=b.legendLine,N=b.legendSymbol,f=ta.color,ia=m?c.itemStyle.color:f,d=m?b.color:f,e=b.customSymbol,f=m?b.pointAttr[hb]:{
            stroke:f,
            fill:f
        };
        
        a&&a.css({
            fill:ia
        });
        A&&A.attr({
            stroke:d,
            "stroke-width":2,
            "stroke-opacity":1
        });
        N&&(N.attr(f),N.attr({
            r:Pb(h/(A?4:2)),
            "stroke-width":1,
            "stroke-opacity":1,
            "fill-opacity":1
        }));
        e&&e.attr(m?e.symbolAttr:f)
        }
        function m(b,k,a){
        var A=b.legendItem,c=b.legendLine,N=b.legendSymbol,f=b.checkbox,h=b.customSymbol,ia=b.legendLabelHeight;
        A&&A.align({
            x:k,
            y:a,
            height:ia,
            verticalAlign:"middle"
        },!0,{
            height:b.legendItemHeight
            });
        c&&c.translate(k,a);
        N&&N.attr({
            x:k+ca,
            y:a+t
            });
        h&&b.customSymbol.translate(k,a);
        if(f)f.x=k,f.y=a
            }
            function a(){
        T(d,function(b){
            var k=b.checkbox,m=I.alignAttr;
            k&&z(k,{
                left:m.translateX+b.legendItemWidth+k.x-40+gb,
                top:m.translateY+k.y-11+gb
                })
            })
        }
        function A(b){
        var a,N,d,
        e=b.legendItem,g=b.series||b;
        a=g.options;
        if(!e){
            d=/^(bar|pie|pie3d|area|column|column3d|bar3d|floatedcolumn|radar|funnel|pyramid)$/.test(g.type);
            b.legendItem=e=za.text(c.labelFormatter.call(b),0,0).css(b.visible?ya:ta).on("mouseover",function(){
                b.setState(Z);
                e.css(r)
                }).on("mouseout",function(){
                e.css(b.visible?ya:ta);
                b.setState()
                }).on("click",function(){
                var k=function(){
                    b.setVisible(void 0,!1)
                    };
                    
                if(I.dragActive)return delete I.dragActive,!1;
                b.firePointEvent?b.firePointEvent("legendItemClick",null,k):
                Ha(b,"legendItemClick",null,k)
                }).attr({
                zIndex:2
            }).add(I);
            if(!d&&a&&a.lineWidth){
                var qa={
                    "stroke-width":a.lineWidth,
                    zIndex:2
                };
                
                if(a.dashStyle)qa.dashstyle=a.dashStyle;
                b.legendLine=za.path([K,p,t,M,p+h,t]).attr(qa).add(I)
                }
                d?(d=D(p,v,h,h,g.type,b,za),b.customSymbol=za.path(d.path).attr({
                "stroke-width":d.strokeWidth,
                zIndex:3
            }).add(I),b.customSymbol.symbolAttr={
                stroke:d.strokeColor,
                fill:d.color
                }):a&&a.marker&&a.marker.enabled&&(N=za.symbol(b.symbol,ca,t,h/2).attr({
                zIndex:3
            }).add(I));
            b.legendSymbol=N;
            k(b,
                b.visible);
            if(N=N||b.customSymbol)N.css(c.symbolStyle).on("click",function(){
                Ha(e.element,"click")
                });
            if(a&&a.showCheckbox)b.checkbox=$("input",{
                type:"checkbox",
                checked:b.selected,
                defaultChecked:b.selected
                },c.itemCheckboxStyle,Na),Ea(b.checkbox,"click",function(k){
                Ha(b,"checkboxClick",{
                    checked:k.target.checked
                    },function(){
                    b.select()
                    })
                })
            }
            a=e.getBBox();
        N=b.legendItemWidth=c.itemWidth||h+ia+a.width+j;
        sa=b.legendItemHeight=Aa(a.height,ra);
        b.legendLabelHeight=a.height;
        b.symbolSize=h;
        b.lineHeight=ra;
        if(f)if(ra&&
            wa){
            for(;l[ja]===!0;)ja+=1;
            x=tb(ja/wa);
            Vb=ja%wa;
            x>Nb&&(Ja+=ra*(x-Nb),Nb=x);
            y=q+Vb*N;
            l[ja]=!0;
            P=sa/ra;
            u=ja;
            for(G=0;G<P;G+=1,u+=wa)l[u]=!0
                }else if(y-q+N>(ub||fb-2*j-q))y=q,Ja+=sa;
        E=Ja;
        m(b,y,Ja);
        f?y+=N:Ja+=sa;
        Ob=ub||Aa(f?y-q:N,Ob)
        }
        function N(){
        var k=Fa*0.5;
        y=q;
        Ja=n;
        E=Ob=0;
        if(!I){
            var m,h,ia;
            s&&s.enabled?(o=za.g("legend-box").attr({
                zIndex:10
            }).add(),m=qa+k,h=B=ub-s.scrollBarWidth-s.scrollBarPadding,ia=F-qa-Fa,m=za.clipRect(0,m,h,ia),O=za.g("legend-container").attr({
                zIndex:1
            }).clip(m).add(o),I=za.g("legend").add(O),
                za.scroller(h+qa-k,k,10,ia+1,!1,!1,!1,o).attr({
                    zIndex:3,
                    fill:c.legendScrollBgColor
                    }).setScrollRatio((ia+j)/c.totalHeight).callback(function(b){
                    I.translate(0,(ia-c.totalHeight)*b)
                    }).add(o)):O=o=I=za.g("legend").attr({
                zIndex:10
            }).add();
            c.legendAllowDrag&&(o.css({
                cursor:"move"
            }),Ea(o.element,"dragstart dragend",function(b){
                o.movementBoundaryOrigin=Fa||0;
                o.movementBoundaryX=fb-ub-o.movementBoundaryOrigin;
                o.movementBoundaryY=Ya-F-o.movementBoundaryOrigin;
                o.dragOffsetX=o.attr("translateX")-b.pageX;
                o.dragOffsetY=
                o.attr("translateY")-b.pageY;
                o.dragActive=!0;
                nb&&nb.block(b.type==="dragstart")
                }),Ea(o.element,"drag",b))
            }
            c.title&&c.title.text!==jb&&(U=za.text(c.title.text,0,0).css(c.title.style).attr({
            zIndex:2,
            align:"center"
        }).add(I),k=U.getBBox(),U.align({
            align:"center",
            verticalAlign:"top",
            y:Ja
        },!1,{
            x:0,
            y:0,
            width:B,
            height:k.height
            }),Ja+=(k.height||0)+va);
        d=[];
        T(C,function(b){
            var k=b.options;
            k.showInLegend&&(k.legendType==="point"?T(b.data,function(b){
                b.showInLegend&&(d=d.concat(b))
                }):d=d.concat(b))
            });
        Lb(d,function(b,
            k){
            return(b.options.legendIndex||0)-(k.options.legendIndex||0)
            });
        w&&d.reverse();
        T(d,A);
        yb=ub||Ob;
        Qb=E-n+sa;
        if(Fa||Da){
            if(xa){
                if(yb>0&&Qb>0)xa[xa.isNew?"attr":"animate"](xa.crisp(null,null,null,yb,F)),xa.isNew=!1
                    }else xa=za.rect(0,0,yb,F,c.borderRadius,Fa||0).attr({
                stroke:c.borderColor,
                "stroke-width":Fa||0,
                fill:Da||lb
                }).add(o).shadow(c.shadow,void 0,c.shadow),xa.isNew=!0;
            xa[d.length?"show":"hide"]()
            }
            k=["left","right","top","bottom"];
        for(m=4;m--;)h=k[m],e[h]&&e[h]!=="auto"&&(c[m<2?"align":"verticalAlign"]=
            h,c[m<2?"x":"y"]=J(e[h])*(m%2?-1:1));
        if(!f)c.y=(V.options.chart.marginTop-V.options.chart.marginBottom)/2;
        o.align(g(c,{
            width:yb,
            height:F
        }),!0,bb);
        Mb||a()
        }
        var c=V.options.legend;
    if(c.enabled){
        var f=c.layout==="horizontal",h=c.symbolWidth,ia=c.symbolPadding,d,e=c.style,ya=c.itemStyle,r=c.itemHoverStyle,ta=c.itemHiddenStyle,j=c.padding||4,qa=j*0.5,ea=J(ya.fontSize)||10,n=ea+j,va=c.title.padding,pa=c.textPadding,q=pa+j+h+2*ia+c.initialItemX,s=c.scroll,U,p=-pa-ia-h,v=-ea+ia,ca=-pa-ia-h/2,t=-ea+ia+h/2,
        O,o,l=[],ja=0,Nb=0,ra=c.rowHeight,wa=c.legendNumColumns,x,Vb,P,u,G,F=c.height,y,Ja,E,sa=0,xa,Fa=c.borderWidth,Da=c.backgroundColor,I,Ob,ub=c.width,B=ub,C=V.series,w=c.reversed;
        N();
        Ea(V,"endResize",a);
        return{
            colorizeItem:k,
            destroyItem:function(b){
                var k=b.checkbox;
                T(["legendItem","legendLine","legendSymbol"],function(k){
                    b[k]&&b[k].destroy()
                    });
                k&&Y(b.checkbox)
                },
            renderLegend:N,
            destroy:function(){
                xa&&(xa=xa.destroy());
                I&&(I=I.destroy())
                }
            }
    }
};

pb=function(b,k){
    return b>=0&&b<=ab&&k>=0&&k<=Va
    };
    
mb=function(b,
    k){
    return b>=0&&b<=fb&&k>=0&&k<=Ya
    };
    
oc=function(){
    Ha(V,"selection",{
        resetSelection:!0
        },Ec);
    V.toolbar.remove("zoom")
    };
    
Ec=function(b){
    var k=s.lang,m=V.pointCount<100;
    V.toolbar.add("zoom",k.resetZoom,k.resetZoomTitle,oc);
    !b||b.resetSelection?T(qb,function(b){
        b.setExtremes(null,null,!1,m)
        }):T(b.xAxis.concat(b.yAxis),function(b){
        var k=b.axis;
        V.tracker[k.isXAxis?"zoomX":"zoomY"]&&k.setExtremes(b.min,b.max,!1,m)
        });
    qa()
    };
    
lc=function(){
    var k=b.legend,m=t(k.margin,10),a=k.x,A=k.y,N=k.align,c=k.verticalAlign,
    f;
    ec();
    if((V.title||V.subtitle)&&!e(W))(f=Aa(V.title&&!ic.floating&&!ic.verticalAlign&&ic.y||0,V.subtitle&&!Ub.floating&&!Ub.verticalAlign&&Ub.y||0))&&(La=Aa(La,f+t(ic.margin,15)+Kb));
    k.enabled&&!k.floating&&(N==="right"?e(ha)||(Sb=Aa(Sb,yb-a+m+Gc)):N==="left"?e(vb)||(Ia=Aa(Ia,yb+a+m+vc)):c==="top"?e(W)||(La=Aa(La,Qb+A+m+Kb)):c==="bottom"&&(e(gc)||(oa=Aa(oa,Qb-A+m+Hc))));
    $b&&T(qb,function(b){
        b.getOffset()
        });
    e(vb)||(Ia+=Ka[3]);
    e(W)||(La+=Ka[0]);
    e(gc)||(oa+=Ka[2]);
    e(ha)||(Sb+=Ka[1]);
    hc()
    };
    
Fc=function(b,
    k,m){
    var a=V.title,A=V.subtitle;
    Mb+=1;
    ga(m,V);
    sc=Ya;
    Dc=fb;
    V.chartWidth=fb=S(b);
    V.chartHeight=Ya=S(k);
    z(Na,{
        width:fb+gb,
        height:Ya+gb
        });
    za.setSize(fb,Ya,m);
    ab=fb-Ia-Sb;
    Va=Ya-La-oa;
    Rb=null;
    T(qb,function(b){
        b.isDirty=!0;
        b.setScale()
        });
    T(eb,function(b){
        b.isDirty=!0
        });
    V.isDirtyLegend=!0;
    V.isDirtyBox=!0;
    lc();
    a&&a.align(null,null,bb);
    A&&A.align(null,null,bb);
    qa(m);
    sc=null;
    Ha(V,"resize");
    O===!1?v():setTimeout(v,O&&O.duration||500)
    };
    
hc=function(){
    V.plotLeft=Ia=S(Ia);
    V.plotTop=La=S(La);
    V.plotWidth=ab=S(fb-Ia-
        Sb);
    V.plotHeight=Va=S(Ya-La-oa);
    V.plotSizeX=Pa?Va:ab;
    V.plotSizeY=Pa?ab:Va;
    bb={
        x:vc,
        y:Kb,
        width:fb-vc-Gc,
        height:Ya-Kb-Hc
        }
    };

ec=function(){
    La=t(W,Kb);
    Sb=t(ha,Gc);
    oa=t(gc,Hc);
    Ia=t(vb,vc);
    Ka=[0,0,0,0]
    };
    
bc=function(){
    var b=sa.borderWidth||0,k=sa.backgroundColor,m=sa.plotBackgroundColor,a=sa.plotBackgroundImage,A=sa.bgSWF,N=sa.bgSWFAlpha/100,c=sa.bgImageDisplayMode,f=sa.bgImageVAlign,h=sa.bgImageHAlign,ia=sa.bgImageScale,d=sa.logoURL,e=sa.logoAlpha/100,ya=sa.logoPosition,r=sa.logoLink,ta=sa.logoScale,j=sa.logoLeftMargin,
    g=sa.logoTopMargin,qa,ea,n={
        x:Ia,
        y:La,
        width:ab,
        height:Va
    };
    
    qa=b+(sa.shadow?8:0);
    ea=qa%2;
    if(b||k)Ba?Ba.animate(Ba.crisp(null,null,null,fb-qa,Ya-qa)):Ba=za.rect(qa/2,qa/2,fb-qa+ea,Ya-qa+ea,sa.borderRadius,b).attr({
        stroke:sa.borderColor,
        "stroke-width":b,
        fill:k||lb
        }).add().shadow(sa.shadow,void 0,sa.shadow);
    k=za.clipRect(b,b,fb-b*2,Ya-b*2);
    if(A&&!Sa){
        var va=new Image,pa,q=1,s=1,U,p;
        Ta||(Ta=za.g("group").attr({
            visibility:Fa
        }).clip(k).add());
        va.onload=function(){
            pa=l(c,f,h,ia,b,fb,Ya,va);
            Sa=[];
            if(pa.tileInfo){
                q=
                pa.tileInfo.xCount;
                s=U=pa.tileInfo.yCount;
                p=pa.y;
                for(delete pa.tileInfo;q;U-=1){
                    if(U==0)U=s,q-=1,pa.x+=pa.width,pa.y=p;
                    Sa[void 0]=za.image(A).attr(pa).css({
                        opacity:N
                    }).add(Ta.attr({
                        visibility:Da
                    }));
                    pa.y+=pa.height
                    }
                }else Sa[0]=za.image(A).attr(pa).css({
            opacity:N
        }).add(Ta.attr({
            visibility:Da
        }))
        };
        
    va.src=A
    }
    m&&(jc?jc.animate(n):jc=za.rect(Ia,La,ab,Va,X(sa.plotBorderRadius,0)).attr({
    fill:m
}).add().shadow(sa.plotShadow,void 0,sa.plotShadow));
a&&(Eb?Eb.animate(n):Eb=za.image(a,Ia,La,ab,Va).add());
if(sa.plotBorderWidth)m=
    sa.plotBorderWidth,a=m*0.5,a={
        x:Ia-a,
        y:La-a,
        width:ab+m,
        height:Va+m,
        r:X(sa.plotBorderRadius,0)
        },ib?ib.animate(ib.crisp(null,a.x,a.y,a.width,a.height)):ib=za.rect(a.x,a.y,a.width,a.height,a.r,m).attr({
        stroke:sa.plotBorderColor,
        "stroke-width":m,
        "stroke-linejoin":"round",
        zIndex:2
    }).add();
if(d&&!db){
    var o=new Image,v,ca,t,O;
    switch(ya){
        case "tr":
            ca=Q;
            t=Ra;
            break;
        case "bl":
            ca=Xa;
            t=da;
            break;
        case "br":
            ca=Xa;
            t=Ra;
            break;
        case "cc":
            t=ca=kc;
            break;
        default:
            ca=Q,t=da
            }
            Ab||(Ab=za.g("group").attr({
        visibility:Fa,
        zIndex:7
    }).clip(k).add());
    r&&(O=za.rect(0,0,1,1,0).attr({
        isTracker:!0,
        stroke:Za,
        fill:Za,
        "stroke-width":0,
        visibility:Da,
        zIndex:10
    }).css({
        cursor:"pointer",
        _cursor:"hand"
    }).on("mouseover",function(){
        V.tooltip&&V.tooltip.hide()
        }).on("click",function(){
        sa.events.click.call({
            link:r
        })
        }).add());
    o.onload=function(){
        v=l("none",ca,t,ta,b,fb,Ya,o);
        db=za.image(d).attr(v).translate(j,g).css({
            opacity:e
        }).add(Ab.attr({
            visibility:Da
        }));
        if(r)v.r=0,O.attr(v)
            };
            
    o.src=d
    }
    V.isDirtyBox=!1
};

Ea(kb,"unload",ub);
sa.reflow!==!1&&Ea(V,"load",U);
if(Ja)for(sb in Ja)Ea(V,
    sb,Ja[sb]);V.options=b;
V.series=eb;
V.addSeries=function(b,k,m){
    var a;
    b&&(ga(m,V),k=t(k,!0),Ha(V,"addSeries",{
        options:b
    },function(){
        a=d(b);
        a.isDirty=!0;
        V.isDirtyLegend=!0;
        k&&V.redraw()
        }));
    return a
    };
    
V.animation=t(sa.animation,!0);
V.destroy=ub;
V.get=function(b){
    var k,m,a;
    for(k=0;k<qb.length;k++)if(qb[k].options.id===b)return qb[k];for(k=0;k<eb.length;k++)if(eb[k].options.id===b)return eb[k];for(k=0;k<eb.length;k++){
        a=eb[k].data;
        for(m=0;m<a.length;m++)if(a[m].id===b)return a[m]
            }
            return null
    };
    
V.getSelectedPoints=
function(){
    var b=[];
    T(eb,function(k){
        b=b.concat(ma(k.data,function(b){
            return b.selected
            }))
        });
    return b
    };
    
V.getSelectedSeries=function(){
    return ma(eb,function(b){
        return b.selected
        })
    };
    
V.hideLoading=function(){
    wc(rb,{
        opacity:0
    },{
        duration:b.loading.hideDuration,
        complete:function(){
            z(rb,{
                display:lb
            })
            }
        });
Cb=!1
};

V.isInsidePlot=pb;
V.redraw=qa;
V.setSize=Fc;
V.setTitle=va;
V.showLoading=function(k){
    var m=b.loading,a=m.labelStyle;
    rb||(rb=$(xa,{
        className:"highcharts-loading"
    },g(m.style,{
        left:0,
        top:0,
        width:fb+gb,
        height:Ya+gb,
        zIndex:22,
        display:lb
    }),Na),g(a,{
        top:Ya/2-3+gb
        }),Fb=$("span",null,a,rb));
    Fb.innerHTML=k||b.lang.loading;
    Cb||(z(rb,{
        opacity:0,
        display:""
    }),wc(rb,{
        opacity:m.style.opacity
        },{
        duration:m.showDuration
        }),Cb=!0)
    };
    
V.pointCount=0;
V.counters=new y;
L()
}
function Oa(b,k,m,a,N,c){
    var f=fa.atan((k-a)/(b-m)),h=[];
    f<0&&(f=2*fa.PI+f);
    if(a>k){
        if(m>=b&&f>fa.PI||m<b&&f>fa.PI)f-=fa.PI
            }else if(m>=b&&f<fa.PI&&f!=0||m<b&&f<fa.PI)f+=fa.PI;
    typeof c=="undefined"?(m=b+N*ua(f),N=k+N*Ba(f)):(N=na(N)/2,c=na(c)/2,m=b+
        (N=b<m?N:-N),N=k+N*fa.tan(f),na(k-N)>na(c)&&(N=k+(c=k<a?c:-c),m=b+c/fa.tan(f)));
    h.push(K);
    h.push(m+10*ua(f+0.79));
    h.push(N+10*Ba(f+0.79));
    h.push(M);
    h.push(m);
    h.push(N);
    h.push(m+10*ua(f-0.79));
    h.push(N+10*Ba(f-0.79));
    return h
    }
    var L=FusionCharts(["private","modules.renderer.highcharts-src"]);
if(L!==void 0){
    var L=L.hcLib,C=L.pluck,X=L.pluckNumber,oa=L.graphics.getDarkColor,Sa=L.graphics.getLightColor,pb=L.graphics.convertColor,db=L.graphics.getAngle,Ta=L.regex.dropHash,nb=L.regex.startsRGBA,yb=L.regex.hexcode,
    ib=L.HASHSTRING,jb=L.BLANKSTRING,l=L.setImageDisplayMode,Q=L.POSITION_TOP,Ra=L.POSITION_RIGHT,Xa=L.POSITION_BOTTOM,da=L.POSITION_LEFT,kc=L.POSITION_MIDDLE,rb=L.getValidValue,cc=L.toPrecision,dc=L.COLOR_TRANSPARENT,Fb=L.getFirstColor,sb=L.COMMASTRING,Ma={
        column3d:function(b,k){
            var m,a,c=0,f,h,d,e=[];
            m=0;
            for(a=b.length;m<a;m+=1)c=Aa(b[m].data.length,c);
            if(c>0){
                h=b[0];
                k=h.chart;
                h.initGroup();
                d=k.column3DStacked=C(h.options.stacking,k.options.plotOptions.column3d&&k.options.plotOptions.column3d.stacking,
                    k.options.plotOptions.series.stacking)!==void 0?!0:!1;
                for(m=0;m<c;m+=1){
                    f=0;
                    for(a=b.length;f<a;f+=1)h=b[f],(h=h.data[m])&&h.y!==null&&(h.y<0&&d?e.push(f):b[f].drawNthPoint(m));
                    if(d)for(a=e.length-1;a>=0;a-=1)b[e.pop()].drawNthPoint(m)
                        }
                        f=0;
                for(a=b.length;f<a;f+=1)b[f].render()
                    }
                },
    bar3d:function(b,k){
        var m,a,c=0,f,h,d=[];
        m=0;
        for(a=b.length;m<a;m+=1)c=Aa(b[m].data.length,c);
        if(c>0){
            f=b[0];
            k=f.chart;
            f.initGroup();
            h=k.column3DStacked=C(f.options.stacking,k.options.plotOptions.column3d&&k.options.plotOptions.column3d.stacking,
                k.options.plotOptions.series.stacking)!==void 0?!0:!1;
            for(m=c-1;m>=0;m-=1){
                c=0;
                for(a=b.length;c<a;c+=1)f=b[c],(f=f.data[m])&&f.y!==null&&(f.y<=0&&h?d.push(c):b[c].drawNthPoint(m));
                if(h)for(a=d.length-1;a>=0;a-=1)b[d.pop()].drawNthPoint(m)
                    }
                    c=0;
            for(a=b.length;c<a;c+=1)b[c].render()
                }
            },
common:function(){}
},ec={
    column3d:!0,
    bar3d:!0,
    area3d:!0,
    line3d:!0
    },xb=function(b,k,m){
    var a=0,c=0,f=0,h=0,d=0,e,r=b.xDepth,j=b.yDepth,g=b.options.chart.series2D3Dshift,n=0,q=0;
    if(k.column3d)a=k.column3d.length;
    if(k.bar3d)h=
        k.bar3d.length;
    if(k.area3d)c=k.area3d.length;
    if(k.line3d)f=k.line3d.length;
    d=m?(a?1:0)+(h?1:0)+(c?1:0)+(f?1:0):(a?1:0)+(h?1:0)+c+f;
    b.num3dSeriesType=d;
    q=n=0;
    a=j/d;
    r/=d;
    for(e in k)if(ec[e]){
        c=k[e];
        f=e==="column3d"||e==="bar3d"||m?!1:!0;
        n+=r;
        q+=a;
        d=0;
        for(h=c.length;d<h;d+=1)j=c[d],j.depthXDisplacement=-n,j.depthYDisplacement=q,f?(n+=j.xDepth=r,q+=j.yDepth=a):(j.xDepth=r,j.yDepth=a);
        d=Ma[e]?Ma[e]:Ma.common;
        d(c,b);
        delete k[e]
    }
    for(e in k){
        a=b.plotLeft-n;
        r=g?b.plotTop+q:b.plotTop;
        d=0;
        for(m=k[e].length;d<
            m;d+=1)k[e][d].options.zIndex=4,k[e][d].render(),k[e][d].group.translate(a,r)
            }
        },Ca=document,kb=window,fa=Math,S=fa.round,tb=fa.floor,Pb=fa.ceil,Aa=fa.max,ob=fa.min,na=fa.abs,ua=fa.cos,Ba=fa.sin,mb=fa.PI,Gb=mb/180,Qb=fa.atan2,Mb=mb/2,Zb=mb*1.5,Bb=mb*2,Cb=navigator.userAgent,Db=/msie/i.test(Cb)&&!kb.opera,zb=Ca.documentMode===8,f=/AppleWebKit/.test(Cb),h=/Firefox/.test(Cb),r=!!Ca.createElementNS&&!!Ca.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,c=h&&parseInt(Cb.split("Firefox/")[1],
    10)<4,j,ca=Ca.documentElement.ontouchstart!==void 0,U={},ja=0,q=1,v,s,ra,O,n,wa,xa="div",P="absolute",F="relative",Fa="hidden",G="highcharts-",Da=zb?"visible":"",gb="px",lb="none",K="M",M="L",Za="rgba(192,192,192,"+(r?1.0E-6:0.0020)+")",hb="",Z="hover",pc,yc,zc,Ac,I,ba,qc,Ic,la,Bc,Jc,Kc,W=kb.HighchartsAdapter,ha=W||{},T=ha.each,ma=ha.grep,Xb=ha.map,ka=ha.merge,Ea=ha.addEvent,Hb=ha.removeEvent,Ha=ha.fireEvent,wc=ha.animate,ac=ha.stop,Ga={};

ra=function(b,k,m){
    function a(b){
        return b.toString().replace(/^([0-9])$/,
            "0$1")
        }
        if(!e(k)||isNaN(k))return"Invalid date";
    var b=t(b,"%Y-%m-%d %H:%M:%S"),k=new Date(k*q),c,f=k[zc](),h=k[Ac](),d=k[I](),r=k[ba](),j=k[qc](),g=s.lang,n=g.weekdays,k={
        a:n[h].substr(0,3),
        A:n[h],
        d:a(d),
        e:d,
        b:g.shortMonths[r],
        B:g.months[r],
        m:a(r+1),
        y:j.toString().substr(2,2),
        Y:j,
        H:a(f),
        I:a(f%12||12),
        l:f%12||12,
        M:a(k[yc]()),
        p:f<12?"AM":"PM",
        P:f<12?"am":"pm",
        S:a(k.getSeconds())
        };
        
    for(c in k)b=b.replace("%"+c,k[c]);return m?b.substr(0,1).toUpperCase()+b.substr(1):b
    };
    
y.prototype={
    wrapColor:function(b){
        if(this.color>=
            b)this.color=0
            },
    wrapSymbol:function(b){
        if(this.symbol>=b)this.symbol=0
            }
        };

n={
    init:function(b,k,m){
        var k=k||"",a=b.shift,c=k.indexOf("C")>-1,f=c?7:3,h,k=k.split(" "),m=[].concat(m),d,e,r=function(b){
            for(h=b.length;h--;)b[h]===K&&b.splice(h+1,0,b[h+1],b[h+2],b[h+1],b[h+2])
                };
                
        c&&(r(k),r(m));
        b.isArea&&(d=k.splice(k.length-6,6),e=m.splice(m.length-6,6));
        if(a)m=[].concat(m).splice(0,f).concat(m),b.shift=!1;
        if(k.length)for(b=m.length;k.length<b;)a=[].concat(k).splice(k.length-f,f),c&&(a[f-6]=a[f-2],a[f-5]=
            a[f-1]),k=k.concat(a);
        d&&(k=k.concat(d),m=m.concat(e));
        return[k,m]
        },
    step:function(b,k,m,a){
        var c=[],f=b.length;
        if(m===1)c=a;
        else if(f===k.length&&m<1)for(;f--;)a=parseFloat(b[f]),c[f]=isNaN(a)?b[f]:m*parseFloat(k[f]-a)+a;else c=k;
        return c
        }
    };

W&&W.init&&W.init(n);
if(!W&&kb.jQuery){
    var Ab=jQuery,T=L.each=function(b,k){
        for(var m=0,a=b.length;m<a;m++)if(k.call(b[m],b[m],m,b)===!1)return m
            },ma=Ab.grep,Xb=function(b,k){
        for(var m=[],a=0,c=b.length;a<c;a++)m[a]=k.call(b[a],b[a],a,b);
        return m
        },ka=L.merge=function(){
        var b=
        arguments;
        return Ab.extend(!0,null,b[0],b[1],b[2],b[3])
        },Ea=function(b,k,m,a){
        Ab(b).bind(k,a,m)
        },Hb=function(b,k,m){
        var a=Ca.removeEventListener?"removeEventListener":"detachEvent";
        Ca[a]&&!b[a]&&(b[a]=function(){});
        Ab(b).unbind(k,m)
        },Ha=function(b,k,m,a){
        var c=Ab.Event(k),f="detached"+k;
        g(c,m);
        b[k]&&(b[f]=b[k],b[k]=null);
        Ab(b).trigger(c);
        b[f]&&(b[k]=b[f],b[f]=null);
        a&&!c.isDefaultPrevented()&&a(c)
        },wc=function(b,k,m){
        var a=Ab(b);
        if(k.d)b.toD=k.d,k.d=1;
        a.stop();
        a.animate(k,m)
        },ac=function(b){
        Ab(b).stop()
        };
    Ab.extend(Ab.easing,{
        easeOutQuad:function(b,k,m,a,c){
            return-a*(k/=c)*(k-2)+m
            }
        });
var W=jQuery.fx,ha=W.step,nc=W.prototype.cur;
T([[ha,"_default"],[ha,"width"],[ha,"height"],[W.prototype,"cur"]],function(b){
    var k,a=b[0],A=b[1],c=a[A],f;
    c&&(a[A]=function(b){
        A==="cur"&&(b=this);
        f=b.elem;
        return k=f.attr?f.attr(b.prop,b.now):c.apply(this,arguments)
        })
    });
ha.d=function(b){
    var k=b.elem;
    if(!b.started){
        var a=n.init(k,k.d,k.toD);
        b.start=a[0];
        b.end=a[1];
        b.started=!0
        }
        k.attr("d",n.step(b.start,b.end,b.pos,k.toD))
    };
Ab.fx.prototype.cur=function(){
    var b=this.elem;
    return b.attr?b.attr(this.prop):nc.apply(this,arguments)
    }
}
n={
    init:function(b,k,a){
        var k=k||"",A=b.shift,c=k.indexOf("C")>-1,f=c?7:3,h,k=k.split(" "),a=[].concat(a),d,e,r=function(b){
            for(h=b.length;h--;)b[h]===K&&b.splice(h+1,0,b[h+1],b[h+2],b[h+1],b[h+2])
                };
                
        c&&(r(k),r(a));
        b.isArea&&(d=k.splice(k.length-6,6),e=a.splice(a.length-6,6));
        if(A)a=[].concat(a).splice(0,f).concat(a),b.shift=!1;
        if(k.length)for(b=a.length;k.length<b;)A=[].concat(k).splice(k.length-
            f,f),c&&(A[f-6]=A[f-2],A[f-5]=A[f-1]),k=k.concat(A);
        d&&(k=k.concat(d),a=a.concat(e));
        return[k,a]
        },
    step:function(b,k,a,A){
        var c=[],f=b.length;
        if(a===1)c=A;
        else if(f===k.length&&a<1)for(;f--;)A=parseFloat(b[f]),c[f]=isNaN(A)?b[f]:a*parseFloat(k[f]-A)+A;else c=k;
        return c
        }
    };

W={
    enabled:!0,
    align:"center",
    x:0,
    y:15,
    style:{
        color:"#666",
        fontSize:"11px",
        lineHeight:"14px"
    }
};

s={
    colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],
    symbols:["circle","diamond","square",
    "triangle","triangle-down"],
    lang:{
        loading:"Loading...",
        months:["January","February","March","April","May","June","July","August","September","October","November","December"],
        shortMonths:["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"],
        weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        decimalPoint:".",
        resetZoom:"Reset zoom",
        resetZoomTitle:"Reset zoom level 1:1",
        thousandsSep:","
    },
    callbacks:[],
    global:{
        useUTC:!0
        },
    chart:{
        nativeZoom:!0,
        borderColor:"#4572A7",
        borderRadius:5,
        defaultSeriesType:"line",
        ignoreHiddenSeries:!0,
        spacingTop:10,
        spacingRight:10,
        spacingBottom:15,
        spacingLeft:10,
        style:{
            fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            fontSize:"12px",
            cursor:"default"
        },
        backgroundColor:"#FFFFFF",
        plotBorderColor:"#C0C0C0"
    },
    title:{
        text:"Chart title",
        align:"center",
        y:15,
        style:{
            color:"#3E576F",
            fontSize:"16px"
        }
    },
subtitle:{
    text:"",
    align:"center",
    y:30,
    style:{
        color:"#6D869F"
    }
},
plotOptions:{
    line:{
        allowPointSelect:!1,
        showCheckbox:!1,
        animation:{
            duration:1E3
        },
        events:{},
        lineWidth:2,
        shadow:!0,
        marker:{
            enabled:!0,
            lineWidth:0,
            radius:4,
            lineColor:"#FFFFFF",
            states:{
                hover:{},
                select:{
                    fillColor:"#FFFFFF",
                    lineColor:"#000000",
                    lineWidth:2
                }
            }
        },
point:{
    events:{}
},
dataLabels:ka(W,{
    enabled:!1,
    y:-6,
    formatter:function(){
        return this.y
        }
    }),
showInLegend:!0,
states:{
    hover:{
        marker:{}
},
select:{
    marker:{}
}
},
stickyTracking:!0
}
},
labels:{
    style:{
        position:P,
        color:"#3E576F"
    }
},
legend:{
    enabled:!0,
    align:"center",
    layout:"horizontal",
    labelFormatter:function(){
        return this.name
        },
    borderWidth:1,
    borderColor:"#909090",
    borderRadius:5,
    shadow:!1,
    style:{
        padding:"5px"
    },
    itemStyle:{
        cursor:"pointer",
        color:"#3E576F"
    },
    itemHoverStyle:{
        cursor:"pointer"
    },
    itemHiddenStyle:{
        color:"#C0C0C0"
    },
    itemCheckboxStyle:{
        position:P,
        width:"13px",
        height:"13px"
    },
    symbolWidth:16,
    symbolPadding:5,
    verticalAlign:"bottom",
    x:0,
    y:0
},
loading:{
    hideDuration:100,
    labelStyle:{
        position:F,
        fontFamily:"Verdana",
        fontSize:"10px",
        color:"#ffffff"
    },
    showDuration:100,
    style:{
        position:P,
        backgroundColor:"black",
        opacity:0.2,
        textAlign:"center"
    }
},
tooltip:{
    enabled:!0,
    backgroundColor:"rgba(255, 255, 255, .85)",
    borderWidth:2,
    borderRadius:5,
    shadow:!0,
    snap:ca?25:10,
    style:{
        color:"#333333",
        fontSize:"12px",
        padding:"5px",
        whiteSpace:"nowrap"
    }
},
toolbar:{
    itemStyle:{
        color:"#4572A7",
        cursor:"pointer"
    }
},
credits:{
    enabled:!0,
    text:"Highcharts.com",
    href:"http://www.highcharts.com",
    position:{
        align:"right",
        x:-10,
        verticalAlign:"bottom",
        y:-5
    },
    style:{
        cursor:"pointer",
        color:"#909090",
        fontSize:"10px"
    }
}
};

var rc={
    dateTimeLabelFormats:{
        second:"%H:%M:%S",
        minute:"%H:%M",
        hour:"%H:%M",
        day:"%e. %b",
        week:"%e. %b",
        month:"%b '%y",
        year:"%Y"
    },
    endOnTick:!1,
    gridLineColor:"#C0C0C0",
    labels:W,
    lineColor:"#C0D0E0",
    lineWidth:1,
    max:null,
    min:null,
    minPadding:0.01,
    maxPadding:0.01,
    minorGridLineColor:"#E0E0E0",
    minorGridLineWidth:1,
    minorTickColor:"#A0A0A0",
    minorTickLength:2,
    minorTickPosition:"outside",
    startOfWeek:1,
    startOnTick:!1,
    tickColor:"#C0D0E0",
    tickLength:5,
    tickmarkPlacement:"between",
    tickPixelInterval:100,
    tickPosition:"outside",
    tickWidth:1,
    title:{
        align:"middle",
        style:{
            color:"#6D869F",
            fontWeight:"bold"
        }
    },
type:"linear"
},Cc=ka(rc,{
    endOnTick:!0,
    gridLineWidth:1,
    tickPixelInterval:72,
    showLastLabel:!0,
    labels:{
        align:"right",
        x:-8,
        y:3
    },
    lineWidth:0,
    maxPadding:0.05,
    minPadding:0.05,
    startOnTick:!0,
    tickWidth:0,
    title:{
        rotation:270,
        text:"Y-values"
    },
    stackLabels:{
        enabled:!1,
        formatter:function(){
            return this.total
            },
        style:W.style
        }
    }),Rc={
    labels:{
        align:"right",
        x:-8,
        y:null
    },
    title:{
        rotation:270
    }
},Qc={
    labels:{
        align:"left",
        x:8,
        y:null
    },
    title:{
        rotation:90
    }
},Lc={
    labels:{
        align:"center",
        x:0,
        y:14
    },
    title:{
        rotation:0
    }
},
Pc=ka(Lc,{
    labels:{
        y:-5
    }
}),Ka=L.defaultPlotOptions=s.plotOptions,W=Ka.line;
Ka.spline=ka(W);
Ka.scatter=ka(W,{
    lineWidth:0,
    states:{
        hover:{
            lineWidth:0
        }
    }
});
Ka.area=ka(W,{});
Ka.areaspline=ka(Ka.area);
Ka.column=ka(W,{
    borderColor:"#FFFFFF",
    borderWidth:1,
    borderRadius:0,
    groupPadding:0.2,
    marker:null,
    pointPadding:0.1,
    minPointLength:0,
    states:{
        hover:{
            brightness:0.1,
            shadow:!1
            },
        select:{
            color:"#C0C0C0",
            borderColor:"#000000",
            shadow:!1
            }
        },
dataLabels:{
    y:null,
    verticalAlign:null
}
});
Ka.bar=ka(Ka.column,{
    dataLabels:{
        align:"left",
        x:5,
        y:0
    }
});
Ka.pie=ka(W,{
    borderColor:"#FFFFFF",
    borderWidth:1,
    center:["50%","50%"],
    colorByPoint:!0,
    dataLabels:{
        distance:30,
        enabled:!0,
        formatter:function(){
            return this.point.name
            },
        y:5
    },
    legendType:"point",
    marker:null,
    size:"75%",
    showInLegend:!1,
    slicedOffset:10,
    states:{
        hover:{
            brightness:0.1,
            shadow:!1
            }
        }
});
bb();
var Eb=function(b){
    var k=[],a;
    (function(b){
        (a=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(b))?k=[J(a[1]),J(a[2]),J(a[3]),parseFloat(a[4])]:(a=
            /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))&&(k=[J(a[1],16),J(a[2],16),J(a[3],16),1])
        })(b);
    return{
        get:function(a){
            return k&&!isNaN(k[0])?a==="rgb"?"rgb("+k[0]+","+k[1]+","+k[2]+")":a==="hex"?"#"+("000000"+(k[0]<<16|k[1]<<8|k[2]).toString(16)).slice(-6):a==="a"?k[3]:"rgba("+k.join(",")+")":b
            },
        brighten:function(b){
            if(d(b)&&b!==0){
                var a;
                for(a=0;a<3;a++)k[a]+=J(b*255),k[a]<0&&(k[a]=0),k[a]>255&&(k[a]=255)
                    }
                    return this
            },
        setOpacity:function(b){
            k[3]=b;
            return this
            }
        }
};

Ua.prototype={
    init:function(b,
        k){
        this.element=Ca.createElementNS("http://www.w3.org/2000/svg",k);
        this.renderer=b
        },
    animate:function(b,k,a){
        if(k=t(k,O,!0)){
            k=ka(k);
            if(a)k.complete=a;
            wc(this,b,k)
            }else this.attr(b),a&&a()
            },
    attr:function(b,k){
        var a,A,c,h,d,r=this.element,j=r.nodeName,n=this.renderer,q,pa=this.shadows,s=this.htmlNode,U,o=this;
        p(b)&&e(k)&&(a=b,b={},b[a]=k);
        if(p(b))a=b,j==="circle"?a={
            x:"cx",
            y:"cy"
        }
        [a]||a:a==="strokeWidth"&&(a="stroke-width"),o=u(r,a)||this[a]||0,a!=="d"&&a!=="visibility"&&(o=parseFloat(o));else for(a in b){
            q=
            !1;
            A=b[a];
            if(a==="d")A&&A.join&&(A=A.join(" ")),/(NaN| {2}|^$)/.test(A)&&(A="M 0 0"),this.d=A;
            else if(a==="x"&&j==="text"){
                for(c=0;c<r.childNodes.length;c++)h=r.childNodes[c],u(h,"x")===u(r,"x")&&u(h,"x",A);
                this.rotation&&u(r,"transform","rotate("+this.rotation+" "+A+" "+J(b.y||u(r,"y"))+")")
                }else if(a==="fill")A=n.color(A,r,a);
            else if(j==="circle"&&(a==="x"||a==="y"))a={
                x:"cx",
                y:"cy"
            }
            [a]||a;
            else if(a==="translateX"||a==="translateY"||a==="rotation"||a==="verticalAlign")this[a]=A,this.updateTransform(),
                q=!0;
            else if(a==="stroke")A=n.color(A,r,a);
            else if(a==="dashstyle")if(a="stroke-dasharray",A=A&&A.toLowerCase(),A==="solid")A=lb;
                else{
                if(A){
                    A=A.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");
                    for(c=A.length;c--;)A[c]=parseFloat(A[c])*b["stroke-width"];
                    A=A.join(",")
                    }
                }else a==="isTracker"?this[a]=A:a==="width"?A=J(A):
            a==="align"?(a="text-anchor",A={
                left:"start",
                center:"middle",
                right:"end"
            }
            [A]):a==="title"&&(c=Ca.createElementNS("http://www.w3.org/2000/svg","title"),c.appendChild(Ca.createTextNode(A)),r.appendChild(c));
        a==="strokeWidth"&&(a="stroke-width");
            f&&a==="stroke-width"&&A===0&&(A=1.0E-6);
            this.symbolName&&/^(x|y|r|start|end|innerR)/.test(a)&&(U||(this.symbolAttr(b),U=!0),q=!0);
            if(pa&&(a==="opacity"||a==="stroke-opacity")){
            d=0.06*A;
            c=0;
            for(h=pa.length;c<h;)u(pa[c],a,(c+=1)*d)
                }
                if(pa&&/^(width|height|visibility|x|y|d)$/.test(a))for(c=
            pa.length;c--;)u(pa[c],a,A);
            if((a==="width"||a==="height")&&j==="rect"&&A<0)A=0;
            a==="text"?(this.textStr=A,this.added&&n.buildText(this)):q||u(r,a,A);
            if(s&&(a==="x"||a==="y"||a==="translateX"||a==="translateY"||a==="visibility")){
            c=s.length?s:[this];
            h=c.length;
            for(d=0;d<h;d++)s=c[d],q=s.getBBox(),s=s.htmlNode,z(s,g(this.styles,{
                left:q.x+(this.translateX||0)+gb,
                top:q.y+(this.translateY||0)+gb
                })),a==="visibility"&&z(s,{
                visibility:A
            })
            }
            }
        return o
},
symbolAttr:function(b){
    var k=this;
    T(["x","y","r","start",
        "end","width","height","innerR","startAngle"],function(a){
            k[a]=t(b[a],k[a])
            });
    k.attr({
        d:k.renderer.symbols[k.symbolName](S(k.x*2)/2,S(k.y*2)/2,k.r,{
            start:k.start,
            end:k.end,
            width:k.width,
            height:k.height,
            innerR:k.innerR,
            startAngle:k.startAngle
            })
        })
    },
clip:function(b){
    return this.attr("clip-path","url('"+this.renderer.url+"#"+b.id+"')")
    },
crisp:function(b,k,a,c,f){
    var h,d={},e={},r,b=b||this.strokeWidth||0;
    r=b%2/2;
    e.x=tb(k||this.x||0)+r;
    e.y=tb(a||this.y||0)+r;
    e.width=tb((c||this.width||0)-2*r);
    e.height=
    tb((f||this.height||0)-2*r);
    e.strokeWidth=b;
    if(e.width===0&&c!==0)e.width=1;
    for(h in e)this[h]!==e[h]&&(this[h]=d[h]=e[h]);return d
    },
css:function(b){
    var k=this.element,k=b&&b.width&&k.nodeName==="text",a,c="",f=function(b,k){
        return"-"+k.toLowerCase()
        };
        
    if(b&&b.color)b.fill=b.color;
    this.styles=b=g(this.styles,b);
    if(Db&&!r)k&&delete b.width,z(this.element,b);
    else{
        for(a in b)c+=a.replace(/([A-Z])/g,f)+":"+b[a]+";";this.attr({
            style:c
        })
        }
        k&&this.added&&this.renderer.buildText(this);
    return this
    },
on:function(b,
    k){
    var a=k;
    ca&&b==="click"&&(b="touchstart",a=function(b){
        b.preventDefault();
        k()
        });
    this.element["on"+b]=a;
    return this
    },
translate:function(b,k){
    return this.attr({
        translateX:b,
        translateY:k
    })
    },
invert:function(){
    this.inverted=!0;
    this.updateTransform();
    return this
    },
updateTransform:function(){
    var b=this.translateX||0,k=this.translateY||0,a=this.inverted,c=this.rotation,f=[],h=this.shadows;
    a&&(b+=this.attr("width"),k+=this.attr("height"));
    (b||k)&&f.push("translate("+b+","+k+")");
    a?f.push("rotate(90) scale(-1,1)"):
    c&&f.push("rotate("+c+" "+this.x+" "+this.y+")");
    if(f.length&&(b=f.join(" "),u(this.element,"transform",b),h)){
        k=0;
        for(a=h.length;k<a;k+=1)u(h[k],"transform",b)
            }
        },
rotate:function(b,k,a){
    this.x=k;
    this.y=a;
    return this.attr({
        translateX:k,
        translateY:a,
        rotation:b
    })
    },
toFront:function(){
    var b=this.element;
    b.parentNode.appendChild(b);
    return this
    },
align:function(b,k,a){
    b?(this.alignOptions=b,this.alignByTranslate=k,a||this.renderer.alignedObjects.push(this)):(b=this.alignOptions,k=this.alignByTranslate);
    var a=
    t(a,this.renderer),c=b.align,f=b.verticalAlign,h=(a.x||0)+(b.x||0),d=(a.y||0)+(b.y||0),e={};
    
    /^(right|center)$/.test(c)&&(h+=(a.width-(b.width||0))/{
        right:1,
        center:2
    }
    [c]);
    e[k?"translateX":"x"]=S(h);
    /^(bottom|middle)$/.test(f)&&(d+=(a.height-(b.height||0))/({
        bottom:1,
        middle:2
    }
    [f]||1));
    e[k?"translateY":"y"]=S(d);
    this[this.placed?"animate":"attr"](e);
    this.placed=!0;
    this.alignAttr=e;
    return this
    },
getBBox:function(){
    var b,k,a,c=this.rotation,f=c*Gb;
    try{
        b=g({},this.element.getBBox())
        }catch(h){
        b={
            width:0,
            height:0
        }
    }
    k=b.width;
a=b.height;
if(c)b.width=na(a*Ba(f))+na(k*ua(f)),b.height=na(a*ua(f))+na(k*Ba(f));
return b
},
show:function(){
    return this.attr({
        visibility:Da
    })
    },
hide:function(){
    return this.attr({
        visibility:Fa
    })
    },
add:function(b){
    var k=this.renderer,a=b||k,c=a.element||k.box,f=c.childNodes,h=this.element,d=u(h,"zIndex");
    this.parentInverted=b&&b.inverted;
    this.textStr!==void 0&&k.buildText(this);
    if(b&&this.htmlNode){
        if(!b.htmlNode)b.htmlNode=[];
        b.htmlNode.push(this)
        }
        if(d)a.handleZ=!0,d=J(d);
    if(a.handleZ)for(a=
        0;a<f.length;a++)if(b=f[a],k=u(b,"zIndex"),b!==h&&(J(k)>d||!e(d)&&e(k)))return c.insertBefore(h,b),this;c.appendChild(h);
    this.added=!0;
    return this
    },
safeRemoveChild:function(b){
    var k=b.parentNode;
    k&&k.removeChild(b)
    },
destroy:function(){
    var b=this,k=b.element||{},m=b.shadows,c,f;
    k.onclick=k.onmouseout=k.onmouseover=k.onmousemove=null;
    ac(b);
    if(b.clipPath)b.clipPath=b.clipPath.destroy();
    if(b.stops){
        for(f=0;f<b.stops.length;f++)b.stops[f]=b.stops[f].destroy();
        b.stops=null
        }
        b.safeRemoveChild(k);
    m&&T(m,function(k){
        b.safeRemoveChild(k)
        });
    b.renderer.alignedObjects&&a(b.renderer.alignedObjects,b);
    for(c in b)delete b[c];return null
    },
empty:function(){
    for(var b=this.element,k=b.childNodes,a=k.length;a--;)b.removeChild(k[a])
        },
shadow:function(b,k,a){
    a||(a={});
    var c=[],f,h=this.element,d=a.color||"rgb(0,0,0)",e="translate"+(!this.parentInverted!=!a.inverted?"(-1,-1)":"(1,1)"),r=J(this.attr("stroke-width")||1,10)+6,a=C(a.opacity,1)*0.06;
    if(b){
        for(b=1;b<=3;b++)f=h.cloneNode(0),u(f,{
            isShadow:"true",
            stroke:d,
            "stroke-opacity":a*b,
            "stroke-width":r-
            2*b,
            transform:e,
            fill:lb
        }),k?k.element.appendChild(f):h.parentNode.insertBefore(f,h),c.push(f);
        this.shadows=c
        }
        return this
    },
textBound:function(){
    var b=this.renderer,k=this.textBoundWrapper,a=this.styles,c,f,h,d;
    if(this.element.nodeName!=="text"||!a||!a.backgroundColor&&!a.borderColor||!this.textStr||(this.rotation||0)%90!==0)return this.textBoundWrapper&&this.textBoundWrapper.destroy(),this;
    c=this.getBBox();
    h=c.width+4;
    d=c.height+4;
    f=c.x;
    c=c.y;
    this.rotation===270&&(f=this.attr("x")-h/2-2,c=this.attr("y")-
        d+4);
    if(!k)k=this.textBoundWrapper=b.rect(0,0,0,0,0,1),this.element.parentNode.insertBefore(k.element,this.element);
    k.attr({
        fill:a.backgroundColor||lb,
        stroke:a.borderColor||jb,
        "fill-opacity":C(a.backgroundOpacity,1),
        "stroke-opacity":C(a.borderOpacity,1)
        });
    k.attr(k.crisp(1,f-1.5,c-1.5,h,d));
    return this
    }
};

var uc=function(){
    this.init.apply(this,arguments)
    };
    
uc.prototype={
    Element:Ua,
    type:"SVG",
    init:function(b,k,a,c){
        var f=location,h;
        h=this.createElement("svg").attr({
            xmlns:"http://www.w3.org/2000/svg",
            version:"1.1"
        });
        b.appendChild(h.element);
        this.box=h.element;
        this.boxWrapper=h;
        this.alignedObjects=[];
        this.url=Db?"":f.href.replace(/#.*?$/,"").replace(/\'/g,"\\'");
        this.defs=this.createElement("defs").add();
        this.forExport=c;
        this.gradients=[];
        this.setSize(k,a,!1)
        },
    destroy:function(){
        var b,k=this.gradients,a=this.defs;
        this.box=null;
        this.boxWrapper=this.boxWrapper.destroy();
        if(k){
            for(b=0;b<k.length;b++)this.gradients[b]=k[b].destroy();
            this.gradients=null
            }
            if(a)this.defs=a.destroy();
        return this.alignedObjects=
        null
        },
    createElement:function(b){
        var k=new this.Element;
        k.init(this,b);
        return k
        },
    buildText:function(b){
        for(var k=b.element,a=t(b.textStr,"").toString().replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">').replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(/<br.*?>/g),c=k.childNodes,f=/style="([^"]+)"/,h=/href="([^"]+)"/,d=u(k,"x"),e=b._dx,j=b.styles,n=j&&b.useHTML&&!this.forExport,q=b.htmlNode,pa=j&&J(j.width),s=j&&
            j.lineHeight,U,p=c.length;p--;)k.removeChild(c[p]);
        pa&&!b.added&&this.box.appendChild(k);
        p=/title="([^"]+)"/;
        p.test(a[0])&&u(k,"title",a[0].match(p)[1]);
        T(a,function(a,m){
            var c,A=0,j,a=a.replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");
            c=a.split("|||");
            T(c,function(a){
                if(a!==""||c.length===1){
                    var g={},qa=Ca.createElementNS("http://www.w3.org/2000/svg","tspan");
                    f.test(a)&&u(qa,"style",a.match(f)[1].replace(/(;| |^)color([ :])/,"$1fill$2"));
                    h.test(a)&&(u(qa,"onclick",'location.href="'+
                        a.match(h)[1]+'"'),z(qa,{
                        cursor:"pointer"
                    }));
                    var a=(a.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"<").replace(/&gt;/g,">"),n=Ca.createTextNode(a);
                    qa.appendChild(n);
                    A?g.dx=e:g.x=d;
                    if(!A){
                        if(m){
                            !r&&b.renderer.forExport&&z(qa,{
                                display:"block"
                            });
                            j=kb.getComputedStyle&&J(kb.getComputedStyle(U,null).getPropertyValue("line-height"));
                            if(!j||isNaN(j))j=s||U.offsetHeight||18;
                            u(qa,"dy",j)
                            }
                            U=qa
                        }
                        u(qa,g);
                    k.appendChild(qa);
                    A++;
                    if(pa)for(var a=a.replace(/-/g,"- ").split(" "),ea=[];a.length||ea.length;)n=k.getBBox().width,
                        g=n>pa,!g||a.length===1?(a=ea,ea=[],a.length&&(qa=Ca.createElementNS("http://www.w3.org/2000/svg","tspan"),u(qa,{
                            dy:s||16,
                            x:d
                        }),k.appendChild(qa),n>pa&&(pa=n))):(qa.removeChild(qa.firstChild),ea.unshift(a.pop())),a.length&&qa.appendChild(Ca.createTextNode(a.join(" ").replace(/- /g,"-")))
                        }
                    })
        });
    if(n){
        if(!q)q=b.htmlNode=$("span",null,g(j,{
            position:P,
            top:0,
            left:0
        }),this.box.parentNode);
        q.innerHTML=b.textStr;
        for(p=c.length;p--;)c[p].style.visibility=Fa
            }
        },
crispLine:function(b,k){
    b[1]===b[4]&&(b[1]=b[4]=
        S(b[1])+k%2/2);
    b[2]===b[5]&&(b[2]=b[5]=S(b[2])+k%2/2);
    return b
    },
path:function(b){
    return this.createElement("path").attr({
        d:b,
        fill:lb
    })
    },
circle:function(b,k,a){
    b=aa(b)?b:{
        x:b,
        y:k,
        r:a
    };
    
    return this.createElement("circle").attr(b)
    },
arc:function(b,k,a,c,f,h){
    if(aa(b))k=b.y,a=b.r,c=b.innerR,f=b.start,h=b.end,b=b.x;
    return this.symbol("arc",b||0,k||0,a||0,{
        innerR:c||0,
        start:f||0,
        end:h||0
        })
    },
rect:function(b,k,a,c,f,h){
    if(aa(b))k=b.y,a=b.width,c=b.height,f=b.r,h=b.strokeWidth,b=b.x;
    f=this.createElement("rect").attr({
        rx:f,
        ry:f,
        fill:lb
    });
    return f.attr(f.crisp(h,b,k,Aa(a,0),Aa(c,0)))
    },
rect3d:function(){
    var b={
        x:{
            drawTop:!0,
            drawRight:!0,
            drawFront:!0,
            drawShadow:!0
            },
        y:{
            drawTop:!0,
            drawRight:!0,
            drawFront:!0,
            drawShadow:!0
            },
        width:{
            drawTop:!0,
            drawRight:!0,
            drawFront:!0,
            drawShadow:!0
            },
        height:{
            drawRight:!0,
            drawFront:!0,
            drawShadow:!0
            },
        strokeWidth:!0,
        "stroke-width":!0,
        stroke:!0,
        x3D:{
            drawTop:!0,
            drawRight:!0,
            drawShadow:!0
            },
        y3D:{
            drawTop:!0,
            drawRight:!0,
            drawShadow:!0
            },
        fill:!0
        },k=function(k,a){
        var m,c,f,h=this,d,r,j=this._3dAttr;
        p(k)&&
        e(a)&&(m=k,k={},k[m]=a);
        if(p(k))h=b[k]?this._3dAttr[k]:this._attr(k);else for(m in k)if(c=k[m],b[m]){
            f=b[m];
            j[m]=c;
            if(m==="stroke"||m==="stroke-width"||m==="strokeWidth")this.frontRect.attr(m,c),this.topRect.attr(m,c),this.rightRect.attr(m,c);
            if(m==="fill")c&&c.linearGradient&&c.stops&&c.stops[0]&&(c=c.stops[0][1]),nb.test(c)?(r=Eb(c),d=r.get("hex"),r=r.get("a")*100):c&&c.FCcolor?(d=c.FCcolor.color.split(sb)[0],r=c.FCcolor.alpha.split(sb)[0]):yb.test(c)&&(d=c.replace(Ta,ib),r=100),j.color=d,j.alpha=
                r,j.lighting3D===!1?(j.frontColor=pb(j.color,j.alpha),j.rightColor=pb(oa(j.color,60),j.alpha),j.topColor=pb(oa(j.color,75),j.alpha)):(j.frontColor={
                    FCcolor:{
                        color:oa(j.color,65)+sb+Sa(j.color,55),
                        alpha:r+sb+r,
                        angle:270
                    }
                },j.rightColor={
                    FCcolor:{
                        color:oa(j.color,35)+sb+oa(j.color,75),
                        alpha:r+sb+r,
                        angle:db(j.x3D,j.height+j.y3D,3)
                        }
                    },j.topColor={
                FCcolor:{
                    color:oa(j.color,85)+sb+Sa(j.color,35),
                    alpha:r+sb+r,
                    angle:db(j.width+j.x3D,j.y3D,4)
                    }
                }),this.topRect.attr({
            fill:j.topColor
            }),this.rightRect.attr({
            fill:j.rightColor
            }),
        this.frontRect.attr({
            fill:j.frontColor
            });
        if(f.drawTop){
            if(j.lighting3D!==!1&&j.topColor.FCcolor)j.topColor.FCcolor.angle=db(j.width+j.x3D,j.y3D,4);
            this.topRect.attr({
                d:["M",j.x,j.y,"L",j.x+j.width,j.y,j.x+j.width+j.x3D,j.y-j.y3D,j.x+j.x3D,j.y-j.y3D,"Z"],
                fill:j.topColor
                })
            }
            if(f.drawRight){
            if(j.lighting3D!==!1&&j.rightColor.FCcolor)j.rightColor.FCcolor.angle=db(j.x3D,j.height+j.y3D,3);
            this.rightRect.attr({
                d:["M",j.x+j.width,j.y,"L",j.x+j.width+j.x3D,j.y-j.y3D,j.x+j.width+j.x3D,j.y-j.y3D+j.height,j.x+
                j.width,j.y+j.height,"Z"],
                fill:j.rightRect
                })
            }
            f.drawFront&&this.frontRect.attr(m,c);
            f.drawShadow&&this.shadowElement.attr({
            d:["M",j.x+j.x3D,j.y-j.y3D,"L",j.x+j.x3D+j.width,j.y-j.y3D,j.x+j.x3D+j.width,j.y-j.y3D+j.height]
            })
        }else this._attr(m,c);return h
},a=function(){
    var b=this.shadowElement;
    a&&b.shadow.apply(b,arguments)
    };
    
return function(b,c,f,h,d,j,e,r){
    if(aa(b))c=b.y,f=b.width,h=b.height,e=b.strokeWidth,d=b.x3D,j=b.y3D,b=b.x;
    var d=X(d,10),j=X(j,10),g={
        x:b,
        y:c,
        width:f,
        height:h,
        r:0
    },n=["M",b,c,"L",
    b+f,c,b+f+d,c-j,b+d,c-j,"Z"],q=["M",b+f,c,"L",b+f+d,c-j,b+f+d,c-j+h,b+f,c+h,"Z"],s=["M",b+d,c-j,"L",b+d+f,c-j,b+d+f,c-j+h],r=this.g(r);
    r.shadowElement=this.path(s).add(r);
    r.frontRect=this.rect(g).attr({
        "stroke-width":e
    }).add(r);
    r.topRect=this.path(n).attr({
        "stroke-width":e
    }).add(r);
    r.rightRect=this.path(q).attr({
        "stroke-width":e
    }).add(r);
    r._attr=r.attr;
    r.attr=k;
    r.shadow=a;
    r._3dAttr={
        y:c,
        width:f,
        height:h,
        x:b,
        strokeWidth:e,
        x3D:d,
        y3D:j,
        lighting3D:this.lighting3D
        };
        
    return r
    }
}(),
getArcPath:function(b,k,
    a,c,f,h,d,j,e,r){
    return["A",d,j,0,r,e,f,h]
    },
scroller:function(){
    var b=ca?"touchstart":"mousedown",k={
        pageX:0,
        pageY:0
    },a=function(b){
        var a=b.type==="dragend",m=b.data,c=ca&&(b.sourceEvent&&b.sourceEvent.touches&&b.sourceEvent.touches[0]||k)||k;
        m.dragActive=!a;
        if(a){
            if(m.onChange)m.onChange(m.scrollPosition,!1,!0);
            if(m.onEnd)m.onEnd(m.scrollPosition,!1,!0)
                }else m.dragInitPos=m.scrollPosition,m.dragStartX=b.pageX||c.pageX,m.dragStartY=b.pageY||c.pageY;
        ca&&m.anchor.attr("height",m.anchor.attr("height")*
            (a?0.625:1.6))
        },c=function(b){
        var a=b.data,m=ca&&(b.sourceEvent&&b.sourceEvent.touches&&b.sourceEvent.touches[0]||k)||k;
        a.group.setScrollPosition(a.dragInitPos+(a.horiz?(b.pageX||m.pageX)-a.dragStartX:(b.pageY||m.pageY)-a.dragStartY)/a.zoneLength)
        },f=function(b,k){
        if(!arguments.length)return this;
        g(this.config,{
            onChange:b,
            onEnd:k
        });
        return this
        },h=function(b,k){
        var a=this.config,m=a.trackLength*b;
        m<5&&(b=5/a.trackLength,m=a.trackLength*b);
        a.zoneLength=a.trackLength-a.trackLength*(a.scrollRatio=b);
        this.elements.anchor.attr({
            width:m
        });
        a.scrollDelta=b>=1?1:0.1;
        return this.setScrollPosition(void 0,void 0,k)
        },d=function(b,k,a){
        var m=this.config,c=m.horiz,f=m.anchor,h=Db&&!r&&!c;
        e(b)?(b<=0?b=1.0E-8:b>1&&(b=1),m.scrollPosition=b):b=m.scrollPosition;
        c=(c?b:1-b)*m.zoneLength;
        c===0&&(c=1.0E-8);
        h?f.translate(void 0,-c):f.translate(c);
        if(!a&&m.onChange)m.onChange(b,k,!0);
        return this
        },j=function(b){
        var k=this.renderer,a=this.config,m,c,f;
        if(aa(b)&&"fill"in b){
            m=b.fill;
            c=a.flat;
            f=!a.horiz&&Db&&!r?180:90;
            var h={
                base:m,
                light:ib+Sa(m,15),
                dark:ib+oa(m,c?50:30)
                };
                
            h.darkFill=c?h.dark:{
                FCcolor:{
                    color:h.dark+sb+m,
                    alpha:"100",
                    angle:f
                }
            };
            
        h.lightFill=c?h.base:{
            FCcolor:{
                color:m+sb+h.light,
                alpha:"100",
                angle:f
            }
        };
        
    m=h;
    c={
        fill:m.dark
        };
        
    f={
        fill:m.lightFill
        };
        
    a.buttons&&(this.elements.start.attr(f),this.elements.end.attr(f),this.elements.startArrow.attr(c),this.elements.endArrow.attr(c));
    this.elements.track.attr(f);
    this.elements.anchor.attr({
        fill:m.darkFill,
        stroke:m.dark,
        "stroke-width":0.2
    });
    delete b.fill
    }
    return k.Element.prototype.attr.apply(this,
    arguments)
};

return function(k,e,r,n,q,s,U,p){
    q||(r+=n,n=r-n,r-=n);
    var o=this.g("scroller").attr({
        translateX:k,
        translateY:e,
        width:r,
        height:n
    }),k=o.config={},v=o.elements={},ca,e=!s?0:s.size||n,t=e*0.25,O=n*0.25,l=e+(s&&s.padding||0),ja=r-2*l,ra=ja<3;
    v.track=this.rect(l,0,ja,n,0);
    v.anchor=this.rect(l,U?0:O*0.5,ra?3:ja,U?n:n-O,U?0:ob(t,O));
    if(s)v.start=this.rect(0,0,e,n,0),v.startArrow=this.path([K,t,0,M,0,O,t,O*2,t,0]).translate(e*0.4,O),v.end=this.rect(r-e,0,e,n,0),v.endArrow=this.path([K,0,0,M,t,
        O,0,O*2,0,0]).translate(r-e*0.6,O);
    q||o.attr({
        width:n,
        height:r
    }).invert();
    for(ca in v)v[ca].add(o);g(k,{
        group:o,
        anchor:v.anchor,
        width:r,
        horiz:q,
        flat:U,
        buttons:!!s,
        scrollRatio:1,
        trackOffset:l,
        trackLength:ja,
        zoneLength:ja,
        scrollPosition:0,
        scrollDelta:0.1
    });
    g(o,{
        destroy:function(){
            T(v,function(b){
                b.destroy()
                })
            },
        attr:j,
        setScrollRatio:h,
        setScrollPosition:d,
        callback:f
    });
    Ea(v.anchor.element,"dragstart dragend",a,k);
    Ea(v.anchor.element,"drag",c,k);
    s&&(Ea([o.elements.start.element,o.elements.startArrow.element],
        b,function(){
            o.setScrollPosition(o.config.scrollPosition-o.config.scrollDelta)
            },k),Ea([o.elements.end.element,o.elements.endArrow.element],b,function(){
        o.setScrollPosition(o.config.scrollPosition+o.config.scrollDelta)
        },k));
    p&&Ea(p.element,"wheelchange",function(b,k){
        o.setScrollPosition(o.config.scrollPosition-k*0.5);
        b.preventDefault()
        });
    return o
    }
}(),
setSize:function(b,k,a){
    var c=this.alignedObjects,f=c.length;
    this.width=b;
    this.height=k;
    for(this.boxWrapper[t(a,!0)?"animate":"attr"]({
        width:b,
        height:k
    });f--;)c[f].align()
        },
g:function(b){
    return this.createElement("g").attr(e(b)&&{
        "class":G+b
        })
    },
image:function(b,k,a,c,f){
    var h={
        preserveAspectRatio:lb
    };
    
    arguments.length>1&&g(h,{
        x:k,
        y:a,
        width:c,
        height:f
    });
    h=this.createElement("image").attr(h);
    h.element.setAttributeNS?h.element.setAttributeNS("http://www.w3.org/1999/xlink","href",b):h.element.setAttribute("hc-svg-href",b);
    return h
    },
symbol:function(b,k,a,c,f){
    if(aa(b))k=b.x,a=b.y,c=b.radius,f=b.options,b=b.symbol;
    var h;
    if(/^poly\_\d+$/.test(b))h=X(parseInt(b.split("_")[1],
        10),3),b="poly",typeof f!=="object"&&(f={}),f.innerR=h;
    var d;
    h=(h=this.symbols[b])&&h(S(k),S(a),c,f,this);
    var j=/^url\((.*?)\)$/,e;
    if(h)d=this.path(h),g(d,{
        symbolName:b,
        x:k,
        y:a,
        r:c
    }),f&&g(d,f);
    else if(j.test(b)){
        var r=function(b,k){
            b.attr({
                width:k[0],
                height:k[1]
                }).translate(-S(k[0]/2),-S(k[1]/2))
            };
            
        e=b.match(j)[1];
        b=U[e];
        d=this.image(e).attr({
            x:k,
            y:a
        });
        b?r(d,b):(d.attr({
            width:0,
            height:0
        }),$("img",{
            onload:function(){
                r(d,U[e]=[this.width,this.height])
                },
            src:e
        }))
        }else d=this.circle(k,a,c);
    return d
    },
symbols:{
    poly:function(b,
        k,a,c){
        var f=c.innerR,h=2*fa.PI/f,d,j=typeof c.startAngle!=="undefined"?c.startAngle:fa.PI/2;
        if(f>2){
            c=[K,b+a*ua(-j),k+a*Ba(-j),M];
            for(d=1;d<f;d++)c.push(b+a*ua(-(j+d*h))),c.push(k+a*Ba(-(j+d*h)));
            c.push("Z")
            }else c=[K,b,k,"Z"];
        return c
        },
    square:function(b,k,a){
        a*=0.707;
        return[K,b-a,k-a,M,b+a,k-a,b+a,k+a,b-a,k+a,"Z"]
        },
    triangle:function(b,a,m){
        return[K,b,a-1.33*m,M,b+m,a+0.67*m,b-m,a+0.67*m,"Z"]
        },
    "triangle-down":function(b,a,m){
        return[K,b,a+1.33*m,M,b-m,a-0.67*m,b+m,a-0.67*m,"Z"]
        },
    diamond:function(b,
        a,m){
        return[K,b,a-m,M,b+m,a,b,a+m,b-m,a,"Z"]
        },
    arc:function(b,a,m,c){
        var f=c.start,h=c.end-1.0E-6,d=c.innerR,j=ua(f),e=Ba(f),r=ua(h),h=Ba(h),c=c.end-f<mb?0:1;
        return[K,b+m*j,a+m*e,"A",m,m,0,c,1,b+m*r,a+m*h,M,b+d*r,a+d*h,"A",d,d,0,c,0,b+d*j,a+d*e,"Z"]
        }
    },
clipPath:function(b){
    var a=G+ja++,m=this.createElement("clipPath").attr({
        id:a
    }).add(this.defs),b=this.createElement("path").attr({
        d:b,
        fill:lb
    }).add(m);
    b.id=a;
    b.clipPath=m;
    return b
    },
clipRect:function(b,a,m,c){
    var f=G+ja++,h=this.createElement("clipPath").attr({
        id:f
    }).add(this.defs),
    b=this.rect(b,a,m,c,0).add(h);
    b.id=f;
    b.clipPath=h;
    return b
    },
color:function(b,a,m){
    var c,f=/^rgba/;
    if(b&&b.linearGradient){
        var h=this,m="linearGradient",d=b[m],a=G+ja++,j,e,r;
        j=h.createElement(m).attr({
            id:a,
            gradientUnits:"userSpaceOnUse",
            x1:d[0],
            y1:d[1],
            x2:d[2],
            y2:d[3]
            }).add(h.defs);
        h.gradients.push(j);
        j.stops=[];
        T(b.stops,function(b){
            f.test(b[1])?(c=Eb(b[1]),e=c.get("rgb"),r=c.get("a")):(e=b[1],r=1);
            b=h.createElement("stop").attr({
                offset:b[0],
                "stop-color":e,
                "stop-opacity":r
            }).add(j);
            j.stops.push(b)
            });
        return"url('"+this.url+"#"+a+"')"
        }else if(b&&b.FCcolor){
        var g=b.FCcolor.element,h=this;
        if(g&&g.parentNode&&!h.forExport)return b.FCcolor.url;
        var g=C(b.FCcolor.color,"000000"),n=C(b.FCcolor.alpha,"100")+"",q,s,U,o=0,p=100,v=C(b.FCcolor.ratio,"0");
        q=X(b.FCcolor.angle,"0");
        g=g.replace(/\s+/ig,"").replace(/\,+$/ig,"").split(",");
        n=n.replace(/\s+/ig,"").replace(/\,+$/ig,"").split(",");
        v=v.replace(/\s+/ig,"").replace(/\,+$/ig,"").split(",");
        q%=360;
        q<0&&(q=360+q);
        if(b.FCcolor.radialGradient){
            a=G+ja++;
            j=
            h.createElement("radialGradient").attr({
                id:a,
                gradientUnits:C(b.FCcolor.gradientUnits,"userSpaceOnUse"),
                cx:b.FCcolor.cx,
                cy:b.FCcolor.cy,
                r:b.FCcolor.r
                }).add(h.defs);
            h.gradients.push(j);
            j.stops=[];
            for(q=0;q<g.length&&o<100;q+=1)s=g[q].replace(/^#?/,"#"),p=U=X(n[q],p),m=X(v[q],q!==0?(100-o)/(g.length-q):0),o+=m,o>100&&(o=100),j.stops.push(h.createElement("stop").attr({
                offset:o+"%",
                "stop-color":s,
                "stop-opacity":U/100
                }).add(j));
            Db&&g.length===1&&j.stops.push(h.createElement("stop").attr({
                offset:o+"%",
                "stop-color":s,
                "stop-opacity":U/100
                }).add(j));
            b.FCcolor.element=j.element;
            b.FCcolor.url="url('"+this.url+"#"+a+"')";
            return b.FCcolor.url
            }else if(g.length===1)return u(a,m+"-opacity",X(n[0],100)/100),g[0].replace(/^#?/,"#");
        else{
            var t,ca,O,l,o=0,m="linearGradient",d=b[m],a=G+ja++;
            t=Math.tan(q*Math.PI/180);
            d=Math.round(50-50*t);
            t=Math.round(50-50/t);
            t=t<0?0:t;
            t=t>100?100:t;
            d=d<0?0:d;
            d=d>100?100:d;
            ca=100-t;
            O=100-d;
            q>90&&q<=270&&(l=d,d=O,O=l);
            q>180&&q<=360&&(l=t,t=ca,ca=l);
            j=h.createElement(m).attr({
                id:a,
                gradientUnits:C(b.FCcolor.gradientUnits,
                    "objectBoundingBox"),
                x1:C(b.FCcolor.x1,t+"%"),
                y1:C(b.FCcolor.y1,d+"%"),
                x2:C(b.FCcolor.x2,ca+"%"),
                y2:C(b.FCcolor.y2,O+"%")
                }).add(h.defs);
            h.gradients.push(j);
            j.stops=[];
            for(q=0;q<g.length&&o<100;q+=1)s=g[q].replace(/^#?/,"#"),p=U=X(n[q],p),m=X(v[q],q!==0?(100-o)/(g.length-q):0),o+=m,o>100&&(o=100),j.stops.push(h.createElement("stop").attr({
                offset:o+"%",
                "stop-color":s,
                "stop-opacity":U/100
                }).add(j));
            Db&&g.length===1&&j.stops.push(h.createElement("stop").attr({
                offset:o+"%",
                "stop-color":s,
                "stop-opacity":U/
                100
                }).add(j));
            b.FCcolor.element=j.element;
            b.FCcolor.url="url('"+this.url+"#"+a+"')";
            return b.FCcolor.url
            }
        }else return f.test(b)?(c=Eb(b),u(a,m+"-opacity",c.get("a")),c.get("rgb")):(a.removeAttribute(m+"-opacity"),b)
    },
text:function(b,a,m,c,f){
    var h=s.chart.style,a=S(t(a,0)),m=S(t(m,0)),b=this.createElement("text").attr({
        x:a,
        y:m,
        text:b
    }).css({
        fontFamily:h.fontFamily,
        fontSize:h.fontSize
        });
    b.x=a;
    b.y=m;
    b.useHTML=c;
    b._dx=t(f,3);
    return b
    }
};

j=uc;
if(!r)ha=x(Ua,{
    init:function(b,a){
        var m=["<",a,' filled="f" stroked="f"'],
        c=["position: ",P,";"];
        (a==="shape"||a===xa)&&c.push("left:0;top:0;width:10px;height:10px;");
        zb&&c.push("visibility: ",a===xa?Fa:Da);
        m.push(' style="',c.join(""),'"/>');
        if(a)m=a===xa||a==="span"||a==="img"?m.join(""):b.prepVML(m),this.element=$(m);
        this.renderer=b
        },
    add:function(b){
        var a=this.renderer,m=this.element,c=a.box,c=b?b.element||b:c;
        b&&b.inverted&&a.invertChild(m,c);
        zb&&c.gVis===Fa&&z(m,{
            visibility:Fa
        });
        c.appendChild(m);
        this.added=!0;
        this.alignOnAdd&&this.updateTransform();
        return this
        },
    attr:function(b,
        a){
        var m,c,f,h,j,r=this.element||{},g=r.style,n=r.nodeName,q=this.renderer,s=this.symbolName,U,o=this.shadows,v,t=this;
        p(b)&&e(a)&&(m=b,b={},b[m]=a);
        if(p(b))m=b,t=m==="strokeWidth"||m==="stroke-width"?this.strokeweight:this[m];else for(m in b){
            c=b[m];
            v=!1;
            if(s&&/^(x|y|r|start|end|width|height|innerR)/.test(m))U||(this.symbolAttr(b),U=!0),v=!0;
            else if(m==="d"){
                c=c||[];
                this.d=c.join(" ");
                f=c.length;
                for(h=[];f--;)h[f]=d(c[f])?S(c[f]*10)-5:c[f]==="Z"?"x":c[f];
                c=h.join(" ")||"x";
                r.path=c;
                if(o)for(f=o.length;f--;)o[f].path=
                    c;
                v=!0
                }else if(m==="zIndex"||m==="visibility"){
                if(zb&&m==="visibility")if(r.gVis=c,n==="DIV"){
                    h=r.childNodes;
                    for(f=h.length;f--;)h[f].gVis!==Fa&&z(h[f],{
                        visibility:c
                    });
                    c===Da&&(c=null)
                    }else r.parentNode&&r.parentNode.gVis===Fa&&(c=null);
                if(c||c===Da)g[m]=c;
                v=!0
                }else if(/^(width|height)$/.test(m))this[m]=c,this.updateClipping?(this[m]=c,this.updateClipping()):g[m]=c,v=!0;
            else if(/^(x|y)$/.test(m))this[m]=c,this.updateClipping?(this[{
                x:"left",
                y:"top"
            }
            [m]]=c,this.updateClipping()):r.tagName==="SPAN"?
                this.updateTransform():g[{
                    x:"left",
                    y:"top"
                }
                [m]]=c,v=!0;
            else if(m==="class")r.className=c;
            else if(m==="stroke")c=q.color(c,r,m),m="strokecolor";
            else if(m==="stroke-width"||m==="strokeWidth")r.stroked=c?!0:!1,m="strokeweight",this[m]=c,d(c)&&(c+=gb);
            else if(m==="stroke-linecap"||m==="strokeLinecap")this[m]=c,m="endcap",c=c==="butt"?"flat":c||"flat",f=r.getElementsByTagName("stroke")[0]||$(q.prepVML(["<stroke/>"]),null,null,r),f[m]=c,v=!0;
            else if(m==="dashstyle")f=r.getElementsByTagName("stroke")[0]||
                $(q.prepVML(["<stroke/>"]),null,null,r),f[m]=c||"solid",this.dashstyle=c,v=!0;
            else if(m==="fill")n==="SPAN"?g.color=c:(r.filled=c!==lb?!0:!1,c=q.color(c,r,m),m="fillcolor");
            else if(m==="translateX"||m==="translateY"||m==="rotation"||m==="align")m==="align"&&(m="textAlign"),this[m]=c,this.updateTransform(),v=!0;
            else if(m==="text")this.bBox=null,r.innerHTML=c,v=!0;
            if(o&&m==="visibility")for(f=o.length;f--;)o[f].style[m]=c;
            if(o&&(m==="opacity"||m==="stroke-opacity")){
                j=6*c;
                f=0;
                for(h=o.length;f<h;)u(o[f],
                    m,(f+=1)*j)
                }
                v||(zb?r[m]=c:u(r,m,c))
            }
            return t
        },
    clip:function(b){
        var k=this,c=b.members;
        c.push(k);
        k.destroyClip=function(){
            a(c,k)
            };
            
        return k.css(b.getCSS(k.inverted))
        },
    css:function(b){
        var a=this.element;
        if(a=b&&a.tagName==="SPAN"&&b.width)delete b.width,this.textWidth=a,this.updateTransform();
        this.styles=g(this.styles,b);
        z(this.element,b);
        return this
        },
    safeRemoveChild:function(b){
        b.parentNode&&Y(b)
        },
    destroy:function(){
        this.destroyClip&&this.destroyClip();
        return Ua.prototype.destroy.apply(this)
        },
    empty:function(){
        for(var b=
            this.element.childNodes,a=b.length,c;a--;)c=b[a],c.parentNode.removeChild(c)
            },
    getBBox:function(){
        var b=this.element,a=this.bBox;
        if(!a){
            if(b.nodeName==="text")b.style.position=P;
            a=this.bBox={
                x:b.offsetLeft,
                y:b.offsetTop,
                width:b.offsetWidth,
                height:b.offsetHeight
                }
            }
        return a
    },
on:function(b,a){
    this.element["on"+b]=function(){
        var b=kb.event;
        b.target=b.srcElement;
        a(b)
        };
        
    return this
    },
updateTransform:function(){
    if(this.added){
        var b=this,a=b.element,c=b.translateX||0,f=b.translateY||0,h=b.x||0,d=b.y||0,j=b.textAlign||
        "left",r={
            left:0,
            center:0.5,
            right:1
        }
        [j],g=j&&j!=="left";
        (c||f)&&b.css({
            marginLeft:c,
            marginTop:f
        });
        b.inverted&&T(a.childNodes,function(c){
            b.renderer.invertChild(c,a)
            });
        if(a.tagName==="SPAN"){
            var n,q,c=b.rotation,s;
            n=0;
            var f=1,o=0,U;
            s=J(b.textWidth);
            var p=b.xCorr||0,v=b.yCorr||0,t=[c,j,a.innerHTML,b.textWidth].join(",");
            if(t!==b.cTT)e(c)&&(n=c*Gb,f=ua(n),o=Ba(n),z(a,{
                filter:c?["progid:DXImageTransform.Microsoft.Matrix(M11=",f,", M12=",-o,", M21=",o,", M22=",f,", sizingMethod='auto expand')"].join(""):
                lb
                })),n=a.offsetWidth,q=a.offsetHeight,n>s&&(z(a,{
                width:s+gb,
                display:"block",
                whiteSpace:"normal"
            }),n=s),s=S((J(a.style.fontSize)||12)*1.2),p=f<0&&-n,v=o<0&&-q,U=f*o<0,p+=o*s*(U?1-r:r),v-=f*s*(c?U?r:1-r:1),g&&(p-=n*r*(f<0?-1:1),c&&(v-=q*r*(o<0?-1:1)),z(a,{
                textAlign:j
            })),b.xCorr=p,b.yCorr=v;
            z(a,{
                left:h+p,
                top:d+v
                });
            b.cTT=t
            }
        }else this.alignOnAdd=!0
    },
rotate:function(b){
    var a=this.element;
    e(b)&&z(a,{
        rotation:Number(b),
        left:0,
        top:0
    })
    },
shadow:function(b,a,c){
    c||(c={});
    var f=[],h=this.element,d=this.renderer,
    j,r=h.style,e,g=h.path,n=c.color||"black",q=J(this.attr("stroke-width")||1,10)+6,s=C(c.opacity,1)*0.06,c=!this.parentInverted!=!c.inverted?-1:1;
    g&&typeof g.value!=="string"&&(g="x");
    if(b){
        for(b=1;b<=3;b++)e=['<shape isShadow="true" strokeweight="',q-2*b,'" filled="false" path="',g,'" coordsize="100,100" style="',r.cssText,'" />'],j=$(d.prepVML(e),null,{
            left:J(r.left)+c,
            top:J(r.top)+c
            }),e=['<stroke endcap="round" color="',n,'" opacity="',s*b,'"/>'],$(d.prepVML(e),null,null,j),a?a.element.appendChild(j):
            h.parentNode.insertBefore(j,h),f.push(j);
        this.shadows=f
        }
        return this
    },
textBound:function(){
    var b=this.styles;
    if(this.element.nodeName.toLowerCase()==="span"&&b&&(b.backgroundColor||b.borderColor)&&this.element.innerHTML=="")return z(this.element,{
        backgroundColor:jb,
        borderColor:jb,
        border:jb
    }),this;
    b&&b.backgroundOpacity&&this.attr({
        opacity:b.backgroundOpacity
        });
    return this
    }
}),W=function(){
    this.init.apply(this,arguments)
    },W.prototype=ka(uc.prototype,{
    Element:ha,
    isIE8:Cb.indexOf("MSIE 8.0")>-1,
    type:"VML",
    init:function(b,a,c){
        var f;
        this.alignedObjects=[];
        f=this.createElement(xa);
        b.appendChild(f.element);
        this.box=f.element;
        this.boxWrapper=f;
        this.setSize(a,c,!1);
        if(!Ca.namespaces.hcv)Ca.namespaces.add("hcv","urn:schemas-microsoft-com:vml"),Ca.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
            },
    clipRect:function(b,a,c,f){
        var h=this.createElement();
        return g(h,{
            members:[],
            left:b,
            top:a,
            width:c,
            height:f,
            getCSS:function(b){
                var a=
                this.top,k=this.left,c=k+this.width,m=a+this.height,a={
                    clip:"rect("+S(b?k:a)+"px,"+S(b?m:c)+"px,"+S(b?c:m)+"px,"+S(b?a:k)+"px)"
                    };
                !b&&zb&&g(a,{
                    width:(c<0?0:c)+gb,
                    height:(m<0?0:m)+gb
                    });
                return a
                },
            updateClipping:function(){
                T(h.members,function(b){
                    b.css(h.getCSS(b.inverted))
                    })
                }
            })
    },
getArcPath:function(b,a,c,f,h,d,j,r,e,g){
    return g||na(c-h)>=1||na(f-d)>=1?[e?"WA":"AT",b-j,a-r,b+j,a+r,c,f,h,d]:[M,h,d]
    },
color:function(b,a,c){
    var f,h=/^rgba/;
    if(b&&b.linearGradient){
        var d,j,r=b.linearGradient,e,g,n,q;
        T(b.stops,
            function(b,a){
                h.test(b[1])?(f=Eb(b[1]),d=f.get("rgb"),j=f.get("a")):(d=b[1],j=1);
                a?(n=d,q=j):(e=d,g=j)
                });
        b=90-fa.atan((r[3]-r[1])/(r[2]-r[0]))*180/mb;
        c=["<",c,' colors="0% ',e,",100% ",n,'" angle="',b,'" opacity="',q,'" o:opacity2="',g,'" type="gradient" focus="100%" />'];
        $(this.prepVML(c),null,null,a)
        }else if(b&&b.FCcolor){
        var r=C(b.FCcolor.color,"000000"),s=C(b.FCcolor.alpha,"100")+"",o=C(b.FCcolor.ratio,"0"),U=X(b.FCcolor.angle,"0"),p=100,r=r.replace(/\s+/ig,"").replace(/\,+$/ig,"").split(","),
        s=s.replace(/\s+/ig,"").replace(/\,+$/ig,"").split(","),o=o.replace(/\s+/ig,"").replace(/\,+$/ig,"").split(",");
        U-=90;
        U*=-1;
        U%=360;
        U<0&&(U=360+U);
        if(r.length===1)return c=["<",c,' opacity="',X(s[0],100)/100,'"/>'],$(this.prepVML(c),null,null,a),r[0].replace(/^#?/,"#");
        else{
            var v,t,ca,O,l=0,ja="",ra=!0;
            e=r[0].replace(/^#?/,"#");
            g=X(s[0],100)/100;
            for(v=0;v<r.length&&l<100;v+=1)t=r[v].replace(/^#?/,"#"),p=ca=X(s[v],p),O=X(o[v],v!==0?(100-l)/(r.length-v):0),l+=O,l>100&&(l=100),ra&&(l>0&&(ja+="0% "+t+
                ","),ra=!1),ja+=l+"% "+t+",";
            l<100&&(ja+="100% "+t+",");
            n=t;
            q=ca/100;
            if(b.FCcolor.radialGradient)if(b.FCcolor.gradientUnits!=="objectBoundingBox")return c=["<",c,' opacity="',X(b.FCcolor.defaultAlpha,s[0],100)/100,'"/>'],$(this.prepVML(c),null,null,a),C(b.FCcolor.defaultColor,r[0],"000000").replace(/^#?/,"#");else c=["<",c,' colors="',ja,'" color="',e,'" color2="',n,'" focusposition="',b.FCcolor.cx+","+b.FCcolor.cy,'" opacity="',q,'" o:opacity2="',g,'" type="gradientTitle" focus="100%" />'];else c=
                ["<",c,' colors="',ja,'" angle="',U,'" color="',e,'" color2="',n,'" opacity="',q,'" o:opacity2="',g,'" type="gradient" focus="100%" />'];
            $(this.prepVML(c),null,null,a)
            }
        }else return h.test(b)&&a.tagName!=="IMG"?(f=Eb(b),c=["<",c,' opacity="',f.get("a"),'"/>'],$(this.prepVML(c),null,null,a),f.get("rgb")):b
    },
prepVML:function(b){
    var a=this.isIE8,b=b.join("");
    a?(b=b.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),b=b.indexOf('style="')===-1?b.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):
        b.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):b=b.replace("<","<hcv:");
    return b
    },
text:function(b,a,c,f,h){
    f=s.chart.style;
    b=this.createElement("span").attr({
        text:b,
        x:S(a),
        y:S(c)
        }).css({
        whiteSpace:"nowrap",
        fontFamily:f.fontFamily,
        fontSize:f.fontSize
        });
    b._dx=t(h,3);
    return b
    },
path:function(b){
    return this.createElement("shape").attr({
        coordsize:"100 100",
        d:b
    })
    },
circle:function(b,a,c){
    return this.symbol("circle").attr({
        x:b,
        y:a,
        r:cc(c,1)
        })
    },
g:function(b){
    var a;
    b&&(a={
        className:G+
        b,
        "class":G+b
        });
    return this.createElement(xa).attr(a)
    },
image:function(b,a,c,f,h){
    var d=this.createElement("img").attr({
        src:b
    });
    arguments.length>1&&d.css({
        left:a,
        top:c,
        width:f,
        height:h
    });
    return d
    },
rect:function(b,a,c,f,h,d){
    if(aa(b))a=b.y,c=b.width,f=b.height,h=b.r,d=b.strokeWidth,b=b.x;
    var j=this.symbol("rect");
    j.r=h;
    return j.attr(j.crisp(d,b,a,Aa(c,0),Aa(f,0)))
    },
invertChild:function(b,a){
    var c=a.style;
    z(b,{
        flip:"x",
        left:J(c.width)-10,
        top:J(c.height)-10,
        rotation:-90
    })
    },
symbols:{
    arc:function(b,a,c,
        f){
        var h=f.start,d=f.end,j=ua(h),r=Ba(h),e=ua(d),g=Ba(d),n=(f=f.innerR)&&0.1/f||0;
        if(d-h===0)return["x"];else 2*mb-d+h<0.07/c?(d=h+2*mb-0.0010,e=ua(d),g=Ba(d)):d-h<n&&(e=ua(h+n));
        return["wa",b-c,a-c,b+c,a+c,b+c*j,a+c*r,b+c*e,a+c*g,"at",b-f,a-f,b+f,a+f,b+f*e,a+f*g,b+f*j,a+f*r,"x","e"]
        },
    circle:function(b,a,c){
        return["wa",b-c,a-c,b+c,a+c,b+c,a,b+c,a,"e"]
        },
    rect:function(b,a,c,f){
        if(!e(f))return[];
        var h=f.width,f=f.height,d=b+h,j=a+f,c=ob(c,h,f);
        return[K,b+c,a,M,d-c,a,"wa",d-2*c,a,d,a+2*c,d-c,a,d,a+c,
        M,d,j-c,"wa",d-2*c,j-2*c,d,j,d,j-c,d-c,j,M,b+c,j,"wa",b,j-2*c,b+2*c,j,b+c,j,b,j-c,M,b,a+c,"wa",b,a,b+2*c,a+2*c,b,a+c,b+c,a,"x","e"]
        }
    }
}),j=W;
$a.prototype.callbacks=[];
var Yb=function(){};

Yb.prototype={
    init:function(b,a){
        var c=b.chart.counters,f;
        this.series=b;
        this.applyOptions(a);
        this.pointAttr={};
        
        if(b.options.colorByPoint){
            f=b.chart.options.colors;
            if(!this.options)this.options={};
                
            this.color=this.options.color=this.color||f[c.color++];
            c.wrapColor(f.length)
            }
            b.chart.pointCount++;
        return this
        },
    applyOptions:function(b){
        var a=
        this.series;
        this.config=b;
        if(d(b)||b===null)this.y=b;
        else if(aa(b)&&!d(b.length))g(this,b),this.options=b;
        else if(p(b[0]))this.name=b[0],this.y=b[1];
        else if(d(b[0]))this.x=b[0],this.y=b[1];
        if(this.x===wa)this.x=a.autoIncrement()
            },
    destroy:function(){
        var b=this,k=b.series,c=k.chart.hoverPoints,f;
        k.chart.pointCount--;
        c&&(b.setState(),a(c,b));
        if(b===k.chart.hoverPoint)b.onMouseOut();
        Hb(b);
        T(["graphic","tracker","group","dataLabel","connector","shadowGroup"],function(a){
            b[a]&&b[a].destroy()
            });
        b.legendItem&&
        b.series.chart.legend.destroyItem(b);
        for(f in b)b[f]=null
            },
    getLabelConfig:function(){
        return{
            x:this.category,
            y:this.y,
            series:this.series,
            point:this,
            percentage:this.percentage,
            total:this.total||this.stackTotal
            }
        },
select:function(b,a){
    var c=this,f=c.series.chart,b=t(b,!c.selected);
    c.firePointEvent(b?"select":"unselect",{
        accumulate:a
    },function(){
        c.selected=b;
        c.setState(b&&"select");
        a||T(f.getSelectedPoints(),function(b){
            if(b.selected&&b!==c)b.selected=!1,b.setState(hb),b.firePointEvent("unselect")
                })
        })
    },
onMouseOver:function(){
    var b=this.series.chart,a=b.tooltip,c=b.hoverPoint;
    if(c&&c!==this)c.onMouseOut();
    this.firePointEvent("mouseOver");
    a&&!a.shared&&a.refresh(this);
    this.link!==void 0&&this.series.tracker&&this.series.tracker.css({
        cursor:"pointer",
        _cursor:"hand"
    });
    this.setState(Z);
    b.hoverPoint=this
    },
onMouseOut:function(){
    this.firePointEvent("mouseOut");
    this.setState();
    this.series.chart.hoverPoint=null;
    this.link!==void 0&&this.series.tracker&&this.series.tracker.css({
        cursor:"auto",
        _cursor:"auto"
    })
    },
tooltipFormatter:function(b){
    var a=this.series;
    return['<span style="color:'+a.color+'">',this.name||a.name,"</span>: ",!b?"<b>x = "+(this.name||this.x)+",</b> ":"","<b>",!b?"y = ":"",this.y,"</b>"].join("")
    },
update:function(b,a,c){
    var f=this,h=f.series,d=f.graphic,j=h.chart,a=t(a,!0);
    f.firePointEvent("update",{
        options:b
    },function(){
        f.applyOptions(b);
        aa(b)&&(h.getAttribs(),d&&d.attr(f.pointAttr[h.state]));
        h.isDirty=!0;
        a&&j.redraw(c)
        })
    },
remove:function(b,k){
    var c=this,f=c.series,h=f.chart,d=f.data;
    ga(k,h);
    b=t(b,!0);
    c.firePointEvent("remove",null,function(){
        a(d,c);
        c.destroy();
        f.isDirty=!0;
        b&&h.redraw()
        })
    },
firePointEvent:function(b,a,c){
    var f=this,h=this.series.options;
    (h.point.events[b]||f.options&&f.options.events&&f.options.events[b])&&this.importEvents();
    b==="click"&&h.allowPointSelect&&(c=function(b){
        f.select(null,b.ctrlKey||b.metaKey||b.shiftKey)
        });
    Ha(this,b,a,c)
    },
importEvents:function(){
    if(!this.hasImportedEvents){
        var b=ka(this.series.options.point,this.options).events,a;
        this.events=b;
        for(a in b)Ea(this,a,b[a]);this.hasImportedEvents=!0
        }
    },
setState:function(b){
    var a=this.series,c=a.options.states,f=Ka[a.type].marker&&a.options.marker,h=f&&!f.enabled,d=(f=f&&f.states[b])&&f.enabled===!1,j=a.stateMarkerGraphic,r=a.chart,e=this.pointAttr,b=b||hb;
    if(!(b===this.state||this.selected&&b!=="select"||c[b]&&c[b].enabled===!1||b&&(d||h&&!f.enabled))){
        if(this.graphic)this.graphic.attr(e[b]);
        else{
            if(b){
                if(!j)a.stateMarkerGraphic=j=r.renderer.circle(0,0,e[b].r).attr(e[b]).add(a.group);
                j.translate(this.plotX,
                    this.plotY)
                }
                if(j)j[b?"show":"hide"]()
                }
                this.state=b
        }
    }
};

var wb=function(){};

wb.prototype={
    isCartesian:!0,
    type:"line",
    pointClass:Yb,
    pointAttrToOptions:{
        stroke:"lineColor",
        "stroke-width":"lineWidth",
        fill:"fillColor",
        r:"radius"
    },
    init:function(b,a){
        var c,f;
        f=b.series.length;
        this.chart=b;
        a=this.setOptions(a);
        g(this,{
            index:f,
            options:a,
            name:C(a.name)===void 0?"":a.name,
            state:hb,
            pointAttr:{},
            visible:a.visible!==!1,
            selected:a.selected===!0
            });
        f=a.events;
        for(c in f)Ea(this,c,f[c]);if(f&&f.click||a.point&&a.point.events&&
            a.point.events.click||a.allowPointSelect)b.runTrackerClick=!0;
        this.getColor();
        this.getSymbol();
        this.setData(a.data,!1)
        },
    autoIncrement:function(){
        var b=this.options,a=this.xIncrement,a=t(a,b.pointStart,0);
        this.pointInterval=t(this.pointInterval,b.pointInterval,1);
        this.xIncrement=a+this.pointInterval;
        return a
        },
    cleanData:function(){
        var b=this.chart,a=this.data,c,f,h=b.smallestInterval,d,j;
        Lb(a,function(b,a){
            return b.x-a.x
            });
        if(this.options.connectNulls)for(j=a.length-1;j>=0;j--)a[j].y===null&&a[j-1]&&
            a[j+1]&&a.splice(j,1);
        for(j=a.length-1;j>=0;j--)if(a[j-1]&&(d=a[j].x-a[j-1].x,d>0&&(f===wa||d<f)))f=d,c=j;if(h===wa||f<h)b.smallestInterval=f;
        this.closestPoints=c
        },
    getSegments:function(){
        var b=-1,a=[],c=this.data;
        this.options.connectNullData?(T(c,function(b,f){
            typeof b.y=="number"&&a.push(c[f])
            }),a=[a]):T(c,function(f,h){
            typeof f.y!="number"?(h>b+1&&a.push(c.slice(b+1,h)),b=h):h==c.length-1&&a.push(c.slice(b+1,h+1))
            });
        this.segments=a
        },
    setOptions:function(b){
        var a=this.chart.options.plotOptions;
        return ka(a[this.type],
            a.series,b)
        },
    getColor:function(){
        var b=this.chart.options.colors,a=this.chart.counters;
        this.color=this.options.color||b[a.color++]||"#0000ff";
        a.wrapColor(b.length)
        },
    getSymbol:function(){
        var b=this.chart.options.symbols,a=this.chart.counters;
        this.symbol=this.options.marker.symbol||b[a.symbol++];
        a.wrapSymbol(b.length)
        },
    addPoint:function(b,a,c,f){
        var h=this.data,d=this.graph,j=this.area,r=this.chart,b=(new this.pointClass).init(this,b);
        ga(f,r);
        if(d&&c)d.shift=c;
        if(j)j.shift=c,j.isArea=!0;
        a=t(a,!0);
        h.push(b);
        c&&h[0].remove(!1);
        this.getAttribs();
        this.isDirty=!0;
        a&&r.redraw()
        },
    setData:function(b,a){
        var c=this,f=c.data,h=c.initialColor,d=c.chart,j=f&&f.length||0;
        c.xIncrement=null;
        if(e(h))d.counters.color=h;
        for(b=Xb(w(b||[]),function(b){
            return(new c.pointClass).init(c,b)
            });j--;)f[j].destroy();
        c.data=b;
        c.cleanData();
        c.getSegments();
        c.getAttribs();
        c.isDirty=!0;
        d.isDirtyBox=!0;
        t(a,!0)&&d.redraw(!1)
        },
    remove:function(b,a){
        var c=this,f=c.chart,b=t(b,!0);
        if(!c.isRemoving)c.isRemoving=!0,Ha(c,"remove",null,function(){
            c.destroy();
            f.isDirtyLegend=f.isDirtyBox=!0;
            b&&f.redraw(a)
            });
        c.isRemoving=!1
        },
    translate:function(){
        for(var b=this.chart,a=this.options.stacking,c=this.xAxis.categories,f=this.yAxis,h=this.data,d=h.length;d--;){
            var j=h[d],r=j.x,g=j.y,n=j.low,q=f.stacks[(g<0?"-":"")+this.stackKey];
            j.plotX=this.xAxis.translate(r);
            if(a&&q&&q[r]){
                var r=q[r],q=r.total,s=f.options.min,n=r.cum;
                r.cum+=g;
                g=Aa(s,n+g);
                n=Aa(s,n);
                a==="percent"&&(n=q?n*100/q:0,g=q?g*100/q:0);
                j.percentage=q?j.y*100/q:0;
                j.stackTotal=q
                }
                if(e(n))j.yBottom=f.translate(n,
                0,1,0,1);
            if(g!==null)j.plotY=f.translate(g,0,1,0,1);
            j.clientX=b.inverted?b.plotHeight-j.plotX:j.plotX;
            j.category=c&&c[j.x]!==wa?c[j.x]:j.x
            }
        },
setTooltipPoints:function(b){
    var a=this.chart,c=a.inverted,f=[],h=S((c?a.plotTop:a.plotLeft)+a.plotSizeX),j,d,r=[];
    if(b)this.tooltipPoints=null;
    T(this.segments,function(b){
        f=f.concat(b)
        });
    this.xAxis&&this.xAxis.reversed&&(f=f.reverse());
    T(f,function(b,a){
        j=f[a-1]?f[a-1]._high+1:0;
        for(d=b._high=f[a+1]?tb((b.plotX+(f[a+1]?f[a+1].plotX:h))/2):tb(b.plotX+30);j<=
            d;)r[c?h-j++:j++]=b
        });
    this.tooltipPoints=r
    },
onMouseOver:function(){
    var b=this.chart,a=b.hoverSeries;
    if(ca||!b.mouseIsDown){
        if(a&&a!==this)a.onMouseOut();
        this.options.events.mouseOver&&Ha(this,"mouseOver");
        this.tracker&&this.tracker.toFront();
        this.setState(Z);
        b.hoverSeries=this
        }
    },
onMouseOut:function(){
    var b=this.options,a=this.chart,c=a.tooltip,f=a.hoverPoint;
    if(f)f.onMouseOut();
    this&&b.events.mouseOut&&Ha(this,"mouseOut");
    c&&!b.stickyTracking&&c.hide();
    this.setState();
    a.hoverSeries=null
    },
animate:function(b){
    var a=
    this.clipRect,c=this.options.animation;
    c&&!aa(c)&&(c={});
    if(b){
        if(!a.isAnimating)a.attr({
            width:0
        }),a.isAnimating=!0
        }else a.animate({
        width:a.cliprectW
        },c),this.animate=null
    },
drawPoints:function(){
    var b,a=this.data,c=this.chart,f=this.options,h,j,d,r,e,g,n;
    if(this.options.marker.enabled)for(d=a.length;d--;)if(r=a[d],h=r.plotX,j=r.plotY,n=r.graphic,j!==wa&&!isNaN(j)){
        var q,s,o;
        b=[];
        if(r.errorValue)q=r.errorValue,o=h,e=j,g=f.errorBarWidth,g/=2,b.push(K,o,e,M),s=this.yAxis.translate(q,0,0,0,0,1),q=e-s,
            s=e+s,b.push(o,q,K,o+g,q,M,o-g,q),f.halfErrorBar===0&&b.push(K,o,e,M,o,s,K,o-g,s,M,o+g,s),r.errorPath=b,(e=r.errorGraph)?(ac(e),e.animate({
                d:b
            })):r.errorGraph=c.renderer.path(b).attr({
                "stroke-width":f.errorBarThickness,
                stroke:f.errorBarColor
                }).add(this.group);
        if(r.vErrorValue)q=r.vErrorValue,o=h,e=j,g=f.verticalErrorBarWidth,g/=2,b.push(K,o,e,M),s=this.yAxis.translate(q,0,0,0,0,1),q=e-s,s=e+s,b.push(o,q,K,o+g,q,M,o-g,q),f.halfVerticalErrorBar===0&&b.push(K,o,e,M,o,s,K,o-g,s,M,o+g,s),r.vErrorPath=
            b,(e=r.vErrorGraph)?(ac(e),e.animate({
                d:b
            })):r.vErrorGraph=c.renderer.path(b).attr({
                "stroke-width":f.verticalErrorBarThickness,
                stroke:f.verticalErrorBarColor
                }).add(this.group);
        if(r.hErrorValue)q=r.hErrorValue,o=h,e=j,g=f.horizontalErrorBarWidth,g/=2,b.push(K,o,e,M),q=this.xAxis.translate(q,0,0,0,0,1),b.push(o+q,e,K,o+q,e+g,M,o+q,e-g),f.halfHorizontalErrorBar===0&&b.push(K,o,e,M,o-q,e,K,o-q,e+g,M,o-q,e-g),r.hErrorPath=b,(e=r.hErrorGraph)?(ac(e),e.animate({
            d:b
        })):r.hErrorGraph=c.renderer.path(b).attr({
            "stroke-width":f.verticalErrorBarThickness,
            stroke:f.verticalErrorBarColor
            }).add(this.group);
        b=r.pointAttr[r.selected?"select":hb];
        e=b.r;
        g=(r.marker&&r.marker.startAngle||90)*Gb;
        n?n.animate({
            x:h,
            y:j,
            r:e
        }):r.graphic=c.renderer.symbol(t(r.marker&&r.marker.symbol,this.symbol),h,j,e,{
            startAngle:g
        }).attr(b).add(this.group)
        }
    },
convertAttribs:function(b,a,c,f){
    var h=this.pointAttrToOptions,j,d,r={},b=b||{},a=a||{},c=c||{},f=f||{};
    
    for(j in h)d=h[j],r[j]=t(b[d],a[j],c[j],f[j]);return r
    },
getAttribs:function(){
    var b=this,a=Ka[b.type].marker?b.options.marker:
    b.options,c=a.states,f=c[Z],h,j=b.color,d={
        stroke:j,
        fill:j
    },r=b.data,g=[],n,q=b.pointAttrToOptions,s;
    b.options.marker?(f.radius=f.radius||a.radius+2,f.lineWidth=f.lineWidth||a.lineWidth+1):f.color=f.color||Eb(f.color||j).brighten(f.brightness).get();
    g[hb]=b.convertAttribs(a,d);
    T([Z,"select"],function(a){
        g[a]=b.convertAttribs(c[a],g[hb])
        });
    b.pointAttr=g;
    for(j=r.length;j--;){
        d=r[j];
        if((a=d.options&&d.options.marker||d.options)&&a.enabled===!1)a.radius=0;
        h=!1;
        if(d.options)for(s in q)e(a[q[s]])&&(h=!0);
        if(h){
            n=[];
            c=a.states||{};
            
            h=c[Z]=c[Z]||{};
            
            if(!b.options.marker)h.color=Eb(h.color||d.options.color).brighten(h.brightness||f.brightness).get();
            n[hb]=b.convertAttribs(a,g[hb]);
            n[Z]=b.convertAttribs(c[Z],g[Z],n[hb]);
            n.select=b.convertAttribs(c.select,g.select,n[hb])
            }else n=g;
        d.pointAttr=n
        }
    },
destroy:function(){
    var b=this,c=b.chart,f=b.clipRect,h=/\/5[0-9\.]+ (Safari|Mobile)\//.test(Cb),j,d;
    Ha(b,"destroy");
    Hb(b);
    b.legendItem&&b.chart.legend.destroyItem(b);
    T(b.data,function(b){
        b.destroy()
        });
    b.graphLine&&
    T(b.graphLine,function(b){
        b.destroy()
        });
    if(f&&f!==c.clipRect)b.clipRect=f.destroy();
    T(["area","graph","dataLabelsGroup","group","tracker"],function(a){
        b[a]&&(j=h&&a==="group"?"hide":"destroy",b[a][j]())
        });
    if(c.hoverSeries===b)c.hoverSeries=null;
    a(c.series,b);
    for(d in b)delete b[d]
    },
drawDataLabels:function(){
    if(this.options.dataLabels.enabled){
        var b,a,c=this.data,f=this.options,h=f.dataLabels,j,d=this.dataLabelsGroup,r=this.chart,g=r.renderer,n=r.options.chart,q=r.inverted,s=this.type,o=f.stacking,
        U=/^(column|column3d|bar|bar3d|floatedcolumn)$/.test(s),v=h.verticalAlign===null,p=h.y===null,ca=r.plotWidth,O=r.plotHeight,l=g.smartLabel,ja,ra,wa,x,z,P,u,G,K,M=/^(line|area|stepzoom)$/.test(s),F=this.depthYDisplacement||0,y=this.depthXDisplacement||0,I,xa=h.style.fontSize.replace(/px/,""),E=g.box.nodeName=="svg"&&!o?2:0,B,C,w=!1,L=n.valuePadding,W=2+L,R=s=="floatedcolumn",Z=r.options.chart.usePerPointLabelColor;
        l.setStyle(h.style);
        if(U)o?(v&&(h=ka(h,{
            verticalAlign:"middle"
        })),p&&(h=ka(h,{
            y:{
                top:14,
                middle:4,
                bottom:-6
            }
            [h.verticalAlign]
            })),h.align="center"):v&&(h=ka(h,{
            verticalAlign:"top"
        }));
        if(!/^(bar|pie|bar3d)$/.test(s))h.rotation=x=n.rotateValues==1?270:void 0;
        if(/^(column|column3d|bar|bar3d|floatedcolumn)$/.test(s))ja=n.placeValuesInside;
        d?d.translate(r.plotLeft,r.plotTop):(d=this.dataLabelsGroup=g.g("data-labels").attr({
            visibility:this.visible?Da:Fa,
            zIndex:6
        }).translate(r.plotLeft,r.plotTop).add(),r.options.chart.hasScroll&&d.clip(this.clipRect));
        r=h.color;
        r==="auto"&&(r=null);
        h.style.color=
        t(r,this.color,"black");
        T(c,function(r,n){
            var v=r.barX,ta=v&&v+r.barW/2||(r.plotX!=null?r.plotX:-999),ea=t(r.plotY,-999),Fa=r.dataLabel,Da=h.align,T=p?r.y>=0?-6:12:h.y;
            G=h.formatter.call(r.getLabelConfig());
            if(G!=null){
                R&&(ea=X(r.barY,ea));
                u=l.getOriSize(G,void 0,void 0,!1);
                j=u.text;
                b=(q?ca-ea:ta)+h.x;
                a=(q?O-ta:ea)+T;
                K=void 0;
                B=rb(r.valuePosition,"auto").toLowerCase();
                if(M)switch(B){
                    case "above":
                        ja=0;
                        break;
                    case "below":
                        ja=1;
                        break;
                    default:
                        C=c[n-1],ja=(C&&C.plotY)<r.plotY?1:0
                        }
                        w=r.y<0;
                ta=Number(R?r.barY:
                    r.plotY);
                if(x){
                    Da="left";
                    T=w?-4-L:T+2-L;
                    wa=u.width-T;
                    ra=u.height-T;
                    I=u.width;
                    z=X(r.barH,O-ta);
                    P=ta;
                    if(wa<=P){
                        a=P+T;
                        if(w){
                            a=ea-T+F;
                            Da="right";
                            if(ja&&z>wa||wa>O-ea)a=ea+T+F,Da="left";
                            b+=y
                            }
                            ja&&!w&&r.y!=0&&wa<=z&&(Da=w?"center":"right",a=P-T+F,b+=y)
                        }else wa<=z?(Da="right",a=P-T+F,b+=y,w&&(a=P-T+F)):(a=P+T,K=P,z>P&&R&&(a=O+F,b+=y,K=z),a<I&&(a=0,Da="right"));
                    b+=xa/2-E
                    }else T=w?-4-L:T+2-L,ra=u.width+W,wa=xa-T,I=xa,z=O-ta,P=ta,/^(bar|bar3d)$/.test(s)?(a-=E,z=r.barH,P=ca-r.barH,w?(P=ca-ta,ja&&z>ra||ra>P&&
                    z>ra?(b=P+L+2+y,a+=F):ra<P?(b=P-(L+2)+y,a+=F,Da="right"):(b=6,Da="left")):(P=ta,ja&&z>ra||ra>P&&z>ra?(b=ca-P-(L+2)+y,Da="right",a+=F):ra<P?b=ca-P+(L+2):(b=ca-6,a+=F,Da="right")),b<0&&(b=6,Da="left"),b>ca&&(b=ca-6,Da="right")):(w?(P=X(r.barH,ta),a=ja&&P>wa||wa>z?ea+T+F:ea+wa+F,b+=y):(z=X(r.barH,O-ta),ja&&z>=wa&&r.y!=0||wa>P?(a=ea+wa+F,b+=y):a=ea+T,s=="bubble"&&(a=ea-T/2)),a>O&&(a=O),a<0&&(a=I));
                Da=o?"center":Da;
                if(K)u=l.getOriSize(G,K,void 0,!0),j=u.text;
                if(Fa)q&&!h.y&&(a=a+J(Fa.styles.lineHeight)*
                    0.9-Fa.getBBox().height/2),Fa.attr({
                    text:j
                }).animate({
                    x:b,
                    y:a
                });
                else if(e(j)&&(Fa=r.dataLabel=g.text(j,b,a).attr({
                    align:Da,
                    rotation:h.rotation,
                    zIndex:1
                }).css(h.style).add(d),Z&&r.color&&r.color.FCcolor&&r.color.FCcolor.color&&r.color.FCcolor.color.toString&&Fa.css({
                    color:"#"+r.color.FCcolor.color.split(",")[0].replace(Ta,jb)
                    }),q&&!h.y&&Fa.attr({
                    y:a+J(Fa.styles.lineHeight)*0.9-Fa.getBBox().height/2
                    }),U&&f.stacking&&Fa))ea=r.barY,Da=r.barW,T=r.barH,Fa.align(h,null,{
                    x:q?ca-ea-T:v+y,
                    y:q?O-v-Da+xa/2+F:
                    ea,
                    width:q?T:Da,
                    height:q?Da:T
                    })
                }
                })
    }
},
drawGraph:function(){
    var b=this,a=b.options,c=[],f,h=b.area,j=b.group,d=a.lineColor||b.color,r=a.lineWidth,e=a.dashStyle,g,n=b.chart.renderer,q=b.yAxis.getThreshold(a.threshold||0),s=/^area/.test(b.type),o=[],U=[],v,p=[],ca=[],O,l=0,ja=[],ra=b.shadowGroup;
    if(!ra&&a.shadow)ra=b.shadowGroup=n.g("shadow").add(j),ra.floated=!0;
    T(b.segments,function(f){
        g=[];
        T(f,function(c,h){
            if(b.getPointSpline){
                g.push.apply(g,b.getPointSpline(f,c,h));
                var j=b.getPointSpline(f,c,h);
                j[0]=="C"?(m=f[h-1],p.push(ja.concat(j)),ca.push(m.config),l++,ja=["M"].concat(j.slice(j.length-2))):ja=j
                }else{
                g.push(h?M:K);
                if(h&&a.step){
                    var m=f[h-1];
                    g.push(c.plotX,m.plotY)
                    }
                    h&&(m=f[h-1],p[l]=[],a.step?(p[l].push(K,m.plotX,m.plotY,M,c.plotX,m.plotY),a.drawVerticalJoins&&p[l].push(c.plotX,c.plotY)):p[l].push(K,m.plotX,m.plotY,M,c.plotX,c.plotY),ca.push(m.config),l++);
                g.push(c.plotX,c.plotY)
                }
            });
    f.length>1?c=c.concat(g):o.push(f[0]);
        if(s){
        var h=[],j,d=g.length;
        for(j=0;j<d;j++)h.push(g[j]);
        d===3&&h.push(M,
            g[1],g[2]);
        if(a.stacking&&b.type!=="areaspline")for(j=f.length-1;j>=0;j--)h.push(f[j].plotX,f[j].yBottom);else h.push(M,f[f.length-1].plotX,q,M,f[0].plotX,q);
        U=U.concat(h)
        }
    });
if(s){
    var wa=[];
    T(p,function(c){
        var f=[],h,j=c.length;
        for(h=0;h<j;h++)f.push(c[h]);
        if(a.stacking&&b.type!=="areaspline")for(h=p.length-1;h>=0;h--);else f.push(M,c[c.length-2],q,M,c[1],q);
        wa.push(f)
        })
    }
    b.graphPath=c;
b.singlePoints=o;
if(s)f=t(a.fillColor,Eb(b.color).setOpacity(a.fillOpacity||0.75).get()),h?h.animate({
    d:U
}):b.area=
b.chart.renderer.path(U).attr({
    fill:f
}).add(j);
var z,x;
if(s||b.getPointSpline)if(x=b.graphLine,v={
    stroke:d,
    "stroke-width":r,
    "stroke-linecap":"round",
    dashstyle:e
},x)x.animate({
    d:g
});
else{
    if(r)O=ca,b.graphLine=n.path(g).attr(v).add(j).shadow(a.shadow,ra,O.shadow)
        }else{
    if(!b.graphLine)b.graphLine=[];
    T(p,function(c,f){
        z=b.graphLine;
        (x=z[f])?x.animate({
            d:c
        }):r&&(O=ca[f],v={
            stroke:C(O.color,d),
            "stroke-width":r,
            "stroke-linecap":"round",
            dashstyle:C(O.dashStyle,e)
            },z[f]=n.path(c).attr(v).add(j).shadow(a.shadow,
            ra,O.shadow))
        })
    }
},
render:function(){
    var b=this,a=b.chart,c,f,h=b.options,j=h.animation,d=j&&b.animate,j=d?j&&j.duration||500:0,r=b.clipRect,e=a.renderer;
    if(!r){
        var g=0,n=0,q=a.plotSizeX,s=a.plotSizeY;
        a.options.chart.hasScroll||(g=-(a.inverted?a.plotTop:a.plotLeft),n=-(a.inverted?a.plotLeft:a.plotTop),q=a.inverted?a.chartHeight:a.chartWidth,s=a.inverted?a.chartWidth:a.chartHeight);
        r=b.clipRect=!a.hasRendered&&a.clipRect?a.clipRect:e.clipRect(g,n,q,s);
        r.cliprectX=g;
        r.cliprectY=n;
        r.cliprectW=q;
        r.cliprectH=
        s;
        if(!a.clipRect)a.clipRect=r
            }
            if(!b.group)c=b.group=e.g("series"),a.inverted&&(f=function(){
        c.attr({
            width:a.plotWidth,
            height:a.plotHeight
            }).invert()
        },f(),Ea(a,"resize",f),Ea(b,"destroy",function(){
        Hb(a,"resize",f)
        })),c.clip(b.clipRect).attr({
        visibility:b.visible?Da:Fa,
        zIndex:h.zIndex
        }).translate(a.plotLeft,a.plotTop).add(a.seriesGroup);
    b.drawDataLabels();
    d&&b.animate(!0);
    b.drawGraph&&b.drawGraph();
    b.drawPoints();
    b.options.enableMouseTracking!==!1&&b.drawTracker();
    d&&b.animate();
    setTimeout(function(){
        r.isAnimating=
        !1;
        if((c=b.group)&&r!==a.clipRect&&r.renderer)c.clip(b.clipRect=a.clipRect),r.destroy()
            },j);
    b.isDirty=!1
    },
redraw:function(){
    var b=this.chart,a=this.group;
    a&&(b.inverted&&a.attr({
        width:b.plotWidth,
        height:b.plotHeight
        }),a.animate({
        translateX:b.plotLeft,
        translateY:b.plotTop
        }));
    this.translate();
    this.setTooltipPoints(!0);
    this.render()
    },
setState:function(b){
    var a=this.options,c=this.graph,f=a.states,a=a.lineWidth,b=b||hb;
    if(this.state!==b)this.state=b,f[b]&&f[b].enabled===!1||(b&&(a=f[b].lineWidth||a+1),
        c&&!c.dashstyle&&c.attr({
            "stroke-width":a
        },b?0:500))
    },
setVisible:function(b,a){
    var c=this.chart,f=this.legendItem,h=this.group,j=this.tracker,d=this.dataLabelsGroup,r=this.shadowGroup,e,g=this.data,n=c.options.chart.ignoreHiddenSeries;
    e=this.visible;
    e=(this.visible=b=b===wa?!e:b)?"show":"hide";
    if(h)h[e]();
    if(r&&r.floated)r[e]();
    if(j)j[e]();else for(h=g.length;h--;)if(j=g[h],j.tracker)j.tracker[e]();if(d)d[e]();
    f&&c.legend.colorizeItem(this,b);
    this.isDirty=!0;
    this.options.stacking&&T(c.series,function(b){
        if(b.options.stacking&&
            b.visible)b.isDirty=!0
            });
    if(n)c.isDirtyBox=!0;
    a!==!1&&c.redraw();
    Ha(this,e)
    },
show:function(){
    this.setVisible(!0)
    },
hide:function(){
    this.setVisible(!1)
    },
scroll:function(b,a,c){
    var f=this.chart,h=this.clipRect,j=f.plotLeft-b,d=f.plotTop-a,r=this.data,e=0,g=r.length;
    this.group.translate(j,d);
    this.dataLabelsGroup.translate(j,d);
    f.trackerGroup.translate(j,d);
    h.attr({
        x:b,
        y:a
    });
    if(c===void 0||c){
        for(;e<g;e+=1)if(c=r[e],c.y!==null)f=c.plotX-b+20,h=c.plotY-a-15,f=f<0?0:f,h=h<0?0:h,c.tooltipPos=[f,h];this.xShift=
        S(b);
        this.yShift=S(a)
        }
    },
select:function(b){
    this.selected=b=b===wa?!this.selected:b;
    if(this.checkbox)this.checkbox.checked=b;
    Ha(this,b?"select":"unselect")
    },
drawTracker:function(){
    var b=this,a=b.options,c=[].concat(b.graphPath),f=c.length,h=b.chart,j=h.options.tooltip.snap,d=b.tracker,r=a.cursor,e=r&&{
        cursor:r
    },r=b.singlePoints,g;
    h.options.chart.hasScroll&&h.trackerGroup.clip(b.clipRect);
    var n,q,s,o,U=+new Date;
    T(b.data,function(c){
        if(n=c.errorValue)q=c.errorPath,(s=c.errorTracker)?s.attr({
            d:q
        }):(o=

        {
            series:b,
            chart:h,
            id:c.id,
            label:c.label,
            options:c.options,
            svgElm:c.svgElm,
            toolText:n+"",
            getLabelConfig:c.getLabelConfig
            },c.errorTracker=h.renderer.path(q).attr({
            "stroke-width":a.errorBarThickness,
            stroke:Za,
            isTracker:U,
            fill:Za,
            visibility:b.visible?Da:Fa,
            zIndex:1
        }).on(ca?"touchstart":"mouseover",function(b,a){
            return function(c){
                var f=a.plotLeft,k=a.plotTop;
                b.tooltipPos=[C(c.layerX,c.x)-f+20,C(c.layerY,c.y)-k-15];
                a.tooltip.refresh(b)
                }
            }(o,h)).on("mousemove",function(b,a){
            return function(c){
                var f=a.plotLeft,
                k=a.plotTop;
                b.tooltipPos=[C(c.layerX,c.x)-f+20,C(c.layerY,c.y)-k-15];
                a.tooltip.refresh(b)
                }
            }(o,h)).on("mouseout",function(b){
            return function(){
                b.tooltip.hide()
                }
            }(h)).css(e).add(c.group||h.trackerGroup))
    });
if(f)for(g=f+1;g--;)c[g]===K&&c.splice(g+1,0,c[g+1]-j,c[g+2],M),(g&&c[g]===K||g===f)&&c.splice(g,0,M,c[g-2]+j,c[g-1]);
for(g=0;g<r.length;g++)f=r[g],c.push(K,f.plotX-j,f.plotY,M,f.plotX+j,f.plotY);
d?d.attr({
    d:c
}):b.tracker=h.renderer.path(c).attr({
    isTracker:!0,
    stroke:Za,
    fill:lb,
    "stroke-width":a.lineWidth+
    2*j,
    visibility:b.visible?Da:Fa,
    zIndex:a.zIndex||1
    }).on(ca?"touchstart":"mouseover",function(){
    if(h.hoverSeries!==b)b.onMouseOver()
        }).on("mouseout",function(){
    if(!a.stickyTracking)b.onMouseOut()
        }).css(e).add(h.trackerGroup)
}
};

W=x(wb);
Ga.line=W;
W=x(wb,{
    type:"area"
});
Ga.area=W;
W=x(wb,{
    type:"spline",
    getPointSpline:function(b,a,c){
        var f=a.plotX,h=a.plotY,j=b[c-1],d=b[c+1],r,e,g,n;
        if(c&&c<b.length-1){
            b=j.plotY;
            g=d.plotX;
            var d=d.plotY,q;
            r=(1.5*f+j.plotX)/2.5;
            e=(1.5*h+b)/2.5;
            g=(1.5*f+g)/2.5;
            n=(1.5*h+d)/2.5;
            q=(n-e)*(g-f)/(g-r)+h-n;
            e+=q;
            n+=q;
            e>b&&e>h?(e=Aa(b,h),n=2*h-e):e<b&&e<h&&(e=ob(b,h),n=2*h-e);
            n>d&&n>h?(n=Aa(d,h),e=2*h-n):n<d&&n<h&&(n=ob(d,h),e=2*h-n);
            a.rightContX=g;
            a.rightContY=n
            }
            c?(a=["C",j.rightContX||j.plotX,j.rightContY||j.plotY,r||f,e||h,f,h],j.rightContX=j.rightContY=null):a=[K,f,h];
        return a
        }
    });
Ga.spline=W;
W=x(W,{
    type:"areaspline"
});
Ga.areaspline=W;
var bc=x(wb,{
    type:"column",
    pointAttrToOptions:{
        stroke:"borderColor",
        "stroke-width":"borderWidth",
        fill:"color",
        r:"borderRadius",
        dashstyle:"dashStyle"
    },
    init:function(){
        wb.prototype.init.apply(this,arguments);
        var b=this,a=b.chart;
        a.hasColumn=!0;
        a.hasRendered&&T(a.series,function(a){
            if(a.type===b.type)a.isDirty=!0
                })
        },
    translate:function(){
        var b=this,a=b.chart,c=b.options,f=c.stacking,h=c.borderWidth,j=0,d=b.xAxis.reversed,r=b.xAxis.categories,n={},q,s;
        wb.prototype.translate.apply(b);
        T(a.series,function(a){
            if(a.type===b.type)a.options.stacking?(q=a.stackKey,n[q]===wa&&(n[q]=j++),s=n[q]):s=j++,a.columnIndex=s
                });
        var o=b.data,U=b.closestPoints,a=na(o[1]?
            o[U].plotX-o[U-1].plotX:a.plotSizeX/(r&&r.length||1)),r=a*c.groupPadding,U=(a-2*r)/j,v=c.pointWidth,p=e(v)?(U-v)/2:U*c.pointPadding,ca=Aa(t(v,U-2*p),1),v=na(X(c.maxColWidth,50))||1;
        ca>v&&c.groupPadding===0.1&&(r+=(ca-v)*j/2,U=ca=v);
        var O=p+(r+((d?j-b.columnIndex:b.columnIndex)||0)*U-a/2)*(d?-1:1),d=X(c.threshold,Aa(b.yAxis.options.min,0),0),l=b.yAxis.getThreshold(d),ja=t(c.minPointLength,5);
        T(o,function(a){
            var k=a.plotY,j=X(a.yBottom,l),d=a.plotX+O,r=Pb(ob(k,j)),n=Pb(Aa(k,j)-r),q=b.yAxis.stacks[(a.y<
                0?"-":"")+b.stackKey],s;
            f&&q&&q[a.x]&&q[a.x].setOffset(O,ca);
            na(n)<ja&&(ja&&(n=ja,r=na(r-l)>ja?j-ja:l-(k<=l?ja:0)),s=r-3);
            g(a,{
                barX:d,
                barY:r,
                barW:ca,
                barH:n
            });
            a.shapeType="rect";
            k={
                x:S(d),
                y:S(r),
                width:S(ca),
                height:S(n),
                r:c.borderRadius
                };
                
            h%2&&(k.y-=1,k.height+=1);
            a.shapeArgs=k;
            a.trackerArgs=e(s)&&ka(a.shapeArgs,{
                height:Aa(6,n+3),
                y:s
            })
            })
        },
    getSymbol:function(){},
    drawGraph:function(){},
    drawPoints:function(){
        var b=this,a=b.options,c=b.chart.renderer,f,h,j=b.shadowGroup,d,r,e,g,n,q,s=b.yAxis,o=s.reversed&&
        s.options.min<0?!0:!1,U=c.box.nodeName.toLowerCase()==="div"?!0:!1,v=b.inverted;
        T(b.data,function(s){
            var p=s.plotY;
            if(p!==wa&&!isNaN(p)&&s.y!==null&&(f=s.graphic,h=s.shapeArgs,f?(ac(f),f.animate(h)):(e=h.y,g=h.width,n=h.height,d=h.r,r=h.x,q=s.pointAttr[s.selected?"select":hb]["stroke-width"]%2===0?void 0:1,o&&s.color&&s.color.FCcolor&&(s.color.FCcolor.angle+=180),U&&v&&s.color&&s.color.FCcolor&&(s.color.FCcolor.angle+=90),s.graphic=c[s.shapeType](r,e,g,n,d,q).attr(s.pointAttr[s.selected?"select":
                hb]).add(b.group).shadow(a.shadow,j,s.shadow)),s.errorValue)){
                var ca=s.errorGraph,t,O,l=r+g/2,ja=[K,l,p,M],ra=g*a.errorBarWidthPercent/100/2;
                t=b.yAxis.translate(s.errorValue,0,0,0,0,1);
                O=p-t;
                t=p+t;
                ja.push(l,O,K,l+ra,O,M,l-ra,O);
                a.halfErrorBar===0&&ja.push(K,l,p,M,l,t,K,l-ra,t,M,l+ra,t);
                s.errorPath=ja;
                ca?(ac(ca),f.animate({
                    d:ja
                })):s.errorGraph=c.path(ja).attr({
                    "stroke-width":a.errorBarThickness,
                    stroke:a.errorBarColor
                    }).add(b.group)
                }
            })
    },
drawTracker:function(){
    var b=this,a=b.chart,c=a.renderer,f,h,j=
    +new Date,d=b.options,r;
    a.options.chart.hasScroll&&a.trackerGroup.clip(b.clipRect);
    T(b.data,function(e){
        h=e.tracker;
        var g=e.errorTracker,n=e.errorValue;
        f=e.trackerArgs||e.shapeArgs||{};
        
        delete f.strokeWidth;
        if(e.y!==null){
            if(h)h.attr(f);
            else{
                if(e.link!==void 0)var q={
                    cursor:"pointer",
                    _cursor:"hand"
                };
                
                e.tracker=c[e.shapeType](f).attr({
                    isTracker:j,
                    fill:Za,
                    visibility:b.visible?Da:Fa,
                    zIndex:d.zIndex||1
                    }).on(ca?"touchstart":"mouseover",function(c){
                    r=c.relatedTarget||c.fromElement;
                    if(a.hoverSeries!==b&&u(r,
                        "isTracker")!==j)b.onMouseOver();
                    e.onMouseOver()
                    }).on("mouseout",function(a){
                    if(!d.stickyTracking&&(r=a.relatedTarget||a.toElement,u(r,"isTracker")!==j))b.onMouseOut()
                        }).css(q).add(e.group||a.trackerGroup)
                }
                if(n)n=e.errorPath,g?g.attr({
                d:n
            }):(g={
                series:b,
                chart:a,
                id:e.id,
                label:e.label,
                options:e.options,
                svgElm:e.svgElm,
                toolText:e.errorValue+"",
                getLabelConfig:e.getLabelConfig
                },e.errorTracker=c.path(n).attr({
                "stroke-width":Aa(b.options.errorBarThickness,10),
                stroke:Za,
                isTracker:j,
                fill:Za,
                visibility:b.visible?
                Da:Fa,
                zIndex:1
            }).on(ca?"touchstart":"mouseover",function(b,a){
                return function(c){
                    var f=a.plotLeft,k=a.plotTop;
                    b.tooltipPos=[C(c.layerX,c.x)-f+20,C(c.layerY,c.y)-k-15];
                    a.tooltip.refresh(b)
                    }
                }(g,a)).on("mousemove",function(b,a){
                return function(c){
                    var f=a.plotLeft,k=a.plotTop;
                    b.tooltipPos=[C(c.layerX,c.x)-f+20,C(c.layerY,c.y)-k-15];
                    a.tooltip.refresh(b)
                    }
                }(g,a)).on("mouseout",function(b){
                return function(){
                    b.tooltip.hide()
                    }
                }(a)).css(q).add(e.group||a.trackerGroup))
    }
    })
},
animate:function(b){
    var a=this,c=a.data;
    if(!b)T(c,function(b){
        var c=b.graphic,b=b.shapeArgs;
        c&&(c.attr({
            height:0,
            y:a.yAxis.getThreshold(a.options.threshold||0)
            }),c.animate({
            height:b.height,
            y:b.y
            },a.options.animation))
        }),a.animate=null
    },
remove:function(){
    var b=this,a=b.chart;
    a.hasRendered&&T(a.series,function(a){
        if(a.type===b.type)a.isDirty=!0
            });
    wb.prototype.remove.apply(b,arguments)
    }
});
Ga.column=bc;
W=x(bc,{
    type:"bar",
    init:function(b){
        b.inverted=this.inverted=!0;
        bc.prototype.init.apply(this,arguments)
        }
    });
Ga.bar=W;
W=x(wb,{
    type:"scatter",
    translate:function(){
        var b=this;
        wb.prototype.translate.apply(b);
        T(b.data,function(a){
            a.shapeType="circle";
            a.shapeArgs={
                x:a.plotX,
                y:a.plotY,
                r:b.chart.options.tooltip.snap
                }
            })
    },
drawTracker:function(){
    var b=this,a=b.chart,c;
    T(b.data,function(f){
        var h,j,d=a.renderer,r=f.hErrorValue,e=f.vErrorValue;
        if(r)h=f.hErrorPath,(j=f.hErrorTracker)?j.attr({
            d:h
        }):(j={
            series:b,
            chart:a,
            id:f.id,
            label:f.label,
            options:f.options,
            svgElm:f.svgElm,
            toolText:r+"",
            getLabelConfig:f.getLabelConfig
            },f.hErrorTracker=d.path(h).attr({
            "stroke-width":b.options.verticalErrorBarThickness,
            stroke:Za,
            isTracker:void 0,
            fill:Za,
            visibility:b.visible?Da:Fa,
            zIndex:1
        }).on(ca?"touchstart":"mouseover",function(b,a){
            return function(c){
                var f=a.plotLeft,h=a.plotTop;
                b.tooltipPos=[C(c.layerX,c.x)-f+20,C(c.layerY,c.y)-h-15];
                a.tooltip.refresh(b)
                }
            }(j,a)).on("mousemove",function(b,a){
            return function(c){
                var f=a.plotLeft,h=a.plotTop;
                b.tooltipPos=[C(c.layerX,c.x)-f+20,C(c.layerY,c.y)-h-15];
                a.tooltip.refresh(b)
                }
            }(j,a)).on("mouseout",function(b){
            return function(){
                b.tooltip.hide()
                }
            }(a)).css(g).add(f.group||
        a.trackerGroup));
if(e)h=f.vErrorPath,(j=f.vErrorTracker)?j.attr({
    d:h
}):(j={
    series:b,
    chart:a,
    id:f.id,
    label:f.label,
    options:f.options,
    svgElm:f.svgElm,
    toolText:e+"",
    getLabelConfig:f.getLabelConfig
    },f.vErrorTracker=d.path(h).attr({
    "stroke-width":b.options.horizontalErrorBarThickness,
    stroke:Za,
    isTracker:void 0,
    fill:Za,
    visibility:b.visible?Da:Fa,
    zIndex:1
}).on(ca?"touchstart":"mouseover",function(b,a){
    return function(c){
        var f=a.plotLeft,h=a.plotTop;
        b.tooltipPos=[C(c.layerX,c.x)-f+20,C(c.layerY,c.y)-h-15];
        a.tooltip.refresh(b)
        }
    }(j,a)).on("mousemove",function(b,a){
    return function(c){
        var f=a.plotLeft,h=a.plotTop;
        b.tooltipPos=[C(c.layerX,c.x)-f+20,C(c.layerY,c.y)-h-15];
        a.tooltip.refresh(b)
        }
    }(j,a)).on("mouseout",function(b){
    return function(){
        b.tooltip.hide()
        }
    }(a)).css(g).add(f.group||a.trackerGroup));
if(f.link!==void 0)var g={
    cursor:"pointer",
    _cursor:"hand"
};
(c=f.graphic)&&c.attr({
    isTracker:!0
    }).on("mouseover",function(){
    b.onMouseOver();
    f.onMouseOver()
    }).on("mouseout",function(){
    if(!b.options.stickyTracking)b.onMouseOut()
        }).css(g)
})
},
cleanData:function(){}
});
Ga.scatter=W;
var W=x(Yb,{
    init:function(){
        Yb.prototype.init.apply(this,arguments);
        var b=this,a;
        g(b,{
            visible:b.visible!==!1,
            name:t(b.name,"Slice")
            });
        !b.link&&!b.doNotSlice&&Ea(b,"click",function(){
            b.series&&b.series.rotationStartInstanceAngle?delete b.series.rotationStartInstanceAngle:b.slice()
            });
        return b
        },
    setVisible:function(b){
        var a=this.series.chart,c=this.tracker,f=this.dataLabel,h=this.connector,j=this.shadowGroup,d;
        d=(this.visible=b=b===wa?!this.visible:b)?"show":"hide";
        this.group[d]();
        if(c)c[d]();
        if(f)f[d]();
        if(h)h[d]();
        if(j)j[d]();
        this.legendItem&&a.legend.colorizeItem(this,b)
        },
    labelPrevX:0,
    slice:function(b,a,c){
        var f=this.series,h=f.chart,j=this.slicedTranslation;
        ga(c,h);
        t(a,!0);
        b=this.sliced=e(b)?b:!this.sliced;
        a={
            translateX:b?j[0]:h.plotLeft,
            translateY:b?j[1]:h.plotTop
            };
            
        f.pie3DManager?this.graphic.animate(a):this.group.animate(a);
        this.shadowGroup&&this.shadowGroup.animate(a);
        f=j[0]-h.plotLeft;
        h=j[1]-h.plotTop;
        this.connectorPath&&(this.connectorPath[1]+=b?f:
            -f,this.connectorPath[2]+=b?h:-h,this.connectorPath[4]+=b?f:-f,this.connectorPath[6]+=b?f:-f,this.connector.animate({
                d:this.connectorPath
                }));
        this.dataLabel&&this.dataLabel._x&&(this.dataLabel.animate({
            x:b?this.dataLabel._x+f:this.dataLabel._x
            }),this.dataLabel.textBoundWrapper&&this.dataLabel.textBoundWrapper.animate({
            x:this.dataLabel.textBoundWrapper.x-(this.dataLabel.x-this.dataLabel._x)+(b?f:-f)
            }))
        }
    }),oc=function(b,a){
    return Qb(b[1]-(this.pageY||this.originalEvent&&this.originalEvent.pageY)+a.top,
        b[0]-(this.pageX||this.originalEvent&&this.originalEvent.pageX)+a.left)
    },W=x(wb,{
    type:"pie",
    isCartesian:!1,
    pointClass:W,
    pointAttrToOptions:{
        stroke:"borderColor",
        "stroke-width":"borderWidth",
        fill:"color"
    },
    getColor:function(){
        this.initialColor=this.chart.counters.color
        },
    animate:function(){
        var b=this;
        T(b.data,function(a){
            var c=a.graphic,a=a.shapeArgs,f=2*mb;
            c&&(c.attr({
                start:f,
                end:f
            }),c.animate({
                r:a.r,
                start:a.start,
                end:a.end
                },b.options.animation))
            });
        b.animate=null
        },
    rotate:function(b){
        var a=this.data,
        c=this.options.slicedOffset,f=this.chart.plotLeft,h=this.chart.plotTop,j=X(this.chart.options.chart.startingAngle,0),d;
        d=(b-j)%360;
        this.chart.options.chart.startingAngle=X(b,this.chart.options.chart.startingAngle)%360;
        d=d*mb/180;
        T(a,function(b){
            var a=b.graphic,k=b.shadowGroup,j=b.tracker,r=b.shapeArgs,e={
                start:r.start+=d,
                end:r.end+=d
                },g=b.centerAngle=(e.start+e.end)/2%Bb,n=b.sliced,q=r.r*0.7,s;
            b.slicedTranslation=Xb([ua(g)*c+f,Ba(g)*c+h],S);
            s={
                translateX:b.slicedTranslation[0],
                translateY:b.slicedTranslation[1]
                };
            b.tooltipPos=[r.x+ua(g)*q,r.y+Ba(g)*q];
            j&&j.attr(e);
            a&&(a.attr(e),n&&b.group.attr(s));
            k&&n&&b.shadowGroup.attr(s)
            });
        this.drawDataLabels(!0)
        },
    translate:function(){
        var b=0,a=this,c=a.options,f=-1*(C(this.chart.options.chart.startingAngle,0)%360/360),h=X(c.dataLabels.distance,20),j=c.slicedOffset,d=j+c.borderWidth,r=c.center,e=a.chart,g=e.plotWidth,n=e.plotHeight,q,s,o,U=a.data,v=2*mb,p,t=ob(g,n),ca,O,l,ja=c.dataLabels.distance;
        r.push(c.size,c.innerSize||0);
        r=Xb(r,function(b,a){
            return(ca=/%$/.test(b))?
            [g,n,t,t][a]*J(b)/100:b
            });
        a.getX=function(b,a){
            o=fa.asin((b-r[1])/(r[2]/2+ja));
            return r[0]+(a?-1:1)*ua(o)*(r[2]/2+ja)
            };
            
        a.center=r;
        T(U,function(a){
            b+=a.y
            });
        a.labelsRadius=r[2]/2+h;
        a.quadrantHeight=n/2;
        a.quadrantWidth=g/2;
        h=c.dataLabels;
        c=X(parseInt(h.style.fontSize,10),10)+4;
        a.maxLabels=Math.floor(a.quadrantHeight/c);
        a.labelFontSize=c;
        a.connectorPadding=X(h.connectorPadding,5);
        a.isSmartLineSlanted=C(h.isSmartLineSlanted,!0);
        a.connectorWidth=X(h.connectorWidth,1);
        a.enableSmartLabels=h.enableSmartLabels;
        T(U,function(c){
            p=b?c.y/b:0;
            q=S(f*v*1E3)/1E3;
            f+=p;
            s=S(f*v*1E3)/1E3;
            c.shapeType="arc";
            c.shapeArgs={
                x:r[0],
                y:r[1],
                r:r[2]/2,
                innerR:r[3]/2,
                start:q,
                end:s
            };
            
            if(c.color.FCcolor&&c.color.FCcolor.gradientUnits!=="objectBoundingBox")c.color.FCcolor.cx=r[0],c.color.FCcolor.cy=r[1],c.color.FCcolor.r=r[2]/2;
            c.centerAngle=o=(s+q)/2%Bb;
            c.slicedTranslation=Xb([ua(o)*j+e.plotLeft,Ba(o)*j+e.plotTop],S);
            O=ua(o)*r[2]/2;
            a.radiusY=l=Ba(o)*r[2]/2;
            c.tooltipPos=[r[0]+O*0.7,r[1]+l*0.7];
            c.labelPos=[r[0]+O+ua(o)*ja,r[1]+l+Ba(o)*
            ja,r[0]+O+ua(o)*d,r[1]+l+Ba(o)*d,r[0]+O,r[1]+l,ja<0?"center":o<v/4?"left":"right",o];
            c.percentage=p*100;
            c.total=b
            });
        this.setTooltipPoints()
        },
    render:function(){
        this.drawPoints();
        this.options.enableMouseTracking!==!1&&this.drawTracker();
        this.drawDataLabels();
        this.options.animation&&this.animate&&this.animate();
        this.isDirty=!1
        },
    drawPoints:function(){
        var b=this.chart,a=b.renderer,c,f,h,j=this.options.shadow,r,d;
        T(this.data,function(e){
            f=e.graphic;
            d=e.shapeArgs;
            h=e.group;
            r=e.shadowGroup;
            if(j&&!r)r=e.shadowGroup=
                a.g("shadow").attr({
                    zIndex:4
                }).add();
            if(!h)h=e.group=a.g("point").attr({
                zIndex:5
            }).add();
            c=e.sliced?e.slicedTranslation:[b.plotLeft,b.plotTop];
            h.translate(c[0],c[1]);
            r&&r.translate(c[0],c[1]);
            f?f.animate(d):e.graphic=a.arc(d).attr(g(e.pointAttr[hb],{
                "stroke-linejoin":"round",
                dashstyle:e.dashStyle
                })).add(e.group).shadow(j,r,e.shadow);
            e.visible===!1&&e.setVisible(!1)
            })
        },
    drawDataLabels:function(){
        var b=function(b,a){
            return b.point.y-a.point.y
            },a=function(b,a){
            return b.angle-a.angle
            },c=["left","left",
        "right","right"],f=[-1,1,1,-1],h=[1,1,-1,-1];
        return function(j){
            var r=this.data,d,e,g=this.chart,n=g.options.instanceAPI.smartLabel,q=this.options.dataLabels;
            d=q.style;
            var s=X(parseInt(d.lineHeight,10),12),o=q.placeInside,U=q.skipOverlapLabels,v=q.manageLabelOverflow,p=this.connectorPadding,ca=this.connectorWidth,O,l,ja=q.distance;
            t(q.softConnector,!0);
            var ja=ja>0,ra=this.center,wa=ra[1],z=ra[0],ra=ra[2]/2,x=[[],[],[],[]],P,u=g.plotLeft,F=g.plotTop,g=g.plotSizeX,G,y,I,xa,E,B,w,C,L=this.labelsRadius,
            R=this.labelFontSize,W=R,Z=W/2,p=[p,p,-p,-p],ha=this.maxLabels,D=this.isSmartLineSlanted,Za=this.enableSmartLabels,J,ba;
            j||(wb.prototype.drawDataLabels.apply(this),n.setStyle(d));
            if(r.length==1){
                if(d=r[0],ba=d.dataLabel,d.slicedTranslation=[u,F],ba)ba.attr({
                    visibility:Da,
                    align:"center",
                    x:z,
                    y:wa+Z-2
                    }),ba.x=z
                }else if(o){
                var n=X(this.center[3],0)/2,ma=n+(ra-n)/2;
                T(r,function(b){
                    if(ba=b.dataLabel){
                        var a=b.centerAngle;
                        w=wa+ma*Ba(a)+Z-2;
                        xa=z+ma*ua(a);
                        ba.x=xa;
                        ba._x=xa;
                        ba.y=w;
                        if(b.sliced)b=b.slicedTranslation,
                            a=b[1]-F,xa+=b[0]-u,w+=a;
                        ba.attr({
                            visibility:Da,
                            align:"center",
                            x:xa,
                            y:w
                        });
                        ba.textBound()
                        }
                    })
            }else{
            T(r,function(b){
                if(ba=b.dataLabel){
                    var a=b.centerAngle;
                    a<0&&(a=Bb+a);
                    x[a<Mb?1:a<mb?2:a<Zb?3:0].push({
                        point:b,
                        angle:a
                    })
                    }
                });
        for(j=r=4;j--;){
            if(U&&(d=x[j].length-ha,d>0)){
                x[j].sort(b);
                C=x[j].splice(0,d);
                o=0;
                for(I=C.length;o<I;o+=1)d=C[o].point,d.dataLabel.attr({
                    visibility:Fa
                }),d.connector&&d.connector.attr({
                    visibility:Fa
                })
                }
                x[j].sort(a)
            }
            j=Aa(x[0].length,x[1].length,x[2].length,x[3].length);
        J=Aa(ob(j,ha)*W,
            L);
        x[1].reverse();
        for(x[3].reverse();r--;){
            C=x[r];
            I=C.length;
            U||(W=I>ha?J/I:R,Z=W/2);
            d=I*W-Z;
            o=J+Z;
            for(j=0;j<I;j+=1,d-=W)l=na(J*Ba(C[j].angle)),o-l<W?l=o-W:l<d&&(l=d),o=C[j].oriY=l;
            P=c[r];
            I=J-I*W+Z;
            o=-Z;
            for(j=C.length-1;j>=0;j-=1,I+=W){
                d=C[j].point;
                e=C[j].angle;
                O=d.sliced;
                ba=d.dataLabel;
                l=na(J*Ba(e));
                l-o<W?l=o+W:l>I&&(l=I);
                o=l;
                E=(l+C[j].oriY)/2;
                l=z+h[r]*L*ua(fa.asin(E/J));
                E*=f[r];
                E+=wa;
                B=wa+ra*Ba(e);
                e=z+ra*ua(e);
                xa=l+p[r];
                w=E+Z-2;
                ba.x=xa;
                ba._x=xa;
                if(v)G=r>1?xa:g-xa,y=ba._str=ba._str||ba.textStr||
                    ba.element&&ba.element.innerHTML,ba.attr({
                        text:n.getSmartText(y,G,s).text
                        });
                ba.y=w;
                if(O)G=d.slicedTranslation,O=G[0]-u,G=G[1]-F,xa+=O,l+=O,e+=O,B+=G;
                ba.attr({
                    visibility:Da,
                    align:P,
                    x:xa,
                    y:w
                });
                ba.textBound();
                if(ja&&ca&&Za)O=d.connector,d.connectorPath=l=[K,e,B,M,D?l:e,E,xa,E],O?(O.attr({
                    d:l
                }),O.attr("visibility",Da)):d.connector=O=this.chart.renderer.path(l).attr({
                    "stroke-width":ca,
                    stroke:q.connectorColor||"#606060",
                    visibility:Da,
                    zIndex:3
                }).translate(u,F).add()
                    }
                }
        }
}
}(),
drawTracker:function(){
    var b=this,
    a,c=[b.center[0]+b.chart.plotLeft,b.center[1]+b.chart.plotTop],f,h=b.options.enableRotation,j;
    h&&(j=function(a){
        f=o(b.chart.container);
        b.rotationStartInstanceAngle=oc.call(a,c,f)-b.chart.options.chart.startingAngle*Gb;
        b.chart.tooltip&&(a.type==="dragstart"?b.chart.tooltip.block(!0):(b.chart.tooltip.block(!1),b.chart.tooltip.refresh(a.data,!0)))
        });
    bc.prototype.drawTracker.apply(this,arguments);
    T(b.data,function(d){
        if(d.y===null||!(a=d.tracker)||a.canRotate===!0)return!0;
        h&&(Ea(a.element,"dragstart dragend",
            j,d),Ea(a.element,"drag",function(a){
            b.rotate((oc.call(a,c,f)-b.rotationStartInstanceAngle)/Gb)
            }))
        })
    },
getSymbol:function(){}
});
Ga.pie=W;
L=L.Highcharts={
    Chart:$a,
    dateFormat:ra,
    pathAnim:n,
    getOptions:function(){
        return s
        },
    hasRtlBug:c,
    numberFormat:E,
    Point:Yb,
    Color:Eb,
    Renderer:j,
    seriesTypes:Ga,
    setOptions:function(b){
        s=ka(s,b);
        Ka=s.plotOptions;
        bb();
        return s
        },
    Series:wb,
    addEvent:Ea,
    removeEvent:Hb,
    createElement:$,
    discardElement:Y,
    css:z,
    each:T,
    extend:g,
    attr:u,
    map:Xb,
    merge:ka,
    pick:t,
    extendClass:x,
    product:"Highcharts",
    version:"2.1.9",
    hasTouch:ca,
    hasSVG:r,
    isIE:Db,
    getPosition:o,
    FusionChartsModified:"3.2.3"
};

Ka.floatedcolumn=ka(Ka.column,{
    states:{
        hover:{}
}
});
c=L.extendClass(Ga.column,{
    type:"floatedcolumn",
    translate:function(){
        var b=this,a=b.chart,c=0,f=b.xAxis.reversed,h=b.xAxis.categories,j={},d,r,n,q;
        wb.prototype.translate.apply(b);
        T(a.series,function(a){
            if(a.type==b.type)a.options.stacking?(d=a.stackKey,j[d]===wa&&(j[d]=c++),q=j[d]):q=c++,a.columnIndex=q
                });
        var s=b.options,o=b.data,U=b.closestPoints,h=na(o[1]?o[U].plotX-
            o[U-1].plotX:a.plotSizeX/(h?h.length:1)),U=h*s.groupPadding,p=(h-2*U)/c,v=s.pointWidth,O=e(v)?(p-v)/2:p*s.pointPadding,ca=Aa(t(v,p-2*O),1),l=O+(U+((f?c-b.columnIndex:b.columnIndex)||0)*p-h/2)*(f?-1:1),f=s.threshold||0,ja=b.xAxis,h=b.yAxis,ra=ja.getExtremes(),z=h.getExtremes(),x=b.yAxis.getThreshold(f),P=t(s.minPointLength,5);
        T(o,function(c){
            var f=c.plotY,h=c.yBottom||x,j=c.plotX+l,d=Pb(ob(f,h)),m=Pb(Aa(f,h)-d),q,o;
            c._FCX!==void 0&&(j=ja.translate(c._FCX,0,0,0,1));
            c._FCY!==void 0&&(d=b.yAxis.translate(c._FCY,
                0,1,0,1));
            c._FCH!==void 0&&(m=S(c._FCH*Math.abs(a.plotSizeY/(z.max-z.min))*100)/100);
            o=c._FCW!==void 0?S(c._FCW*Math.abs(a.plotSizeX/(ra.max-ra.min))*100)/100:ca;
            na(m)<P&&(P&&(m=P,d=na(d-x)>P?h-P:x-(f<=x?P:0)),q=d-3);
            g(c,{
                barX:j,
                barY:d,
                barW:o,
                barH:m
            });
            c.shapeType="rect";
            c.shapeArgs={
                x:j,
                y:d,
                width:o,
                height:m,
                r:s.borderRadius
                };
                
            r=j+o/2+15;
            n=d-15;
            c.tooltipPos=[r<0?0:r,n<0?0:n];
            c.trackerArgs=e(q)&&ka(c.shapeArgs,{
                height:Aa(6,m+3),
                y:q
            })
            })
        }
    });
Ga.floatedcolumn=c;
Ka.ssgrid=ka(Ka.pie,{
    states:{
        hover:{}
}
});
var Oc=
function(b,a){
    var c=b.currentSeriesIndex,f=b.series,h=a?c-1:c+1;
    if(f[h])f[c].hide(),f[h].show(),b.currentSeriesIndex=h,xc(b)
        },xc=function(b){
    var a=b.series.length,c=b.currentSeriesIndex,f=b.naviigator;
    f.translate(0,b.series[c].data.length*b.options.chart.rowHeight);
    c===0?f.navElePrv.hide():f.navElePrv.show();
    c===a-1?f.navEleNxt.hide():f.navEleNxt.show()
    },Sc=function(b){
    var a=b.renderer,c=b.options.chart,f=c.navButtonRadius,h=f*0.67,j=c.navButtonPadding+h,d=c.width-20,r=c.navButtonHoverColor,e=c.navButtonColor,
    g,n;
    if(b.series.length>1){
        var q=b.naviigator=a.g("navigator").attr({
            zIndex:4
        }).add();
        q.navElePrv=c=a.g("navElePrv").add(q);
        g=a.path([K,20,j,M,20+f+h,j-h,20+f,j,20+f+h,j+h,"Z"]).attr({
            fill:e
        }).add(c);
        a.circle(20+f,j,f).attr({
            fill:dc,
            cursor:"pointer"
        }).on("mouseover",function(){
            g.attr({
                fill:r,
                cursor:"pointer"
            })
            }).on("mouseout",function(){
            g.attr({
                fill:e
            })
            }).on("click",function(){
            Oc(b,!0)
            }).add(c);
        q.navEleNxt=c=a.g("navEleNxt").add(q);
        n=a.path([K,d,j,M,d-f-h,j-h,d-f,j,d-f-h,j+h,"Z"]).attr({
            fill:e,
            cursor:"pointer"
        }).add(c);
        a.circle(d-f,j,f).attr({
            fill:dc,
            cursor:"pointer"
        }).on("mouseover",function(){
            n.attr({
                fill:r
            })
            }).on("mouseout",function(){
            n.attr({
                fill:e
            })
            }).on("click",function(){
            Oc(b)
            }).attr({
            fill:e
        }).add(c)
        }
    },c=L.extendClass(Ga.pie,{
    type:"ssgrid",
    translate:function(){
        var b=this.chart.options.chart,a=0,c=b.width,f=b.rowHeight,h=b.colorBoxWidth,j=b.colorBoxHeight,d=b.colorBoxX,r=b.labelX,e=b.valueX;
        T(this.data,function(b){
            b.shapeType="rect";
            b.alternateGradientBox={
                x:0,
                y:a,
                width:c,
                height:f,
                r:0
            };
            
            b.rowDivider=[K,0,a,
            M,c,a];
            b.colorBoxArgs={
                x:d,
                y:a+f/2-j/2,
                width:h,
                height:j,
                r:0
            };
            
            b.labelX=r;
            b.valueX=e;
            a+=f
            });
        this.options.lastRowDivider=[K,0,a,M,c,a]
        },
    drawPoints:function(){
        var b=this.chart.options.chart,a=this.chart.renderer,c,f=this.group,h=b.alternateRowColor,j=b.listRowDividerAttr,d=this.options.lastRowDivider,r=b.rowHeight,e=b.textStyle,g=b.lineHeight,n=b.width,q=b.valueColumnPadding,s,o,U,p,v,O,ca;
        T(this.data,function(b,d){
            c=b.graphic;
            s=b.rowDivider;
            o=b.colorBoxArgs;
            U=b.alternateGradientBox;
            O=b.valueX;
            if(!c)b.graphic=
                a.path(s).attr(j).add(f),d%2==0&&a.rect(U).attr({
                    fill:h,
                    "stroke-width":0
                }).add(f),b.symbol=a.rect(o).attr({
                    fill:b.color,
                    "stroke-width":0,
                    stroke:"#000000"
                }).add(f),p=a.text(b.label,b.labelX).css(e).add(f),v=s[2]+r/2+g-p.getBBox().height/2,p.attr({
                    y:v
                }),p=a.text(b.displayValue,O).css(e).add(f),ca=p.getBBox(),v=s[2]+r/2+g-ca.height/2,p.attr({
                    y:v,
                    x:O+(n-O-q-ca.width)
                    })
                });
        a.path(d).attr(j).add(f)
        },
    render:function(){
        var k;
        var b,a=this.chart;
        b=a.renderer;
        var c=this.options;
        a.naviigator||Sc(a);
        if(!this.group)k=
            this.group=b.g("series"),b=k,b.attr({
                visibility:this.visible?Da:Fa,
                zIndex:c.zIndex
                }).translate(a.plotLeft,a.plotTop).add(a.seriesGroup);
        this.drawPoints();
        this.drawDataLabels();
        if(this.visible)a.currentSeriesIndex=this.index,a.naviigator&&xc(a);
        this.options.animation&&this.animate&&this.animate();
        this.isDirty=!1
        },
    drawDataLabels:function(){},
    drawTracker:function(){},
    animate:function(){}
});
Ga.ssgrid=c;
var Tc=function(){
    var b=this.radarAxis,a=b.catLength,c=this.renderer,f,h=this.plotWidth/2,j=this.plotHeight/
    2,d=b.radius,r=b.xAxis;
    f=b.yAxis;
    var e=f.plotLines,g=r.plotLines,n=f.min,q=b.xTrans,s=b.startAngle,o=[],U=[K],p=[],v=e.length,O=b.yTrans,ca,t,l,ja,ra,x,z=fa.PI*2,wa=fa.PI/2,P=fa.PI+wa,u=["right","center","left"],G=d+10,F=f.labels,y,xa=c.g("axis");
    xa.attr({
        zIndex:2,
        width:this.plotWidth,
        height:this.plotHeight
        }).translate(this.plotLeft,this.plotTop).add();
    b.divline=[];
    for(t=0;t<v;t+=1){
        p[t]=[K];
        ca=!0;
        f=a;
        y=e[t];
        for(x=y.value;f--;){
            ra=na(x-n)*O;
            l=h+ra*ua(-(s+f*q));
            ja=j+ra*Ba(-(s+f*q));
            p[t].splice(p[t].length,
                0,l,ja);
            if(f==0&&y.label)F=y.label,((ra=F.text)||ra===0)&&c.text(ra,l,ja).attr({
                align:F.textAlign,
                rotation:F.rotation
                }).css(F.style).add(xa);
            ca&&(p[t].push(M),ca=!1)
            }
            p[t].push("Z");
        b.divline[t]=c.path(p[t]).attr({
            zIndex:2,
            stroke:y.color,
            "stroke-width":y.width
            }).add(xa)
        }
        ca=!0;
    for(f=g.length;f--;)if(y=g[f],x=y.value,a=s+x*q,e=a%z,l=h+d*ua(-a),ja=j+d*Ba(-a),o.splice(o.length,0,K,h,j,M,l,ja),U.splice(U.length,0,l,ja),ca&&(U.push(M),ca=!1),y.label&&(F=y.label,(ra=F.text)||ra===0))l=e>wa&&e<P?0:e==wa||
        e==P?1:2,c.text(ra,h+G*ua(-a),j+G*Ba(-a)).attr({
            align:u[l],
            rotation:F.rotation
            }).css(F.style).add(xa);U.push("Z");
    b.spikeGraph=c.path(o).attr({
        zIndex:1,
        stroke:r.gridLineColor,
        "stroke-width":C(r.gridLineWidth,1)
        }).add(xa);
    if(r.showRadarBorder)b.borderGraph=c.path(U).attr({
        stroke:r.radarBorderColor,
        "stroke-width":C(r.radarBorderThickness,2),
        fill:r.radarFillColor
        }).add(xa)
        };
        
Ka.radar=ka(Ka.area,{
    states:{
        hover:{}
}
});
c=L.extendClass(Ga.pie,{
    type:"radar",
    isCartesian:!1,
    pointClass:Ga.area.prototype.pointClass,
    pointAttrToOptions:Ga.area.prototype.pointAttrToOptions,
    translate:function(){
        var b=this.chart,a=this.data,c=a.length,f,h,j,d,r,g,n;
        if(typeof b.radarAxis==="undefined"){
            g=b.plotWidth/2;
            n=b.plotHeight/2;
            f=b.options;
            var q=f.xAxis,s=q.max-q.min+1,o=f.yAxis instanceof Array?f.yAxis[0]:f.yAxis,U=e(f.chart.axisRadius)?f.chart.axisRadius:ob(g,n);
            U<0&&(U=ob(g,n));
            h=o.min;
            j=na(o.max-h);
            d=U/j;
            f=2*fa.PI/s;
            r=fa.PI/2;
            b.radarAxis={};
            
            b.radarAxis.yTrans=d;
            b.radarAxis.xTrans=f;
            b.radarAxis.yRange=j;
            b.radarAxis.startAngle=
            r;
            b.radarAxis.yMin=h;
            b.radarAxis.centerX=g;
            b.radarAxis.centerY=n;
            b.radarAxis.radius=U;
            b.radarAxis.categories=[];
            b.radarAxis.catLength=s;
            b.radarAxis.yAxis=o;
            b.radarAxis.xAxis=q
            }else g=b.radarAxis.centerX,d=b.radarAxis.yTrans,h=b.radarAxis.yMin,r=b.radarAxis.startAngle,f=b.radarAxis.xTrans,n=b.radarAxis.centerY;
        for(;c--;)b=a[c],q=e(b.y)?b.y:h,b.plotX=g+d*na(q-h)*ua(-(r+c*f)),b.plotY=n+d*na(q-h)*Ba(-(r+c*f)),b.clientX=b.plotX
            },
    drawGraph:function(){
        var b=this.options,a=this.chart,c=this.graph,f=[],h=
        this.group,j=this.color,d=b.lineWidth,r=b.lineColor||j,b=t(b.fillColor,Eb(j).setOpacity(b.fillOpacity||0.5).get()),e,a=a.renderer,j=[];
        this.data.length>1?(e=[],T(this.data,function(b,a){
            a<2&&e.push([K,M][a]);
            e.push(b.plotX,b.plotY)
            }),e.push("Z"),f=f.concat(e)):j.push(this.segment[0][0]);
        this.graphPath=f;
        this.singlePoints=j;
        c?c.attr({
            d:f
        }):this.graph=a.path(f).attr({
            stroke:r,
            fill:b,
            "stroke-width":d+gb
            }).add(h).shadow()
        },
    drawTracker:function(){
        var b=this,a=b.options.cursor,c=a&&{
            cursor:a
        },f;
        T(b.data,
            function(a){
                (f=a.graphic)&&f.attr({
                    isTracker:!0
                    }).on("mouseover",function(){
                    b.onMouseOver();
                    a.onMouseOver()
                    }).on("mouseout",function(){
                    if(!b.options.stickyTracking)b.onMouseOut()
                        }).css(c)
                })
        },
    setVisible:function(b,a){
        var c=this.chart,f=this.legendItem,h=this.group,j=this.dataLabelsGroup,d=this.shadowGroup,r,e=this.data,g=c.options.chart.ignoreHiddenSeries;
        r=this.visible;
        r=(this.visible=b=b===wa?!r:b)?"show":"hide";
        if(h)h[r]();
        if(d&&d.floated)d[r]();
        for(h=e.length;h--;)if(d=e[h],d.graphic)d.graphic[r]();
        if(j)j[r]();
        f&&c.legend.colorizeItem(this,b);
        this.isDirty=!0;
        this.options.stacking&&T(c.series,function(b){
            if(b.options.stacking&&b.visible)b.isDirty=!0
                });
        if(g)c.isDirtyBox=!0;
        a!==!1&&c.redraw();
        Ha(this,r)
        },
    getColor:Ga.area.prototype.getColor,
    drawDataLabels:Ga.area.prototype.drawDataLabels,
    animate:function(){},
    getSymbol:Ga.area.prototype.getSymbol,
    drawPoints:function(){
        var b,a=this.data,c=this.chart,f,h,j,d,r,e;
        if(this.options.marker.enabled)for(j=a.length;j--;)if(d=a[j],f=d.plotX,h=d.plotY,e=d.graphic,
            h!==wa&&!isNaN(h))b=d.pointAttr[d.selected?"select":hb],r=b.r,e?e.animate({
            x:f,
            y:h,
            r:r
        }):d.graphic=c.renderer.symbol(t(d.marker&&d.marker.symbol,this.symbol),f,h,r).attr(b).add(c.trackerGroup||this.group)
            },
    rotate:function(){},
    render:function(){
        var b=this,a=b.chart,c,f=b.options.animation,h=f&&b.animate,f=h?f&&f.duration||500:0,j,d,r,e,g=a.renderer,n=b.clipRect;
        if(!n&&(j=-a.plotLeft,d=-a.plotTop,r=a.chartWidth,e=a.chartHeight,n=b.clipRect=!a.hasRendered&&a.clipRect?a.clipRect:g.clipRect(j,d,r,e),n.cliprectX=
            j,n.cliprectY=d,n.cliprectW=r,n.cliprectH=e,!a.clipRect))a.clipRect=b.clipRect;
        if(a.drawRadarAxis!==!0)Tc.call(a),a.drawRadarAxis=!0;
        if(!b.group)c=b.group=g.g("series"),a.inverted&&c.attr({
            width:a.plotWidth,
            height:a.plotHeight
            }).invert(),c.clip(b.clipRect).attr({
            visibility:b.visible?Da:Fa,
            zIndex:3
        }).translate(a.plotLeft,a.plotTop).add(a.seriesGroup);
        b.drawDataLabels();
        h&&b.animate(!0);
        b.drawGraph&&b.drawGraph();
        b.drawPoints();
        b.options.enableMouseTracking!==!1&&b.drawTracker();
        h&&b.animate();
        setTimeout(function(){
            n.isAnimating=
            !1;
            if((c=b.group)&&n!==a.clipRect&&n.renderer)c.clip(b.clipRect=a.clipRect),n.destroy()
                },f);
        b.isDirty=!1
        }
    });
Ga.radar=c;
Ka.column3d=ka(Ka.column,{
    states:{
        hover:{}
}
});
c=L.extendClass(Ga.column,{
    type:"column3d",
    initGroup:function(){
        var b=this.chart,a=b.renderer,c=this.xDepth,f=this.yDepth,h,j,d,r,e,g=this.yAxis;
        if(!b.column3DGroups)e=b.column3DGroups=a.g("series-3d"),e.translate(b.plotLeft-c,b.plotTop+f).add(b.seriesGroup);
        if(g.options.min<0&&g.options.max>=0){
            h=b.options.chart.zeroPlaneColor;
            j=b.options.chart.zeroPlaneBorderColor;
            d=0;
            r=g.translate(0,0,1);
            var n=1,q=b.plotSizeX;
            b.inverted&&(d=n,n=q,q=d,d=b.plotSizeY-r-q,r=0);
            g.zeroPlane=a.rect3d(d,r,q,n,c,f,1,"zeroPlane").attr({
                fill:h,
                stroke:j,
                "stroke-width":1,
                zIndex:2
            }).add(e)
            }
        },
drawNthPoint:function(b){
    var a=this.chart,c=a.column3DGroups,f=a.renderer,h=this.xDepth,j=this.yDepth,d=this.data[b],r,e;
    r=d.plotY;
    var g,n,q,s,o,U,p,v;
    if(r!==wa&&!isNaN(r)){
        g=d.shapeArgs;
        n=d.color;
        v=d.borderColor;
        s=d.borderWidth;
        q=d.graphic;
        r=parseInt(g.x,10);
        e=parseInt(g.y,10);
        o=r;
        U=e;
        p=parseInt(g.height,
            10);
        g=parseInt(g.width,10);
        if(this.options.enableMouseTracking!==!1){
            var O=r-h,ca=e+j;
            d.trackerArgs=[K,O,ca,M,O,ca+p,O+g,ca+p,O+g+h,ca+p-j,O+g+h,ca-j,O+h,ca-j,"Z"];
            this.drawTracker(b)
            }
            a.inverted&&(b=p,p=g,g=b,o=a.plotSizeY-e-g,U=a.plotSizeX-r-p);
        q?f.attr({
            x:o,
            y:U,
            width:g,
            height:p,
            x3D:h,
            y3D:j,
            strokeWidth:s,
            fill:n,
            stroke:v,
            zIndex:d.y>=0?3:1
            }):(d.graphic=f.rect3d(o,U,g,p,h,j,s,"point").attr({
            fill:n,
            stroke:v,
            zIndex:d.y>=0?3:1
            }).add(c),d.graphic.shadow(this.options.shadow,void 0,d.shadow))
        }
    },
render:function(){
    var b=
    this.options.animation&&this.animate;
    this.drawDataLabels();
    b&&this.animate();
    this.isDirty=!1
    },
animate:function(b){
    var a=this,c=a.data,f=a.chart,h,j;
    if(!b)T(c,function(b){
        var c=b.graphic;
        c&&(f.inverted?(h=c.attr("width"),j=c.attr("x"),c.attr({
            x:f.plotSizeY-a.yAxis.getThreshold(a.options.threshold||0),
            width:0
        }),c.animate({
            x:j,
            width:h
        },a.options.animation)):(c.attr({
            height:0,
            y:a.yAxis.getThreshold(a.options.threshold||0)
            }),c.animate({
            height:b.barH,
            y:b.barY
            },a.options.animation)))
        }),a.animate=null
    },
drawTracker:function(b){
    var a=
    this,c=a.chart,f=c.renderer,h,j=+new Date,d=a.options.cursor,d=d&&{
        cursor:d
    },r,e=a.data[b];
    h=e.tracker;
    c.options.chart.hasScroll&&c.trackerGroup.clip(a.clipRect);
    b=e.trackerArgs||e.shapeArgs;
    if(e.y!==null)h?h.attr(b):(e.link!==void 0&&(d={
        cursor:"pointer",
        _cursor:"hand"
    }),e.tracker=f.path(b).attr({
        isTracker:j,
        fill:Za,
        visibility:a.visible?Da:Fa,
        zIndex:e.y>0?-1:-3
        }).on(ca?"touchstart":"mouseover",function(b){
        r=b.relatedTarget||b.fromElement;
        if(c.hoverSeries!=a&&u(r,"isTracker")!=j)a.onMouseOver();
        e.onMouseOver()
        }).on("mouseout",
        function(b){
            if(!a.options.stickyTracking&&(r=b.relatedTarget||b.toElement,u(r,"isTracker")!=j))a.onMouseOut()
                }).css(d).add(c.trackerGroup))
        },
setVisible:function(b,a){
    var c=this.chart,f=this.legendItem,h=this.dataLabelsGroup,j,d,r=this.data,e,g=c.options.chart.ignoreHiddenSeries;
    j=this.visible;
    j=(this.visible=b=b===wa?!j:b)?"show":"hide";
    for(d=r.length;d--;){
        e=r[d];
        if(e.tracker)e.tracker[j]();
        if(e.graphic)e.graphic[j]()
            }
            if(h)h[j]();
    f&&c.legend.colorizeItem(this,b);
    this.isDirty=!0;
    this.options.stacking&&
    T(c.series,function(b){
        if(b.options.stacking&&b.visible)b.isDirty=!0
            });
    if(g)c.isDirtyBox=!0;
    a!==!1&&c.redraw();
    Ha(this,j)
    }
});
Ga.column3d=c;
Ka.bar3d=ka(Ka.bar,{
    states:{
        hover:{}
}
});
c=L.extendClass(c,{
    type:"bar3d",
    init:function(b){
        b.inverted=this.inverted=!0;
        Ga.column.prototype.init.apply(this,arguments)
        }
    });
Ga.bar3d=c;
Ka.bubble=ka(Ka.scatter,{
    states:{
        hover:{}
}
});
c=L.extendClass(Ga.scatter,{
    type:"bubble",
    drawPoints:function(){
        var b,a=this.data,c=this.chart,f,h,j,d,r,e,g=this.chart.plotWidth;
        f=this.chart.plotHeight;
        b=this.options.zMax;
        var n=this.options.bubbleScale,q,g=(g>f?f:g)/8;
        q=Math.sqrt(b);
        if(this.options.marker.enabled)for(j=a.length;j--;)if(d=a[j],f=d.plotX,h=d.plotY,e=d.graphic,h!==wa&&!isNaN(h))b=d.pointAttr[d.selected?"select":hb],r=Math.sqrt(d.z),r=Math.round(r*g/q)*n,b.r=r,e?e.animate({
            x:f,
            y:h,
            r:r
        }):d.graphic=c.renderer.symbol(t(d.marker&&d.marker.symbol,this.symbol),f,h,r).attr(b).add(this.group)
            }
        });
Ga.bubble=c;
Ka.candlestick=ka(Ka.column,{
    states:{
        hover:{}
}
});
c=L.extendClass(Ga.column,{
    type:"candlestick",
    drawPoints:function(){
        var b=this,a=b.options,c=b.chart.renderer,f,h,j;
        T(b.data,function(d){
            if(e(d.plotY))if(f=d.graphic,h=d.shapeArgs,f)f.attr(h);
                else{
                j={
                    stroke:d.borderColor,
                    fill:d.color,
                    "stroke-width":d.borderWidth,
                    "stroke-linecap":"round",
                    dashstyle:d.dashStyle
                    };
                    
                if(d.bar)d.bar.graphic=c[d.bar.shapeType](d.bar.shapeArgs).attr(j).add(b.group).shadow(a.shadow,void 0,a.shadow);
                if(h)d.graphic=c[d.shapeType](h).attr(j).add(b.group).shadow(a.shadow,void 0,a.shadow)
                    }
                })
    },
translate:function(){
    var b=this,
    a=b.chart,c=0,f=b.xAxis.reversed,h=b.xAxis.categories,j,d=b.options.plotType;
    wb.prototype.translate.apply(b);
    T(a.series,function(a){
        if(a.type==b.type)a.options.stacking?(e(j)||(j=c++),a.columnIndex=j):a.columnIndex=c++
    });
    for(var r=b.options,n,q=b.data,s=b.closestPoints,h=na(q[1]?q[s].plotX-q[s-1].plotX:a.plotSizeX/(h&&h.length?h.length:1)),s=h*r.groupPadding,o=(h-2*s)/c,a=r.pointWidth,U=e(a)?(o-a)/2:o*r.pointPadding,a=t(a,o-2*U),s=U+(s+((f?c-b.columnIndex:b.columnIndex)||0)*o-h/2)*(f?-1:1),o=b.yAxis.getThreshold(r.threshold||
        0),U=r.minPointLength,f=0;f<q.length;f+=1)if(h=q[f],d=="line"){
        if(f>0)n=q[f-1],n.shapeType="path",n.shapeArgs=[K,n.plotX,n.plotY,M,h.plotX,h.plotY];
        h.trackerShapeType="rect";
        h.trackerArgs={
            x:h.plotX-3,
            y:h.plotY-3,
            width:6,
            height:6
        }
    }else{
        n=h.plotX+s;
        var p=h.plotY,v=b.yAxis.getThreshold(h.MY),O=Pb(ob(p,v)),ca=Pb(na(p-v)),l=a,ja=l/2,ra;
        if(ca<(U||5))U&&(ca=U,O=o-(p<=o?U:0)),ra=O-3;
        ca<1&&(ca=1);
        g(h,{
            barX:n,
            barY:O,
            barW:l,
            barH:ca
        });
        d=="bar"?(h.trackerShapeType="rect",h.shapeType="path",h.shapeArgs=[K,h.plotX,
            v,M,h.plotX-ja,v,K,h.plotX,p,M,h.plotX+ja,p],h.trackerArgs={
                x:n,
                y:e(ra)?ra:O,
                width:l,
                height:e(ra)?6:ca
                }):(h.shapeType="rect",h.shapeArgs={
            x:n,
            y:O,
            width:l,
            height:ca,
            r:r.borderRadius
            },h.trackerShapeType="rect",h.trackerArgs=e(ra)&&ka(h.shapeArgs,{
            height:6,
            y:ra
        }));
        h.bar={
            shapeType:"path",
            shapeArgs:[K,h.plotX,b.yAxis.getThreshold(parseFloat(h.high)),M,h.plotX,b.yAxis.getThreshold(parseFloat(h.low))]
            }
        }
},
drawTracker:function(){
    var b=this,a=b.chart,c=a.renderer,f,h,j=+new Date,d;
    T(b.data,function(r){
        h=r.tracker;
        f=r.trackerArgs;
        delete f.strokeWidth;
        if(r.y!==null)if(h)h.attr(f);
            else{
            if(r.link!==void 0)var e={
                cursor:"pointer",
                _cursor:"hand"
            };
            
            r.tracker=c[r.trackerShapeType](f).attr({
                isTracker:j,
                fill:Za,
                visibility:b.visible?Da:Fa,
                zIndex:1
            }).on(ca?"touchstart":"mouseover",function(c){
                d=c.relatedTarget||c.fromElement;
                if(a.hoverSeries!==b&&u(d,"isTracker")!==j)b.onMouseOver();
                r.onMouseOver()
                }).on("mouseout",function(a){
                if(!b.options.stickyTracking&&(d=a.relatedTarget||a.toElement,u(d,"isTracker")!==j))b.onMouseOut()
                    }).css(e).add(r.group||
                a.trackerGroup)
            }
        })
}
});
Ga.candlestick=c;
var hc={};

Ka.dragnode=ka(Ka.scatter,{
    states:{
        hover:{}
}
});
L=L.extendClass(Ga.scatter,{
    type:"dragnode",
    drawPoints:function(){
        var b=this,a,c=b.data,f=b.chart,h,j,d,r,e,g,n,q,s,o,U,p,v=f.options.connectors,O=f.renderer,ca=b.options.dataLabels.style,l,ja,ra,x,z,P,F,u;
        if(b.options.marker.enabled){
            for(r=c.length;r--;)if(e=c[r],h=e.options,j=e.plotX,d=e.plotY,n=e.graphic,U=e.marker,o=X(U&&U.height),s=X(U&&U.width),g=X(U&&U.radius),p=C(U&&U.symbol),q=e.id,l=h.imageNode,
                ja=h.imageURL,ra=h.imageAlign,P=p=="square"?s:g*1.5,x=X(h.imageWidth,P),F=p=="square"?o:g*1.5,h=X(h.imageHeight,F),u=C(U&&U.lineWidth),d!==wa&&!isNaN(d)&&(a=e.pointAttr[e.selected?"select":hb],a.r*=1,g=a.r,n?n.animate({
                    x:j,
                    y:d,
                    r:g
                }):(p=t(U&&U.symbol,b.symbol),p=="square"?e.graphic=O.rect(j-s/2,d-o/2,s,o).attr(a).add(b.group):(p=p==="triangle"?"poly_3":p,p=p==="diamond"?"poly_4":p,e.graphic=O.symbol(p,j,d,g).attr(a).add(b.group)),hc[q]=e),l&&ja)){
                switch(ra){
                    case "middle":
                        d-=h/2;
                        break;
                    case "bottom":
                        d=
                        F>h?d-h+P/2:d-h/2;
                        break;
                    default:
                        d=F>h?d-P/2:d-h/2
                        }
                        z||(z=O.g("group").attr({
                    visibility:Fa
                }).add());
                e.imageNodeGraph=O.image(ja).attr({
                    width:x,
                    height:h
                }).translate(j-x/2,d).css({
                    opacity:1
                }).add(b.group)
                }
                var y,G,xa,I,E,B,w,L,W,Z,R,ba,ha,D,J,Za,ma,Q;
            for(r=0;r<v.length;r+=1)W||(W=O.g("connectors").attr({
                visibility:Da
            }).translate(f.plotLeft,f.plotTop).add()),T(v[r].connector,function(a){
                y=a.from;
                G=a.to;
                xa=a.label;
                u=a.conStrength*a.stdThickness;
                Z=a.color;
                xa=a.label;
                ha=hc[y];
                D=hc[G];
                if(ha&&D){
                    I=ha.plotY;
                    E=ha.plotX;
                    w=D.plotY;
                    B=D.plotX;
                    J=ha.marker;
                    Za=D.marker;
                    R=(E+B)/2;
                    ba=(I+w)/2;
                    L=[K,E,I,M,B,w];
                    b.connector=O.path(L).attr({
                        "stroke-width":u,
                        stroke:Z
                    }).add(W);
                    ma=[];
                    if(a.arrowAtStart)J.symbol=="square"?(g=J.width,H=J.height):(g=J.radius,H=void 0),ma=ma.concat(Oa(E,I,B,w,g,H));
                    if(a.arrowAtEnd)Za.symbol=="square"?(g=Za.width,H=Za.height):(g=Za.radius,H=void 0),ma=ma.concat(Oa(B,w,E,I,g,H));
                    ma.length&&O.path(ma).attr({
                        "stroke-width":u,
                        stroke:Z
                    }).add(W);
                    Q=Z&&Z.FCcolor&&Z.FCcolor.color;
                    e.connectorText=O.text(xa,
                        R,ba).attr({
                        align:"center",
                        rotation:0
                    }).css(ca).css({
                        backgroundColor:Q,
                        borderColor:Q
                    }).add(W).textBound()
                    }
                })
            }
        }
});
Ga.dragnode=L
}
})();
FusionCharts(["private","modules.renderer.highcharts-export",function(){
    var D=document,g=window,J=Math.max,p=this.hcLib.Highcharts,aa=p.Chart,d=p.createElement,B=p.discardElement,a=p.css,e=D.documentElement.ontouchstart!==void 0,u=p.extend,w=p.merge,t=p.each,z=p.addEvent,$=p.setOptions({
        lang:{
            downloadPNG:"Download PNG image",
            downloadJPEG:"Download JPEG image",
            downloadPDF:"Download PDF document",
            downloadSVG:"Download SVG vector image",
            exportButtonTitle:"Export to raster or vector image",
            printButtonTitle:"Print the chart"
        }
    });
$.navigation={
    menuStyle:{
        border:"1px solid #A0A0A0",
        background:"#FFFFFF"
    },
    menuItemStyle:{
        fontFamily:"Verdana, Arial",
        padding:"3px 5px",
        background:"none",
        color:"#303030",
        fontSize:e?"14px":"11px"
        },
    menuItemHoverStyle:{
        background:"#999999",
        color:"#FFFFFF"
    },
    _buttonOptions:{
        x:11
    },
    buttonOptions:{
        align:"right",
        backgroundColor:{
            linearGradient:[0,0,0,15],
            stops:[[0.4,"#F7F7F7"],[0.6,"#E3E3E3"]]
            },
        activeBackgroundColor:{
            linearGradient:[0,0,0,15],
            stops:[[0.4,"#E3E3E3"],[0.6,"#F7F7F7"]]
            },
        borderColor:"#B0B0B0",
        borderRadius:2,
        borderWidth:1,
        height:15,
        hoverBorderColor:"#909090",
        hoverSymbolFill:"#81A7CF",
        hoverSymbolStroke:"#4572A5",
        symbolFill:"#E0E0E0",
        symbolStroke:"#A0A0A0",
        symbolX:8,
        symbolY:7.5,
        verticalAlign:"top",
        width:16,
        y:10
    }
};

$.exporting={
    type:"image/png",
    url:"http://export.highcharts.com/",
    width:800,
    enableImages:!1,
    buttons:{
        exportButton:{
            symbol:"exportIcon",
            symbolFill:"#A8BF77",
            hoverSymbolFill:"#768F3E",
            _titleKey:"exportButtonTitle",
            tooltip:"Export Chart",
            menuItems:[{
                textKey:"downloadPNG",
                onclick:function(){
                    this.exportChart()
                    }
                },

                {
            textKey:"downloadJPEG",
            onclick:function(){
                this.exportChart({
                    type:"image/jpeg"
                })
                }
            },{
        textKey:"downloadPDF",
        onclick:function(){
            this.exportChart({
                type:"application/pdf"
            })
            }
        },{
    textKey:"downloadSVG",
    onclick:function(){
        this.exportChart({
            type:"image/svg+xml"
        })
        }
    }]
},
printButton:{
    symbol:"printIcon",
    symbolFill:"#B5C9DF",
    hoverSymbolFill:"#779ABF",
    _titleKey:"printButtonTitle",
    tooltip:"Print Chart",
    onclick:function(){
        this.print()
        }
    }
}
};

u(aa.prototype,{
    getSVG:function(a){
        var e=this,g,z,R,J,$,aa,cb=w(e.options,a);
        if(!D.createElementNS)D.createElementNS=
            function(a,d){
                var e=D.createElement(d);
                e.getBBox=function(){
                    return p.Renderer.prototype.Element.prototype.getBBox.apply({
                        element:e
                    })
                    };
                    
                return e
                };
                
        a=d("div",null,{
            position:"absolute",
            top:"-9999em",
            width:e.chartWidth+"px",
            height:e.chartHeight+"px"
            },D.body);
        u(cb.chart,{
            renderTo:a,
            forExport:!0
            });
        cb.exporting.enabled=!1;
        if(!cb.exporting.enableImages)cb.chart.plotBackgroundImage=null,cb.chart.bgSWF=void 0,cb.chart.bgImage=void 0,cb.chart.logoURL=void 0;
        cb.series=[];
        t(e.series,function(a){
            R=a.options;
            R.animation=
            !1;
            R.showCheckbox=!1;
            R.visible=a.visible;
            if(!cb.exporting.enableImages&&R&&R.marker&&/^url\(/.test(R.marker.symbol))R.marker.symbol="circle";
            R.data=[];
            t(a.data,function(a){
                J=a.config;
                $={
                    x:a.x,
                    y:a.y,
                    name:a.name
                    };
                    
                typeof J=="object"&&a.config&&J.constructor!=Array&&u($,J);
                $.visible=a.visible;
                R.data.push($);
                cb.exporting.enableImages||(aa=a.config&&a.config.marker)&&/^url\(/.test(aa.symbol)&&delete aa.symbol
                });
            cb.series.push(R)
            });
        g=new p.Chart(cb);
        t(["xAxis","yAxis"],function(a){
            t(e[a],function(d,e){
                var p=
                g[a][e],t=d.getExtremes(),z=t.userMin,t=t.userMax;
                (z!==void 0||t!==void 0)&&p.setExtremes(z,t,!0,!1)
                })
            });
        z=g.container.innerHTML;
        cb=null;
        g.destroy();
        B(a);
        z=z.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/isTracker="[^"]+"/g,"").replace(/url\((\\?[\'\"])[^#]+#/g,"url($1#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g," xlink:href=").replace(/id=([^" >]+)/g,'id="$1"').replace(/class=([^" >]+)/g,
            'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/<img ([^>]*)>/gi,"<image $1 />").replace(/<\/image>/g,"").replace(/<image ([^>]*)([^\/])>/gi,"<image $1$2 />").replace(/width=(\d+)/g,'width="$1"').replace(/height=(\d+)/g,'height="$1"').replace(/hc-svg-href="/g,'xlink:href="').replace(/style="([^"]+)"/g,function(a){
            return a.toLowerCase()
            });
        z=z.replace(/(url\(#highcharts-[0-9]+)&quot;/g,"$1").replace(/&quot;/g,"'");
        z.match(/ xmlns="/g).length==2&&(z=z.replace(/xmlns="[^"]+"/,
            ""));
        return z
        },
    exportChart:function(a,e){
        var g,p=this.getSVG(e),a=w(this.options.exporting,a);
        g=d("form",{
            method:"post",
            action:a.url
            },{
            display:"none"
        },D.body);
        t(["filename","type","width","svg"],function(e){
            d("input",{
                type:"hidden",
                name:e,
                value:{
                    filename:a.filename||"chart",
                    type:a.type,
                    width:a.width,
                    svg:p
                }
                [e]
                },null,g)
            });
        g.submit();
        B(g)
        },
    print:function(){
        var a=this,d=a.container,e=[],p=d.parentNode,z=D.body,u=z.childNodes;
        if(!a.isPrinting)a.isPrinting=!0,t(u,function(a,d){
            if(a.nodeType==1)e[d]=a.style.display,
                a.style.display="none"
                }),z.appendChild(d),g.print(),setTimeout(function(){
            p.appendChild(d);
            t(u,function(a,d){
                if(a.nodeType==1)a.style.display=e[d]
                    });
            a.isPrinting=!1
            },1E3)
        },
    contextMenu:function(g,E,o,y,B,w){
        var D=this,$=D.options.navigation,aa=$.menuItemStyle,ga=D.chartWidth,bb=D.chartHeight,Y="cache-"+g,Ua=D[Y],$a=J(B,w),Oa,L;
        if(!Ua)D[Y]=Ua=d("div",{
            className:"highcharts-"+g
            },{
            position:"absolute",
            zIndex:1E3,
            padding:$a+"px"
            },D.container),Oa=d("div",null,u({
            MozBoxShadow:"1px 1px 3px rgba(0,0,0,0.5)",
            WebkitBoxShadow:"1px 1px 3px rgba(0,0,0,0.5)",
            boxShadow:"1px 1px 3px rgba(0,0,0,0.5)"
        },$.menuStyle),Ua),L=function(){
            a(Ua,{
                display:"none"
            })
            },z(Ua,"mouseleave",L),t(E,function(g){
            g&&(d("div",{
                onmouseover:function(){
                    a(this,$.menuItemHoverStyle)
                    },
                onmouseout:function(){
                    a(this,aa)
                    },
                innerHTML:g.text||p.getOptions().lang[g.textKey]
                },u({
                cursor:"pointer"
            },aa),Oa)[e?"ontouchstart":"onclick"]=function(){
                L();
                g.onclick.apply(D,arguments)
                })
            }),D.exportMenuWidth=Ua.offsetWidth,D.exportMenuHeight=Ua.offsetHeight;
        g={
            display:"block"
        };
        
        o+D.exportMenuWidth>ga?g.right=ga-o-B-$a+"px":g.left=o-$a+"px";
        y+w+D.exportMenuHeight>bb?g.bottom=bb-y-$a+"px":g.top=y+w-$a+"px";
        a(Ua,g)
        },
    addButton:function(a){
        function d(){
            Y.active||($.attr(Oa),J.attr($a),L&&e.tooltip&&e.tooltip.hide())
            }
            var e=this,g=e.renderer,p=w(e.options.navigation.buttonOptions,a),t=p.onclick,z=p.menuItems,B=p.width,D=p.height,J,$,Y,a=p.paddingRight,aa=p.borderWidth,$a={
            stroke:p.borderColor,
            fill:p.backgroundColor
            },Oa={
            stroke:p.symbolStroke,
            fill:p.symbolFill
            },
        L;
        if(p.enabled===!1)return{};
            
        e.options.navigation._buttonOptions.x>0&&(a=0);
        if(p.x==void 0)p.x=e.options.navigation._buttonOptions.x-B-5-(a||0);
        e.options.navigation._buttonOptions.x=p.x;
        J=g.rect(0,0,B,D,p.borderRadius,aa).align(p,!0).attr(u({
            fill:p.backgroundColor,
            "stroke-width":aa,
            zIndex:19
        },$a)).add();
        Y=g.rect(0,0,B,D,0).align(p).attr({
            fill:"rgba(255, 255, 255, 0.001)",
            zIndex:21
        }).css({
            cursor:"pointer"
        }).on("mouseover",function(){
            $.attr({
                stroke:p.hoverSymbolStroke,
                fill:p.hoverSymbolFill
                });
            J.attr({
                stroke:p.hoverBorderColor
                });
            L&&e.tooltip&&e.tooltip.refresh(L)
            }).on("mouseout",d).on("click",d).add();
        L=p.tooltip?{
            tooltipPos:[Y.attr("x")-15,Y.attr("y")+15],
            series:{},
            svgElm:Y.svgElm,
            point:{
                toolText:p.tooltip
                },
            getLabelConfig:function(){
                return this
                },
            tooltipConstraint:"chart"
        }:void 0;
        z&&(t=function(){
            d();
            var a=Y.getBBox();
            e.contextMenu("export-menu",z,a.x,a.y,B,D)
            });
        Y.on("click",function(){
            t.apply(e,arguments);
            L&&e.tooltip&&e.tooltip.hide()
            });
        $=g.symbol(p.symbol,p.symbolX,p.symbolY,(p.symbolSize||8)/2).align(p,!0).attr(u(Oa,

        {
            "stroke-width":p.symbolStrokeWidth||1,
            zIndex:20
        })).add();
        return{
            options:p,
            tooltipOptions:L,
            hide:function(){
                d();
                $.hide();
                Y.hide();
                J.hide()
                },
            show:function(){
                $.show();
                Y.show();
                J.show()
                },
            activate:function(a){
                (a=Y.active=!!a)?(J.attr({
                    stroke:p.hoverBorderColor,
                    fill:p.activeBackgroundColor
                    }),$.attr({
                    stroke:p.hoverSymbolStroke,
                    fill:p.hoverSymbolFill
                    })):d()
                }
            }
    }
});
p.Renderer.prototype.symbols.exportIcon=function(a,d,e){
    return["M",a-e,d+e,"L",a+e,d+e,a+e,d+e*0.5,a-e,d+e*0.5,"Z","M",a,d+e*0.5,"L",a-e*0.5,d-
    e/3,a-e/6,d-e/3,a-e/6,d-e,a+e/6,d-e,a+e/6,d-e/3,a+e*0.5,d-e/3,"Z"]
    };
    
p.Renderer.prototype.symbols.printIcon=function(a,d,e){
    return["M",a-e,d+e*0.5,"L",a+e,d+e*0.5,a+e,d-e/3,a-e,d-e/3,"Z","M",a-e*0.5,d-e/3,"L",a-e*0.5,d-e,a+e*0.5,d-e,a+e*0.5,d-e/3,"Z","M",a-e*0.5,d+e*0.5,"L",a-e*0.75,d+e,a+e*0.75,d+e,a+e*0.5,d+e*0.5,"Z"]
    };
    
aa.prototype.callbacks.push(function(a){
    var d,e=a.options.exporting,g=e.buttons;
    if(e.enabled!==!1)for(d in g)a.addButton(g[d])
        })
}]);
(function(){
    var D=FusionCharts(["private","modules.renderer.highcharts-base"]);
    if(D!==void 0){
        var g=D.hcLib,J=g.BLANKSTRINGPLACEHOLDER,p=g.BLANKSTRING,aa=g.createTrendLine,d=g.pluck,B=g.getValidValue,a=g.pluckNumber,e=g.defaultPaletteOptions,u=g.getFirstValue,w=g.getDefinedColor,t=g.parseUnsafeString,z=g.FC_CONFIG_STRING,$=g.extend2,x=g.getDashStyle,E=g.toPrecision,o=g.graphics.getColumnColor,y=g.getFirstColor,R=g.setLineHeight,Lb=g.pluckFontSize,Qa=g.getFirstAlpha,Wb=g.graphics.getDarkColor,cb=g.graphics.getLightColor,
        ga=g.graphics.convertColor,bb=g.COLOR_TRANSPARENT,Y=g.POSITION_CENTER,Ua=g.POSITION_TOP,$a=g.POSITION_BOTTOM,Oa=g.POSITION_RIGHT,L=g.POSITION_LEFT,C=g.chartAPI,X=g.graphics.mapSymbolName,oa=g.COMMASTRING,Sa=g.ZEROSTRING,pb=g.ONESTRING,db=g.HUNDREDSTRING,Ta=g.PXSTRING,nb=g.BGRATIOSTRING,yb=g.COMMASPACE,ib=g.TESTSTR,jb=g.graphics.getAngle,l=g.POSITION_MIDDLE,Q=g.STRINGUNDEFINED,Ra=g.axisLabelAdder,Xa=g.falseFN,da=g.SmartLabelManager,kc=g.NumberFormatter,rb=g.getLinkAction,cc=g.getAxisLimits,dc=g.HASHSTRING,
        Fb=g.createDialog,sb=g.regex.dropHash,Ma=Math.max,ec=Math.min,xb=g.Highcharts,Ca={
            fontWeight:{
                1:"bold",
                0:"normal"
            },
            fontStyle:{
                1:"italic",
                0:"normal"
            },
            textDecoration:{
                1:"underline",
                0:"none"
            }
        },kb={
        font:function(a,h){
            h.style.fontFamily=a
            },
        size:function(a,h){
            if(a)h.style.fontSize=Lb(a)+Ta
                },
        color:function(a,h,d){
            h.style.color=a&&a.replace&&a.replace(sb,dc)||p;
            if(d)h.color=h.style.color
                },
        bgcolor:function(a,h){
            h.style.backgroundColor=a&&a.replace&&a.replace(sb,dc)||p
            },
        bordercolor:function(a,h){
            h.style.border=
            "1px solid";
            h.style.borderColor=a&&a.replace&&a.replace(sb,dc)||p
            },
        ishtml:p,
        leftmargin:function(f,h){
            h.style.marginLeft=a(f,0)+Ta
            },
        letterspacing:function(f,h){
            h.style.letterSpacing=a(f,0)+Ta
            },
        bold:function(a,h){
            h.style.fontWeight=Ca.fontWeight[a]||""
            },
        italic:function(a,h){
            h.style.fontStyle=Ca.fontStyle[a]||""
            },
        underline:function(a,h){
            h.style.textDecoration=Ca.textDecoration[a]||""
            }
        },fa={
    chart2D:{
        bgColor:"bgColor",
        bgAlpha:"bgAlpha",
        bgAngle:"bgAngle",
        bgRatio:"bgRatio",
        canvasBgColor:"canvasBgColor",
        canvasBaseColor:"canvasBaseColor",
        divLineColor:"divLineColor",
        legendBgColor:"legendBgColor",
        legendBorderColor:"legendBorderColor",
        toolTipbgColor:"toolTipbgColor",
        toolTipBorderColor:"toolTipBorderColor",
        baseFontColor:"baseFontColor",
        anchorBgColor:"anchorBgColor"
    },
    chart3D:{
        bgColor:"bgColor3D",
        bgAlpha:"bgAlpha3D",
        bgAngle:"bgAngle3D",
        bgRatio:"bgRatio3D",
        canvasBgColor:"canvasBgColor3D",
        canvasBaseColor:"canvasBaseColor3D",
        divLineColor:"divLineColor3D",
        divLineAlpha:"divLineAlpha3D",
        legendBgColor:"legendBgColor3D",
        legendBorderColor:"legendBorderColor3D",
        toolTipbgColor:"toolTipbgColor3D",
        toolTipBorderColor:"toolTipBorderColor3D",
        baseFontColor:"baseFontColor3D",
        anchorBgColor:"anchorBgColor3D"
    }
},S=function(){
    var a={},h,d=function(){
        var c,d,r,e,g=0,q;
        for(c in a)if(g+=1,d=a[c],r=d.jsVars,e=d.ref&&d.ref.parentNode){
            if(q=e.offsetWidth,e=e.offsetHeight,!r.resizeLocked&&(r._containerOffsetW!==q||r._containerOffsetH!==e))d.ref.resize(),r._containerOffsetW=q,r._containerOffsetH=e
                }else delete a[c],g-=1;g||(h=clearInterval(h))
        };
    return function(c){
        var j=c.jsVars,e=c.ref&&c.ref.parentNode||{};
        
        j._containerOffsetW=e.offsetWidth;
        j._containerOffsetH=e.offsetHeight;
        a[c.id]=c;
        h||(h=setInterval(d,300))
        }
    }(),tb={
    getExternalInterfaceMethods:function(){
        var a=C[this.jsVars.type],a=a&&a.eiMethods,h="saveAsImage,print,exportChart,getXML,hasRendered,signature,cancelExport,";
        if(typeof a==="string")h+=a+oa;
        else if(a!==void 0||a!==null)for(var d in a)h+=d+oa;return h.substr(0,h.length-1)
        },
    drawOverlayButton:function(a){
        var h=this.jsVars,d=h.$overlayButton;
        if(a&&a.show){
            if(!d)d=h.$overlayButton=jQuery("<span>"),d.click(function(){
                D.raiseEvent("OverlayButtonClick",a,h.fcObj)
                });
            d.html(a.message?a.message:"Back");
            d.css({
                border:"1px solid #"+(a.borderColor?a.borderColor:"7f8975"),
                backgroundColor:"#"+(a.bgColor?a.bgColor:"edefec"),
                fontFamily:a.font?a.font:"Verdana",
                color:"#"+a.fontColor?a.fontColor:"49563a",
                fontSize:(a.fontSize?a.fontSize:"10")+Ta,
                padding:(a.padding?a.padding:"3")+Ta,
                fontWeight:parseInt(a.bold,10)===0?"normal":"bold",
                position:"absolute",
                top:"0",
                right:"1px",
                _cursor:"hand",
                cursor:"pointer"
            });
            h.hcObj.container.appendChild(d[0])
            }else d&&d.detach()
            },
    print:function(){
        return this.jsVars.hcObj&&this.jsVars.hcObj.hasRendered&&this.jsVars.hcObj.print()
        },
    exportChart:function(a){
        var h=this.jsVars.hcObj,d={},c;
        if(h&&h.options&&h.options.exporting&&h.options.exporting.enabled){
            if(!(a===void 0||a===null))for(c in a)switch(c.toLowerCase()){
                case "exportfilename":
                    d.filename=a[c];
                    break;
                case "exportformat":
                    d.type={
                    png:"image/png",
                    jpg:"image/jpeg",
                    pdf:"application/pdf",
                    svg:"image/svg+xml"
                }
                [a[c].toLowerCase()]||"image/png"
                    }
                    h.exportChart(d)
            }
        },
getSVGString:function(){
    return this.jsVars&&this.jsVars.hcObj&&this.jsVars.hcObj.getSVG&&this.jsVars.hcObj.getSVG()
    },
resize:function(){
    var a=this.jsVars,h=a.container,d=a.fcObj,c=a.hcObj;
    c&&(c&&c.destroy&&c.destroy(),g.createChart(a.fcObj,h,a.type,void 0,void 0,!1),delete a.isResizing,g.raiseEvent("resized",{
        width:d.width,
        height:d.height,
        prevWidth:a.width,
        prevHeight:a.height
        },d,[d.id]))
    },
lockResize:function(a){
    return this.jsVars.resizeLocked=
    a===void 0&&!0||a
    },
showChartMessage:function(a){
    var h=this.jsVars,d=h.hcObj;
    h.msgStore[a]&&(a=h.msgStore[a]);
    d&&d.destroy&&d.destroy();
    g.createChart(h.fcObj,h.container,h.type,void 0,a);
    return a
    },
signature:function(){
    return"FusionCharts/3.2.2 (XT)"
    }
};

g.createChart=function(a,h,d,c,j,e){
    var p=a.jsVars,o=p.msgStore,q,v=C[d],s,t=function(j){
        var e,q=p.fcObj,o=q.width,t=q.height;
        e=v&&v.eiMethods;
        var ca=p.$overlayButton;
        h.jsVars=a.jsVars;
        p.container=h;
        p.hcObj=j;
        p.type=d;
        p.width=h.offsetWidth;
        p.height=h.offsetHeight;
        p.instanceAPI=s;
        j.container.style.backgroundColor=p.transparent?"transparent":"#ffffff";
        if(j.hasRendered){
            D.extend(h,tb);
            if(e&&typeof e!=="string")for(var l in e)h[l]=e[l];e={
                width:p.width,
                height:p.height,
                drawCount:p.drawCount
                };
                
            ca&&j.container.appendChild(ca[0]);
            g.raiseEvent("drawcomplete",e,q,[q.id])
            }
            c&&(c({
            success:j.hasRendered,
            ref:h,
            id:a.id
            }),j.hasRendered&&(o=Number((o&&o.match&&o.match(/^\s*(\d*\.?\d*)\%\s*$/)||[])[1]),t=Number((t&&t.match&&t.match(/^\s*(\d*\.?\d*)\%\s*$/)||[])[1]),(o||t)&&q.ref&&
            q.ref.parentNode&&S(q),g.raiseEvent("loaded",{
                type:d
            },q,[q.id])))
        };
        
    a.__state.dataReady=!1;
    p.instanceAPI&&p.instanceAPI.dispose&&p.instanceAPI.dispose();
    s=v?new C(d):new C("stub");
    s.chartInstance=a;
    if(j!==void 0){
        if(typeof j==="string")j=new Fb(h,j),p.hasNativeMessage=!0
            }else!v||!v.init?(j=new Fb(h,o.ChartNotSupported),p.hasNativeMessage=!0):p.message?(j=new Fb(h,p.message),p.hasNativeMessage=!0):p.loadError?(j=new Fb(h,o.LoadDataErrorText),p.hasNativeMessage=!0):p.stallLoad?(j=new Fb(h,o.XMLLoadingText),
        p.hasNativeMessage=!0):(j=a.getChartData(FusionChartsDataFormats.JSON,!0),q=j.data,j.error instanceof Error?(j=new Fb(h,o.InvalidXMLText),p.hasNativeMessage=!0,g.raiseEvent("dataxmlinvalid",{},p.fcObj,[p.fcObj.id])):(g.raiseEvent("dataloaded",{},p.fcObj,[p.fcObj.id]),j=s.init(h,q,a,t),p.drawCount+=1,j.series.length===0?(j=new Fb(h,o.ChartNoDataText),p.hasNativeMessage=!0,g.raiseEvent("nodatatodisplay",{},p.fcObj,[p.fcObj.id])):(a.__state.dataReady=!0,p.hasNativeMessage=!1,delete p.message)));
    if(!j)j=
        new Fb(h,"Error rendering chart {0x01}"),p.hasNativeMessage=!0;
    j.chart=j.chart||{};
    
    j.chart.renderTo=h;
    j.instanceAPI=s;
    j.credits=j.credits||{};
    
    j.credits.enabled=v&&v.creditLabel===!0?!0:!1;
    if(e===!1)(j.plotOptions||(j.plotOptions={}))&&(j.plotOptions.series||(j.plotOptions.series={})),j.plotOptions.series.animation=!1;
    return s.draw(j,t)
    };
    
var Pb=g.HCstub=function(f,h,d,c){
    var f=f.chart,j=a(f.charttopmargin,c.charttopmargin,15),e=a(f.chartrightmargin,c.chartrightmargin,15),g=a(f.chartbottommargin,c.chartbottommargin,
        15),c=a(f.chartleftmargin,c.chartleftmargin,15),o=j+g,q=c+e;
    d*=0.7;
    h*=0.7;
    o>d&&(j-=(o-d)*j/o,g-=(o-d)*g/o);
    q>h&&(c-=(q-h)*c/q,e-=(q-h)*e/q);
    h={
        _FCconf:{
            0:{
                stack:{}
        },
        1:{
            stack:{}
    },
    x:{
        stack:{}
},
oriCatTmp:[],
noWrap:!1,
marginLeftExtraSpace:0,
marginRightExtraSpace:0,
marginBottomExtraSpace:0,
marginTopExtraSpace:0,
marimekkoTotal:0
},
chart:{
    alignTicks:!1,
    renderTo:p,
    ignoreHiddenSeries:!1,
    events:{},
    reflow:!1,
    spacingTop:j,
    spacingRight:e,
    spacingBottom:g,
    spacingLeft:c,
    marginTop:j,
    marginRight:e,
    marginBottom:g,
    marginLeft:c,
    borderRadius:0,
    plotBackgroundColor:"#FFFFFF",
    style:{}
},
colors:["AFD8F8","F6BD0F","8BBA00","FF8E46","008E8E","D64646","8E468E","588526","B3AA00","008ED6","9D080D","A186BE","CC6600","FDC689","ABA000","F26D7D","FFF200","0054A6","F7941C","CC3300","006600","663300","6DCFF6"],
credits:{
    href:"http://www.codeanalytic.com",
    text:"",
    enabled:!0
    },
global:{},
labels:{
    items:[]
},
lang:{},
legend:{
    enabled:!0,
    symbolWidth:12,
    borderRadius:1,
    backgroundColor:"#FFFFFF",
    initialItemX:0,
    title:{
        text:p,
        x:0,
        y:0,
        padding:2
    },
    scroll:{},
    itemStyle:{}
},
loading:{},
plotOptions:{
    series:{
        pointPadding:0,
        borderColor:"#333333",
        events:{},
        animation:f.animation==Sa?!1:{
            duration:a(f.animationduration,1)*1E3
            },
        states:{
            hover:{
                enabled:!1
                },
            select:{
                enabled:!1
                }
            },
    dataLabels:{
        enabled:!0,
        color:"#555555",
        style:{},
        formatter:function(){
            return this.point.showPercentValues?parseInt(this.percentage*100,10)/100+"%":this.point.displayValue
            }
        },
point:{
    events:{}
}
},
area:{
    states:{
        hover:{
            enabled:!1
            }
        },
marker:{
    lineWidth:1,
    radius:3,
    states:{
        hover:{
            enabled:!1
            },
        select:{
            enabled:!1
            }
        }
}
},
radar:{
    states:{
        hover:{
            enabled:!1
            }
        },
marker:{
    lineWidth:1,
    radius:3,
    states:{
        hover:{
            enabled:!1
            },
        select:{
            enabled:!1
            }
        }
}
},
areaspline:{
    states:{
        hover:{
            enabled:!1
            }
        },
marker:{
    lineWidth:1,
    radius:3,
    states:{
        hover:{
            enabled:!1
            },
        select:{
            enabled:!1
            }
        }
}
},
line:{
    shadow:!0,
    states:{
        hover:{
            enabled:!1
            }
        },
marker:{
    lineWidth:1,
    radius:3,
    states:{
        hover:{
            enabled:!1
            },
        select:{
            enabled:!1
            }
        }
}
},
scatter:{
    states:{
        hover:{
            enabled:!1
            }
        },
marker:{
    lineWidth:1,
    radius:3,
    states:{
        hover:{
            enabled:!1
            },
        select:{
            enabled:!1
            }
        }
}
},
bubble:{
    states:{
        hover:{
            enabled:!1
            }
        },
marker:{
    lineWidth:1,
    radius:3,
    states:{
        hover:{
            enabled:!1
            },
        select:{
            enabled:!1
            }
        }
}
},
spline:{
    states:{
        hover:{
            enabled:!1
            }
        },
marker:{
    lineWidth:1,
    radius:3,
    states:{
        hover:{
            enabled:!1
            },
        select:{
            enabled:!1
            }
        }
}
},
pie:{
    size:"80%",
    allowPointSelect:!0,
    cursor:"pointer",
    point:{
        events:{
            legendItemClick:f.interactivelegend===Sa?Xa:function(){
                this.slice();
                return!1
                }
            }
    }
},
pie3d:{
    size:"80%",
    allowPointSelect:!0,
    cursor:"pointer",
    point:{
        events:{
            legendItemClick:f.interactivelegend===Sa?Xa:function(){
                this.slice();
                return!1
                }
            }
    }
},
column:{},
floatedcolumn:{},
column3d:{},
bar:{},
bar3d:{}
},
point:{},
series:[],
subtitle:{
    text:p,
    style:{}
},
symbols:[],
title:{
    text:p,
    style:{}
},
toolbar:{},
tooltip:{
    borderRadius:1,
    style:{},
    formatter:function(){
        return this.point.showPercentInToolTip?this.point.toolText+parseInt(this.percentage*100,10)/100+"%":this.point.toolText
        }
    },
xAxis:{
    labels:{
        x:0,
        style:{},
        enabled:!1
        },
    lineWidth:0,
    plotLines:[],
    plotBands:[],
    title:{
        style:{},
        text:p
    },
    tickWidth:0,
    scroll:{
        enabled:!1
        }
    },
yAxis:[{
    startOnTick:!1,
    endOnTick:!1,
    title:{
        style:{},
        text:p
    },
    tickLength:0,
    labels:{
        x:0,
        style:{}
},
plotBands:[],
plotLines:[]
},{
    tickLength:0,
    gridLineWidth:0,
    startOnTick:!1,
    endOnTick:!1,
    title:{
        style:{},
        text:p
    },
    labels:{
        x:0,
        style:{},
        enabled:!1,
        formatter:function(){
            return this.value!==J?this.value:p
            }
        },
opposite:!0,
plotBands:[],
plotLines:[]
}],
exporting:{
    buttons:{
        exportButton:{},
        printButton:{
            enabled:!1
            }
        }
}
};

if(f.palettecolors&&typeof f.palettecolors==="string")h.colors=f.palettecolors.split(oa);
return h
},Aa=g.axisMinMaxSetter=function(f,h,d,c,j,e,g,p){
    d=h.stacking100Percent?
    cc(99,1,100,0,j,e,g,p):cc(a(h.max,d),a(h.min,c),d,c,j,e,g,p);
    f.min=Number(E(d.Min,10));
    f.max=Number(E(d.Max,10));
    f.tickInterval=Number(E(d.divGap,10));
    if(d.Range/d.divGap<=2)f.alternateGridColor=bb;
    C.highValue=h.max;
    C.lowValue=h.min;
    delete h.max;
    delete h.min
    },ob=g.configureAxis=function(f,h,r,c,j,g,o,t,q,v){
    var s;
    s=r.min;
    var l=r.max,O=r.tickInterval,n=v?"xAxis":c.stacking100Percent?"percentValue":q?"sYAxis":"yAxis",wa=s,u=1,P,F=r.gridLineColor,x=r.gridLineWidth,G=r.gridLineDashStyle,y=s<0&&l>0?!0:
    !1,B=!0,w,K=1,M=h[z].axisGridManager;
    if(v&&!c.catOccupied)c.catOccupied={};
        
    if(y&&(!v||!c.catOccupied[0]))v?(B=Boolean(a(f.showvzeroplane,1)),P=a(f.vzeroplanethickness,1),f=P>0?ga(d(f.vzeroplanecolor,F),d(f.vzeroplanealpha,f.vdivlinealpha,e.divLineAlpha[h.chart.paletteIndex])):bb):(w=a(f.divlinealpha,e.divLineAlpha[h.chart.paletteIndex]),h.chart.defaultSeriesType==="line"||h.chart.defaultSeriesType==="spline"||h[z].is3d?(B=Boolean(a(f.showzeroplane,1)),P=1):(P=x===1?2:x,K=5,w*=2),P=a(f.zeroplanethickness,
        P),f=P>0?ga(d(f.zeroplanecolor,F),d(f.zeroplanealpha,w)):bb),B&&(B=g===1?t[n](0):p,M.addAxisGridLine(r,0,B,P,G,f,K,v));
    if(j===1&&(!v||!c.catOccupied[s]))B=t[n](s),M.addAxisGridLine(r,s,B,0.1,void 0,bb,1,v);
    x<=0&&(x=0.1,F=bb);
    for(s=Number(E(wa+O,10));s<l;s=Number(E(s+O,10)),u+=1){
        y&&wa<0&&s>0&&!q&&(M.addAxisAltGrid(r,0),u+=1);
        if(s!==0&&(!v||!c.catOccupied[s]))B=g===1&&u%o===0?t[n](s):p,M.addAxisGridLine(r,s,B,x,G,F,2,v);
        wa=s;
        q||M.addAxisAltGrid(r,s)
        }
        q||M.addAxisAltGrid(r,l);
    if(j===1&&u%o===0&&(!v||
        !c.catOccupied[l]))B=t[n](l),M.addAxisGridLine(r,l,B,0.1,G,bb,2,v);
    r.labels.enabled=!1;
    r.gridLineWidth=0;
    r.alternateGridColor=bb;
    r.plotLines.sort(Zb)
    },na=g.placeVerticalAxis=function(f,h,d,c,j,e,g,o,q,v){
    var s=d[z],t=s.smartLabel,O,n,l,u,P=0,o=s.marginRightExtraSpace,F=s.marginLeftExtraSpace,x={},G={},y={},w=f.plotLines,C=f.plotBands,K=h.verticalAxisValuesPadding,M=h.verticalAxisValuesPadding,E=h.verticalAxisNamePadding,D=h.verticalAxisNameWidth,Z=h.rotateVerticalAxisName,J=0,X=0,$=0,Q=0,I=0,ba=0,
    R,da,la,Y,S,s=2,ga=function(a,c){
        var f,d;
        if(a&&a.label&&B(a.label.text)!==void 0){
            Y=a.label;
            if(Y.style&&Y.style!==la)la=Y.style,t.setStyle(la);
            O=t.getOriSize(a.label.text);
            d=(f=O.width)?f+2:0;
            if(a.isGrid){
                if(x[c]={
                    width:f,
                    height:O.height,
                    label:Y
                },$<=d)$=d,h.lYLblIdx=c
                    }else a.isTrend&&(g&&Y.textAlign===L||Y.textAlign===Oa?(G[c]={
                width:f,
                height:O.height,
                label:Y
            },Q=Ma(Q,d)):(y[c]={
                width:f,
                height:O.height,
                label:Y
            },I=Ma(I,d)))
                }
            },ba=function(a,c){
    var h,d=c?P:P+a;
    return d>0?(Z?(d<n.height&&(n=t.getSmartText(f.title.text,
        j,d)),h=n.height):(d<n.width&&(n=t.getSmartText(f.title.text,d,j)),h=n.width),f.title.text=n.text,c?d-h+a:d-h):(f.title.text=p,0)
    },W=function(a,c,f){
    for(var h in a)a[h].label.x=c,a[h].label.y=f
        };
        
R=0;
for(da=C.length;R<da;R+=1)ga(C[R],R);
R=0;
for(da=w.length;R<da;R+=1)ga(w[R],R);
if(f.title&&f.title.text!=p)la=f.title.style,t.setStyle(la),l=t.getOriSize(ib).height,Z?(n=t.getSmartText(f.title.text,j,e),P=n.height,u=l):(f.title.rotation=0,n=t.getSmartText(f.title.text,D!==void 0?D:e,j),P=n.width,u=20);
I>0&&(X=I+M);
q&&(c=a(c.chart.maxlabelwidthpercent,0),c>=1&&c<=100&&(q=c*q/100,$>q&&($=q)));
J=Ma(Q,$);
P>0&&(J+=P+2+E+K);
(function(){
    if(X+J>e){
        S=X+J-e;
        if(X)if(M>=S){
            M-=S;
            return
        }else S-=M,M=0;
        if(K+E>=S)E>=S?E-=S:(K-=S-E,E=0);
        else{
            S-=K+E;
            E=K=0;
            if(I>20)if(Q>$)if(I-Q>=S){
                I-=S;
                return
            }else if(Q-I>=S){
                Q-=S;
                return
            }else if(Q>I?(S-=Q-I,Q=I):(S-=I-Q,I=Q),2*(Q-$)>=S){
                I-=S/2;
                Q-=S/2;
                return
            }else S-=2*(Q-$),I=Q=$;
                else if(I-20>=S){
                I-=S;
                return
            }else S-=I-20,I=20;
            if(Q>$)if(Q-$>=S){
                Q-=S;
                return
            }else S-=Q-$,Q=$;
            P-u>=S?P-=
            S:(S-=P-u,P=u,I>=S?I=0:(S-=I,I=0,P>=S?P=0:(S-=P,P=0,$>=S&&($-=S,Q=$))))
            }
        }
})();
surplusWidth=function(a,c){
    var f,h=0,d=c?I-2:I+a-2;
    if(I>0){
        for(R in y)if(Y=y[R].label,y[R].width>d){
            if(Y.style&&Y.style!==la)la=Y.style,t.setStyle(la);
            f=t.getSmartText(Y.text,d,j,!0);
            Y.text=f.text;
            y[R].height=f.height;
            h=Math.max(h,f.width)
            }else h=Math.max(h,y[R].width);return c?d-h+a:d-h
        }else{
        for(R in y)y[R].label.text=p;return 0
        }
    }(0,!0);
surplusWidth=ba(surplusWidth,!0);
surplusWidth=function(a){
    var c=0,f=Math.max($,Q)+a-
    2;
    if(f>0){
        for(R in x)if(Y=x[R].label,x[R].width>f){
            if(Y.style&&Y.style!==la)la=Y.style,t.setStyle(la);
            a=t.getSmartText(Y.text,f,j,!0);
            Y.text=a.text;
            x[R].height=a.height;
            c=Math.max(c,a.width)
            }else c=Math.max(c,x[R].width);for(R in G)if(Y=G[R].label,G[R].width>f){
            if(Y.style&&Y.style!==la)la=Y.style,t.setStyle(la);
            a=t.getSmartText(Y.text,f,j,!0);
            Y.text=a.text;
            G[R].height=a.height;
            c=Math.max(c,a.width)
            }else c=Math.max(c,G[R].width);return f-c
        }else{
        for(R in x)x[R].label.text=p;for(R in G)G[R].label.text=
            p;return 0
        }
    }(surplusWidth);
surplusWidth=ba(surplusWidth);
q=h.verticalAxisNamePadding-E;
surplusWidth&&q&&(surplusWidth>q?(E+=q,surplusWidth-=q):(E+=surplusWidth,surplusWidth=0));
q=h.verticalAxisValuesPadding-K;
surplusWidth&&q&&(surplusWidth>q?(K+=q,surplusWidth-=q):(K+=surplusWidth,surplusWidth=0));
q=h.verticalAxisValuesPadding-M;
surplusWidth&&q&&(surplusWidth>q?(M+=q,surplusWidth-=q):(M+=surplusWidth,surplusWidth=0));
I>0&&(X=I+M);
J=Ma(Q,$)+K;
P>0&&(J+=P+E+(g?4:8));
q=Ma(Q,$);
q+=q>0?E:0;
P>0?(Z?P<n.height&&
    (n=t.getSmartText(f.title.text,j,P)):(P<n.width&&(n=t.getSmartText(f.title.text,P,j)),f.title.y=-((n.height-l)/2)),f.title.text=n.text,f.title.margin=q+K+F+(g?8:4)+(Z?n.height-l:n.width/2)):f.title.text=p;
l=-(K+F+2);
o=o+M+2;
ba=Ma(Q,$);
f.labels.style&&(s=parseInt(f.labels.style.fontSize,10)*0.35);
g?(I>0&&W(y,l,s),ba>0&&(W(x,o,s),W(G,o,s))):(I>0&&W(y,o,s),ba>0&&(W(x,l,s),W(G,l,s)));
v?(d.chart.marginLeft+=g?X:J-v,d.chart.marginRight+=g?J-v:X):(d.chart.marginLeft+=g?X:J,d.chart.marginRight+=g?J:X);
return X+
J
},ua=g.titleSpaceManager=function(f,h,d,c){
    var j=h.chart,e=t(j.caption),h=t(j.subcaption),g=j=a(j.captionpadding,10),o=f[z].smartLabel,q=!1,v=0,s,l,O=0,n=0,u=0,x=0,P=0,F=0,y=f.title,G=f.subtitle;
    if(e!==p)s=y.style,u=a(parseInt(s.fontHeight,10),parseInt(s.lineHeight,10),12),F=a(parseInt(s.fontSize,10),10);
    if(h!==p)l=G.style,x=a(parseInt(l.fontHeight,10),parseInt(l.lineHeight,10),12),P=a(parseInt(l.fontSize,10),10);
    if(u>0||x>0){
        v=u+x+j;
        v>c?(O=v-c,q=!0,O<j?j-=O:(O-=j,j=0,x>O?(n=x-O+10,x=0):(O-=x,x=
            0,u>O&&(n=u-O),u=0))):n=c-v;
        if(u>0)o.setStyle(s),u+=n,c=o.getSmartText(e,d,u),n=u-c.height,u=c.height,y.text=c.text,y.y=F;
        if(x>0)o.setStyle(l),x+=n,d=o.getSmartText(h,d,x),n=x-d.height,x=d.height,G.text=d.text,G.y=P+u;
        q&&n>0&&(j+=ec(g-j,n));
        v=u+x+j;
        f.chart.marginTop+=v
        }
        return v
    },Ba=g.stepYAxisNames=function(a,h,d,c,j,e){
    for(var g=0,o=c.plotLines,q=[],v,s=c.plotLines.length,h=h[z].smartLabel,t=parseFloat(Lb(d.basefontsize,10)),l;g<s;g+=1)d=o[g],d.isGrid&&d.label&&d.label.text&&(q.push(d),d.value===
        0&&(v=q.length-1));
    if(s=q.length)if(c.labels.style?h.setStyle(c.labels.style):q[0].label&&q[0].label.style&&h.setStyle(c.labels.style),g=h.getOriSize("W").height,e||(g+=t*0.4),a/=s-1,a<g){
        e=Math.ceil(g/a);
        for(g=a=v;g<s;g+=1){
            d=q[g];
            if(g===j){
                if((g-a)%e&&l)l.label.text="";
                a=j
                }
                if(d&&d.label)(g-a)%e?d.label.text=p:l=d
                }
                for(g=a=v;g>=0;g-=1){
            d=q[g];
            if(g===j){
                if((a-g)%e&&l)l.label.text="";
                a=j
                }
                if(d&&d.label)(a-g)%e?d.label.text=p:l=d
                }
            }
    },mb=g.placeHorizontalAxis=function(f,h,d,c,j,e,g){
    var o=d[z],q,v,s,t,
    l,n,u,x,P,F,y=0,G=0,w=10,E=1,C=0,K=C=0,M=!1,L=!1,J=!1,Z=a(c.chart.labelstep,0),D=h.labelDisplay,$=h.rotateLabels,R=h.horizontalLabelPadding,X=o.marginBottomExtraSpace;
    P=d.chart.marginLeft;
    var I=d.chart.marginRight,ba=o.smartLabel,S=h.catCount,da=h.slantLabels,la=j/(f.max-f.min),ga=0,oa=0,K={
        w:0,
        h:0
    };
    
    if(f.labels.style)n=f.labels.style,ba.setStyle(n),x=ba.getOriSize("W"),w=x.height,u=x.width+4,F=ba.getOriSize("WWW").width+4;
    var aa,W,ha=[],T=[],ma=0,fa=0,ka,Ea,na=h.horizontalAxisNamePadding;
    aa=0;
    var h=
    h.staggerLines,Ha=ga,ua=!1;
    if(f.title&&f.title.text!=p)n=f.title.style,ba.setStyle(n),C=ba.getOriSize("W").height,f.title.rotation=0,t=ba.getSmartText(f.title.text,j,e),G=t.height;
    d.chart.marginLeft!=parseInt(c.chart.chartleftmargin,10)&&(q=!0);
    d.chart.marginRight!=parseInt(c.chart.chartrightmargin,10)&&(W=!0);
    aa=j-g;
    switch(D){
        case "none":
            M=J=!0;
            $&&(y=da?300:270,x=w,w=u,u=x);
            break;
        case "rotate":
            y=da?300:270;
            x=w;
            w=u;
            u=x;
            M=!0;
            break;
        case "stagger":
            L=M=!0;
            c=Math.floor((e-C)/w);
            c<h&&(h=c);
            break;
        default:
            $&&
            (y=da?300:270,x=w,w=u,u=x)
            }
            o.isBar&&(M=!0);
    c=0;
    g=f.plotLines;
    if(typeof d._FCconf.isXYPlot===Q&&!o.isBar){
        for(ka=g.length;c<ka;c+=1)(v=g[c])&&(v.isGrid?ha.push(v):v.isTrend&&T.push(v));
        t=f.plotBands;
        c=0;
        for(ka=t.length;c<ka;c+=1)(v=t[c])&&T.push(v);
        t=ha.length-1;
        ka=ha.length;
        L&&(h>ka?h=ka:h<2&&(h=2));
        if(ka){
            f.scroll&&f.scroll.viewPortMin&&f.scroll.viewPortMax?(x=f.scroll.viewPortMin,s=f.scroll.viewPortMax,W=q=!1):(x=f.min,s=f.max);
            c=(ha[t].value-ha[0].value)*la;
            Ea=c/(S-1);
            c=(ha[0].value-x)*la;
            s=(s-
                ha[t].value)*la;
            D==="auto"?Ea<F&&(y=da?300:270,x=w,w=u,u=x,M=!0):D==="stagger"&&(Ea*=h);
            P=(c+P)*2;
            if((l=g[0].label)&&l.text)l.style&&ba.setStyle(l.style),F=Math.min(Ea,ba.getOriSize(l.text).width+4),F>P&&(ma=(F-P)/2);
            P=(s+I)*2;
            if((l=g[t].label)&&l.text)l.style&&ba.setStyle(l.style),F=Math.min(Ea,ba.getOriSize(l.text).width+4),F>P&&(fa=(F-P)/2);
            c=ma+fa;
            c>0&&(aa>c?(I=(I=fa*j/(fa+j))?I+4:0,d.chart.marginRight+=I,j-=I,I=(I=ma*j/(ma+j))?I+4:0,d.chart.marginLeft+=I,j-=I,la=j/(f.max-f.min)):ma<fa?aa>=fa&&
                W?(I=(I=fa*j/(fa+j))?I+4:0,d.chart.marginRight+=I,j-=I,la=j/(f.max-f.min)):q&&(I=(I=ma*j/(ma+j))?I+4:0,d.chart.marginLeft+=I,j-=I,la=j/(f.max-f.min)):aa>=ma&&q?(I=(I=ma*j/(ma+j))?I+4:0,d.chart.marginLeft+=I,j-=I,la=j/(f.max-f.min)):W&&(I=(I=fa*j/(fa+j))?I+4:0,d.chart.marginRight+=I,j-=I,la=j/(f.max-f.min)),c=(ha[t].value-ha[0].value)*la,Ea=c/(S-1));
            !L&&!J&&(E=Math.ceil(u/Ea),Z&&(Ea*=Z,E=Math.ceil(u/Ea)),Ea*=E);
            for(s=0;s<ka;s+=1)if(v=ha[s],s%E&&v.label)v.label.text=p;
                else if(v&&v.label&&B(v.label.text)!==
                void 0){
                l=v.label;
                if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
                if(y&&J)q=ba.getOriSize(l.text),K.w=Ma(K.w,q.width+4),K.h=Ma(K.h,q.height);
                else if(!J)q=y||L?ba.getOriSize(l.text):ba.getSmartText(l.text,Ea-4,e,M),K.w=Ma(K.w,q.width+4),K.h=Ma(K.h,q.height)
                    }
                }
            s=0;
    for(ka=T.length;s<ka;s+=1)if((v=T[s])&&v.label&&B(v.label.text)!==void 0){
        l=v.label;
        if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
        q=ba.getOriSize(l.text);
        l.verticalAlign===$a?ga=Ma(ga,q.height):oa=Ma(oa,q.height)
        }
        f.scroll&&f.scroll.enabled&&
    !y&&!J&&(I=K.w/2,d.chart.marginLeft<I&&(P=I-d.chart.marginLeft,aa>P&&(j-=P,aa-=P,d.chart.marginLeft+=P)),d.chart.marginRight<I&&(P=I-d.chart.marginRight,aa>P&&(j-=P,aa-=P,d.chart.marginRight+=P)))
    }else{
    var Z={},Ca,$=fa=0,Ga=null,Aa=null,S={},ua=!0,la=j/(f.max-f.min),D=function(a,c,h){
        var j,e,g,q,s,o;
        o=a.plotObj;
        s=a.labelTextWidth;
        if(!s){
            l=o.label;
            if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
            s=ba.getOriSize(l.text).width+4;
            a.oriWidth=s;
            s>Ca&&(s=Ca);
            a.labelTextWidth=s;
            a.leftEdge=o.value*la-s/2;
            a.rightEdge=o.value*la+s/2;
            if(h)s=Math.min(s,2*(v.value-f.min)*la+d.chart.marginLeft),a.labelTextWidth=s
                }
                if(typeof c!==Q){
            h=c.plotObj;
            l=h.label;
            if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
            c.oriWidth?g=c.oriWidth:(g=ba.getOriSize(l.text).width+4,c.oriWidth=g);
            g>Ca&&(g=Ca);
            c.labelTextWidth=g;
            c.leftEdge=h.value*la-g/2;
            c.rightEdge=h.value*la+g/2;
            j=o.value*la;
            e=j+s/2;
            q=h.value*la;
            g=q-g/2;
            if(g<e)if(j+u<q-u)e-=g,j=q-j,a.labelTextWidth=e>j?Math.min(s,j):Math.max(u,s-e/2),c.labelTextWidth=2*(j-a.labelTextWidth/
                2),a.leftEdge=o.value*la-a.labelTextWidth/2,a.rightEdge=o.value*la+a.labelTextWidth/2,c.leftEdge=h.value*la-c.labelTextWidth/2,c.rightEdge=h.value*la+c.labelTextWidth/2;else return c.labelTextWidth=0,h.label.text=p,!1
                }else if(h)s=Math.min(s,2*(f.max-v.value)*la+d.chart.marginRight),a.labelTextWidth=s,a.leftEdge=o.value*la-s/2,a.rightEdge=o.value*la+s/2;
        a.nextCat=c;
        return!0
        };
        
    L?h>ka?h=ka:h<2&&(h=2):h=1;
    for(ka=g.length;c<ka;c+=1)if((v=g[c])&&v.label&&typeof v.label.text!==Q)v.isGrid?(ma={
        plotObj:v
    },
    v.isCat&&(t=c%h,Z[t]||(Z[t]=[]),Ga?(Aa=ma,Z[t].push(Aa)):(Aa=Ga=ma,Z[t].push(Ga))),ha.push(ma)):v.isTrend&&T.push({
        plotObj:v
    });t=f.plotBands;
    c=0;
    for(ka=t.length;c<ka;c+=1)(v=t[c])&&v.isTrend&&v.label&&typeof v.label.text!==Q&&T.push({
        plotObj:v
    });
    if(ha.length)if(!J&&!y)if(o.distributedColumns){
        c=0;
        for(ka=ha.length;c<ka;c+=1)if(s=ha[c],W=c%h,v=s.plotObj,v.label&&v.isCat){
            c-h>=0?(q=ha[c-h],W=q.plotObj.value*la+q.plotObj._weight*la/2):(q=null,W=f.min*la-P);
            c+h<ka?(x=ha[c+h],x=x.plotObj.value*la-x.plotObj._weight*
                la/2):(x=null,x=f.max*la+I);
            l=v.label;
            if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
            ma=v.value*la;
            aa=ma-v._weight*la/2;
            Z=ma+v._weight*la/2;
            h>1?(q=aa-W,W=Z+x,W=Z-aa+Math.min(q,W)):W=Z-aa;
            l=v.label;
            l.style&&l.style!==n&&ba.setStyle(l.style);
            W<u&&u<ba.getOriSize(l.text).width?(v.label.text=p,s.labelTextWidth=0):(s.labelTextWidth=W,q=ba.getSmartText(l.text,W-4,e,M),W=q.width+4,s.labelTextWidth=W,K.h=Math.max(K.h,q.height))
            }
        }else{
        ka=ha.length;
        t=ha.length-1;
        (c=(ha[t].plotObj.value-ha[0].plotObj.value)*
            la)?(Ca=c*0.1,g=Math.max(c*0.2,c/ka)):g=Ca=j;
        for(s in Z){
            c=0;
            for(F=Z[s].length;c<F;){
                for(ma=c+1;!D(Z[s][c],Z[s][ma]);)ma+=1;
                c=ma
                }
            }
            Ga&&($=(Ga.plotObj.value-f.min)*la+P-Ga.labelTextWidth/2);
        v=ha[0].plotObj;
        if(!Ga||v!==Ga.plotObj){
        l=v.label;
        if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
        F=ba.getOriSize(l.text).width+4;
        ma=(v.value-f.min)*la+P;
        Ga&&(c=$-ma,F=c<F&&c>u/2?c*2:0);
        ha[0].labelTextWidth=F;
        F>0&&(x=ma-F/2);
        x<$&&($=x)
        }
        if(Aa)F=Aa.labelTextWidth,fa=(f.max-Aa.plotObj.value)*la+I-F/2;
        v=ha[t].plotObj;
        if(!Aa||v!==Aa.plotObj){
            l=v.label;
            if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
            F=ba.getOriSize(l.text).width+4;
            ma=(f.max-v.value)*la+I;
            Aa&&(c=ma-fa,F=c<F&&c>u/2?c*2:0);
            ha[t].labelTextWidth=F;
            F>0&&(x=ma-F/2);
            x<fa&&(fa=x)
            }
            ma=$<0?-$:0;
        fa=fa<0?-fa:0;
        c=ma+fa;
        if(c>0)for(s in aa>c?(I=(I=fa*j/(fa+j))?I+4:0,d.chart.marginRight+=I,j-=I,I=(I=ma*j/(ma+j))?I+4:0,d.chart.marginLeft+=I,j-=I,la=j/(f.max-f.min)):ma<fa?aa>=fa&&W?(I=(I=fa*j/(fa+j))?I+4:0,d.chart.marginRight+=I,j-=I,la=j/(f.max-f.min)):q&&(I=(I=
            ma*j/(ma+j))?I+4:0,d.chart.marginLeft+=I,j-=I,la=j/(f.max-f.min)):aa>=ma&&q?(I=(I=ma*j/(ma+j))?I+4:0,d.chart.marginLeft+=I,j-=I,la=j/(f.max-f.min)):W&&(I=(I=fa*j/(fa+j))?I+4:0,d.chart.marginRight+=I,j-=I,la=j/(f.max-f.min)),I=d.chart.marginRight,P=d.chart.marginLeft,c=(ha[t].plotObj.value-ha[0].plotObj.value)*la,Ca=c*0.1,g=Math.max(c*0.2,c/ka),Z){
            c=0;
            for(F=Z[s].length;c<F;){
                for(ma=c+1;!D(Z[s][c],Z[s][ma],!0);)ma+=1;
                c=ma
                }
                s+=1
            }
            c=0;
        for(ka=ha.length;c<ka;c+=1)if(s=ha[c],W=c%h,v=s.plotObj,v.label)if(v.isCat)s.labelTextWidth&&
            (S[W]=s);
        else{
            x=(q=S[W])?q.nextCat:Z[W]?Z[W][0]:null;
            q=null;
            if(c>=h){
                W=c-h;
                for(q=ha[W];!q.labelTextWidth;)if(W>=h)W-=h,q=ha[W];
                    else{
                    q=null;
                    break
                }
                }
                W=q?q.rightEdge:f.min*la-P;
        x=x?x.leftEdge:f.max*la+I;
        l=v.label;
        if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
            F=ba.getOriSize(l.text).width+4;
            aa=v.value*la-F/2;
            if(o.isBar&&c==ka-1&&q){
            if(W>aa)q.plotObj.label.text=p,q.labelTextWidth=0,W=q.leftEdge
                }else if(W>aa||x<aa+F){
            v.label.text=p;
            s.labelTextWidth=0;
            continue
        }
        W=Math.max(W,aa);
            ma=v.value*la;
            W=2*Math.min(ma-
            W,x-ma);
        l=v.label;
        l.style&&l.style!==n&&ba.setStyle(l.style);
            W<u&&u<ba.getOriSize(l.text).width?(v.label.text=p,s.labelTextWidth=0):(s.labelTextWidth=W,q=ba.getSmartText(l.text,W-4,e,M),W=q.width+4,s.labelTextWidth=W,s.leftEdge=ma-W/2,s.rightEdge=ma+W/2,K.h=Math.max(K.h,q.height))
            }
            q=I=W=P=null;
    c=0;
    for(ka=ha.length;c<ka;c+=1)if(s=ha[c],v=s.plotObj,W=c%h,v.isCat&&s.labelTextWidth){
        q=I=null;
        ma=v.value*la;
        if(c>=h){
            W=c-h;
            for(q=ha[W];!q.labelTextWidth;)if(W>h)W-=h,q=ha[W];
                else{
                q=null;
                break
            }
            }
            q=q?ma-q.rightEdge:
    ma-f.min*la+d.chart.marginLeft;
    if(c+h<ka){
        P=c+h;
        for(I=ha[P];!I.labelTextWidth;)if(P+h<ka-1)P+=h,I=ha[P];
            else{
            I=null;
            break
        }
        }
        W=I?I.leftEdge-ma:f.max*la+d.chart.marginRight-ma;
    W=Math.min(q,W)*2;
    W>g&&(W=g);
    if(W>s.oriWidth)W=s.oriWidth;
    s.labelTextWidth=W;
    l=v.label;
    l.style&&l.style!==n&&ba.setStyle(l.style);
    q=ba.getSmartText(l.text,W-4,e,M);
    s.labelTextWidth=q.width+4;
    K.h=Math.max(K.h,q.height);
    s.rightEdge=ma+s.labelTextWidth/2
    }
}else if(y){
    c=0;
    for(ka=ha.length;c<ka;c+=1)if((v=ha[c].plotObj)&&v.label&&v.label.text){
        l=
        v.label;
        if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
        s=1;
        if(c+s<ka)for(I=ha[s+c].plotObj;I&&(I.value-v.value)*la<u;)if(v.isCat){
            if(I.label){
                I.label.text=p;
                s+=1;
                if(s+c>=ka-1)break;
                I=g[s+c].plotObj
                }
            }else if(I.isCat){
            v.label.text=p;
            v=I;
            c+=s-1;
            l=v.label;
            if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
            break
        }
        K.w=Math.max(K.w,ba.getOriSize(l.text).width+4)
        }
    }
s=0;
for(ka=T.length;s<ka;s+=1)if((v=T[s].plotObj)&&v.label&&B(v.label.text)!==void 0){
    l=v.label;
    if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
    q=ba.getOriSize(l.text);
    l.verticalAlign===$a?ga=Ma(ga,q.height):oa=Ma(oa,q.height)
    }
}
if(J){
    if(aa=w,y)aa=K.w
        }else aa=y?K.w:L?h*w:K.h;
aa>0&&(Ha+=R+aa);
G>0&&(Ha+=G+na);
K=oa+Ha+2;
x=0;
K>e&&(c=K-e,na>c?(na-=c,c=0):(c-=na,na=0,R>c?(R-=c,c=0):(c-=R,R=0)),oa>c?(oa-=c,c=0):(oa>0&&(c-=oa,oa=0),c>0&&(ga>c?(ga-=c,c=0):(ga>0&&(c-=ga,ga=0),c>0&&((x=G-C)>c?(G-=c,c=0):(c-=x,G=C,c>0&&((x=aa-w)>c?(aa-=c,c=0):(c-=x,aa=w,c>0&&(c-=G+na,G=0,c>0&&(c-=aa,aa=0,c>0&&(R-=c)))))))))));
R+=X;
var I=o.is3d?-d.chart.xDepth:0,e=aa+
R,Ba,Ha=I;
P=w*0.5;
C=w+R;
ka=ha.length;
K=0;
if(ua)if(y){
    Ea=Oa;
    Ba=da?R+8:R+4;
    ka=ha.length;
    for(s=0;s<ka;s+=1)if((v=ha[s].plotObj)&&v.label&&B(v.label.text)!==void 0){
        l=v.label;
        if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
        c=1;
        q=ba.getSmartText(l.text,aa-4,u,M);
        l.text=q.text;
        Ha=I+P/2;
        l.y=Ba;
        l.x=Ha;
        l.rotation=y;
        l.textAlign=Ea;
        K+=1
        }
    }else{
    ua=aa;
    Ea=Y;
    Ba=C;
    for(s=0;s<ka;s+=E)if((v=ha[s].plotObj)&&v.label&&B(v.label.text)!==void 0){
        l=v.label;
        if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
        if(!J)q=ba.getSmartText(l.text,
            ha[s].labelTextWidth-4,ua,M),l.text=q.text,L&&(Ba=C+K%h*w);
        l.y=Ba;
        l.x=Ha;
        l.rotation=y;
        l.textAlign=Ea;
        K+=1
        }
    }else{
    y?(ua=Ea,c=aa-4,Ea=Oa,Ba=da?R+8:R+4):L?(ua=w,c=Ea*h-4,Ea=Y):(ua=aa,c=Ea-4,Ea=Y,Ba=C);
    for(s=0;s<ka;s+=E)if((v=ha[s])&&v.label&&B(v.label.text)!==void 0){
        l=v.label;
        if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
        if(!J)q=ba.getSmartText(l.text,c,ua,M),l.text=q.text,L&&(Ba=C+K%h*w),y&&(Ha=I+P/2);
        l.y=Ba;
        l.x=Ha;
        l.rotation=y;
        l.textAlign=Ea;
        K+=1
        }
    }
    ka=T.length;
for(s=w=y=0;s<ka;s+=1)if((v=T[s].plotObj?
    T[s].plotObj:T[s])&&v.label&&B(v.label.text)!==void 0){
    l=v.label;
    if(l.style&&l.style!==n)n=l.style,ba.setStyle(n);
    l.verticalAlign===$a?(q=ba.getSmartText(l.text,j,ga,!0),w=Math.max(w,q.height),l.text=q.text,l.y=e+ba.getOriSize("W").height,l.x=Ha):(q=ba.getSmartText(l.text,j,oa,!0),y=Math.max(y,q.height),l.text=q.text,l.y=-(oa-ba.getOriSize("W").height+R+2))
    }
    if(G>0)ba.setStyle(f.title.style),t=ba.getSmartText(f.title.text,j,G),f.title.text=t.text,f.title.margin=e+w+na;
Ha=w;
if(aa>0)o.horizontalAxisHeight=
    R+aa-X,Ha+=o.horizontalAxisHeight;
G>0&&(Ha+=G+na);
d.chart.marginBottom+=Ha;
y>0&&(d.chart.marginTop+=y,Ha+=y);
return Ha
},Gb=function(f,h,r,c,j){
    var c=f.legend,g=f.chart,l=g.paletteIndex,o=g.is3D?fa.chart3D:fa.chart2D,q=g.useRoundEdges,v=a(h.legendiconscale,1),s=(parseInt(c.itemStyle.fontSize,10)||10)-1,z=f.chart.defaultSeriesType,x=3;
    if(v<=0||v>5)v=1;
    c.padding=4;
    s<=0&&(s=1);
    j-=8;
    s*=v;
    x*=v;
    s=Math.min(s,j);
    s<=0&&(x=s=0);
    c.symbolWidth=s;
    c.symbolPadding=x;
    c.textPadding=4;
    c.legendHeight=j=s+2*x;
    c.rowHeight=
    Math.max(parseInt(c.itemStyle.lineHeight,10)||12,j);
    r?(c.align=Oa,c.verticalAlign="middle",c.layout="vertical"):c.x=(g.marginLeft-g.spacingLeft-g.marginRight+g.spacingRight)/2;
    r=d(h.legendbordercolor,e[o.legendBorderColor][l]);
    j=a(h.legendborderalpha,100);
    g=a(h.legendbgalpha,100);
    c.backgroundColor=ga(d(h.legendbgcolor,e[o.legendBgColor][l]),g);
    c.borderColor=ga(r,j);
    c.borderWidth=a(h.legendborderthickness,!q||h.legendbordercolor?1:0);
    c.shadow=Boolean(a(h.legendshadow,1));
    if(c.shadow)c.shadow={
        enabled:c.shadow,
        opacity:Ma(j,g)/100
        };
        
    c.reversed=Boolean(a(h.reverselegend,0));
    if(/^pie$/.test(z))c.reversed=!c.reversed;
    c.style={
        padding:4
    };
    
    Boolean(a(h.interactivelegend,1))?c.symbolStyle={
        _cursor:"hand",
        cursor:"pointer"
    }:(f.plotOptions.series.events.legendItemClick=Xa,c.itemStyle.cursor="default",c.itemHoverStyle={
        cursor:"inherit"
    });
    c.borderRadius=q?3:0;
    c.legendAllowDrag=Boolean(a(h.legendallowdrag,0));
    c.title.text=t(u(h.legendcaption,p));
    c.legendScrollBgColor=y(d(h.legendscrollbgcolor,e.altHGridColor[f.chart.paletteIndex]));
    c.legendScrollBarColor=d(h.legendscrollbarcolor,r);
    c.legendScrollBtnColor=d(h.legendscrollbtncolor,r);
    c.title.style=$({
        fontWeight:"bold"
    },c.itemStyle)
    },Qb=g.placeLegendBlockRight=function(f,h,d,c,j){
    Gb(f,h.chart,!0,j,d);
    var e=0,g=f.series,l,q,o=f[z].smartLabel,s=f.legend,t,x=s.textPadding,n=s.title.padding,u=s.symbolWidth+2*s.symbolPadding,y=c*2,P=0,h=a(h.chart.legendpadding,7),F=2*s.padding,w={
        width:F,
        height:F
    };
    
    d-=F;
    j&&(g=g&&g[0]&&g[0].data);
    if(typeof g===Q||typeof g.length===Q)return 0;else l=g.length;
    t=d-u-2-x;
    t<0&&(t=0);
    for(o.setStyle(s.itemStyle);e<l;e+=1)if(q=g[e],q.showInLegend!==!1)t===0?(w.height+=u,q.name=p):(j=o.getSmartText(q.name,t,y),q.name=j.text,w.height+=Math.max(j.height,u),P=Math.max(j.width,P));s.width=P+u+2+x+F;
    if(s.title.text!==p){
        o.setStyle(s.title.style);
        j=o.getSmartText(s.title.text,d,y);
        s.title.text=j.text;
        e=j.width+F;
        if(s.width<e)s.initialItemX=(e-s.width)/2,s.width=e;
        w.height+=j.height+n
        }
        s.height=s.totalHeight=w.height;
    if(s.height>c)s.height=c,s.scroll.enabled=!0,s.width+=
        (s.scroll.scrollBarWidth=10)+(s.scroll.scrollBarPadding=2);
    h=Math.min(s.width+h,d);
    f.chart.marginRight+=h;
    return h
    },Mb=g.placeLegendBlockBottom=function(f,h,d,c,j){
    Gb(f,h.chart,!1,j,d);
    var e=0,g=f.series,l=f[z].smartLabel,q=f.legend,o,s,t=q.textPadding,x=q.title.padding,n=q.symbolPadding;
    s=q.legendHeight;
    var u=h.chart,y=0,P=c*2,F=q.rowHeight,w=[],G=a(u.minimisewrappinginlegend,0),u=a(parseInt(u.legendnumcolumns,10),0),B=0,E=0,C=0,K=o=0,M=2*q.padding,h=a(h.chart.legendpadding,7),L={
        width:M,
        height:M
    };
    u<0&&(u=0);
    d-=M;
    l.setStyle(q.itemStyle);
    o=l.getSmartText(ib).height;
    h=Math.min(h,c-o-8);
    c-=h;
    j&&(g=g&&g[0]&&g[0].data);
    if(typeof g===Q||typeof g.length===Q)return 0;else j=g.length;
    for(l.setStyle(q.itemStyle);e<j;e+=1)g[e].showInLegend!==!1&&(o=l.getOriSize(g[e].name),B=Math.max(B,o.width),E+=o.width,C+=1);
    o=E/C;
    o+=s+2+t;
    B+=s+2+t;
    u>0&&C<u&&(u=C);
    u>0&&(K=d/u)>o?K>B&&(K=B):d>B&&(G||o*1.5>B)?(u=Math.floor(d/B),C<u&&(u=C),K=B):d>=2*o?(u=Math.floor(d/o),C<u&&(u=C),K=Math.floor(d/u),K>B&&(K=B)):(u=1,K=
        d);
    q.itemWidth=K;
    s=K-s-2-t;
    s<0&&(n=s=t=0);
    q.symbolPadding=n;
    q.textPadding=t;
    q.width=K*u+M;
    if(q.title.text!==p){
        l.setStyle(q.title.style);
        o=l.getSmartText(q.title.text,d,P);
        q.title.text=o.text;
        e=o.width+M;
        if(q.width<e)q.initialItemX=(e-q.width)/2,q.width=e;
        y=o.height+x
        }
        l.setStyle(q.itemStyle);
    x=0;
    if(q.reversed)for(e=j-1;e>=0;e-=1){
        if(d=g[e],d.showInLegend!==!1){
            if(s===0)w[x]=!0,d.name=p;
            else{
                o=l.getSmartText(d.name,s,P);
                for(d.name=o.text;w[x]===!0;)x+=1;
                d=o.height/F;
                n=x;
                for(t=0;t<d;t+=1,n+=u)w[n]=
                    !0
                    }
                    x+=1
            }
        }else for(e=0;e<j;e+=1)if(d=g[e],d.showInLegend!==!1){
    if(s===0)w[x]=!0,d.name=p;
    else{
        o=l.getSmartText(d.name,s,P);
        for(d.name=o.text;w[x]===!0;)x+=1;
        d=o.height/F;
        n=x;
        for(t=0;t<d;t+=1,n+=u)w[n]=!0
            }
            x+=1
    }
    L.height+=Math.ceil(w.length/u)*F+y;
q.height=q.totalHeight=L.height;
q.rowHeight=F;
q.legendNumColumns=u;
if(q.height>c)q.height=c,q.scroll.enabled=!0,q.width+=(q.scroll.scrollBarWidth=10)+(q.scroll.scrollBarPadding=2);
h+=q.height;
f.chart.marginBottom+=h;
return h
},Zb=function(a,d){
    return a.value-
    d.value
    },Bb=g.adjustVerticalAxisTitle=function(a,d,e){
    if(d&&d.text){
        var c=d.text,j=a[z].smartLabel,g=2*Math.min(a.chart.marginTop,a.chart.marginBottom)+e,l=e+a.chart.marginTop+a.chart.marginBottom;
        d.style&&j.setStyle(d.style);
        c=j.getOriSize(c);
        if(d.rotation=="0"){
            if(c.height>g)d.y=(l/2-(e/2+a.chart.marginTop))/2
                }else if(c.width>g)d.y=l/2-(e/2+a.chart.marginTop)
            }
        },Cb=g.adjustVerticalCanvasMargin=function(f,d,e,c){
    var j=d.chart,g=d=0,l=0,p=a(j.canvastopmargin,0),j=a(j.canvasbottommargin,0),q=p/(p+j),
    o=f.chart.marginTop,s=f.chart.marginBottom;
    j>s&&(d+=j-s);
    p>o&&(d+=p-o);
    d>e?p>o&&j>s?(g=e*q,l=e*(1-q)):p>o?g=e:l=e:d>0&&(j>s&&(l=j-s),p>o&&(g=p-o));
    g&&(f.chart.marginTop+=g);
    l&&(f.chart.marginBottom+=l,c&&c.title&&(c.title.margin+=l));
    return g+l
    },Db=g.adjustHorizontalCanvasMargin=function(f,d,e,c,j){
    var g=d.chart,d=a(g.canvasleftmargin,0),g=a(g.canvasrightmargin,0),l=d/(d+g),p=0,q=f.chart.marginLeft,o=f.chart.marginRight,s=0,t=0;
    d>q&&(p+=d-q);
    g>o&&(p+=g-o);
    p>e?d>q&&g>o?(s=e*l,t=e*(1-l)):g>o?t=e:s=
    e:p>0&&(d>q&&(s=d-q),g>o&&(t=g-o));
    s&&(f.chart.marginLeft+=s,c&&c.title&&(c.title.margin+=s));
    t&&(f.chart.marginRight+=t,j&&j.title&&(j.title.margin+=t));
    return t+s
    };
    
C("base",{
    useScaleRecursively:!0,
    draw:function(a,d){
        return new xb.Chart(a,d)
        },
    init:function(f,d,e){
        this.dataObj=d=$({},d);
        d.chart=d.chart||d.graph;
        delete d.graph;
        if(!d.chart)return{
            series:[]
        };
        
        this.containerElement=f;
        this.config={};
        
        this.smartLabel=new da(e.id,document.getElementsByTagName("body")[0]||f,a(d.chart.useellipseswhenoverflow,
            d.chart.useellipsewhenoverflow,1));
        this.linkClickFN=rb(d,this.chartInstance);
        this.numberFormatter=new kc(d.chart,this);
        if(!this.standaloneInit)return new g.createDialog(f,e.jsVars.msgStore.ChartNotSupported);
        return this.chart(f.offsetWidth||parseFloat(f.style.width),f.offsetHeight||parseFloat(f.style.height),e)
        },
    chart:function(f,h){
        var g=this.name,c=this.dataObj,j,o,U,u,q,v,s=this.defaultSeriesType,w,O,n=c.chart,C,E,P,F,J,G;
        j=Pb(c,f,h,this);
        G=j.chart;
        J=j.xAxis;
        w=j[z];
        j.labels.smartLabel=v=w.smartLabel=
        this.smartLabel;
        w.width=f;
        w.height=h;
        O=j.plotOptions;
        w.isDual=this.isDual;
        w.numberFormatter=this.numberFormatter;
        w.axisGridManager=new Ra(s,n);
        G.is3D=o=w.is3d=/3d$/.test(s);
        G.isBar=u=w.isBar=this.isBar;
        U=/^pie/.test(s);
        F=n.useroundedges==1;
        P=o?fa.chart3D:fa.chart2D;
        G.events.click=j.plotOptions.series.point.events.click=this.linkClickFN;
        G.defaultSeriesType=s;
        var D=n.palette>0&&n.palette<6?n.palette:a(this.paletteIndex,1);
        D-=1;
        G.paletteIndex=D;
        G.usePerPointLabelColor=n.colorlabelsfromplot==pb;
        G.useRoundEdges=
        F&&!o&&!this.distributedColumns&&this.defaultSeriesType!=="pie";
        if(d(n.clickurl)!==void 0)G.link=n.clickurl,G.style.cursor="pointer",j.plotOptions.series.point.events.click=function(){
            G.events.click.call({
                link:n.clickurl
                })
            };
            
        var Q=d(n.basefont,"Verdana"),X=Lb(n.basefontsize,10),K=d(n.basefontcolor,e[P.baseFontColor][D]);
        C=d(n.outcnvbasefont,Q);
        var M=Lb(n.outcnvbasefontsize,X),S=M+Ta,Y=d(n.outcnvbasefontcolor,K).replace(/^#?([a-f0-9]+)/ig,"#$1"),Z;
        X+=Ta;
        K=K.replace(/^#?([a-f0-9]+)/ig,"#$1");
        w.trendStyle=
        w.outCanvasStyle={
            fontFamily:C,
            color:Y,
            fontSize:S
        };
        
        q=R(w.trendStyle);
        w.inCanvasStyle={
            fontFamily:Q,
            fontSize:X,
            color:K
        };
        
        Z=R(w.inCanvasStyle);
        w.divlineStyle={
            fontFamily:Q,
            fontSize:X,
            color:K,
            lineHeight:Z
        };
        
        J.labels.style={
            fontFamily:C,
            fontSize:S,
            lineHeight:q,
            color:Y
        };
        
        j.yAxis[0].labels.style={
            fontFamily:C,
            fontSize:S,
            lineHeight:q,
            color:Y
        };
        
        j.yAxis[1].labels.style={
            fontFamily:C,
            fontSize:S,
            lineHeight:q,
            color:Y
        };
        
        j.legend.itemStyle={
            fontFamily:C,
            fontSize:S,
            lineHeight:q,
            color:Y
        };
        
        j.plotOptions.series.dataLabels.style=

        {
            fontFamily:Q,
            fontSize:X,
            lineHeight:Z,
            color:K
        };
        
        j.plotOptions.series.dataLabels.color=j.plotOptions.series.dataLabels.style.color;
        j.tooltip.style={
            fontFamily:Q,
            fontSize:X,
            lineHeight:Z,
            color:K
        };
        
        j.title.style={
            fontFamily:C,
            color:Y,
            fontSize:M+3+Ta,
            fontWeight:"bold"
        };
        
        R(j.title.style);
        j.subtitle.style={
            fontFamily:C,
            color:Y,
            fontSize:M+a(this.subTitleFontSizeExtender,1)+Ta,
            fontWeight:B(this.subTitleFontWeight,"bold")
            };
            
        R(j.subtitle.style);
        J.title.style={
            fontFamily:C,
            color:Y,
            fontSize:S,
            fontWeight:"bold"
        };
        
        Q=
        R(J.title.style);
        j.yAxis[0].title.style={
            fontFamily:C,
            color:Y,
            fontSize:S,
            lineHeight:Q,
            fontWeight:"bold"
        };
        
        j.yAxis[1].title.style={
            fontFamily:C,
            color:Y,
            fontSize:S,
            lineHeight:Q,
            fontWeight:"bold"
        };
        
        j.orphanStyles={
            defaultStyle:{
                style:$({},w.inCanvasStyle)
                }
            };
        
    this.parseStyles(j);
    delete j.xAxis.labels.style.backgroundColor;
    delete j.xAxis.labels.style.borderColor;
    delete j.yAxis[0].labels.style.backgroundColor;
    delete j.yAxis[0].labels.style.borderColor;
    delete j.yAxis[1].labels.style.backgroundColor;
    delete j.yAxis[1].labels.style.borderColor;
    w.showTooltip=a(n.showtooltip,this.showtooltip,1);
    w.tooltipSepChar=d(n.tooltipsepchar,yb);
    w.showValues=a(n.showvalues,this.showValues,1);
    w.seriesNameInToolTip=a(n.seriesnameintooltip,1);
    w.showVLineLabelBorder=a(n.showvlinelabelborder,1);
    w.rotateVLineLabels=a(n.rotatevlinelabels,0);
    w.vLineColor=d(n.vlinecolor,"333333");
    w.vLineThickness=d(n.vlinethickness,1);
    w.vLineAlpha=a(n.vlinealpha,80);
    w.vLineLabelBgColor=d(n.vlinelabelbgcolor,"ffffff");
    w.vLineLabelBgAlpha=a(n.vlinelabelbgalpha,o?50:100);
    w.trendlineColor=
    d(n.trendlinecolor,"333333");
    w.trendlineThickness=d(n.trendlinethickness,1);
    w.trendlineAlpha=a(n.trendlinealpha);
    w.showTrendlinesOnTop=d(n.showtrendlinesontop,0);
    w.trendlineValuesOnOpp=d(n.trendlinevaluesonopp,n.trendlinevaluesonright,0);
    w.trendlinesAreDashed=a(n.trendlinesaredashed,0);
    w.trendlinesDashLen=a(n.trendlinedashlen,5);
    w.trendlinesDashGap=a(n.trendlinedashgap,2);
    w.showTrendlines=d(n.showtrendlines,"1");
    w.showTrendlinesLabels=a(n.showtrendlinelabel,this.showTrendlineLabel,1);
    j.plotOptions.series.connectNullData=
    a(n.connectnulldata,0);
    G.backgroundColor={
        FCcolor:{
            color:d(n.bgcolor,e[P.bgColor][D]),
            alpha:d(n.bgalpha,e[P.bgAlpha][D]),
            angle:d(n.bgangle,e[P.bgAngle][D]),
            ratio:d(n.bgratio,e[P.bgRatio][D])
            }
        };
    
G.rotateValues=a(n.rotatevalues,0);
    G.placeValuesInside=a(n.placevaluesinside,0);
    G.valuePosition=d(n.valueposition,"auto");
    G.valuePadding=a(n.valuepadding,2);
    G.borderColor=ga(d(n.bordercolor,o?"#666666":e.borderColor[D]),d(n.borderalpha,o?"100":e.borderAlpha[D]));
    C=a(n.showborder,o?0:1);
    G.borderWidth=C?a(n.borderthickness,
    1):0;
G.plotBorderColor=ga(d(n.canvasbordercolor,e.canvasBorderColor[D]),d(n.canvasborderalpha,e.canvasBorderAlpha[D]));
    E=Boolean(d(n.canvasborderthickness,F?0:1));
    G.plotBorderWidth=o||!E?0:a(n.canvasborderthickness,this.canvasborderthickness,G.useRoundEdges?1:2);
    G.bgSWF=d(n.bgimage,n.bgswf);
    G.bgSWFAlpha=a(n.bgimagealpha,n.bgswfalpha,100);
    F=d(n.bgimagedisplaymode,"none").toLowerCase();
    C=B(n.bgimagevalign,p).toLowerCase();
    S=B(n.bgimagehalign,p).toLowerCase();
    F=="tile"||F=="fill"||F=="fit"?(C!=Ua&&C!=
    l&&C!=$a&&(C=l),S!=L&&S!=l&&S!=Oa&&(S=l)):(C!=Ua&&C!=l&&C!=$a&&(C=Ua),S!=L&&S!=l&&S!=Oa&&(S=L));
    G.bgImageDisplayMode=F;
    G.bgImageVAlign=C;
    G.bgImageHAlign=S;
    G.bgImageScale=a(n.bgimagescale,100);
    G.logoURL=B(n.logourl);
    G.logoPosition=d(n.logoposition,"tl").toLowerCase();
    G.logoAlpha=a(n.logoalpha,100);
    G.logoLink=B(n.logolink);
    G.logoScale=a(n.logoscale,100);
    G.logoLeftMargin=a(n.logoleftmargin,0);
    G.logoTopMargin=a(n.logotopmargin,0);
    X=d(n.divlinecolor,e[P.divLineColor][D]);
    Q=d(n.divlinealpha,o?e.divLineAlpha3D[D]:
    e.divLineAlpha[D]);
F=a(n.divlinethickness,1);
    C=Boolean(a(n.divlineisdashed,this.divLineIsDashed,0));
    S=a(n.divlinedashlen,4);
    Y=a(n.divlinedashgap,2);
    j.yAxis[0].gridLineColor=ga(X,Q);
    j.yAxis[0].gridLineWidth=F;
    j.yAxis[0].gridLineDashStyle=C?x(S,Y,F):void 0;
    j.yAxis[0].alternateGridColor=u?ga(d(n.alternatevgridcolor,e.altVGridColor[D]),a(n.showalternatevgridcolor,1)===1?d(n.alternatevgridalpha,e.altVGridAlpha[D]):Sa):ga(d(n.alternatehgridcolor,e.altHGridColor[D]),n.showalternatehgridcolor==0?0:d(n.alternatehgridalpha,
    e.altHGridAlpha[D]));
K=a(n.vdivlinethickness,1);
    M=Boolean(a(n.vdivlineisdashed,0));
    q=a(n.vdivlinedashlen,4);
    Z=a(n.vdivlinedashgap,2);
    J.gridLineColor=ga(d(n.vdivlinecolor,e[P.divLineColor][D]),d(n.vdivlinealpha,e.divLineAlpha[D]));
    J.gridLineWidth=K;
    J.gridLineDashStyle=M?x(q,Z,K):void 0;
    J.alternateGridColor=ga(d(n.alternatevgridcolor,e.altVGridColor[D]),n.showalternatehgridcolor==="1"?d(n.alternatevgridalpha,e.altVGridAlpha[D]):0);
    var K=d(n.canvasbgcolor,e[P.canvasBgColor][D]),aa,M=d(n.canvasbgalpha,
    e.canvasBgAlpha[D]);
d(n.showcanvasbg,pb)==Sa&&(M="0");
    j.plotOptions.series.shadow=a(n.showshadow,n.showcolumnshadow,this.defaultPlotShadow,e.showShadow[D]);
    if(this.inversed)j.yAxis[0].reversed=!0,j.yAxis[1].reversed=!0;
    if(this.isStacked)this.distributedColumns?(w.showStackTotal=Boolean(a(n.showsum,1)),q=a(n.usepercentdistribution,1),Z=a(n.showpercentvalues,0),aa=a(n.showpercentintooltip,1),w.showXAxisPercentValues=a(n.showxaxispercentvalues,1)):(w.showStackTotal=Boolean(a(this.showSum,n.showsum,0)),
    q=a(this.stack100percent,n.stack100percent,0),Z=a(n.showpercentvalues,q),aa=a(n.showpercentintooltip,Z)),w.showPercentValues=Z,w.showPercentInToolTip=aa,q?(w.isValueAbs=!0,O[s].stacking="percent",w[0].stacking100Percent=!0):O[s].stacking="normal";
    if(this.isDual){
    if(n.primaryaxisonleft==="0")j.yAxis[0].opposite=!0,j.yAxis[1].opposite=!1;
    j.yAxis[0].showAlways=!0;
    j.yAxis[1].showAlways=!0
    }
    if(G.useRoundEdges){
    j.plotOptions.series.shadow=a(n.showshadow,n.showcolumnshadow,1);
    j.plotOptions.series.borderRadius=
    1;
    j.tooltip.borderRadius=2;
    G.plotBorderRadius=3;
    if(!E)G.plotBorderWidth=0;
    G.plotShadow=j.plotOptions.series.shadow?{
        enabled:!0,
        opacity:M/100
        }:0
    }
    j.plotOptions.series.maxColWidth=Math.abs(a(u?n.maxbarheight:n.maxcolwidth,50))||1;
    j.title.text=t(n.caption);
    j.subtitle.text=t(n.subcaption);
    if(a(n.showtooltip,this.showtooltip)==0)j.tooltip.enabled=!1;
    s=j.tooltip.style;
    j.tooltip.backgroundColor=ga(d(s.backgroundColor,n.tooltipbgcolor,e.toolTipBgColor[D]),d(n.tooltipbgalpha,100));
    j.tooltip.borderColor=ga(d(s.borderColor,
    n.tooltipbordercolor,e.toolTipBorderColor[D]),d(n.tooltipborderalpha,100));
    s.backgroundColor=void 0;
    s.borderColor=void 0;
    s.border=void 0;
    j.tooltip.shadow=n.showtooltipshadow==pb?{
    enabled:!0,
    opacity:a(Ma(n.tooltipbgalpha,n.tooltipborderalpha),100)/100
    }:!1;
j.tooltip.borderWidth=a(n.tooltipborderthickness,1);
    if(n.tooltipborderradius)j.tooltip.borderRadius=a(n.tooltipborderradius,1);
    j.tooltip.style.padding=a(n.tooltippadding,this.tooltippadding,4);
    if(n.tooltipcolor)s.color=y(n.tooltipcolor);
    s=a(n.plotspacepercent,
    20);
if(s>80||s<0)s=20;
    w.plotSpacePercent=j.plotOptions.series.groupPadding=s/200;
    o&&!U?(G.series2D3Dshift=g==="mscombi3d"?!0:Boolean(a(n.use3dlineshift,0)),G.canvasBaseColor3D=d(n.canvasbasecolor,e.canvasBaseColor3D[D]),G.canvasBaseDepth=a(n.canvasbasedepth,10),G.canvasBgDepth=a(n.canvasbgdepth,3),G.showCanvasBg=Boolean(a(n.showcanvasbg,1)),G.showCanvasBase=Boolean(a(n.showcanvasbase,1)),u?(G.xDepth=5,G.yDepth=5,G.showCanvasBg&&(w.marginTopExtraSpace+=G.canvasBgDepth),w.marginLeftExtraSpace+=G.yDepth+
    (G.showCanvasBase?G.canvasBaseDepth:0),w.marginBottomExtraSpace+=5):(G.xDepth=10,G.yDepth=10,G.showCanvasBg&&(w.marginRightExtraSpace+=G.canvasBgDepth),w.marginBottomExtraSpace+=G.yDepth+(G.showCanvasBase?G.canvasBaseDepth:0)),K=K.split(oa)[0],M=M.split(oa)[0],G.use3DLighting=Boolean(a(n.use3dlighting,1)),G.plotBackgroundColor=G.use3DLighting?{
    FCcolor:{
        color:Wb(K,85)+oa+cb(K,55),
        alpha:M+oa+M,
        ratio:nb,
        angle:jb(f-(G.marginLeft+G.marginRight),h-(G.marginTop+G.marginBottom),1)
        }
    }:ga(K,M),G.canvasBgColor=
    ga(Wb(K,80),M),U=d(n.zeroplanecolor,n.divlinecolor,e[P.divLineColor][D]),u=d(n.zeroplanealpha,n.divlinealpha,e.divLineAlpha[D]),G.zeroPlaneColor=ga(U,u),G.zeroPlaneBorderColor=ga(d(n.zeroplanebordercolor,U),a(n.zeroplaneshowborder,1)?u:0)):(G.is3D=!1,G.plotBackgroundColor={
    FCcolor:{
        color:K,
        alpha:M,
        angle:d(n.canvasbgangle,e.canvasBgAngle[D]),
        ratio:d(n.canvasbgratio,e.canvasBgRatio[D])
        }
    });
this.parseExportOptions(j);
this.preSeriesAddition&&this.preSeriesAddition(j,c,f,h);
this.series(c,j,g,f,h);
this.postSeriesAddition(j,
    c,f,h);
this.spaceManager(j,c,f,h);
g=a(n.drawquadrant,0);
if(w.isXYPlot&&g&&(Z=J.min,E=J.max,O=j.yAxis[0].min,K=j.yAxis[0].max,aa=a(n.quadrantxval,(Z+E)/2),M=a(n.quadrantyval,(O+K)/2),M>=O&&M<=K&&aa>=Z&&aa<=E)){
    s=ga(d(n.quadrantlinecolor,G.plotBorderColor),d(n.quadrantlinealpha,db));
    q=a(n.quadrantlinethickness,G.plotBorderWidth);
    var da=a(n.quadrantlineisdashed,0),na=a(n.quadrantlinedashLen,4),ua=a(n.quadrantlinedashgap,2);
    u=B(n.quadrantlabeltl,p);
    g=B(n.quadrantlabeltr,p);
    c=B(n.quadrantlabelbl,p);
    U=
    B(n.quadrantlabelbr,p);
    P=a(n.quadrantlabelpadding,3);
    da=da?x(na,ua,q):void 0;
    J.plotLines.push({
        color:s,
        value:aa,
        width:q,
        dashStyle:da,
        zIndex:3
    });
    j.yAxis[0].plotLines.push({
        color:s,
        value:M,
        width:q,
        dashStyle:da,
        zIndex:3
    });
    q=f-G.marginRight-G.marginLeft;
    da=h-G.marginTop-G.marginBottom;
    s=w.inCanvasStyle;
    na=parseInt(s.fontSize,10);
    Z=q/(E-Z)*(aa-Z);
    E=q-Z;
    K=da/(K-O)*(M-O);
    O=da-K;
    Z-=P;
    E-=P;
    O-=P;
    K-=P;
    M=P+na+Ta;
    aa=da-P+na+Ta;
    da=P+Ta;
    P=q-P+Ta;
    v.setStyle(s);
    O>0&&(u!==p&&Z>0&&(u=v.getSmartText(u,Z,O),j.labels.items.push({
        html:u.text,
        zIndex:3,
        style:{
            left:da,
            top:M,
            fontSize:s.fontSize,
            lineHeight:s.lineHeight,
            fontFamily:s.fontFamily,
            color:s.color
            }
        })),g!==p&&E>0&&(u=v.getSmartText(g,E,O),j.labels.items.push({
        html:u.text,
        textAlign:Oa,
        zIndex:3,
        style:{
            left:P,
            top:M,
            fontSize:s.fontSize,
            lineHeight:s.lineHeight,
            fontFamily:s.fontFamily,
            color:s.color
            }
        })));
K>0&&(c!==p&&Z>0&&(u=v.getSmartText(c,Z,K),j.labels.items.push({
    html:u.text,
    vAlign:$a,
    zIndex:3,
    style:{
        left:da,
        top:aa,
        fontSize:s.fontSize,
        lineHeight:s.lineHeight,
        fontFamily:s.fontFamily,
        color:s.color
        }
    })),
U!==p&&E>0&&(u=v.getSmartText(U,E,K),j.labels.items.push({
    html:u.text,
    textAlign:Oa,
    vAlign:$a,
    zIndex:3,
    style:{
        left:P,
        top:aa,
        fontSize:s.fontSize,
        lineHeight:s.lineHeight,
        fontFamily:s.fontFamily,
        color:s.color
        }
    })))
}
if(this.hasVDivLine&&(g=a(n.numvdivlines,0)+1,g>1)){
    w=w.x.catCount-1;
    v=J.max;
    g=w/g;
    c=!0;
    U=J.min;
    var I,X=d(n.vdivlinecolor,X),Q=a(n.vdivlinealpha,Q),K=a(n.vdivlinethickness,F),M=a(n.vdivlineisdashed,C);
    q=a(n.vdivlinedashlen,S);
    Z=a(n.vdivlinedashgap,Y);
    (F=a(n.showalternatevgridcolor,0))&&(I=ga(d(n.alternatevgridcolor,
        e.altVGridColor[D]),d(n.alternateVGridAlpha,e.altVGridAlpha[D])));
    for(D=g;D<w;D+=g,c=!c)c&&F&&J.plotBands.push({
        color:I,
        from:U,
        to:D,
        zIndex:1
    }),J.plotLines.push({
        width:K,
        color:ga(X,Q),
        dashStyle:M?x(q,Z,K):void 0,
        value:D,
        zIndex:1
    }),U=D;
    c&&F&&J.plotBands.push({
        color:I,
        from:U,
        to:v,
        zIndex:1
    })
    }
    if(o&&G.xDepth>G.marginLeft)G.marginLeft=G.xDepth;
window.console&&window.console.log&&window.FC_DEV_ENVIRONMENT&&console.log(j);
return j
},
parseExportOptions:function(a){
    var h=this.dataObj.chart,e=a[z];
    a.exporting.enabled=
    !0;
    a.exporting.url=d(h.html5exporthandler,a.exporting.url);
    a.exporting.buttons.printButton.enabled=h.showprintmenuitem=="1";
    a.exporting.buttons.exportButton.enabled=h.exportenabled=="1"?h.exportshowmenuitem!="0":!1;
    a.exporting.filename=h.exportfilename?h.exportfilename:"FusionCharts";
    a.exporting.width=e.width
    },
defaultSeriesType:p,
paletteIndex:1,
creditLabel:!0,
placeTitle:ua,
placeLegendBottom:Mb,
placeLegendRight:Qb,
placeHorizontalAxis:mb,
placeVerticalAxis:na,
placeHorizontalCanvasMarginAdjustment:Db,
placeVerticalCanvasMarginAdjustment:Cb,
placeHorizontalXYSpaceManager:function(f,h,e,c){
    var j=f[z],g,l,p,q=h.chart,o,s,t,u,n=j.marginLeftExtraSpace,x=j.marginTopExtraSpace,w=j.marginBottomExtraSpace,y=j.marginRightExtraSpace;
    p=e-(n+y+f.chart.marginRight+f.chart.marginLeft);
    var F=c-(w+f.chart.marginBottom+f.chart.marginTop),B=p*0.3,e=F*0.3;
    g=p-B;
    c=F-e;
    o=d(q.legendposition,$a).toLowerCase();
    f.legend.enabled&&o===Oa&&(g-=Qb(f,h,g/2,F));
    s=a(q.xaxisnamepadding,5);
    t=a(q.labelpadding,2);
    u=q.rotatexaxisname!==
    Sa;
    l=j.x;
    l.verticalAxisNamePadding=s;
    l.verticalAxisValuesPadding=t;
    l.rotateVerticalAxisName=u;
    l.verticalAxisNameWidth=a(q.xaxisnamewidth);
    g-=na(f.xAxis,l,f,h,F,g,!1,!1,p);
    g-=Db(f,h,g,f.xAxis);
    p=g+B;
    f.legend.enabled&&o!==Oa&&(c-=Mb(f,h,p,c/2));
    c-=ua(f,h,p,c/2);
    l=j[0];
    l.horizontalAxisNamePadding=a(q.yaxisnamepadding,5);
    l.horizontalLabelPadding=a(q.yaxisvaluespadding,2);
    l.labelDisplay="auto";
    l.staggerLines=a(q.staggerlines,2);
    l.slantLabels=a(q.slantlabels,0);
    this.xAxisMinMaxSetter(f,h,p);
    c-=this.placeHorizontalAxis(f.yAxis[0],
        l,f,h,p,c,B);
    c-=Cb(f,h,c,f.yAxis[0]);
    Ba(e+c,f,q,f.xAxis,j.x.lYLblIdx,!0);
    Bb(f,f.xAxis.title,c);
    if(f.legend.enabled&&o===Oa){
        h=f.legend;
        j=e+c;
        if(h.height>j)h.height=j,h.scroll.enabled=!0,j=(h.scroll.scrollBarWidth=10)+(h.scroll.scrollBarPadding=2),h.width+=j,f.chart.marginRight+=j;
        h.y=20
        }
        h=(f.chart.marginLeft-a(f.chart.spacingLeft,0)-(f.chart.marginRight-a(f.chart.spacingRight,0)))/2;
    j=f.chart.marginLeft-a(f.chart.spacingLeft,0);
    q=-(f.chart.marginRight-a(f.chart.spacingRight,0));
    switch(f.title.align){
        case "left":
            f.title.x=
            j;
            break;
        case "right":
            f.title.x=q;
            break;
        default:
            f.title.x=h
            }
            switch(f.subtitle.align){
        case "left":
            f.subtitle.x=j;
            break;
        case "right":
            f.subtitle.x=q;
            break;
        default:
            f.subtitle.x=h
            }
            f.chart.marginLeft+=n;
    f.chart.marginTop+=x;
    f.chart.marginBottom+=w;
    f.chart.marginRight+=y
    },
placeVerticalXYSpaceManager:function(f,h,e,c){
    var j=f[z],g,l=!0,p=h.chart,q=!1,o,s,t,u=j.marginLeftExtraSpace,n=j.marginTopExtraSpace,x=j.marginBottomExtraSpace,w=j.marginRightExtraSpace,y=e-(u+w+f.chart.marginRight+f.chart.marginLeft),
    F=c-(x+f.chart.marginBottom+f.chart.marginTop),e=y*0.3,c=F*0.3,B=y-e,y=F-c,G=d(p.legendposition,$a).toLowerCase();
    f.legend.enabled&&G===Oa&&(B-=Qb(f,h,B/2,F));
    o=a(p.yaxisnamepadding,5);
    s=a(p.yaxisvaluespadding,2);
    t=p.rotateyaxisname!==Sa;
    if(j.isDual)q=!0,g=j[1],g.verticalAxisNamePadding=o,g.verticalAxisValuesPadding=s,g.rotateVerticalAxisName=t,g.verticalAxisNameWidth=a(p.syaxisnamewidth),l=f.yAxis[1].opposite,B-=na(f.yAxis[1],g,f,h,F,B/2,l,q);
    g=j[0];
    g.verticalAxisNamePadding=o;
    g.verticalAxisValuesPadding=
    s;
    g.rotateVerticalAxisName=t;
    g.verticalAxisNameWidth=a(q?p.pyaxisnamewidth:p.yaxisnamewidth);
    B-=na(f.yAxis[0],g,f,h,F,B,!l,q);
    B-=Db(f,h,B,f.yAxis[0],f.yAxis[1]);
    l=B+e;
    f.legend.enabled&&G!==Oa&&(y-=Mb(f,h,l,y/2));
    y-=ua(f,h,l,y/2);
    g=j.x;
    g.horizontalAxisNamePadding=a(p.xaxisnamepadding,5);
    g.horizontalLabelPadding=a(p.labelpadding,2);
    g.labelDisplay=d(p.labeldisplay,"auto").toLowerCase();
    g.rotateLabels=d(p.rotatelabels,"0")=="1";
    g.staggerLines=a(p.staggerlines,2);
    g.slantLabels=a(p.slantlabels,p.slantlabel,
        0);
    this.xAxisMinMaxSetter(f,h,l);
    y-=this.placeHorizontalAxis(f.xAxis,g,f,h,l,y,e);
    y-=Cb(f,h,y,f.xAxis);
    q&&(Ba(c+y,f,p,f.yAxis[1],j[1].lYLblIdx),Bb(f,f.yAxis[1].title,y));
    Ba(c+y,f,p,f.yAxis[0],j[0].lYLblIdx);
    Bb(f,f.yAxis[0].title,y);
    if(f.legend.enabled&&G===Oa){
        h=f.legend;
        j=c+y;
        if(h.height>j)h.height=j,h.scroll.enabled=!0,j=(h.scroll.scrollBarWidth=10)+(h.scroll.scrollBarPadding=2),h.width+=j,f.chart.marginRight+=j;
        h.y=20
        }
        h=(f.chart.marginLeft-a(f.chart.spacingLeft,0)-(f.chart.marginRight-a(f.chart.spacingRight,
        0)))/2;
    j=f.chart.marginLeft-a(f.chart.spacingLeft,0);
    p=-(f.chart.marginRight-a(f.chart.spacingRight,0));
    switch(f.title.align){
        case "left":
            f.title.x=j;
            break;
        case "right":
            f.title.x=p;
            break;
        default:
            f.title.x=h
            }
            switch(f.subtitle.align){
        case "left":
            f.subtitle.x=j;
            break;
        case "right":
            f.subtitle.x=p;
            break;
        default:
            f.subtitle.x=h
            }
            f.chart.marginLeft+=u;
    f.chart.marginTop+=n;
    f.chart.marginBottom+=x;
    f.chart.marginRight+=w
    },
placeVerticalAxisTitle:Bb,
spaceManager:function(){
    return this.placeVerticalXYSpaceManager.apply(this,
        arguments)
    },
xAxisMinMaxSetter:function(d,h,e){
    var c=d[z],j=c.x,g=h.chart,l=j.min=a(j.min,0),p=j.max=a(j.max,j.catCount-1),q,o=0,s=0,t=d.chart.defaultSeriesType,u=/^(column|column3d|bar|bar3d|floatedcolumn|sparkwinloss)$/.test(t);
    /^(line|area|spline|areaspline)$/.test(t);
    var t=/^(scatter|bubble|candlestick)$/.test(t),n=d.xAxis,x=n.scroll,w=q=Math.min(a(g.canvaspadding,0),e/2-10);
    if(j.adjustMinMax){
        var p=l=!a(g.setadaptivexmin,1),y=a(this.numVDivLines,g.numvdivlines,4),B=g.adjustvdiv!==Sa,C=a(g.showxaxisvalues,
            g.showxaxisvalue,1),G=a(g.showvlimits,C),C=a(g.showvdivlinevalue,g.showvdivlinevalues,C);
        Aa(n,j,g.xaxismaxvalue,g.xaxisminvalue,l,p,y,B);
        l=n.min;
        p=n.max;
        j.requaredAutoNumeicLabels&&(y=a(parseInt(g.xaxisvaluesstep,10),1),ob(g,d,n,j,G,C,y<1?1:y,c.numberFormatter,!1,!0));
        n.plotLines.sort(Zb)
        }
        n.labels.enabled=!1;
    n.gridLineWidth=0;
    n.alternateGridColor=bb;
    if((u||c.isScroll)&&!c.hasNoColumn)s=c.isBar?o=0.55:o=0.5;
    c.is3d&&(w+=a(d.chart.xDepth,0));
    d=(e-(w+q))/(p-l+(o+s));
    n.min=l-(o+w/d);
    n.max=p+(s+q/d);
    if(x&&
        x.enabled)o=x.vxLength,s=n.max-n.min,x.viewPortMin=n.min,x.viewPortMax=n.max,x.scrollRatio=o/s,n.max=n.min+o;
    t&&h.vtrendlines&&aa(h.vtrendlines,n,c,!1,!0,!0)
    },
postSeriesAddition:function(a){
    var d=a[z],e=d.isBar,c=d.is3d,j=a.chart.rotateValues&&!e?270:0;
    if(this.isStacked&&d.showStackTotal){
        var g,l,p,q=1-d.plotSpacePercent,o,s,t,u,n,x,w,y,B,C=$({},a.plotOptions.series.dataLabels.style),G=parseFloat(C.fontSize);
        l=d[0];
        var D=!l.stacking100Percent;
        C.color=a.plotOptions.series.dataLabels.color;
        p=l.stack;
        for(g in p){
            l=p[g].length;
            o=q/l;
            t=-(q-o)/2;
            for(s=0;s<l;s+=1,t+=o){
                w=p[g][s];
                x=0;
                for(n=w.length;x<n;x+=1)y=w[x],u=x,B=u+t,u=(y.n||0)+(y.p||0),y=u<0?y.n:y.p,a.xAxis.plotLines.push({
                    value:B,
                    width:0,
                    isVline:D,
                    isTrend:!D,
                    zIndex:4,
                    label:{
                        align:Y,
                        textAlign:!c&&j===270?u<0?Oa:L:e?u<0?Oa:L:Y,
                        offsetScale:D?y:void 0,
                        offsetScaleIndex:0,
                        rotation:j,
                        style:C,
                        verticalAlign:Ua,
                        y:e?0:u<0?j===270?4:G:-4,
                        x:0,
                        text:d.numberFormatter.yAxis(u)
                        }
                    })
                }
            }
        }
},
styleMapForFont:kb,
styleApplicationDefinition_font:function(a,d,e){
    var c,
    j=!1,g,l,p,q=this.styleMapForFont;
    switch(d){
        case "caption":
            d=a.title;
            break;
        case "datalabels":
            d=a.xAxis.labels;
            break;
        case "datavalues":
            d=a.plotOptions.series.dataLabels;
            j=!0;
            break;
        case "subcaption":
            d=a.subtitle;
            break;
        case "tooltip":
            d=a.tooltip;
            break;
        case "trendvalues":
            d={
            style:a[z].trendStyle
            };
            
        break;
        case "xaxisname":
            d=a.xAxis.title;
            break;
        case "yaxisname":
            d=[];
            g=0;
            for(l=a.yAxis.length;g<l;g+=1)d.push(a.yAxis[g].title);
            break;
        case "yaxisvalues":
            d=[];
            g=0;
            for(l=a.yAxis.length;g<l;g+=1)d.push(a.yAxis[g].labels);
            break;
        case "vlinelabels":
            d={
            style:a[z].divlineStyle
            };
            
        break;
        case "legend":
            d={
            style:a.legend.itemStyle
            };
            
        break;
        default:
            a.orphanStyles[d]=d={
            text:"",
            style:{}
        }
    }
    if(typeof d==="object")if(d instanceof Array){
    g=0;
    for(l=d.length;g<l;g+=1){
        p=d[g];
        for(c in e)if(a=c.toLowerCase(),typeof q[a]==="function")q[a](e[c],p,j);R(p.style)
        }
    }else{
    for(c in e)if(a=c.toLowerCase(),typeof q[a]==="function")q[a](e[c],d,j);R(d.style)
    }
},
parseStyles:function(a){
    var d,e,c,j={},g,l=this.dataObj;
    if(l.styles&&l.styles.definition instanceof
        Array&&l.styles.application instanceof Array){
        for(d=0;d<l.styles.definition.length;d+=1)e=l.styles.definition[d],e.type&&e.name&&this["styleApplicationDefinition_"+e.type.toLowerCase()]&&(j[e.name.toLowerCase()]=e);
        for(d=0;d<l.styles.application.length;d+=1){
            e=l.styles.application[d].styles&&l.styles.application[d].styles.split(oa)||[];
            for(g=0;g<e.length;g+=1)if(c=e[g].toLowerCase(),j[c]&&l.styles.application[d].toobject)this["styleApplicationDefinition_"+j[c].type.toLowerCase()](a,l.styles.application[d].toobject.toLowerCase(),
                j[c])
            }
            }
    },
dispose:function(){
    this.smartLabel&&this.smartLabel.dispose()
    }
});
C("stub",{
    standaloneInit:!0
    },C.base);
C("barbase",{
    spaceManager:function(){
        return this.placeHorizontalXYSpaceManager.apply(this,arguments)
        }
    },C.base);
C("singleseries",{
    series:function(a,d,e){
        var c=a.data||a.dataset&&a.dataset[0]&&a.dataset[0].data;
        if(c&&c.length>0)d.legend.enabled=!1,e=this.point(e,{
            data:[],
            colorByPoint:!0
            },c,a.chart,d),e instanceof Array?d.series=d.series.concat(e):d.series.push(e),this.configureAxis(d,a),a.trendlines&&
            aa(a.trendlines,d.yAxis,d[z],!1,this.isBar)
            },
    defaultSeriesType:p,
    configureAxis:function(d,h){
        var e=d[z],c=h.chart,j,g,l,p,q,o,s,u,x,n,w,y;
        p=this.numberFormatter;
        var B;
        d.xAxis.title.text=t(c.xaxisname);
        B=a(parseInt(c.yaxisvaluesstep,10),parseInt(c.yaxisvaluestep,10),1);
        B=B<1?1:B;
        j=d.yAxis[0];
        g=e[0];
        e.isDual?(l=p.getCleanValue(c.pyaxismaxvalue),p=p.getCleanValue(c.pyaxisminvalue),j.title.text=t(c.pyaxisname)):(l=p.getCleanValue(c.yaxismaxvalue),p=p.getCleanValue(c.yaxisminvalue),j.title.text=t(c.yaxisname));
        s=a(this.isStacked?0:this.setAdaptiveYMin,c.setadaptiveymin,0);
        o=q=!s;
        u=a(e.numdivlines,c.numdivlines,this.numdivlines,4);
        x=c.adjustdiv!==Sa;
        n=a(this.showYAxisValues,c.showyaxisvalues,c.showyaxisvalue,1);
        w=a(c.showlimits,n);
        y=a(c.showdivlinevalue,c.showdivlinevalues,n);
        Aa(j,g,l,p,q,o,u,x);
        ob(c,d,j,g,w,y,B,e.numberFormatter,!1);
        if(j.reversed&&j.min>=0)d.plotOptions.series.threshold=j.max;
        if(e.isDual)l=c.syaxismaxvalue,p=c.syaxisminvalue,s=a(c.setadaptivesymin,s),o=q=!s,w=a(c.showsecondarylimits,w),
            y=a(c.showdivlinesecondaryvalue,n),j=d.yAxis[1],g=e[1],Aa(j,g,l,p,q,o,u,x),ob(c,d,j,g,w,y,B,e.numberFormatter,!0),j.title.text=t(c.syaxisname)
            },
    pointValueWatcher:function(f,h,e,c,j,g,l){
        if(h!==null){
            f=f[z];
            e=a(e,0);
            f[e]||(f[e]={});
            e=f[e];
            if(c)this.distributedColumns&&(f.marimekkoTotal+=h),c=e.stack,j=a(j,0),g=a(g,0),l=d(l,Q),c[l]||(c[l]=[]),l=c[l],l[g]||(l[g]=[]),g=l[g],g[j]||(g[j]={}),j=g[j],h>=0?j.p?h=j.p+=h:j.p=h:j.n?h=j.n+=h:j.n=h;
            e.max=e.max>h?e.max:h;
            e.min=e.min<h?e.min:h
            }
        },
getPointStub:function(f,
    h,e,c){
    var c=c[z],h=h===null?h:c.numberFormatter.dataLabels(h),j=B(t(f.tooltext)),g=B(t(f.displayvalue)),e=c.showTooltip?j!==void 0?j:h===null?!1:e!==p?e+c.tooltipSepChar+h:h:p,c=a(f.showvalue,c.showValues)?g!==void 0?g:h:p,f=d(f.link);
    return{
        displayValue:c,
        toolText:e,
        link:f
    }
}
},C.base);
C("multiseries",{
    series:function(d,h,e){
        var c,j,g=h[z],l;
        h.legend.enabled=Boolean(a(d.chart.showlegend,1));
        if(d.dataset&&d.dataset.length>0){
            this.categoryAdder(d,h);
            c=0;
            for(j=d.dataset.length;c<j;c+=1)l={
                data:[]
            },l=
            this.point(e,l,d.dataset[c],d.chart,h,g.oriCatTmp.length,c),l instanceof Array?h.series=h.series.concat(l):h.series.push(l);
            this.configureAxis(h,d);
            d.trendlines&&!this.isLog&&aa(d.trendlines,h.yAxis,g,!1,this.isBar)
            }
        },
categoryAdder:function(d,h){
    var e,c=0,j=h[z],g=j.axisGridManager,l=d.chart,o=h.xAxis,q,j=j.x;
    if(d.categories&&d.categories[0]&&d.categories[0].category){
        if(d.categories[0].font)h.xAxis.labels.style.fontFamily=d.categories[0].font;
        if((e=a(d.categories[0].fontsize))!==void 0)e<1&&(e=1),
            h.xAxis.labels.style.fontSize=e+Ta,R(h.xAxis.labels.style);
        if(d.categories[0].fontcolor)h.xAxis.labels.style.color=d.categories[0].fontcolor.split(oa)[0].replace(/^\#?/,"#");
        var v=h[z].oriCatTmp,s=d.categories[0].category;
        for(e=0;e<s.length;e+=1)s[e].vline?g.addVline(o,s[e],c,h):(q=(q=a(s[e].showlabel,l.showlabels,1))?t(u(d.categories[0].category[e].label,d.categories[0].category[e].name)):p,g.addXaxisCat(o,c,c,q),v[c]=u(t(d.categories[0].category[e].tooltext),q),c+=1)
            }
            j.catCount=c
    },
getPointStub:function(f,
    e,g,c,j,l,o){
    var x,c=c[z],q,v,e=e===null?e:c.numberFormatter.dataLabels(e,o===1?!0:!1),s,w=B(t(f.tooltext)),o=c.tooltipSepChar;
    c.showTooltip?w!==void 0?j=w:e===null?j=!1:(c.seriesNameInToolTip&&(s=u(j&&j.seriesname)),j=s?s+o:p,j+=g?g+o:p,c.showPercentInToolTip?v=!0:j+=e):j=!1;
    a(f.showvalue,l)?B(f.displayvalue)!==void 0?x=f.displayvalue:c.showPercentValues?q=!0:x=e:x=p;
    f=d(f.link);
    return{
        displayValue:x,
        toolText:j,
        link:f,
        showPercentValues:q,
        showPercentInToolTip:v
    }
}
},C.singleseries);
var zb=function(a,
    d){
    return a-d
    };
    
C("xybase",{
    hideRLine:function(){
        var a=this.chart.series[this.index+1];
        a&&a.hide&&a.hide()
        },
    showRLine:function(){
        var a=this.chart.series[this.index+1];
        a&&a.show&&a.show()
        },
    getRegressionLineSeries:function(a,d,e){
        var c,j,g,l;
        l=a.sumXY;
        var p=a.sumX,q=a.sumY;
        j=a.xValues;
        g=a.sumXsqure;
        c=a.yValues;
        a=a.sumYsqure;
        d?(j.sort(zb),c=j[0],j=j[j.length-1],l=(e*l-p*q)/(e*g-Math.pow(p,2)),g=!isNaN(l)?l*(c-p/e)+q/e:q/e,e=!isNaN(l)?l*(j-p/e)+q/e:q/e,e=[{
            x:c,
            y:g
        },{
            x:j,
            y:e
        }]):(c.sort(zb),g=c[0],c=c[c.length-
            1],l=(e*l-p*q)/(e*a-Math.pow(q,2)),j=!isNaN(l)?l*(g-q/e)+p/e:p/e,e=!isNaN(l)?l*(c-q/e)+p/e:p/e,e=[{
                x:j,
                y:g
            },{
                x:e,
                y:c
            }]);
        return e
        },
    pointValueWatcher:function(a,d,e,c){
        var j=a[z];
        if(d!==null)a=j[0],a.max=a.max>d?a.max:d,a.min=a.min<d?a.min:d;
        if(e!==null)a=j.x,a.max=a.max>e?a.max:e,a.min=a.min<e?a.min:e;
        c&&(e=e||0,d=d||0,c.sumX+=e,c.sumY+=d,c.sumXY+=e*d,c.sumXsqure+=Math.pow(e,2),c.xValues.push(e),c.sumYsqure+=Math.pow(d,2),c.yValues.push(d))
        }
    },C.multiseries);
C("scrollbase",{
    postSeriesAddition:function(f,
        h){
        f.chart.hasScroll=!0;
        var g=f.xAxis.scroll,c=f[z],j=c.width,l=c.x.catCount,p=h.chart;
        c.isScroll=!0;
        if(this.isStacked)o=1;
        else{
            var o=0,q=0,t,s=f.series,u,x=f.chart.defaultSeriesType;
            for(t=s.length;q<t;q++)u=d(s[q].type,x),u==="column"&&(o+=1);
            o<1&&(o=1)
            }
            l*=o;
        j=a(p.numvisibleplot,Math.floor(j/this.avgScrollPointWidth));
        if(g&&j>=2&&j<l)g.enabled=!0,g.vxLength=j/o,g.startPercent=p.scrolltoend===pb?1:0,g.padding=a(p.scrollpadding,f.chart.plotBorderWidth/2),g.height=a(p.scrollheight,16),g.buttonWidth=
            a(p.scrollbtnwidth,p.scrollheight,16),g.buttonPadding=a(p.scrollbtnpadding,0),g.color=y(d(p.scrollcolor,e.altHGridColor[f.chart.paletteIndex])),c.marginBottomExtraSpace+=g.padding+g.height
            }
        },C.multiseries);
kb=C.singleseries;
mb=C.multiseries;
C("column2dbase",{
    point:function(f,h,g,c,j){
        var l,y,B,q,v,s,C,O,n,D,f=g.length;
        l=j[z];
        var E=l.axisGridManager,P=j.xAxis,F=j.chart.paletteIndex,J=l.x,G=j.colors,L=j.colors.length,Q=/3d$/.test(j.chart.defaultSeriesType),R=this.isBar,K=d(c.showplotborder,Q?Sa:pb)===
        pb?Q?1:a(c.plotborderthickness,1):0,M=j.chart.useRoundEdges,X=a(c.plotborderalpha,c.plotfillalpha,100),S=d(c.plotbordercolor,e.plotBorderColor[F]).split(oa)[0],Z=0,Y=Boolean(a(c.use3dlighting,1)),aa=j[z].numberFormatter,da=a(c.plotborderdashed,0),fa=a(c.plotborderdashlen,5),I=a(c.plotborderdashgap,4);
        for(B=y=0;y<f;y+=1)O=g[y],O.vline?E.addVline(P,O,Z,j):(l=aa.getCleanValue(O.value),q=a(O.showlabel,c.showlabels,1),q=t(!q?p:u(O.label,O.name)),E.addXaxisCat(P,Z,Z,q),Z+=1,v=d(O.color,G[B%L])+oa+w(c.plotgradientcolor,
            e.plotGradientColor[F]),s=d(O.alpha,c.plotfillalpha,db),C=d(O.ratio,c.plotfillratio),n=d(360-c.plotfillangle,90),l<0&&(n=360-n),D={
            opacity:s/100,
            inverted:R
        },v=o(v,s,C,n,M,S,d(O.alpha,X)+p,R,Q),s=a(O.dashed,da)?x(d(O.dashlen,fa),d(O.dashgap,I),K):void 0,h.data.push($(this.getPointStub(O,l,q,j),{
            y:l,
            shadow:D,
            color:v[0],
            borderColor:v[1],
            borderWidth:K,
            use3DLighting:Y,
            dashStyle:s
        })),this.pointValueWatcher(j,l),B+=1);
        J.catCount=Z;
        return h
        },
    defaultSeriesType:"column"
},kb);
C("linebase",{
    defaultSeriesType:"line",
    hasVDivLine:!0,
    defaultPlotShadow:1,
    point:function(f,h,g,c,j){
        var l,o,w,q,v,s,B,C,n,D,E,P,F,J,G,L,Q,R,K,M,S,Y,Z,aa,da,f=j.chart,fa=g.length,ga=j.xAxis;
        l=j[z];
        var I=l.axisGridManager,ba=0,oa=l.x,na=j.chart.paletteIndex,la=j[z].numberFormatter;
        G=y(d(c.linecolor,c.palettecolors,e.plotFillColor[na]));
        L=d(c.linealpha,db);
        P=a(c.linethickness,this.lineThickness,4);
        F=Boolean(a(c.linedashed,0));
        C=a(c.linedashlen,5);
        n=a(c.linedashgap,4);
        h.color={
            FCcolor:{
                color:G,
                alpha:L
            }
        };
        
    h.lineWidth=P;
    h.step=this.stepLine;
    h.drawVerticalJoins=Boolean(a(c.drawverticaljoins,1));
    h.kagi=this.isKagi;
    J=a(c.drawanchors,c.showanchors);
    for(v=o=0;o<fa;o+=1)q=g[o],q.vline?I.addVline(ga,q,ba,j):(l=la.getCleanValue(q.value),w=a(q.showlabel,c.showlabels,1),w=t(!w?p:u(q.label,q.name)),I.addXaxisCat(ga,ba,ba,w),ba+=1,D=y(d(q.color,G)),E=d(q.alpha,L),s=d(q.dashed,F)?x(C,n,P):void 0,B={
        opacity:E/100
        },R=a(q.anchorsides,c.anchorsides,0),da=a(q.anchorstartangle,c.anchorstartangle,0),S=a(q.anchorradius,c.anchorradius,this.anchorRadius,3),
        M=y(d(q.anchorbordercolor,c.anchorbordercolor,G)),K=a(q.anchorborderthickness,c.anchorborderthickness,this.anchorBorderThickness,1),Y=y(d(q.anchorbgcolor,c.anchorbgcolor,e.anchorBgColor[na])),Z=d(q.anchoralpha,c.anchoralpha,db),aa=d(q.anchorbgalpha,c.anchorbgalpha,Z),Q=J===void 0?E!=0:!!J,h.data.push($(this.getPointStub(q,l,w,j),{
            y:l,
            color:{
                FCcolor:{
                    color:D,
                    alpha:E
                }
            },
        shadow:B,
        dashStyle:s,
        valuePosition:d(q.valueposition,f.valuePosition),
            marker:{
            enabled:!!Q,
            fillColor:{
                FCcolor:{
                    color:Y,
                    alpha:aa*Z/100+
                    p
                    }
                },
        lineColor:{
            FCcolor:{
                color:M,
                alpha:Z
            }
        },
        lineWidth:K,
        radius:S,
        startAngle:da,
        symbol:X(R)
            }
        })),this.pointValueWatcher(j,l),v+=1);
oa.catCount=ba;
return h
}
},kb);
C("area2dbase",{
    defaultSeriesType:"area",
    hasVDivLine:!0,
    point:function(f,h,g,c,j){
        var l,o,C,q,v,s,D,O,n,E,J,P,F,L,G,Q,R,S,K,M,Y,aa,Z,f=j.chart,da=g.length,fa=j.xAxis;
        q=j[z];
        var ga=j.chart.paletteIndex,na=q.axisGridManager,I=q.x,ba=0,ua=j[z].numberFormatter;
        q=d(c.plotfillcolor,c.areabgcolor,B(c.palettecolors)?j.colors[0]:e.plotFillColor[ga]).split(oa)[0];
        aa=oa+w(c.plotgradientcolor,e.plotGradientColor[ga]);
        v=d(c.plotfillalpha,c.areaalpha,"90");
        s=a(c.plotfillangle,270);
        D=d(c.plotbordercolor,c.areabordercolor,B(c.palettecolors)?j.colors[0]:e.plotBorderColor[ga]).split(oa)[0];
        O=c.showplotborder==Sa?Sa:d(c.plotborderalpha,c.plotfillalpha,c.areaalpha,db);
        l=a(c.plotborderangle,270);
        o=Boolean(a(c.plotborderdashed,0));
        F=a(c.plotborderdashlen,5);
        R=a(c.plotborderdashgap,4);
        S=a(c.plotborderthickness,c.areaborderthickness,1);
        Z=h.fillColor={
            FCcolor:{
                color:q+aa,
                alpha:v,
                ratio:nb,
                angle:s
            }
        };
        
    h.lineWidth=S;
    h.dashStyle=o?x(F,R,S):void 0;
    h.lineColor={
        FCcolor:{
            color:D,
            alpha:O,
            ratio:db,
            angle:l
        }
    };
    
R=Boolean(a(c.drawanchors,c.showanchors,1));
    for(S=o=0;o<da;o+=1)F=g[o],F.vline?na.addVline(fa,F,ba,j):(l=ua.getCleanValue(F.value),C=a(F.showlabel,c.showlabels,1),C=t(!C?p:u(F.label,F.name)),na.addXaxisCat(fa,ba,ba,C),ba+=1,n=a(F.anchorsides,c.anchorsides,0),P=a(F.anchorstartangle,c.anchorstartangle,0),E=a(F.anchorradius,c.anchorradius,3),J=y(d(F.anchorbordercolor,c.anchorbordercolor,
    D)),K=a(F.anchorborderthickness,c.anchorborderthickness,1),L=y(d(F.anchorbgcolor,c.anchorbgcolor,e.anchorBgColor[ga])),G=d(F.anchoralpha,c.anchoralpha,this.anchorAlpha,Sa),Q=d(F.anchorbgalpha,c.anchorbgalpha,G),M=B(F.color),Y=a(F.alpha),M=M!==void 0||Y!==void 0?{
    FCcolor:{
        color:M?y(M)+aa:q,
        alpha:void 0===Y?Qa(Y)+p:v,
        ratio:nb,
        angle:s
    }
}:Z,Y={
    opacity:Math.max(Y,O)/100,
    inverted:!0
    },h.data.push($(this.getPointStub(F,l,C,j),{
    y:l,
    shadow:Y,
    color:M,
    valuePosition:d(F.valueposition,f.valuePosition),
    marker:{
        enabled:R,
        fillColor:{
            FCcolor:{
                color:L,
                alpha:Q*G/100+p
                }
            },
    lineColor:{
        FCcolor:{
            color:J,
            alpha:G
        }
    },
lineWidth:K,
radius:E,
symbol:X(n),
    startAngle:P
    }
})),this.pointValueWatcher(j,l),S+=1);
I.catCount=ba;
return h
}
},kb);
C("mscolumn2dbase",{
    point:function(f,h,g,c,j,l,t,u){
        f=!1;
        if(g.data){
            var q,v,s,y,C,n,D,E,P,F,J,G,L,Q,R,K,M=g.data,S=j[z],X=d(h.type,this.defaultSeriesType),Z=j.plotOptions[X]&&j.plotOptions[X].stacking,Y=d(this.isValueAbs,S.isValueAbs,!1),aa=a(g.showvalues,S.showValues),da=a(h.yAxis,0),fa=a(c.use3dlighting,
                1),I=j[z].numberFormatter,ba=j.chart.paletteIndex,ga=a(g.dashed,c.plotborderdashed,0),na=a(g.dashlen,c.plotborderdashlen,5),la=a(g.dashgap,c.plotborderdashgap,4);
            h.name=B(g.seriesname);
            if(a(g.includeinlegend)===0||h.name===void 0)h.showInLegend=!1;
            h.color=d(g.color,j.colors[t%j.colors.length]).split(oa)[0].replace(/^#?/g,"#");
            E=d(c.plotborderthickness,pb);
            P=j.chart.useRoundEdges;
            F=this.isBar;
            J=/3d$/.test(j.chart.defaultSeriesType);
            G=d(c.plotbordercolor,e.plotBorderColor[ba]).split(oa)[0];
            L=c.showplotborder==
            Sa?Sa:d(c.plotborderalpha,db);
            L=J?c.showplotborder?L:Sa:L;
            G=J?d(c.plotbordercolor,"#FFFFFF"):G;
            for(v=0;v<l;v+=1)(C=M[v])?(q=I.getCleanValue(C.value,Y),q===null?h.data.push({
                y:null
            }):(f=!0,Q=S.oriCatTmp[v],s=d(C.color,g.color,j.colors[t%j.colors.length])+oa+w(c.plotgradientcolor,e.plotGradientColor[ba]),y=d(C.alpha,g.alpha,c.plotfillalpha,db),n=d(C.ratio,g.ratio,c.plotfillratio),D=d(360-c.plotfillangle,90),q<0&&(D=360-D),R={
                opacity:y/100
                },K=Math.min(y,L)+p,s=o(s,y,n,D,P,G,K,F,J),y=a(C.dashed,ga)?x(d(C.dashlen,
                na),d(C.dashgap,la),E):void 0,h.data.push($(this.getPointStub(C,q,Q,j,g,aa,da),{
                y:q,
                shadow:R,
                color:s[0],
                borderColor:s[1],
                borderWidth:E,
                use3DLighting:fa,
                dashStyle:y
            })),this.pointValueWatcher(j,q,da,Z,v,u,X))):h.data.push({
                y:null
            })
            }
            if(!f)h.showInLegend=!1;
        return h
        },
    defaultSeriesType:"column"
},mb);
C("mslinebase",{
    hasVDivLine:!0,
    point:function(f,h,g,c,j,l,o){
        f=!1;
        if(g.data){
            var t,q,v,s,u,w,n,C,D,E,F,J,G,L,Q,R,K,M,S,Y,Z,aa,da,fa,ga,I,ba,oa,na;
            t=j.chart;
            var la,ua=g.data,Aa=j[z],Ba=d(h.type,this.defaultSeriesType),
            W=j.plotOptions[Ba]&&j.plotOptions[Ba].stacking,ha=d(this.isValueAbs,Aa.isValueAbs,!1),T=a(g.showvalues,Aa.showValues),ma=a(h.yAxis,0),Ca=this.numberFormatter;
            h.name=B(g.seriesname);
            ba=y(d(g.color,c.linecolor,j.colors[o%j.colors.length]));
            I=d(g.alpha,c.linealpha,db);
            o=a(g.linethickness,c.linethickness,2);
            u=Boolean(a(g.dashed,c.linedashed,0));
            w=a(g.linedashlen,c.linedashlen,5);
            n=a(g.linedashgap,c.linedashgap,4);
            h.color={
                FCcolor:{
                    color:ba,
                    alpha:I
                }
            };
            
        h.step=this.stepLine;
        h.drawVerticalJoins=Boolean(a(c.drawverticaljoins,
            1));
        h.lineWidth=o;
        C=a(g.drawanchors,g.showanchors,c.drawanchors,c.showanchors);
        Y=a(g.anchorsides,c.anchorsides,0);
        Q=a(g.anchorstartangle,c.anchorstartangle,0);
        Z=a(g.anchorradius,c.anchorradius,3);
        aa=y(d(g.anchorbordercolor,c.anchorbordercolor,ba));
        da=a(g.anchorborderthickness,c.anchorborderthickness,1);
        fa=y(d(g.anchorbgcolor,c.anchorbgcolor,e.anchorBgColor[j.chart.paletteIndex]));
        ga=d(g.anchoralpha,c.anchoralpha,db);
        c=d(g.anchorbgalpha,c.anchorbgalpha,ga);
        if(a(g.includeinlegend)===0||h.name===void 0||
            I==0&&C!==1)h.showInLegend=!1;
        la=d(g.valueposition,t.valuePosition);
        h.marker={
            fillColor:{
                FCcolor:{
                    color:fa,
                    alpha:c*ga/100+p
                    }
                },
        lineColor:{
            FCcolor:{
                color:aa,
                alpha:ga+p
                }
            },
    lineWidth:da,
    radius:Z,
    symbol:X(Y),
    startAngle:Q
};

for(q=0;q<l;q+=1)(M=ua[q])?(t=Ca.getCleanValue(M.value,ha),t===null?h.data.push({
    y:null
}):(f=!0,R=a(M.anchorsides,Y),L=a(M.anchorradius,Z),J=y(d(M.anchorbordercolor,aa)),G=a(M.anchorborderthickness,da),F=y(d(M.anchorbgcolor,fa)),D=d(M.anchoralpha,ga),E=d(M.anchorbgalpha,c),v=y(d(M.color,
    ba)),s=d(M.alpha,I),na=a(M.dashed,u)?x(w,n,o):void 0,S={
    opacity:s/100
    },oa=C===void 0?s!=0:!!C,K=Aa.oriCatTmp[q],h.data.push($(this.getPointStub(M,t,K,j,g,T,ma),{
    y:t,
    shadow:S,
    dashStyle:na,
    color:{
        FCcolor:{
            color:v,
            alpha:s
        }
    },
valuePosition:d(M.valueposition,la),
    marker:{
    enabled:oa,
    fillColor:{
        FCcolor:{
            color:F,
            alpha:E*D/100+p
            }
        },
lineColor:{
    FCcolor:{
        color:J,
        alpha:D
    }
},
lineWidth:G,
radius:L,
symbol:X(R),
    startAngle:d(M.anchorstartangle,Q)
    }
})),this.pointValueWatcher(j,t,ma,W,q,0,Ba))):h.data.push({
    y:null
})
}
if(!f)h.showInLegend=
    !1;
return h
},
defaultSeriesType:"line",
defaultPlotShadow:1
},mb);
C("msareabase",{
    hasVDivLine:!0,
    point:function(f,h,g,c,j,l,o){
        f=!1;
        if(g.data){
            var t,q,v,s,u,B,n,C,D,E,F,J,G,L,Q,R,K,M,S,Y,Z,aa,da,ga,fa;
            Z=j.chart;
            var I=g.data,ba=j[z],na=d(h.type,this.defaultSeriesType),ua=j.plotOptions[na]&&j.plotOptions[na].stacking,la=d(this.isValueAbs,ba.isValueAbs,!1),Aa=this.linkClickFN;
            Y=j.chart.paletteIndex;
            var Ba=a(g.showvalues,ba.showValues),Ca=a(h.yAxis,0),W=j[z].numberFormatter;
            h.name=d(g.seriesname,p);
            if(a(g.includeinlegend)===
                0||h.name===void 0)h.showInLegend=!1;
            s=d(g.color,j.colors[o%j.colors.length]).split(oa)[0].replace(/^#?/g,"#").split(oa)[0];
            this.isRadar||(s+=oa+w(c.plotgradientcolor,e.plotGradientColor[Y]));
            u=d(g.alpha,c.plotfillalpha,c.areaalpha,this.isRadar?"50":"70");
            B=a(c.plotfillangle,270);
            n=d(g.plotbordercolor,c.plotbordercolor,c.areabordercolor,this.isRadar?j.colors[o%j.colors.length]:e.plotFillColor[j.chart.paletteIndex]).split(oa)[0];
            o=d(g.showplotborder,c.showplotborder)==Sa?Sa:d(g.plotborderalpha,c.plotborderalpha,
                g.plotfillalpha,c.plotfillalpha,"95");
            C=a(c.plotborderangle,270);
            R=Boolean(a(g.dashed,c.plotborderdashed,0));
            K=a(g.dashlen,c.plotborderdashlen,5);
            M=a(g.dashgap,c.plotborderdashgap,4);
            S=d(g.plotborderthickness,c.plotborderthickness,1);
            h.fillColor={
                FCcolor:{
                    color:s,
                    alpha:u,
                    ratio:nb,
                    angle:B
                }
            };
            
        B=d(g.valueposition,Z.valuePosition);
        h.color=s;
        h.lineColor={
            FCcolor:{
                color:n,
                alpha:o,
                ratio:db,
                angle:C
            }
        };
        
    h.lineWidth=S;
    h.dashStyle=R?x(K,M,S):void 0;
    C=Boolean(a(c.drawanchors,c.showanchors,1));
    R=a(g.anchorsides,
        c.anchorsides,0);
    n=a(g.anchorstartangle,c.anchorstartangle,0);
    K=a(g.anchorradius,c.anchorradius,3);
    M=y(d(g.anchorbordercolor,c.anchorbordercolor,s));
    S=a(g.anchorborderthickness,c.anchorborderthickness,1);
    Y=y(d(g.anchorbgcolor,c.anchorbgcolor,e.anchorBgColor[Y]));
    Z=a(g.anchoralpha,c.anchoralpha,this.anchorAlpha,0);
    aa=a(g.anchorbgalpha,c.anchorbgalpha,Z);
    h.marker={
        fillColor:{
            FCcolor:{
                color:Y,
                alpha:aa*Z/100+p
                }
            },
    lineColor:{
        FCcolor:{
            color:M,
            alpha:Z+p
            }
        },
lineWidth:S,
radius:K,
symbol:X(R),
    startAngle:n
};

for(t=
    0;t<l;t+=1)(v=I[t])?(c=v?W.getCleanValue(v.value,la):null,c===null?h.data.push({
    y:null
}):(f=!0,q=ba.oriCatTmp[t],D=a(v.anchorsides,R),E=a(v.anchorradius,K),F=y(d(v.anchorbordercolor,M)),J=a(v.anchorborderthickness,S),G=y(d(v.anchorbgcolor,Y)),L=d(v.anchoralpha,Z),Q=d(v.anchorbgalpha,aa),da=d(v.color,s),ga=d(v.alpha,u),fa={
    opacity:Math.max(ga,o)/100,
    inverted:!0
    },h.data.push($(this.getPointStub(v,c,q,j,g,Ba,Ca),{
    y:c,
    shadow:fa,
    color:{
        FCcolor:{
            color:da,
            alpha:ga
        }
    },
valuePosition:d(v.valueposition,B),
    marker:{
    enabled:C,
    fillColor:{
        FCcolor:{
            color:G,
            alpha:Q*L/100+p
            }
        },
lineColor:{
    FCcolor:{
        color:F,
        alpha:L+p
        }
    },
lineWidth:J,
radius:E,
symbol:X(D),
    startAngle:d(v.anchorstartangle,n)
    },
events:{
    click:Aa
}
})),this.pointValueWatcher(j,c,Ca,ua,t,0,na))):h.data.push({
    y:null
})
}
if(!f)h.showInLegend=!1;
return h
},
defaultSeriesType:"area",
defaultPlotShadow:0
},mb);
C("scatterbase",{
    showValues:0,
    defaultPlotShadow:0,
    point:function(f,h,g,c,j,l,o){
        if(g.data){
            var t,q,u,s,w,D,n,E,J,L,F,Q,G,R,S,Y,K,M=!1,$,aa,f=C[f];
            u=a(g.drawline,0);
            s=a(g.drawprogressioncurve,
                0);
            var l=g.data,Z=l.length,da=a(g.showvalues,j[z].showValues),fa=this.numberFormatter,na=a(g.showregressionline,c.showregressionline,0);
            h.zIndex=1;
            h.name=B(g.seriesname);
            if(a(g.includeinlegend)===0||h.name===void 0)h.showInLegend=!1;
            if(u||s){
                if(s)h.type="spline";
                q=y(d(g.color,c.linecolor,j.colors[o%j.colors.length]));
                u=d(g.alpha,c.linealpha,db);
                s=a(g.linethickness,c.linethickness,2);
                w=Boolean(a(g.dashed,c.linedashed,0));
                D=a(g.linedashlen,c.linedashlen,5);
                n=a(g.linedashgap,c.linedashgap,4);
                h.color=

                {
                    FCcolor:{
                        color:q,
                        alpha:u
                    }
                };
                
            h.lineWidth=s;
            h.dashStyle=w?x(D,n,s):void 0
            }
            u=Boolean(a(g.drawanchors,g.showanchors,c.drawanchors,c.showanchors,1));
        s=a(g.anchorsides,c.anchorsides,o+3);
        w=a(g.anchorradius,c.anchorradius,3);
        o=y(d(g.anchorbordercolor,g.color,c.anchorbordercolor,q,j.colors[o%j.colors.length]));
        q=a(g.anchorborderthickness,c.anchorborderthickness,1);
        D=y(d(g.anchorbgcolor,c.anchorbgcolor,e.anchorBgColor[j.chart.paletteIndex]));
        n=d(g.anchoralpha,c.anchoralpha,db);
        J=d(g.anchorbgalpha,c.anchorbgalpha,
            n);
        $=d(g.anchorstartangle,c.anchorstartangle);
        h.marker={
            fillColor:this.getPointColor(D,db),
            lineColor:{
                FCcolor:{
                    color:o,
                    alpha:n+p
                    }
                },
        lineWidth:q,
        radius:w,
        symbol:X(s)
        };
        
    if(na){
        h.events={
            hide:this.hideRLine,
            show:this.showRLine
            };
            
        var oa={
            sumX:0,
            sumY:0,
            sumXY:0,
            sumXsqure:0,
            sumYsqure:0,
            xValues:[],
            yValues:[]
        },I=a(g.showyonx,c.showyonx,1),ba=y(d(g.regressionlinecolor,c.regressionlinecolor,o)),ua=a(g.regressionlinethickness,c.regressionlinethickness,q),c=Qa(a(g.regressionlinealpha,c.regressionlinealpha,n)),ba=
        ga(ba,c)
        }
        for(t=0;t<Z;t+=1)(E=l[t])?(c=fa.getCleanValue(E.y),K=fa.getCleanValue(E.x),c===null?h.data.push({
        y:null,
        x:K
    }):(M=!0,aa=f.getPointStub(E,c,fa.xAxis(K),j,g,da),L=a(E.anchorsides,s),F=a(E.anchorradius,w),Q=y(d(E.anchorbordercolor,o)),G=a(E.anchorborderthickness,q),R=y(d(E.anchorbgcolor,D)),S=d(E.anchoralpha,n),Y=d(E.anchorbgalpha,J),h.data.push({
        y:c,
        x:K,
        displayValue:aa.displayValue,
        toolText:aa.toolText,
        link:aa.link,
        marker:{
            enabled:u,
            fillColor:{
                FCcolor:{
                    color:R,
                    alpha:Y*S/100+p
                    }
                },
        lineColor:{
            FCcolor:{
                color:Q,
                alpha:S
            }
        },
    lineWidth:G,
    radius:F,
    symbol:X(L),
        startAngle:d(E.anchorstartangle,$)
        }
    }),this.pointValueWatcher(j,c,K,na&&oa))):h.data.push({
    y:null
});
na&&(g=this.getRegressionLineSeries(oa,I,Z),this.pointValueWatcher(j,g[0].y,g[0].x),this.pointValueWatcher(j,g[1].y,g[1].x),j={
    type:"line",
    color:ba,
    showInLegend:!1,
    lineWidth:ua,
    enableMouseTracking:!1,
    marker:{
        enabled:!1
        },
    data:g,
    zIndex:0
},h=[h,j])
}
if(!M)h.showInLegend=!1;
return h
},
categoryAdder:function(f,h){
    var g,c=0,j,l=h[z].x,o,w=h.xAxis,q,v;
    v=f.chart;
    var s=
    parseInt(v.labelstep,10),y=a(v.showlabels,1),B=d(v.xaxislabelmode,"categories").toLowerCase(),n=h[z].numberFormatter;
    h._FCconf.isXYPlot=!0;
    s=s>1?s:1;
    l.catOccupied={};
    
    if(B!=="auto"&&f.categories&&f.categories[0]&&f.categories[0].category){
        v=f.categories[0];
        if(v.font)h.xAxis.labels.style.fontFamily=v.font;
        if((j=a(v.fontsize))!==void 0)j<1&&(j=1),h.xAxis.labels.style.fontSize=j+Ta,R(h.xAxis.labels.style);
        if(v.fontcolor)h.xAxis.labels.style.color=v.fontcolor.split(oa)[0].replace(/^\#?/,"#");
        g=d(v.verticallinecolor,
            e.divLineColor[h.chart.paletteIndex]);
        j=a(v.verticallinethickness,1);
        o=a(v.verticallinealpha,e.divLineAlpha[h.chart.paletteIndex]);
        var C=a(v.verticallinedashed,0),D=a(v.verticallinedashlen,4),E=a(v.verticallinedashgap,2),F=ga(g,o),J,G,L;
        for(g=0;g<v.category.length;g+=1)q=v.category[g],o=n.getCleanValue(q.x),o!==null&&!q.vline&&(l.catOccupied[o]=!0,L=a(q.showlabel,q.showname,y),J=a(q.showverticalline,q.showline,q.sl,0),G=a(q.linedashed,C),q=L===0||c%s!==0?p:t(u(q.label,q.name)),w.plotLines.push({
            isGrid:!0,
            isCat:!0,
            width:J?j:0,
            color:F,
            dashStyle:x(D,E,j,G),
            value:o,
            label:{
                text:q,
                style:w.labels.style,
                align:Y,
                verticalAlign:$a,
                textAlign:Y,
                rotation:0,
                x:0,
                y:0
            }
        }),this.pointValueWatcher(h,null,o),c+=1);
    if(B==="mixed")l.requaredAutoNumeicLabels=a(this.requaredAutoNumeicLabels,1)
        }else l.requaredAutoNumeicLabels=a(this.requaredAutoNumeicLabels,1);
l.adjustMinMax=!0
},
getPointColor:function(a,d){
    var e,c,a=y(a),d=Qa(d);
    e=cb(a,70);
    c=Wb(a,50);
    return{
        FCcolor:{
            gradientUnits:"objectBoundingBox",
            cx:0.4,
            cy:0.4,
            r:"100%",
            color:e+
            oa+c,
            alpha:d+oa+d,
            ratio:nb,
            radialGradient:!0
            }
        }
},
defaultSeriesType:"scatter"
},C.xybase)
}
})();
