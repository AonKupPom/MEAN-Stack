import { AuthGuardLogin } from './../../../services/auth-guard-login.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginForm_submit = false;
  checkRepeatPassword = false;
  registerForm: FormGroup;
  registerForm_submit = false;
  SignIn_activate = "active";
  Register_activate = "inactive underlineHover";
  jwt = new JwtHelperService();

  constructor(
    public formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
    this.registerForm = this.formBuilder.group({
      register_title: new FormControl(null, [Validators.required]),
      register_firstname: new FormControl(null, [Validators.required]),
      register_lastname: new FormControl(null, [Validators.required]),
      register_email: new FormControl(null, [Validators.required]),
      register_password: new FormControl(null, [Validators.required]),
      repeat_password: new FormControl(null, [Validators.required]),
      register_birthdate: new FormControl(null, [Validators.required]),
      register_gender: new FormControl(null, [Validators.required]),
      register_tel: new FormControl(null, [Validators.required]),
      register_address: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    if (this.auth.loggedIn) {
      this.router.navigate(['/']);
    }
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm_submit = true
    }
    else {
      this.loginForm_submit = false
      this.auth.login(this.loginForm.value).subscribe(res => {
        this.auth.loggedIn = res.loggedIn;
        this.auth.currentUser = this.jwt.decodeToken(res.token);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'ข้อผิดพลาด',
            text: 'กรุณาตรวจสอบอีเมลหรือรหัสผ่านของท่าน',
          })
        }
      );
    }
  }

  register() {
    if (this.registerForm.value.register_password != this.registerForm.value.repeat_password && !this.registerForm.invalid) {
      this.checkRepeatPassword = true;
    }
    if (this.registerForm.invalid) {
      this.registerForm_submit = true;
    }
    else {
      if (this.registerForm.value.register_password == this.registerForm.value.repeat_password) {
        this.registerForm_submit = false;
        this.auth.register(this.registerForm.value).subscribe(res => {
          this.SignIn_activate = "active";
          this.Register_activate = "inactive underlineHover";
          Swal.fire({
            icon: 'success',
            title: 'สมัครสมาชิกสำเร็จ',
            text: 'กรุณาลงชื่อเข้าใช้ เพื่อเข้าใช้งานระบบ',
          })
        },
        err => {
          if(err.status == 409){
            Swal.fire({
              icon: 'error',
              title: 'ข้อผิดพลาด',
              text: 'ชื่อผู้ใช้นี้มีผู้ใช้งานแล้ว กรุณาใช้อีเมลอื่น',
            })
          }
        }
        )
      }
    }
  }

  signIn() {
    this.SignIn_activate = "active";
    this.Register_activate = "inactive underlineHover";
    this.registerForm_submit = false;
  }

  signUp() {
    this.Register_activate = "active";
    this.SignIn_activate = "inactive underlineHover";
    this.loginForm_submit = false
  }

  get login_Form() { return this.loginForm.controls }
  get register_Form() { return this.registerForm.controls }
}
