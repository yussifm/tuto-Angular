import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './comp/test/test.component';
import { TestService } from './services/test.service';
import { HttpClient} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
