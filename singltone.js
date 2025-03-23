
class Customer {
    constructor(phone, firstName, lastName, street, city, apartment, floor, totalPrice) {
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this.street = street;
        this.city = city;
        this.apartment = apartment;
        this.floor = floor;
        this.totalPrice = totalPrice;
        this.store = FalafelStore.getInstance(); // קריאה לפונקציה הסטטית של FalafelStore
    }

    static parseCustomer(customerInfo) {
        var customertabel= getCustomersDb();
        for (i=0; i<customertabel.length;i++){
            var customertemp = customertabel[i];
        const phone = customertemp[0];
        const firstName = customertemp[1];
        const lastName = customertemp[2];
        const street = customertemp[3];
        const city = customertemp[4];
        const apartment = customertemp[5];
        const floor = customertemp[6];
        const totalPrice =customertemp[7];
        return new Customer(phone, firstName, lastName, street, city, apartment, floor, totalPrice);
        }
    }

    static getCustomersList(customersData) {
        const customers = [];
        const customersArray = customersData.split("}");
        for (const customerInfo of customersArray) {
            const customer = Customer.parseCustomer(customerInfo);
            customers.push(customer);
        }
        return customers;
    }
}

class FalafelStore {
    constructor() {
        this.name = "פלאפל תימני";
        this.location = "קריית מוצקין";
    }

    static getInstance() {
        if (!FalafelStore.instance) {
            FalafelStore.instance = new FalafelStore();
        }
        return FalafelStore.instance;
    }

    updateStoreDetails(name, location) {
        this.name = name;
        this.location = location;
    }

    getName() {
        return this.name;
    }

    getLocation() {
        return this.location;
    }
}
