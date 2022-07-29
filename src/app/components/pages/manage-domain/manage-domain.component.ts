import { DomainService } from './../../../services/domain.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-domain',
  templateUrl: './manage-domain.component.html',
  styleUrls: ['./manage-domain.component.css']
})
export class ManageDomainComponent implements OnInit {

  Domains: any = [];
  domainForm: FormGroup;
  editForm: FormGroup;
  editId;
  deleteId;
  deleteIndex;
  constructor(
    public formBuilder: FormBuilder,
    private _domainService: DomainService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.domainForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      promotion: [''],
      space: [''],
      bandwidth: [''],
      domain_amouth: [''],
      email_amouth: [''],
      database_amouth: [''],
    })

    this.editForm = this.formBuilder.group({
      title: [''],
      description: [''],
      price: [''],
      promotion: [''],
      space: [''],
      bandwidth: [''],
      domain_amouth: [''],
      email_amouth: [''],
      database_amouth: [''],
    })
   }

  ngOnInit(): void {
    this._domainService.getDomains().subscribe(res => {
      this.Domains = res;
    })
  }

  delete(id: any, i: any) {
      this._domainService.deleteDomain(id).subscribe(res => {
        this.Domains.splice(i,1)
      })
  }

  open(content) {
    this.modalService.open(content);
  }

  openEdit(content,id) {
    this.editId = id;
    this._domainService.getDomain(id).subscribe(res => {
      this.editForm.setValue({
        title: res.title,
        description: res.description,
        price: res.price,
        promotion: res.promotion,
        space: res.space,
        bandwidth: res.bandwidth,
        domain_amouth: res.domain_amouth,
        email_amouth: res.email_amouth,
        database_amouth: res.database_amouth,
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
    this._domainService.addDomain(this.domainForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'เพิ่มข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการเพิ่มข้อมูลของท่านแล้ว'
      })
      this._domainService.getDomains().subscribe(res => {
        this.Domains = res;
        this.domainForm.reset();
      })
    }, (err) => {
      console.log(err);
    })
  }

  onUpdate() {
    this._domainService.updateDomain(this.editId, this.editForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการแก้ไขข้อมูลเสร็จสิ้น'
      })
      this._domainService.getDomains().subscribe(res => {
        this.Domains = res;
      })
    }, (err) => {
      console.log(err)
    })
  }

}
