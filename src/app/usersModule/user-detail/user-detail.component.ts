import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  id!: number;
  user!: User;
  constructor(private userService: UserService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data => this.user = data)
  }

}
