/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ushell.ui.launchpad.Tile");jQuery.sap.require("sap.ushell.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ushell.ui.launchpad.Tile",{metadata:{library:"sap.ushell",properties:{"long":{type:"boolean",group:"Misc",defaultValue:false},"uuid":{type:"string",group:"Misc",defaultValue:null},"target":{type:"string",group:"Misc",defaultValue:null},"draggable":{type:"boolean",group:"Misc",defaultValue:false},"dragContainer":{type:"string",group:"Misc",defaultValue:null},"visible":{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{"tileViews":{type:"sap.ui.core.Control",multiple:true,singularName:"tileView"},"footItems":{type:"sap.ui.core.Control",multiple:true,singularName:"footItem"}},events:{"dragStart":{},"dragStop":{},"afterRendering":{}}}});sap.ushell.ui.launchpad.Tile.M_EVENTS={'dragStart':'dragStart','dragStop':'dragStop','afterRendering':'afterRendering'};
// Copyright (c) 2013 SAP AG, All Rights Reserved
(function(){"use strict";jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget');jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse');jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-draggable');jQuery.sap.require("sap.ushell.override");sap.ushell.ui.launchpad.Tile.prototype.ontap=function(e,u){return;var s=e.srcElement,I=true,i,t=function(){var h=function(){this.toggleStyleClass("sapUshellTileHide",false)};this.toggleStyleClass("sapUshellTileHide",true);this.toggleStyleClass("sapUshellTileTapped",false);window.setTimeout(jQuery.proxy(h,this),800)};if(jQuery.device.is.phone||!jQuery.support.cssAnimations){return}for(i=0;i<6;i=i+1){if(jQuery(s)&&(jQuery(s).hasClass("sapUshellTileInner")||jQuery(s).hasClass("sapUshellPlusTile"))){I=false;break}s=jQuery(s).parent()}if(I){return}this.toggleStyleClass("sapUshellTileTapped",true);window.setTimeout(jQuery.proxy(t,this),1000)};sap.ushell.ui.launchpad.Tile.prototype.destroy=function(s){this.removeAggregation("tileViews",0,true);sap.ui.core.Control.prototype.destroy.call(this,s)};sap.ushell.ui.launchpad.Tile.prototype.destroyTileViews=function(){if(this.mAggregations["tileViews"]){this.mAggregations["tileViews"].length=0}};sap.ushell.ui.launchpad.Tile.prototype.exit=function(){if(this.getDraggable()){this._setDraggable(false)}};sap.ushell.ui.launchpad.Tile.prototype.onBeforeRendering=function(){if(this.getDraggable()){this._setDraggable(false)}};sap.ushell.ui.launchpad.Tile.prototype.onAfterRendering=function(){if(this.getDraggable()){this._setDraggable(true)}this.fireAfterRendering()};sap.ushell.ui.launchpad.Tile.prototype._handleDragStart=function(e,u){this.fireDragStart()};sap.ushell.ui.launchpad.Tile.prototype._handleDragStop=function(e,u){this.fireDragStop()};sap.ushell.ui.launchpad.Tile.prototype.setDraggable=function(d){this.setProperty("draggable",d,true);this._setDraggable(d);return this};sap.ushell.ui.launchpad.Tile.prototype.setVisible=function(v){this.setProperty("visible",v,true);return this.toggleStyleClass("sapUshellHidden",!v)};sap.ushell.ui.launchpad.Tile.prototype.setLong=function(l){this.setProperty("long",l,true);return this.toggleStyleClass("long",l)};sap.ushell.ui.launchpad.Tile.prototype.setUuid=function(u){this.setProperty("uuid",u,true);return this};sap.ushell.ui.launchpad.Tile.prototype._setDraggable=function(d){if(this.getDomRef()){if(d){this.$().draggable({containment:"document",handle:".sapUshellTileInner",helper:"clone",appendTo:this.getDragContainer()||"body",opacity:0.5,delay:200,zIndex:100,scroll:false}).bind("dragstart",jQuery.proxy(this._handleDragStart,this)).bind("dragstop",jQuery.proxy(this._handleDragStop,this))}else{this.$().unbind("dragstart",this._handleDragStart).unbind("dragstop",this._handleDragStop).draggable("destroy")}}}}());