import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss'
})
export class CreateCourseComponent implements OnInit {

  newCourse: Course = new Course();

  constructor(private courseService: CourseService){ }

  ngOnInit(): void {
    
  }

  addCourse() {
    this.courseService.createCourse(this.newCourse).subscribe(response => {
      console.log('Course created successfully:', response);
      this.newCourse = new Course();
    }, error => {
      console.error('Error creating course:', error);
    });
  }

}
