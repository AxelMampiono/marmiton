import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.page.html',
  styleUrls: ['./form-category.page.scss'],
})
export class FormCategoryPage implements OnInit {

  constructor(private http: HttpClient) { }
  addCategory(form: NgForm){
    this.http.post('http://localhost/marmiton/marmiton/src/category.php?action=add', JSON.stringify(form.value)).toPromise().then((response:any)=>{console.log(response) })

  }

  ngOnInit() {
  }

}
