import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-read-detail.dialog',
  templateUrl: './read-detail.dialog.component.html',
  styleUrls: ['./read-detail.dialog.component.css']
})
export class ReadDetailDialogComponent {
  title: string;
  object: Observable<any>;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.title = data.title;
    this.object = data.object;
  }

  labels(object: any): string[] {
    return Object.getOwnPropertyNames(object);
  }
}
