import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckValidService {

  constructor() { }

  isNotBlank(value: string): boolean {
    if (value.trimStart().trimEnd() == '') {
      return false
    }
    return true
  }  
}
