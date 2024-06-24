import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://localhost:8080/api/teacher';

  constructor(private http: HttpClient) { }

  getAllTeachers(): Observable<Teacher[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);
    return this.http.get<Teacher[]>(this.baseUrl, { headers });
  }

  getTeacherById(id: number): Observable<Teacher> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Teacher>(url, { headers });
  }

  getTeacherCount(): Observable<number> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}/count`;
    return this.http.get<number>(url, { headers });
  }
  
  createTeacher(teacher: Teacher): Observable<Teacher> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post<Teacher>(this.baseUrl, teacher, { headers });
  }

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put<Teacher>(`${this.baseUrl}/update-teacher`, teacher, { headers });
  }

  deleteTeacher(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const url = `${this.baseUrl}?teacherId=${id}`;
    return this.http.delete<any>(url, { headers });
  }
}