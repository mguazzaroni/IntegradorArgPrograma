export class Experience{
  id?: number;
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;

  constructor(companyName: string, description: string, startDate: string, endDate: string){
    this.companyName = companyName;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
