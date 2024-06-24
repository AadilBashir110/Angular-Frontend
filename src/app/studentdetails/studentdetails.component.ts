import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../service/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.scss'
})
export class StudentdetailsComponent implements OnInit {

  selectedStudent!: Student;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
    ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadStudent(id);
  }

  loadStudent(id: number): void {
    this.studentService.getStudentById(id).subscribe(data => {
      this.selectedStudent = data;
    });
  }
}
