import { Injectable } from '@angular/core';
import {Storage} from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  async store(storageKey: string, val: any){
    const encryptValue = btoa(escape(JSON.stringify(val)));
    await Storage.set({
      key:storageKey,
      value:encryptValue
    });
  }
  async get(storageKey: string){
    const res = await Storage.get({key:storageKey});
    if(res.value){
      return JSON.parse(unescape(atob(res.value)));
    }else{
      return false;
    }
  }

  async removeItem(storageKey: string){
    await Storage.remove({key:storageKey});
  }

  async clear(){
    await Storage.clear();
  }
}
