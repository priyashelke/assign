import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  previewInfo=false;
  total_count :any = 0 ;
  public userList :any =  [];
  constructor (private appService: AppService) {
  this.filterUserList(null);
 
}

  filterUserList (searchName) {
  	console.log("searchName :: ", searchName);
  	this.appService.getUserList(searchName || "''").subscribe((result)=>{
		console.log(result);
		this.total_count = result.total_count;
		this.userList = result.items;
			if (this.userList.length > 0 )
		this.getUserFullInfo(this.userList[0].login);
  	})
  }
getUserFullInfo(userName) {
  	this.appService.getUserFullInfo(userName||"''").subscribe((result)=>{
		console.log(result);
  	})
  }
  
  
}
