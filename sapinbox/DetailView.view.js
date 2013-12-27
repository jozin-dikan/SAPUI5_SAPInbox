sap.ui.jsview("sapinbox.DetailView", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf sapinbox.DetailView
	 */
	getControllerName : function() {
		return "sapinbox.DetailView";
	},

	onBeforeFirstShow : function(oEvent) {
		this.getController().onBeforeFirstShow(oEvent);
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf sapinbox.DetailView
	 */
	createContent : function(oController) {
		var trims = this.toLocaleString().split("#");

		var oMainFlexbox = new sap.m.FlexBox();
		oMainFlexbox.setDirection("Column");
		oMainFlexbox.addItem(new sap.m.Label({
			text : {
				parts: [{path : "ItemText" }],
				formatter: function(sValue) {
					var str = i18_bundle.getText("DET_TITLE");
					return str + " : " + sValue;
				}
		}}));
		oMainFlexbox.addItem(new sap.m.Label({
			text : {
				parts: [{path : "CreatedBy" }],
				formatter: function(sValue) {
					var str = i18_bundle.getText("DET_CREATEDBY");
					return str + " :" + sValue;
				}
		}}));
		oMainFlexbox.addItem(new sap.m.Label({
			text : {
				parts: [{path : "CreationDateTime" }],
				formatter: function(sValue) {
					var str = i18_bundle.getText("DET_CREATED");
					return str + ": " + sValue;
				}
		}}));
		
		
		var actionFlexbox = new sap.m.FlexBox("actionFlexbox_"+trims[1], { margins :  ['100px', '200px', '300px'],});
		oMainFlexbox.addItem(actionFlexbox);
		actionFlexbox.setDirection("Column");		
		


		this.page = new sap.m.Page({
			title : "{ItemText}",
			showNavButton : jQuery.device.is.phone,
			content : [ oMainFlexbox ]
		}).addStyleClass("sapUiStdPage");

		return this.page;
	}
});