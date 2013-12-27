// This file has been generated by the SAPUI5 'AllInOne' Builder
jQuery.sap.declare('sap.ui.vbm.library-all');
if ( !jQuery.sap.isDeclared('sap.ui.vbm.VBIRenderer') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ui.vbm.VBIRenderer");

/**
 * @class VBI renderer. 
 * @static
 */
sap.ui.vbm.VBIRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.vbm.VBIRenderer.render = function(oRm, oControl)
{ 
   // console.log( "sap.ui.vbm.VBIRenderer.render.....\r\n");

   // write the HTML into the render manager
   oRm.write("<div align='center'");
   oRm.writeControlData(oControl);
   oRm.addClass("sapVBIMAIN");
   oRm.writeClasses();
   oRm.addStyle("width", oControl.getWidth()+"px");
   oRm.addStyle("height", oControl.getHeight()+"px");
   oRm.addStyle("color", "@sapUiTextColor" );
   oRm.addStyle("border", "1px solid #000" );
   oRm.addStyle("position", "relative" );
   //oRm.addStyle("display", "table-cell" );
   oRm.addStyle("vertical-align", "middle" ); 

   oRm.writeStyles();
   oRm.write(">"); // span element

   if( oControl.getPlugin() )
   {
      var id = oControl.getId();
      if( navigator.appName == "Microsoft Internet Explorer")         
      {
         // write the object tag
         oRm.write( "<object id='VBI" + id + "'" + " CLASSID='CLSID:00100000-2011-0070-2000-FC7214A1CD7B' " + 
                        "width='"   + oControl.getWidth()   + "px' " +
                        "height='"  + oControl.getHeight()  + "px' " + 
                        
                        ">" );

         // set a link to the native installer...............................//
         oRm.write( "<a href='file://production2/components/VBIS/VBIS_d/VisualBiz/VBIS_d_stream/gen/dbg/java/packaged/full/_setup/SAPVisualBusiness.exe' > Get the Visual Business PlugIn.</a>" );

         oRm.write( "</object>" );

      } else
      {
         // write the embed tag
         oRm.write( "<embed id='VBI" + id + "'" + " type='application/x-visualbusiness' " + 
                        "width='"   + oControl.getWidth()   + "px' " +
                        "height='"  + oControl.getHeight()  + "px' " + ">" );

      }
      // render the information for using the native plugin
   } 

   oRm.write("</div>");

   // the config is not loaded here any more, due the set config will be.....//
   // called, then queueing or execution will take place.....................//
};


}; // end of sap/ui/vbm/VBIRenderer.js
if ( !jQuery.sap.isDeclared('sap.ui.vbm.library') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.vbm (1.16.3)
 */
jQuery.sap.declare("sap.ui.vbm.library");
jQuery.sap.require('sap.ui.core.Core'); // unlisted dependency retained

/**
 * SAP UI library: sap.ui.vbm
 *
 * @namespace
 * @name sap.ui.vbm
 * @public
 */


// library dependencies
jQuery.sap.require('sap.ui.core.library'); // unlisted dependency retained


// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.vbm",
  dependencies : ["sap.ui.core"],
  types: [],
  interfaces: [],
  controls: [
    "sap.ui.vbm.VBI"
  ],
  elements: [],
  version: "1.16.3"});


}; // end of sap/ui/vbm/library.js
if ( !jQuery.sap.isDeclared('sap.ui.vbm.VBI') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.vbm.VBI.
jQuery.sap.declare("sap.ui.vbm.VBI");

jQuery.sap.require('sap.ui.core.Control'); // unlisted dependency retained



/**
 * Constructor for a new VBI.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : int (default: 800)</li>
 * <li>{@link #getHeight height} : int (default: 600)</li>
 * <li>{@link #getConfig config} : object</li>
 * <li>{@link #getPlugin plugin} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.VBI#event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:render render} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:zoom zoom} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:move move} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The VBI control.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.3
 *
 * @constructor   
 * @public
 * @name sap.ui.vbm.VBI
 */
sap.ui.core.Control.extend("sap.ui.vbm.VBI", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"load", "zoomToGeoPosition"
	],

	// ---- control specific ----
	library : "sap.ui.vbm",
	properties : {
		"width" : {type : "int", group : "Misc", defaultValue : 800},
		"height" : {type : "int", group : "Misc", defaultValue : 600},
		"config" : {type : "object", group : "Misc", defaultValue : null},
		"plugin" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	events : {
		"submit" : {}, 
		"render" : {}, 
		"zoom" : {}, 
		"move" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.vbm.VBI with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.vbm.VBI.extend
 * @function
 */

sap.ui.vbm.VBI.M_EVENTS = {'submit':'submit','render':'render','zoom':'zoom','move':'move'};


/**
 * Getter for property <code>width</code>.
 * Set control's width
 *
 * Default value is <code>800</code>
 *
 * @return {int} the value of property <code>width</code>
 * @public
 * @name sap.ui.vbm.VBI#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>800</code> 
 *
 * @param {int} iWidth  new value for property <code>width</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Sets control's height
 *
 * Default value is <code>600</code>
 *
 * @return {int} the value of property <code>height</code>
 * @public
 * @name sap.ui.vbm.VBI#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>600</code> 
 *
 * @param {int} iHeight  new value for property <code>height</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#setHeight
 * @function
 */


/**
 * Getter for property <code>config</code>.
 * This is the model model configuration.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>config</code>
 * @public
 * @name sap.ui.vbm.VBI#getConfig
 * @function
 */

/**
 * Setter for property <code>config</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oConfig  new value for property <code>config</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#setConfig
 * @function
 */


/**
 * Getter for property <code>plugin</code>.
 * When true, the plugin version of visual business should be used.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>plugin</code>
 * @public
 * @name sap.ui.vbm.VBI#getPlugin
 * @function
 */

/**
 * Setter for property <code>plugin</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPlugin  new value for property <code>plugin</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#setPlugin
 * @function
 */


/**
 * high level api
 * submit event 
 *
 * @name sap.ui.vbm.VBI#submit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.data json or xml string describing the current state and event
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 *  
 * high level api
 * submit event 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 *
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#attachSubmit
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#detachSubmit
 * @function
 */

/**
 * Fire event submit to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'data' of type <code>string</code> json or xml string describing the current state and event</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.vbm.VBI#fireSubmit
 * @function
 */


/**
 * low level api:
 * rendering of canvas content is required 
 *
 * @name sap.ui.vbm.VBI#render
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.canvas canvas object to render into
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 *  
 * low level api:
 * rendering of canvas content is required 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 *
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#attachRender
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#detachRender
 * @function
 */

/**
 * Fire event render to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> canvas object to render into</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.vbm.VBI#fireRender
 * @function
 */


/**
 * low level api: the canvas is zoomed 
 *
 * @name sap.ui.vbm.VBI#zoom
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.canvas canvas object to render into
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 *  
 * low level api: the canvas is zoomed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 *
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#attachZoom
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#detachZoom
 * @function
 */

/**
 * Fire event zoom to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> canvas object to render into</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.vbm.VBI#fireZoom
 * @function
 */


/**
 * low level api: the canvas was moved 
 *
 * @name sap.ui.vbm.VBI#move
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.canvas canvas object to render into
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 *  
 * low level api: the canvas was moved 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 *
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#attachMove
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.vbm.VBI#detachMove
 * @function
 */

/**
 * Fire event move to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> canvas object to render into</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.vbm.VBI#fireMove
 * @function
 */


/**
 * high level load event
 *
 * @name sap.ui.vbm.VBI.prototype.load
 * @function

 * @type void
 * @public
 */


/**
 * TODO!
 *
 * @name sap.ui.vbm.VBI.prototype.zoomToGeoPosition
 * @function
 * @param {float} 
 *         fLon
 *         Longitude in Degrees
 * @param {float} 
 *         fLat
 *         Lattitude in Degrees
 * @param {int} 
 *         iLod
 *         Level of Detail, usually between 0 and 20

 * @type void
 * @public
 */


// Start of sap/ui/vbm/VBI.js
jQuery.sap.require('sap.ui.vbm.lib.sapvbi'); // unlisted dependency retained

//jQuery.sap.require("sap.ui.vbm.lib.jquery-mousewheel");
jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core'); // unlisted dependency retained

jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget'); // unlisted dependency retained

jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse'); // unlisted dependency retained

jQuery.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-draggable'); // unlisted dependency retained

//jQuery.sap.require("sap.ui.vbm.lib.jquery-vbinavigation");

/*global VBI *///declare unusual global vars for JSLint/SAPUI5 validation

//...........................................................................//
// This file defines behavior for the control,...............................//
//...........................................................................//

sap.ui.vbm.VBI.prototype.exit = function()
{
   // create the vbi control context.........................................//
   // alert( "destroy" );

   // create the vbi control context.........................................//
   if( this.getPlugin() )
   {
      // todo: initwhen plugin should be used
   } else
   {
      if( this.m_VBIContext )
         this.m_VBIContext.clear(); // clear the resources...................//
   }
};

sap.ui.vbm.VBI.prototype.init = function()
{
   this.m_aLoadQueue = null;                 // load queue...................// 

   // create the vbi control context.........................................//
   if( this.getPlugin() )
   {
      // todo: init when plugin should be used
   } else
   {
      // just create the context.............................................//
      this.m_VBIContext = new VBI.VBIContext( this );
   }
};

sap.ui.vbm.VBI.prototype.loadNative = function( dat )
{
   var l_vbiId = this.getId();
   var elem = document.getElementById( 'VBI' + l_vbiId );

   if( !elem )
      return;     // element not found.......................................//

   if( jQuery.type( dat ) == 'object' )
   {
      // input is a json object, convert to sting and load...................//   
      var txt = JSON.stringify( dat, null, '  ' );
      try 
      {
         elem.Load( txt );
      } catch( e )
      {
      }
   } else
   if( jQuery.type( dat ) == 'string' )
   {
      // input already string, load directly.................................//
      elem.Load( dat );
   }
};

sap.ui.vbm.VBI.prototype.loadHtml = function( dat )
{
   var l_vbiId = this.getId();

   // ensure that data is converted to a json object.........................//      
   if( jQuery.type( dat ) == 'string' )
      dat = JSON.parse( dat );

   // todo: do correct handling when change flags get set....................//
   var bModifiedDataTypes = false;
   var bModifiedData = false;
   var bModifiedMapProviders = false;
   var bModifiedMapLayerStacks = false;
   var bModifiedScenes = false;
   var bModifiedWindows = false;
   var bModifiedActions = false;
   var bModifiedResources = false;

   // the data can be a json object..........................................//
   if( jQuery.type( dat ) == 'object' )
   {
      if( dat.SAPVB )
      {
         // process resources................................................//
         if( dat.SAPVB.Resources )
         {
            // load the resources............................................//
            this.m_VBIContext.GetResources().load( dat.SAPVB.Resources, this.m_VBIContext );
            bModifiedResources = true;
         }
         // process datatypes................................................//
         if( dat.SAPVB.DataTypes )
         {
            // load the datatype provider....................................//
            if( !this.m_VBIContext.m_DataTypeProvider )
    	         this.m_VBIContext.m_DataTypeProvider = new VBI.DataTypeProvider();

    	      this.m_VBIContext.m_DataTypeProvider.load( dat.SAPVB.DataTypes, this.m_VBIContext );
            bModifiedDataTypes = true;
         }
         // process datacontext..............................................//
         if( dat.SAPVB.Data )
         {
            // load the datacontext..........................................//
            // when the datacontext is loaded, provide the datatype info.....//
            if( !this.m_VBIContext.m_DataProvider )
               this.m_VBIContext.m_DataProvider = new VBI.DataProvider();

            this.m_VBIContext.m_DataProvider.load( dat.SAPVB.Data, this.m_VBIContext );
            bModifiedData = true;
         }
         // process mapproviders.............................................//
         if( dat.SAPVB.MapProviders )
         {
            // load the mapproviders.........................................//
            if( !this.m_VBIContext.m_MapProviders )
               this.m_VBIContext.m_MapProviders = new VBI.MapProviders();

            this.m_VBIContext.m_MapProviders.load( dat.SAPVB.MapProviders, this.m_VBIContext );
            bModifiedMapProviders = true;
         }
         // process maplayerstacks...........................................//
         if( dat.SAPVB.MapLayerStacks )
         {
            // load the mapproviders.........................................//
            if( !this.m_VBIContext.m_MapLayerStackManager )
               this.m_VBIContext.m_MapLayerStackManager = new VBI.MapLayerStackManager( this.m_VBIContext );

            this.m_VBIContext.m_MapLayerStackManager.load( dat.SAPVB.MapLayerStacks, this.m_VBIContext );
            bModifiedMapLayerStacks = true;
         }
         // process scenes...................................................//
         if( dat.SAPVB.Scenes )
         {
            if( !this.m_VBIContext.m_SceneManager )
               this.m_VBIContext.m_SceneManager = new VBI.SceneManager();
            this.m_VBIContext.m_SceneManager.load( dat.SAPVB.Scenes, this.m_VBIContext );
            bModifiedScenes = true;
         }
         // process windows..................................................//
         if( dat.SAPVB.Windows )
         {
            if( !this.m_VBIContext.m_Windows )
               this.m_VBIContext.m_Windows = new VBI.Windows();
            this.m_VBIContext.m_Windows.load( dat.SAPVB.Windows, this.m_VBIContext );
            bModifiedWindows = true;
         }
         // process actions..................................................//
         if( dat.SAPVB.Actions )
         {
            if( !this.m_VBIContext.m_Actions )
               this.m_VBIContext.m_Actions = new VBI.Actions();
            this.m_VBIContext.m_Actions.load( dat.SAPVB.Actions, this.m_VBIContext );
            bModifiedActions = true;
         }
      }

      // notify framework about data modifications...........................//
      if( bModifiedData )
         if( this.m_VBIContext.m_Windows )
            this.m_VBIContext.m_Windows.NotifyDataChange();

      // control context is loaded
      if( bModifiedScenes )
      {
         if( this.m_VBIContext.m_Windows )
            this.m_VBIContext.m_Windows.Awake( l_vbiId );
      }

      if( bModifiedScenes || bModifiedData )
         if( this.m_VBIContext.m_Windows )
            this.m_VBIContext.m_Windows.Render();
   }
};


// high level function interface implementation..............................//
// interface function implementation.........................................//

sap.ui.vbm.VBI.prototype.load = function( dat )
{
   // when the control is not yet rendered, queue the load calls.............//
   if( !this.IsRendered() )
   {
      // create the queue and push load requests.............................//
      if( !this.m_aLoadQueue ) this.m_aLoadQueue = [];
      this.m_aLoadQueue.push( dat );
      return;
   }  

   // do processing when running as a plugin.................................//
   if( this.getPlugin() )
      return this.loadNative( dat );
   else
      return this.loadHtml( dat );
};

//...........................................................................//
// low level interface implementation........................................//

sap.ui.vbm.VBI.prototype.zoomToGeoPosition = function( lon, lat, lod )
{
   // the project must be loaded already
   var scene = null;
   if( scene = this.m_VBIContext.GetMainScene() ){
   	if( jQuery.type( lon ) == 'array' && jQuery.type( lat ) == 'array' ){
   		if ( lon.length > 1 && lat.length > 1 )
   			scene.ZoomToMultiplePositions( lon, lat );
   		else
   			scene.ZoomToGeoPosition( VBI.MathLib.DegToRad( [ parseFloat( lon[0] ), parseFloat( lat[0] ) ] ), parseInt( lod ) );
   	}
   	else
   		scene.ZoomToGeoPosition( VBI.MathLib.DegToRad( [ parseFloat( lon ), parseFloat( lat ) ] ), parseInt( lod ) );
   }
};

//...........................................................................//
// once VBI control is rendered, we attach navigation bar and map it self....//

sap.ui.vbm.VBI.prototype.onAfterRendering = function()
{
   // process the load queue.................................................//
   if( this.m_aLoadQueue )
   {
      var nJ;
      for( nJ = 0; nJ < this.m_aLoadQueue.length; ++nJ )
         this.load( this.m_aLoadQueue[ nJ ] );
      this.m_aLoadQueue = null;
   }

   // do a new adjust of DOM placed elements.................................//
   // the function should do nothing if nothing needs to be done.............//
   var l_vbiId = this.getId();
   if( this.m_VBIContext.m_Windows )
      this.m_VBIContext.m_Windows.Awake( l_vbiId );
};

sap.ui.vbm.VBI.prototype.onBeforeRendering = function()
{
   // this is called before the renderer is called...........................//
};


//...........................................................................//
// diagnostics...............................................................//

sap.ui.vbm.VBI.prototype.IsRendered = function()
{
   return this.getDomRef() ? true : false;
};

//...........................................................................//
// re implement property setters.............................................//

sap.ui.vbm.VBI.prototype.setConfig = function( config )
{
   // just call the load function............................................//
   // this will execute once and discard the config..........................//
   return this.load( config );
};


}; // end of sap/ui/vbm/VBI.js
