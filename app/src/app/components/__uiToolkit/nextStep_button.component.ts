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
  selector: 'bh-nextStep_button',
  templateUrl: './nextStep_button.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class nextStep_buttonComponent {
  @Input('disabled')
  public disabled: any = false;
  @Input('label')
  public label: any = undefined;
  @Input('routerLink')
  public routerLink: any = undefined;
  @Input('spin')
  public spin: any = false;
  @Output('clicked')
  public clicked: any = new EventEmitter<any>();
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
      this.sd_we2CgKvnm5Qh3aHW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_we2CgKvnm5Qh3aHW(bh) {
    try {
      bh = this.sd_tC2lXWKPLCfCDRLu(bh);
      //appendnew_next_sd_we2CgKvnm5Qh3aHW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_we2CgKvnm5Qh3aHW');
    }
  }

  emitClicked(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qBoBg1KpuQTekbQt(bh);
      //appendnew_next_emitClicked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G7ky1ielmWqHSjpU');
    }
  }

  //appendnew_flow_nextStep_buttonComponent_start

  sd_tC2lXWKPLCfCDRLu(bh) {
    try {
      //appendnew_next_sd_tC2lXWKPLCfCDRLu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tC2lXWKPLCfCDRLu');
    }
  }

  sd_qBoBg1KpuQTekbQt(bh) {
    try {
      bh.pageOutput.clicked.emit();
      //appendnew_next_sd_qBoBg1KpuQTekbQt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qBoBg1KpuQTekbQt');
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
  //appendnew_flow_nextStep_buttonComponent_Catch
}
