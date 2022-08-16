/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { DomSanitizer } from '@angular/platform-browser'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-emailView',
  templateUrl: './emailView.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class emailViewComponent implements AfterViewInit {
  @Input('email')
  public email: any = {};
  @ViewChild('iframe')
  public iframe: any = null;
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_6gTADwU0f3ICexqN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6gTADwU0f3ICexqN(bh) {
    try {
      bh = this.sd_pcR7UyL3FKQbrVW2(bh);
      //appendnew_next_sd_6gTADwU0f3ICexqN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6gTADwU0f3ICexqN');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_apYH2Ufr34A9OF3K(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VP1nsqGZcd6hUF69');
    }
  }

  sd_UYoQLexsK1ypr8sa(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lfF05WFlM5cuiqhM(bh);
      //appendnew_next_sd_UYoQLexsK1ypr8sa
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UYoQLexsK1ypr8sa');
    }
  }

  //appendnew_flow_emailViewComponent_start

  sd_pcR7UyL3FKQbrVW2(bh) {
    try {
      this.page.iframeContainerHeight = '100%';
      bh = this.getInjectedSanitizer(bh);
      //appendnew_next_sd_pcR7UyL3FKQbrVW2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pcR7UyL3FKQbrVW2');
    }
  }

  getInjectedSanitizer(bh) {
    try {
      bh.sanitizer = this.__page_injector__.get(DomSanitizer);
      bh = this.sd_YythX1l9uWNpacjJ(bh);
      //appendnew_next_getInjectedSanitizer
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_phW25x3v8hn0KG4f');
    }
  }

  sd_YythX1l9uWNpacjJ(bh) {
    try {
      const page = this.page;
      page.labels = {
        from: {
          get label() {
            return page.locales.keys.from;
          },
        },
        sender: {
          get label() {
            return page.locales.keys.sender;
          },
        },
        to: {
          get label() {
            return page.locales.keys.emailKeys.to;
          },
        },
        cc: {
          get label() {
            return page.locales.keys.emailKeys.cc;
          },
        },
      };
      page.html = bh.sanitizer.bypassSecurityTrustHtml(this.email.body);

      //appendnew_next_sd_YythX1l9uWNpacjJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YythX1l9uWNpacjJ');
    }
  }

  sd_apYH2Ufr34A9OF3K(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, { iframe: this.iframe });
      //appendnew_next_sd_apYH2Ufr34A9OF3K
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_apYH2Ufr34A9OF3K');
    }
  }

  sd_lfF05WFlM5cuiqhM(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, { iframe: this.iframe });
      bh = this.sd_2gvWTlzUOJ8347RH(bh);
      //appendnew_next_sd_lfF05WFlM5cuiqhM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lfF05WFlM5cuiqhM');
    }
  }

  sd_2gvWTlzUOJ8347RH(bh) {
    try {
      const page = this.page;
      if (bh.pageViews.iframe) {
        const ifelm = bh.pageViews.iframe.nativeElement;
        const ibody = ifelm.contentWindow.frames.document.body;
        page.iframeContainerHeight =
          ibody.getBoundingClientRect()?.height + 50 + 'px';
      }
      //appendnew_next_sd_2gvWTlzUOJ8347RH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2gvWTlzUOJ8347RH');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_emailViewComponent_Catch
}
