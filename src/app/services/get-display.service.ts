import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDisplayService {

url = 'http://172.16.42.153:8000'; // on Giza Network
// url = 'http://192.168.1.167:8000';
info: boolean = false;
directory = null;

  constructor(private http: HttpClient) { }

  getDisplay(id) {
  	console.log("query Display");
  	// id = 4121;
  	console.log("id: " + `${this.url}/request/file/display/${id}`);
  	return this.http.get(`${this.url}/request/file/display/${id}`);
  }
}
