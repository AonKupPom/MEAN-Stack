import { ServerService } from './../../../../services/server.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-server',
  templateUrl: './manage-server.component.html',
  styleUrls: ['./manage-server.component.css']
})
export class ManageServerComponent implements OnInit {

  Servers: any = [];
  serverForm: FormGroup;
  editForm: FormGroup;
  editId;
  deleteId;
  deleteIndex;
  constructor(
    public formBuilder: FormBuilder,
    private _serverService: ServerService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.serverForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      promotion: [''],
      space: [''],
      bandwidth: [''],
      server_amouth: [''],
      server_type: [''],
      operating_system: [''],
    })

    this.editForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      promotion: [''],
      space: [''],
      bandwidth: [''],
      server_amouth: [''],
      server_type: [''],
      operating_system: [''],
    })
   }

  ngOnInit(): void {
    this._serverService.getServers().subscribe(res => {
      this.Servers = res;
    })
  }

  delete(id: any, i: any) {
      this._serverService.deleteServer(id).subscribe(res => {
        this.Servers.splice(i,1)
      })
  }

  open(content) {
    this.modalService.open(content);
  }

  openEdit(content,id) {
    this.editId = id;
    this._serverService.getServer(id).subscribe(res => {
      this.editForm.setValue({
        title: res.title,
        description: res.description,
        price: res.price,
        promotion: res.promotion,
        space: res.space,
        bandwidth: res.bandwidth,
        server_amouth: res.server_amouth,
        server_type: res.server_type,
        operating_system: res.operating_system,
      })
      this.modalService.open(content);
    })
  }

  openDelete(content, id: any, i: any){
    this.deleteId = id;
    this.deleteIndex = i;
    this.modalService.open(content);
  }

  onSubmit(): any {
    this._serverService.addServer(this.serverForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'เพิ่มข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการเพิ่มข้อมูลของท่านแล้ว'
      })
      this._serverService.getServers().subscribe(res => {
        this.Servers = res;
        this.serverForm.reset();
      })
    }, (err) => {
      console.log(err);
    })
  }

  onUpdate() {
    this._serverService.updateServer(this.editId, this.editForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการแก้ไขข้อมูลเสร็จสิ้น'
      })
      this._serverService.getServers().subscribe(res => {
        this.Servers = res;
      })
    }, (err) => {
      console.log(err)
    })
  }


}
