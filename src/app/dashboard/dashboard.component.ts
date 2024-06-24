// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../service/teacher.service';
import { StudentService } from '../service/student.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  teacherCount: number = 0;
  studentCount: number = 0;
  courseCount: number = 0;

  constructor(
    private teacherService: TeacherService, 
    private studentService: StudentService,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadTeacherCount();
    this.loadStudentCount();
    this.loadCourseCount();
  }

  loadTeacherCount(): void {
    this.teacherService.getTeacherCount().subscribe(count => {
      this.teacherCount = count;
    });
  }

  loadStudentCount(): void {
    this.studentService.getStudentCount().subscribe(count => {
      this.studentCount = count;
  });
  }

  loadCourseCount(): void {
    this.courseService.getCourseCount().subscribe(count => {
      this.courseCount = count;
    })
  }
}
