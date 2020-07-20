import { User } from './../classes/users';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});




  constructor(private http: Http) { }
   getUsers(): Promise<User[]> {
    return this.http.get('http://localhost:8080/api/utilisateur')
      .toPromise()
      .then(response => response.json() as User[])
      .catch();
  }
  create(user: User): Promise<User> {
    return this.http
      .post('http://localhost:8080/api/utilisateurs', JSON.stringify(user), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `http://localhost:8080/api/utilisateurs/${id}`;
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
