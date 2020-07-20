import { Message } from './../classes/Message';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private headers = new Headers({'Content-Type': 'application/json'});




  constructor(private http: Http) { }
   getMessages(): Promise<Message[]> {
    return this.http.get('http://localhost:8080/api/message')
      .toPromise()
      .then(response => response.json() as Message[])
      .catch();
  }
  create( message: Message): Promise<Message> {
    return this.http
      .post('http://localhost:8080/api/messages', JSON.stringify(message), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Message)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `http://localhost:8080/api/message/${id}`;
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
