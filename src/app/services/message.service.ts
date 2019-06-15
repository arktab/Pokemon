import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessageComponent } from '../components/message/message.component';
import { ModalType } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public modal: MatDialog ) { }

  getTitle(modalType: ModalType): string{
    switch(modalType){
      case ModalType.Info:
      default:
          return 'Info Message'; 
      case ModalType.Warning:
          return 'Warning';
      case ModalType.Error:
          return 'Error';
      case ModalType.Confirm:
          return 'Confirm';
    } 
  } 

  getIcon(modalType: ModalType): string{
    switch (modalType){
      case ModalType.Info:
        default:
          return'info';
      case ModalType.Warning:
          return'warning';
      case ModalType.Error:
          return 'error';
      case ModalType.Confirm:
          return 'check_circle';
    }
  }

  getColor(modalType: ModalType): string{
    switch (modalType){
      case ModalType.Info:
      case ModalType.Confirm:
      default:
        return 'primary';
      case ModalType.Warning:
        return 'accent';
      case ModalType.Error:
        return 'warn';
    }
  }

  openModal(message: string, modalType?: ModalType, autoHide?: boolean) {
    const modalWindow = this.modal.open(MessageComponent, {
      width: '400px',
      data: {
        title:this.getTitle(modalType),
        icon:this.getIcon(modalType),
        color:this.getColor(modalType),
        content: message,
        modalType: modalType
      }
    });
    if (autoHide){
      modalWindow.afterOpen().subscribe((res)=> {
        setTimeout(()=>{
          modalWindow.close();
        }, 1500);
      });
    }
  }
}
