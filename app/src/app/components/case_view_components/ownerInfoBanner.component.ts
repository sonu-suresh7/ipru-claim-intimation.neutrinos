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
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-ownerInfoBanner',
  templateUrl: './ownerInfoBanner.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ownerInfoBannerComponent implements OnChanges {
  @Input('resourceLinkData')
  public resourceLinkData: any = undefined;
  @Input('tasks')
  public tasks: any = undefined;
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
      this.sd_nyvfXW0c0s2iceHx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_nyvfXW0c0s2iceHx(bh) {
    try {
      bh = this.sd_0uQbnwnUaErsSwXN(bh);
      //appendnew_next_sd_nyvfXW0c0s2iceHx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nyvfXW0c0s2iceHx');
    }
  }

  navToNav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_AfMgrjOCggQsjKoe(bh);
      //appendnew_next_navToNav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xeMX4hQhn72LFAL8');
    }
  }

  sd_e8IxyT91my6JR0rN(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_i2vwPSlpF8gkL7Fm(bh);
      //appendnew_next_sd_e8IxyT91my6JR0rN
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e8IxyT91my6JR0rN');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.changes = changes;
      bh = this.sd_K5oOUqRDLrAoJ8BD(bh);
      //appendnew_next_ngOnChanges
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jdFjCgrdwUBQffpf');
    }
  }

  openTrafficLights(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { rsnComponent: 'TRAFFIC_LIGHTS' };
      bh = this.sd_R5Ys4pzwKLCpNtBi(bh);
      //appendnew_next_openTrafficLights
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pvoHf8B9HTrlw4wS');
    }
  }

  //appendnew_flow_ownerInfoBannerComponent_start

  sd_0uQbnwnUaErsSwXN(bh) {
    try {
      this.page.owner = {};
      this.page.resourceLinks = {};
      bh = this.sd_xdrlnCVsHXNiqldk(bh);
      //appendnew_next_sd_0uQbnwnUaErsSwXN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0uQbnwnUaErsSwXN');
    }
  }

  sd_xdrlnCVsHXNiqldk(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      bh.co = cacheInstance['checkedOut'];
      bh.rl = cacheInstance['resourceLinks'];
      bh = this.labelMapping(bh);
      //appendnew_next_sd_xdrlnCVsHXNiqldk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xdrlnCVsHXNiqldk');
    }
  }

  labelMapping(bh) {
    try {
      const page = this.page;
      page.labels = {
        phoneNumber: {
          get label() {
            return page.locales.keys.phno;
          },
          icon: '/Web/Icons/phone.svg',
        },
        email: {
          get label() {
            return page.locales.keys.email;
          },
          icon: '/Web/Icons/mail.svg',
        },
        applicationNumber: {
          get label() {
            return page.locales.keys.applicationNumber;
          },
          icon: '/Web/Icons/copy.svg',
        },
      };
      const caseDetails = bh.co.case.caseDetails;
      console.log(bh.co);
      page.taskName = bh?.co?.task['task-name'];
      const owner = caseDetails.owner;
      page.owner = {
        phoneNumber: owner.residentialAddress.telephone || '-',
        email: owner.residentialAddress.email || '-',
        name: owner.PersonalDetails.fullName || '-',
        sex: owner.PersonalDetails.sex || '-',
        idNumber: owner.PersonalDetails.idNumber || '-',
        idIssueDate: owner.PersonalDetails.idIssueDate || '-',
        idIssuePlace: owner.PersonalDetails.idIssuePlace || '-',
        dob: owner.PersonalDetails.dob || '-',
        age: owner.PersonalDetails.age || '-',
        palceOfBirth: owner.PersonalDetails.palceOfBirth || '-',
        nationality: owner.PersonalDetails.nationality || '-',
        occupation: owner.PersonalDetails.occupation || '-',
        income: owner.PersonalDetails.income || '-',
        applicationNumber: bh.co.case.applicationNumber || '-',
      };
      //appendnew_next_labelMapping
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5dqY2gqPt5HjGhSb');
    }
  }

  async sd_AfMgrjOCggQsjKoe(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/web/nav/');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_AfMgrjOCggQsjKoe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AfMgrjOCggQsjKoe');
    }
  }

  sd_i2vwPSlpF8gkL7Fm(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Application number copied to clipboard', 'Okay', {
          duration: 1000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_i2vwPSlpF8gkL7Fm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i2vwPSlpF8gkL7Fm');
    }
  }

  sd_K5oOUqRDLrAoJ8BD(bh) {
    try {
      const page = this.page;
      if (this.resourceLinkData && this.resourceLinkData.length > 0) {
        page.resourceLinks = this.resourceLinkData[0].taskResourceLinkMapping;
        page.resourceLinks = this.resourceLinkData[0].taskResourceLinkMapping;
      }
      //appendnew_next_sd_K5oOUqRDLrAoJ8BD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K5oOUqRDLrAoJ8BD');
    }
  }

  sd_R5Ys4pzwKLCpNtBi(bh) {
    try {
      bh.system.pubsubService.$pub('open-rsn', bh);
      //appendnew_next_sd_R5Ys4pzwKLCpNtBi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R5Ys4pzwKLCpNtBi');
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
  //appendnew_flow_ownerInfoBannerComponent_Catch
}
