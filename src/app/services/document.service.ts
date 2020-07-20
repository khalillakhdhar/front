import { Files } from './../classes/Files';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private headers = new Headers({'Content-Type': 'application/json'});




  constructor(private http: Http) { }
   getFiles(): Promise<Files[]> {
    return this.http.get('http://localhost:8080/api/file')
      .toPromise()
      .then(response => response.json() as Files[])
      .catch();
  }
  create( file: Files): Promise<Files> {
    return this.http
      .post('http://localhost:8080/api/files', JSON.stringify(file), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Files)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `http://localhost:8080/api/fle/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
