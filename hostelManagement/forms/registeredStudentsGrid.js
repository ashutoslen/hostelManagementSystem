/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"364974DA-4256-4F75-983D-5C4C6C6FD611"}
 */
var searchText = null;

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"B3314B4A-8E53-4BDA-BDB2-8D604DD62BBD"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	
	if(columnindex == 6){
		
		application.output('Edit Icon Clicked...');
		forms.dashboard.elements.tabpanel_admin.tabIndex = 9;
	}
	else if(columnindex == 7){
		//show dialog/
		var thePressedButton = plugins.dialogs.showQuestionDialog('Delete', 'Are you sure you want to delete the Registered Student ?', 'OK', 'Cancel');
		
		if(thePressedButton == 'OK'){
			foundset.deleteRecord();
		}
	}

}

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
 * @properties={typeid:24,uuid:"8BF10FE3-EDAC-4A92-9A6D-DA56269862E3"}
 * @AllowToRunInFind
 */
function onDataChangeSearch(oldValue, newValue, event) {
	
	//foundset.loadAllRecords();
		
	if(foundset.find()){
		
		foundset.first_name = '#%' + newValue + '%';
		foundset.newRecord();
		foundset.regno = '#%' + newValue + '%';
		foundset.newRecord();
		foundset.contactno = '#%' + newValue + '%';
		foundset.newRecord();
		foundset.roomno = newValue;
		foundset.newRecord();
		foundset.seater = newValue;
		
		
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
 * @properties={typeid:24,uuid:"44E3EBD6-9B0C-4033-9F35-A9F935D116DC"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	
	
	
	searchText = null;
	foundset.loadAllRecords();
}
