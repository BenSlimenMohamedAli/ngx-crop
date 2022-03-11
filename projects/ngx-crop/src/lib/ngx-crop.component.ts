import { utils } from './utils';
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
  @Input() placeholder: string = 'input image';

  // variables
  selectedImage: string;
  imageObject: HTMLImageElement;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext(
      '2d'
    ) as any;

    this.setTextPlaceholder();
    this.initialize();
  }

  setImage() {
    let image = new Image();

    this.context.lineWidth = 3;
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000';
    image.onload = () => {
      this.context.drawImage(
        image,
        0,
        0,
        this.width,
        (this.width * image.height) / image.width
      );
    };
    image.src = this.selectedImage;

    this.imageObject = image;
  }

  initialize() {
    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = 'high';
    this.context.imageSmoothingEnabled = true;
  }

  canvasClick() {
    if (!this.selectedImage) this.fileInput.nativeElement.click();
  }

  async onSelectImage(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files[0];

    this.selectedImage = (await this.toBase64(file)) as string;

    this.setImage();
  }

  toBase64(file: File): Promise<string | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  setTextPlaceholder() {
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    let fontSize = 10;
    this.context.font = fontSize + 'px sans-serif';
    this.context.fillStyle = '#606060';
    this.context.fillText(this.placeholder, this.width / 2, this.height / 2);
  }

  onPointerMove(event: Event) {
    event.preventDefault();
    let pointerCoord = utils.getPointerCoords(event, {
      canvas: this.canvas.nativeElement,
      quality: 1,
    });
    let image = new Image();

    this.context.lineWidth = 3;
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000';
    image.onload = () => {
      this.context.rect(
        pointerCoord.x,
        pointerCoord.y,
        this.width,
        (this.width * image.height) / image.width
      );
    };
    image.src = this.selectedImage;

    this.imageObject = image;
  }

  onDoubleClick(event: Event) {
    console.log('here');
  }
}
