/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA06F70D-D280-425D-8B03-D0428E86A5A4"}
 */
var userEmail = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9764FD5F-23C6-4124-9157-82422CD11780"}
 */
var userContactNo = null;

/**
 * This is the method for the Forgot Password
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"87822D38-62E3-4CF1-BFCF-6F863508FFEA"}
 * @AllowToRunInFind
 */
function forgotPassword(event) {
	
	if(!userEmail || !userContactNo){
		
		plugins.dialogs.showWarningDialog('Invalid Credentials','Please enter valid credentials !!');
		userEmail = null;
		userContactNo = null;
		return;
		
	}
	
	/** @type {JSFoundset<db:/hostel/userregistration>} */
	var userFS = databaseManager.getFoundSet('hostel','userregistration');
	userFS.loadAllRecords();
	
	if(userFS.find()){
		
		userFS.email = userEmail;
		userFS.contact_no = userContactNo;
		
		userFS.search();
	}
	
	if(userFS.getSize()){
		elements.label_password.visible = true;
		elements.label_password.text = " The Password is : " + userFS.password;
	}
	else{
		elements.label_password.visible = false;
		
		plugins.dialogs.showWarningDialog('Invalid Credentials','Please enter valid credentials !!');
		userEmail = null;
		userContactNo = null;
		return;
		
		
	}

}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"B861CFFE-2E9A-4A8F-BA8B-9F37A97F5A66"}
 */
function showLoginUserPage(event, dataTarget) {
	
	forms.homePage.elements.tabpanel_homePage.tabIndex = 1;

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E77F2630-8934-4F60-9829-957F7F105608"}
 */
function clearVars(firstShow, event) {
	
	userEmail = null;
	userContactNo = null;
	
	elements.label_password.visible = false;
	
}
