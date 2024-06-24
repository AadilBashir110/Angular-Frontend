import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../models/teacher.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrl: './teacherdetails.component.scss'
})
export class TeacherdetailsComponent implements OnInit {

  selectedTeacher!: Teacher;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadTeacher(id);
  }

  loadTeacher(id: number): void {
    this.teacherService.getTeacherById(id).subscribe(data => {
      this.selectedTeacher = data;
    });
  }
}
