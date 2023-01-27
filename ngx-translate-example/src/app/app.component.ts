import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-translate-example';


  onLanguageChange(lang: string){
    this.translateService.use(lang);
  }

  constructor(private translateService: TranslateService)
  {
    this.translateService.setDefaultLang('en');

    this.translateService.use('ka');
  }
}
