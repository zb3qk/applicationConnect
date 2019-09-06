import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { GetInfoService } from '../get-info.service';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

export interface Config {
	directoryName: string;
	directories:  Array<{name: string, id: number}>;
	files:  Array<{name: string, id: number}>;
}

export interface token {
  access_token: string;
}

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss'],
  providers: [ GetInfoService ]
})

export class DirectComponent implements OnInit {

	  // results: Observable<any>;
	  directory = {
	  	directoryName: "default",
	  	directories: [],
	  	files: []
	  };
	  results = null;
	  searchTerm: string = '';
	  directoryName: string = '';

    curToken = {
      access_token: ''
    }

  constructor(private getInfoService: GetInfoService ) { }

  ngOnInit() {
    this.getInfoService.getToken().subscribe((res: token) => {
      console.log(res);
      this.curToken = res;
    });
    // this.getInfoService.queryDjango(0).subscribe((res: Config) => {
    //   console.log(res);
    //   this.directory = res;
    // });
  }

  searchChanged() {
  	console.log("searchChanged");
  	this.getInfoService.queryDjango(this.searchTerm).subscribe((res: Config) => {
  		console.log(res);
  		this.directory = res;
  	});
  }

}
