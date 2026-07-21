
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector:'app-home',
  standalone:true,
  templateUrl:'./home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy{
 portalName='Student Course Portal';
 isPortalActive=true;
 message='';
 searchTerm='';

 // [disabled] is one-way (component -> DOM)
 // [(ngModel)] is two-way (DOM <-> component)

 ngOnInit(){ console.log('HomeComponent initialised — courses loaded'); }
 ngOnDestroy(){ console.log('HomeComponent destroyed'); }

 onEnrollClick(){ this.message='Enrollment opened!'; }
}
