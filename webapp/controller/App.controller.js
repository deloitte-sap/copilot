
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model//JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            // Set up initial model
            var oData = {
                messages: []
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onInputChange: function (oEvent) {
            // Handle input change event if needed
        },

        onSend: function () {
            var oView = this.getView();
            var oModel = oView.getModel();
            var aMessages = oModel.getProperty("/messages");

            var sInputValue = oView.byId("chatInput").getValue();
            if (sInputValue) {
                aMessages.push({
                    sender: "User",
                    message: sInputValue
                });

                // Clear the input field
                oView.byId("chatInput").setValue("");

                // Update the model with new message
                oModel.setProperty("/messages", aMessages);

                // Simulate a response from the digital assistant
                setTimeout(function () {
                    aMessages.push({
                        sender: "Assistant",
                        message: "This is a simulated response."
                    });
                    oModel.setProperty("/messages", aMessages);
                }, 1000);
            }
        }
    });
});
