/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.unified.SplitContainer");jQuery.sap.require("sap.ui.unified.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.unified.SplitContainer",{metadata:{library:"sap.ui.unified",properties:{"showSecondaryContent":{type:"boolean",group:"Appearance",defaultValue:null},"secondaryContentWidth":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:'250px'}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"},"secondaryContent":{type:"sap.ui.core.Control",multiple:true,singularName:"secondaryContent"}}}});(function(w,u){jQuery.sap.require("sap.ui.core.theming.Parameters");sap.ui.unified.SplitContainer.prototype.init=function(){this.bRtl=sap.ui.getCore().getConfiguration().getRTL();this._paneRenderer=new sap.ui.unified._ContentRenderer(this,this.getId()+"-panecntnt","secondaryContent");this._canvasRenderer=new sap.ui.unified._ContentRenderer(this,this.getId()+"-canvascntnt","content");this._moveContent=true};sap.ui.unified.SplitContainer.prototype.exit=function(){this._paneRenderer.destroy();delete this._paneRenderer;this._canvasRenderer.destroy();delete this._canvasRenderer;delete this._contentContainer;delete this._secondaryContentContainer};sap.ui.unified.SplitContainer.prototype.onAfterRendering=function(){this._contentContainer=jQuery.sap.byId(this.getId()+"-canvas");this._secondaryContentContainer=jQuery.sap.byId(this.getId()+"-pane");this._applySecondaryContentSize()};sap.ui.unified.SplitContainer.prototype._applySecondaryContentSize=function(){if(this.getDomRef()){var d=this.bRtl?"right":"left";var s=this.getSecondaryContentWidth();var S=this.getShowSecondaryContent();if(this._closeContentDelayId){jQuery.sap.clearDelayedCall(this._closeContentDelayId)}this._secondaryContentContainer.css("width",s);this._secondaryContentContainer.css(d,S?"0":"-"+s);if(this._moveContent){this._contentContainer.css(d,S?s:"0")}else{this._contentContainer.css(d,"0")}if(!S){var h=parseInt(sap.ui.core.theming.Parameters.get("sapUiUfdSplitContAnimationDuration"),10);this._closeContentDelayId=jQuery.sap.delayedCall(h,this,function(){this._secondaryContentContainer.toggleClass("sapUiUfdSplitContSecondClosed",true)})}else{this._secondaryContentContainer.toggleClass("sapUiUfdSplitContSecondClosed",false)}}};sap.ui.unified.SplitContainer.prototype._mod=function(m,d){var r=!!this.getDomRef();var a=m.apply(this,[r]);if(r&&d){d.render()}return a};sap.ui.unified.SplitContainer.prototype.setShowSecondaryContent=function(s){var r=this.getDomRef();this.setProperty("showSecondaryContent",!!s,r);this._applySecondaryContentSize();return this};sap.ui.unified.SplitContainer.prototype.setSecondaryContentWidth=function(s){this.setProperty("secondaryContentWidth",s,true);this._applySecondaryContentSize();return this};sap.ui.unified.SplitContainer.prototype.insertContent=function(c,i){return this._mod(function(r){return this.insertAggregation("content",c,i,r)},this._canvasRenderer)};sap.ui.unified.SplitContainer.prototype.addContent=function(c){return this._mod(function(r){return this.addAggregation("content",c,r)},this._canvasRenderer)};sap.ui.unified.SplitContainer.prototype.removeContent=function(i){return this._mod(function(r){return this.removeAggregation("content",i,r)},this._canvasRenderer)};sap.ui.unified.SplitContainer.prototype.removeAllContent=function(){return this._mod(function(r){return this.removeAllAggregation("content",r)},this._canvasRenderer)};sap.ui.unified.SplitContainer.prototype.destroyContent=function(){return this._mod(function(r){return this.destroyAggregation("content",r)},this._canvasRenderer)};sap.ui.unified.SplitContainer.prototype.insertSecondaryContent=function(c,i){return this._mod(function(r){return this.insertAggregation("secondaryContent",c,i,r)},this._paneRenderer)};sap.ui.unified.SplitContainer.prototype.addSecondaryContent=function(c){return this._mod(function(r){return this.addAggregation("secondaryContent",c,r)},this._paneRenderer)};sap.ui.unified.SplitContainer.prototype.removeSecondaryContent=function(i){return this._mod(function(r){return this.removeAggregation("secondaryContent",i,r)},this._paneRenderer)};sap.ui.unified.SplitContainer.prototype.removeAllSecondaryContent=function(){return this._mod(function(r){return this.removeAllAggregation("secondaryContent",r)},this._paneRenderer)};sap.ui.unified.SplitContainer.prototype.destroySecondaryContent=function(){return this._mod(function(r){return this.destroyAggregation("secondaryContent",r)},this._paneRenderer)}})(window);
