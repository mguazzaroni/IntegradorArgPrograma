export class Education {
    id?: number;
    title: string;
    institution: string;
    description: string;
    startDate: string;
    endDate: string;

    constructor(title: string, institution: string, description: string, startDate: string, endDate: string){
        this.title = title;
        this.institution = institution;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
