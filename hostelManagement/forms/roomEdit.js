
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"35553CE1-DED1-4DEE-B7FD-117ECDE4E8B0"}
 */
function createRoom(event) {
	
	databaseManager.saveData(foundset.getSelectedRecord());
	
	plugins.dialogs.showInfoDialog('Success','Course has been successfully Edited !!.');
}
