export class User {
    userId?: number;
    email?: string;
    fname?: string;
    lname?: string;
    username?: string;
    password?: string;
    phoneNumber?: number;
    streetAddress?: string;
    roleId?: number;
    cityId?: number;
    stateId?: number;
    countryId?: number;

    constructor(userId?: number,
        email?: string,
        fname?: string,
        lname?: string,
        username?: string,
        password?: string,
        phoneNumber?: number,
        streetAddress?: string,
        roleId?: number,
        cityId?: number,
        stateId?: number,
        countryId?: number) {
        this.userId = userId;
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.streetAddress = streetAddress;
        this.roleId = roleId;
        this.cityId = cityId;
        this.stateId = stateId;
        this.countryId = countryId;
    }
}
