import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  constructor(private userService: UserService, private ar: ActivatedRoute,private r : Router) { }
  id!: number;
  user!: User;

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => this.user = data)
  }

  update(formUser: NgForm) {
    if (formUser.valid) {
      this.userService.updateUser(this.id, this.user).subscribe(
        response => {
          console.log(response);
          this.r.navigate(['/user']);
        },
        error => {
          console.log(error);
        }
      );;
    }
  }
}
