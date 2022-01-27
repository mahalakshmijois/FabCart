import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoProductDialog } from '../dialog/no-product-dialog';
import { ProductDialog } from '../dialog/product-dialog';

@Component({
  selector: 'app-products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productDetails:any = [];  
  public productCategory = [];
  productList : any;
 quantity;
 btndisabled = false;
  constructor(public http: HttpClient,
    private dialog: MatDialog
    ) {
      
     }

  ngOnInit(): void {
    this.getProducts();
      // this.selectCategory();
    
  }
  getProducts(){
    return this.http.get(`/assets/input.json`).subscribe(data =>{
    this.productList = data;
    this.selectCategory();
    })
  }
  selectCategory(){
    let category = [];
    category = this.productList?.map(prod => prod?.p_category);
    this.productDetails = this.productList;
    let distinctCategory:any = [...new Set(category)];
    this.productCategory = distinctCategory.filter(word => word);
  }

  SearchCategory(category: string) {  
    let obj = this.productList?.filter((m) => m?.p_category == category);  
    this.productDetails = obj;  
    return this.productDetails;  
    }  

    addToCart(quantity,product){
      if(quantity <= product.p_availability){
        const dialogRef = this.dialog.open(ProductDialog,{
          height: 'auto',
          width: '600px',
          data:{
            quantityAdded : quantity,
            selectedProduct: product
          }
        });
    
        dialogRef.afterClosed().subscribe( a => {
        });
      }
      else{
        const dialogRef = this.dialog.open(NoProductDialog,{
          height: 'auto',
          width: '600px',
          data:{
            quantityAdded : quantity,
            selectedProduct: product
          }
        });
    
        dialogRef.afterClosed().subscribe( a => {
        });
      
    }
    
}
}
