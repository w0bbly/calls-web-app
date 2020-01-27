import { Component, OnInit } from '@angular/core';
import { CallService } from '../call.service';
import { StatsDTO } from '../model/model';

@Component({
  selector: 'app-calls-stats',
  templateUrl: './calls-stats.component.html',
  styleUrls: ['./calls-stats.component.scss']
})
export class CallsStatsComponent implements OnInit {

  stats: StatsDTO[] = [];

  constructor(private callService: CallService) { }

  ngOnInit() {
    this.getStats();
  }

  async getStats() {
    // tslint:disable-next-line: max-line-length
    this.callService.getStatistics().toPromise().then(
      (data: any) => {
        this.stats = data;
      });
  }
}
