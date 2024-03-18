/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7CBFE719-5C68-4B18-9EEE-E20A0D88CAF1"}
 */
var html = ""
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FC17AF55-A395-4ED4-8769-DBEC4CA44AD0"}
 */
function onShow(firstShow, event) {
		
	var context = { foundset: foundset};
	html = plugins.VelocityReport.renderTemplate("studentReportTemplate.html", context);
	elements.label_bookedRoom.text = html;
		
	
	// Set the default parameters for reports in a JavaScript parameter object, can be overridden individually:
	// set the default date format and number format for all reports:
	//var parameters = { dateFormat: "yyyy-MM-dd", numberFormat: "#.00" , timeFormat:"HH:MM:SS" };
	//plugins.VelocityReport.setDefaultReportParameters(parameters);
}

 /**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"2A8AB849-E133-4BE8-9A49-449F94CAB201"}
 */
function printReport(event, dataTarget) {
	// TODO Auto-generated method stub
	var context = { foundset: foundset};
	plugins.VelocityReport.printReport("studentReportTemplate.html", context);
 
}
 