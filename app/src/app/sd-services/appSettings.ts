/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class appSettings {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_appSettings

  async getAppSettings(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          appSettings: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.prepareRequest(bh);
      //appendnew_next_getAppSettings
      return (
        // formatting output variables
        {
          input: {},
          local: {
            appSettings: bh.local.appSettings,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d4sJJODMJiqSFJcj');
    }
  }

  async changeAppUIColors(uiSettings: any = {}, ...others) {
    try {
      var bh: any = {
        input: {
          uiSettings: uiSettings,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_BOZTixzXCZeZW3Lq(bh);
      //appendnew_next_changeAppUIColors
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CXfXfMy8Y80VU8Gr');
    }
  }

  async saveAppSettings(appSettings: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          appSettings: appSettings,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.prepareSaveRequest(bh);
      //appendnew_next_saveAppSettings
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JmaxNlsLJrcwYCja');
    }
  }

  async saveAppLogo(f: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          f: f,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_taaxcoWRFAQtw9vh(bh);
      //appendnew_next_saveAppLogo
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qLJcPNs1JnngMeBD');
    }
  }

  //appendnew_flow_appSettings_start

  async prepareRequest(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdBaseUrl + '/app-settings';
      bh = await this.requestUISettings(bh);
      //appendnew_next_prepareRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XE2yQhIoJqYT4gtQ');
    }
  }

  async requestUISettings(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.appSettings = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_requestUISettings
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NpWiQUnuyhVFcZaF');
    }
  }

  async sd_BOZTixzXCZeZW3Lq(bh) {
    try {
      const root = document.documentElement;
      const hexcolor = bh.input.uiSettings.primaryColor;
      if (hexcolor) {
        const hexcolorWithTransparency = hexcolor.padEnd(9, 'ff');
        const hp = hexcolor.substr(1);
        // https://24ways.org/2010/calculating-color-contrast/
        root.style.setProperty('--primary-color', hexcolorWithTransparency);
        const r = parseInt(hp.substr(0, 2), 16);
        const g = parseInt(hp.substr(2, 2), 16);
        const b = parseInt(hp.substr(4, 2), 16);
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        const textColor = yiq >= 128 ? 'black' : 'white';
        // root.style.setProperty('--white-text-color', textColor);
        const primeryTLColor = hexcolorWithTransparency.slice(0, -2) + '1b';
        root.style.setProperty('--primary-translucent-color', primeryTLColor);
      }

      //appendnew_next_sd_BOZTixzXCZeZW3Lq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BOZTixzXCZeZW3Lq');
    }
  }

  async prepareSaveRequest(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdBaseUrl + '/admin/app-settings';

      bh.local.body = {
        appSettings: bh.input.appSettings,
      };
      bh = await this.reqSaveUISettings(bh);
      //appendnew_next_prepareSaveRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mP2bRgYZAULfT5KC');
    }
  }

  async reqSaveUISettings(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.r = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_reqSaveUISettings
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qgxxHeZc9tLKxMmu');
    }
  }

  async sd_taaxcoWRFAQtw9vh(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.f,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareUploadLogoRequest(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_taaxcoWRFAQtw9vh');
    }
  }

  async prepareUploadLogoRequest(bh) {
    try {
      bh.local.url =
        bh.system.environment.properties.ssdBaseUrl +
        '/admin/app-settings/logo';

      const form = new FormData();

      form.append('logo1', bh.input.f);

      bh.local.body = form;
      bh = await this.reqUploadLogo(bh);
      //appendnew_next_prepareUploadLogoRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4aP7UxZcYeai4xW4');
    }
  }

  async reqUploadLogo(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.body,
      };
      bh.local.r = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_reqUploadLogo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PargDBIRxBD11k73');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_appSettings_Catch
}
