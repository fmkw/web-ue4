!function(t){function e(){this._settings=[],this._extensions=[],this.regional=[],this.regional[""]={errorLoadingText:"Error loading"},this.local=this.regional[""],this._uuid=(new Date).getTime(),this._ie=!!window.ActiveXObject}function n(e,n){this._svg=e,this._container=n;for(var i=0;i<t.svg._extensions.length;i++){var r=t.svg._extensions[i];this[r[0]]=new r[1](this)}}function i(){this._path=""}function r(){this._parts=[]}t.extend(e.prototype,{markerClassName:"hasSVG",propertyName:"svgwrapper",svgNS:"http://www.w3.org/2000/svg",xlinkNS:"http://www.w3.org/1999/xlink",_wrapperClass:n,_attrNames:{class_:"class",in_:"in",alignmentBaseline:"alignment-baseline",baselineShift:"baseline-shift",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",vertAdvY:"vert-adv-y",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode"},_attachSVG:function(e,n){var i=e.namespaceURI===this.svgNS?e:null;if(!t((e=i?null:e)||i).hasClass(this.markerClassName)){"string"==typeof n?n={loadURL:n}:"function"==typeof n&&(n={onLoad:n}),t(e||i).addClass(this.markerClassName);try{i||((i=document.createElementNS(this.svgNS,"svg")).setAttribute("version","1.1"),e.clientWidth>0&&i.setAttribute("width",e.clientWidth),e.clientHeight>0&&i.setAttribute("height",e.clientHeight),e.appendChild(i)),this._afterLoad(e,i,n||{})}catch(n){t(e).html("<p>SVG is not supported natively on this browser</p>")}}},_afterLoad:function(e,n,i){var i=i||this._settings[e.id];this._settings[e?e.id:""]=null;var r=new this._wrapperClass(n,e);t.data(e||n,t.svg.propertyName,r);try{i.loadURL&&r.load(i.loadURL,i),i.settings&&r.configure(i.settings),i.onLoad&&!i.loadURL&&i.onLoad.apply(e||n,[r])}catch(t){alert(t)}},_getSVG:function(e){return t(e).data(this.propertyName)},_destroySVG:function(e){(e=t(e)).hasClass(this.markerClassName)&&(e.removeClass(this.markerClassName).removeData(this.propertyName),e[0].namespaceURI!==this.svgNS&&e.empty())},addExtension:function(t,e){this._extensions.push([t,e])},isSVGElem:function(e){return 1===e.nodeType&&e.namespaceURI===t.svg.svgNS}}),t.extend(n.prototype,{width:function(){return this._container?this._container.clientWidth:this._svg.width},height:function(){return this._container?this._container.clientHeight:this._svg.height},root:function(){return this._svg},configure:function(e,n,i){if(e.nodeName||(i=n,n=e,e=this._svg),i)for(var r=e.attributes.length-1;r>=0;r--){var s=e.attributes.item(r);"onload"!==s.nodeName&&"version"!==s.nodeName&&"xmlns"!==s.nodeName.substring(0,5)&&e.attributes.removeNamedItem(s.nodeName)}for(var o in n)e.setAttribute(t.svg._attrNames[o]||o,n[o]);return this},getElementById:function(t){return this._svg.ownerDocument.getElementById(t)},change:function(e,n){if(e)for(var i in n)null==n[i]?e.removeAttribute(t.svg._attrNames[i]||i):e.setAttribute(t.svg._attrNames[i]||i,n[i]);return this},_args:function(e,n,i){n.splice(0,0,"parent"),n.splice(n.length,0,"settings");var r={},s=0;null!=e[0]&&e[0].jquery&&(e[0]=e[0][0]),null==e[0]||"object"==typeof e[0]&&e[0].nodeName||(r.parent=null,s=1);for(var o=0;o<e.length;o++)r[n[o+s]]=e[o];return i&&t.each(i,function(t,e){"object"==typeof r[e]&&(r.settings=r[e],r[e]=null)}),r},title:function(t,e,n){var i=this._args(arguments,["text"]),r=this._makeNode(i.parent,"title",i.settings||{});return r.appendChild(this._svg.ownerDocument.createTextNode(i.text)),r},describe:function(t,e,n){var i=this._args(arguments,["text"]),r=this._makeNode(i.parent,"desc",i.settings||{});return r.appendChild(this._svg.ownerDocument.createTextNode(i.text)),r},defs:function(e,n,i){var r=this._args(arguments,["id"],["id"]);return this._makeNode(r.parent,"defs",t.extend(r.id?{id:r.id}:{},r.settings||{}))},symbol:function(e,n,i,r,s,o,a){var h=this._args(arguments,["id","x1","y1","width","height"]);return this._makeNode(h.parent,"symbol",t.extend({id:h.id,viewBox:h.x1+" "+h.y1+" "+h.width+" "+h.height},h.settings||{}))},marker:function(e,n,i,r,s,o,a,h){var d=this._args(arguments,["id","refX","refY","mWidth","mHeight","orient"],["orient"]);return this._makeNode(d.parent,"marker",t.extend({id:d.id,refX:d.refX,refY:d.refY,markerWidth:d.mWidth,markerHeight:d.mHeight,orient:d.orient||"auto"},d.settings||{}))},style:function(e,n,i){var r=this._args(arguments,["styles"]),s=this._makeNode(r.parent,"style",t.extend({type:"text/css"},r.settings||{}));return s.appendChild(this._svg.ownerDocument.createTextNode(r.styles)),s},script:function(e,n,i,r){var s=this._args(arguments,["script","type"],["type"]),o=this._makeNode(s.parent,"script",t.extend({type:s.type||"text/javascript"},s.settings||{}));return o.appendChild(this._svg.ownerDocument.createTextNode(s.script)),t.svg._ie&&t.globalEval(s.script),o},linearGradient:function(e,n,i,r,s,o,a,h){var d=this._args(arguments,["id","stops","x1","y1","x2","y2"],["x1"]),l=t.extend({id:d.id},null!=d.x1?{x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2}:{});return this._gradient(d.parent,"linearGradient",t.extend(l,d.settings||{}),d.stops)},radialGradient:function(e,n,i,r,s,o,a,h,d){var l=this._args(arguments,["id","stops","cx","cy","r","fx","fy"],["cx"]),c=t.extend({id:l.id},null!=l.cx?{cx:l.cx,cy:l.cy,r:l.r,fx:l.fx,fy:l.fy}:{});return this._gradient(l.parent,"radialGradient",t.extend(c,l.settings||{}),l.stops)},_gradient:function(e,n,i,r){for(var s=this._makeNode(e,n,i),o=0;o<r.length;o++){var a=r[o];this._makeNode(s,"stop",t.extend({offset:a[0],stopColor:a[1]},null!=a[2]?{stopOpacity:a[2]}:{}))}return s},pattern:function(e,n,i,r,s,o,a,h,d,l,c){var u=this._args(arguments,["id","x","y","width","height","vx","vy","vwidth","vheight"],["vx"]),p=t.extend({id:u.id,x:u.x,y:u.y,width:u.width,height:u.height},null!=u.vx?{viewBox:u.vx+" "+u.vy+" "+u.vwidth+" "+u.vheight}:{});return this._makeNode(u.parent,"pattern",t.extend(p,u.settings||{}))},clipPath:function(e,n,i,r){var s=this._args(arguments,["id","units"]);return s.units=s.units||"userSpaceOnUse",this._makeNode(s.parent,"clipPath",t.extend({id:s.id,clipPathUnits:s.units},s.settings||{}))},mask:function(e,n,i,r,s,o,a){var h=this._args(arguments,["id","x","y","width","height"]);return this._makeNode(h.parent,"mask",t.extend({id:h.id,x:h.x,y:h.y,width:h.width,height:h.height},h.settings||{}))},createPath:function(){return new i},createText:function(){return new r},svg:function(e,n,i,r,s,o,a,h,d,l){var c=this._args(arguments,["x","y","width","height","vx","vy","vwidth","vheight"],["vx"]),u=t.extend({x:c.x,y:c.y,width:c.width,height:c.height},null!=c.vx?{viewBox:c.vx+" "+c.vy+" "+c.vwidth+" "+c.vheight}:{});return this._makeNode(c.parent,"svg",t.extend(u,c.settings||{}))},group:function(e,n,i){var r=this._args(arguments,["id"],["id"]);return this._makeNode(r.parent,"g",t.extend({id:r.id},r.settings||{}))},use:function(e,n,i,r,s,o,a){var h=this._args(arguments,["x","y","width","height","ref"]);"string"==typeof h.x&&(h.ref=h.x,h.settings=h.y,h.x=h.y=h.width=h.height=null);var d=this._makeNode(h.parent,"use",t.extend({x:h.x,y:h.y,width:h.width,height:h.height},h.settings||{}));return d.setAttributeNS(t.svg.xlinkNS,"href",h.ref),d},link:function(e,n,i){var r=this._args(arguments,["ref"]),s=this._makeNode(r.parent,"a",r.settings);return s.setAttributeNS(t.svg.xlinkNS,"href",r.ref),s},image:function(e,n,i,r,s,o,a){var h=this._args(arguments,["x","y","width","height","ref"]),d=this._makeNode(h.parent,"image",t.extend({x:h.x,y:h.y,width:h.width,height:h.height},h.settings||{}));return d.setAttributeNS(t.svg.xlinkNS,"href",h.ref),d},path:function(e,n,i){var r=this._args(arguments,["path"]);return this._makeNode(r.parent,"path",t.extend({d:r.path.path?r.path.path():r.path},r.settings||{}))},rect:function(e,n,i,r,s,o,a,h){var d=this._args(arguments,["x","y","width","height","rx","ry"],["rx"]);return this._makeNode(d.parent,"rect",t.extend({x:d.x,y:d.y,width:d.width,height:d.height},d.rx?{rx:d.rx,ry:d.ry}:{},d.settings||{}))},circle:function(e,n,i,r,s){var o=this._args(arguments,["cx","cy","r"]);return this._makeNode(o.parent,"circle",t.extend({cx:o.cx,cy:o.cy,r:o.r},o.settings||{}))},ellipse:function(e,n,i,r,s,o){var a=this._args(arguments,["cx","cy","rx","ry"]);return this._makeNode(a.parent,"ellipse",t.extend({cx:a.cx,cy:a.cy,rx:a.rx,ry:a.ry},a.settings||{}))},line:function(e,n,i,r,s,o){var a=this._args(arguments,["x1","y1","x2","y2"]);return this._makeNode(a.parent,"line",t.extend({x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},a.settings||{}))},polyline:function(t,e,n){var i=this._args(arguments,["points"]);return this._poly(i.parent,"polyline",i.points,i.settings)},polygon:function(t,e,n){var i=this._args(arguments,["points"]);return this._poly(i.parent,"polygon",i.points,i.settings)},_poly:function(e,n,i,r){for(var s="",o=0;o<i.length;o++)s+=i[o].join()+" ";return this._makeNode(e,n,t.extend({points:t.trim(s)},r||{}))},text:function(e,n,i,r,s){var o=this._args(arguments,["x","y","value"]);return"string"==typeof o.x&&arguments.length<4&&(o.value=o.x,o.settings=o.y,o.x=o.y=null),this._text(o.parent,"text",o.value,t.extend({x:o.x&&t.isArray(o.x)?o.x.join(" "):o.x,y:o.y&&t.isArray(o.y)?o.y.join(" "):o.y},o.settings||{}))},textpath:function(e,n,i,r){var s=this._args(arguments,["path","value"]),o=this._text(s.parent,"textPath",s.value,s.settings||{});return o.setAttributeNS(t.svg.xlinkNS,"href",s.path),o},_text:function(e,n,i,r){var s=this._makeNode(e,n,r);if("string"==typeof i)s.appendChild(s.ownerDocument.createTextNode(i));else for(var o=0;o<i._parts.length;o++){var a=i._parts[o];if("tspan"===a[0])(d=this._makeNode(s,a[0],a[2])).appendChild(s.ownerDocument.createTextNode(a[1])),s.appendChild(d);else if("tref"===a[0])(d=this._makeNode(s,a[0],a[2])).setAttributeNS(t.svg.xlinkNS,"href",a[1]),s.appendChild(d);else if("textpath"===a[0]){var h=t.extend({},a[2]);h.href=null;var d=this._makeNode(s,a[0],h);d.setAttributeNS(t.svg.xlinkNS,"href",a[2].href),d.appendChild(s.ownerDocument.createTextNode(a[1])),s.appendChild(d)}else s.appendChild(s.ownerDocument.createTextNode(a[1]))}return s},other:function(t,e,n){var i=this._args(arguments,["name"]);return this._makeNode(i.parent,i.name,i.settings||{})},_makeNode:function(e,n,i){e=e||this._svg;var r=this._svg.ownerDocument.createElementNS(t.svg.svgNS,n);for(var n in i){var s=i[n];null==s||"string"==typeof s&&""===s||r.setAttribute(t.svg._attrNames[n]||n,s)}return e.appendChild(r),r},add:function(e,n){var i=this._args(1===arguments.length?[null,e]:arguments,["node"]),r=this;i.parent=i.parent||this._svg,i.node=i.node.jquery?i.node:t(i.node);try{i.parent.appendChild(i.node.cloneNode(!0))}catch(t){i.node.each(function(){var t=r._cloneAsSVG(this);t&&i.parent.appendChild(t)})}return this},clone:function(e,n){var i=this,r=this._args(1===arguments.length?[null,e]:arguments,["node"]);r.parent=r.parent||this._svg,r.node=r.node.jquery?r.node:t(r.node);var s=[];return r.node.each(function(){var t=i._cloneAsSVG(this);t&&(t.id="",r.parent.appendChild(t),s.push(t))}),s},_cloneAsSVG:function(e){var n=null;if(1===e.nodeType){n=this._svg.ownerDocument.createElementNS(t.svg.svgNS,this._checkName(e.nodeName));for(r=0;r<e.attributes.length;r++){var i=e.attributes.item(r);"xmlns"!==i.nodeName&&i.nodeValue&&("xlink"===i.prefix?n.setAttributeNS(t.svg.xlinkNS,i.localName||i.baseName,i.nodeValue):n.setAttribute(this._checkName(i.nodeName),i.nodeValue))}for(var r=0;r<e.childNodes.length;r++){var s=this._cloneAsSVG(e.childNodes[r]);s&&n.appendChild(s)}}else if(3===e.nodeType)t.trim(e.nodeValue)&&(n=this._svg.ownerDocument.createTextNode(e.nodeValue));else if(4===e.nodeType&&t.trim(e.nodeValue))try{n=this._svg.ownerDocument.createCDATASection(e.nodeValue)}catch(t){n=this._svg.ownerDocument.createTextNode(e.nodeValue.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))}return n},_checkName:function(t){return t=t.substring(0,1)>="A"&&t.substring(0,1)<="Z"?t.toLowerCase():t,"svg:"===t.substring(0,4)?t.substring(4):t},load:function(e,n){(n="boolean"==typeof n?{addTo:n}:"function"==typeof n?{onLoad:n}:"string"==typeof n?{parent:n}:"object"==typeof n&&n.nodeName?{parent:n}:"object"==typeof n&&n.jquery?{parent:n}:n||{}).parent||n.addTo||this.clear(!1);var i=[this._svg.getAttribute("width"),this._svg.getAttribute("height")],r=this,s=function(e){e=t.svg.local.errorLoadingText+": "+e,n.onLoad?n.onLoad.apply(r._container||r._svg,[r,e]):r.text(null,10,20,e)},o=function(o){if(o){if("svg"!==o.documentElement.nodeName){var a=o.getElementsByTagName("parsererror"),h=a.length?a[0].getElementsByTagName("div"):[];return void s(a.length?(h.length?h[0]:a[0]).firstChild.nodeValue:"???")}for(var d=n.parent?t(n.parent)[0]:r._svg,l={},c=0;c<o.documentElement.attributes.length;c++){var u=o.documentElement.attributes.item(c);"version"!==u.nodeName&&"xmlns"!==u.nodeName.substring(0,5)&&(l[u.nodeName]=u.nodeValue)}r.configure(d,l,!n.parent);for(var p=o.documentElement.childNodes,c=0;c<p.length;c++)try{d.appendChild(r._svg.ownerDocument.importNode(p[c],!0)),"script"===p[c].nodeName&&t.globalEval(p[c].textContent)}catch(t){r.add(d,p[c])}if(!n.keepRelativeLinks&&e.match("/")){var g=e.replace(/\/[^\/]*$/,"/");t("*",d).each(function(){var e=t(this).attr("xlink:href");e&&!e.match(/(^[a-z][-a-z0-9+.]*:.*$)|(^\/.*$)|(^#.*$)/i)&&t(this).attr("xlink:href",g+e)})}n.changeSize||r.configure(d,{width:i[0],height:i[1]}),n.onLoad&&n.onLoad.apply(r._container||r._svg,[r])}};if(e.match("<svg"))try{o((new DOMParser).parseFromString(e,"text/xml"))}catch(t){s(t)}else t.ajax({url:e,dataType:"xml",success:function(t){o(t)},error:function(t,e,n){s(e+(n?" "+n.message:""))}});return this},remove:function(t){return(t=t.jquery?t[0]:t).parentNode.removeChild(t),this},clear:function(t){for(t&&this.configure({},!0);this._svg.firstChild;)this._svg.removeChild(this._svg.firstChild);return this},toSVG:function(t){return t=t||this._svg,"undefined"==typeof XMLSerializer?this._toSVG(t):(new XMLSerializer).serializeToString(t)},_toSVG:function(e){var n="";if(!e)return n;if(3===e.nodeType)n=e.nodeValue;else if(4===e.nodeType)n="<![CDATA["+e.nodeValue+"]]>";else{if(n="<"+e.nodeName,e.attributes)for(var i=0;i<e.attributes.length;i++){var r=e.attributes.item(i);""===t.trim(r.nodeValue)||r.nodeValue.match(/^\[object/)||r.nodeValue.match(/^function/)||(n+=" "+(r.namespaceURI===t.svg.xlinkNS?"xlink:":"")+r.nodeName+'="'+r.nodeValue+'"')}if(e.firstChild){n+=">";for(var s=e.firstChild;s;)n+=this._toSVG(s),s=s.nextSibling;n+="</"+e.nodeName+">"}else n+="/>"}return n}}),t.extend(i.prototype,{reset:function(){return this._path="",this},move:function(e,n,i){return i=t.isArray(e)?n:i,this._coords(i?"m":"M",e,n)},line:function(e,n,i){return i=t.isArray(e)?n:i,this._coords(i?"l":"L",e,n)},horiz:function(e,n){return this._path+=(n?"h":"H")+(t.isArray(e)?e.join(" "):e),this},vert:function(e,n){return this._path+=(n?"v":"V")+(t.isArray(e)?e.join(" "):e),this},curveC:function(e,n,i,r,s,o,a){return a=t.isArray(e)?n:a,this._coords(a?"c":"C",e,n,i,r,s,o)},smoothC:function(e,n,i,r,s){return s=t.isArray(e)?n:s,this._coords(s?"s":"S",e,n,i,r)},curveQ:function(e,n,i,r,s){return s=t.isArray(e)?n:s,this._coords(s?"q":"Q",e,n,i,r)},smoothQ:function(e,n,i){return i=t.isArray(e)?n:i,this._coords(i?"t":"T",e,n)},_coords:function(e,n,i,r,s,o,a){if(t.isArray(n))for(var h=0;h<n.length;h++){var d=n[h];this._path+=(0===h?e:" ")+d[0]+","+d[1]+(d.length<4?"":" "+d[2]+","+d[3]+(d.length<6?"":" "+d[4]+","+d[5]))}else this._path+=e+n+","+i+(null==r?"":" "+r+","+s+(null==o?"":" "+o+","+a));return this},arc:function(e,n,i,r,s,o,a,h){if(h=t.isArray(e)?n:h,this._path+=h?"a":"A",t.isArray(e))for(var d=0;d<e.length;d++){var l=e[d];this._path+=(0===d?"":" ")+l[0]+","+l[1]+" "+l[2]+" "+(l[3]?"1":"0")+","+(l[4]?"1":"0")+" "+l[5]+","+l[6]}else this._path+=e+","+n+" "+i+" "+(r?"1":"0")+","+(s?"1":"0")+" "+o+","+a;return this},close:function(){return this._path+="z",this},path:function(){return this._path}}),i.prototype.moveTo=i.prototype.move,i.prototype.lineTo=i.prototype.line,i.prototype.horizTo=i.prototype.horiz,i.prototype.vertTo=i.prototype.vert,i.prototype.curveCTo=i.prototype.curveC,i.prototype.smoothCTo=i.prototype.smoothC,i.prototype.curveQTo=i.prototype.curveQ,i.prototype.smoothQTo=i.prototype.smoothQ,i.prototype.arcTo=i.prototype.arc,t.extend(r.prototype,{reset:function(){return this._parts=[],this},string:function(t){return this._parts.push(["text",t]),this},span:function(t,e){return this._parts.push(["tspan",t,e]),this},ref:function(t,e){return this._parts.push(["tref",t,e]),this},path:function(e,n,i){return this._parts.push(["textpath",n,t.extend({href:e},i||{})]),this}}),t.fn.svg=function(e){var n=Array.prototype.slice.call(arguments,1);return"string"==typeof e&&"get"===e?t.svg["_"+e+"SVG"].apply(t.svg,[this[0]].concat(n)):this.each(function(){"string"==typeof e?t.svg["_"+e+"SVG"].apply(t.svg,[this].concat(n)):t.svg._attachSVG(this,e||{})})},t.svg=new e}(jQuery);