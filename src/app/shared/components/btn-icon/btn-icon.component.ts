import { Component, Input } from '@angular/core';
import { BtnIcon } from '../../models/BtnIcon';

@Component({
  selector: 'app-btn-icon',
  templateUrl: './btn-icon.component.html',
  styleUrls: ['./btn-icon.component.scss']
})
export class BtnIconComponent {

@Input() btn?:any;

}
