import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Config {
  directoryName: string;
  directories: Array<other>;
  files: Array<other>;

}

export interface other {
	name: string;
	id: number;
}

@Injectable({
  providedIn: 'root' // was 'root'
})
export class GetInfoService {
	// http://localhost:1337/ for CORS
	// http://gnomeontherun.com/2014/11/20/how-to-fix-cors-problems-and-no-access-control-allow-origin-header-errors-with-ionic/
	// url = 'http://localhost:1337/localhost:8000' //Current location for django database
	url = 'http://172.16.42.153:8000'; // on Giza Network
	// url = 'http://192.168.1.167:8000';
	info: boolean = false;
	directory = null;

  constructor(private http: HttpClient) { }

  getInfo() {
  	this.info = true;
  	return 'info has been changed'
  }

  queryDjango(id) { //id = 4122
  	console.log("queryDjango");
  	console.log(`${this.url}/request/directoryRequest/${id}/`);
  	// console.log(this.http.get(`${this.url}/request/directoryRequest/${id}/`));
  	return this.http.get(`${this.url}/request/directoryRequest/${id}/`);
  	// return this.directory;
  }
}
