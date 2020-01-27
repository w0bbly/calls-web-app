import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CallDTO } from './model/model';

const baseCalls = 'http://localhost:8080/calls';

const routes = {
  getAllCalls: (page: number, size: number, type?: string) => `${baseCalls}/all?page=${page}&size=${size}&type=${type}`,
  deleteAllCalls: () => `${baseCalls}/all`,
  createCall: () => `${baseCalls}`,
  getStatistics: () => `${baseCalls}/statistics`,
  deleteCallById: (id: number) => `${baseCalls}/${id}`
}

@Injectable({
  providedIn: 'root'
})

export class CallService {

  constructor(private http: HttpClient) { }

  getAllCalls(page: number, size: number, type?: string) {
    return this.http.get(routes.getAllCalls(page, size, type));
  }

  deleteAllCalls() {
    return this.http.delete(routes.deleteAllCalls());
  }

  createCall(calls: CallDTO[]) {
    return this.http.post(routes.createCall(), calls);
  }

  getStatistics() {
    return this.http.get(routes.getStatistics());
  }

  deleteCallById(id: number) {
    return this.http.delete(routes.deleteCallById(id));
  }
}
