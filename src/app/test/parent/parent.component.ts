import { Component } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public users:User[]=[];

  myName="yassine";



}
