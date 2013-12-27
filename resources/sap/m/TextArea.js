/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.TextArea");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.InputBase");sap.m.InputBase.extend("sap.m.TextArea",{metadata:{library:"sap.m",properties:{"rows":{type:"int",group:"Appearance",defaultValue:2},"cols":{type:"int",group:"Appearance",defaultValue:20},"height":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"maxLength":{type:"int",group:"Behavior",defaultValue:0},"wrapping":{type:"sap.ui.core.Wrapping",group:"Behavior",defaultValue:null}},events:{"liveChange":{}}}});sap.m.TextArea.M_EVENTS={'liveChange':'liveChange'};sap.m.TextArea.prototype._showLabelAsPlaceholder=(function(){return!("placeholder"in document.createElement("textarea"))}());
sap.m.TextArea.prototype.init=function(){sap.m.InputBase.prototype.init.call(this);this._inputProxy=jQuery.proxy(this._onInput,this)};
sap.m.TextArea.prototype.onAfterRendering=function(){sap.m.InputBase.prototype.onAfterRendering.call(this);this._bindToInputEvent(this._inputProxy);if(jQuery.support.touch){if(this._behaviour.INSIDE_SCROLLABLE_WITHOUT_FOCUS){this._oIScroll=null;this._$input.on("touchstart",jQuery.proxy(this._onTouchStart,this));this._$input.on("touchmove",jQuery.proxy(this._onTouchMove,this))}else if(this._behaviour.PAGE_NON_SCROLLABLE_AFTER_FOCUS){this._$input.on("touchmove",function(e){if(jQuery(this).is(":focus")){e.stopPropagation()}})}}};
sap.m.TextArea.prototype.setRows=function(r){this.setProperty("rows",r,true);if(this.getDomRef()){this._$input.attr("rows",r)}return this};
sap.m.TextArea.prototype.setCols=function(c){this.setProperty("cols",c,true);if(this.getDomRef()){this._$input.attr("cols",c)}return this};
sap.m.TextArea.prototype.setHeight=function(h){this.setProperty("height",h,true);if(this.getDomRef()){this._$input.height(h)}return this};
sap.m.TextArea.prototype._onInput=function(e){var v=this._$input.val();if(this.getMaxLength()>0&&v.length>this.getMaxLength()){v=v.substring(0,this.getMaxLength());this._$input.val(v)}if(v!=this.getValue("value")){this.setProperty("value",v,true);this._curpos=this._$input.cursorPos();this._setLabelVisibility();this.fireLiveChange({newValue:v})}};
sap.m.TextArea.prototype._behaviour=(function(){return{INSIDE_SCROLLABLE_WITHOUT_FOCUS:jQuery.os.ios||jQuery.os.blackberry||jQuery.browser.chrome,PAGE_NON_SCROLLABLE_AFTER_FOCUS:jQuery.os.android&&parseFloat(jQuery.os.version)>=4.1}}());
sap.m.TextArea.prototype._onTouchStart=function(e){if(this._oIScroll===null){this._oIScroll=sap.m.getIScroll(this)}this._startY=e.touches[0].pageY;this._iDirection=0};
sap.m.TextArea.prototype._onTouchMove=function(e){var t=this._$input[0],p=e.touches[0].pageY,i=t.scrollTop<=0,a=t.scrollTop+t.clientHeight>=t.scrollHeight,b=this._startY>p,c=this._startY<p;this._startY=p;if((i&&c)||(a&&b)){var d=(c)?-1:1;if(!(this._iDirection==d)&&this._oIScroll){this._oIScroll.pointY=p;this._iDirection=d}e.preventDefault();return}e.stopPropagation()};
if(jQuery.os.ios){sap.m.TextArea.prototype.onfocusin=function(){if(!this._oIScroll||!this._oIScroll.options.useTransform){return}this._oIScroll.scroller.style.webkitTransform='';this._oIScroll.wrapper.scrollTop=-this._oIScroll.y;this._oIScroll.options.useTransform=false;this._lastOffset={x:this._oIScroll.x,y:this._oIScroll.y}};sap.m.TextArea.prototype.onfocusout=function(){if(!this._oIScroll||!this._lastOffset){return}this._oIScroll.wrapper.scrollTop=0;this._oIScroll.options.useTransform=true;this._oIScroll.scrollTo(this._lastOffset.x,this._lastOffset.y)}}
