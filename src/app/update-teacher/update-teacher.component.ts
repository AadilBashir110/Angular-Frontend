import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { TeacherService } from '../service/teacher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.scss'
})
export class UpdateTeacherComponent implements OnInit {

  updatedTeacher: Teacher = new Teacher();

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getTeacherByID(id)
  }

  getTeacherByID(id: number): void {
    this.teacherService.getTeacherById(id).subscribe(res => {
       this.updatedTeacher = res
    });
  }

  updateTeacher() {
    this.teacherService.updateTeacher(this.updatedTeacher).subscribe(updatedTeacher => {
      console.log('Teacher updated successfully:', updatedTeacher);
      this.updatedTeacher = new Teacher();
    }, error => {
      console.error('Error updating teacher:', error);
    });
  }
}
