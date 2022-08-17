import { APP_INITIALIZER } from '@angular/core';
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { localesService } from '../../../baseClasses/localesService';
import { environment } from '../../environments/environment';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { LayoutComponent } from '../layout/layout.component';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { PageNotFoundComponent } from '../not-found.component';
//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-investigation_detialsComponent
import { investigation_detialsComponent } from '../components/case_details/investigation_detials.component';
//CORE_REFERENCE_IMPORT-document_uploadComponent
import { document_uploadComponent } from '../components/views/investigation/document_upload.component';
//CORE_REFERENCE_IMPORT-investigation_requestComponent
import { investigation_requestComponent } from '../components/views/investigation/investigation_request.component';
//CORE_REFERENCE_IMPORT-lifeAssured_proposerComponent
import { lifeAssured_proposerComponent } from '../components/views/investigation/lifeAssured_proposer.component';
//CORE_REFERENCE_IMPORT-policy_detailsComponent
import { policy_detailsComponent } from '../components/views/investigation/policy_details.component';
//CORE_REFERENCE_IMPORT-new_investigation_searchComponent
import { new_investigation_searchComponent } from '../components/views/investigation/new_investigation_search.component';
//CORE_REFERENCE_IMPORT-newInvestigationComponent
import { newInvestigationComponent } from '../components/menu_pages/newInvestigation.component';
//CORE_REFERENCE_IMPORT-uwadmindbService
import { uwadmindbService } from '../services/uwadmindb/uwadmindb.service';
//CORE_REFERENCE_IMPORT-add_referralComponent
import { add_referralComponent } from '../components/views/add_referral.component';
//CORE_REFERENCE_IMPORT-referralComponent
import { referralComponent } from '../components/views/referral.component';
//CORE_REFERENCE_IMPORT-reassignComponent
import { reassignComponent } from '../components/modals/reassign.component';
//CORE_REFERENCE_IMPORT-workQueueTableComponent
import { workQueueTableComponent } from '../components/views/workQueueTable.component';
//CORE_REFERENCE_IMPORT-settingsHeaderComponent
import { settingsHeaderComponent } from '../components/settings/settingsHeader.component';
//CORE_REFERENCE_IMPORT-manageUsersComponent
import { manageUsersComponent } from '../components/settings/manageUsers.component';
//CORE_REFERENCE_IMPORT-adminSettingsComponent
import { adminSettingsComponent } from '../components/settings/adminSettings.component';
//CORE_REFERENCE_IMPORT-themeComponent
import { themeComponent } from '../components/settings/theme.component';
//CORE_REFERENCE_IMPORT-settingsThumbnailComponent
import { settingsThumbnailComponent } from '../components/settings/settingsThumbnail.component';
//CORE_REFERENCE_IMPORT-root_resolverService
import { root_resolverService } from '../services/root_resolver/root_resolver.service';
//CORE_REFERENCE_IMPORT-configs_resolverService
import { configs_resolverService } from '../services/configs_resolver/configs_resolver.service';
//CORE_REFERENCE_IMPORT-editUserTaskAllocConfComponent
import { editUserTaskAllocConfComponent } from '../components/settings/editUserTaskAllocConf.component';
//CORE_REFERENCE_IMPORT-uwadmindashboardComponent
import { uwadmindashboardComponent } from '../components/uwadmindashboard.component';
//CORE_REFERENCE_IMPORT-uwdashboardComponent
import { uwdashboardComponent } from '../components/uwdashboard.component';
//CORE_REFERENCE_IMPORT-dotComponent
import { dotComponent } from '../components/case_traffic_lights/dot.component';
//CORE_REFERENCE_IMPORT-traffic_lights_statsComponent
import { traffic_lights_statsComponent } from '../components/case_traffic_lights/traffic_lights_stats.component';
//CORE_REFERENCE_IMPORT-traffic_lights_baseComponent
import { traffic_lights_baseComponent } from '../components/case_traffic_lights/traffic_lights_base.component';
//CORE_REFERENCE_IMPORT-case_commentsComponent
import { case_commentsComponent } from '../components/case_traffic_lights/case_comments.component';
//CORE_REFERENCE_IMPORT-traffic_lightsComponent
import { traffic_lightsComponent } from '../components/case_traffic_lights/traffic_lights.component';
//CORE_REFERENCE_IMPORT-wqFilterBaseComponent
import { wqFilterBaseComponent } from '../components/wq_filter_config/wqFilterBase.component';
//CORE_REFERENCE_IMPORT-globalSearchComponent
import { globalSearchComponent } from '../components/wq_filter_config/globalSearch.component';
//CORE_REFERENCE_IMPORT-mvDecisionComponent
import { mvDecisionComponent } from '../components/MV_Decision/mvDecision.component';
//CORE_REFERENCE_IMPORT-uw1DecisionComponent
import { uw1DecisionComponent } from '../components/views/uw1Decision.component';
//CORE_REFERENCE_IMPORT-loader_interceptorService
import { loader_interceptorService } from '../services/loader_interceptor/loader_interceptor.service';
//CORE_REFERENCE_IMPORT-loaderService
import { loaderService } from '../services/loader/loader.service';
//CORE_REFERENCE_IMPORT-confirmation_dialogComponent
import { confirmation_dialogComponent } from '../components/other_policies_components/confirmation_dialog.component';
//CORE_REFERENCE_IMPORT-merge_requestsComponent
import { merge_requestsComponent } from '../components/other_policies_components/merge_requests.component';
//CORE_REFERENCE_IMPORT-policiesComponent
import { policiesComponent } from '../components/other_policies_components/policies.component';
//CORE_REFERENCE_IMPORT-client_idsComponent
import { client_idsComponent } from '../components/other_policies_components/client_ids.component';
//CORE_REFERENCE_IMPORT-other_policies_baseComponent
import { other_policies_baseComponent } from '../components/other_policies_components/other_policies_base.component';
//CORE_REFERENCE_IMPORT-document_viewerComponent
import { document_viewerComponent } from '../components/views/document_viewer.component';
//CORE_REFERENCE_IMPORT-timeline_stepperComponent
import { timeline_stepperComponent } from '../components/views/timeline_stepper.component';
//CORE_REFERENCE_IMPORT-emailViewComponent
import { emailViewComponent } from '../components/correspondence/emailView.component';
//CORE_REFERENCE_IMPORT-case_documentsComponent
import { case_documentsComponent } from '../components/views/case_documents.component';
//CORE_REFERENCE_IMPORT-emailComposerComponent
import { emailComposerComponent } from '../components/correspondence/emailComposer.component';
//CORE_REFERENCE_IMPORT-emailListItemComponent
import { emailListItemComponent } from '../components/correspondence/emailListItem.component';
//CORE_REFERENCE_IMPORT-correspondenceBaseComponent
import { correspondenceBaseComponent } from '../components/correspondence/correspondenceBase.component';
//CORE_REFERENCE_IMPORT-health_informationComponent
import { health_informationComponent } from '../components/case_details/health_information.component';
//CORE_REFERENCE_IMPORT-address_detailsComponent
import { address_detailsComponent } from '../components/case_details/address_details.component';
//CORE_REFERENCE_IMPORT-other_detailsComponent
import { other_detailsComponent } from '../components/case_details/other_details.component';
//CORE_REFERENCE_IMPORT-create_finfoComponent
import { create_finfoComponent } from '../components/views/create_finfo.component';
//CORE_REFERENCE_IMPORT-policy_owner_detailsComponent
import { policy_owner_detailsComponent } from '../components/case_details/policy_owner_details.component';
//CORE_REFERENCE_IMPORT-third_party_infoComponent
import { third_party_infoComponent } from '../components/case_details/third_party_info.component';
//CORE_REFERENCE_IMPORT-primary_lifeComponent
import { primary_lifeComponent } from '../components/case_details/primary_life.component';
//CORE_REFERENCE_IMPORT-coverage_detailsComponent
import { coverage_detailsComponent } from '../components/case_details/coverage_details.component';
//CORE_REFERENCE_IMPORT-occupation_detailsComponent
import { occupation_detailsComponent } from '../components/case_details/occupation_details.component';
//CORE_REFERENCE_IMPORT-caseViewBaseComponent
import { caseViewBaseComponent } from '../components/case_view_components/caseViewBase.component';
//CORE_REFERENCE_IMPORT-taskTabsComponent
import { taskTabsComponent } from '../components/case_view_components/taskTabs.component';
//CORE_REFERENCE_IMPORT-ownerInfoBannerComponent
import { ownerInfoBannerComponent } from '../components/case_view_components/ownerInfoBanner.component';
//CORE_REFERENCE_IMPORT-adminDashboardComponent
import { adminDashboardComponent } from '../components/menu_pages/adminDashboard.component';
//CORE_REFERENCE_IMPORT-externalURLViewerComponent
import { externalURLViewerComponent } from '../components/menu_pages/externalURLViewer.component';
//CORE_REFERENCE_IMPORT-listofCasesComponent
import { listofCasesComponent } from '../components/menu_pages/listofCases.component';
//CORE_REFERENCE_IMPORT-medicalDictionaryComponent
import { medicalDictionaryComponent } from '../components/menu_pages/medicalDictionary.component';
//CORE_REFERENCE_IMPORT-myNotesComponent
import { myNotesComponent } from '../components/menu_pages/myNotes.component';
//CORE_REFERENCE_IMPORT-myProfileComponent
import { myProfileComponent } from '../components/menu_pages/myProfile.component';
//CORE_REFERENCE_IMPORT-myRemindersComponent
import { myRemindersComponent } from '../components/menu_pages/myReminders.component';
//CORE_REFERENCE_IMPORT-productCatelogComponent
import { productCatelogComponent } from '../components/menu_pages/productCatelog.component';
//CORE_REFERENCE_IMPORT-uwGuidelinesComponent
import { uwGuidelinesComponent } from '../components/menu_pages/uwGuidelines.component';
//CORE_REFERENCE_IMPORT-workQueueComponent
import { workQueueComponent } from '../components/menu_pages/workQueue.component';
//CORE_REFERENCE_IMPORT-base_layoutComponent
import { base_layoutComponent } from '../components/root/base_layout.component';
//CORE_REFERENCE_IMPORT-personal_detailsComponent
import { personal_detailsComponent } from '../components/case_details/personal_details.component';
//CORE_REFERENCE_IMPORT-case_viewComponent
import { case_viewComponent } from '../components/case_details/case_view.component';
//CORE_REFERENCE_IMPORT-finfoComponent
import { finfoComponent } from '../components/views/finfo.component';
//CORE_REFERENCE_IMPORT-autoRecommendationComponent
import { autoRecommendationComponent } from '../components/views/autoRecommendation.component';
//CORE_REFERENCE_IMPORT-recommendationComponent
import { recommendationComponent } from '../components/views/recommendation.component';
//CORE_REFERENCE_IMPORT-email_template_resolverService
import { email_template_resolverService } from '../services/email_template_resolver/email_template_resolver.service';
//CORE_REFERENCE_IMPORT-navComponent
import { navComponent } from '../components/root/nav.component';
//CORE_REFERENCE_IMPORT-alluicomponentsComponent
import { alluicomponentsComponent } from '../components/__uiToolkit/alluicomponents.component';
//CORE_REFERENCE_IMPORT-nextStep_buttonComponent
import { nextStep_buttonComponent } from '../components/__uiToolkit/nextStep_button.component';
//CORE_REFERENCE_IMPORT-secandory_buttonComponent
import { secandory_buttonComponent } from '../components/__uiToolkit/secandory_button.component';
//CORE_REFERENCE_IMPORT-spinnerComponent
import { spinnerComponent } from '../components/modals/spinner.component';
//CORE_REFERENCE_IMPORT-alertComponent
import { alertComponent } from '../components/modals/alert.component';
//CORE_REFERENCE_IMPORT-badge_likeComponent
import { badge_likeComponent } from '../components/__uiToolkit/badge_like.component';
//CORE_REFERENCE_IMPORT-tasksComponent
import { tasksComponent } from '../components/views/tasks.component';
//CORE_REFERENCE_IMPORT-workqueues_resolverService
import { workqueues_resolverService } from '../services/workqueues_resolver/workqueues_resolver.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

