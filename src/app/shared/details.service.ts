import { Detail } from './details.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  formData: Detail;
  readonly rootURL = 'http://localhost:49956/api';
  list : Detail[];

  constructor(private http: HttpClient) { }

  postDetail() {
    return this.http.post(this.rootURL + '/Detail', this.formData);
  }
  putDetail() {
    return this.http.put(this.rootURL + '/Detail/'+ this.formData.Id, this.formData);
  }
  deleteDetail(id) {
    return this.http.delete(this.rootURL + '/Detail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Detail')
    .toPromise()
    .then(res => this.list = res as Detail[]);
  }
}
