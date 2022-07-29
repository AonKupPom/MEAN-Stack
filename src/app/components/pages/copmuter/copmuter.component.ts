import { ComputerService } from './../../../services/computer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-copmuter',
  templateUrl: './copmuter.component.html',
  styleUrls: ['./copmuter.component.css']
})
export class CopmuterComponent implements OnInit {
  path = "https://aon-mean-backend.herokuapp.com/";
  imagePath;
  image;
  editImage;
  defaultImage : any;
  imgURL: any;
  ImageName : any;
  editimgURL : any;
  Computers: any = [];
  computerForm: FormGroup;
  editForm: FormGroup;
  editId;
  deleteId;
  deleteIndex;
  constructor(
    public formBuilder: FormBuilder,
    private _computerService: ComputerService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.computerForm = this.formBuilder.group({
      name: [''],
      price: [''],
      model: [''],
      specification: [''],
      image: [''],
      description: [''],
      type: ['']
    })

    this.editForm = this.formBuilder.group({
      name: [''],
      price: [''],
      model: [''],
      specification: [''],
      image: [null],
      description: [''],
      type: ['']
    })
  }

  ngOnInit(): void {
    this._computerService.getComputers().subscribe(res => {
      this.Computers = res;
    })
  }

  delete(id: any, i: any) {
    this._computerService.deleteComputer(id).subscribe(res => {
      this.Computers.splice(i, 1)
    })
  }

  open(content) {
    this.modalService.open(content);
  }

  openEdit(content, id) {
    this.editId = id;
    this._computerService.getComputer(id).subscribe(res => {
      this.editimgURL = this.path + `${res.image}`;
      this.defaultImage = res.image.substring(res.image.indexOf('uploads')+8);
      this.editForm.patchValue({
        name: res.name,
        price: res.price,
        model: res.model,
        specification: res.specification,
        description: res.description,
        type: res.type
      })
      this.modalService.open(content);
    })
  }

  openDelete(content, id: any, i: any) {
    this.deleteId = id;
    this.deleteIndex = i;
    this.modalService.open(content);
  }

  onSubmit(): any {
    this._computerService.addComputer(this.computerForm.value, this.imagePath).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'เพิ่มข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการเพิ่มข้อมูลของท่านแล้ว'
      })
      this._computerService.getComputers().subscribe(res => {
        this.Computers = res;
        this.addForm_reset()
      })
    }, (err) => {
      console.log(err);
    })
  }

  onUpdate() {
    this._computerService.updateComputer(this.editId, this.editForm.value, this.imagePath).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการแก้ไขข้อมูลเสร็จสิ้น'
      })

      this._computerService.getComputers().subscribe(res => {
        this.Computers = res;
        this.editForm_reset();
      })
    }, (err) => {
      console.log(err)
    })
  }

  addForm_reset(){
    this.imgURL = null;
    this.ImageName = null;
    this.computerForm.reset();
  }

  editForm_reset(){
    this.editimgURL = null;
    this.defaultImage = null;
    this.editForm.reset();
  }

  preview(files , id) {
    if (files.files.length === 0)
      return;
    var reader = new FileReader();
    this.imagePath = files.files;
    reader.readAsDataURL(files.files[0]);
    reader.onload = (_event) => {
      if(id == 0){
      this.imgURL = reader.result;
      this.ImageName = files.files[0].name;
      }else{
      this.editimgURL = reader.result;
      this.defaultImage = files.files[0].name
      }
      }
    }
}
