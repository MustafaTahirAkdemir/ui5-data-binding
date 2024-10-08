sap.ui.define([
    "sap/m/library",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/type/Currency"
],(mobileLibrary, Controller,Currency)=>{
    "use strict";

    return Controller.extend("ui5.databinding.controller.App",{
            formatMail(sFistName, sLastName){
                const oBundle = this.getView().getModel("i18n").getResourceBundle();

                return mobileLibrary.URLHelper.normalizeEmail(
                    `${sFistName}.${sLastName}@example.com`,
                    oBundle.getText("mailSubject", [sFistName]),
                    oBundle.getText("mailBody"));
            },
            formatStockValue(fUnitPrice, iStockLevel,sCurrCode){
                const oCurrency = new Currency();
                return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode],"string");
                
            }
    });
});