export class UserModel {
    constructor(
    public id: number,
    public user: string,
    public password: string,
    public activae: boolean
) { }
}