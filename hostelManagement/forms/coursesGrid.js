/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA32F498-F940-47E4-9578-C9DACB4E5626"}
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
 * @properties={typeid:24,uuid:"6D4EE35C-F5BE-4788-9F5B-D3A823E4615B"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	// TODO Auto-generated method stub
	
	if(columnindex == 4){
		application.output('Edit Icon Clicked...');
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
 * @properties={typeid:24,uuid:"3FF29294-7AA1-4ABA-8374-2ED4BC035D17"}
 * @AllowToRunInFind
 */
function onDataChangeSearch(oldValue, newValue, event) {
	
	//foundset.loadAllRecords();
		
	if(foundset.find()){
		
		foundset.course_code = '#%' + newValue + '%';
		foundset.newRecord();
		foundset.course_sn = '#%' + newValue + '%';
		foundset.newRecord();
		foundset.course_fn = '#%' + newValue + '%';
		
		
		foundset.search();
	}
	
	return null;
	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"3BC5DB7E-3A9A-43EA-9F6D-2D8F53B70BAE"}
 * @AllowToRunInFind
 */
function onkey(event){
	
	if(foundset.find()){
		
		foundset.course_code = '#%' + searchText + '%';
		foundset.newRecord();
		foundset.course_sn = '#%' + searchText + '%';
		foundset.newRecord();
		foundset.course_fn = '#%' + searchText + '%';
		
		
		foundset.search();
	}
	
	
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4506B645-2DCB-41A9-8F31-D77971599816"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	
	
	
	searchText = null;
	foundset.loadAllRecords();
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B1735037-5C08-4FC0-881F-84AC8D50979C"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	
	plugins.keyListener.addKeyListener('searchKeyListener', onkey);
}

/**
 * Callback method when form is destroyed.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"000DE757-C160-49E3-B0AB-FC78BB8C0DE4"}
 * @AllowToRunInFind
 */
function onUnload(event) {
	// TODO Auto-generated method stub
	plugins.keyListener.removeKeyListener('searchKeyListener')
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"80FF3846-9411-4496-8BAD-A20832986092"}
 */
function onAction(event) {
	// TODO Auto-generated method stub
	onkey(event);

}
