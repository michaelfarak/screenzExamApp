import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageURLService {
  private imgURL = new Subject< {url: string, valid: boolean, saveDisabled: boolean}>();
  imgURL$ = this.imgURL.asObservable();

  emitImageData (imgData: {url: string, valid: boolean, saveDisabled: boolean}) {this.imgURL.next(imgData);
  }


  constructor() { }
}
