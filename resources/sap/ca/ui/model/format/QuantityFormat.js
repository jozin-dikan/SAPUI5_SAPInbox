/*!
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.model.format.QuantityFormat");jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");jQuery.sap.require("sap.ui.core.format.NumberFormat");jQuery.sap.require("sap.ui.core.LocaleData");jQuery.sap.require("sap.ca.ui.model.format.FormatHelper");
sap.ca.ui.model.format.QuantityFormat=function(){throw new Error()};
sap.ca.ui.model.format.QuantityFormat.oValueInfo={oDefaultFormatOptions:{style:"standard",minFractionDigits:0}};sap.ca.ui.model.format.QuantityFormat.oQuantityModel=null;
sap.ca.ui.model.format.QuantityFormat.getInstance=function(u,f,l){return this.createInstance(u,f,l,this.oValueInfo)};
sap.ca.ui.model.format.QuantityFormat.createInstance=function(u,f,l,i){var F=jQuery.sap.newObject(this.prototype);if(f instanceof sap.ui.core.Locale){l=f;f=undefined}if(!l){F.oLocale=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale()}else{F.oLocale=new sap.ui.core.Locale(l)}F.oLocaleData=sap.ui.core.LocaleData.getInstance(F.oLocale);F.oFormatOptions=jQuery.extend(false,{},i.oDefaultFormatOptions,f);F.init(u,f);return F};
sap.ca.ui.model.format.QuantityFormat.prototype.init=function(u,f){if(f){if(f.minFractionDigits!=undefined){this.oFormatOptions.minFractionDigits=sap.ca.ui.model.format.FormatHelper.toNumeric(f.minFractionDigits);return}}if(u){if(!sap.ca.ui.model.format.QuantityFormat.oQuantityModel){sap.ca.ui.model.format.QuantityFormat.oQuantityModel=new sap.ui.model.json.JSONModel();var p=jQuery.sap.getModulePath("sap.ca.ui");sap.ca.ui.model.format.QuantityFormat.oQuantityModel.loadData(p+"/model/unit.json","",false)}var d=sap.ca.ui.model.format.QuantityFormat.oQuantityModel.getData();var l=d.length;var i=0,s=0;for(i=0;i<l;i++){if(d[i].ISOCode===u){this.oFormatOptions.minFractionDigits=d[i].Decimals;s=1;return}}for(i=0;i<l;i++){if(d[i].Code===u){this.oFormatOptions.minFractionDigits=d[i].Decimals;break}}}};
sap.ca.ui.model.format.QuantityFormat.prototype.format=function(v){if(this.oFormatOptions.style==="short"){this.oFormatOptions.decimals=this.oFormatOptions.minFractionDigits;return sap.ca.ui.model.format.NumberFormat.getInstance(this.oFormatOptions,this.oLocale).format(v)}else{var a=sap.ca.ui.model.format.FormatHelper.toNumeric(v);if(!isFinite(a)){return""}var s,n,c=0;var e=3;if(a>1e20){return sap.ca.ui.model.format.QuantityFormat.getInstance({style:"short"}).format(a)}else{s=a.toFixed(this.oFormatOptions.minFractionDigits+e);n=s.length-1;while(s.charAt(n)==='0'&&c<=e){++c;--n}s=s.substring(0,n+1);return sap.ui.core.format.NumberFormat.getInstance(this.oFormatOptions,this.oLocale).format(s)}}};
sap.ca.ui.model.format.QuantityFormat.prototype.parse=function(v){var f=sap.ca.ui.model.format.NumberFormat.getInstance(this.oFormatOptions,this.oLocale);return f.parse(v)};
sap.ca.ui.model.format.QuantityFormat.FormatQuantityShort=function(v,u,m){return sap.ca.ui.model.format.QuantityFormat.getInstance(u,{style:"short",minFractionDigits:m}).format(v)};
sap.ca.ui.model.format.QuantityFormat.FormatQuantityStandard=function(v,u,m){return sap.ca.ui.model.format.QuantityFormat.getInstance(u,{style:"standard",minFractionDigits:m}).format(v)};
