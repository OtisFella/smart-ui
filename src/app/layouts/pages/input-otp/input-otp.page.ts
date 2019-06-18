import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-input-otp',
  templateUrl: './input-otp.page.html',
  styleUrls: ['./input-otp.page.scss'],
})
export class InputOtpPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['home/tabs/tab1']);
  }
}
