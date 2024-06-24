import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent implements OnInit{

  newStudent: Student = new Student();

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    
  }
  
  addStudent() {
    this.studentService.createStudent(this.newStudent).subscribe(response => {
      console.log('Student created successfully:', response);
      this.newStudent = new Student();
    }, error => {
      console.error('Error creating student:', error);
    });
  }

}
