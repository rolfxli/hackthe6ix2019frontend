import { Component, OnInit } from '@angular/core';
import { Urls } from '../urls.model';
import { UrlsService} from "../urls.service";

@Component({
  selector: 'component-latestimage',
  templateUrl: './latestimage.component.html',
  styleUrls: ['./latestimage.component.scss']
})
export class LatestimageComponent implements OnInit {

  urls = [];

  constructor(private urlService: UrlsService) { }

  ngOnInit() {
    //this.fetchURL()
    this.urls = [];
    this.urls.push('https://archivedaddy.s3.us-east-2.amazonaws.com/zoo_test.jpg');
  }

  fetchURL() {
    this.urlService
    .getURL()
      .subscribe((data: []) => {
        this.urls = data;
        console.log('Data requested');
        console.log(this.urls);
      });
  }

}
