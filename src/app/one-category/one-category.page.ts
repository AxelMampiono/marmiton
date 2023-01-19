import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-one-category',
  templateUrl: './one-category.page.html',
  styleUrls: ['./one-category.page.scss'],
})
export class OneCategoryPage implements OnInit {
  c: any;
  category:any;
  constructor(private http:HttpClient, private route:ActivatedRoute, private am:AppModule) { 
    this.c=  this.http.get('http://localhost/marmiton/src/product.php?action=getone&id='+ this.route.snapshot.paramMap.get('id')).toPromise().then((response: any)=>{this.category=response });
    this.category=this.am.waitFor(this.c);
  }


  ngOnInit() {
    this.http.get('http://localhost/marmiton/src/product.php?action=getone&id='+ this.route.snapshot.paramMap.get('id')).toPromise().then((response: any)=>{this.category=response });

  }

}
