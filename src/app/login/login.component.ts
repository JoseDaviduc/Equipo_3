import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      keepLoggedIn: [false],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, keepLoggedIn } = this.loginForm.value;
      console.log('Email:', email, 'Password:', password, 'Keep me logged in:', keepLoggedIn);
      // Aquí puedes agregar la lógica de autenticación
    }
  }
}
