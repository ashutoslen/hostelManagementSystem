/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"8FA499DE-F93D-4EB5-8557-1EDCF219C20F"}
 */
var userPassword = null;

/**
 * @type {String}
 * 
 * 
 * @properties={typeid:35,uuid:"DA4A2BE9-E419-42C3-A579-ED4327054AE2"}
 */
var userUsername = null;
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"130952D5-7C19-4B6B-9DF0-E14C3BC3AD08"}
 * @AllowToRunInFind
 */
function userLogin(event) {
	
	
	if(!userUsername || !userPassword){
		
		plugins.dialogs.showWarningDialog('Invalid Credentials','Please enter valid credentials !!');
		userUsername = null;
		userPassword = null;
		return;
		
	}
	
	/** @type {JSFoundset<db:/hostel/userregistration>} */
	var userFS = databaseManager.getFoundSet('hostel','userregistration');
	userFS.loadAllRecords();
	
	if(userFS.find()){
		
		userFS.email = userUsername;
		userFS.password = userPassword;
		
		userFS.newRecord();
		
		userFS.reg_no = userUsername;
		userFS.password = userPassword;
		
		userFS.search();
	}
	
	if(userFS.getSize()){
		security.login(userFS.first_name,userFS.email,['Administrators'])
	}
	else{
		plugins.dialogs.showWarningDialog('Invalid Credentials','Please enter valid credentials !!');
		userUsername = null;
		userPassword = null;
		return;
	}	

}

/**
 * Click event. dataTarget parameter is used to identify inner html elements (by their data-target attribute).
 *
 * @param {JSEvent} event
 * @param {String} dataTarget
 *
 * @properties={typeid:24,uuid:"24364660-AA03-4B8D-80F3-6764B4CA0FE0"}
 */
function onActionOpenPage(event, dataTarget) {
	
	forms.homePage.elements.tabpanel_homePage.tabIndex = 4;

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D4041E43-EF17-4343-845A-FC6E434498EC"}
 */
function onShow(firstShow, event) {
	userUsername = null;
	userPassword = null;
	
	
}
