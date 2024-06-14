import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string;
  email: string;
  password: string;

  constructor() {}

  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    axios.post('YOUR_BACKEND_ENDPOINT/register', userData)
    .then(response => {
        console.log(response.data);
        // Handle success (e.g., navigate to another page)
      })
    .catch(error => {
        console.error('There was an error!', error);
        // Handle error (e.g., show an error message)
      });
  }
}