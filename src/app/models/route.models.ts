export class RouteModel {
    constructor(
    public id: number,
    public  description: string,
    public  driver_id: number,
    public  vehicle_id: number,   
    public  active: boolean,
    
) { }
}