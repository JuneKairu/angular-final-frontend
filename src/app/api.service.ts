import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3001/api';

  constructor() { }

  fetchData() {
    axios.get(`${this.apiUrl}/data`)
     .then(response => {
        console.log(response.data);
      })
     .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}