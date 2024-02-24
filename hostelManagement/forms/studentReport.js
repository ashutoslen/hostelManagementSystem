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
		
}
