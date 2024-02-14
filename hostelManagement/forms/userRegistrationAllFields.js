/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D53EA083-659D-4ED4-A587-4031626C1BF1",variableType:4}
 */
var corresPermanentSame = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ED3362A7-90F1-44C3-AB6B-6A3B727DB47D",variableType:4}
 */
var corressPin = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5653230A-6FF7-41FC-8453-92F509F48AF6"}
 */
var corressState = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C36D22B7-3005-4A43-B212-CD94114838C3"}
 */
var corressCity = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D97A8DD4-25A6-41E7-906D-24B5E6702F22"}
 */
var corressAddress = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3CA789C7-37D9-4D5A-BAE9-C0D74F4CDA46",variableType:4}
 */
var guardianContactNo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7912A815-5A21-46A8-AE62-A2BAA4C5D5B7"}
 */
var guardianRelation = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"765A85EC-7EBB-49CB-8DA8-DE2409944E6E"}
 */
var guardianName = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"32D1D1A8-1FA3-4B6D-BD84-28B4053C86D5",variableType:4}
 */
var emergencyContact = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B0E73B2-23A2-45D4-B6AE-E4D6B9660D75"}
 */
var emailId = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D2CEE280-6955-42F2-A520-6034B3874041",variableType:4}
 */
var contactNo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AF6B7B20-C0EA-46AC-9358-6BFCC8B73C89"}
 */
var gender = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EB37DDA6-E82D-414E-BEC0-6EAA7A2CF72B"}
 */
var lastName = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C3308FAB-3767-410E-A112-BDD7D52A6BB3"}
 */
var middleName = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9D4FA75D-B524-4C88-BC1D-520F2994418E"}
 */
var firstName = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"910582C2-F511-41C0-A298-2EA8D7657FA4",variableType:4}
 */
var regno = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7AF034D7-9796-4E2A-95CE-C8D734457279"}
 */
var course = null;

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
