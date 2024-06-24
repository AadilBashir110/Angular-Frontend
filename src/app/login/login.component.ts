import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{

  constructor(
    private userService: UserService,
    private router: Router,
  ) {

  }
  
  userLogin(data: any) {
    this.userService.login(data).subscribe((result: any) => {
      localStorage.setItem("token", result.token);
      this.router.navigate(['/dashboard'])
    });
  }
}
