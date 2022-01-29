import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  listarray:any = [];
  completearray:any = [];
  iscompleted : any= false;


  addtask(data:any)
  {
    
    this.listarray.push({id:data.length,name:data,check:this.iscompleted});
   // console.log(this.iscompleted)

    
  }

  deletetask(id:any)
  {
    this.listarray = this.listarray.filter((item:any) => item.id !== id);
    
  }

  sendata(ID:any)
  {
    this.listarray = this.listarray.filter((item:any) => item.id == ID);
    
    this.listarray.iscompleted = true;
    
    //console.log("sendata",this.iscompleted)
    
  }

}
