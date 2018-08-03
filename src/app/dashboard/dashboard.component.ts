import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { DataService} from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  uporabnikoveSestavine: any = [];
  sestavine: any = [];
  recepti: any = [];
  izbranaPrvaSestavina: any = 'Krompir';
  izbranaDrugaSestavina: any;
  izbranaTretjaSestavina: any;
  /** Based on the screen size, switch from standard to one column per row */
 
  constructor(private breakpointObserver: BreakpointObserver, private data: DataService) {
    this.sestavine = ['Krompir', 'Piscanec', 'Prasic', 'Limona', 'Riba(Krap)'];
  }

ngOnInit() {

  this.data.getRandomRecept(). subscribe(res => {
    console.log(res);
    this.recepti = res;
  });
}

odstraniSestavino(sestavina: any) {
  const index = this.sestavine.indexOf(sestavina, 0);
  if (index > -1) {
    this.sestavine.splice(index, 1);
  }
}

poisci() {

  this.uporabnikoveSestavine[0] = this.izbranaPrvaSestavina;
  if(this.izbranaDrugaSestavina) {
    this.uporabnikoveSestavine[1] = this.izbranaDrugaSestavina;
  }
  if ( this.izbranaTretjaSestavina ) {
    this.uporabnikoveSestavine[2] = this.izbranaTretjaSestavina;
  }
  const body = { 'sestavine' : this.uporabnikoveSestavine};
  this.data.postEndpoint(body).subscribe( res => {
    this.recepti = res;
  });

}

dodajSestavino(sestavina: string) {
  this.uporabnikoveSestavine.push(sestavina);
}

}

