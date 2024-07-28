import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private selectedTypeSubject = new BehaviorSubject<string>('');
  selectedType$ = this.selectedTypeSubject.asObservable();

  constructor() {}

  selectType(type: string) {
    this.selectedTypeSubject.next(type);
  }

  
  private selectedItemSource = new BehaviorSubject<{ type: string, item: any }>({ type: '', item: null });


  selectedItem$ = this.selectedItemSource.asObservable();

  setSelectedItem(selectedItem: { type: string, item: any }) {
    this.selectedItemSource.next(selectedItem);
  }



  private transferredData: any;
  transferDataToA7(data: any): void {
    this.transferredData = data;
  }

  getTransferredData(): any {
    return this.transferredData;
  }









}
