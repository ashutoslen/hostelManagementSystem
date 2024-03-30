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
