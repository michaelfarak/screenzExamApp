import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { ImageURLService } from './image-url.service';
import { Subscription } from 'rxjs';
import { SelectImageComponent } from './select-image/select-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  imgURLSubscription: Subscription;
  constructor(public dialog: MatDialog, public imageURLService: ImageURLService) {
  }

  @ViewChild(SelectImageComponent, {static: false}) SelectImageData;

  imgURL: any;
  buttonDisabled: boolean;

  ngOnInit( ) {
    this.imgURLSubscription = this.imageURLService.imgURL$.subscribe(newImgDAta => {
      if(newImgDAta.valid){
        this.imgURL = newImgDAta.url;
      }    else {
      }
    })
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      imgURL: this.imgURL,
      buttonDisabled: this.buttonDisabled
    }
    this.dialog.open(ModalComponent, dialogConfig);    
  }
}