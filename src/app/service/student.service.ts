import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api/student';

  constructor(private http: HttpClient) { }

  getStudentCount(): Observable<number> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/count`;
    return this.http.get<number>(url, { headers });
  }

  getAllStudents(): Observable<Student[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);
    return this.http.get<Student[]>(this.baseUrl, { headers });
  }

  getStudentById(id: number): Observable<Student> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Student>(url, { headers });
  }

  createStudent(student: Student): Observable<Student> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post<Student>(this.baseUrl, student, { headers });
  }

  updateStudent(student: Student): Observable<Student> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put<Student>(`${this.baseUrl}/update-student`, student, { headers });
  }

  deleteStudent(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}?studentId=${id}`;
    return this.http.delete<any>(url, { headers });
  }
}
