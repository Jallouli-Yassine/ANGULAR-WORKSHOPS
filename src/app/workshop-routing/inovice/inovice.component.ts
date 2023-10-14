import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Inovice } from 'src/app/models/inovice';
import { InoviceListComponent } from '../inovice-list/inovice-list.component';

@Component({
  selector: 'app-inovice',
  templateUrl: './inovice.component.html',
  styleUrls: ['./inovice.component.css'],
})
export class InoviceComponent implements OnInit {
  facture: Inovice | undefined;

  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.ar.params.subscribe((p) => { // OR queryParams for quest 9
      this.facture = this.getDetils(p['id']);
    });
  }

  getDetils(idFacture: any) {
    return InoviceListComponent.InList.find((i) => i.idFacture == idFacture);
  }

  goToBack(){
    this.router.navigate(['/atelier3/main-inovice']);
  }
}
