function processInfo(phone,firstname, lastName, street, city,
    apartment, floor,totalprice)
    {
        var dbString = stringify(phone,firstname, lastName, street, city,
            apartment, floor,totalprice);

        localStorage.setItem(phone, dbString);

    }


function stringify(phone,firstname, lastName, street, city,
    apartment, floor,totalprice) {

        
    //Customer details
    var phone = 'phone: ' + phone;
    var firstname = 'firstname: ' + firstname;
    var lastName = 'lastName: ' + lastName;
    var street = 'street: ' + street;
    var city = 'city: ' + city;
    var apartment = 'apartment: ' + apartment;
    var floor = 'floor: ' + floor;

    var totalprice = 'totalprice: ' + totalprice;


        //Detail to string
    var dbStr = '{'+ phone + ',' + firstname + ',' + lastName + ','
     + street + ',' + city + ',' + apartment + ',' + floor + ',' + totalprice + '}';
   
    return dbStr;	
}



function getCustomersDb(){
	var Customers = [];	//rows: number of Customer. cols: number of info params
	for (i = 0; i < localStorage.length; i++) {
		var Customerphone = localStorage.key(i);
		var CustomerInfo = localStorage.getItem(Customerphone);
		var tmpCustomer = [];

		tmpCustomer[0] = Customerphone;
		tmpCustomer[1] = getfirstname(CustomerInfo);
		tmpCustomer[2] = getlastname(CustomerInfo);
		tmpCustomer[3] = getstreet(CustomerInfo);
		tmpCustomer[4] = getcity(CustomerInfo);
		tmpCustomer[5] = getapartment(CustomerInfo);
        tmpCustomer[6] = getfloor(CustomerInfo);
        tmpCustomer[7] = gettotalprice(CustomerInfo);

		Customers[i] = tmpCustomer;
	}
	return Customers;
}


function getfirstname(CustomerInfo) {
	var firstindex = CustomerInfo.indexOf('firstname')+11;
	var lastindex = CustomerInfo.indexOf('lastName')-1;
	return 	CustomerInfo.substring(firstindex, lastindex);
}

function getlastname(CustomerInfo) {
	var firstindex = CustomerInfo.indexOf('lastname')+10;
	var lastindex = CustomerInfo.indexOf('street')-1;
	return 	CustomerInfo.substring(firstindex, lastindex);
}

function getstreet(CustomerInfo) {
	var firstindex = CustomerInfo.indexOf('street')+8;
	var lastindex = CustomerInfo.indexOf('city')-1;
	return 	CustomerInfo.substring(firstindex, lastindex);
}

function getcity(CustomerInfo) {
	var firstindex = CustomerInfo.indexOf('city')+6;
	var lastindex = CustomerInfo.indexOf('apartment')-1;
	return 	CustomerInfo.substring(firstindex, lastindex);
}

function getapartment(CustomerInfo) {
	var firstindex = CustomerInfo.indexOf('apartment')+11;
	var lastindex = CustomerInfo.indexOf('floor')-1;
	return 	CustomerInfo.substring(firstindex, lastindex);
}

function getfloor(CustomerInfo) {
	var firstindex = CustomerInfo.indexOf('floor')+7;
	var lastindex = CustomerInfo.indexOf('totalprice')-1;
	return 	CustomerInfo.substring(firstindex, lastindex);
}

function gettotalprice(CustomerInfo) {
	var firstindex = CustomerInfo.indexOf('totalprice')+12;
	var lastindex = CustomerInfo.indexOf('}');
	return 	CustomerInfo.substring(firstindex, lastindex);
}




