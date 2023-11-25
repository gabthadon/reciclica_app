import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {
  http!: HttpClient;

  constructor() { }

  public getPost(){
    let url="http://localhost/phpionic/users.php";
    return  this.http.get(url);
  }
}
