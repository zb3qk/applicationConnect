import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetInfoService } from '../services/get-info.service';

export interface Config {
  directoryName: string;
  directories:  Array<{name: string, id: number}>;
  files:  Array<{name: string, id: number}>;
}

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {

	directory = {
	  	directoryName: "default",
	  	directories: [],
	  	files: []
	  };
	  directoryName: string = '';
    id = 0;

  constructor( private route: ActivatedRoute , private getInfoService: GetInfoService) {  }

  ngOnInit() {
    this.route.params.subscribe(params => { //get URL parameter
      console.log("printer");
      console.log(params['id']); //log the value of id 
      this.id = params['id'];
      this.getInfoService.queryDjango(this.id).subscribe((res: Config) => { //Get data
        console.log(res);
        this.directory = res;
      }); 
    });


  }

	toDirectory(id){
      this.getInfoService.queryDjango(id).subscribe((res: Config) => {
      console.log(id);
      console.log("onClick()");
      console.log(res);
      this.directory = res;
    });
  }

	toFile(id){
      this.getInfoService.queryDjango(id).subscribe((res: Config) => {
      console.log(res);
      this.directory = res;
    });
  }

}
