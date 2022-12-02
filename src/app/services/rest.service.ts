import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
apiUrl : string = 'http://localhost/citasphp/api/';
headers: HttpHeaders;
  constructor(private http:HttpClient) { 
    this.headers= new HttpHeaders();

  }

  peticionHttp (url : string, tipo: string, body ?: any):Observable<any>{
    let peticion :Observable <any>;

    switch (tipo){
      case'GET':
      peticion = this.http.get(this.apiUrl + url, {observe:'body', headers: this.headers});
      break;

      case'POST':
      const formData = new FormData();
      for(const key of Object.keys(body)){
        formData.append(key,body[key]);
      }
      peticion = this.http.post(this.apiUrl + url,formData, {observe:'body', headers: this.headers});
      break;

      case'DELETE':
      peticion = this.http.delete(this.apiUrl + url, {observe:'body', headers: this.headers});
      break;

      case'PUT':
      const formDataPut = new FormData();
      for(const key of Object.keys(body)){
        formDataPut.append(key,body[key]);
      }
      peticion = this.http.put(this.apiUrl + url,formDataPut, {observe:'body', headers: this.headers});
      break;
    }
    return new Observable((observer) => {
        peticion.subscribe(response => {
          observer.next(response);
          observer.complete();
        })
       
      
        
      
    });

  }
}


