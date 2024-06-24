import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/api/courses';

  constructor(private http: HttpClient) { }

  getCourseCount(): Observable<number> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/count`;
    return this.http.get<number>(url, { headers });
  }

  getAllCourses(): Observable<Course[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);
    return this.http.get<Course[]>(this.baseUrl, { headers });
  }

  getCourseById(id: number): Observable<Course> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Course>(url, { headers });
  }

  createCourse(course: Course): Observable<Course> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post<Course>(this.baseUrl, course, { headers });
  }

  updateCourse(course: Course): Observable<Course> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put<Course>(`${this.baseUrl}/update-course`, course, { headers });
  }

  deleteCourse(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}?courseId=${id}`;
    return this.http.delete<any>(url, { headers });
  }

  enrollStudentToCourse(courseId: number): Observable<{ message: string }> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post<{ message: string }>(`${this.baseUrl}/enroll-student`, { courseId }, { headers });
  }

 // assignTeacherToCourse():
}
