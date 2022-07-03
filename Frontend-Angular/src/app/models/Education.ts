export class Education{
    id?: Number;
    title: String;
    description: String;
    startDate: String;
    endDate: String;

    constructor(title: String, description: String, startDate: String, endDate: String){
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}