jQuery.sap.declare("sap.ca.ui.message.message");jQuery.sap.require("sap.ca.ui.dialog.factory");jQuery.sap.require("sap.m.MessageToast");jQuery.sap.require("sap.ca.ui.utils.resourcebundle");jQuery.sap.require("sap.ui.core.library");sap.ca.ui.message=(function(){var _={ERROR:{title:sap.ca.ui.utils.resourcebundle.getText("messagetype.error"),valueState:sap.ui.core.ValueState.Error},WARNING:{title:sap.ca.ui.utils.resourcebundle.getText("messagetype.warning"),valueState:sap.ui.core.ValueState.Warning},SUCCESS:{title:sap.ca.ui.utils.resourcebundle.getText("messagetype.success"),valueState:sap.ui.core.ValueState.Success},INFO:{title:sap.ca.ui.utils.resourcebundle.getText("messagetype.info"),valueState:sap.ui.core.ValueState.None}};var a=function(v){var r=(jQuery.type(v)==="string")?v:"";return jQuery.trim(r)};var b=function(v){var r=(v)?v:sap.ui.core.ValueState.None;return r};var c=function(v){var r=(v&&v===_.INFO)?"sap-icon://hint":"";return r};var d=function(s,C){var e={};if(s){if(s.type){e.title=a(s.type.title);e.state=b(s.type.valueState);e.icon=c(s.type);e.message=a(s.message);var D=a(s.details);e.details=(D&&D!==e.message)?D:"";e.showLink=(e.details)?true:false;e.showDetails=false}}sap.ca.ui.dialog.factory.showMessageBox(e,C)};return{showMessageBox:function(s,C){d(s,C)},showMessageToast:function(m){sap.m.MessageToast.show(m)},Type:_}}());
