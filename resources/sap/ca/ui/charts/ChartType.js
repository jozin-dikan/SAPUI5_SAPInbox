jQuery.sap.declare("sap.ca.ui.charts.ChartType");sap.ca.ui.charts.ChartType={Bar:"Bar",StackedBar:"StackedBar",StackedBar100:"StackedBar100",DualStackedBar:"DualStackedBar",DualStackedBar100:"DualStackedBar100",Column:"Column",StackedColumn:"StackedColumn",StackedColumn100:"StackedColumn100",DualStackedColumn:"DualStackedColumn",DualStackedColumn100:"DualStackedColumn100",Line:"Line",Combination:"Combination",Bubble:"Bubble"};sap.ca.ui.charts.ChartType.M_CHARTPROPERTIES={"Bar":{name:"Bar",stacked:false,icon:"sap-icon://horizontal-bar-chart",scroll:{vertical:true,horizontal:false},showHoverLine:false,dataLabelPosition:"inside",dualAxis:false},"StackedBar":{name:"StackedColumn",vizType:"viz/stacked_bar",stacked:true,icon:"sap-icon://horizontal-stacked-chart",scroll:{vertical:true,horizontal:false},showHoverLine:false,dataLabelPosition:"inside",dualAxis:false},"StackedBar100":{name:"StackedColumn100",vizType:"viz/100_stacked_bar",stacked:true,icon:"sap-icon://full-stacked-chart",scroll:{vertical:true,horizontal:false},showHoverLine:false,dataLabelPosition:"inside",dualAxis:false},"DualStackedBar":{name:"DualStackedColumn",vizType:"viz/dual_stacked_bar",stacked:true,icon:"sap-icon://horizontal-stacked-chart",scroll:{vertical:true,horizontal:false},showHoverLine:false,dataLabelPosition:"inside",dualAxis:true,alignScales:true},"DualStackedBar100":{name:"DualStackedColumn100",vizType:"viz/100_dual_stacked_bar",stacked:true,icon:"sap-icon://full-stacked-chart",scroll:{vertical:true,horizontal:false},showHoverLine:false,dataLabelPosition:"inside",dualAxis:true,alignScales:false},"Column":{name:"Column",stacked:false,icon:"sap-icon://vertical-bar-chart",scroll:{vertical:false,horizontal:true},showHoverLine:false,dataLabelPosition:"inside",dualAxis:false},"StackedColumn":{name:"StackedColumn",stacked:true,icon:"sap-icon://vertical-stacked-chart",scroll:{vertical:false,horizontal:true},showHoverLine:false,dataLabelPosition:"inside",dualAxis:false},"StackedColumn100":{name:"StackedColumn100",stacked:true,icon:"sap-icon://full-stacked-column-chart",scroll:{vertical:false,horizontal:true},showHoverLine:false,dataLabelPosition:"inside",dualAxis:false},"DualStackedColumn":{name:"DualStackedColumn",stacked:true,icon:"sap-icon://vertical-stacked-chart",scroll:{vertical:false,horizontal:true},showHoverLine:false,dataLabelPosition:"inside",dualAxis:true,alignScales:true},"DualStackedColumn100":{name:"DualStackedColumn100",stacked:true,icon:"sap-icon://full-stacked-column-chart",scroll:{vertical:false,horizontal:true},showHoverLine:false,dataLabelPosition:"inside",dualAxis:true,alignScales:false},"Line":{name:"Line",stacked:false,icon:"sap-icon://line-chart",scroll:{vertical:false,horizontal:true},showHoverLine:true,dataLabelPosition:"outside",dualAxis:false},"Combination":{name:"Combination",stacked:true,icon:"sap-icon://business-objects-experience",scroll:{vertical:false,horizontal:true},showHoverLine:false,dataLabelPosition:"inside",dualAxis:false},"Bubble":{name:"Bubble",stacked:true,icon:"sap-icon://bubble-chart",scroll:{vertical:false,horizontal:false},showHoverLine:false,dataLabelPosition:"inside",dualAxis:false}};
sap.ca.ui.charts.ChartType.getChartProperties=function(c){var C=sap.ca.ui.charts.ChartType.M_CHARTPROPERTIES[c];if(C==null){jQuery.sap.log.error("Unknown Chart Type "+c+" is not a recognized type")}return C}