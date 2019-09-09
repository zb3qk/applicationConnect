import { Injectable } from '@angular/core';
import { Tab1PageModule } from './tab1.module';

import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  providedIn: Tab1PageModule // was 'root'
})
export class GetInfoService {
	// http://localhost:1337/ for CORS
	// http://gnomeontherun.com/2014/11/20/how-to-fix-cors-problems-and-no-access-control-allow-origin-header-errors-with-ionic/
	// url = 'http://localhost:1337/localhost:8000' //Current location for django database
	// url = 'http://172.16.42.153:8000'; // on Giza Network
	url = 'http://128.143.34.25:8000';
	info: boolean = false;
	directory = null;

  user = "admin"
  password = "inheritance17"

  grantType = "password"
  ClientId = "yf9V8B10wjjAKSbjyUElHZMyoT7P8lXTztEQiOT4"
  SecretId = "l0AhLN53tE5eJ6zxpcYRIjjczInz70iTrwd0vlAyQ1P6EsdYfVU7xHo5NR5hF1lhoi3LQfue1yAq0Oe6lXmvdFZPlbSV7XWGm9HnBIayEuk5OKQwzP95CP1MQn1fO5lA"

  data = {
    'grant_type':this.grantType,
    'username':this.user,
    'password':this.password
  }

  constructor(private http: HttpClient) { }

  getInfo() {
  	this.info = true;
  	return 'info has been changed'
  }

  getToken() {
    const data = `grant_type=password&client_secret=${this.SecretId}&client_id=${this.ClientId}&username=${this.user}&password=${this.password}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        // 'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(`${this.url}/o/token/`, data, httpOptions);
  }

  queryDjango(id) { //id = 4122
    // this.getToken();
  	console.log("queryDjangoTab1");
  	id = 4572;
  	// console.log(`${this.url}/request/directoryRequest/${id}/`);
  	// console.log(this.http.get(`${this.url}/request/directoryRequest/${id}/`));
    // const token = tokenJson.access_token;
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     `Authorization': 'Bearer ${token}`,
    //   })
    // };
    return this.http.get(`${this.url}/getDirectory/${id}/`);
  	// return this.directory;
  }
}
