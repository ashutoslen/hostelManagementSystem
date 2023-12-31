
/**
 * @param {String} menuItemId
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"8D3EB501-1445-45BA-8F03-D98A73950F96"}
 */
function onMenuItemSelectedHandler(menuItemId, event) {
	
	if(menuItemId == "User Admin"){
		forms.adminLogin.controller.show();
	}
	//return _super.onMenuItemSelectedHandler(menuItemId, event)
}
