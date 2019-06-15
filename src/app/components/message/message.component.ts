import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { IModal, ModalType }from '../../model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent  {
  modalType = ModalType;
  constructor(@Inject(MAT_DIALOG_DATA) public data: IModal) { }

}
