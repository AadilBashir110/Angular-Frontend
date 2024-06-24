import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CourseComponent } from './course/course.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teacher', component: TeacherComponent  },
  { path: 'teacher/:id', component: TeacherdetailsComponent },
  { path: 'create-teacher', component: CreateTeacherComponent },
  { path: 'update-teacher/:id', component: UpdateTeacherComponent},
  { path: 'student', component: StudentComponent},
  { path: 'student/:id',component: StudentdetailsComponent},
  { path: 'create-student', component: CreateStudentComponent},
  { path: 'update-student/:id', component: UpdateStudentComponent},
  { path: 'course', component: CourseComponent},
  { path: 'course/:id', component: CoursedetailsComponent},
  { path: 'create-course', component: CreateCourseComponent},
  { path: 'update-course/:id', component: UpdateCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
