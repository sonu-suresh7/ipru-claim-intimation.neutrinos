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
import { uwadmindbService } from 'app/services/uwadmindb/uwadmindb.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-uwadmindashboard',
  templateUrl: './uwadmindashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class uwadmindashboardComponent {
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
      this.sd_toIs5wO67MKaKRO4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_toIs5wO67MKaKRO4(bh) {
    try {
      bh = this.sd_QMIozQYtkZNEdLhb(bh);
      //appendnew_next_sd_toIs5wO67MKaKRO4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_toIs5wO67MKaKRO4');
    }
  }

  getTaskCPList(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Zk61X0ROXbZmKhEf(bh);
      //appendnew_next_getTaskCPList
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IdNV8cAvvZUz2dWp');
    }
  }

  getCaseDeatails(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_OJ7wSb8162h6Zy8r(bh);
      //appendnew_next_getCaseDeatails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QAQmVvnnDszCQyt6');
    }
  }

  getFinfoTasks(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VGtavWQJeX6ROBft(bh);
      //appendnew_next_getFinfoTasks
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MuU3cTkDNcfsgblB');
    }
  }

  //appendnew_flow_uwadmindashboardComponent_start

  sd_QMIozQYtkZNEdLhb(bh) {
    try {
      this.page.results = [];
      bh = this.sd_STYK33Hc9VIxIJjG(bh);
      //appendnew_next_sd_QMIozQYtkZNEdLhb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QMIozQYtkZNEdLhb');
    }
  }

  sd_STYK33Hc9VIxIJjG(bh) {
    try {
      const page = this.page;
      page.performanceData = [
        {
          key: 'Total Pending',
          value: '0',
        },
        {
          key: 'Inflow',
          value: '0',
        },
        {
          key: 'Pending Requirement',
          value: '0',
        },
        {
          key: 'Complete',
          value: '0',
        },
        {
          key: 'In Process',
          value: '0',
        },
        {
          key: 'Pending Allocation',
          value: '0',
        },
      ];

      page.allData = [
        {
          uwname: 'UW1',
          inprocess: '20',
          completed: '30',
        },
        {
          uwname: 'UW2',
          inprocess: '10',
          completed: '20',
        },
        {
          uwname: 'UW1',
          inprocess: '40',
          completed: '10',
        },
        {
          uwname: 'UW1',
          inprocess: '5',
          completed: '50',
        },
      ];

      page.pieChartData = [
        {
          data: [60, 45, 45, 30],
        },
      ];

      page.pieChartLabels = [
        'Pending Requirement',
        'Completed',
        'In Process',
        'Pending Allocation',
      ];

      page.pieChartOptions = {
        responsive: true,
      };

      page.pieChartColors = [
        {
          backgroundColor: ['#006DBA', '#F8CA4D', '#A5A5A5', '#FF9F46'],
          borderColor: ['#006DBA', '#F8CA4D', '#A5A5A5', '#FF9F46'],
        },
      ];

      page.barChartData = [{ data: [35, 30, 20, 25], label: 'Series A' }];

      page.barChartLabels = ['<7', '>7 to 14', '>14 to 21', '>21 to 28'];

      page.barChartData1 = [{ data: [22, 20, 15, 30], label: 'Series A' }];

      page.barChartLabels1 = ['Senior UW', 'Chief UW', 'Legal', 'Further Info'];

      page.chartColors = [
        {
          backgroundColor: '#006DBA',
          borderColor: '#006DBA',
          pointBackgroundColor: '#006DBA',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#006DBA',
        },
      ];

      page.ageData = [
        {
          key: '<7 days',
          value: '25',
        },
        {
          key: '>7 to 14 Days',
          value: '4',
        },
        {
          key: '>14 to 21 Days',
          value: '4',
        },
        {
          key: '>21 to 28 Days',
          value: '3',
        },
      ];

      page.pcaseReason = [
        {
          key: 'Senior Underwriter',
          value: '25',
        },
        {
          key: 'Chief Underwriter',
          value: '4',
        },
        {
          key: 'Legal',
          value: '3',
        },
        {
          key: 'Further Info',
          value: '3',
        },
      ];

      page.annPremium = 0;

      page.users = ['uw1a', 'uw1b', 'uw2a', 'uw2b'];
      page.results = [];
      bh = this.sd_qrziEMRjXYDH99zp(bh);
      //appendnew_next_sd_STYK33Hc9VIxIJjG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_STYK33Hc9VIxIJjG');
    }
  }

  sd_qrziEMRjXYDH99zp(bh) {
    try {
      let outputVariables = this.getTaskCPList();

      bh = this.sd_gM08ojgGssHpd4gG(bh);
      //appendnew_next_sd_qrziEMRjXYDH99zp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qrziEMRjXYDH99zp');
    }
  }

  sd_gM08ojgGssHpd4gG(bh) {
    try {
      let outputVariables = this.getCaseDeatails();

      bh = this.sd_tvziaqz6W4d84Ixn(bh);
      //appendnew_next_sd_gM08ojgGssHpd4gG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gM08ojgGssHpd4gG');
    }
  }

  sd_tvziaqz6W4d84Ixn(bh) {
    try {
      let outputVariables = this.getFinfoTasks();

      bh = this.sd_NJgUkgubkwCN32jK(bh);
      //appendnew_next_sd_tvziaqz6W4d84Ixn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tvziaqz6W4d84Ixn');
    }
  }

  sd_NJgUkgubkwCN32jK(bh) {
    try {
      this.page.legservice = this.__page_injector__.get(uwadmindbService);
      bh = this.sd_vXMtU66P1mGvoFRd(bh);
      //appendnew_next_sd_NJgUkgubkwCN32jK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NJgUkgubkwCN32jK');
    }
  }

  async sd_vXMtU66P1mGvoFRd(bh) {
    try {
      const page = this.page;
      page.leaderBoardData = await page.legservice.getLeaderBoardData();

      page.pendingAllocation = 0;
      page.inProcess = 0;
      page.allocated = 0;
      page.pendingReq = 0;
      page.completedCase = 0;
      page.allTasks = [];

      page.leaderBoardData.filter((ele) => {
        ele.message.payload['task-summary'].filter((ele1) => {
          if (ele1) {
            page.allTasks.push(ele1);
          }
        });
      });

      if (page.allTasks && page.allTasks != 0) {
        page.allTasks.filter((ele) => {
          if (ele['task-status'] && ele['task-status'] == 'Ready') {
            page.pendingAllocation++;
          } else if (ele['task-status'] && ele['task-status'] == 'Reserved') {
            page.allocated++;
          } else if (ele['task-status'] && ele['task-status'] == 'InProgress') {
            page.inProcess++;
          } else if (ele['task-status'] && ele['task-status'] == 'Completed') {
            page.completedCase++;
          }
        });
      }

      page.performanceData = [
        {
          key: 'Cases in Process',
          value: page.allocated + page.pendingAllocation + page.inProcess,
        },
        {
          key: 'Allocated',
          value: page.allocated,
        },
        {
          key: 'Complete',
          value: page.completedCase,
        },
        {
          key: 'In Process',
          value: page.inProcess,
        },
        {
          key: 'Pending Allocation',
          value: page.pendingAllocation,
        },
      ];

      page.pieChartLabels = [
        'Allocated',
        'Pending Requirement',
        'Complete',
        'In Process',
        'Pending Allocation',
      ];

      page.pieChartData = [
        {
          data: [
            page.allocated,
            page.pendingAllocation,
            page.completedCase,
            page.inProcess,
            page.pendingAllocation,
          ],
        },
      ];

      page.totalPendingCases =
        page.allocated + page.pendingAllocation + page.inProcess;
      //appendnew_next_sd_vXMtU66P1mGvoFRd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vXMtU66P1mGvoFRd');
    }
  }

  sd_Zk61X0ROXbZmKhEf(bh) {
    try {
      const page = this.page;
      page.url = `${page.system.environment.properties.ssdBaseUrl}/getTaskCPList`;
      page.payload = {
        user: page.system.oauthService.userInfo.additional.jbpm,
        // "user":'uw1a'
      };
      bh = this.sd_JU4gUJrFutfB0b56(bh);
      //appendnew_next_sd_Zk61X0ROXbZmKhEf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zk61X0ROXbZmKhEf');
    }
  }

  async sd_JU4gUJrFutfB0b56(bh) {
    try {
      let requestOptions = {
        url: this.page.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.payload,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_JU4gUJrFutfB0b56
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JU4gUJrFutfB0b56');
    }
  }

  sd_OJ7wSb8162h6Zy8r(bh) {
    try {
      const page = this.page;
      page.url = `${page.system.environment.properties.ssdBaseUrl}/getCaseDeatails`;
      bh = this.sd_fuVnm6NUZeoCpP7V(bh);
      //appendnew_next_sd_OJ7wSb8162h6Zy8r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OJ7wSb8162h6Zy8r');
    }
  }

  async sd_fuVnm6NUZeoCpP7V(bh) {
    try {
      let requestOptions = {
        url: this.page.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_hEwFhiiEYFhOVD4c(bh);
      //appendnew_next_sd_fuVnm6NUZeoCpP7V
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fuVnm6NUZeoCpP7V');
    }
  }

  sd_hEwFhiiEYFhOVD4c(bh) {
    try {
      const page = this.page;
      if (page.result && page.result.message) {
        page.result.message.filter((ele) => {
          if (
            ele.caseDetails &&
            ele.caseDetails.metadata &&
            ele.caseDetails.metadata.premium
          ) {
            page.annPremium += parseInt(ele.caseDetails.metadata.premium);
          }
        });
      }

      //appendnew_next_sd_hEwFhiiEYFhOVD4c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hEwFhiiEYFhOVD4c');
    }
  }

  sd_VGtavWQJeX6ROBft(bh) {
    try {
      const page = this.page;
      page.url = `${page.system.environment.properties.ssdBaseUrl}/getDecisionCount`;
      page.payload = {
        user: page.system.oauthService.userInfo.additional.jbpm,
        // "user":'uw1a'
      };
      bh = this.sd_1bZYzXKbQ3gCbDrc(bh);
      //appendnew_next_sd_VGtavWQJeX6ROBft
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VGtavWQJeX6ROBft');
    }
  }

  async sd_1bZYzXKbQ3gCbDrc(bh) {
    try {
      let requestOptions = {
        url: this.page.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.payload,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_B0Dt7fPa8UgKa7Cd(bh);
      //appendnew_next_sd_1bZYzXKbQ3gCbDrc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1bZYzXKbQ3gCbDrc');
    }
  }

  sd_B0Dt7fPa8UgKa7Cd(bh) {
    try {
      const page = this.page;
      page.finfo = 0;

      console.log(page.result, 'page.result');

      if (
        page.result &&
        page.result['status'] &&
        page.result['status'] == 200
      ) {
        page.finfo = page.result['count'];
        page.performanceData.push({
          key: 'Pending Requirement',
          value: page.finfo,
        });
      }

      //appendnew_next_sd_B0Dt7fPa8UgKa7Cd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B0Dt7fPa8UgKa7Cd');
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
  //appendnew_flow_uwadmindashboardComponent_Catch
}
