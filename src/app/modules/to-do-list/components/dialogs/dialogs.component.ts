import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [MatDialogModule ],
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.scss'
})
export class DialogsComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
