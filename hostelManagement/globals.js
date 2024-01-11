/**
 * @properties={typeid:35,uuid:"B1FE2CA7-C06F-49CD-AAF9-99FD845921A3",variableType:-4}
 */
var DEFAULT_NAVBAR_ACTIONS = {
	MYACCOUNT: "navbar-user",
	LOGOUT: "navbar-logout"
};
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>|String>} queryParams all query parameters of the deeplink url with which the Client was started, key>string if there was one value else key>Array<String>
 *
 * @properties={typeid:24,uuid:"BC9A74AF-591C-469A-A417-BBC7E6176533"}
 */
function onSolutionOpen(arg, queryParams) {
	
	
}

/**
 * Called whenever a menu item is clicked or a submenu item is selected with the JSEvent and the menuItem object clicked on.
 *
 * @param {JSEvent} event
 * @param {CustomType<bootstrapextracomponents-navbar.menuItem>} menuItem
 *
 * @properties={typeid:24,uuid:"A14E70AF-BF14-4610-BF58-59B6B6B45228"}
 */
function onMenuItemClicked(event, menuItem) {
	

	var menuItemId = menuItem.itemId;
	
	switch (menuItemId) {
		
		case DEFAULT_NAVBAR_ACTIONS.LOGOUT:
			security.logout();
			break;
		default:
			break;
	}

}
