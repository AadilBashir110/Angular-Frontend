import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent implements OnInit{

  updatedStudent: Student = new Student();

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getStudentByID(id)
  }

  getStudentByID(id: number): void {
    this.studentService.getStudentById(id).subscribe(res => {
       this.updatedStudent = res
    });
  }

  updateStudent() {
    this.studentService.updateStudent(this.updatedStudent).subscribe(updatedStudent => {
      console.log('Student updated successfully:', updatedStudent);
      this.updatedStudent = new Student();
    }, error => {
      console.error('Error updating student:', error);
    });
  }
}
