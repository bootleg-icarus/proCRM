import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  list;

  constructor( private data: DataService) { }

  ngOnInit() {}

  getDataMongo(){
    this.data.getMongo().subscribe((d)=>{
      this.list=d;
      console.log(this.list);
    })
  }

}