window['neutrinos'] = {
  environments: environment,
};

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-investigation_detialsComponent
  investigation_detialsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-document_uploadComponent
  document_uploadComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-investigation_requestComponent
  investigation_requestComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-lifeAssured_proposerComponent
  lifeAssured_proposerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-policy_detailsComponent
  policy_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-new_investigation_searchComponent
  new_investigation_searchComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-newInvestigationComponent
  newInvestigationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_referralComponent
  add_referralComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-referralComponent
  referralComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-reassignComponent
  reassignComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-workQueueTableComponent
  workQueueTableComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-settingsHeaderComponent
  settingsHeaderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-manageUsersComponent
  manageUsersComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-adminSettingsComponent
  adminSettingsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-themeComponent
  themeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-settingsThumbnailComponent
  settingsThumbnailComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-editUserTaskAllocConfComponent
  editUserTaskAllocConfComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-uwadmindashboardComponent
  uwadmindashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-uwdashboardComponent
  uwdashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dotComponent
  dotComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-traffic_lights_statsComponent
  traffic_lights_statsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-traffic_lights_baseComponent
  traffic_lights_baseComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-case_commentsComponent
  case_commentsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-traffic_lightsComponent
  traffic_lightsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-wqFilterBaseComponent
  wqFilterBaseComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-globalSearchComponent
  globalSearchComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-mvDecisionComponent
  mvDecisionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-uw1DecisionComponent
  uw1DecisionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-confirmation_dialogComponent
  confirmation_dialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-merge_requestsComponent
  merge_requestsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-policiesComponent
  policiesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-client_idsComponent
  client_idsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-other_policies_baseComponent
  other_policies_baseComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-document_viewerComponent
  document_viewerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-timeline_stepperComponent
  timeline_stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emailViewComponent
  emailViewComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-case_documentsComponent
  case_documentsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emailComposerComponent
  emailComposerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emailListItemComponent
  emailListItemComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-correspondenceBaseComponent
  correspondenceBaseComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-health_informationComponent
  health_informationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-address_detailsComponent
  address_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-other_detailsComponent
  other_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-create_finfoComponent
  create_finfoComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-create_finfoComponent
  create_finfoComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-policy_owner_detailsComponent
  policy_owner_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-third_party_infoComponent
  third_party_infoComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-primary_lifeComponent
  primary_lifeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-coverage_detailsComponent
  coverage_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-occupation_detailsComponent
  occupation_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-personal_detailsComponent
  personal_detailsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-case_viewComponent
  case_viewComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-taskTabsComponent
  taskTabsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-finfoComponent
  finfoComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ownerInfoBannerComponent
  ownerInfoBannerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-autoRecommendationComponent
  autoRecommendationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-recommendationComponent
  recommendationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-caseViewBaseComponent
  caseViewBaseComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navComponent
  navComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-alluicomponentsComponent
  alluicomponentsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-nextStep_buttonComponent
  nextStep_buttonComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-secandory_buttonComponent
  secandory_buttonComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-spinnerComponent
  spinnerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-alertComponent
  alertComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-badge_likeComponent
  badge_likeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tasksComponent
  tasksComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-externalURLViewerComponent
  externalURLViewerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-uwGuidelinesComponent
  uwGuidelinesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-myProfileComponent
  myProfileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-myRemindersComponent
  myRemindersComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-myNotesComponent
  myNotesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-medicalDictionaryComponent
  medicalDictionaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-workQueueComponent
  workQueueComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-productCatelogComponent
  productCatelogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-listofCasesComponent
  listofCasesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-adminDashboardComponent
  adminDashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-base_layoutComponent
  base_layoutComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: loader_interceptorService,
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-uwadmindbService
  uwadmindbService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-root_resolverService
  root_resolverService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-configs_resolverService
  configs_resolverService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-loader_interceptorService
  loader_interceptorService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-loaderService
  loaderService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-email_template_resolverService
  email_template_resolverService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-workqueues_resolverService
  workqueues_resolverService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'web',
    component: base_layoutComponent,
    resolve: { data: root_resolverService },
    canActivate: [NeutrinosAuthGuardService],
    children: [
      {
        path: 'nav',
        component: navComponent,
        resolve: { menu: configs_resolverService },
        children: [
          { path: 'admindashboard', component: uwadmindashboardComponent },
          { path: 'listofCases', component: listofCasesComponent },
          {
            path: 'workqueue',
            component: workQueueComponent,
            resolve: { workqueues: workqueues_resolverService },
          },
          { path: 'productCatelog', component: productCatelogComponent },
          { path: 'medicalDictionary', component: medicalDictionaryComponent },
          { path: 'myNotes', component: myNotesComponent },
          { path: 'myReminders', component: myRemindersComponent },
          { path: 'admin', component: adminSettingsComponent },
          { path: 'myprofile', component: myProfileComponent },
          { path: 'uwGuidelines', component: uwGuidelinesComponent },
          { path: 'external/:menuId', component: externalURLViewerComponent },
          { path: '', redirectTo: 'workqueue', pathMatch: 'full' },
          { path: 'uwdashboard', component: uwdashboardComponent },
          { path: 'investigation', component: newInvestigationComponent },
          { path: 'claimIntimation', component: newInvestigationComponent },
        ],
      },
      { path: 'editUser', component: editUserTaskAllocConfComponent },
      { path: 'caseview/:pid', component: caseViewBaseComponent },
      { path: '', redirectTo: 'nav', pathMatch: 'full' },
      { path: 'manageUsers', component: manageUsersComponent },
      { path: 'theme', component: themeComponent },
    ],
  },
  { path: '', redirectTo: 'web/nav', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
