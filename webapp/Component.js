
sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model//JSONModel",
  "sap/ui/Device"
], function (UIComponent, JSONModel, Device) {
  "use strict";

  return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
    metadata: {
      manifest: ""
    },

    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // set data model
      var oData = {
        recipient: {
          name: "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);

      // set device model
      var oDeviceModel = new JSONModel(Device);
      oDeviceModel.setDefaultBindingMode("OneWay");
      this.setModel(oDeviceModel, "device");
    }
  });
});
  