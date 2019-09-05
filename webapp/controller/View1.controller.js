sap.ui.define(
[
	"sap/ui/core/mvc/Controller",
	"sap/m/StandardListItem"
], 
function (Controller, ListItem) {
	"use strict";

	return Controller.extend("ovly.logica.controller.View1", {
		onInit: function () {
		
		}, // VIRGULA
		
		onPress: function(oControlEvent){
			
			// @type sap.m.Button
			var oSource = oControlEvent.getSource();
			var sButtonText = oSource.getText();
			console.log(sButtonText);
			
			var sButtonType = oSource.getType();
			alert(sButtonType);
		}, // VIRGULA
		
		onChangeSwitch: function(oEvent){
			// var bState = oEvent.getSource().getState();
			var bState = oEvent.getParameters().state;
			var oButton = this.byId("btn_a"); // byId do Controller
			//var oButton = this.getView().byId("btn_a"); // byId da View
			
			oButton.setEnabled(bState);
			
		},
		
		onAdd: function(oEvent){
			// @type sap.m.List
			var oList = this.byId("list");
			var oInput = this.byId("name");
			var sValue = oInput.getValue();
			
			var oNewItem = new ListItem( { 
				title: sValue,
				icon: "sap-icon://doctor"
			} );
			// oNewItem.setTitle( sValue );
			
			oList.addItem(oNewItem);
			
		},
		
		onDelete: function(){
			// @type sap.m.List
			var oList = this.byId("list");
			oList.removeAllItems();
		}
		
	});
}
);