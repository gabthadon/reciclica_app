import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostDataService } from 'src/app/post-data.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {


  response:any=[];

  constructor(private post: HttpClient ) { 
    let url="http://localhost/phpionic/users.php";
    this.post.get(url).subscribe((data)=>{
 this.response=data;
      console.log(this.response);
    })
  }

  ngOnInit() {

 
  }

}
