import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;
  validMessage: string = "";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  validateLogin() {

    if(this.loginform.valid && this.loginform.controls.username.value == "admin@aqua.com" && this.loginform.controls.password.value =="password") {
      this.router.navigate(['weatherregistration']);
    } else {
      this.validMessage = "Form not completed/Invalid credentials!!!";
    }
  }

}
