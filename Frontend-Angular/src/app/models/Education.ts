export class Education {
  id?: number;
  title: string;
  institution: string;
  startDate: string;
  endDate: string;

  constructor(
    title: string,
    institution: string,
    startDate: string,
    endDate: string,
    id?: number
  ) {
    this.id = id;
    this.title = title;
    this.institution = institution;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
