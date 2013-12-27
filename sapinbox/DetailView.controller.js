sap.ui.controller("sapinbox.DetailView", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf sapinbox.DetailView
	 */
	/*
	 * onInit: function() { var page = sap.ui.getCore().byId("idDetailPage");
	 * 
	 * this.getView().addEventDelegate({ onBeforeShow: function(evt) {
	 * $.sap.log.error("FYI: Zmena stranky" + evt.data.id); var dataid =
	 * "test1"; page.setTitle(dataid); }},this); },
	 */
	onBeforeFirstShow : function(oEvent) {
		if (oEvent.data.bindingContext) {
			this.getView().setBindingContext(oEvent.data.bindingContext);
			var trims = this.getView().toLocaleString().split("#");

			var actionFlexbox = sap.ui.getCore().byId(
					"actionFlexbox_" + trims[1]);

			var itemTemplate = new sap.m.Button({
				text : "{OperationText}",
				width : "100%",
				press : this.ActionButtonPress,
				customData : [ new sap.ui.core.CustomData({
					key : "actionId",
					value : "{ItemOperationID}"
				}), ]
			});

			var itemPath = oEvent.data.bindingContext.sPath
					+ "/ItemOperationSet";
			actionFlexbox.bindAggregation("items", {
				path : itemPath,
				template : itemTemplate
			});
		}
	},

	ActionButtonPress : function(oControlEvent) {
		var actionId = "1";
		actionId = oControlEvent.getSource().data("actionId");
		var odata = oControlEvent.getSource().getParent().getBindingContext()
	}

/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf sapinbox.DetailView
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf sapinbox.DetailView
 */
// onExit: function() {
//
// }
});