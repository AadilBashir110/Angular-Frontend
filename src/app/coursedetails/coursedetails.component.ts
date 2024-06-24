import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.scss'
})
export class CoursedetailsComponent implements OnInit {

  selectedCourse!: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadCourse(id);
  }

  loadCourse(id: number): void {
    this.courseService.getCourseById(id).subscribe(data => {
      this.selectedCourse = data;
    });
  }

}
