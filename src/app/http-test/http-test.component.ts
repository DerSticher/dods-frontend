import { Input, Component, OnInit, ElementRef } from '@angular/core';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'dods-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss'],
  providers: [
      HttpService
  ],
})
export class HttpTestComponent implements OnInit {

    private response : string;

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  sendRequest(url) {
      this.http.setUseBaseurl(false);
      this.http.get(url, []).subscribe((res: any) => {
          this.response = JSON.stringify(res);
      });
      this.http.setUseBaseurl(true);
  }

}
