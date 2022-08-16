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
import { cache } from 'app/sd-services/cache'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { wq } from 'app/sd-services/wq'; //_splitter_
import { SelectionModel } from '@angular/cdk/collections'; //_splitter_
import { formatDate } from '@angular/common'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { reassignComponent } from '../modals/reassign.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-workQueueTable',
  templateUrl: './workQueueTable.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class workQueueTableComponent {
  @Input('wq')
  public wq: any = undefined;
  @Input('selfIndex')
  public selfIndex: any = undefined;
  @Output('taskClicked')
  public taskClicked: any = new EventEmitter<any>();
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
      this.sd_j7hUkvhLLaQEvwFf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    this.page._pubsub_sd_dR0spMBQnFXIGG0E = bh.system.pubsubService.$sub(
      'work-queue-table-selected',
      async (data) => this.sd_dR0spMBQnFXIGG0E(data)
    );

    this.page._pubsub_sd_BD7RRaucwoFRxaUe = bh.system.pubsubService.$sub(
      'work-queue-table-reassign',
      async (data) => this.listenForReassign(data)
    );

    //append_listeners
  }

  sd_j7hUkvhLLaQEvwFf(bh) {
    try {
      bh = this.sd_Zgv6GexufrJPaHz3(bh);
      //appendnew_next_sd_j7hUkvhLLaQEvwFf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j7hUkvhLLaQEvwFf');
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
      return this.errorHandler(bh, e, 'sd_y3ed9YmlbacGbQv9');
    }
  }

  toggleTaskLock(task: any = undefined, lockStatus = true, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { task: task, lockStatus: lockStatus };
      bh.local = {};
      bh = this.ifNotInReadyState(bh);
      //appendnew_next_toggleTaskLock
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RcKWlQAPcmK8R1Ei');
    }
  }

  getTasks(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.callCsdGetQTasks(bh);
      //appendnew_next_getTasks
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f8d4io6jUoDkDNuM');
    }
  }

  sd_dR0spMBQnFXIGG0E(bh) {
    try {
      bh = this.sd_lrz2EQFeLIJvHVFB(bh);
      //appendnew_next_sd_dR0spMBQnFXIGG0E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dR0spMBQnFXIGG0E');
    }
  }

  checkout(task: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { task: task };
      bh.local = {};
      bh = this.sd_Wiz4a4WRdSP8xzue(bh);
      //appendnew_next_checkout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bNfQHMgHVgPmmUMz');
    }
  }

  isAllSelected(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {
        isAllSelected:
          this.page.tasks.length === this.page.selection.selected.length,
      };
      //appendnew_next_isAllSelected
      return bh.local.isAllSelected;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vj9TuuNE82wAoBZn');
    }
  }

  masterToggle(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_RM35bVXTyLrjVIzW(bh);
      //appendnew_next_masterToggle
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_suyZciT0YQ85qzSX');
    }
  }

  listenForReassign(bh) {
    try {
      bh = this.sd_3PoCICIB5x2L4h8i(bh);
      //appendnew_next_listenForReassign
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BD7RRaucwoFRxaUe');
    }
  }

  assignToUser(user: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { user: user };
      bh.local = {};
      bh = this.sd_a2M6z7UvrwJdwq7y(bh);
      //appendnew_next_assignToUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wHdgOYnTLgQYYGG7');
    }
  }

  //appendnew_flow_workQueueTableComponent_start

  sd_Zgv6GexufrJPaHz3(bh) {
    try {
      bh = this.sd_ev8heFcdcZxd4P7L(bh);
      //appendnew_next_sd_Zgv6GexufrJPaHz3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zgv6GexufrJPaHz3');
    }
  }

  sd_ev8heFcdcZxd4P7L(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.colConf = cacheInstance['columns'];
      this.page.USER_ROLE = cacheInstance['loggedInRole'];
      bh = this.sd_FStdBD2U0x0kBzrT(bh);
      //appendnew_next_sd_ev8heFcdcZxd4P7L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ev8heFcdcZxd4P7L');
    }
  }

  sd_FStdBD2U0x0kBzrT(bh) {
    try {
      const page = this.page;
      page.taskStatus = {
        tooltip(task) {
          switch (task['task-status']) {
            case 'InProgress':
              return page.locales.keys.taskLocked;
            case 'Reserved':
              return page.locales.keys.taskUnLocked;
            case 'Ready':
              return page.locales.keys.taskNotLockable;
          }
        },
        icon(task) {
          switch (task['task-status']) {
            case 'InProgress':
              return 'lock';
            case 'Reserved':
              return 'lock_open';
            case 'Ready':
              return '';
          }
        },
      };

      page.trackTask = (index, task) =>
        `${task['task-container-id']}#${task['task-id']}`;
      //appendnew_next_sd_FStdBD2U0x0kBzrT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FStdBD2U0x0kBzrT');
    }
  }

  sort(bh) {
    try {
      const page = this.page;
      const compare = (a, b, isAsc) => (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      // const conf = bh.pageInput.wq;
      const sort = bh.input.s;
      if (!sort.active || sort.direction === '') {
        page.sortedTasks = page.tasks.slice();
      } else {
        page.sortedTasks = page.tasks.sort((a, b) => {
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

      // conf.sortedTasks = new MatTableDataSource(conf.tasks);
      // conf.sortedTasks.sort = this.MatSort
      // conf.sortedTasks.paginator = this.MatPaginator

      //appendnew_next_sort
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CfNBnwa5C9bGaInY');
    }
  }

  async ifNotInReadyState(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['sne'](
          bh.input.task['task-status'],
          'Ready',
          undefined,
          undefined
        )
      ) {
        bh = this.prepRequest(bh);
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
        bh = await this.sd_tNFtiPfXmbOpRz47(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GLaOLcgKG6Qywj9x');
    }
  }

  prepRequest(bh) {
    try {
      const page = this.page;
      bh.local.body = {
        taskId: bh.input.task['task-id'],
        containerId: bh.input.task['task-container-id'],
      };
      bh.local.url = `${page.system.environment.properties.ssdBaseUrl}/task/${
        bh.input.lockStatus ? 'lock' : 'unlock'
      }`;
      bh = this.requestChangeLock(bh);
      //appendnew_next_prepRequest
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MatW4h2tsQJQoZ3Y');
    }
  }

  async requestChangeLock(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'patch',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      bh = this.updateTaskLock(bh);
      //appendnew_next_requestChangeLock
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bIaFu2ut7YTNghEe');
    }
  }

  updateTaskLock(bh) {
    try {
      const page = this.page;
      bh.input.task['task-status'] = bh.input.lockStatus
        ? 'InProgress'
        : 'Reserved';
      //appendnew_next_updateTaskLock
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NZPoxitEmZVLZj5C');
    }
  }

  sd_tNFtiPfXmbOpRz47(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.locales.keys.taskNotLockable, 'Ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_tNFtiPfXmbOpRz47
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tNFtiPfXmbOpRz47');
    }
  }

  async callCsdGetQTasks(bh) {
    try {
      const wqInstance: wq = this.__page_injector__.get(wq);

      let outputVariables = await wqInstance.getQTasks(bh.pageInput.wq.conf);
      bh.local.reponsePayload = outputVariables.local.reponsePayload;

      bh = this.ngCollectionsImport(bh);
      //appendnew_next_callCsdGetQTasks
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HqpKFLyvNKvfMtTb');
    }
  }

  ngCollectionsImport(bh) {
    try {
      bh = this.ngCommonImports(bh);
      //appendnew_next_ngCollectionsImport
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NByCPbY14asbBK6N');
    }
  }

  ngCommonImports(bh) {
    try {
      bh = this.assignWqTasks(bh);
      //appendnew_next_ngCommonImports
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TCpvc4pL0lt0H5fI');
    }
  }

  assignWqTasks(bh) {
    try {
      const page = this.page;
      const tasks = [];
      const wqconf = this.wq.conf;
      const validColumns = wqconf.selectedColumns.filter((c) =>
        page.colConf.hasOwnProperty(c)
      );
      for (const task of bh.local.reponsePayload.tasks) {
        if (task['task-proc-def-id'] !== 'com.neutrinos.manulife.maxBusiness') {
          continue;
        }
        const obj = JSON.parse(JSON.stringify(task));
        Object.assign(
          obj,
          validColumns?.reduce((acc, cur) => {
            acc[cur] = page.colConf[cur].val(task) || '-';
            return acc;
          }, {})
        );
        tasks.push(obj);
      }

      page.tasks = tasks;
      // page.displayColumns = ['lock_unlock', ...validColumns, 'action'];
      page.displayColumns = [...validColumns];
      page.sortedTasks = tasks.slice();
      page.selection = new SelectionModel(true, []);

      // if (page.USER_ROLE === 'ADMIN') {
      // 	page.displayColumns.unshift('selection')
      // }

      bh.input.s = {
        active: 'task-priority',
        direction: 'asc',
      };

      setTimeout(() => {
        this.sortChange({
          active: 'task-created-on',
          direction: 'asc',
        });
      });
      bh = this.sort(bh);
      //appendnew_next_assignWqTasks
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vvqMhtjDcXNbpJnI');
    }
  }

  sd_lrz2EQFeLIJvHVFB(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.local.selectedIndex,
          this.selfIndex,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_xvpYjoEjG0upoN2A(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lrz2EQFeLIJvHVFB');
    }
  }

  sd_xvpYjoEjG0upoN2A(bh) {
    try {
      if (
        this.sdService.operators['null'](
          this.page.tasks,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.callGetTasks(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xvpYjoEjG0upoN2A');
    }
  }

  callGetTasks(bh) {
    try {
      let outputVariables = this.getTasks();

      //appendnew_next_callGetTasks
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h0qqDLBRszJHPoae');
    }
  }

  sd_Wiz4a4WRdSP8xzue(bh) {
    try {
      bh.pageOutput.taskClicked.emit(bh.input.task);
      //appendnew_next_sd_Wiz4a4WRdSP8xzue
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wiz4a4WRdSP8xzue');
    }
  }

  sd_RM35bVXTyLrjVIzW(bh) {
    try {
      let outputVariables = this.isAllSelected();
      bh.local.isAllSelected = outputVariables;

      bh = this.sd_mjxZNjyciPEHHlTq(bh);
      //appendnew_next_sd_RM35bVXTyLrjVIzW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RM35bVXTyLrjVIzW');
    }
  }

  async sd_mjxZNjyciPEHHlTq(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.isAllSelected,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_OB3n7dczFo7PF2hV(bh);
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
        bh = await this.sd_THuIaCpZ5wtvfrbm(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mjxZNjyciPEHHlTq');
    }
  }

  sd_OB3n7dczFo7PF2hV(bh) {
    try {
      const page = this.page;
      page.selection.clear();
      //appendnew_next_sd_OB3n7dczFo7PF2hV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OB3n7dczFo7PF2hV');
    }
  }

  sd_THuIaCpZ5wtvfrbm(bh) {
    try {
      const page = this.page;
      page.selection.select(...page.tasks);
      //appendnew_next_sd_THuIaCpZ5wtvfrbm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_THuIaCpZ5wtvfrbm');
    }
  }

  sd_3PoCICIB5x2L4h8i(bh) {
    try {
      if (
        this.sdService.operators['se'](
          bh.local.selectedIndex,
          this.selfIndex,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_SVi8E7LpNf6Yc2F5(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3PoCICIB5x2L4h8i');
    }
  }

  async sd_SVi8E7LpNf6Yc2F5(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          this.page.selection.selected.length,
          0,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_GXuYQwO1qlSo5qcC(bh);
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
        bh = await this.sd_Zx5Gm7LtzgWnoq9H(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SVi8E7LpNf6Yc2F5');
    }
  }

  sd_GXuYQwO1qlSo5qcC(bh) {
    try {
      const reassignDialog = this.__page_injector__.get(MatDialog);
      const reassignDialogRef = reassignDialog.open(reassignComponent, {
        width: '70vh',
      });
      reassignDialogRef.afterClosed().subscribe((event) => {
        bh.local.reassignUser = event;
        this.sd_dDbfpTXgPhDtu8Y1(bh);

        //appendnew_next_sd_GXuYQwO1qlSo5qcC;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GXuYQwO1qlSo5qcC');
    }
  }

  sd_dDbfpTXgPhDtu8Y1(bh) {
    try {
      let outputVariables = this.assignToUser(bh.local.reassignUser);

      //appendnew_next_sd_dDbfpTXgPhDtu8Y1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dDbfpTXgPhDtu8Y1');
    }
  }

  sd_Zx5Gm7LtzgWnoq9H(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.locales.keys.tasksNotAssignable, 'Ok', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Zx5Gm7LtzgWnoq9H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zx5Gm7LtzgWnoq9H');
    }
  }

  sd_a2M6z7UvrwJdwq7y(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.user,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_dJDXVyFGWPbVnJoe(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a2M6z7UvrwJdwq7y');
    }
  }

  sd_dJDXVyFGWPbVnJoe(bh) {
    try {
      const page = this.page;
      bh.local.body = {
        user: bh.input.user,
        tasks: page.selection.selected,
      };
      bh.local.url = `${bh.system.environment.properties.ssdBaseUrl}/admin/tasks/assign`;
      bh = this.sd_7Wvm4DuZuCRpBxfk(bh);
      //appendnew_next_sd_dJDXVyFGWPbVnJoe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dJDXVyFGWPbVnJoe');
    }
  }

  async sd_7Wvm4DuZuCRpBxfk(bh) {
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
      bh = this.callGetTasks2(bh);
      //appendnew_next_sd_7Wvm4DuZuCRpBxfk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7Wvm4DuZuCRpBxfk');
    }
  }

  callGetTasks2(bh) {
    try {
      let outputVariables = this.getTasks();

      //appendnew_next_callGetTasks2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q5ww4RTU2TQxpLho');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      const sub = this.page._pubsub_sd_dR0spMBQnFXIGG0E;
      if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    }
    {
      const sub = this.page._pubsub_sd_BD7RRaucwoFRxaUe;
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
  //appendnew_flow_workQueueTableComponent_Catch
}
