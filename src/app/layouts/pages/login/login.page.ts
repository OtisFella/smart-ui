import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string =''
  password: string =''


  constructor(private router: Router, private userService: UserService ) { }

  //Navigate to home section
  login(){
    this.userService.log_in({email: this.email, password: this.password})
        .subscribe((res)=>{
          //redirect user to products section upon succesful login
            if (res['token'] && res['user']) {
              this.userService.set_session(res);
              this.router.navigate(['home/tabs/tab1']);
             // alert('Successful login');
            }
            //back to login if credentials are not correct
            else {
              this.router.navigate(['login']);
              //alert('Login failed! Check password and/or email address ');
            }
    })

  } 

  //Navigate to registration page
  goToSignUp() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
