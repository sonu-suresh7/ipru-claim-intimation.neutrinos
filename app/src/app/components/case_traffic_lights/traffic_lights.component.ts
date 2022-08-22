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
import { trafficLightService } from 'app/sd-services/trafficLightService'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-traffic_lights',
  templateUrl: './traffic_lights.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class traffic_lightsComponent {
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
      this.sd_TRo8LFSwEu7HpobU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_TRo8LFSwEu7HpobU(bh) {
    try {
      bh = this.sd_jyHxlVTXilUzbJil(bh);
      //appendnew_next_sd_TRo8LFSwEu7HpobU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TRo8LFSwEu7HpobU');
    }
  }

  insert(name: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { name: name };
      bh.local = {};
      bh = this.sd_RNDrY43aXIjUZakS(bh);
      //appendnew_next_insert
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q14wXXUE0tAKIy5f');
    }
  }

  udpate(light: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { light: light };
      bh.local = {};
      bh = this.sd_VTdaP1PHWl5LsvbP(bh);
      //appendnew_next_udpate
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LiP5hIC4DWRYZAgN');
    }
  }

  //appendnew_flow_traffic_lightsComponent_start

  sd_jyHxlVTXilUzbJil(bh) {
    try {
      this.page.traffic_lights = undefined;
      bh = this.getAllTrafficLights(bh);
      //appendnew_next_sd_jyHxlVTXilUzbJil
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jyHxlVTXilUzbJil');
    }
  }

  async getAllTrafficLights(bh) {
    try {
      const trafficLightServiceInstance: trafficLightService =
        this.__page_injector__.get(trafficLightService);

      let outputVariables = await trafficLightServiceInstance.getAllLights();
      this.page.trafficLights = outputVariables.local.result;

      bh = this.sd_v1QlncYTtGg9uouu(bh);
      //appendnew_next_getAllTrafficLights
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LJZMckbFsCOQBMfp');
    }
  }

  sd_v1QlncYTtGg9uouu(bh) {
    try {
      const page = this.page;
      console.log('trafficLights', page.trafficLights);

      let classDocs = sessionStorage.getItem('class-docs');
      let caseId = sessionStorage.getItem('case_id');
      if (classDocs) {
        classDocs = JSON.parse(classDocs);
        let alreadyDone = sessionStorage.getItem('done');
        // if(alreadyDone == caseId){
        //     return
        // }
        if (classDocs && classDocs.length > 0) {
          page.trafficLights.forEach((el) => {
            let name = el.name.replaceAll(' ', '_');

            if (classDocs.indexOf(name) > -1) {
              el.status = 'done';
            }
            sessionStorage.setItem('done', caseId);
          });
        }
      }
      //appendnew_next_sd_v1QlncYTtGg9uouu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v1QlncYTtGg9uouu');
    }
  }

  async sd_RNDrY43aXIjUZakS(bh) {
    try {
      const trafficLightServiceInstance: trafficLightService =
        this.__page_injector__.get(trafficLightService);

      let outputVariables = await trafficLightServiceInstance.insertLight(
        bh.input.name
      );

      bh = this.sd_uv37d2PxYQa3k2oP(bh);
      //appendnew_next_sd_RNDrY43aXIjUZakS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RNDrY43aXIjUZakS');
    }
  }

  async sd_uv37d2PxYQa3k2oP(bh) {
    try {
      const trafficLightServiceInstance: trafficLightService =
        this.__page_injector__.get(trafficLightService);

      let outputVariables = await trafficLightServiceInstance.getAllLights();
      this.page.trafficLights = outputVariables.local.result;

      bh = this.sd_PIip8ryQmAECdbHb(bh);
      //appendnew_next_sd_uv37d2PxYQa3k2oP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uv37d2PxYQa3k2oP');
    }
  }

  sd_PIip8ryQmAECdbHb(bh) {
    try {
      const page = this.page;
      page.newTrafficLight = null;
      //appendnew_next_sd_PIip8ryQmAECdbHb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PIip8ryQmAECdbHb');
    }
  }

  sd_VTdaP1PHWl5LsvbP(bh) {
    try {
      const page = this.page;
      console.log(bh.input.light);
      bh = this.updateLight(bh);
      //appendnew_next_sd_VTdaP1PHWl5LsvbP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VTdaP1PHWl5LsvbP');
    }
  }

  async updateLight(bh) {
    try {
      const trafficLightServiceInstance: trafficLightService =
        this.__page_injector__.get(trafficLightService);

      let outputVariables = await trafficLightServiceInstance.updateLight(
        bh.input.light._id,
        bh.input.light.status,
        bh.input.light.name,
        bh.input.light.case_id
      );

      //appendnew_next_updateLight
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VrJaK1E2ALjqHqhD');
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
  //appendnew_flow_traffic_lightsComponent_Catch
}
