import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  isReadDetail = false;
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToogleDetail(){
    this.isReadDetail = !this.isReadDetail;
    this.logs.push(this.logs.length);
  }
}
