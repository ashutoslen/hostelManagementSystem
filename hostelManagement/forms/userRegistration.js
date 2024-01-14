/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BD2F6C6C-C739-4DA8-8BC5-692D76107FEC"}
 */
var registrationNumber = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"2041CA8B-82A0-4CD5-8356-5CAD73F61DBD"}
 */
var firstName = null;
/**
 * 
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"03212A07-D0A9-4C64-B4AE-3996C4A3225D"}
 */
var middleName = null;
/**
 * 
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"CC361736-2F3D-4B98-AECF-CE91ABCE0386"}
 */
var lastName = null;
/**
 * 
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"B0A899F6-9039-46BD-B8E5-C0EAC404C72D"}
 */
var gender = null;

/**
 * 
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"B6F6461C-9A02-46B7-8E54-0E13907F376B"}
 */
var contactNo = null;

/**
 * 
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"9194AA72-EA73-41FD-9CA1-4F2C8377D94F"}
 */
var emailId = null;

/**
 * @properties={typeid:35,uuid:"ECE06AEE-08DB-4114-A9EA-9226CF0BA2F2",variableType:-4}
 */
var password = null;
/**
 * @properties={typeid:35,uuid:"FFC26A6A-2D8C-4156-8472-99EA26531FAE",variableType:-4}
 */
var confirmPassword = null;
/**
 * This method registers an user.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3F5E003F-BE51-4CEC-A5E2-139EF3DAC670"}
 * @AllowToRunInFind
 */
function registerUser(event) {
	
	
	var validationMessage = null;
	
	if(!registrationNumber){
		
		validationMessage = 'Registration Number cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
		
	}
	
	if(!firstName){
		validationMessage = 'First Name cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	if(!lastName){
		validationMessage = 'Last Name cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	if(!gender){
		validationMessage = 'Gender cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	if(!contactNo){
		validationMessage = 'Contact No cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	if(!emailId){
		validationMessage = 'Email Id cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	var regEmail=/^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/;	
	var patt=new RegExp(regEmail);
	if(patt.test(emailId)==false){
		validationMessage = 'Email Id is not valid..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	if(!password){
		validationMessage = 'Password cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	if(!confirmPassword){
		validationMessage = 'Confirm Password cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	if(password != confirmPassword){
		validationMessage = 'Password do not matches Confirm Password..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
	}
	
	/** @type {JSFoundset<db:/hostel/userregistration>} */
	var userFS = databaseManager.getFoundSet('hostel','userregistration');
	userFS.loadAllRecords();
	
	userFS.newRecord();
	
	userFS.reg_no = registrationNumber;
	userFS.first_name = firstName;
	userFS.middle_name = middleName;
	userFS.last_name = lastName;
	userFS.gender = gender;
	userFS.contact_no = contactNo;
	userFS.email = emailId;
	userFS.password = password;
	userFS.reg_date = new Date();
	userFS.update_date = new Date();
		
	databaseManager.saveData(userFS.getSelectedRecord());
	
	plugins.dialogs.showInfoDialog('Success','Student has been successfully created !!.');
	
	onActionReset(event);

}

/**
 * Reset all the variables.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"99121EEB-E4F8-4409-A1E5-53546F09DA7A"}
 */
function onActionReset(event) {
	
	registrationNumber = null;
	firstName = null;
	middleName = null;
	lastName = null;
	gender = null;
	contactNo = null;
	emailId = null;
	password = null;
	confirmPassword = null;
}
