import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService, private r: Router) { }

  ngOnInit(): void { }

  save(form: NgForm) {
    this.userService.addUser(form.value).subscribe(
      response => {
        console.log(response);
        this.r.navigate(['/user']);
      },
      error => {
        console.log(error);
      }
    );

  }

}
