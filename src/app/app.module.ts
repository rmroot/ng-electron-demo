import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElectronDemoComponent } from './electron-demo/electron-demo.component';
import { ElectronService } from 'ngx-electron';
@NgModule({
  declarations: [
    AppComponent,
    ElectronDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
