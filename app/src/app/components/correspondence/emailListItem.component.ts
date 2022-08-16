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
//append_imports_end

@Component({
  selector: 'bh-emailListItem',
  templateUrl: './emailListItem.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class emailListItemComponent {
  @Input('email')
  public email: any = {};
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
      this.sd_xqv9Mx43FWlVtAHy(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xqv9Mx43FWlVtAHy(bh) {
    try {
      bh = this.sd_0BcV9wix8zE9k036(bh);
      //appendnew_next_sd_xqv9Mx43FWlVtAHy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xqv9Mx43FWlVtAHy');
    }
  }

  replyMailAction(mail: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { mail: mail };
      bh.local = {};
      //appendnew_next_replyMailAction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sExGlsd4sZn1BlSU');
    }
  }

  forwardMailAction(mail: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { mail: mail };
      bh.local = { rsnComponent: 'EMAIL_COMPOSE' };
      //appendnew_next_forwardMailAction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SQ4vT37X9BalH6J8');
    }
  }

  //appendnew_flow_emailListItemComponent_start

  sd_0BcV9wix8zE9k036(bh) {
    try {
      bh = this.sd_btXxRjrVbuWzLNWR(bh);
      //appendnew_next_sd_0BcV9wix8zE9k036
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0BcV9wix8zE9k036');
    }
  }

  sd_btXxRjrVbuWzLNWR(bh) {
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
      };

      // "subject": "Candyman 3: Day of the Dead",
      // "from": "hlillb@jimdo.com",
      // "date": "1629559163000",
      // "body": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      // "uid": "6927b47c-b66f-42d9-9b5c-b94e56d903ec"
      //appendnew_next_sd_btXxRjrVbuWzLNWR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_btXxRjrVbuWzLNWR');
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
  //appendnew_flow_emailListItemComponent_Catch
}
