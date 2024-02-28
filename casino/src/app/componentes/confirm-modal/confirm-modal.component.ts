import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
  @Output() confirmAction = new EventEmitter<boolean>();
  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  confirm() {
    this.close();
    this.confirmAction.emit(true);
  }

  cancel() {
    this.close();
    this.confirmAction.emit(false);
  }
}