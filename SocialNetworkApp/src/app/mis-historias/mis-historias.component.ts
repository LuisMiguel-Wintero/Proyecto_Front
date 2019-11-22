import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../services/app-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HistorysModel } from '../domain/historys-model';
import { UserModel } from '../domain/user-model';


@Component({
  selector: 'app-mis-historias',
  templateUrl: './mis-historias.component.html',
  styleUrls: ['./mis-historias.component.css']
})
export class MisHistoriasComponent implements OnInit {
  historia: HistorysModel[];

  nuevoMensaje: string;

  constructor(private service:AppServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = <string>params['id'];
      if ( id != null){

      }
   
    });


  }

//POST

 addHistory(){

  let historieta = new HistorysModel();
  let fecha = new Date();
  let actual = (fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());

  historieta.content=this.nuevoMensaje;
  historieta.publish_date= actual;
  historieta.users_id= 1;

   this.service.addHistory(historieta)
     .subscribe(historieta => this.historia.push(historieta));
  }





}
