import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class AppElectronService {

  constructor(private _electronService: ElectronService) { }


  openDialog() {
    this._electronService.remote.dialog.showOpenDialog(
      {
        properties: ['openFile', 'openDirectory', 'multiSelections']
      }
    )
  }

  addMenu() {
    let menu = this._electronService.remote.Menu.buildFromTemplate([{
      label: 'MY EDIT MENU!',
      submenu: [
        {
          role: 'undo'
        },
        {
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut'
        },
        {
          role: 'copy'
        },
        {
          role: 'paste'
        },
        {
          role: 'pasteandmatchstyle'
        },
        {
          role: 'delete'
        },
        {
          role: 'selectall'
        }
      ]
    }])
    this._electronService.remote.Menu.setApplicationMenu(menu);
  }
}
