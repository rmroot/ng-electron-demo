import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { AppElectronService } from '../app-electron.service';

@Component({
  selector: 'app-electron-demo',
  templateUrl: './electron-demo.component.html',
  styleUrls: ['./electron-demo.component.css']
})
export class ElectronDemoComponent implements OnInit {

  appType: string;
  isElectron: boolean;
  constructor(private _electronService: ElectronService, private _appElectronService: AppElectronService) { }

  ngOnInit() {
    if(this._electronService.isElectronApp){
      this.isElectron = true;
      this.appType = "I am running in an electron app!";
      this._appElectronService.addMenu();
    }else{
      this.isElectron = false;
      this.appType = "I'm running on the web!";
    }

  }


  showDialog(){
    this._appElectronService.openDialog();
  }
}
