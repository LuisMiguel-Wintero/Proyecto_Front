import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HistorysModel } from '../domain/historys-model';


@Component({
  selector: 'app-mis-historias',
  templateUrl: './mis-historias.component.html',
  styleUrls: ['./mis-historias.component.css']
})
export class MisHistoriasComponent implements OnInit {
  historia: HistorysModel;

  constructor(private service:AppServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = <string>params['id'];
      if ( id != null){

      }
   
    });


  }

//POST

// addHistory(history: HistorysModel){
//   this.service.addHistory(history)
//     .subscribe(history => this.historia.push(history));
//  }





}
