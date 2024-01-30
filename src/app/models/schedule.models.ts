export class ScheduleModel {
    constructor(
    public id: number,
    public  route_id: number,
    public  week_num: number,
    public  from: string,   
    public  to: string,   
    public  active: boolean,
    
) { }
}