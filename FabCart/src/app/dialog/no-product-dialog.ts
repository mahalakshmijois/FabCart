import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'no-product-dialog',
  template: `
    <h3>The quantity selected should be less than the available quantity.<br/>
         Availabe quantity is   {{quantityAvailable}} Kg.</h3>`,
})
export class NoProductDialog implements OnInit {
    quantityAvailable: any;
    quantity: any;
    constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<NoProductDialog>) {
        if(data){
        this.quantityAvailable = data.selectedProduct.p_availability;
        this.quantity = data.quantityAdded;
        }
    }
   ngOnInit(): void {
    
        
    }
}