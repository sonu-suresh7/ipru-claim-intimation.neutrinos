/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class uwadmindbService {
    constructor(public http: HttpClient) { }

    async getUserTasks(data) {
        var url = `${environment.properties.ssdBaseUrl}/getTaskCPList`
        var payload = {
            "user": data
        }
        return this.http.post(url, payload).toPromise();
    }

    async getLeaderBoardData() {
        const r = await Promise.all(
            ['uw1a', 'uw1b', 'uw2a', 'uw2b', 'uw3a', 'uw3b'].map(v => {
                return this.getUserTasks(v)
            }))
        var allDataSet = r;
        console.log(r, 'r');
        allDataSet.filter(ele => {
            delete ele['status']
            return ele['counter'] = this.trimData(ele['message']['payload']['task-summary']);
        })
        return this.assignUserName(allDataSet);
    }

    trimData(data) {
        var taskStatus: any = {
            completed: 0,
            pending: 0,
            flexCompleted: '',
            flexPending: '',
        }
        data.filter(ele => {
            if (ele['task-status'] == 'Completed') {
                taskStatus.completed++;
            } else if (ele['task-status'] == 'InProgress') {
                taskStatus.pending++;
            }
        })

        if ((taskStatus.completed * 10) == 0) {
            taskStatus.flexCompleted = 10
        } else {
            taskStatus.flexCompleted = JSON.stringify(taskStatus.completed * 10)
        }

        if ((taskStatus.pending * 10) == 0) {
            taskStatus.flexPending = 10
        } else {
            taskStatus.flexPending = JSON.stringify(taskStatus.pending * 10)
        }
        return taskStatus
    }

    async assignUserName(data) {
        var url = `${environment.properties.ssdBaseUrl}/getuwUsers`
        var userData = await this.http.get(url).toPromise();
        data.filter(ele1 => {
            userData['message'].filter(ele2 => {
                if (ele1['message']['payload']['user'] == ele2['jbpm'])
                    ele1['message']['payload']['user'] = ele2['displayName']
            })
        })
        return data
    }

}

