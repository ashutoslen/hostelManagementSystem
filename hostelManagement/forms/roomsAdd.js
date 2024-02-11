/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BD2AD967-3ABD-4D3E-8B63-816F9E99A346",variableType:4}
 */
var Fee = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"06BBAE57-C342-4C9A-B291-C6EDC9216344",variableType:4}
 */
var roomNumber = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DC95706C-FE17-4563-9C79-36290789094C",variableType:4}
 */
var roomSeater = null;


/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"796E3B77-B672-480A-A181-5A5EE2D317EB"}
 */
function createRoom(event) {
	
	var validationMessage = null;
	
	if(!roomSeater){
		
		validationMessage = 'Room Seater cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
		
	}
	
	if(!roomNumber){
		
		validationMessage = 'Room Number cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
		
	}
	
	if(!Fee){
		
		validationMessage = 'Fees cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
		
	}
	
	
	/** @type {JSFoundset<db:/hostel/rooms>} */
	var roomsFS = databaseManager.getFoundSet('hostel','rooms');
	roomsFS.loadAllRecords();
	
	roomsFS.newRecord();
	
	roomsFS.seater = roomSeater;
	roomsFS.room_no = roomNumber;
	roomsFS.fees = Fee;
	roomsFS.posting_date = new Date();
		
	databaseManager.saveData(roomsFS.getSelectedRecord());
	
	plugins.dialogs.showInfoDialog('Success','Room has been successfully created !!.');
	
	
	roomSeater = null;
	roomNumber = null;
	Fee = null;

}
