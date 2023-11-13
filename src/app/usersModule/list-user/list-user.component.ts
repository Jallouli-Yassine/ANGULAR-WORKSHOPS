import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUsers: User[] = [];
  listUsersApi: User[] = [];
  nb!: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.listUsers = this.userService.getAllUsers();
    this.userService.getAllUsersApi().subscribe(
      users => {
        this.listUsersApi = users
      })
  }

  fetchNbInList(user: User) {
    console.log(user.profession + ' : ' + this.userService.fetchNbInList(this.listUsers, 'profession', user.profession));
  }

  deleteUser(u:User,index:number){
    this.userService.deleteUser(u).subscribe();
    this.listUsersApi.splice(index, 1);
   }

}
