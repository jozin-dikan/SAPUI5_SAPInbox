sap.ui
		.jsview(
				"sapinbox.ListView",
				{

					/**
					 * Specifies the Controller belonging to this View. In the
					 * case that it is not implemented, or that "null" is
					 * returned, this View does not have a Controller.
					 * 
					 * @memberOf sapinbox.ListView
					 */
					getControllerName : function() {
						return "sapinbox.ListView";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf sapinbox.ListView
					 */

					getUrl : function(sUrl) {
						alert("hostname:" + window.location.hostname);
						if (sUrl == "")
							return sUrl;
						if (window.location.hostname == "localhost") {
							return "proxy" + sUrl
						} else {
							return sUrl;
						}

					},

					createContent : function(oController) {
						
						var domainString = "document.domain";
						domainstring = "*.com";
						'Access-Control-Allow-Origin: *.local.com';
						'Access-Control-Allow-Headers: X-KEY';

						var url = this
								.getUrl("/sap/opu/odata/sap/ZSAPINBOX_SRV");
						oModel = new sap.ui.model.odata.ODataModel(url, true,
								"JDIKAN_1", "veslo1");

						var list = new sap.m.List("iditemlist", {
							showUnread : true,
							// POINT 1
							mode : jQuery.device.is.phone ? sap.m.ListMode.None
									: sap.m.ListMode.SingleSelectMaster,						   
						    selectionChange : [ oController.onListSelect, oController],
						    press: [oController.onListItemTap, oController]						    
						});
																							
						// list.setModel(oModel);
						sap.ui.getCore().setModel(oModel);

						var itemTemplate = new sap.m.CustomListItem(
								{
									content : new sap.ui.core.HTML(
											{
												content : {
													parts : [
															{
																path : "ItemText"
															},
															{
																path : "CreatedBy"
															},
															{
																path : "CreationDateTime",
																formatter : function(
																		fValue) {
																	jQuery.sap
																			.require("sap.ui.core.format.DateFormat");
																	var oDateFormat = sap.ui.core.format.DateFormat
																			.getDateTimeInstance({
																				pattern : "dd.MM.yyyy"
																			});
																	return oDateFormat
																			.format(new Date(
																					fValue));
																}
															}, ],
													formatter : function(
															itemtext,
															CreatedBy, datetime) {
														return "<div><div class='listview_itemtext'>"
																+ itemtext
																+ "<br></div><div class='createdby_date'><p class='alignleft'>"
																+ CreatedBy
																+ "</p><p class='alignright'>"
																+ datetime
																+ "</p></div></div>";
													}
												}
											}),
									customData : [ new sap.ui.core.CustomData({
										key : "itemid",
										value : "{ItemId}"
									}), ]
								});

						list.bindAggregation("items", {
							path : "/InboxItemSet",
							template : itemTemplate
						});
						//if (!jQuery.device.is.phone && items.length > 0 && !list.getSelectedItem()) {
							//default vyber prvni polozky
					/*		var list =sap.ui.getCore().byId("iditemlist");
							var items = list.getItems();
							list.setSelectedItem(items[0], true);*/	
						//}
						
						
						this.page = new sap.m.Page({
							title : "Home",
							content : [ list ]
						});
						return this.page;
					}

				});