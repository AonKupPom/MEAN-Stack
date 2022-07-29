import { CloudService } from './../../../services/cloud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-cloud',
  templateUrl: './manage-cloud.component.html',
  styleUrls: ['./manage-cloud.component.css']
})
export class ManageCloudComponent implements OnInit {

  Clouds: any = [];
  cloudForm: FormGroup;
  editForm: FormGroup;
  editId;
  deleteId;
  deleteIndex;
  constructor(
    public formBuilder: FormBuilder,
    private _cloudService: CloudService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.cloudForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      promotion: [''],
      space: [''],
    })

    this.editForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      promotion: [''],
      space: [''],
    })
   }

  ngOnInit(): void {
    this._cloudService.getClouds().subscribe(res => {
      this.Clouds = res;
    })
  }

  delete(id: any, i: any) {
      this._cloudService.deleteCloud(id).subscribe(res => {
        this.Clouds.splice(i,1)
      })
  }

  open(content) {
    this.modalService.open(content);
  }

  openEdit(content,id) {
    this.editId = id;
    this._cloudService.getCloud(id).subscribe(res => {
      this.editForm.setValue({
        title: res.title,
        description: res.description,
        price: res.price,
        promotion: res.promotion,
        space: res.space,
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
    this._cloudService.addCloud(this.cloudForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'เพิ่มข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการเพิ่มข้อมูลของท่านแล้ว'
      })
      this._cloudService.getClouds().subscribe(res => {
        this.Clouds = res;
        this.cloudForm.reset();
      })
    }, (err) => {
      console.log(err);
    })
  }

  onUpdate() {
    this._cloudService.updateCloud(this.editId, this.editForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการแก้ไขข้อมูลเสร็จสิ้น'
      })
      this._cloudService.getClouds().subscribe(res => {
        this.Clouds = res;
      })
    }, (err) => {
      console.log(err)
    })
  }

}
