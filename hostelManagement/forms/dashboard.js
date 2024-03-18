
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
	
	var menu = [{
	    id: 1,
	    text: "Dashboard",
	    styleClass : "sn-large",
	    iconStyleClass:  "fa fa-dashboard",
		enabled: true
	    //data: { description: "This is sample information that can be added to a menuItem" },
//	    menuItems: [{
//	  	  id: 5,
//	  	  text: "Sub Item #1"
//	  	}, {
//	  	  id: 6,
//	  	  text: "Sub Item #2"}]
	  }, {
	    id: 2,
	    text: "Courses",
		iconStyleClass:  "fa fa-file",
	    menuItems: [{
	  	  id: 7,
	  	  text: "Add Courses",
		  enabled: true
		  
	  	}, {
	  	  id: 8,
	  	  text: "Manage Courses",
		  enabled: true}]
		
	  },{
	   // isDivider: true
	  },{
	    id: 3,
	    text: "Rooms",
	    enabled: true,
		iconStyleClass:  "fa fa-desktop",
		menuItems: [{
		  	  id: 9,
		  	  text: "Add Rooms",
			  enabled: true
		  	}, {
		  	  id: 10,
		  	  text: "Manage Rooms",
			  enabled: true}]
	},
	{
		 	id: 4,
		    text: "Student Registration",
		    styleClass : "sn-large",
		    iconStyleClass:  "fa fa-user",
			enabled: true
	},
	{
	 	id: 5,
	    text: "Manage Students",
	    styleClass : "sn-large",
	    iconStyleClass:  "fa fa-users",
		enabled: true
	},
	{
	 	id: 6,
	    text: "User Access Logs",
	    styleClass : "sn-large",
	    iconStyleClass:  "fa fa-file",
		enabled: true
	}
	
	];
	
	elements.sidenav.setRootMenuItems(menu);
	
	
	
}


/**
 * TODO generated, please specify type and doc for the params
 * @param id
 * @param event
 *
 * @properties={typeid:24,uuid:"6DFE1454-D4FB-4B0F-9D7B-73DB9855E743"}
 */
function onMenuItemSelectedHandler(id,event){
	
	if(id == 7){
		elements.tabpanel_admin.tabIndex = 2;
	}
	else if(id == 8){
		elements.tabpanel_admin.tabIndex = 3;
	}
	else if(id == 9){
		elements.tabpanel_admin.tabIndex = 5;
	}
	else if(id == 10){
		elements.tabpanel_admin.tabIndex = 6;
	}
	else if(id == 4){
		elements.tabpanel_admin.tabIndex = 8;
	}
	else if(id == 5){
		elements.tabpanel_admin.tabIndex = 10;
	}
	else{
		elements.tabpanel_admin.tabIndex = 1;
	}
}
