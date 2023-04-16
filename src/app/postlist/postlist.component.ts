import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent {
title:string ='hi';

firstPost:string = 'my first post';
@Input() fromPostParent:string;
constructor(){
this.fromPostParent='';
}
ngOnInit(): void {
  
}
}
