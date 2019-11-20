import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AppServicesService } from '../services/app-services.service';
import { UserModel } from '../domain/user-model';


@Component({
  selector: 'app-botones-web',
  templateUrl: './botones-web.component.html',
  styleUrls: ['./botones-web.component.css']
})
export class BotonesWebComponent implements OnInit {
   user : UserModel;
  constructor(private service:AppServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = <string>params['id'];
      if ( id != null){

      }
      
    });

     this.service.getUserLogged()
       .subscribe((data: UserModel) => this.user = data,
                   error => console.error(error),
                   () => console.log('My item list is loaded')
             );
  }

  goHome(){
    this.router.navigate(['/home']);
  }
  goCosas(){
    this.router.navigate(['/miscosas']);
  }
  goColegas(){
    this.router.navigate(['/miscolegas']);
  }
  goEventos(){
    this.router.navigate(['/eventos']);
  }

}
