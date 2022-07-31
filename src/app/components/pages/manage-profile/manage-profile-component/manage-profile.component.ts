import { UserService } from './../../../../services/user.service';
import { AuthService } from './../../../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {
  current_user = {
    _id: '',
    address: '',
    firstname: '',
    gender: '',
    lastname: '',
    email: '',
    profile_picture: '',
    birthDate: '',
    role: '',
    tel: '',
    title: '',
  }
  profile_picture
  editForm: FormGroup
  path = `${location.origin}/`;
  jwt = new JwtHelperService();

  constructor(
    private auth: AuthService,
    private _userService: UserService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.editForm = this.formBuilder.group({
      title: [''],
      firstname: [''],
      lastname: [''],
      birthDate: [null],
      gender: [''],
      tel: [''],
      address: ['']
    })
  }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(res => {
      this.current_user = res
      this.profile_picture = res.profile_picture
    })
  }

  changeImage(files) {
    this._userService.updateProfile_picture(this.current_user._id, files.files).subscribe(res => {
      this.profile_picture = res
      console.log(res);
    })
  }

  editForm_reset() {
    this.editForm.reset();
  }

  onUpdate() {
    this._userService.updateUser(this.current_user._id, this.editForm.value).subscribe(res => {
      this.auth.getCurrentUser().subscribe(res => {
        this.current_user = res
        localStorage.setItem('token', res.token)
        this.auth.currentUser = this.jwt.decodeToken(res.token);
      })
      Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        text: 'ระบบได้ทำการแก้ไขข้อมูลเสร็จสิ้น'
      })
    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาด',
        text: 'กรุณาตรวจสอบข้อมูลของท่าน',
      })
    })
  }

  openEdit(content) {
    this.editForm.patchValue(this.current_user);
    this.editForm.patchValue({ birthDate: this.current_user.birthDate.substring(0,10) });
    this.modalService.open(content);
  }

}
