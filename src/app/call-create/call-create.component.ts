import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { CallService } from '../call.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CallDTO } from '../model/model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-call-create',
  templateUrl: './call-create.component.html',
  styleUrls: ['./call-create.component.scss']
})
export class CallCreateComponent implements OnInit {

  calls = new FormArray([]);
  callsToSend: CallDTO[] = [];

  createCallForm = this.fb.group({
    callerNumber: ['', Validators.required],
    calleeNumber: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    type: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private callService: CallService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    this.calls.push(this.createCallForm);
  }

  addCall() {
    this.calls.push(this.createCallForm);
  }

  submitCall() {

    for (let call of this.calls.controls) {
      let callObj: CallDTO = new CallDTO();

      callObj.callerNumber = this.createCallForm.get('callerNumber').value;
      callObj.calleeNumber = this.createCallForm.get('calleeNumber').value;
      callObj.startTime = this.createCallForm.get('startTime').value;
      callObj.endTime = this.createCallForm.get('endTime').value;
      callObj.type = this.createCallForm.get('type').value;

      callObj.startTime = this.datePipe.transform(callObj.startTime, "yyyy-MM-ddTHH:mm:ss");
      callObj.endTime = this.datePipe.transform(callObj.endTime, "yyyy-MM-ddTHH:mm:ss");

      this.callsToSend.push(callObj);
    }

    this.callService.createCall(this.callsToSend).subscribe((data: any) => {
      this.router.navigate(['/calls/view']);
    });
  }

}
