import { Component, OnInit } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


 constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    }


  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }

}
