import {bindable} from 'aurelia-framework';

export class ModalHeader {
  @bindable title = '';
  @bindable close = closeModal;
  @bindable icon = '';
}
function closeModal(){
  console.log('Please bind a function to close modal - "<modal-header close.call="myFunc()"></modal-header>');
}
