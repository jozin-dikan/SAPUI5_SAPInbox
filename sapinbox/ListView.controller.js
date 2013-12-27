sap.ui
		.controller(
				"sapinbox.ListView",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf sapinbox.ListView
					 */
					onInit : function() {
						
						var oEventBus = sap.ui.getCore().getEventBus();
						oEventBus.subscribe("nav", "detail", this.showdetail,
								this);
						
						
																
					},

					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf sapinbox.ListView
					 */
					// onBeforeRendering: function() {
					//
					// },
					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf sapinbox.ListView
					 */
					// onAfterRendering: function() {
					//
					// },
					 onBeforeFirstShow: function(oEvent){
				    //onBeforeShow : function(oEvent) {
						if (oEvent.data.bindingContext) {
							this.getView().setBindingContext(
									oEvent.data.bindingContext);
						}
						
					},

					onListSelect : function(oEvent) {
						var oBindingContext = oEvent.getParameter("listItem")
								.getBindingContext();

						sViewId = "detailItem_"
								+ oEvent.getParameter("listItem")
										.data("itemid");

						sap.ui.getCore().getEventBus().publish("nav", "detail",
								{
									viewName : "sapinbox.DetailView",
									viewId : sViewId,
									data : {
										bindingContext : oBindingContext
									}
								});
					},

					onListItemTap : function(oEvent) {
						var oBindingContext = oEvent.getSource()
								.getBindingContext(), sViewId = "detailItem_"
								+ oEvent.getParameter("listItem")
										.data("itemid");

						sap.ui.getCore().getEventBus().publish("nav", "to", {
							viewName : "sapinbox.DetailView",
							viewId : sViewId,
							data : {
								bindingContext : oBindingContext
							}
						});
					},

					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf sapinbox.ListView
					 */
					// onExit: function() {
					//
					// }
					showdetail : function(sChannelId, sEventId, oData) {

						var app = oSplitApp, sViewName = oData.viewName, 
						sViewId = oData.viewId, oDataObject = oData.data, sNavType = oData.navType, oView;

						// if no specific viewId is provided, the navigation id
						// will be used as a
						// viewId. This is used for creating more instances
						// of the same view.
						if (!sViewId) {
							sViewId = sViewName;
						}

						// check param
						if (!sViewId) {
							jQuery.sap.log
									.error("navTo failed due to insufficient params: "
											+ sViewId);
							return;
						}

						var bMaster = (sViewId.indexOf("sapinbox.ListView") !== -1);

						if (!sap.ui.getCore().byId(sViewId)) {
							// this is the lazy loading of views
							jQuery.sap.log.info("now loading view with name '"
									+ sViewName + "'");
							oView = sap.ui.jsview(sViewId, sViewName);
							(bMaster) ? app.addMasterPage(oView) : app
									.addDetailPage(oView);
						}
						(bMaster) ? app.toMaster(sViewId, oDataObject) : app
								.toDetail(sViewId, oDataObject);

						// write history

					}
				});