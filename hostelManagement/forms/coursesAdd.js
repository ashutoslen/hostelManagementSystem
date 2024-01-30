/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BECE81B7-50D9-4EBB-9A25-9DD238130BD1"}
 */
var courseCode = null;
/**
 *  @type {String}
 * 
 * @properties={typeid:35,uuid:"30E87806-2831-4201-98B7-4BA7EAFBFB9D"}
 */
var courseNameShort = null;
/**
 *  @type {String}
 * 
 * 
 * @properties={typeid:35,uuid:"E900D4FD-05B9-4428-B26E-D8271B227BE1"}
 */
var courseNameLong = null;

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"22940221-9719-4041-B168-673995F22159"}
 */
function addCourse(event) {
	
	var validationMessage = null;
	
	if(!courseCode){
		
		validationMessage = 'Course Code cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
		
	}
	
	if(!courseNameShort){
		
		validationMessage = 'Course Name Short cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
		
	}
	
	if(!courseNameLong){
		
		validationMessage = 'Course Name Long cannot be Null..';
		plugins.dialogs.showWarningDialog('Invalid Entry',validationMessage);
		return;
		
	}
	
	
	/** @type {JSFoundset<db:/hostel/courses>} */
	var coursesFS = databaseManager.getFoundSet('hostel','courses');
	coursesFS.loadAllRecords();
	
	coursesFS.newRecord();
	
	coursesFS.course_code = courseCode;
	coursesFS.course_sn = courseNameShort;
	coursesFS.course_fn = courseNameLong;
	coursesFS.posting_date = new Date();
		
	databaseManager.saveData(coursesFS.getSelectedRecord());
	
	plugins.dialogs.showInfoDialog('Success','Course has been successfully created !!.');
	
	
	courseCode = null;
	courseNameShort = null;
	courseNameLong = null;

}
