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
import { ActivatedRoute, Router } from '@angular/router'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { alertComponent } from '../modals/alert.component'; //_splitter_
import { wq } from 'app/sd-services/wq'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-tasks',
  templateUrl: './tasks.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class tasksComponent implements AfterViewInit {
  @Input('tasks')
  public tasks: any = [];
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
      this.sd_lmdUk8PKKO2fuiwr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    this.page._pubsub_sd_68eLOoS6KrNkvygQ = bh.system.pubsubService.$sub(
      'refresh-wq',
      async (data) => this.listenForWqRefresh(data)
    );

    //append_listeners
  }

  sd_lmdUk8PKKO2fuiwr(bh) {
    try {
      bh = this.sd_ADgJTlrtwIWcFeC3(bh);
      //appendnew_next_sd_lmdUk8PKKO2fuiwr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lmdUk8PKKO2fuiwr');
    }
  }

  onTabIndexChange(index: any = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { index: index };
      bh.local = {};
      bh = this.sd_ys1BcQsrQkRDQSwP(bh);
      //appendnew_next_onTabIndexChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wk0b4PkeTfG173kI');
    }
  }

  confirmAndDeleteQ(e = '', wq: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { e: e, wq: wq };
      bh.local = {};
      bh = this.prepConfirmData(bh);
      //appendnew_next_confirmAndDeleteQ
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UIoFu3S1YlDsUSf3');
    }
  }

  listenForWqRefresh(bh) {
    try {
      bh = this.callGetWqs(bh);
      //appendnew_next_listenForWqRefresh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_68eLOoS6KrNkvygQ');
    }
  }

  checkout(task: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { task: task };
      bh.local = {};
      bh = this.getCheckedOutVar(bh);
      //appendnew_next_checkout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N5wuMELzCaSZJiJj');
    }
  }

  sortChange(s: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { s: s };
      bh.local = {};
      bh = this.sort(bh);
      //appendnew_next_sortChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DKsRncMbuGr6SmKU');
    }
  }

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_dPNVrZIwvQwX0owT(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F3MOnAC6YS6oUyPj');
    }
  }

  openRightSideBar(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KShwQX1pYPjvOuvz(bh);
      //appendnew_next_openRightSideBar
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xGkBv4PfTui1QDV3');
    }
  }

  reassignTasks(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_QBORA0GdCvaQDHEw(bh);
      //appendnew_next_reassignTasks
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uqem9lNyTKm4Lbak');
    }
  }

  //appendnew_flow_tasksComponent_start

  sd_ADgJTlrtwIWcFeC3(bh) {
    try {
      const route = this.__page_injector__.get(ActivatedRoute);
      bh.res = route.snapshot.data;
      bh = this.sd_wmPIVbmZoiY0aQTa(bh);
      //appendnew_next_sd_ADgJTlrtwIWcFeC3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ADgJTlrtwIWcFeC3');
    }
  }

  sd_wmPIVbmZoiY0aQTa(bh) {
    try {
      this.page.queues = bh.res.workqueues;
      this.page.wqtasks = {};
      this.page.selectedIndex = 0;
      bh = this.getUserRole(bh);
      //appendnew_next_sd_wmPIVbmZoiY0aQTa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wmPIVbmZoiY0aQTa');
    }
  }

  getUserRole(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.USER_ROLE = cacheInstance['loggedInRole'];
      bh = this.sd_JfxmYjxLJBKYd7fx(bh);
      //appendnew_next_getUserRole
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jxzlli0EWASpb7AD');
    }
  }

  sd_JfxmYjxLJBKYd7fx(bh) {
    try {
      const page = this.page;
      let taskName = sessionStorage.getItem('task-name');

      if (taskName) {
        if (taskName == 'Manual Verification') {
          console.log('page.queues', this.page.queues);
          //tab.conf.label
        }
      }
      //appendnew_next_sd_JfxmYjxLJBKYd7fx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JfxmYjxLJBKYd7fx');
    }
  }

  sd_ys1BcQsrQkRDQSwP(bh) {
    try {
      const page = this.page;
      bh.local.selectedIndex = bh.input.index;
      bh = this.sd_gYIYnzxspjQaAvS8(bh);
      //appendnew_next_sd_ys1BcQsrQkRDQSwP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ys1BcQsrQkRDQSwP');
    }
  }

  sd_gYIYnzxspjQaAvS8(bh) {
    try {
      bh.system.pubsubService.$pub('work-queue-table-selected', bh);
      //appendnew_next_sd_gYIYnzxspjQaAvS8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gYIYnzxspjQaAvS8');
    }
  }

  prepConfirmData(bh) {
    try {
      const page = this.page;
      bh.input.e.stopPropagation();
      bh.local.dialogData = {
        title: `Delete "${bh.input.wq.conf.label}" queue?`,
        description: 'Please confirm if you want to continue with this action.',
      };
      bh = this.confirmDelete(bh);
      //appendnew_next_prepConfirmData
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gtzs0QtfjyjSU6tT');
    }
  }

  confirmDelete(bh) {
    try {
      const alertDialog = this.__page_injector__.get(MatDialog);
      const alertDialogRef = alertDialog.open(alertComponent, {
        data: bh.local.dialogData,
        width: '50vw',
      });
      alertDialogRef.afterClosed().subscribe((event) => {
        bh.local.delete = event;
        this.checkIfDelete(bh);

        //appendnew_next_confirmDelete;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2AZeEezdk9yRJE3F');
    }
  }

  checkIfDelete(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.delete,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.logC(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7OlaPCKk3i6Y3s8b');
    }
  }

  logC(bh) {
    try {
      const page = this.page;
      console.log('queue should be deleted');
      //appendnew_next_logC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MhyyhoquN2KgJ5fk');
    }
  }

  async callGetWqs(bh) {
    try {
      const wqInstance: wq = this.__page_injector__.get(wq);

      let outputVariables = await wqInstance.getWqs();
      bh.res = outputVariables.local.res;

      bh = this.sd_eWbcOGiDDBXmpOxQ(bh);
      //appendnew_next_callGetWqs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QJbseJhs6PEXwcoc');
    }
  }

  sd_eWbcOGiDDBXmpOxQ(bh) {
    try {
      this.page.queues = bh.res.workqueues;
      //appendnew_next_sd_eWbcOGiDDBXmpOxQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eWbcOGiDDBXmpOxQ');
    }
  }

  getCheckedOutVar(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      bh.local.co = cacheInstance['checkedOut'];
      bh = this.assignCheckedoutTask(bh);
      //appendnew_next_getCheckedOutVar
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0qDzXSsHMSkXJRTt');
    }
  }

  assignCheckedoutTask(bh) {
    try {
      const page = this.page;
      bh.local.co.task = bh.input.task;
      bh = this.navToCaseView(bh);
      //appendnew_next_assignCheckedoutTask
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bJFs9X47Lrim1uv1');
    }
  }

  async navToCaseView(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/web/caseview/:pid');
      await this.__page_injector__
        .get(Router)
        .navigate(
          [
            this.sdService.formatPathWithParams(path, {
              pid: bh.input.task.pid,
            }),
          ],
          {
            queryParams: Object.assign(qprm, ''),
          }
        );
      //appendnew_next_navToCaseView
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q4lgiOrrD9GwTv71');
    }
  }

  sort(bh) {
    try {
      const page = this.page;
      const compare = (a, b, isAsc) => (a < b ? -1 : 1) * (isAsc ? 1 : -1);

      const conf = page.wqtasks[page.queues[page.selectedIndex].workQueueId];

      const sort = bh.input.s;

      if (!sort.active || sort.direction === '') {
        conf.sortedTasks = conf.tasks.slice();
      } else {
        conf.sortedTasks = conf.tasks.sort((a, b) => {
          if (a[sort.active]) {
            return compare(
              a[sort.active],
              b[sort.active],
              sort.direction === 'asc'
            );
          }
          return 0;
        });
      }
      console.log('sorted');

      // conf.sortedTasks = new MatTableDataSource(conf.tasks);
      // conf.sortedTasks.sort = this.MatSort
      // conf.sortedTasks.paginator = this.MatPaginator

      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qdn9X5s22nkxFXMT');
    }
  }

  sd_dPNVrZIwvQwX0owT(bh) {
    try {
      let outputVariables = this.onTabIndexChange(this.page.selectedIndex);

      //appendnew_next_sd_dPNVrZIwvQwX0owT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dPNVrZIwvQwX0owT');
    }
  }

  sd_KShwQX1pYPjvOuvz(bh) {
    try {
      const page = this.page;
      bh.local.rsnComponent = 'WQ_FILTER';
      bh = this.emitOpenSidenavWithWqFilter(bh);
      //appendnew_next_sd_KShwQX1pYPjvOuvz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KShwQX1pYPjvOuvz');
    }
  }

  emitOpenSidenavWithWqFilter(bh) {
    try {
      bh.system.pubsubService.$pub('open-rsn', bh);
      //appendnew_next_emitOpenSidenavWithWqFilter
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TPeHLiMI9eqd0jeM');
    }
  }

  sd_QBORA0GdCvaQDHEw(bh) {
    try {
      const page = this.page;
      bh.local.selectedIndex = page.selectedIndex;
      bh = this.sd_Qm5NS6OpL4A8IQOe(bh);
      //appendnew_next_sd_QBORA0GdCvaQDHEw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QBORA0GdCvaQDHEw');
    }
  }

  sd_Qm5NS6OpL4A8IQOe(bh) {
    try {
      bh.system.pubsubService.$pub('work-queue-table-reassign', bh);
      //appendnew_next_sd_Qm5NS6OpL4A8IQOe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qm5NS6OpL4A8IQOe');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const sub = this.page._pubsub_sd_68eLOoS6KrNkvygQ;
      if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    }
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
  //appendnew_flow_tasksComponent_Catch
}
