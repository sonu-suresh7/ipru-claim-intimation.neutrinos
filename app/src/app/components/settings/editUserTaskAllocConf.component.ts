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
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { ActivatedRoute } from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-editUserTaskAllocConf',
  templateUrl: './editUserTaskAllocConf.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class editUserTaskAllocConfComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_VT2K4sMEhhgICbrS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VT2K4sMEhhgICbrS(bh) {
    try {
      bh = this.matTableDataSource(bh);
      //appendnew_next_sd_VT2K4sMEhhgICbrS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VT2K4sMEhhgICbrS');
    }
  }

  saveData(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_5kufAk0pnvJdYxDS(bh);
      //appendnew_next_saveData
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IXCo03guW2Q1vyfW');
    }
  }

  addUser(itemIndex: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { itemIndex: itemIndex };
      bh.local = {};
      bh = this.addToUserArr(bh);
      //appendnew_next_addUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n2wA0ZQbCBDPYjaN');
    }
  }

  removeUser(itemIndex: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { itemIndex: itemIndex };
      bh.local = {};
      bh = this.delUser(bh);
      //appendnew_next_removeUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nwtY6SxNep1UBqiO');
    }
  }

  getShifts(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Lwx79Np5oEY2UL1N(bh);
      //appendnew_next_getShifts
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oEZ5YInA9LE9eogE');
    }
  }

  getUsers(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_jzJEMkklzgTQt3ee(bh);
      //appendnew_next_getUsers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZSpsLuN7DaugsaDh');
    }
  }

  //appendnew_flow_editUserTaskAllocConfComponent_start

  matTableDataSource(bh) {
    try {
      bh = this.sd_bUrRbKpcynZAdySL(bh);
      //appendnew_next_matTableDataSource
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z7nc1mIlCA2SDWoM');
    }
  }

  sd_bUrRbKpcynZAdySL(bh) {
    try {
      const page = this.page;
      page.userNames = [];
      page.managerNames = ['krisv'];
      page.displayedColumns = [
        'userName',
        'managerName',
        'dailyLimit',
        'min',
        'max',
        'allowoverwrite',
        'actions',
      ];

      page.deletedUserConfig = [];
      page.shifts = [];
      bh = this.sd_HthDAUdz2MCZvYcL(bh);
      //appendnew_next_sd_bUrRbKpcynZAdySL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bUrRbKpcynZAdySL');
    }
  }

  sd_HthDAUdz2MCZvYcL(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      this.page.roleName = route.snapshot.queryParamMap.get('role');
      bh = this.sd_3CVnQqsLJaFTo48k(bh);
      //appendnew_next_sd_HthDAUdz2MCZvYcL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HthDAUdz2MCZvYcL');
    }
  }

  async sd_3CVnQqsLJaFTo48k(bh) {
    try {
      const promiseArray = [this.getUsers(), this.getShifts()];
      bh.local.r = await Promise.all(promiseArray);
      //appendnew_next_sd_3CVnQqsLJaFTo48k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3CVnQqsLJaFTo48k');
    }
  }

  sd_5kufAk0pnvJdYxDS(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.prepareSaveReq(bh);
      //appendnew_next_sd_5kufAk0pnvJdYxDS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5kufAk0pnvJdYxDS');
    }
  }

  prepareSaveReq(bh) {
    try {
      const page = this.page; // bh.local.url = 'https://bs-1394717.el.r.appspot.com/api/' + 'casemanager/config/add';
      bh.local.url = bh.local.ssdBaseUrl + '/admin/alloc/users';
      bh.local.body = {
        configs: page.tableData.data,
        deletedConfigs: page.deletedUserConfig,
      };
      // bh.local.body = {
      //   query: {
      //     type: {
      //       subtype: "role",
      //       name: page.roleName
      //     }
      //   },
      //   document: {
      //     data: page.tableData.data
      //   }
      // }
      bh = this.sd_tTpO44fLDnwQSrS1(bh);
      //appendnew_next_prepareSaveReq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FgN38DyvIkbgDxtk');
    }
  }

  async sd_tTpO44fLDnwQSrS1(bh) {
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
      bh = this.sd_fIxAsRbyfhXqYeHg(bh);
      //appendnew_next_sd_tTpO44fLDnwQSrS1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tTpO44fLDnwQSrS1');
    }
  }

  sd_fIxAsRbyfhXqYeHg(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Users Saved Successfully', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_fIxAsRbyfhXqYeHg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fIxAsRbyfhXqYeHg');
    }
  }

  addToUserArr(bh) {
    try {
      const page = this.page;
      page.tableData.data.push({
        shift: '',
        from: '',
        to: '',
        symbol: '',
        allowoverwrite: '',
        priority: '',
        enableDisable: '',
      });
      bh = this.reassignTableDS(bh);
      //appendnew_next_addToUserArr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jHlbITnWx7FIEecp');
    }
  }

  reassignTableDS(bh) {
    try {
      const page = this.page;
      page.tableData = new MatTableDataSource(page.tableData.data);

      //appendnew_next_reassignTableDS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XGRe1DcbcuC38uFe');
    }
  }

  delUser(bh) {
    try {
      const page = this.page;
      page.deletedUserConfig.push(
        ...page.tableData.data.splice(bh.input.itemIndex, 1)
      );

      bh = this.reassignTableDS(bh);
      //appendnew_next_delUser
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dqtg5bVOI7EaEG5v');
    }
  }

  sd_Lwx79Np5oEY2UL1N(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.sd_BVwGqbLayJ1p5FZZ(bh);
      //appendnew_next_sd_Lwx79Np5oEY2UL1N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Lwx79Np5oEY2UL1N');
    }
  }

  sd_BVwGqbLayJ1p5FZZ(bh) {
    try {
      const page = this.page; // bh.local.url = bh.local.ssdBaseUrl + '/casemanager/config/get';
      bh.local.url =
        'https://bs-1394717.el.r.appspot.com/api/casemanager/config/get';
      bh.local.typeShiftsBody = {
        query: {
          type: 'shifts',
        },
      };
      bh = this.sd_crcraAQOBq5wJf7o(bh);
      //appendnew_next_sd_BVwGqbLayJ1p5FZZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BVwGqbLayJ1p5FZZ');
    }
  }

  async sd_crcraAQOBq5wJf7o(bh) {
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
      bh = this.sd_G8PC0zy7lz0YqTvZ(bh);
      //appendnew_next_sd_crcraAQOBq5wJf7o
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_crcraAQOBq5wJf7o');
    }
  }

  sd_G8PC0zy7lz0YqTvZ(bh) {
    try {
      const page = this.page;
      page.shifts = bh.local.shifts?.[0]?.data || [];

      //appendnew_next_sd_G8PC0zy7lz0YqTvZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G8PC0zy7lz0YqTvZ');
    }
  }

  sd_jzJEMkklzgTQt3ee(bh) {
    try {
      bh.local.ssdBaseUrl = bh.system.environment.properties.ssdBaseUrl;
      bh = this.sd_4o450D9MVvuDFzrP(bh);
      //appendnew_next_sd_jzJEMkklzgTQt3ee
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jzJEMkklzgTQt3ee');
    }
  }

  sd_4o450D9MVvuDFzrP(bh) {
    try {
      const page = this.page;
      bh.local.url = bh.local.ssdBaseUrl + '/admin/alloc/user/' + page.roleName;

      bh = this.sd_qMAq9Y3yTTHgrkot(bh);
      //appendnew_next_sd_4o450D9MVvuDFzrP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4o450D9MVvuDFzrP');
    }
  }

  async sd_qMAq9Y3yTTHgrkot(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_7QqBadBvutqaF2zt(bh);
      //appendnew_next_sd_qMAq9Y3yTTHgrkot
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qMAq9Y3yTTHgrkot');
    }
  }

  sd_7QqBadBvutqaF2zt(bh) {
    try {
      const page = this.page;
      const { configs, users } = bh.local.res;
      page.tableData = new MatTableDataSource(configs);
      page.userNames = users;

      //appendnew_next_sd_7QqBadBvutqaF2zt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7QqBadBvutqaF2zt');
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
  //appendnew_flow_editUserTaskAllocConfComponent_Catch
}
