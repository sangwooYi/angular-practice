// import { Directive, Input, forwardRef } from '@angular/core'
// import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms'

// export const CUSTOM_VALIDATOR: any = {
//   provide: NG_VALIDATORS,
//   useExisting: forwardRef(() => CustomValidator),
//   multi: true
// }

// @Directive({
//   selector: '[myOwnValidate][ngModel]',
//   providers: [CUSTOM_VALIDATOR]
// })
// export class CustomValidator implements Validator {
//   // 반환값의 key는 string value는 아무거나
//   //{[key: string]: any}
//   validate(control: AbstractControl): {[key: string]: any} | null {
//     return null;
//   }
// }

// const MIN_VALIDATOR = {
//   provide: NG_VALIDATORS,
//   useExisting: forwardRef(() => MinNumValueValidator),
//   multi: true
// };

// @Directive({
//   selector: '[min][ngModel]', //css 선택자로 지정법
//   providers: [MIN_VALIDATOR]
// })
// export class MinNumValueValidator implements Validator {
//   @Input() min!: string;

//   validate(control: AbstractControl): { [key: string]: any} | null {
//     if (this.min != null) {
//       const min = Number.parseInt(this.min, 10);
//       return control.value >= min ? null : { 'min': `${this.min}이상 값을 입력해라`}
//     }
//     return null;
//   }
// }

// const MAX_VALIDATOR = {
//   provide: NG_VALIDATORS,
//   useExisting: forwardRef(() => MaxNumValueValidator),
//   multi: true
// };

// @Directive({
//   selector: '[max][ngModel]',
//   providers: [MAX_VALIDATOR]
// })
// export class MaxNumValueValidator implements Validator {
//   @Input() max!: string;

//   validate(control: AbstractControl): { [key: string]: any} | null {
//     if (this.max != null) {
//       // 10진수로 변환하란 의미
//       const max = Number.parseInt(this.max, 10);
//       return control.value <= max ? null : { 'max': `${this.max} 이하의 값을 입력해라`}
//     }
//     return null;
//   }
// }