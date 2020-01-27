import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CallService } from '../call.service';
import { CallDTO } from '../model/model';

@Component({
  selector: 'app-calls-view',
  templateUrl: './calls-view.component.html',
  styleUrls: ['./calls-view.component.scss']
})
export class CallsViewComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Caller', 'Callee', 'Start', 'End', 'Type', 'Action'];
  dataSource: MatTableDataSource<CallDTO> = new MatTableDataSource();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20];
  filterType = "INBOUND";

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private callService: CallService) { }

  ngOnInit() {
    this.getCalls();
  }

  async getCalls() {
    // tslint:disable-next-line: max-line-length
    this.callService.getAllCalls(0, this.pageSize, this.filterType).toPromise().then(
      (data: any) => {
        this.dataSource = new MatTableDataSource<CallDTO>(data.content);
        this.paginator.length = data.totalElements;
      });
  }

  clickPage(ev: any) {
    this.callService.getAllCalls(ev.pageIndex, ev.pageSize, this.filterType).toPromise().then(
      (data: any) => {
        this.dataSource = new MatTableDataSource<CallDTO>(data.content);
        this.paginator.length = data.totalElements;
      }
    );
  }

  filter(ev: any) {
    this.filterType = ev.target.value;
    this.getCalls();
  }

  deleteRow(element: any) {
    this.callService.deleteCallById(element.id).subscribe(data => {
      this.getCalls();
    })
  }
}
