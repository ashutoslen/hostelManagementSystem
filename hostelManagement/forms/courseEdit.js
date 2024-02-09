/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"DCAC60D4-8283-44B1-B783-4FACE883A4FC"}
 */
function updateCourse(event) {
	
	databaseManager.saveData(foundset.getSelectedRecord());
	
	plugins.dialogs.showInfoDialog('Success','Course has been successfully Edited !!.');
	

}
