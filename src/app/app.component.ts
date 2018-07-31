import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  update = false;
  recepti: any = [];

  constructor(updates: SwUpdate, private data: DataService) {
  updates.available.subscribe(event => {

    updates.activateUpdate().then(() => document.location.reload());
  });
}

ngOnInit() {

  this.data.getRecepti(). subscribe(res => {
    this.recepti = res;
  });
}
}


