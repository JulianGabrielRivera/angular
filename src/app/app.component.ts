import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  // what we use to render comonent in the index.html file
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angularIntro';
  parentMessage:string = 'hello im the parent, sharing this to you kiddo';
  message:string;
  fromChildOutput:string;
  bool: boolean = true;
  userName: string;
  textValue:string;
  // lets us access all the variables inside postComponent child
  @ViewChild(PostComponent) childComp!:PostComponent;
  
  constructor(){
    
    this.message='';
    this.fromChildOutput='';
    this.userName='';
    this.textValue='yo';
   
  }
  ngAfterViewInit(): void {
    // when constructor pops it is not initialized so we use this lifecycle hook, 
    console.log(this.childComp)
    this.message=this.childComp.childMessage;
  }
  receiveMessage($event:string){
    // the money sign event is the string we passed from the child component
    console.log($event)
    this.fromChildOutput = $event
  }
  buttonClick(){
    console.log('clicked');
    
  }
  onKeyup($event:any){
    if($event.keyCode == 13){
      // how to get type values
      console.log($event.target.value)

    }
  }
  // event filtering, much simpler and cleaner than up top
onKeyupTwo(){
  console.log('enter')
}
onKeyupThree(username:string){
  console.log(username)
}
// two way data binding
onKeyupFour(){
  console.log(this.userName);
  
}
}
