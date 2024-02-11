/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9980C72E-E00A-49D6-867E-76C89EC15F34",variableType:4}
 */
var duration = null;

/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1058E450-D66B-4426-9D1D-4794F156EBB9",variableType:93}
 */
var stayFrom = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48A6EC81-C35A-4083-81E9-8004A6545E97",variableType:4}
 */
var foodStatus = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A13BE89A-ACA3-4C48-B031-75D40F36F2F1",variableType:4}
 */
var feespm = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F268A2DA-5C39-4682-AA2B-353DBB5850B8",variableType:4}
 */
var seater = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0012C06C-2A9D-4790-AE26-331B3FF59C51",variableType:4}
 */
var roomno = null;


/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"4EC09721-B762-472C-84EE-27D5D2F652BF"}
 */
function onDataChangeRoomNo(oldValue, newValue, event) {
	
	scopes.globals.roomNo = newValue;
	
	if(utils.hasRecords(g_selected_room)){
		
		seater = g_selected_room.seater;
		feespm = g_selected_room.fees;
		
	}
	
	
	
	
	// TODO Auto-generated method stub
	return true
}
