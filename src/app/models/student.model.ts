import { Course } from "./course.model";

export class Student {
    constructor(
    public id: '' | number = '',
    public name: string = '',
    public email: string = '',
    public password: string = '',
    public courseBean: Course[] = []
    ) {}
}