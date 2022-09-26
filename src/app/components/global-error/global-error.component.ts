import { ErrorService } from './../../services/error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {

  constructor(public errorService: ErrorService) { }

  ngOnInit(): void {
  }

}
