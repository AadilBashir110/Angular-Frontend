import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../models/teacher.model';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss'] // Corrected 'styleUrls'
})
export class CreateTeacherComponent implements OnInit {

  newTeacher: Teacher = new Teacher();

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void { 
    
  }

  addTeacher() {
    this.teacherService.createTeacher(this.newTeacher).subscribe(response => {
      console.log('Teacher created successfully:', response);
      this.newTeacher = new Teacher();
    }, error => {
      console.error('Error creating teacher:', error);
    });
  }
}
