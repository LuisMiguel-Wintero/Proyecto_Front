import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-botones-web',
  templateUrl: './botones-web.component.html',
  styleUrls: ['./botones-web.component.css']
})
export class BotonesWebComponent implements OnInit {
  // user: User;
  constructor(private service:AppComponent, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = <string>params['id'];
      if ( id != null){

      }
    });

    // this.user = userLoginService.getUserLogged();
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
