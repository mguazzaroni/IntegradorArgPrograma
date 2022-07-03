export class Person{
    id?: Number;
    name: String;
    surname: String;
    image: String;
    
    constructor(name: String, surname: String, image: String) {
        this.name = name;
        this.surname = surname;
        this.image = image;
    }
}