export class User{
    id?: Number;
    userName: String;
    userPassword: String;
    
    constructor(userName: String, userPassword: String) {
        this.userName = userName;
        this.userPassword = userPassword;
    }
}