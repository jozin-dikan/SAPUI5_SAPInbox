/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.FocusHandler");jQuery.sap.require("sap.ui.base.Object");jQuery.sap.require("sap.ui.Global");jQuery.sap.require("jquery.sap.script");(function(){sap.ui.base.Object.extend("sap.ui.core.FocusHandler",{constructor:function(r,c){sap.ui.base.Object.apply(this);this.oCore=c;this.oCurrent=null;this.oLast=null;this.aEventQueue=[];this.fEventHandler=jQuery.proxy(this.onEvent,this);this.fDestroyHandler=jQuery.proxy(this.destroy,this);if(r.addEventListener&&!!!sap.ui.Device.browser.internet_explorer){r.addEventListener("focus",this.fEventHandler,true);r.addEventListener("blur",this.fEventHandler,true)}else{jQuery(r).bind("activate",this.fEventHandler);jQuery(r).bind("deactivate",this.fEventHandler)}jQuery.sap.log.debug("FocusHandler setup on Root "+r.type+(r.id?": "+r.id:""),null,"sap.ui.core.FocusHandler");jQuery(window).bind("unload",{"oRootRef":r},this.fDestroyHandler)}});sap.ui.core.FocusHandler.prototype.getCurrentFocusedControlId=function(){return this.oCurrent};sap.ui.core.FocusHandler.prototype.destroy=function(e){var r=e.data.oRootRef;if(r){if(r.removeEventListener&&!!!sap.ui.Device.browser.internet_explorer){r.removeEventListener("focus",this.fEventHandler,true);r.removeEventListener("blur",this.fEventHandler,true)}else{jQuery(r).unbind("activate",this.fEventHandler);jQuery(r).unbind("deactivate",this.fEventHandler)}}jQuery(window).unbind("unload",this.fDestroyHandler);this.oCore=null};sap.ui.core.FocusHandler.prototype.onEvent=function(b){var e=jQuery.event.fix(b);jQuery.sap.log.debug("Event "+e.type+" reached Focus Handler (target: "+e.target+(e.target?e.target.id:"")+")",null,"sap.ui.core.FocusHandler");var a=(e.type=="focus"||e.type=="focusin"||e.type=="activate")?"focus":"blur";this.aEventQueue.push({type:a,controlId:g(e.target)});if(this.aEventQueue.length==1){this.processEvent()}};sap.ui.core.FocusHandler.prototype.processEvent=function(){var e=this.aEventQueue[0];if(!e){return}if(e.type=="focus"){this.onfocusEvent(e.controlId)}else if(e.type=="blur"){this.onblurEvent(e.controlId)}this.aEventQueue.shift();if(this.aEventQueue.length>0){this.processEvent()}};sap.ui.core.FocusHandler.prototype.onfocusEvent=function(c){this.oCurrent=c;if(!this.oLast){return}t(this.oLast,c,this.oCore);this.oLast=null};sap.ui.core.FocusHandler.prototype.onblurEvent=function(c){if(!this.oCurrent){return}this.oLast=c;this.oCurrent=null;jQuery.sap.delayedCall(0,this,"checkForLostFocus")};sap.ui.core.FocusHandler.prototype.checkForLostFocus=function(){if(this.oCurrent==null&&this.oLast!=null){t(this.oLast,null,this.oCore)}this.oLast=null};var g=function(d){var i=jQuery(d).closest("[data-sap-ui]").attr("id");if(i){return i}return null};var t=function(c,r,C){var o=c?sap.ui.getCore().byId(c):null;if(o){var R=r?sap.ui.getCore().byId(r):null;var e=jQuery.Event("sapfocusleave");e.target=o.getDomRef();e.relatedControlId=R?R.getId():null;e.relatedControlFocusInfo=R?R.getFocusInfo():null;var a=o.getUIArea();var u=null;if(a){u=C.getUIArea(a.getId())}else{var p=sap.ui.getCore().getStaticAreaRef();if(jQuery.sap.containsOrEquals(p,e.target)){u=C.getUIArea(p.id)}}if(u){u._handleEvent(e)}}}}());
