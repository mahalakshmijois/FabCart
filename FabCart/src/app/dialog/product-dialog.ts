import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.html',
})
export class ProductDialog implements OnInit {
    selectedProduct: any;
    quantity: any;
    constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ProductDialog>) {
        if(data){
        this.selectedProduct = data.selectedProduct;
        this.quantity = data.quantityAdded;
        }
    }
   ngOnInit(): void {
    
        
    }
    submit(){
        alert("Product successfully added!!")
    }
}