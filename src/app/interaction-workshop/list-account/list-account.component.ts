import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Account} from "../../models/account";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit{
  accounts:Account[]=[];
  users:User[]=[];
  formGroup!:FormGroup;

  constructor(private accountService:AccountService,private usserService:UserService,private r:Router) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data=>{
      this.accounts=data;
    },error=>{
      console.log(error.message())
    });

  }

  deleteAccount(index: number) {
    this.accounts.splice(index, 1);
  }


  filterUsers($event: any) {
    this.usserService.getAllUsersApi().subscribe(data=>{
      this.users=data;
      this.users= this.users.filter(u => u.accountCategory==$event.split(' ')[0]);
    },error=>{
      console.log(error.message())
    })
  }

  addAccount($event: any) {
    this.accountService.addAccount($event.value).subscribe(()=>{
      this.accountService.getAccounts().subscribe(data=>{
        this.accounts=data;
        $event.reset();
      },error=>{
        console.log(error.message())
      });
    } );
  }
}
