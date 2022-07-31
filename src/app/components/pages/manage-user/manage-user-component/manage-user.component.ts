import { AuthService } from './../../../../services/auth.service';
import { UserService } from './../../../../services/user.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  Users: any = [];
  User = {
    name: '',
    role: ''
  }
  showModal = false
  editForm: FormGroup;
  editId;
  constructor(
    public formBuilder: FormBuilder,
    private _userService: UserService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private auth: AuthService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.editForm = this.formBuilder.group({
      role: [],
    })
   }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(res => {
      this.Users = res;
      this.Users = this.Users.filter(user => user._id != this.auth.currentUser.user_id);
    })
  }

  openEdit(content,id) {
    this.editId = id;
    this._userService.getUser(id).subscribe(res => {
      this.User.name = `${res.title}${res.firstname} ${res.lastname}`
      this.editForm.patchValue({role: res.role})
      this.modalService.open(content);
    })
  }

  onUpdate() {
    this._userService.updateUser(this.editId, this.editForm.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการแก้ไขข้อมูลเสร็จสิ้น'
      })
      this._userService.getUsers().subscribe(res => {
        this.Users = res;
        this.Users = this.Users.filter(user => user._id != this.auth.currentUser.user_id);
      })
    }, (err) => {
      console.log(err)
    })
  }

}
