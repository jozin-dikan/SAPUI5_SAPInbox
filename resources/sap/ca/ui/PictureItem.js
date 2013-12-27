/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.PictureItem");jQuery.sap.require("sap.ca.ui.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ca.ui.PictureItem",{metadata:{library:"sap.ca.ui",properties:{"status":{type:"string",group:"Behavior",defaultValue:null},"source":{type:"string",group:"Data",defaultValue:null},"name":{type:"string",group:"Data",defaultValue:null},"width":{type:"sap.ui.core.CSSSize",group:"Data",defaultValue:'62px'},"height":{type:"sap.ui.core.CSSSize",group:"Data",defaultValue:'62px'}},events:{"loaded":{}}}});sap.ca.ui.PictureItem.M_EVENTS={'loaded':'loaded'};sap.ca.ui.PictureItem.STATUS={'ADD':'Added','DELETE':'Deleted','READ':'Read'};
sap.ca.ui.PictureItem.prototype.init=function(){this._oTapHandler=jQuery.proxy(this._onTap,this);this._oImage=new sap.m.Image({id:this.getId()+"-image"});this._oImage.attachPress(this._oTapHandler);this._oImage.addStyleClass("sapCaUiPictureItemImage");this._iRenderCount=0;this._sourceInfo={isDataUri:false,mimeType:"",data:""}};
sap.ca.ui.PictureItem.prototype.exit=function(){if(this._oImage){this._oImage.detachPress(this._oTapHandler);this._oImage.destroy()}if(this._internalFile){delete this._internalFile}};
sap.ca.ui.PictureItem.prototype.setSource=function(v){this._sourceInfo=this._getSourceInfo(v);this._oImage.setSrc(v);this.setProperty("source",v,false)};
sap.ca.ui.PictureItem.prototype.setFile=function(f){var t=this;this._internalFile=f;var m=Math.min(800,jQuery(window).width());var a=Math.min(800,jQuery(window).height());var c=Math.max(m,a);var b=new sap.ca.ui.utils.CanvasHelper({width:c,height:c,crop:true,quality:144,done:function(e){t.setSource(e.getParameters().data);t.fireLoaded()}});b.resize(f)};
sap.ca.ui.PictureItem.prototype.getFile=function(f){if(!this._internalFile){jQuery.sap.log.warning("no file has been set");return null}return this._internalFile};
sap.ca.ui.PictureItem.prototype.isSourceDataUri=function(){if(!this._sourceInfo)return false;return this._sourceInfo.isDataUri};
sap.ca.ui.PictureItem.prototype.getMimeType=function(){return this._sourceInfo.mimeType};
sap.ca.ui.PictureItem.prototype.getBase64Encoding=function(){return this._sourceInfo.data};
sap.ca.ui.PictureItem.prototype._resizeImage=function(){var s="auto";var a="auto";var d=jQuery.sap.domById(this.getId()+"-image");if(d){if(d.width==0||d.height==0){var r=jQuery.proxy(this.onAfterRendering,this);this._iRenderCount++;if(this._iRenderCount<=5){setTimeout(r,100)}else{s=this.getHeight();this._iRenderCount=0}}else{if(d.width<d.height){var t=parseInt(this.getWidth(),10);a=(t/d.width)*d.height}else{var b=parseInt(this.getHeight(),10);s=(b/d.height)*d.width}this._iRenderCount=0}this._oImage.$().width(s);this._oImage.$().height(a)}};
sap.ca.ui.PictureItem.prototype.onAfterRendering=function(){this._resizeImage();var $=this._oImage.$();$.css({"margin-left":((parseInt(this.getWidth())-$.width())/2)+"px","margin-top":((parseInt(this.getHeight())-$.height())/2)+"px"})};
sap.ca.ui.PictureItem.prototype._onTap=function(){var a=sap.ui.getCore().byId(this._addPictureId);if(a){a._pictureTapped(this)}};
sap.ca.ui.PictureItem.prototype.onkeyup=function(e){if(e.which==jQuery.sap.KeyCodes.SPACE||e.which==jQuery.sap.KeyCodes.ENTER){this._onTap()}};
sap.ca.ui.PictureItem.prototype._getSourceInfo=function(s){if(!s)return;var r=/^data:(.+);base64,(.*)$/;var m=s.match(r);var a;if(m){var M=m[1];var b=m[2];a={isDataUri:true,mimeType:M,data:b}}else{a={isDataUri:false,mimeType:"",data:""}}return a};