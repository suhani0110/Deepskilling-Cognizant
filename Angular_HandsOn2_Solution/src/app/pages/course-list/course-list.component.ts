
import { Component } from '@angular/core';

@Component({
 selector:'app-course-list',
 standalone:true,
 templateUrl:'./course-list.component.html'
})
export class CourseListComponent{
 selectedCourseId?:number;
 courses=[
 {id:1,name:'Angular',code:'ANG101',credits:4},
 {id:2,name:'Java',code:'JAV201',credits:4},
 {id:3,name:'Spring',code:'SPR301',credits:3},
 {id:4,name:'SQL',code:'SQL101',credits:3},
 {id:5,name:'DSA',code:'DSA201',credits:5}
 ];
 onEnroll(id:number){
   console.log('Enrolling in course: '+id);
   this.selectedCourseId=id;
 }
}
