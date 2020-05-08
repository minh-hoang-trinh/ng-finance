import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '@ng-finance/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-finance-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {
  @Input() public portfolios: Portfolio[];

  constructor() {}

  ngOnInit(): void {}
}
