/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC392BA1-A080-43A9-AD89-34A23F7CFD7A",variableType:4}
 */
var totalStudents = null;
/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"D4A62EBC-52A8-4910-AEE3-D6958EA3C38A",variableType:8}
 */
var totalRooms = null;
/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"B2475760-1F73-41E0-B366-CB2FD4591183",variableType:8}
 */
var totalCourses = null;


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7D7643D8-B776-4D0D-A406-0517910DBECC"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	
	totalStudents = databaseManager.getTableCount(forms.registeredStudentsGrid.foundset);
	application.output(totalStudents);
	
	totalRooms = databaseManager.getTableCount(forms.RoomsGrid.foundset);
	application.output(totalRooms);
	
	totalCourses = databaseManager.getTableCount(forms.coursesGrid.foundset);
	application.output(totalCourses);
	
	
}

/**
 * @properties={typeid:24,uuid:"514105F0-A0DD-47BB-9CA8-D8D773E4EFC8"}
 */
function studentsgo() {
	// TODO Auto-generated method stub
	application.output('students go');
	forms.dashboard.elements.tabpanel_admin.tabIndex = 10;

}

/**
 * @properties={typeid:24,uuid:"93122588-64D0-4476-817B-1DCA7FFA4E72"}
 */
function roomsgo() {
	// TODO Auto-generated method stub
	application.output('rooms go');
	forms.dashboard.elements.tabpanel_admin.tabIndex = 6;
}
/**
 * @properties={typeid:24,uuid:"9ECADFA4-8948-462F-811B-4706FC97554E"}
 */
function coursesgo() {
	// TODO Auto-generated method stub
	application.output('courses go');
	forms.dashboard.elements.tabpanel_admin.tabIndex = 3;
}
