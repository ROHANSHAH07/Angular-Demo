import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

 

  list:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  getdata(type:any)
  {
     console.warn(type);
  }

  


  addTask(task:any)
  {
     this.list.push({id:this.list.length,name:task});

     //console.warn(this.list)
  }

  remove(id:any)
  {
    this.list = this.list.filter((item: { id: any; }) => item.id!=id)
  }

  
  

}
