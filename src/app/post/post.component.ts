import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // typescript variable
  title:string = "list of posts";
  messagePost: string ="hi";
  postParentMessage:string = 'message coming from the post parent';
  childMessage:string = 'From child component';
  outputChildMessage:string = 'Message from child component with output'
  @Input() fromParent:string;
  // the event emitter is a string so we say string.
@Output() messageEvent = new EventEmitter<string>();
  // open the gate to put the variable here
constructor(){
// safer solution, this way fromparent will always have a value, we need this initial value so it knows at runtime it has a value and doesnt break
  this.fromParent='';

}
ngOnInit(): void {
  
}
sendMessage(){
  console.log('clicked');
  // this emits message so sends the message of the outputchildmessage from inside this class
  this.messageEvent.emit(this.outputChildMessage)
  
}
}
