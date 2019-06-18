import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerService } from '../../../services/customer.service'



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = ''
  password: string = ''
  password_confirmation: string = ''
  phone: string = ''
  username: string= ''


  constructor(private router: Router, private customerService: CustomerService) { }

  //Navigate to login page
  backToLogin() {
    this.router.navigate(['']);
  }

  //Resgister user
  register(){

    this.customerService.register({  username: this.username, email: this.email, phone: this.phone, password: this.password, password_confirmation: this.password_confirmation })
        .subscribe((res) => {
          
           if( res.saved ) {
             //redirect to view products page after succesful login
             this.customerService.log_in({email: this.email, password: this.password})
                 .subscribe((resp) => {
                   if( resp['token'] && resp['user']['id']  ) {
                     localStorage.setItem('access_token', resp['token'])
                     this.router.navigate(['home/tabs/tab1']);
                   }
                 })

                 } else {
                  this.router.navigate(['']);
                  alert("Wrong password");
           }

        })
  } 


  ngOnInit() {
  }

}
