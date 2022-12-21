import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CartComponent } from '.';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule],
  exports: [CartComponent],
})
export class CartModule {}
