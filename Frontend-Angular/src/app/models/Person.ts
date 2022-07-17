export class Person{
    id?: number;
    name: string;
    surname: string;
    description: string;
    profession: string;
    image: string;

    constructor(name: string, surname: string, description: string, profession: string, image: string) {
        this.name = name;
        this.surname = surname;
        this.description = description;
        this.profession = profession;
        this.image = image;
    }
}
