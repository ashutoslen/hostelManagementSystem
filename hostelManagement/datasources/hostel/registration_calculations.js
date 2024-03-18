/**
 * @properties={type:12,typeid:36,uuid:"3B6C15F0-8C1B-4F62-B3F6-46B0B08FC0C3"}
 */
function clc_full_name()
{
	return first_name + ' ' +  middle_name + ' ' + last_name;
}

/**
 * @properties={type:4,typeid:36,uuid:"8C122A26-60B7-48A3-98BE-5EFB8C684718"}
 */
function clc_total_fee()
{
	return clc_hostel_fee + clc_food_fee;
}

/**
 * @properties={type:4,typeid:36,uuid:"657A49FA-6F70-4134-BB6B-1327CFCC1AD2"}
 */
function clc_food_fee()
{
	if(food_status == 0)
		return 0;
	else
		return 2000 * duration;
}

/**
 * @properties={type:4,typeid:36,uuid:"60B1D451-830A-408D-A85B-89FA7501F046"}
 */
function clc_hostel_fee()
{
	return feespm * duration;
}

/**
 * @properties={type:12,typeid:36,uuid:"762B9E88-6652-48A9-ACB0-E0B3E7B3EB26"}
 */
function clc_duration()
{
	if(duration == 1)
		return duration.toString() + ' Month';
	else
		return duration.toString() + ' Months';
}

/**
 * @properties={type:12,typeid:36,uuid:"69163A6B-260E-4A4C-B23D-765F08D3416F"}
 */
function clc_stay_from()
{
	return utils.dateFormat(stay_from, 'yyyy-MM-dd' )
}

/**
 * @properties={type:12,typeid:36,uuid:"38226742-48A6-46AF-8B5B-BDD32D4FE9A9"}
 */
function clc_posting_date()
{
	return utils.dateFormat(posting_date, 'yyyy-MM-dd HH:mm:ss' )
}

/**
 * @properties={type:12,typeid:36,uuid:"37255DDC-B469-4C34-A5B9-CDFDB1F94444"}
 */
function clc_food_status()
{
	if(food_status == 0)
		return "Without Food";
	else
		return "With Food";
	
	
}
