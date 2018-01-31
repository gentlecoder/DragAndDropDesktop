import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.less']
})
export class ThirdComponent implements OnInit {
  iframeUrl: SafeUrl;

  constructor(public sanitizer: DomSanitizer,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // let url = this.route.snapshotshot.params['url'];
    this.route.paramMap.subscribe(paramMap => {
      this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(paramMap.get('url'));
    });
  }


}
