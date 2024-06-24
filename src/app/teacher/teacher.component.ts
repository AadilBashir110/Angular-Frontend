import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher.model';
import { TeacherService } from '../service/teacher.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {

  }

  ngOnInit(): void {
    this.loadAllTeachers();
  }

  loadAllTeachers(): void {
    this.teacherService.getAllTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

  async onDelete(id: any): Promise<void> {
    try {
      await lastValueFrom(this.teacherService.deleteTeacher(id));
      this.teachers = this.teachers.filter(teacher => teacher.id !== id);
      console.log('Teacher deleted successfully');
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  }
}
