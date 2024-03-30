/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC541342-781C-400E-8252-5DB98E06C798"}
 */
var searchText = null;

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
 * @properties={typeid:24,uuid:"E2B2BAA9-2156-429A-AD7F-88894C1BEFBA"}
 * @AllowToRunInFind
 */
function onDataChangeSearch(oldValue, newValue, event) {
	
	//foundset.loadAllRecords();
		
	if(foundset.find()){
		
		foundset.admin_email = '#%' + newValue + '%';
		
		foundset.search();
	}
	
	return null;
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4BE9A5A9-B495-4812-BC01-0D36D31610B7"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	
	
	
	searchText = null;
	foundset.loadAllRecords();
}
