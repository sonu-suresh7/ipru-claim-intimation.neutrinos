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
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { SelectionModel } from '@angular/cdk/collections'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { confirmation_dialogComponent } from './confirmation_dialog.component'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-client_ids',
  templateUrl: './client_ids.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class client_idsComponent {
  @Input('caseDetails')
  public caseDetails: any = undefined;
  @Input('caseData')
  public caseData: any = undefined;
  @Output('filteredPolicies')
  public filteredPolicies: any = new EventEmitter<any>();
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
      this.sd_0XyXk8Xie5l5ZgsN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_0XyXk8Xie5l5ZgsN(bh) {
    try {
      bh = this.angularCdkCollection(bh);
      //appendnew_next_sd_0XyXk8Xie5l5ZgsN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0XyXk8Xie5l5ZgsN');
    }
  }

  masterToggle(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ycZ4rjFtfP3buFIs(bh);
      //appendnew_next_masterToggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mqKVAGQrA7fyo1iK');
    }
  }

  isAllSelected(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { result: undefined };
      bh = this.sd_6V4kTisVphEfVVIa(bh);
      //appendnew_next_isAllSelected
      return bh.local.result;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eYCY4HcDv7sFBCg1');
    }
  }

  mergeRequests(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { data: undefined };
      bh = this.sd_YUxfQFWSmFGc8C3b(bh);
      //appendnew_next_mergeRequests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZqBcR6k4sBjWxVlM');
    }
  }

  updatePolicies(event: any = undefined, clientId: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event, clientId: clientId };
      bh.local = {};
      bh = this.sd_pHucDKL4Py3Y1vEL(bh);
      //appendnew_next_updatePolicies
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9z0ZGSVAcWTReyjB');
    }
  }

  //appendnew_flow_client_idsComponent_start

  angularCdkCollection(bh) {
    try {
      bh = this.sd_tWqvig11ImZIUW0m(bh);
      //appendnew_next_angularCdkCollection
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OhNb8ZMkL1KWPjUj');
    }
  }

  sd_tWqvig11ImZIUW0m(bh) {
    try {
      this.page.clientIdArr = [];
      this.page.selection = undefined;
      this.page.clientsArr = [];
      this.page.policiesArr = [];
      this.page.policies = [];
      bh = this.sd_0prLby1EhE0rlQQm(bh);
      //appendnew_next_sd_tWqvig11ImZIUW0m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tWqvig11ImZIUW0m');
    }
  }

  sd_0prLby1EhE0rlQQm(bh) {
    try {
      const page = this.page;
      if (this.caseData) {
        page.clientsArr = this.caseData.otherPolicies?.clients;
        page.policies = this.caseData.otherPolicies?.policies;
      }
      if (page.clientsArr) {
        page.clientIdArr = new MatTableDataSource(page.clientsArr);
      }
      page.selection = new SelectionModel(true, []);

      //appendnew_next_sd_0prLby1EhE0rlQQm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0prLby1EhE0rlQQm');
    }
  }

  sd_ycZ4rjFtfP3buFIs(bh) {
    try {
      const page = this.page;
      if (this.isAllSelected()) {
        page.selection.clear();
        return;
      }
      page.selection.select(...page.clientIdArr.data);

      //appendnew_next_sd_ycZ4rjFtfP3buFIs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ycZ4rjFtfP3buFIs');
    }
  }

  sd_6V4kTisVphEfVVIa(bh) {
    try {
      const page = this.page;
      const numSelected = page.selection.selected.length;
      const numRows = page.clientIdArr.data.length;
      bh.local.result = numSelected === numRows;
      //appendnew_next_sd_6V4kTisVphEfVVIa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6V4kTisVphEfVVIa');
    }
  }

  sd_YUxfQFWSmFGc8C3b(bh) {
    try {
      const page = this.page;
      bh.local.data = {
        icon: 'close',
        title: 'Confirmation',
        message: 'Are you sure you want to merge these Client IDs?',
        option1: {
          title: 'No',
          value: false,
        },
        option2: {
          title: 'Yes',
          value: true,
        },
      };
      bh = this.sd_Ibm38Oe4fA7OoZzM(bh);
      //appendnew_next_sd_YUxfQFWSmFGc8C3b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YUxfQFWSmFGc8C3b');
    }
  }

  sd_Ibm38Oe4fA7OoZzM(bh) {
    try {
      const confirmation_dialogDialog = this.__page_injector__.get(MatDialog);
      const confirmation_dialogDialogRef = confirmation_dialogDialog.open(
        confirmation_dialogComponent,
        { data: bh.local.data, height: '150px', width: '500px' }
      );
      confirmation_dialogDialogRef.afterClosed().subscribe((event) => {
        this.page.result = event;
        this.sd_MH9RbPuBoUZAO0Rg(bh);

        //appendnew_next_sd_Ibm38Oe4fA7OoZzM;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ibm38Oe4fA7OoZzM');
    }
  }

  sd_MH9RbPuBoUZAO0Rg(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_5aRgDLwAxwmFxWq9(bh);
      } else if (
        this.sdService.operators['false'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MH9RbPuBoUZAO0Rg');
    }
  }

  sd_5aRgDLwAxwmFxWq9(bh) {
    try {
      const page = this.page;
      console.log('resssss', page.result);
      // if (page.result === true) {
      bh.local.data = {
        icon: 'close',
        title: 'Success',
        message: 'Merge request raised successfully.',
        option2: {
          title: 'Okay',
          value: true,
        },
      };
      // }
      bh = this.sd_LqhCMVvGNUQg7TSk(bh);
      //appendnew_next_sd_5aRgDLwAxwmFxWq9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5aRgDLwAxwmFxWq9');
    }
  }

  sd_LqhCMVvGNUQg7TSk(bh) {
    try {
      const confirmation_dialogDialog = this.__page_injector__.get(MatDialog);
      const confirmation_dialogDialogRef = confirmation_dialogDialog.open(
        confirmation_dialogComponent,
        { data: bh.local.data, height: '150px', width: '500px' }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LqhCMVvGNUQg7TSk');
    }
  }

  sd_pHucDKL4Py3Y1vEL(bh) {
    try {
      const page = this.page;
      if (bh.input.event.checked && page.policies) {
        // page.policiesArr = page.policies.filter(obj => (obj.lifeId === bh.input.clientId) || (obj.ownerId === bh.input.clientId));
        page.policies.forEach((obj) => {
          if (
            obj.lifeId === bh.input.clientId ||
            obj.ownerId === bh.input.clientId
          ) {
            page.policiesArr.push(obj);
          }
        });
      } else {
        const index = page.policiesArr.findIndex(
          (obj) =>
            obj.lifeId === bh.input.clientId ||
            obj.ownerId === bh.input.clientId
        );
        if (index !== -1) {
          page.policiesArr.splice(index, 1);
        }
      }

      bh = this.sd_mfL19g8L6Y3TL2Zi(bh);
      //appendnew_next_sd_pHucDKL4Py3Y1vEL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pHucDKL4Py3Y1vEL');
    }
  }

  sd_mfL19g8L6Y3TL2Zi(bh) {
    try {
      bh.pageOutput.filteredPolicies.emit(this.page.policiesArr);
      //appendnew_next_sd_mfL19g8L6Y3TL2Zi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfL19g8L6Y3TL2Zi');
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
  //appendnew_flow_client_idsComponent_Catch
}
