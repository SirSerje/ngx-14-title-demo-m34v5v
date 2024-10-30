import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user/shared/user.service';
import { DogsModule } from './dogs/dogs.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // DogsModule,
  ],
  declarations: [AppComponent, SidebarComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
