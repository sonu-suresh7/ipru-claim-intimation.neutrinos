/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-manageUsers',
  templateUrl: './manageUsers.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class manageUsersComponent {
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
      this.sd_IE8Xcn5cqae6ILN8(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IE8Xcn5cqae6ILN8(bh) {
    try {
      bh = this.matTableDataSource(bh);
      //appendnew_next_sd_IE8Xcn5cqae6ILN8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IE8Xcn5cqae6ILN8');
    }
  }

  addShift(flagTosay: any = undefined, itemIndex: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { flagTosay: flagTosay, itemIndex: itemIndex };
      bh.local = {};
      bh = this.addOrDelete(bh);
      //appendnew_next_addShift
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vUT2j3bMO1263zUB');
    }
  }

  saveData(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_jZLELgAvHLwrM0X8(bh);
      //appendnew_next_saveData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MqXuLVd4MNC2iAOR');
    }
  }

  editUser(itemIndex: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { itemIndex: itemIndex };
      bh.local = {};
      bh = this.sd_6sRWx63OYzxvcr18(bh);
      //appendnew_next_editUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3cBFZfZFwqJIDcWv');
    }
  }

  addRoles(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.addUse(bh);
      //appendnew_next_addRoles
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xN4xTy1Ijgwqc8pT');
    }
  }

  saveRoles(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xtlpGSk1kCyXk047(bh);
      //appendnew_next_saveRoles
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AiC4WTpHejwsrmYj');
    }
  }

  saveShifts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      //appendnew_next_saveShifts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8bnMuDjGH4bVhVzp');
    }
  }

  getRoles(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kdqgeSB5atCwcwsr(bh);
      //appendnew_next_getRoles
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P7JVRtjP1czvaaXk');
    }
  }

  getShifts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_NSTvma6LDSP0hfLu(bh);
      //appendnew_next_getShifts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CWTFeVYKnr5WXPVV');
    }
  }

  getSupervisors(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { supervisors: [] };
      bh = this.sd_pDhIVFBVFPXvvnNH(bh);
      //appendnew_next_getSupervisors
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KjIVtil6LfWfYSEc');
    }
  }

  //appendnew_flow_manageUsersComponent_start

  matTableDataSource(bh) {
    try {
      bh = this.sd_orhpTJ0KLxg9ErUY(bh);
      //appendnew_next_matTableDataSource
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i4yRXJZS2T9A1RlP');
    }
  }

  sd_orhpTJ0KLxg9ErUY(bh) {
    try {
      const page = this.page;
      page.rules = ['FIFO', 'Round Robin'];

      page.displayedColumns = [
        'shift',
        'from',
        'to',
        'rule',
        'allowoverwrite',
        'priority',
        'enableDisable',
        'actions',
      ];
      page.displayedColumns1 = [
        'roleName',
        'min',
        'max',
        'dailyLimit',
        'supervisorName',
        'actions' /* , "act" */,
        'overrideAuthority',
      ];

      bh = this.sd_b6HZM5iUSrAJOmrE(bh);
      //appendnew_next_sd_orhpTJ0KLxg9ErUY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_orhpTJ0KLxg9ErUY');
    }
  }

  async sd_b6HZM5iUSrAJOmrE(bh) {
    try {
      const promiseArray = [
        this.getRoles(),
        this.getShifts(),
        this.getSupervisors(),
      ];
      bh.local.res = await Promise.all(promiseArray);
      //appendnew_next_sd_b6HZM5iUSrAJOmrE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b6HZM5iUSrAJOmrE');
    }
  }

  addOrDelete(bh) {
    try {
      const page = this.page;
      if (bh.input.flagTosay) {
        page.tableData.data.push({
          shift: '',
          from: '',
          to: '',
          symbol: '',
          allowoverwrite: '',
          priority: '',
          enableDisable: '',
        });
      } else {
        page.tableData.data.splice(bh.input.itemIndex, 1);
      }
      page.tableData = new MatTableDataSource(page.tableData.data);

      //appendnew_next_addOrDelete
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2othEyyjbbxzEA6u');
    }
  }

  sd_jZLELgAvHLwrM0X8(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.logApiTrigger(bh);
      //appendnew_next_sd_jZLELgAvHLwrM0X8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jZLELgAvHLwrM0X8');
    }
  }

  logApiTrigger(bh) {
    try {
      const page = this.page;
      console.log('trigger api here');
      bh = this.sd_BxsguEd5oMUrONe2(bh);
      //appendnew_next_logApiTrigger
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JtOfvzj3GFZuVAUa');
    }
  }

  async sd_BxsguEd5oMUrONe2(bh) {
    try {
      const promiseArray = [this.saveRoles(), this.saveShifts()];
      bh.local.res = await Promise.all(promiseArray);
      bh = this.sd_TYdHmKSvtmZ8rKa6(bh);
      //appendnew_next_sd_BxsguEd5oMUrONe2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BxsguEd5oMUrONe2');
    }
  }

  sd_TYdHmKSvtmZ8rKa6(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.locales.keys.rnsSavedSuccessMsg, 'Ok', {
          duration: 2500,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_TYdHmKSvtmZ8rKa6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TYdHmKSvtmZ8rKa6');
    }
  }

  sd_6sRWx63OYzxvcr18(bh) {
    try {
      const page = this.page;
      let data = page.tableData1?.data[bh.input.itemIndex];
      bh.input.qp = {
        role: data.role,
      };
      console.log(data);
      bh = this.sd_2BNGDmf3ZSDyybCJ(bh);
      //appendnew_next_sd_6sRWx63OYzxvcr18
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6sRWx63OYzxvcr18');
    }
  }

  async sd_2BNGDmf3ZSDyybCJ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/web/editUser');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.input.qp),
        });
      //appendnew_next_sd_2BNGDmf3ZSDyybCJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2BNGDmf3ZSDyybCJ');
    }
  }

  addUse(bh) {
    try {
      const page = this.page;
      page.tableData1.data.push({
        roleName: '',
        min: '',
        max: '',
        dailyLimit: '',
        supervisorName: '',
      });

      page.tableData1 = new MatTableDataSource(page.tableData1.data);

      //appendnew_next_addUse
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YQV4l3DrkqFvFAi0');
    }
  }

  sd_xtlpGSk1kCyXk047(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.sd_RkUlF8KB4yQhTxOo(bh);
      //appendnew_next_sd_xtlpGSk1kCyXk047
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xtlpGSk1kCyXk047');
    }
  }

  sd_RkUlF8KB4yQhTxOo(bh) {
    try {
      const page = this.page; // bh.local.url = 'https://bs-1394717.el.r.appspot.com/api/casemanager/config/add';
      bh.local.url = bh.local.ssdBaseUrl + '/admin/alloc/role';

      bh.local.body = {
        roleAllocConfig: page.tableData1.data,
      };

      console.log(bh.local.body);
      bh = this.sd_TSSJJQdI1kRDpXND(bh);
      //appendnew_next_sd_RkUlF8KB4yQhTxOo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RkUlF8KB4yQhTxOo');
    }
  }

  async sd_TSSJJQdI1kRDpXND(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_TSSJJQdI1kRDpXND
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TSSJJQdI1kRDpXND');
    }
  }

  sd_kdqgeSB5atCwcwsr(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.sd_6vrhkZy0SYOFYWx8(bh);
      //appendnew_next_sd_kdqgeSB5atCwcwsr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kdqgeSB5atCwcwsr');
    }
  }

  sd_6vrhkZy0SYOFYWx8(bh) {
    try {
      const page = this.page;
      bh.local.url = bh.local.ssdBaseUrl + '/admin/alloc/role';
      // bh.local.url = 'https://bs-1394717.el.r.appspot.com/api/casemanager/config/get';

      bh.local.typeRolesBody = {
        query: {
          type: 'roles',
        },
      };
      bh = this.sd_5JvOgeIE0vNYdAUD(bh);
      //appendnew_next_sd_6vrhkZy0SYOFYWx8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6vrhkZy0SYOFYWx8');
    }
  }

  async sd_5JvOgeIE0vNYdAUD(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.resultData = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_XwomadQv5Vlx8r74(bh);
      //appendnew_next_sd_5JvOgeIE0vNYdAUD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5JvOgeIE0vNYdAUD');
    }
  }

  sd_XwomadQv5Vlx8r74(bh) {
    try {
      const page = this.page; // if (bh.local.resultData?.length > 0) {
      //     page.tableData1 = new MatTableDataSource(bh.local.resultData[0].data);
      // }
      page.tableData1 = new MatTableDataSource(bh.local.resultData);

      //appendnew_next_sd_XwomadQv5Vlx8r74
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XwomadQv5Vlx8r74');
    }
  }

  sd_NSTvma6LDSP0hfLu(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.sd_LgXK0xfg48xLh3Hh(bh);
      //appendnew_next_sd_NSTvma6LDSP0hfLu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NSTvma6LDSP0hfLu');
    }
  }

  sd_LgXK0xfg48xLh3Hh(bh) {
    try {
      const page = this.page; // bh.local.url = bh.local.ssdBaseUrl + '/casemanager/config/get';
      bh.local.url =
        'https://bs-1394717.el.r.appspot.com/api/casemanager/config/get';
      bh.local.typeShiftsBody = {
        query: {
          type: 'shifts',
        },
      };
      bh = this.sd_otqEx0Gj0yCmCVpF(bh);
      //appendnew_next_sd_LgXK0xfg48xLh3Hh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LgXK0xfg48xLh3Hh');
    }
  }

  async sd_otqEx0Gj0yCmCVpF(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.typeShiftsBody,
      };
      bh.local.shifts = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_sTurNJHxboMW5ouf(bh);
      //appendnew_next_sd_otqEx0Gj0yCmCVpF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_otqEx0Gj0yCmCVpF');
    }
  }

  sd_sTurNJHxboMW5ouf(bh) {
    try {
      const page = this.page;
      if (bh.local.shifts?.length > 0) {
        page.tableData = new MatTableDataSource(bh.local.shifts[0].data);
      }

      //appendnew_next_sd_sTurNJHxboMW5ouf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sTurNJHxboMW5ouf');
    }
  }

  sd_pDhIVFBVFPXvvnNH(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.sd_rHFmboyuLLLZTqWm(bh);
      //appendnew_next_sd_pDhIVFBVFPXvvnNH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pDhIVFBVFPXvvnNH');
    }
  }

  sd_rHFmboyuLLLZTqWm(bh) {
    try {
      const page = this.page;
      bh.local.url = bh.local.ssdBaseUrl + '/admin/user/SUPERVISOR';
      bh = this.sd_c8Lu3G0KwphPPaPV(bh);
      //appendnew_next_sd_rHFmboyuLLLZTqWm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rHFmboyuLLLZTqWm');
    }
  }

  async sd_c8Lu3G0KwphPPaPV(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.superVisors = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_c8Lu3G0KwphPPaPV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c8Lu3G0KwphPPaPV');
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
  //appendnew_flow_manageUsersComponent_Catch
}
