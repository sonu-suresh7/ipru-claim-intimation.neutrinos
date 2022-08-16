//append_imports_start

import * as sd_tSoBS3t3cHJzNlhG from 'app/sd-services/appSettings'; //_splitter_
import * as sd_RbD2RZwzan9VSOEL from 'app/sd-services/cache'; //_splitter_
import * as sd_jkXaNKtzX8iSR5cy from 'app/sd-services/caseService'; //_splitter_
import * as sd_cCD5v4sqKdB3vISb from 'app/sd-services/commentService'; //_splitter_
import * as sd_ZDiZhKoMHdoCgieC from 'app/sd-services/emailService'; //_splitter_
import * as sd_FeSAKKAyQ3k2UP97 from 'app/sd-services/investigation'; //_splitter_
import * as sd_s90q901gjYZZavao from 'app/sd-services/taskDistribution'; //_splitter_
import * as sd_9emVj8kPGYoP9w8y from 'app/sd-services/trafficLightService'; //_splitter_
import * as sd_IKMMWVWnX2MWpoSX from 'app/sd-services/wq'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_tSoBS3t3cHJzNlhG: sd_tSoBS3t3cHJzNlhG.appSettings,
    private sd_RbD2RZwzan9VSOEL: sd_RbD2RZwzan9VSOEL.cache,
    private sd_jkXaNKtzX8iSR5cy: sd_jkXaNKtzX8iSR5cy.caseService,
    private sd_cCD5v4sqKdB3vISb: sd_cCD5v4sqKdB3vISb.commentService,
    private sd_ZDiZhKoMHdoCgieC: sd_ZDiZhKoMHdoCgieC.emailService,
    private sd_FeSAKKAyQ3k2UP97: sd_FeSAKKAyQ3k2UP97.investigation,
    private sd_s90q901gjYZZavao: sd_s90q901gjYZZavao.taskDistribution,
    private sd_9emVj8kPGYoP9w8y: sd_9emVj8kPGYoP9w8y.trafficLightService,
    private sd_IKMMWVWnX2MWpoSX: sd_IKMMWVWnX2MWpoSX.wq
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
