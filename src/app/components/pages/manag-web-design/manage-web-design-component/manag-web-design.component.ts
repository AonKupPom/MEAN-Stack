import { WebDesignService } from './../../../../services/webDesign.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-manag-web-design',
  templateUrl: './manag-web-design.component.html',
  styleUrls: ['./manag-web-design.component.css']
})
export class ManagWebDesignComponent implements OnInit {


  WebDesigns: any = [];
  webDesignForm: FormGroup;
  editForm: FormGroup;
  editId;
  deleteId;
  deleteIndex;
  constructor(
    public formBuilder: FormBuilder,
    private _webDesignService: WebDesignService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.webDesignForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      promotion: [''],
      page_amouth: [''],
    })

    this.editForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      promotion: [''],
      page_amouth: [''],
    })
   }

  ngOnInit(): void {
    this._webDesignService.getWebDesigns().subscribe(res => {
      this.WebDesigns = res;
    })
  }

  delete(id: any, i: any) {
      this._webDesignService.deleteWebDesign(id).subscribe(res => {
        this.WebDesigns.splice(i,1)
      })
  }

  open(content) {
    this.modalService.open(content);
  }

  openEdit(content,id) {
    this.editId = id;
    this._webDesignService.getWebDesign(id).subscribe(res => {
      this.editForm.setValue({
        title: res.title,
        description: res.description,
        price: res.price,
        promotion: res.promotion,
        page_amouth: res.page_amouth,
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
    this._webDesignService.addWebDesign(this.webDesignForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'เพิ่มข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการเพิ่มข้อมูลของท่านแล้ว'
      })
      this._webDesignService.getWebDesigns().subscribe(res => {
        this.WebDesigns = res;
        this.webDesignForm.reset();
      })
    }, (err) => {
      console.log(err);
    })
  }

  onUpdate() {
    this._webDesignService.updateWebDesign(this.editId, this.editForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการแก้ไขข้อมูลเสร็จสิ้น'
      })
      this._webDesignService.getWebDesigns().subscribe(res => {
        this.WebDesigns = res;
      })
    }, (err) => {
      console.log(err)
    })
  }


}
