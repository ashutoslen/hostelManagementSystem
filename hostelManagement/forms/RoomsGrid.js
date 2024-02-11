/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"385C9954-6AB2-4079-9DD7-1BF991024FB8"}
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
 * @properties={typeid:24,uuid:"54560921-C3F9-4B7D-B9D0-9D2F6F1A590D"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	
	if(columnindex == 4){
		
		application.output('Edit Icon Clicked...');
		forms.dashboard.elements.tabpanel_admin.tabIndex = 7;
	}
	else if(columnindex == 5){
		//show dialog/
		var thePressedButton = plugins.dialogs.showQuestionDialog('Delete', 'Are you sure you want to delete the Room ?', 'OK', 'Cancel');
		
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
 * @properties={typeid:24,uuid:"C7C76010-6C74-4CB5-AACE-CDE1EB812E6A"}
 * @AllowToRunInFind
 */
function onDataChangeSearch(oldValue, newValue, event) {
	
	//foundset.loadAllRecords();
	
		
	if(foundset.find()){
		
		foundset.seater = newValue;
		foundset.newRecord();
		foundset.room_no = newValue;
		foundset.newRecord();
		foundset.fees = newValue;
		
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
 * @properties={typeid:24,uuid:"F3DF34BE-C4EE-41FB-B48C-4243C8E5A069"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	
	
	
	searchText = null;
	foundset.loadAllRecords();
}
