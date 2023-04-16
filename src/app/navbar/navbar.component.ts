// we use typescript instead of javascript
import {Component} from "@angular/core"

// this is our component decorator.
@Component({
    // similar to css selectors
    selector:'app-navbar',
    // loads html in browser
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
// typescript class, we have to add typescript decorator 

// like export default NavBar in react
export class Navbarcomponent {
    title = 'angularIntro';
  }
  