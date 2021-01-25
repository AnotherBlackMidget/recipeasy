import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  get users(): User[] {
    return this.authService.users;
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  userClicked(userEmail: string) {
    alert(userEmail);
  }
}
