
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9187DAE1-CC80-403D-B7E1-D2DC90A88D53"}
 */
function onLoad(event) {
	
	application.output(security.getUserName());
	
	var menuItems = [];
	/** @type {CustomType<bootstrapextracomponents-navbar.menuItem>} */
	var menuItem;
	
	if (security.getUserName()) {
		menuItem = elements.navbar.createMenuItem(security.getUserName(), null, 'RIGHT');
		menuItem.displayType = 'MENU_ITEM';
		menuItem.iconName = 'fas fa-user';
		menuItem.styleClass = 'no-border';
		var submenuItems = [];
		
		
		var myAccount = elements.navbar.createMenuItem('My Account',  globals.DEFAULT_NAVBAR_ACTIONS.MYACCOUNT);
		//logout.iconName = "fas fa-sign-out-alt";
		submenuItems.push(myAccount);
		menuItem.subMenuItems = submenuItems;
		

		var logout = elements.navbar.createMenuItem('Logout', globals.DEFAULT_NAVBAR_ACTIONS.LOGOUT);
		//logout.iconName = "fas fa-sign-out-alt";
		submenuItems.push(logout);
		menuItem.subMenuItems = submenuItems;
		menuItems.push(menuItem);
	}
	
	elements.navbar.menuItems = menuItems;
	
}
