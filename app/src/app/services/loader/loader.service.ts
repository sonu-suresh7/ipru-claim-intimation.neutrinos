/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { spinnerComponent } from '../../components/modals/spinner.component';


@Injectable()
export class loaderService {
    dialogRef;

    constructor(public dialog: MatDialog) { }

    show() {
        if (!this.dialogRef) {
            this.dialogRef = this.dialog.open(spinnerComponent,
                {
                    data: {},
                    height: 'auto',
                    width: 'auto',
                    panelClass: 'loader-dialog',
                    disableClose: true
                });
        }
    }

    hide() {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null;
        }
    }
}
