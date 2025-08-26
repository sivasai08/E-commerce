/*import { Component,inject ,OnInit} from '@angular/core';
import { ProductService } from '../service/Product.service';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  UserList: any = [];
  users = inject(ProductService);
  ngOnInit() {
    this.users.getUser().subscribe(data => {
      this.UserList = data;
      console.log('users', this.UserList);
    })
  }
}*/
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/Product.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  username = '';
  isRegistering = false;
  message = '';
  isError = false;

  constructor(private users: ProductService) { }

  toggleMode() {
    this.isRegistering = !this.isRegistering;
    this.clearForm();
  }

  clearForm() {
    this.email = '';
    this.password = '';
    this.username = '';
    this.message = '';
    this.isError = false;
  }

  onSubmit() {
    if (this.isRegistering) {
      this.users.register(this.username, this.email, this.password).subscribe({
        next: (res) => {
          this.message = 'Registration successful!';
          this.isError = false;
        },
        error: (err) => {
          this.message = err.error || 'Registration failed!';
          this.isError = true;
        }
      });
    } else {
      this.users.login(this.email, this.password).subscribe({
        next: (res) => {
          this.message = 'Login successful!';
          this.isError = false;
        },
        error: (err) => {
          this.message = err.error || 'Login failed!';
          this.isError = true;
        }
      });
    }
  }
}


