/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cache } from 'app/sd-services/cache';
import { appSettings } from 'app/sd-services/appSettings';
import { environment } from 'environments/environment';
import { localesService } from '../../../../baseClasses/localesService';
import { formatDate } from '@angular/common';

@Injectable()
export class root_resolverService {
    constructor(private _http: HttpClient, private _cache: cache, private _as: appSettings) { }
    async resolve() {
        this._cache.checkedOut = {};
        const results = await Promise.all([
            this._http.get<{ role: string }>(`${environment.properties.ssdBaseUrl}/role`).toPromise(),
            this._as.getAppSettings(),
            this._http.get('locales/locales.json').toPromise(),
        ]);
        this._cache.loggedInRole = results[0].role;
        this._cache.appSettings = results[1].local.appSettings;
        this._cache.languages = Object.entries(results[2]).map(([value, viewValue]) => ({ value, viewValue }));
        this.setColConf();
    }

    setColConf() {
        const lInst = localesService.getLocalesInstance();
        const columns = [
            'typeOfInvestigation',
            'ticketNumber',
            'policyNo',
            'policyOwner',
            'policyStatus',
            'issueDate',
            'activityName',
            //////////////
            'name',
            'customerName',
            'productName',
            'sumInsured',
            'claimNo',
            'idpCaseStatus',
            'addInfoStatus'
        ].reduce((acc, curr) => {
            acc[curr] = {
                val: task => task[curr],
                get label() {
                    return lInst.locale[curr]
                }
            }
            return acc;
        }, {} as any)
        this._cache.columns = {
            ...columns,
            applicationNumber: {
                val: task => task.applicationNumber,
                get label() {
                    return lInst.locale.policyNumber
                }
            },
            applicationDate: {
                val: task => formatDate(new Date(task['task-created-on']['java.util.Date']), 'dd/MM/yyyy', 'en'),
                get label() {
                    return lInst.locale.applicationDate
                }
            },

            sourceOfBusiness: {
                val: task => task.sourceOfBusiness,
                get label() {
                    return lInst.locale.channel
                }
            },
            sumInsured: {
                val: task => task.sumInsured,
                get label() {
                    return lInst.locale.sumInsured
                }
            },
            otherClaims: {
                val: 'No',
                get label() {
                    return lInst.locale.otherClaims
                }
            },
            'task-created-on': {
                val: task => formatDate(new Date(task['task-created-on']['java.util.Date']), 'dd/MM/yyyy', 'en'),
                get label() {
                    return lInst.locale.createdOn
                },
            },
            'task-actual-owner': {
                val: task => task['task-actual-owner'],
                get label() {
                    return lInst.locale.underwriter
                },
            },
            'task-container-id': {
                val: task => task['task-container-id'],
                get label() {
                    return lInst.locale.taskContainerId
                }
            },
            // 'task-priority': {
            //     val: task => task['task-priority'],
            //     get label() {
            //         return lInst.locale.priority
            //     }
            // },
            'task-id': {
                val: task => task['task-id'],
                get label() {
                    return lInst.locale.taskId
                }
            },
            'task-status': {
                val: task => task['task-status'],
                get label() {
                    return lInst.locale.status
                }
            },
            'task-proc-inst-id': {
                val: task => task['task-proc-inst-id'],
                get label() {
                    return lInst.locale.taskProcInstId
                }
            },
            'task-name': {
                val: task => task['task-name'],
                get label() {
                    return lInst.locale.taskName
                }
            },
            'time-lapse': {
                val: task => task['time-lapse'],
                get label() {
                    return lInst.locale.aging
                }
            },
        }
    }
}

