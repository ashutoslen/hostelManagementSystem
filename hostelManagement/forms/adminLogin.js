/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"452CCB7C-225D-42A2-A914-1D0CC051B6E4"}
 */
var adminPassword = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C03AF9D-D09D-4600-B349-A9EC8E199F59"}
 */
var adminUsername = null;


/**
 * This is the method for the Admin Login
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"10F8DBB4-EE07-4D67-8173-E0ACD476C253"}
 * @AllowToRunInFind
 */
function adminLogin(event) {
	
	if(!adminUsername || !adminPassword){
		
		plugins.dialogs.showWarningDialog('Invalid Credentials','Please enter valid credentials !!');
		adminUsername = null;
		adminPassword = null;
		return;
		
	}
	
	/** @type {JSFoundset<db:/hostel/admin>} */
	var adminFS = databaseManager.getFoundSet('hostel','admin');
	adminFS.loadAllRecords();
	
	if(adminFS.find()){
		adminFS.username = "admin";
		adminFS.search();
	}
	
	if((adminUsername == adminFS.username || adminUsername === adminFS.email) && adminPassword == adminFS.password){
		security.login(adminUsername,adminFS.email,['Administrators'])
	}
	else{
		plugins.dialogs.showWarningDialog('Invalid Credentials','Please enter valid credentials !!');
		adminUsername = null;
		adminPassword = null;
		return;
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"89CBE7D2-49FF-454B-8479-02F32FFE6381"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	adminUsername = null;
	adminPassword = null;
	
}
