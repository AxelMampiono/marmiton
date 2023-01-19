import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.page.html',
  styleUrls: ['./list-category.page.scss'],
})
export class ListCategoryPage implements OnInit {

  category:any
  constructor(private http: HttpClient) { }
  delete(id: any){

    this.http.post('http://localhost/marmiton/marmiton/src/category.php?action=delete', JSON.stringify({'id':id})).toPromise().then((response: any)=>{console.log(response)});

    this.ngOnInit();
  }


  ngOnInit() {

    this.http.get('http://localhost/marmiton/marmiton/src/category.php?action=getall').toPromise().then((response: any)=>{this.category=response});

  }

}
