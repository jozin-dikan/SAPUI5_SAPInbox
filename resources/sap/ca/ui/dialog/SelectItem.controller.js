jQuery.sap.require("sap.ca.ui.utils.resourcebundle");sap.ui.controller("sap.ca.ui.dialog.SelectItem",{_SELECTITEM_DIALOG_ID:"DLG_SLTITEM",_SELECTITEM_LIST_ID:"LST_ITEMS",onBeforeOpenDialog:function(){var d=this.getView().byId(this._SELECTITEM_DIALOG_ID).getModel();if(d){var D=d.getProperty("/defaultIndex");var l=this.getView().byId(this._SELECTITEM_LIST_ID);var a=l.getItems();if(a&&D>=0&&D<a.length){l.setSelectedItem(a[D],true)}}},onSelectionChange:function(e){var s=e.getParameters().listItem;if(s&&s.getBindingContext()){this.getView().byId(this._SELECTITEM_DIALOG_ID).close();var S=s.getBindingContext().getObject();var r={selectedIndex:e.getParameters().listItem.getParent().indexOfItem(s),selectedItem:S};sap.ca.ui.dialog.factory.closeDialog(this._SELECTITEM_DIALOG_ID,r)}},onCancelDialog:function(){var r={selectedIndex:-1,selectedItem:null};sap.ca.ui.dialog.factory.closeDialog(this._SELECTITEM_DIALOG_ID,r)}});
