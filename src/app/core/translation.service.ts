import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TranslationService {

  constructor(public translate: TranslateService) {
    translate.use('en');
  }

  /**
   * Get translations from translate service.
   *
   * @param keys array Translation keys.
   * @param params object Param Values.
   *
   * @returns Observable Returns an observable modified translation object.
   */
  public getTranslations(keys: string[], params?: object): Observable<any> {
    const mykeys: string[] = keys || [];
    const myparams: object = params || {};

    return this.translate.get(mykeys, myparams).pipe(
      map((response: object) => this.modifyTranslationKeys(response))
    );
  }

  /**
   * Modify translation keys. ex.
   *
   * @param translationObject object Translation object.
   *
   * @returns object Returns a modified translation object.
   */
  private modifyTranslationKeys(translationObject: {[key: string]: any}): object {
    return Object.keys(translationObject)
      .reduce(( accumulator: any, currentValue: any ) => {
        const key: string = currentValue.split('.').pop().toLowerCase();
        accumulator[key] = translationObject[currentValue];
        return accumulator;
      }, {});
  }
}
