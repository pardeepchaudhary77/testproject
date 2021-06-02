import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMsg: string = ''

  constructor(private as: AuthService, private user: UserService, private router: Router) { }

  signup(form: any){
   this.as.signup(form.value.email, form.value.password)
    .then( data => 
      {
        this.user.addUser(data.user?.uid, form.value.name, form.value.address)
        this.errorMsg = ''
        this.router.navigate(['/'])
      }
    )
    .catch(err => this.errorMsg = err)
  }

  ngOnInit(): void {
  }

}
