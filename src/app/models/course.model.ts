import { TagContentType } from "@angular/compiler";
import { Teacher } from "./teacher.model";

export class Course {
    constructor(
      public id: '' | number = '',
      public name: string = '',
      public teacherBean: Teacher = new Teacher()
    ) { }
  }