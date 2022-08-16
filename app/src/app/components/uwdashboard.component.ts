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
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-uwdashboard',
  templateUrl: './uwdashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class uwdashboardComponent {
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
      this.sd_zCty1ZYVCWvHJ97J(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zCty1ZYVCWvHJ97J(bh) {
    try {
      bh = this.sd_Qnq7w1HSvKPHFhPt(bh);
      //appendnew_next_sd_zCty1ZYVCWvHJ97J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zCty1ZYVCWvHJ97J');
    }
  }

  getTaskCPList(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oWoAWWAleB7c7V17(bh);
      //appendnew_next_getTaskCPList
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j7DWEgEndMkR8HyG');
    }
  }

  //appendnew_flow_uwdashboardComponent_start

  sd_Qnq7w1HSvKPHFhPt(bh) {
    try {
      bh = this.sd_eJuzOUTYKNgXaqdz_6(bh);
      //appendnew_next_sd_Qnq7w1HSvKPHFhPt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qnq7w1HSvKPHFhPt');
    }
  }

  sd_eJuzOUTYKNgXaqdz_6(bh) {
    try {
      const page = this.page;
      page.displaytable = false;
      bh.local.dataSource = new MatTableDataSource([
        {
          position: 1,
          name: 'Hydrogen',
          weight: 1.0079,
          symbol: 'H',
        },
        {
          position: 2,
          name: 'Helium',
          weight: 4.0026,
          symbol: 'He',
        },
        {
          position: 3,
          name: 'Lithium',
          weight: 6.941,
          symbol: 'Li',
        },
        {
          position: 4,
          name: 'Beryllium',
          weight: 9.0122,
          symbol: 'Be',
        },
        {
          position: 5,
          name: 'Boron',
          weight: 10.811,
          symbol: 'B',
        },
        {
          position: 6,
          name: 'Carbon',
          weight: 12.0107,
          symbol: 'C',
        },
        {
          position: 7,
          name: 'Nitrogen',
          weight: 14.0067,
          symbol: 'N',
        },
        {
          position: 8,
          name: 'Oxygen',
          weight: 15.9994,
          symbol: 'O',
        },
        {
          position: 9,
          name: 'Fluorine',
          weight: 18.9984,
          symbol: 'F',
        },
        {
          position: 10,
          name: 'Neon',
          weight: 20.1797,
          symbol: 'Ne',
        },
      ]);

      page.pieChartLabels = ['Completed', 'Pending'];

      page.pieChartOptions = {
        responsive: true,
      };

      page.pieChartColors = [
        {
          backgroundColor: ['#F8CA4D', '#006DBA'],
          borderColor: ['#F8CA4D', '#006DBA'],
        },
      ];

      page.items = [
        {
          header: 'Week',
          value: 'Avg Time Per Case',
        },
        {
          header: 'Week 1',
          value: '15',
        },
        {
          header: 'Week 2',
          value: '13',
        },
        {
          header: 'Week 3',
          value: '12',
        },
        {
          header: 'Week 4',
          value: '12',
        },
        {
          header: 'Week 5',
          value: '15',
        },
        {
          header: 'Week 6',
          value: '12',
        },
        {
          header: 'Week 7',
          value: '13',
        },
        {
          header: 'Week 8',
          value: '16',
        },
        {
          header: 'Week 9',
          value: '18',
        },
        {
          header: 'Week 10',
          value: '19',
        },
      ];

      page.barChartData = [
        { data: [10, 10, 8, 6, 5, 14, 12, 6, 16], label: 'Series A' },
      ];

      page.barChartLabels = ['0', '2', '4', '6', '8', '10', '12', '14', '16'];

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

      page.pieChartData = [{ data: [0, 0] }];

      bh = this.sd_E9QbOlnVduPNV5MO_6(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sQTUjRSs4zUwroDt');
    }
  }

  sd_E9QbOlnVduPNV5MO_6(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      bh = this.sd_BKI5hQDSaw7uS3qj(bh);
      //appendnew_next_sd_E9QbOlnVduPNV5MO_6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cZ6HaGMyNirueOP6');
    }
  }

  sd_BKI5hQDSaw7uS3qj(bh) {
    try {
      let outputVariables = this.getTaskCPList();

      bh = this.sd_3UjO9xWHPaVQHYJJ(bh);
      //appendnew_next_sd_BKI5hQDSaw7uS3qj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BKI5hQDSaw7uS3qj');
    }
  }

  sd_3UjO9xWHPaVQHYJJ(bh) {
    try {
      this.page.legservice = this.__page_injector__.get(uwadmindbService);
      bh = this.sd_LdWpSjMpsstkOxRv(bh);
      //appendnew_next_sd_3UjO9xWHPaVQHYJJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3UjO9xWHPaVQHYJJ');
    }
  }

  async sd_LdWpSjMpsstkOxRv(bh) {
    try {
      const page = this.page;
      page.leaderBoardData = await page.legservice.getLeaderBoardData();

      page.leaderBoardData.map((ele) => {
        ele.completed = ele['counter']['completed'];
        ele.userName = ele['message']['payload']['user'];
        ele['picture'] = '';
        delete ele['message'];
        delete ele['counter'];
      });

      page.leaderBoardData.sort((a, b) => b.completed - a.completed);

      page.leaderBoardData[0]['picture'] = 'assets/Web/1.png';
      page.leaderBoardData[1]['picture'] = 'assets/Web/2.png';
      page.leaderBoardData[2]['picture'] = 'assets/Web/3.png';
      page.leaderBoardData[3]['picture'] = '';

      page.displaytable = true;

      console.log(page.leaderBoardData, 'page.leaderBoardData');
      console.log(page.displaytable, 'page.displaytable');
      //appendnew_next_sd_LdWpSjMpsstkOxRv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LdWpSjMpsstkOxRv');
    }
  }

  sd_oWoAWWAleB7c7V17(bh) {
    try {
      const page = this.page;
      page.url = `${page.system.environment.properties.ssdBaseUrl}/getTaskCPList`;
      page.payload = {
        user: page.system.oauthService.userInfo.additional.jbpm,
      };
      bh = this.sd_fgRfeW0fdiWjWJTs(bh);
      //appendnew_next_sd_oWoAWWAleB7c7V17
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oWoAWWAleB7c7V17');
    }
  }

  async sd_fgRfeW0fdiWjWJTs(bh) {
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
      bh = this.sd_kBbwOjByYTthN3ny(bh);
      //appendnew_next_sd_fgRfeW0fdiWjWJTs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fgRfeW0fdiWjWJTs');
    }
  }

  sd_kBbwOjByYTthN3ny(bh) {
    try {
      const page = this.page;
      console.log(page.result.message.payload['task-summary']);
      page.pendingAllocation = 0;
      page.inProcess = 0;
      page.allocated = 0;
      page.pendingReq = 0;
      page.completedCase = 0;

      if (
        page.result.message.payload['task-summary'] &&
        page.result.message.payload['task-summary'].length != 0
      ) {
        page.result.message.payload['task-summary'].filter((ele) => {
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

      page.pieChartData = [{ data: [page.completedCase, page.inProcess] }];

      //appendnew_next_sd_kBbwOjByYTthN3ny
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kBbwOjByYTthN3ny');
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
  //appendnew_flow_uwdashboardComponent_Catch
}
