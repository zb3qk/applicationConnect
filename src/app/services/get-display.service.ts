import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDisplayService {

// url = 'http://172.16.42.153:8000'; // on Giza Network
// url = 'http://192.168.1.167:8000';
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

  curToken = ""

  constructor(private http: HttpClient) { }

  getDisplay(id) {
  	console.log("query Display");
  	// id = 4121;
  	console.log("id: " + `${this.url}/request/file/display/${id}`);
  	return this.http.get(`${this.url}/request/file/display/${id}`);
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
}
