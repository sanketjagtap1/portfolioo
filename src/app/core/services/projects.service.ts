import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getRecentProjects(): Observable<any> {
    return this.http.get('http://localhost:3000/v1/portfolio/projects')
  }

  getAllProjects(){
    return this.http.get('http://localhost:3000/v1/portfolio/projects')
  }
  getProjectByID(id:any){
  return this.http.get(`http://localhost:3000/v1/portfolio/projects/${id}`)
}
  
}
