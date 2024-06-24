import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../models/student.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit{
  students: Student[] = [];

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
    this.loadAllStudents();
  }

  loadAllStudents(): void {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }

  async onDelete(id: any): Promise<void> {
    try {
      await lastValueFrom(this.studentService.deleteStudent(id));
      this.students = this.students.filter(student => student.id !== id);
      console.log('Student deleted successfully');
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }
}
