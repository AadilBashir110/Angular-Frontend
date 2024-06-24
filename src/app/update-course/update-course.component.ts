import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrl: './update-course.component.scss'
})
export class UpdateCourseComponent implements OnInit {

  updatedCourse: Course = new Course();

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getCourseByID(id);
  }

  getCourseByID(id: number): void {
    this.courseService.getCourseById(id).subscribe(res => {
       this.updatedCourse = res
    });
  }

  updateCourse() {
    this.courseService.updateCourse(this.updatedCourse).subscribe(updatedCourse => {
      console.log('Course updated successfully:', updatedCourse);
      this.updatedCourse = new Course();
    }, error => {
      console.error('Error updating course:', error);
    });
  }
}
