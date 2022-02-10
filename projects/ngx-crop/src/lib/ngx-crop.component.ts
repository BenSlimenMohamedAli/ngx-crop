import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-crop',
  templateUrl: './ngx-crop.component.html',
  styleUrls: ['./ngx-crop.component.scss'],
})
export class NgxCropComponent implements OnInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  context: CanvasRenderingContext2D;

  // inputs
  @Input() width: number = 200;
  @Input() height: number = 200;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext(
      '2d'
    ) as any;
  }

  canvasClick() {
    this.fileInput.nativeElement.click();
  }
}
