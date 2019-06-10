import { Component, OnInit, Inject, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageURLService } from '../image-url.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {

  imgURL: string;
  saveDisabled: boolean;
  imgURLSubscription: Subscription;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public imageURLService: ImageURLService,
    ) {
    }

  public event: EventEmitter<any> = new EventEmitter();

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    this.imageURLService.emitImageData({url: this.imgURL, valid: true, saveDisabled: false});
    this.close()

  }

  close() {
    this.dialogRef.close();
}

  ngOnInit() {
    this.saveDisabled= true;
    this.imgURLSubscription = this.imageURLService.imgURL$.subscribe(newImgDAta => {
      this.imgURL = newImgDAta.url;
      this.saveDisabled = newImgDAta.saveDisabled;
    })
  }

}