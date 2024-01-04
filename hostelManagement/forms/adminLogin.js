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
 */
function adminLogin(event) {
	
	if(!adminUsername || !adminPassword){
		
		plugins.dialogs.showWarningDialog('Invalid Credentials','Please enter valid credentials !!');
		return;
		
	}
	
	if(adminUsername == 'admin' && adminPassword == 'Test@1234'){
		forms.dashboard.controller.show();
	}
	else{
		plugins.dialogs.showWarningDialog('Invalid Credentials','Please enter valid credentials !!');
		return;
	}

}
