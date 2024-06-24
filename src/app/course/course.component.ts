import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../service/course.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit{
  courses: Course[] = [];

  constructor(private courseService: CourseService ){}

 ngOnInit(): void {
   this.loadAllCourses();
 }

 loadAllCourses(): void {
  this.courseService.getAllCourses().subscribe(data => {
    this.courses = data;
  });
 }

 async onDelete(id: any): Promise<void> {
  try {
    await lastValueFrom(this.courseService.deleteCourse(id));
    this.courses = this.courses.filter(course => course.id !== id);
    console.log('Course deleted successfully');
  } catch (error) {
    console.error('Error deleting course:', error);
  }
 }

 enrollCourse(courseId: any) {
  this.courseService.enrollStudentToCourse(courseId).subscribe(
    (response) => {
      console.log('Enrollment successful', response.message);
      alert("Enrollment Successful");
    },
    (error) => {
      console.error('Enrollment failed', error);
      alert("Enrollment failed");
    }
  );
 }
}
