import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class BookListComponent implements OnInit {
  Books: any = [];
  bookForm: FormGroup;
  editForm: FormGroup;
  editId;
  deleteId;
  deleteIndex;
  constructor(
    public formBuilder: FormBuilder,
    private _bookService: BookService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      type: ['']
    })

    this.editForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
      type: ['']
    })
   }

  ngOnInit(): void {
    this._bookService.getBooks().subscribe(res => {
      this.Books = res;
    })
  }

  delete(id: any, i: any) {
      this._bookService.deleteBook(id).subscribe(res => {
        this.Books.splice(i,1)
      })
  }

  open(content) {
    this.modalService.open(content);
  }

  openEdit(content,id) {
    this.editId = id;
    this._bookService.getBook(id).subscribe(res => {
      this.editForm.setValue({
        name: res.name,
        price: res.price,
        description: res.description,
        type: res.type
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
    this._bookService.addBook(this.bookForm.value).subscribe(res => {
      this._bookService.getBooks().subscribe(res => {
        this.Books = res;
        this.bookForm.reset();
      })
    }, (err) => {
      console.log(err);
    })
  }

  onUpdate() {
    this._bookService.updateBook(this.editId, this.editForm.value).subscribe(res => {
      this._bookService.getBooks().subscribe(res => {
        this.Books = res;
      })
    }, (err) => {
      console.log(err)
    })
  }

}
