
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35E06830-D836-4B5B-B671-DE178026068F"}
 */
function onLoad(event) {
	
	if(security.getUserName() == "admin"){
		elements.tabpanel_dashboard.tabIndex = 1;
	}
	else{
		elements.tabpanel_dashboard.tabIndex = 2;
	}
}
