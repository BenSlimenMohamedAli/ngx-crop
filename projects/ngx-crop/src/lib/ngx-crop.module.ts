import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCropComponent } from './ngx-crop.component';

@NgModule({
  declarations: [NgxCropComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NgxCropComponent],
})
export class NgxCropModule {}
