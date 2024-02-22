import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { CookieService } from 'ngx-cookie-service';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [CookieService],
})
export class AppServerModule { }
