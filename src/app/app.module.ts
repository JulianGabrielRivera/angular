import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// import each separate components like react as well
import { AppComponent } from './app.component';
import { Navbarcomponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';

@NgModule({
  // here we declare it, so its like <Route> and then it actually becomes visible we declare it here so we can use it but then we also have to use selector in order for rendering
  declarations: [
    AppComponent,
    Navbarcomponent,
    PostComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
