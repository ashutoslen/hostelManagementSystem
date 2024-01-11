
/**
 * @param {String} menuItemId
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"8D3EB501-1445-45BA-8F03-D98A73950F96"}
 */
function onMenuItemSelectedHandler(menuItemId, event) {
	
	if(menuItemId == "User Admin"){
		elements.tabpanel_homePage.tabIndex = 3;
	}
	else if(menuItemId == "User Registration"){
		elements.tabpanel_homePage.tabIndex = 2;
		
	}
	else if(menuItemId == "User Login"){
		elements.tabpanel_homePage.tabIndex = 1;
	}
	//return _super.onMenuItemSelectedHandler(menuItemId, event)
}

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"0CEE6F68-C4A7-4D0B-BA3C-68F2EFB04242"}
 */
function onLoad(event) {
	
	/** @type {JSFoundset<db:/hostel/admin>} */
	var adminFS = databaseManager.getFoundSet('hostel','admin');
	adminFS.loadAllRecords();
	
	if(adminFS.getSize() == 0){
		
		adminFS.newRecord();
		
		adminFS.username = "admin";
		adminFS.email = "anuj.lp1@gmail.com";
		adminFS.password = "Test@1234";
		adminFS.reg_date = new Date();
		adminFS.updation_date = new Date();
		
		databaseManager.saveData(adminFS.getSelectedRecord());
	}
	
	return _super.onLoad(event)
}
