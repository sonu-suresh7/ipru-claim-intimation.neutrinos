/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { FormBuilder, Validators, FormControl } from '@angular/forms'; //_splitter_
import { cache } from 'app/sd-services/cache'; //_splitter_
import { appSettings } from 'app/sd-services/appSettings'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-theme',
  templateUrl: './theme.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class themeComponent {
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
      this.sd_GNzfpUz0Z5JeaTvg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_GNzfpUz0Z5JeaTvg(bh) {
    try {
      bh = this.importNgForm(bh);
      //appendnew_next_sd_GNzfpUz0Z5JeaTvg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GNzfpUz0Z5JeaTvg');
    }
  }

  saveUITheme(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qqYV61d3uoRfvTnJ(bh);
      //appendnew_next_saveUITheme
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CrSmPgtVloK4Fls3');
    }
  }

  saveImgInMemory(f: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { f: f };
      bh.local = {};
      bh = this.sd_7zpFSU3g14GoGcv0(bh);
      //appendnew_next_saveImgInMemory
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HU6tyRzMlK9lfPbS');
    }
  }

  //appendnew_flow_themeComponent_start

  importNgForm(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      bh = this.sd_NGl1yLf5OEJsuyER(bh);
      //appendnew_next_importNgForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_To2PXcUsoxrRCGsg');
    }
  }

  sd_NGl1yLf5OEJsuyER(bh) {
    try {
      const cacheInstance: cache = this.__page_injector__.get(cache);
      this.page.appSettings = cacheInstance['appSettings'];
      bh = this.assignToFg(bh);
      //appendnew_next_sd_NGl1yLf5OEJsuyER
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NGl1yLf5OEJsuyER');
    }
  }

  assignToFg(bh) {
    try {
      const page = this.page;
      page.fg = page.fb.group({
        primaryColor: page.fb.control('', [Validators.required]),
        // cc: page.fb.control('', [Validators.email]),
        // subject: page.fb.control('', [Validators.required]),
        // body: page.fb.control('', [Validators.required]),
        // attachments: page.fb.control([]),
      });

      page.fg.patchValue(page.appSettings.ui);
      //appendnew_next_assignToFg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DyHw0W6W1muvSAWa');
    }
  }

  sd_qqYV61d3uoRfvTnJ(bh) {
    try {
      const page = this.page;
      Object.assign(page.appSettings.ui, page.fg.value);

      console.log('page.appSettings', page.appSettings);
      bh = this.sd_RvuMaZZuVKeNGGY8(bh);
      //appendnew_next_sd_qqYV61d3uoRfvTnJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qqYV61d3uoRfvTnJ');
    }
  }

  async sd_RvuMaZZuVKeNGGY8(bh) {
    try {
      const promiseArray = [
        this.__serviceInvoker__.invoke(
          'sd_tSoBS3t3cHJzNlhG',
          'saveAppSettings',
          this.page.appSettings
        ),
        this.__serviceInvoker__.invoke(
          'sd_tSoBS3t3cHJzNlhG',
          'saveAppLogo',
          this.page.logo1
        ),
      ];
      bh.local.r = await Promise.all(promiseArray);
      bh = this.changeUIColors(bh);
      //appendnew_next_sd_RvuMaZZuVKeNGGY8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RvuMaZZuVKeNGGY8');
    }
  }

  async changeUIColors(bh) {
    try {
      const appSettingsInstance: appSettings =
        this.__page_injector__.get(appSettings);

      let outputVariables = await appSettingsInstance.changeAppUIColors(
        this.page.appSettings.ui
      );

      bh = this.sd_H9BaAAmfAiOUzrXD(bh);
      //appendnew_next_changeUIColors
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_88DXABGGkheZNGMO');
    }
  }

  sd_H9BaAAmfAiOUzrXD(bh) {
    try {
      bh.system.pubsubService.$pub('update-app-logo-url', bh);
      //appendnew_next_sd_H9BaAAmfAiOUzrXD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H9BaAAmfAiOUzrXD');
    }
  }

  sd_7zpFSU3g14GoGcv0(bh) {
    try {
      const page = this.page;
      page.logo1 = bh.input.f;
      //appendnew_next_sd_7zpFSU3g14GoGcv0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7zpFSU3g14GoGcv0');
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
  //appendnew_flow_themeComponent_Catch
}
