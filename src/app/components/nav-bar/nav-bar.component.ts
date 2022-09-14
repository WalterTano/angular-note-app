import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("btnRed") redButton?: ElementRef<HTMLInputElement>;
  @ViewChild("btnGreen") greenButton?: ElementRef<HTMLInputElement>;
  @ViewChild("btnYellow") yellowButton?: ElementRef<HTMLInputElement>;
  @ViewChild("btnSky") skyButton?: ElementRef<HTMLInputElement>;

  onlySelectedCards(): string[] {
    let colorsToDelete: string[] = [];

    if(this.redButton!.nativeElement.checked){
      colorsToDelete.push("bg-danger");
    }
    if(this.greenButton!.nativeElement.checked){
      colorsToDelete.push("bg-success");
    }
    if(this.yellowButton!.nativeElement.checked){
      colorsToDelete.push("bg-warning");
    }
    if(this.skyButton!.nativeElement.checked){
      colorsToDelete.push("bg-info");
    }
    return colorsToDelete;
  }

}
