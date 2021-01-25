import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get currentUser() {
    return this.authService.currentUser;
  }

  constructor(private authService: AuthService,  private router: Router) 
  {
    if(!authService.isLoggedIn)
    {
      router.navigate(['']);
    }
  }

  ngOnInit(): void {
  }

}
