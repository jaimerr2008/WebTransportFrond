export class DriverModel {
    constructor(
    public id: number,
    public  last_name: string,
    public  first_name: string,
    public  ssn: string,
    public  dob: string,
    public  address: string,
    public  city: string,
    public  zip: string,
    public  phone: string,
    public  active: boolean,
) { }
}