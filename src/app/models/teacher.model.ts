import { Course } from "./course.model";

export class Teacher {
  constructor(
    public id: '' | number = '',
    public name: string = '',
    public email: string = '',
    public password: string = '',
    public courseBean: Course[] = []
  ) { }
}