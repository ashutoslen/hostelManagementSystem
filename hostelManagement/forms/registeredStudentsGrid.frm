customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/hostel/registration",
encapsulation:108,
items:[
{
height:480,
partType:5,
typeid:19,
uuid:"158059AD-6F40-4911-8BF1-82369F829BB4"
},
{
cssPosition:"1,7,-1,7,609,52",
json:{
cssPosition:{
bottom:"-1",
height:"52",
left:"7",
right:"7",
top:"1",
width:"609"
},
styleClass:"page-title",
text:"Manage Registered Students"
},
name:"label_6",
styleClass:"page-title",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"44EFFEB5-429F-48EB-9584-4336E894B875"
},
{
cssPosition:"105,179,-1,-1,52,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"179",
top:"105",
width:"52"
},
text:"Search"
},
name:"label_5",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"706AD2A6-496B-43A9-B55D-00B624EEFC0D"
},
{
cssPosition:"105,9,-1,-1,165,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"-1",
right:"9",
top:"105",
width:"165"
},
dataProviderID:"searchText",
onActionMethodID:null,
onDataChangeMethodID:"8BF10FE3-EDAC-4A92-9A6D-DA56269862E3",
onFocusGainedMethodID:null
},
name:"search_box",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"71E36087-3FB6-420D-9969-BE2F82FB08D0"
},
{
cssPosition:"138,5,3,0,853,339",
json:{
columns:[
{
dataprovider:"clc_full_name",
headerStyleClass:"lowercase",
headerTitle:"Student Name",
svyUUID:"A7B1210A-1225-400D-AD94-55AB0CEC31F9"
},
{
dataprovider:"regno",
headerStyleClass:"lowercase",
headerTitle:"Reg No",
svyUUID:"38FEA05F-E252-443E-8B80-5D3831430E6E"
},
{
dataprovider:"contactno",
headerStyleClass:"lowercase",
headerTitle:"Contact no",
styleClassDataprovider:null,
svyUUID:"28CA6A0D-E7AB-41ED-A4CB-E7F5BB0C8D47"
},
{
dataprovider:"roomno",
headerStyleClass:"lowercase",
headerTitle:"room no",
styleClassDataprovider:null,
svyUUID:"96AA1199-EE9F-4C87-A081-DF065CF24373"
},
{
dataprovider:"seater",
headerStyleClass:"lowercase",
headerTitle:"Seater",
styleClassDataprovider:null,
svyUUID:"2A0FB400-0DF4-4314-9DD4-3F58E980F350"
},
{
dataprovider:"stay_from",
format:"yyyy-MM-dd",
headerStyleClass:"lowercase",
headerTitle:"Staying From",
styleClassDataprovider:null,
svyUUID:"ADA635DC-D792-4067-A59D-24FBA3DB4E51"
},
{
headerTitle:"Actions",
id:"course_uuid",
styleClass:"fa fa-desktop",
svyUUID:"6E6399A7-611A-4DA2-87ED-D0A1FBADA044"
},
{
headerTitle:"Actions",
id:"course_uuid_c",
styleClass:"fa fa-close",
svyUUID:"C4AF9051-A6EB-4170-971B-018F646D0F27"
}
],
cssPosition:{
bottom:"3",
height:"339",
left:"0",
right:"5",
top:"138",
width:"853"
},
onCellClick:"B3314B4A-8E53-4BDA-BDB2-8D604DD62BBD",
onSelectedRowsChanged:null,
rowHeight:35,
rowStyleClassDataprovider:"course_code"
},
name:"datagrid_1",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"86EBA609-4516-4452-B8FC-BC889CEBEC9C"
},
{
cssPosition:"56,6,-1,5,847,43",
json:{
cssPosition:{
bottom:"-1",
height:"43",
left:"5",
right:"6",
top:"56",
width:"847"
},
styleClass:"panel-headingCourses",
text:"ALL Room Details"
},
name:"label_7",
styleClass:"panel-headingCourses",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"8F1DF2DF-D374-49A2-926E-DA8D25B86FA9"
}
],
name:"registeredStudentsGrid",
navigatorID:"-1",
onShowMethodID:"44E3EBD6-9B0C-4033-9F35-A9F935D116DC",
scrollbars:36,
showInMenu:true,
size:"858,480",
typeid:3,
uuid:"A384B7A9-E061-4484-9A9A-62B604180A91"