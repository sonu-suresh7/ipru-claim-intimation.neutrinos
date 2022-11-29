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
export class investigation {
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

  //   service flows_investigation

  async searchPolicy(policy_number: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          policy_number: policy_number,
        },
        local: {
          policy_details: undefined,
          url: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_1x82EylJ5SNUFzrY(bh);
      //appendnew_next_searchPolicy
      return (
        // formatting output variables
        {
          input: {},
          local: {
            policy_details: bh.local.policy_details,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UyDxFhC2nV5zmHnR');
    }
  }

  async getInvestigationTypes(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          investigation_types: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_VNsZ940dmueCMRlG(bh);
      //appendnew_next_getInvestigationTypes
      return (
        // formatting output variables
        {
          input: {},
          local: {
            investigation_types: bh.local.investigation_types,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Op8aUtlSdLiWKNZe');
    }
  }

  async getXmlTemplate(
    CASE_ID: any = undefined,
    CLIENT_NUMBER: any = undefined,
    DATE_OF_BIRTH: any = undefined,
    PROPOSER_GENDER: any = undefined,
    MAIN_BENEFIT_SUM_ASSURED: any = undefined,
    POLICY_NUMBER: any = undefined,
    PREMIUM: any = undefined,
    PREMIUM_CURRENT_POLICY: any = undefined,
    CHECKLIST: any = undefined,
    INVESTIGATOR: any = undefined,
    LIFE_AGE: any = undefined,
    INVESTIGATION_TYPES: any = [],
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          CASE_ID: CASE_ID,
          CLIENT_NUMBER: CLIENT_NUMBER,
          DATE_OF_BIRTH: DATE_OF_BIRTH,
          PROPOSER_GENDER: PROPOSER_GENDER,
          MAIN_BENEFIT_SUM_ASSURED: MAIN_BENEFIT_SUM_ASSURED,
          POLICY_NUMBER: POLICY_NUMBER,
          PREMIUM: PREMIUM,
          PREMIUM_CURRENT_POLICY: PREMIUM_CURRENT_POLICY,
          CHECKLIST: CHECKLIST,
          INVESTIGATOR: INVESTIGATOR,
          LIFE_AGE: LIFE_AGE,
          INVESTIGATION_TYPES: INVESTIGATION_TYPES,
        },
        local: {
          template: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.calculateAgeCall(bh);
      //appendnew_next_getXmlTemplate
      return (
        // formatting output variables
        {
          input: {},
          local: {
            template: bh.local.template,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dz8ucwhsjIEShvhQ');
    }
  }

  async xmlAttributeFromChecklist(checklist: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          checklist: checklist,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_03m26RJq1KqOOy7y(bh);
      //appendnew_next_xmlAttributeFromChecklist
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2a4nuDa9Qhi5weqA');
    }
  }

  async getInvestigators(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_2rvBd90SKhVgfQjn(bh);
      //appendnew_next_getInvestigators
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3APjdFuejeEEayfl');
    }
  }

  async calculateAge(dob: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          dob: dob,
        },
        local: {
          age: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_aCiSJQ2S28tinnR8(bh);
      //appendnew_next_calculateAge
      return (
        // formatting output variables
        {
          input: {},
          local: {
            age: bh.local.age,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ve2VNdWtgd629hIC');
    }
  }

  async getInvestigationTypeSnippet(
    investigation_types: any = undefined,
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          investigation_types: investigation_types,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_SYKRCBOJghzzhAci(bh);
      //appendnew_next_getInvestigationTypeSnippet
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FLbVaCsVDT3AFlHU');
    }
  }

  //appendnew_flow_investigation_start

  async sd_1x82EylJ5SNUFzrY(bh) {
    try {
      bh.local.url =
	  'https://ipru.onrender.com/api' +
        `/salesforce/policy/${bh.input.policy_number}`;
      bh = await this.sd_yPObHiYargaiDfn8(bh);
      //appendnew_next_sd_1x82EylJ5SNUFzrY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1x82EylJ5SNUFzrY');
    }
  }

  async sd_yPObHiYargaiDfn8(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.policy_details = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_yPObHiYargaiDfn8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yPObHiYargaiDfn8');
    }
  }

  async sd_VNsZ940dmueCMRlG(bh) {
    try {
      bh.local.investigation_types = [
        {
          type: 'Non-Disclosure',
          value: [
            {
              sub_tupe: 'Personal Medical History​',
              value: [
                {
                  value:
                    'Collect statement from treating doctor regarding p/h​',
                },
                {
                  value: 'Hospital registration certificate',
                },
                {
                  value: 'Treating Dr Registration Certificate',
                },
              ],
            },
            {
              sub_tupe: 'Financial Facts',
              value: [
                {
                  value:
                    'Statement from neighbors in form of written/AVR of at least​',
                },
                {
                  value: 'Source of Income  and Income amount​',
                },
                {
                  value: 'Occupation​',
                },
              ],
            },
            {
              sub_tupe: 'Employment Check',
              value: [
                {
                  value:
                    'Confirm whether the person is employee or not in that company​',
                },
                {
                  value:
                    'Attendance record of the period of unavailability if person is working in some company​',
                },
                {
                  value: 'Declaration from HR in case of Death/accident​',
                },
                {
                  value: 'Statement from Colleagues',
                },
              ],
            },
          ],
        },
        {
          type: 'Mis-Selling',
          value: [
            {
              sub_tupe: 'Customer Discussion',
              value: [
                {
                  value: 'Verify Mobile​',
                },
                {
                  value: 'Verify Annual Income',
                },
                {
                  value: 'Check Benefit Understanding​',
                },
                {
                  value: 'Premium Amount  and Premium Paying Term​',
                },
              ],
            },
          ],
        },
        {
          type: 'Document Discrepancy',
          value: [
            {
              sub_tupe: 'Id Proof',
              value: [
                {
                  value: 'Signature Verification​',
                },
                {
                  value: 'Spot Check with AVR​',
                },
              ],
            },
            {
              sub_tupe: 'Medical Reports​',
              value: [
                {
                  value: 'Lab register check',
                },
                {
                  value: 'Verify Report with lab Records',
                },
                {
                  value:
                    'Pathologist availability, statement from him confirming he is attached with lab',
                },
              ],
            },
          ],
        },
      ];
      //appendnew_next_sd_VNsZ940dmueCMRlG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VNsZ940dmueCMRlG');
    }
  }

  async calculateAgeCall(bh) {
    try {
      let outputVariables = await this.calculateAge(bh.input.LIFE_AGE);
      bh.local.age = outputVariables.local.age;

      bh = await this.generateInvestigationTypeSnippet(bh);
      //appendnew_next_calculateAgeCall
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_97j6SVjQvmyHyFEu');
    }
  }

  async generateInvestigationTypeSnippet(bh) {
    try {
      let outputVariables = await this.getInvestigationTypeSnippet(
        bh.input.INVESTIGATION_TYPES
      );
      bh.local.investigation_type_snippet = outputVariables.local.result;

      bh = await this.getChecklistAttributes(bh);
      //appendnew_next_generateInvestigationTypeSnippet
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wEWVz7NUMBbTRjoo');
    }
  }

  async getChecklistAttributes(bh) {
    try {
      let outputVariables = await this.xmlAttributeFromChecklist(
        bh.input.CHECKLIST
      );
      bh.CHECKLIST_ATTRIBUTES = outputVariables.local.result;

      bh = await this.sd_JzeDWWgrquyTZ5IN(bh);
      //appendnew_next_getChecklistAttributes
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ig12eT1USbQLQpgC');
    }
  }

  async sd_JzeDWWgrquyTZ5IN(bh) {
    try {
      bh.local.template = `
<case caseId="${bh.input.CASE_ID}">
	<caseStatus code="CLOSED" />
	<caseStatusReason tc="1" code="AUTO">Automatically Closed</caseStatusReason>
	<processingStage code="AUTO_UNDERWRITING" />
	<underwritingStatus tc="7" code="DECLINED">Declined</underwritingStatus>
	<caseProperties>
		<property name="URElocale">en</property>
		<property name="URErbName">ML_VN_418_DEV</property>
		<property name="URErbVersion">46</property>
		<property name="UREruleSetId">F0C0317B-17DC-8E4A-F99E-BC12AE883CD4</property>
	</caseProperties>
	<caseDates>
		<property name="UREdCASE_CLOSED">2022-03-21T05:46:36.528Z</property>
		<property name="UREdMOD">2022-03-21T05:46:44.532Z</property>
		<property name="UREdCREATE">2022-03-21T05:41:52.872Z</property>
	</caseDates>
	<caseData>
		<entity type="life" name="1" parentEntity="case_1">
			${bh.CHECKLIST_ATTRIBUTES}
			<attribute name="ADVERSE_AGENT_REPORT_FLAG" value="false" />
			<attribute name="AFFORDABILITY_FACTOR" value="0.03425" />
			<attribute name="AGE" value="${bh.local.age}" />
			<attribute name="AGE_BAND" value="18_65" />
			<attribute name="AGE_IN_MONTH" value="665" />
			<attribute name="ALCOHOL_QUANTITY" value="0" />
			<attribute name="ALCOHOL_QUANTITY_VN" value="DRINK_UP_TO_14" />
			<attribute name="ALPHA_PARTIAL_MATCH" value="false" />
			<attribute name="APPLICATION_STATE" />
			<attribute name="APPLICATION_TYPE" value="FULL_APP" />
			<attribute name="AUL_APPLY_FLAG" value="false" />
			<attribute name="BIRTH_STATE" />
			<attribute name="BLACKLISTED_CUSTOMER" value="false" />
			<attribute name="BMI" value="32.4" />
			<attribute name="CLIENT_NUMBER" value="${bh.input.CLIENT_NUMBER}" />
			<attribute name="BMI_WAIVE_EM25_MED" value="false" />
			<attribute name="CONCURRENT_APP_FLAG" value="false" />
			<attribute name="COUNTRY_OF_BIRTH" />
			<attribute name="COUNTRY_OF_RESIDENCE" value="VN" />
			<attribute name="COR_DECLINED_COUNTRIES_E" value="false" />
			<attribute name="COR_EXCLUDED_PROVINCES" value="false" />
			<attribute name="COR_HIGH_RISK_COUNTRIES_ABC" value="false" />
			<attribute name="COR_UNCLASSIFIED_COUNTRIES" value="false" />
			<attribute name="CRS_FLAG" />
			<attribute name="DAILY_CIGARETTE_QUANTITY" value="SMOKE_UP_TO_30_CPD" />
			<attribute name="DATE_OF_BIRTH" value="${bh.input.DATE_OF_BIRTH}" />
			<attribute name="DECLARED_HEIGHT" />
			<attribute name="DECLARED_WEIGHT" />
			<attribute name="FATCA_IND" value="false" />
			<attribute name="FOREIGN_RESIDENCE_FLAG" value="false" />
			<attribute name="GENDER" value="${bh.input.PROPOSER_GENDER}" />
			<attribute name="HAS_ANOREXIA" value="false" />
			<attribute name="HEALTHCARE_RIDER_OPTION" value="NON" />
			<attribute name="HEALTHCARE_RIDER_PO_OPTION" value="NON" />
			<attribute name="HEALTHCARE_RIDER_EXISTING_FLAG" value="false" />
			<attribute name="HEIGHT" value="1.60" />
			<attribute name="LINK_TYP" value="I" />
			<attribute name="MAIN_BENEFIT_SUM_ASSURED" value="${
        bh.input.MAIN_BENEFIT_SUM_ASSURED
      }" />
			<attribute name="MAX_ADB_VS_LIFE_REACHED" value="false" />
			<attribute name="MED_DOC_SUBMITTED" />
			<attribute name="MONTHLY_INCOME" value="50000" />
			<attribute name="MONTHLY_INCOME_PO" value="50000" />
			<attribute name="MY_EDUCATION_UNBORN_APPLY_FLAG" value="false" />
			<attribute name="NATIONALITY" value="VN" />
			<attribute name="NATIONALITY_2" />
			<attribute name="NATIONALITY_2_EMPTY" value="true" />
			<attribute name="NATIONALITY_JAPAN" value="false" />
			<attribute name="NATIONALITY_JAPAN_2" value="false" />
			<attribute name="NATIONALITY_USA" value="false" />
			<attribute name="NATIONALITY_USA_2" value="false" />
			<attribute name="NATIONALITY_VIETNAM" value="true" />
			<attribute name="NATIONALITY_VIETNAM_2" value="false" />
			<attribute name="NATIONALITY_DECLINED_COUNTRIES_E" value="false" />
			<attribute name="NATIONALITY_2_DECLINED_COUNTRIES_E" value="false" />
			<attribute name="NATIONALITY_HIGH_RISK_COUNTRIES_ABC" value="false" />
			<attribute name="NATIONALITY_2_HIGH_RISK_COUNTRIES_ABC" value="false" />
			<attribute name="NON_INCOME_EARNER_FLAG" value="false" />
			<attribute name="PAYMENT" value="" />
			<attribute name="OCC_HOUSEWIFE" value="false" />
			<attribute name="OCC_RETIREE" value="false" />
			<attribute name="PREVIOUS_CLAIM_FLAG" value="false" />
			<attribute name="PREVIOUS_SUBSTANDARD_FLAG" value="false" />
			<attribute name="RANDOM_CHECK" value="false" />
			<attribute name="RELATIONSHIP_TO_INSURED" value="A01" />
			<attribute name="RELATIONSHIP_PO_TO_INSURED" value="A01" />
			<attribute name="RISK_TYPES" value="LIFE,ADB,HC" />
			<attribute name="SMOKER_STATUS" value="SMOKER" />
			<attribute name="SUBSTANDARD_FLAG" value="true" />
			<attribute name="TOTAL_RISK_FACTORS" value="0" />
			<attribute name="TSAR_OTHER_CO" />
			<attribute name="WEIGHT" value="83" />
			<attribute name="WEIGHT_AT_BIRTH" />
			<attribute name="UNDERWRITING_METHOD" />
			<attribute name="INCOME_FACTOR_LIFE_CI" value="0.625" />
			<aggregate type="RISK_BASED_VALUES" name="LIFE">
				<attribute name="EXCLUSION_COUNT" value="0" />
				<attribute name="INCOME_FACTOR" value="0.625" />
				<attribute name="TOTAL_NEGATIVE_PREMIUM_LOADING" value="0" />
				<attribute name="TOTAL_PREMIUM_LOADING" value="0" />
				<attribute name="TOTAL_SUM_ASSURED_LOADING" value="0" />
				<attribute name="TOTAL_SUM_AT_RISK" value="65000" />
				<attribute name="TOTAL_SUM_AT_RISK_FINANCIAL" value="65000" />
				<attribute name="TOTAL_SUM_AT_RISK_MEDICAL" value="45000" />
			</aggregate>
		</entity>
		<entity type="beneficiary" name="1" parentEntity="life_1">
			<attribute name="BENEFICIARY_TYPE" value="A04" />
		</entity>
		<entity type="case" name="1">
			<attribute name="AGENCY" value="${bh.input.INVESTIGATOR?.investigator || ''}" />
			<attribute name="AGENT_CATEGORY" value="${
        bh.input.INVESTIGATOR?.agent_category || 'NA'
      }" />
			<attribute name="AGENT_CODE" value="${
        bh.input.INVESTIGATOR?.agent_code || ''
      }" />
			<attribute name="AGENT_NAME" value="" />
			<attribute name="AGENT2_CODE" value="" />
			<attribute name="AGENT2_NAME" value="" />
			<attribute name="BRANCH_CODE" value="" />
			<attribute name="BRANCH_NAME" value="" />
			<attribute name="BRANCH2_CODE" value="" />
			<attribute name="BRANCH2_NAME" value="" />
			<attribute name="CHANNEL" value="${bh.local.investigation_type_snippet}" />
			<attribute name="CORPORATE_POLICY_FLAG" value="false" />
			<attribute name="NB_ADMIN_CHECK_FLAG" value="false" />
			<attribute name="NB_UW_CHECK_FLAG" value="false" />
			<attribute name="PAPER_APPLICATION_FLAG" value="false" />
			<attribute name="POLICY_NUMBER" value="${bh.input.POLICY_NUMBER}" />
			<attribute name="PREMIUM" value="${bh.input.PREMIUM}" />
			<attribute name="PREMIUM_CURRENT_POLICY" value="${
        bh.input.PREMIUM_CURRENT_POLICY
      }" />
			<attribute name="PRODUCT_TYPE" value="RPVL,MC_RIDER" />
			<attribute name="UL2019_PLAN2_FLAG" value="false" />
			<attribute name="UNIT_LINKED_PRODUCT_FLAG" value="true" />
		</entity>
	</caseData>
	<underwriting>
		<entity type="life" name="1">
			<stageStatus>FULFILLED</stageStatus>
			<automatedUnderwritingComplete>true</automatedUnderwritingComplete>
			<underwritingStatus tc="7" code="DECLINED">Declined</underwritingStatus>
			<unansweredQuestions>false</unansweredQuestions>
			<dateOrdered>2022-03-21T05:41:53.066Z</dateOrdered>
			<dateReceived>2022-03-21T05:41:53.066Z</dateReceived>
			<dateCompleted>2022-03-21T05:46:36.081Z</dateCompleted>
			<source>AUTO</source>
			<baseQuestions version="28" guid="F0C0317B-17DC-8E4A-F99E-BC12AE883CD4">
				<baseQuestion id="basequestion_6938165">
					<code>Q001</code>
					<position>3</position>
					<question>Have you ever been postponed, declined for life insurance application, or offered restricted benefits or charged higher than standard premium rates or excluded, or ever submitted insurance claim forms?</question>
					<answer value="false">No</answer>
					<category tc="9" code="GENERAL">General</category>
					<triggerType tc="1" code="
                    ">Trigger on Yes</triggerType>
					<linkedConditions>
						<conditionRef id="condition_15425406" />
					</linkedConditions>
					<section text="Personal Detail" code="PERSONAL_SECTION" />
					<page text="Personal Details" code="0" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938166">
					<code>AVOCATION_general</code>
					<position>6</position>
					<question>Do you participate or plan to participate in hazardous sports or events (for example: private flying, scuba diving, mountain climbing or motorcycle racing) or flying other than as a fare paying passenger on a regularly scheduled airline?</question>
					<answer value="false">No</answer>
					<category tc="6" code="AVOCATIONAL">Avocational</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<linkedConditions>
						<conditionRef id="condition_15425407" />
					</linkedConditions>
					<section text="Avocation" code="AVOCATION_SECTION_POS" />
					<page text="Avocation" code="1" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938167">
					<code>FAM_history</code>
					<position>11</position>
					<question>Have any of your natural parents or siblings had Dementia (including Alzheimer&#39;s disease), Cancer, Cardiomyopathy, Diabetes, Heart disease, Stroke, Huntington&#39;s disease, Parkinson&#39;s disease, Polycystic Kidney disease, Familial Adenomatous Polyposis, Motor Neurone disease, Multiple Sclerosis or Muscular Dystrophy?</question>
					<answer value="false">No</answer>
					<category tc="3" code="FAMILYHISTORY">Family History</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Family History" code="FAMILY_HISTORY_POS" />
					<page text="Family History" code="4" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938168">
					<code>LIFESTYLE_drugs</code>
					<position>16</position>
					<question>Have you ever used stimulants, hallucinogens, narcotics or other controlled substance other than prescribed by a physician, or been counseled, treated or arrested for excessive use of alcohol or drugs?</question>
					<answer value="false">No</answer>
					<category tc="4" code="LIFESTYLE">Lifestyle</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<linkedConditions>
						<conditionRef id="condition_15425408" />
					</linkedConditions>
					<section text="Lifestyle" code="LIFESTYLE_SECTION_POS" />
					<page text="Lifestyle" code="6" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938169">
					<code>MED_5years</code>
					<position>19</position>
					<question>In the last 5 years, have you ever consulted a doctor for any health problem except for the common cold or seasonal flu or childbirth without complications?</question>
					<answer value="false">No</answer>
					<category tc="1" code="MEDICAL">Medical</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938170">
					<code>MED_medication</code>
					<position>20</position>
					<question>Have you ever taken or been prescribed to take any medication for more than 10 consecutive days?</question>
					<answer value="true">Yes</answer>
					<category tc="1" code="MEDICAL">Medical</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<linkedConditions>
						<conditionRef id="condition_15425409" />
					</linkedConditions>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938171">
					<code>MED_hospital</code>
					<position>21</position>
					<question>Have you ever been hospitalised, admitted to an emergency room or undergone any surgical procedure?</question>
					<answer value="false">No</answer>
					<category tc="1" code="MEDICAL">Medical</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<linkedConditions>
						<conditionRef id="condition_15425410" />
					</linkedConditions>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938172">
					<code>MED_investigation</code>
					<position>22</position>
					<question>In the last 5 years, have you undergone or intended to or have been advised to undergo any investigation or tests by a doctor, clinic or health professional?</question>
					<answer value="false">No</answer>
					<category tc="1" code="MEDICAL">Medical</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938173">
					<code>MED_checkup</code>
					<position>23</position>
					<question>In the last 5 years, have you undergone any health check up, including genetic test, blood test which has shown abnormal results?</question>
					<answer value="false">No</answer>
					<category tc="1" code="MEDICAL">Medical</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938174">
					<code>MED_timeoffwork</code>
					<position>24</position>
					<question>Have you ever been unable to perform your usual duties or have been away from work or study for more than 10 days because of any medical condition?</question>
					<answer value="false">No</answer>
					<category tc="1" code="MEDICAL">Medical</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<linkedConditions>
						<conditionRef id="condition_15425411" />
					</linkedConditions>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938175">
					<code>MED_symptom</code>
					<position>25</position>
					<question>Have you had or do you have any signs and symptoms (including chest pain, shortness of breath, unexplained bleeding, chronic cough, weight loss, change in bowel habits, etc) for which you are planning to consult a doctor or get investigated or have not yet sought medical advice?</question>
					<answer value="false">No</answer>
					<category tc="2" code="MEDICALGENERAL">Medical (General)</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938176">
					<code>MED_disability</code>
					<position>26</position>
					<question>Have you ever suffered from or been treated for a physical or intellectual disability or handicap?</question>
					<answer value="false">No</answer>
					<category tc="1" code="MEDICAL">Medical</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938177">
					<code>MED_major</code>
					<position>27</position>
					<question>Have you ever suffered from diabetes, kidney disease, renal failure, hepatitis or liver inflammation, heart disease, stroke, multiple sclerosis, lung disease or breathing restriction, paralysis, any cancer or tumour, and/or any congenital disorder (physical or mental defects or conditions present since birth)?</question>
					<answer value="false">No</answer>
					<category tc="1" code="MEDICAL">Medical</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938178">
					<code>MED_document</code>
					<position>30</position>
					<question>Have you submitted medical documentation along with this application?</question>
					<answer value="false">No</answer>
					<category tc="2" code="MEDICALGENERAL">Medical (General)</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Medical history" code="MEDICAL_SECTION_POS" />
					<page text="Medical History" code="2" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938179">
					<code>RESIDENCY_general</code>
					<position>49</position>
					<question>Do you spend more than 182 days per year in a country?</question>
					<answer value="false">No</answer>
					<category tc="7" code="RESIDENTIAL">Residential</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<linkedConditions>
						<conditionRef id="condition_15425413" />
					</linkedConditions>
					<section text="Travel and Residency" code="TRAVEL_RESIDENCY" />
					<page text="Travel and Residency" code="3" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938180">
					<code>TRAVEL_general_Past</code>
					<position>50</position>
					<question>In the past 12 months have you travelled outside this country?</question>
					<answer value="false">No</answer>
					<category tc="10" code="TRAVEL">Travel</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Travel and Residency" code="TRAVEL_RESIDENCY" />
					<page text="Travel and Residency" code="3" />
				</baseQuestion>
				<baseQuestion id="basequestion_6938181">
					<code>TRAVEL_general_Future</code>
					<position>51</position>
					<question>In the next 12 months, do you plan to travel outside this country?</question>
					<answer value="false">No</answer>
					<category tc="10" code="TRAVEL">Travel</category>
					<triggerType tc="1" code="TriggerOnYes">Trigger on Yes</triggerType>
					<section text="Travel and Residency" code="TRAVEL_RESIDENCY" />
					<page text="Travel and Residency" code="3" />
				</baseQuestion>
			</baseQuestions>
			<disclosures>
				<condition id="condition_15425361">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>3431</id>
					<name>Adverse agent report</name>
					<autorun>true</autorun>
					<alias>Adverse agent report</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>21638</id>
							<branchId>21638</branchId>
							<reflexiveQuestion>
								<id>21638</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>21640</id>
							<branchId>21640</branchId>
							<reflexiveQuestion>
								<id>21640</id>
								<question>Adverse Agent Report Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Adverse Agent Report Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/ADVERSE_AGENT_REPORT_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425362">
					<known>true</known>
					<stage>life</stage>
					<category tc="4" code="LIFESTYLE">Lifestyle</category>
					<id>20828</id>
					<name>Alcohol</name>
					<autorun>true</autorun>
					<alias>Alcohol</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>205010</id>
							<branchId>205010</branchId>
							<reflexiveQuestion>
								<id>205010</id>
								<question>Alcohol Quantity VN</question>
								<answerIndex>1</answerIndex>
								<answerValue>2</answerValue>
								<answerText>Drink up to 14 bottles of beer per week</answerText>
								<declaration>Alcohol Quantity VN Drink up to 14 bottles of beer per week</declaration>
								<interactive>false</interactive>
								<caseData>life/ALCOHOL_QUANTITY_VN</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425363">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>3461</id>
					<name>Alpha check</name>
					<autorun>true</autorun>
					<alias>Alpha check</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>21695</id>
							<branchId>21695</branchId>
							<reflexiveQuestion>
								<id>21695</id>
								<question>Alpha Search Partial Match</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Alpha Search Partial Match No</declaration>
								<interactive>false</interactive>
								<caseData>life/ALPHA_PARTIAL_MATCH</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425364">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>3535</id>
					<name>Blacklisted customer</name>
					<autorun>true</autorun>
					<alias>Blacklisted customer</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>22069</id>
							<branchId>22069</branchId>
							<reflexiveQuestion>
								<id>22069</id>
								<question>Blacklisted Customer</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Blacklisted Customer No</declaration>
								<interactive>false</interactive>
								<caseData>life/BLACKLISTED_CUSTOMER</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425365">
					<known>true</known>
					<stage>life</stage>
					<category tc="2" code="MEDICALGENERAL">Medical (General)</category>
					<id>23092</id>
					<name>Build - Adult</name>
					<autorun>true</autorun>
					<alias>Build - Adult</alias>
					<version>7</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>219835</id>
							<branchId>219835</branchId>
							<reflexiveQuestion>
								<id>219835</id>
								<question>Gender</question>
								<answerIndex>0</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Male</answerText>
								<declaration>Gender Male</declaration>
								<interactive>false</interactive>
								<caseData>life/GENDER</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>219836</id>
							<branchId>219836</branchId>
							<reflexiveQuestion>
								<id>219836</id>
								<question>Smoker Status</question>
								<answerIndex>1</answerIndex>
								<answerValue>3</answerValue>
								<answerText>Smoker</answerText>
								<declaration>Smoker Status Smoker</declaration>
								<interactive>false</interactive>
								<caseData>life/SMOKER_STATUS</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>219912</id>
							<branchId>219912</branchId>
							<reflexiveQuestion>
								<id>219912</id>
								<question>Age</question>
								<answerIndex>2</answerIndex>
								<answerValue>55</answerValue>
								<answerText>55</answerText>
								<declaration>Age 55</declaration>
								<interactive>false</interactive>
								<caseData>life/AGE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>219930</id>
							<branchId>219930</branchId>
							<reflexiveQuestion>
								<id>219930</id>
								<question>BMI</question>
								<answerIndex>4</answerIndex>
								<answerValue>26.3</answerValue>
								<answerText>26.3</answerText>
								<declaration>BMI 32.4</declaration>
								<interactive>false</interactive>
								<caseData>life/BMI</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425366">
					<known>true</known>
					<stage>life</stage>
					<category tc="2" code="MEDICALGENERAL">Medical (General)</category>
					<id>6014</id>
					<name>Build - Juvenile</name>
					<autorun>true</autorun>
					<alias>Build - Juvenile</alias>
					<version>3</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>33477</id>
							<branchId>33477</branchId>
							<reflexiveQuestion>
								<id>33477</id>
								<question>Gender</question>
								<answerIndex>0</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Male</answerText>
								<declaration>Gender Male</declaration>
								<interactive>false</interactive>
								<caseData>life/GENDER</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>33478</id>
							<branchId>33478</branchId>
							<reflexiveQuestion>
								<id>33478</id>
								<question>Age</question>
								<answerIndex>16</answerIndex>
								<answerValue>55</answerValue>
								<answerText>55</answerText>
								<declaration>Age 55</declaration>
								<interactive>false</interactive>
								<caseData>life/AGE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>34544</id>
							<branchId>34544</branchId>
							<reflexiveQuestion>
								<id>34544</id>
								<question>Age in Month</question>
								<answerIndex>2</answerIndex>
								<answerValue>665</answerValue>
								<answerText>665</answerText>
								<declaration>Age in Month 665</declaration>
								<interactive>false</interactive>
								<caseData>life/AGE_IN_MONTH</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425367">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>3617</id>
					<name>Concurrent applications</name>
					<autorun>true</autorun>
					<alias>Concurrent applications</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>24797</id>
							<branchId>24797</branchId>
							<reflexiveQuestion>
								<id>24797</id>
								<question>Concurrent Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Concurrent Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/CONCURRENT_APP_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425368">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>3644</id>
					<name>Corporate policy</name>
					<autorun>true</autorun>
					<alias>Corporate policy</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>24861</id>
							<branchId>24861</branchId>
							<reflexiveQuestion>
								<id>24861</id>
								<question>Corporate Policy Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Corporate Policy Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/CORPORATE_POLICY_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425369">
					<known>true</known>
					<stage>life</stage>
					<category tc="7" code="RESIDENTIAL">Residential</category>
					<id>3645</id>
					<name>Country of residence</name>
					<autorun>true</autorun>
					<alias>Country of residence</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>24864</id>
							<branchId>24864</branchId>
							<reflexiveQuestion>
								<id>24864</id>
								<question>COR Declined Countries E</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>COR Declined Countries E No</declaration>
								<interactive>false</interactive>
								<caseData>life/COR_DECLINED_COUNTRIES_E</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>24866</id>
							<branchId>24866</branchId>
							<reflexiveQuestion>
								<id>24866</id>
								<question>COR with Excluded Provinces</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>COR with Excluded Provinces No</declaration>
								<interactive>false</interactive>
								<caseData>life/COR_EXCLUDED_PROVINCES</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>24868</id>
							<branchId>24868</branchId>
							<reflexiveQuestion>
								<id>24868</id>
								<question>COR Unclassified Countries</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>COR Unclassified Countries No</declaration>
								<interactive>false</interactive>
								<caseData>life/COR_UNCLASSIFIED_COUNTRIES</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425370">
					<known>true</known>
					<stage>life</stage>
					<category tc="7" code="RESIDENTIAL">Residential</category>
					<id>6015</id>
					<name>Country of residence - high risk countries A B C</name>
					<autorun>true</autorun>
					<alias>Country of residence - high risk countries A B C</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>35624</id>
							<branchId>35624</branchId>
							<reflexiveQuestion>
								<id>35624</id>
								<question>COR High Risk Countries ABC</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>COR High Risk Countries ABC No</declaration>
								<interactive>false</interactive>
								<caseData>life/COR_HIGH_RISK_COUNTRIES_ABC</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425371">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>38681</id>
					<name>Face amount limit</name>
					<autorun>true</autorun>
					<alias>Face amount limit</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>378215</id>
							<branchId>378215</branchId>
							<reflexiveQuestion>
								<id>378215</id>
								<question>Main Benefit Sum Assured</question>
								<answerIndex>0</answerIndex>
								<answerValue>375000</answerValue>
								<answerText>375000</answerText>
								<declaration>Main Benefit Sum Assured 375000</declaration>
								<interactive>false</interactive>
								<caseData>life/MAIN_BENEFIT_SUM_ASSURED</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425372">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>3722</id>
					<name>FATCA</name>
					<autorun>true</autorun>
					<alias>FATCA</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>25101</id>
							<branchId>25101</branchId>
							<reflexiveQuestion>
								<id>25101</id>
								<question>FATCA Indicator</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>FATCA Indicator No</declaration>
								<interactive>false</interactive>
								<caseData>life/FATCA_IND</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425373">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>51057</id>
					<name>Financial limits</name>
					<autorun>true</autorun>
					<alias>Financial limits - Death benefit</alias>
					<version>11</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>582639</id>
							<branchId>582639</branchId>
							<reflexiveQuestion>
								<id>582639</id>
								<question>Risk Type</question>
								<answerIndex>0</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Death benefit</answerText>
								<declaration>Risk Type Death benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582640</id>
							<branchId>582640</branchId>
							<reflexiveQuestion>
								<id>582640</id>
								<question>Age</question>
								<answerIndex>1</answerIndex>
								<answerValue>55</answerValue>
								<answerText>55</answerText>
								<declaration>Age 55</declaration>
								<interactive>false</interactive>
								<caseData>life/AGE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582645</id>
							<branchId>582645</branchId>
							<reflexiveQuestion>
								<id>582645</id>
								<question>Non Income Earner Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Non Income Earner Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/NON_INCOME_EARNER_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425374">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>51057</id>
					<name>Financial limits</name>
					<autorun>true</autorun>
					<alias>Financial limits - Accidental Death Benefit</alias>
					<version>11</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>582639</id>
							<branchId>582639</branchId>
							<reflexiveQuestion>
								<id>582639</id>
								<question>Risk Type</question>
								<answerIndex>4</answerIndex>
								<answerValue>4</answerValue>
								<answerText>Accidental Death Benefit</answerText>
								<declaration>Risk Type Accidental Death Benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582686</id>
							<branchId>582686</branchId>
							<reflexiveQuestion>
								<id>582686</id>
								<question>Age</question>
								<answerIndex>1</answerIndex>
								<answerValue>55</answerValue>
								<answerText>55</answerText>
								<declaration>Age 55</declaration>
								<interactive>false</interactive>
								<caseData>life/AGE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582691</id>
							<branchId>582691</branchId>
							<reflexiveQuestion>
								<id>582691</id>
								<question>Non Income Earner Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Non Income Earner Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/NON_INCOME_EARNER_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582695</id>
							<branchId>582695</branchId>
							<reflexiveQuestion>
								<id>582695</id>
								<question>Total Sum at Risk</question>
								<answerIndex>0</answerIndex>
								<answerValue>375000</answerValue>
								<answerText>375000</answerText>
								<declaration>Total Sum at Risk 375000</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_SUM_AT_RISK</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425375">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>51057</id>
					<name>Financial limits</name>
					<autorun>true</autorun>
					<alias>Financial limits - Hospital Cash</alias>
					<version>11</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>582639</id>
							<branchId>582639</branchId>
							<reflexiveQuestion>
								<id>582639</id>
								<question>Risk Type</question>
								<answerIndex>7</answerIndex>
								<answerValue>11</answerValue>
								<answerText>Hospital Cash</answerText>
								<declaration>Risk Type Hospital Cash</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582700</id>
							<branchId>582700</branchId>
							<reflexiveQuestion>
								<id>582700</id>
								<question>UL2019 Plan 2 Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>UL2019 Plan 2 Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/UL2019_PLAN2_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582776</id>
							<branchId>582776</branchId>
							<reflexiveQuestion>
								<id>582776</id>
								<question>Non Income Earner Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Non Income Earner Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/NON_INCOME_EARNER_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582784</id>
							<branchId>582784</branchId>
							<reflexiveQuestion>
								<id>582784</id>
								<question>Premium Current Policy</question>
								<answerIndex>1</answerIndex>
								<answerValue>20550</answerValue>
								<answerText>20550</answerText>
								<declaration>Premium Current Policy 20550</declaration>
								<interactive>false</interactive>
								<caseData>case/PREMIUM_CURRENT_POLICY</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>582788</id>
							<branchId>582788</branchId>
							<reflexiveQuestion>
								<id>582788</id>
								<question>Total Sum at Risk</question>
								<answerIndex>0</answerIndex>
								<answerValue>1000</answerValue>
								<answerText>1000</answerText>
								<declaration>Total Sum at Risk 1000</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_SUM_AT_RISK</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425376">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>43014</id>
					<name>Financial requirements</name>
					<autorun>true</autorun>
					<alias>Financial requirements - Death benefit</alias>
					<version>8</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>414734</id>
							<branchId>414734</branchId>
							<reflexiveQuestion>
								<id>414734</id>
								<question>Risk Type</question>
								<answerIndex>0</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Death benefit</answerText>
								<declaration>Risk Type Death benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>414735</id>
							<branchId>414735</branchId>
							<reflexiveQuestion>
								<id>414735</id>
								<question>Unit Linked Product Flag</question>
								<answerIndex>0</answerIndex>
								<answerValue>true</answerValue>
								<answerText>Yes</answerText>
								<declaration>Unit Linked Product Flag Yes</declaration>
								<interactive>false</interactive>
								<caseData>case/UNIT_LINKED_PRODUCT_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>414736</id>
							<branchId>414736</branchId>
							<reflexiveQuestion>
								<id>414736</id>
								<question>Channel</question>
								<answerIndex>1</answerIndex>
								<answerValue>2</answerValue>
								<answerText>Bancas</answerText>
								<declaration>Channel Bancas</declaration>
								<interactive>false</interactive>
								<caseData>case/CHANNEL</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>414785</id>
							<branchId>414785</branchId>
							<reflexiveQuestion>
								<id>414785</id>
								<question>Total Sum At Risk Financial</question>
								<answerIndex>0</answerIndex>
								<answerValue>375000</answerValue>
								<answerText>375000</answerText>
								<declaration>Total Sum At Risk Financial 375000</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_SUM_AT_RISK_FINANCIAL</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425377">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>43014</id>
					<name>Financial requirements</name>
					<autorun>true</autorun>
					<alias>Financial requirements - Accidental Death Benefit</alias>
					<version>8</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>414734</id>
							<branchId>414734</branchId>
							<reflexiveQuestion>
								<id>414734</id>
								<question>Risk Type</question>
								<answerIndex>4</answerIndex>
								<answerValue>4</answerValue>
								<answerText>Accidental Death Benefit</answerText>
								<declaration>Risk Type Accidental Death Benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425378">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>43014</id>
					<name>Financial requirements</name>
					<autorun>true</autorun>
					<alias>Financial requirements - Hospital Cash</alias>
					<version>8</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>414734</id>
							<branchId>414734</branchId>
							<reflexiveQuestion>
								<id>414734</id>
								<question>Risk Type</question>
								<answerIndex>7</answerIndex>
								<answerValue>11</answerValue>
								<answerText>Hospital Cash</answerText>
								<declaration>Risk Type Hospital Cash</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425379">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>24615</id>
					<name>Healthcare Rider</name>
					<autorun>true</autorun>
					<alias>Healthcare Rider</alias>
					<version>4</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>224725</id>
							<branchId>224725</branchId>
							<reflexiveQuestion>
								<id>224725</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>224727</id>
							<branchId>224727</branchId>
							<reflexiveQuestion>
								<id>224727</id>
								<question>Link Type</question>
								<answerIndex>4</answerIndex>
								<answerValue>5</answerValue>
								<answerText>Insured</answerText>
								<declaration>Link Type Insured</declaration>
								<interactive>false</interactive>
								<caseData>life/LINK_TYP</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>224732</id>
							<branchId>224732</branchId>
							<reflexiveQuestion>
								<id>224732</id>
								<question>Healthcare Rider Policy Owner Option</question>
								<answerIndex>4</answerIndex>
								<answerValue>5</answerValue>
								<answerText>None</answerText>
								<declaration>Healthcare Rider Policy Owner Option None</declaration>
								<interactive>false</interactive>
								<caseData>life/HEALTHCARE_RIDER_PO_OPTION</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>224773</id>
							<branchId>224773</branchId>
							<reflexiveQuestion>
								<id>224773</id>
								<question>Healthcare Rider Existing Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Healthcare Rider Existing Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/HEALTHCARE_RIDER_EXISTING_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>224775</id>
							<branchId>224775</branchId>
							<reflexiveQuestion>
								<id>224775</id>
								<question>Healthcare Rider Option</question>
								<answerIndex>4</answerIndex>
								<answerValue>5</answerValue>
								<answerText>None</answerText>
								<declaration>Healthcare Rider Option None</declaration>
								<interactive>false</interactive>
								<caseData>life/HEALTHCARE_RIDER_OPTION</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425380">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>25779</id>
					<name>Income factor multiple</name>
					<autorun>true</autorun>
					<alias>Income factor multiple - Death benefit</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>249649</id>
							<branchId>249649</branchId>
							<reflexiveQuestion>
								<id>249649</id>
								<question>Risk Type</question>
								<answerIndex>0</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Death benefit</answerText>
								<declaration>Risk Type Death benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>249650</id>
							<branchId>249650</branchId>
							<reflexiveQuestion>
								<id>249650</id>
								<question>Non Income Earner Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Non Income Earner Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/NON_INCOME_EARNER_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>249652</id>
							<branchId>249652</branchId>
							<reflexiveQuestion>
								<id>249652</id>
								<question>Age</question>
								<answerIndex>3</answerIndex>
								<answerValue>55</answerValue>
								<answerText>55</answerText>
								<declaration>Age 55</declaration>
								<interactive>false</interactive>
								<caseData>life/AGE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>249674</id>
							<branchId>249674</branchId>
							<reflexiveQuestion>
								<id>249674</id>
								<question>Income Factor</question>
								<answerIndex>1</answerIndex>
								<answerValue>0.625</answerValue>
								<answerText>0.625</answerText>
								<declaration>Income Factor 0.625</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/INCOME_FACTOR</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>249676</id>
							<branchId>249676</branchId>
							<reflexiveQuestion>
								<id>249676</id>
								<question>Income Factor Life plus CI</question>
								<answerIndex>0</answerIndex>
								<answerValue>0.625</answerValue>
								<answerText>0.625</answerText>
								<declaration>Income Factor Life plus CI 0.625</declaration>
								<interactive>false</interactive>
								<caseData>life/INCOME_FACTOR_LIFE_CI</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425381">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>25779</id>
					<name>Income factor multiple</name>
					<autorun>true</autorun>
					<alias>Income factor multiple - Accidental Death Benefit</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>249649</id>
							<branchId>249649</branchId>
							<reflexiveQuestion>
								<id>249649</id>
								<question>Risk Type</question>
								<answerIndex>4</answerIndex>
								<answerValue>4</answerValue>
								<answerText>Accidental Death Benefit</answerText>
								<declaration>Risk Type Accidental Death Benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425382">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>25779</id>
					<name>Income factor multiple</name>
					<autorun>true</autorun>
					<alias>Income factor multiple - Hospital Cash</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>249649</id>
							<branchId>249649</branchId>
							<reflexiveQuestion>
								<id>249649</id>
								<question>Risk Type</question>
								<answerIndex>7</answerIndex>
								<answerValue>11</answerValue>
								<answerText>Hospital Cash</answerText>
								<declaration>Risk Type Hospital Cash</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425383">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>29120</id>
					<name>Insurable interest</name>
					<autorun>true</autorun>
					<alias>Insurable interest</alias>
					<version>4</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>326665</id>
							<branchId>326665</branchId>
							<reflexiveQuestion>
								<id>326665</id>
								<question>Corporate Policy Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Corporate Policy Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/CORPORATE_POLICY_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>326687</id>
							<branchId>326687</branchId>
							<reflexiveQuestion>
								<id>326687</id>
								<question>Relationship of Policy Owner to Main Insured</question>
								<answerIndex>1</answerIndex>
								<answerValue>2</answerValue>
								<answerText>Self</answerText>
								<declaration>Relationship of Policy Owner to Main Insured Self</declaration>
								<interactive>false</interactive>
								<caseData>life/RELATIONSHIP_PO_TO_INSURED</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>326689</id>
							<branchId>326689</branchId>
							<reflexiveQuestion>
								<id>326689</id>
								<question>Relationship of Life to Main Insured</question>
								<answerIndex>1</answerIndex>
								<answerValue>2</answerValue>
								<answerText>Self</answerText>
								<declaration>Relationship of Life to Main Insured Self</declaration>
								<interactive>false</interactive>
								<caseData>life/RELATIONSHIP_TO_INSURED</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425384">
					<known>true</known>
					<stage>life</stage>
					<category tc="2" code="MEDICALGENERAL">Medical (General)</category>
					<id>20886</id>
					<name>Medical document submitted</name>
					<autorun>true</autorun>
					<alias>Medical document submitted</alias>
					<version>4</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>205698</id>
							<branchId>205698</branchId>
							<reflexiveQuestion>
								<id>205698</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425385">
					<known>true</known>
					<stage>life</stage>
					<category tc="7" code="RESIDENTIAL">Residential</category>
					<id>3908</id>
					<name>Nationality</name>
					<autorun>true</autorun>
					<alias>Nationality</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>26127</id>
							<branchId>26127</branchId>
							<reflexiveQuestion>
								<id>26127</id>
								<question>Nationality Declined Countries E</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Nationality Declined Countries E No</declaration>
								<interactive>false</interactive>
								<caseData>life/NATIONALITY_DECLINED_COUNTRIES_E</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>26129</id>
							<branchId>26129</branchId>
							<reflexiveQuestion>
								<id>26129</id>
								<question>Nationality Japan</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Nationality Japan No</declaration>
								<interactive>false</interactive>
								<caseData>life/NATIONALITY_JAPAN</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>26131</id>
							<branchId>26131</branchId>
							<reflexiveQuestion>
								<id>26131</id>
								<question>Nationality USA</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Nationality USA No</declaration>
								<interactive>false</interactive>
								<caseData>life/NATIONALITY_USA</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425386">
					<known>true</known>
					<stage>life</stage>
					<category tc="7" code="RESIDENTIAL">Residential</category>
					<id>6017</id>
					<name>Nationality - high risk countries A B C</name>
					<autorun>true</autorun>
					<alias>Nationality - high risk countries A B C</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>35818</id>
							<branchId>35818</branchId>
							<reflexiveQuestion>
								<id>35818</id>
								<question>Nationality High Risk Countries ABC</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Nationality High Risk Countries ABC No</declaration>
								<interactive>false</interactive>
								<caseData>life/NATIONALITY_HIGH_RISK_COUNTRIES_ABC</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425387">
					<known>true</known>
					<stage>life</stage>
					<category tc="7" code="RESIDENTIAL">Residential</category>
					<id>4116</id>
					<name>Nationality 2</name>
					<autorun>true</autorun>
					<alias>Nationality 2</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>29354</id>
							<branchId>29354</branchId>
							<reflexiveQuestion>
								<id>29354</id>
								<question>Nationality 2 empty</question>
								<answerIndex>0</answerIndex>
								<answerValue>true</answerValue>
								<answerText>Yes</answerText>
								<declaration>Nationality 2 empty Yes</declaration>
								<interactive>false</interactive>
								<caseData>life/NATIONALITY_2_EMPTY</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425388">
					<known>true</known>
					<stage>life</stage>
					<category tc="7" code="RESIDENTIAL">Residential</category>
					<id>6018</id>
					<name>Nationality 2 - high risk countries A B C</name>
					<autorun>true</autorun>
					<alias>Nationality 2 - high risk countries A B C</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>35821</id>
							<branchId>35821</branchId>
							<reflexiveQuestion>
								<id>35821</id>
								<question>Nationality 2 empty</question>
								<answerIndex>0</answerIndex>
								<answerValue>true</answerValue>
								<answerText>Yes</answerText>
								<declaration>Nationality 2 empty Yes</declaration>
								<interactive>false</interactive>
								<caseData>life/NATIONALITY_2_EMPTY</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425389">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>4117</id>
					<name>NB admin check</name>
					<autorun>true</autorun>
					<alias>NB admin check</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>29363</id>
							<branchId>29363</branchId>
							<reflexiveQuestion>
								<id>29363</id>
								<question>New Business Admin Check Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>New Business Admin Check Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/NB_ADMIN_CHECK_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425390">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>4118</id>
					<name>NB underwriting check</name>
					<autorun>true</autorun>
					<alias>NB underwriting check</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>29366</id>
							<branchId>29366</branchId>
							<reflexiveQuestion>
								<id>29366</id>
								<question>New Business UW Check Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>New Business UW Check Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/NB_UW_CHECK_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425391">
					<known>true</known>
					<stage>life</stage>
					<category tc="2" code="MEDICALGENERAL">Medical (General)</category>
					<id>43015</id>
					<name>Non medical limits</name>
					<autorun>true</autorun>
					<alias>Non medical limits - Death benefit</alias>
					<version>7</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>414878</id>
							<branchId>414878</branchId>
							<reflexiveQuestion>
								<id>414878</id>
								<question>Risk Type</question>
								<answerIndex>0</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Death benefit</answerText>
								<declaration>Risk Type Death benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>414879</id>
							<branchId>414879</branchId>
							<reflexiveQuestion>
								<id>414879</id>
								<question>Channel</question>
								<answerIndex>1</answerIndex>
								<answerValue>2</answerValue>
								<answerText>Bancas</answerText>
								<declaration>Channel Bancas</declaration>
								<interactive>false</interactive>
								<caseData>case/CHANNEL</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>415548</id>
							<branchId>415548</branchId>
							<reflexiveQuestion>
								<id>415548</id>
								<question>Unit Linked Product Flag</question>
								<answerIndex>0</answerIndex>
								<answerValue>true</answerValue>
								<answerText>Yes</answerText>
								<declaration>Unit Linked Product Flag Yes</declaration>
								<interactive>false</interactive>
								<caseData>case/UNIT_LINKED_PRODUCT_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>415549</id>
							<branchId>415549</branchId>
							<reflexiveQuestion>
								<id>415549</id>
								<question>Age</question>
								<answerIndex>4</answerIndex>
								<answerValue>55</answerValue>
								<answerText>55</answerText>
								<declaration>Age 55</declaration>
								<interactive>false</interactive>
								<caseData>life/AGE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>415562</id>
							<branchId>415562</branchId>
							<reflexiveQuestion>
								<id>415562</id>
								<question>Total Sum At Risk Medical</question>
								<answerIndex>0</answerIndex>
								<answerValue>281250</answerValue>
								<answerText>281250</answerText>
								<declaration>Total Sum At Risk Medical 281250</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_SUM_AT_RISK_MEDICAL</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425392">
					<known>true</known>
					<stage>life</stage>
					<category tc="2" code="MEDICALGENERAL">Medical (General)</category>
					<id>43015</id>
					<name>Non medical limits</name>
					<autorun>true</autorun>
					<alias>Non medical limits - Accidental Death Benefit</alias>
					<version>7</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>414878</id>
							<branchId>414878</branchId>
							<reflexiveQuestion>
								<id>414878</id>
								<question>Risk Type</question>
								<answerIndex>4</answerIndex>
								<answerValue>4</answerValue>
								<answerText>Accidental Death Benefit</answerText>
								<declaration>Risk Type Accidental Death Benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425393">
					<known>true</known>
					<stage>life</stage>
					<category tc="2" code="MEDICALGENERAL">Medical (General)</category>
					<id>43015</id>
					<name>Non medical limits</name>
					<autorun>true</autorun>
					<alias>Non medical limits - Hospital Cash</alias>
					<version>7</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>414878</id>
							<branchId>414878</branchId>
							<reflexiveQuestion>
								<id>414878</id>
								<question>Risk Type</question>
								<answerIndex>7</answerIndex>
								<answerValue>11</answerValue>
								<answerText>Hospital Cash</answerText>
								<declaration>Risk Type Hospital Cash</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425394">
					<known>true</known>
					<stage>life</stage>
					<category tc="8" code="FINANCIAL">Financial</category>
					<id>5001</id>
					<name>Policy with other company</name>
					<autorun>true</autorun>
					<alias>Policy with other company</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>30001</id>
							<branchId>30001</branchId>
							<reflexiveQuestion>
								<id>30001</id>
								<question>Main Benefit Sum Assured</question>
								<answerIndex>0</answerIndex>
								<answerValue>375000</answerValue>
								<answerText>375000</answerText>
								<declaration>Main Benefit Sum Assured 375000</declaration>
								<interactive>false</interactive>
								<caseData>life/MAIN_BENEFIT_SUM_ASSURED</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425395">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>3975</id>
					<name>Previous claim history</name>
					<autorun>true</autorun>
					<alias>Previous claim history</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>28578</id>
							<branchId>28578</branchId>
							<reflexiveQuestion>
								<id>28578</id>
								<question>Previous Claim Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Previous Claim Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/PREVIOUS_CLAIM_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425396">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>3997</id>
					<name>Random check</name>
					<autorun>true</autorun>
					<alias>Random check</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>28673</id>
							<branchId>28673</branchId>
							<reflexiveQuestion>
								<id>28673</id>
								<question>Random Check</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Random Check No</declaration>
								<interactive>false</interactive>
								<caseData>life/RANDOM_CHECK</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425397">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>25796</id>
					<name>Substandard history</name>
					<autorun>true</autorun>
					<alias>Substandard history</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>250124</id>
							<branchId>250124</branchId>
							<reflexiveQuestion>
								<id>250124</id>
								<question>Substandard Flag in Illustration</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Substandard Flag in Illustration No</declaration>
								<interactive>false</interactive>
								<caseData>life/SUBSTANDARD_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>250128</id>
							<branchId>250128</branchId>
							<reflexiveQuestion>
								<id>250128</id>
								<question>Previous Substandard Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Previous Substandard Flag No</declaration>
								<interactive>false</interactive>
								<caseData>life/PREVIOUS_SUBSTANDARD_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425398">
					<known>true</known>
					<stage>life</stage>
					<category tc="4" code="LIFESTYLE">Lifestyle</category>
					<id>20944</id>
					<name>Tobacco</name>
					<autorun>true</autorun>
					<alias>Tobacco</alias>
					<version>2</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>206044</id>
							<branchId>206044</branchId>
							<reflexiveQuestion>
								<id>206044</id>
								<question>Daily Cigarette Quantity</question>
								<answerIndex>1</answerIndex>
								<answerValue>2</answerValue>
								<answerText>Smoke up to 30 cigarettes per day</answerText>
								<declaration>Daily Cigarette Quantity Smoke up to 30 cigarettes per day</declaration>
								<interactive>false</interactive>
								<caseData>life/DAILY_CIGARETTE_QUANTITY</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425399">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>4111</id>
					<name>zExtra Mortality and exclusions threshold</name>
					<autorun>true</autorun>
					<alias>zExtra Mortality and exclusions threshold - Death benefit</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>29037</id>
							<branchId>29037</branchId>
							<reflexiveQuestion>
								<id>29037</id>
								<question>Risk Type</question>
								<answerIndex>0</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Death benefit</answerText>
								<declaration>Risk Type Death benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>29038</id>
							<branchId>29038</branchId>
							<reflexiveQuestion>
								<id>29038</id>
								<question>Total Premium  Loading</question>
								<answerIndex>0</answerIndex>
								<answerValue>0</answerValue>
								<answerText>0</answerText>
								<declaration>Total Premium  Loading 0</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_PREMIUM_LOADING</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425400">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>4111</id>
					<name>zExtra Mortality and exclusions threshold</name>
					<autorun>true</autorun>
					<alias>zExtra Mortality and exclusions threshold - Accidental Death Benefit</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>29037</id>
							<branchId>29037</branchId>
							<reflexiveQuestion>
								<id>29037</id>
								<question>Risk Type</question>
								<answerIndex>4</answerIndex>
								<answerValue>4</answerValue>
								<answerText>Accidental Death Benefit</answerText>
								<declaration>Risk Type Accidental Death Benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>29062</id>
							<branchId>29062</branchId>
							<reflexiveQuestion>
								<id>29062</id>
								<question>Total Premium  Loading</question>
								<answerIndex>0</answerIndex>
								<answerValue>0</answerValue>
								<answerText>0</answerText>
								<declaration>Total Premium  Loading 0</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_PREMIUM_LOADING</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425401">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>4111</id>
					<name>zExtra Mortality and exclusions threshold</name>
					<autorun>true</autorun>
					<alias>zExtra Mortality and exclusions threshold - Hospital Cash</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>29037</id>
							<branchId>29037</branchId>
							<reflexiveQuestion>
								<id>29037</id>
								<question>Risk Type</question>
								<answerIndex>7</answerIndex>
								<answerValue>11</answerValue>
								<answerText>Hospital Cash</answerText>
								<declaration>Risk Type Hospital Cash</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>29073</id>
							<branchId>29073</branchId>
							<reflexiveQuestion>
								<id>29073</id>
								<question>Total Premium  Loading</question>
								<answerIndex>0</answerIndex>
								<answerValue>0</answerValue>
								<answerText>0</answerText>
								<declaration>Total Premium  Loading 0</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_PREMIUM_LOADING</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>29074</id>
							<branchId>29074</branchId>
							<reflexiveQuestion>
								<id>29074</id>
								<question>Exclusion Count</question>
								<answerIndex>0</answerIndex>
								<answerValue>2</answerValue>
								<answerText>2</answerText>
								<declaration>Exclusion Count 2</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/EXCLUSION_COUNT</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
				<condition id="condition_15425402">
					<known>true</known>
					<stage>life</stage>
					<name>25% Borderline acceptance - Death benefit</name>
					<autorun>true</autorun>
					<alias>25% Borderline acceptance - Death benefit</alias>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>669436</id>
							<branchId>669436</branchId>
							<reflexiveQuestion>
								<id>669436</id>
								<question>Risk Type</question>
								<answerIndex>0</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Death benefit</answerText>
								<declaration>Risk Type Death benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>669437</id>
							<branchId>669437</branchId>
							<reflexiveQuestion>
								<id>669437</id>
								<question>Total Premium  Loading</question>
								<answerIndex>0</answerIndex>
								<answerValue>0</answerValue>
								<answerText>0</answerText>
								<declaration>Total Premium  Loading 0</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_PREMIUM_LOADING</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>ADJUSTMENT</disclosureType>
				</condition>
				<condition id="condition_15425403">
					<known>true</known>
					<stage>life</stage>
					<name>25% Borderline acceptance - Accidental Death Benefit</name>
					<autorun>true</autorun>
					<alias>25% Borderline acceptance - Accidental Death Benefit</alias>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>669436</id>
							<branchId>669436</branchId>
							<reflexiveQuestion>
								<id>669436</id>
								<question>Risk Type</question>
								<answerIndex>4</answerIndex>
								<answerValue>4</answerValue>
								<answerText>Accidental Death Benefit</answerText>
								<declaration>Risk Type Accidental Death Benefit</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>669453</id>
							<branchId>669453</branchId>
							<reflexiveQuestion>
								<id>669453</id>
								<question>Total Premium  Loading</question>
								<answerIndex>0</answerIndex>
								<answerValue>0</answerValue>
								<answerText>0</answerText>
								<declaration>Total Premium  Loading 0</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_PREMIUM_LOADING</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>ADJUSTMENT</disclosureType>
				</condition>
				<condition id="condition_15425404">
					<known>true</known>
					<stage>life</stage>
					<name>25% Borderline acceptance - Hospital Cash</name>
					<autorun>true</autorun>
					<alias>25% Borderline acceptance - Hospital Cash</alias>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>669436</id>
							<branchId>669436</branchId>
							<reflexiveQuestion>
								<id>669436</id>
								<question>Risk Type</question>
								<answerIndex>7</answerIndex>
								<answerValue>11</answerValue>
								<answerText>Hospital Cash</answerText>
								<declaration>Risk Type Hospital Cash</declaration>
								<interactive>false</interactive>
								<caseData>session/RISK_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>669464</id>
							<branchId>669464</branchId>
							<reflexiveQuestion>
								<id>669464</id>
								<question>Total Premium  Loading</question>
								<answerIndex>0</answerIndex>
								<answerValue>0</answerValue>
								<answerText>0</answerText>
								<declaration>Total Premium  Loading 0</declaration>
								<interactive>false</interactive>
								<caseData>life/RISK_BASED_VALUES/TOTAL_PREMIUM_LOADING</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>No action</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>ADJUSTMENT</disclosureType>
				</condition>
				<condition id="condition_15425405">
					<known>true</known>
					<stage>life</stage>
					<category tc="5" code="OCCUPATIONAL">Occupational</category>
					<id>3607</id>
					<name>Cleaner - Janitor</name>
					<locale>en</locale>
					<alias>Cleaner - Janitor</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<linkedBaseQuestions>
						<baseQuestionRef id="basequestion_6938164">OCC_prepopulate</baseQuestionRef>
					</linkedBaseQuestions>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>INTERACTIVE</disclosureType>
				</condition>
				<condition id="condition_15425406">
					<known>true</known>
					<stage>life</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>4063</id>
					<name>Substandard application history disclosure</name>
					<locale>en</locale>
					<alias>Substandard application history disclosure</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<linkedBaseQuestions>
						<baseQuestionRef id="basequestion_6938165">Q001</baseQuestionRef>
					</linkedBaseQuestions>
					<decisionPath>
						<questionStep>
							<id>28853</id>
							<branchId>28853</branchId>
							<reflexiveQuestion>
								<id>28853</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>28855</id>
							<branchId>28855</branchId>
							<reflexiveQuestion>
								<id>28855</id>
								<question>Please give details.</question>
								<answerIndex>0</answerIndex>
								<answerValue>AHDG</answerValue>
								<answerText>AHDG</answerText>
								<declaration>Please give details. AHDG</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Disclosed history of substandard policies</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Disclosed history of substandard policies</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Disclosed history of substandard policies</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>INTERACTIVE</disclosureType>
				</condition>
				<condition id="condition_15425407">
					<known>true</known>
					<stage>life</stage>
					<category tc="6" code="AVOCATIONAL">Avocational</category>
					<id>4045</id>
					<name>Skydiving</name>
					<locale>en</locale>
					<alias>Skydiving</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<linkedBaseQuestions>
						<baseQuestionRef id="basequestion_6938166">AVOCATION_general</baseQuestionRef>
					</linkedBaseQuestions>
					<decisionPath>
						<questionStep>
							<id>28785</id>
							<branchId>28785</branchId>
							<reflexiveQuestion>
								<id>28785</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>28787</id>
							<branchId>28787</branchId>
							<reflexiveQuestion>
								<id>28787</id>
								<question>Do you participate in any of the following: record attempts, canopy piloting, skysurfing or wingsuits?</question>
								<answerIndex>0</answerIndex>
								<answerValue>true</answerValue>
								<answerText>Yes</answerText>
								<declaration>Do you participate in any of the following: record attempts, canopy piloting, skysurfing or wingsuits? Yes</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Decline</label>
							<declined>true</declined>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Decline</label>
							<declined>true</declined>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Decline</label>
							<declined>true</declined>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>INTERACTIVE</disclosureType>
				</condition>
				<condition id="condition_15425408">
					<known>true</known>
					<stage>life</stage>
					<category tc="4" code="LIFESTYLE">Lifestyle</category>
					<id>3682</id>
					<name>Drug abuse</name>
					<locale>en</locale>
					<alias>Drug abuse</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<linkedBaseQuestions>
						<baseQuestionRef id="basequestion_6938168">LIFESTYLE_drugs</baseQuestionRef>
					</linkedBaseQuestions>
					<decisionPath>
						<questionStep>
							<id>25024</id>
							<branchId>25024</branchId>
							<reflexiveQuestion>
								<id>25024</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>25026</id>
							<branchId>25026</branchId>
							<reflexiveQuestion>
								<id>25026</id>
								<question>Please provide name of addictive substance used, period of usage and date of last usage.</question>
								<answerIndex>0</answerIndex>
								<answerValue>AB</answerValue>
								<answerText>AB</answerText>
								<declaration>Please provide name of addictive substance used, period of usage and date of last usage. AB</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>25027</id>
							<branchId>25027</branchId>
							<reflexiveQuestion>
								<id>25027</id>
								<question>Have you completed treatment or rehabilitation?</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Have you completed treatment or rehabilitation? No</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Decline</label>
							<declined>true</declined>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Decline</label>
							<declined>true</declined>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Decline</label>
							<declined>true</declined>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>INTERACTIVE</disclosureType>
				</condition>
				<condition id="condition_15425409">
					<known>true</known>
					<stage>life</stage>
					<category tc="1" code="MEDICAL">Medical</category>
					<id>4043</id>
					<name>Sinusitis</name>
					<locale>en</locale>
					<alias>Sinusitis</alias>
					<version>1</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<linkedBaseQuestions>
						<baseQuestionRef id="basequestion_6938170">MED_medication</baseQuestionRef>
					</linkedBaseQuestions>
					<decisionPath>
						<questionStep>
							<id>28777</id>
							<branchId>28777</branchId>
							<reflexiveQuestion>
								<id>28777</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Exclude Sinusitis</label>
							<exclusions>
								<exclusion tc="292" code="XMS14">No claim shall be admitted in respect to any investigation, hospitalisation, operation or treatment whether directly or indirectly caused by sinusitis</exclusion>
							</exclusions>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>INTERACTIVE</disclosureType>
				</condition>
				<condition id="condition_15425410">
					<known>true</known>
					<stage>life</stage>
					<category tc="1" code="MEDICAL">Medical</category>
					<id>36037</id>
					<name>Other Medical conditions</name>
					<locale>en</locale>
					<alias>Heart attack</alias>
					<version>7</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<linkedBaseQuestions>
						<baseQuestionRef id="basequestion_6938171">MED_hospital</baseQuestionRef>
					</linkedBaseQuestions>
					<decisionPath>
						<questionStep>
							<id>363063</id>
							<branchId>363063</branchId>
							<reflexiveQuestion>
								<id>363063</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>363065</id>
							<branchId>363065</branchId>
							<reflexiveQuestion>
								<id>363065</id>
								<question>Give full details, date, duration and treatment result.</question>
								<answerIndex>0</answerIndex>
								<answerValue>abc</answerValue>
								<answerText>abc</answerText>
								<declaration>Give full details, date, duration and treatment result. abc</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>363066</id>
							<branchId>363066</branchId>
							<reflexiveQuestion>
								<id>363066</id>
								<question>Give full name and address of doctor, hospital and clinic.</question>
								<answerIndex>0</answerIndex>
								<answerValue>gkh</answerValue>
								<answerText>gkh</answerText>
								<declaration>Give full name and address of doctor, hospital and clinic. gkh</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Medical condition to be assessed by underwriter</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Medical condition to be assessed by underwriter</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Medical condition to be assessed by underwriter</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
							<triggers>
								<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
							</triggers>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>INTERACTIVE</disclosureType>
				</condition>
				<condition id="condition_15425411">
					<known>true</known>
					<stage>life</stage>
					<category tc="1" code="MEDICAL">Medical</category>
					<id>15872</id>
					<name>Fractures - Arm</name>
					<locale>en</locale>
					<alias>Fractures - Arm</alias>
					<version>5</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<linkedBaseQuestions>
						<baseQuestionRef id="basequestion_6938174">MED_timeoffwork</baseQuestionRef>
					</linkedBaseQuestions>
					<decisionPath>
						<questionStep>
							<id>93880</id>
							<branchId>93880</branchId>
							<reflexiveQuestion>
								<id>93880</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>93882</id>
							<branchId>93882</branchId>
							<reflexiveQuestion>
								<id>93882</id>
								<question>Please state the underlying cause of the fracture:</question>
								<answerIndex>1</answerIndex>
								<answerValue>1</answerValue>
								<answerText>Due to trauma or accident</answerText>
								<declaration>Please state the underlying cause of the fracture: Due to trauma or accident</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>93884</id>
							<branchId>93884</branchId>
							<reflexiveQuestion>
								<id>93884</id>
								<question>Which arm was fractured?</question>
								<answerIndex>2</answerIndex>
								<answerValue>2</answerValue>
								<answerText>Both</answerText>
								<declaration>Which arm was fractured? Both</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>93903</id>
							<branchId>93903</branchId>
							<reflexiveQuestion>
								<id>93903</id>
								<question>Is the internal fixtures/plates removed if there is any?</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Is the internal fixtures/plates removed if there is any? No</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>93908</id>
							<branchId>93908</branchId>
							<reflexiveQuestion>
								<id>93908</id>
								<question>Have you fully recovered with no complications or residual symptoms such as pain?</question>
								<answerIndex>0</answerIndex>
								<answerValue>true</answerValue>
								<answerText>Yes</answerText>
								<declaration>Have you fully recovered with no complications or residual symptoms such as pain? Yes</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Exclude both arms</label>
							<exclusions>
								<exclusion tc="21" code="XMA36">No claim shall be admitted in respect of any disease, disability, disorder, injury, any operation, or treatment, whether directly or indirectly caused by the fracture of both arms</exclusion>
							</exclusions>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>INTERACTIVE</disclosureType>
				</condition>
				<condition id="condition_15425413">
					<known>true</known>
					<stage>life</stage>
					<category tc="7" code="RESIDENTIAL">Residential</category>
					<id>56304</id>
					<name>Residency &gt; 182 days (China)</name>
					<locale>en</locale>
					<alias>China</alias>
					<version>3</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<linkedBaseQuestions>
						<baseQuestionRef id="basequestion_6938179">RESIDENCY_general</baseQuestionRef>
					</linkedBaseQuestions>
					<decisionPath>
						<questionStep>
							<id>669398</id>
							<branchId>669398</branchId>
							<reflexiveQuestion>
								<id>669398</id>
								<question>Paper Application Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Paper Application Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/PAPER_APPLICATION_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>669400</id>
							<branchId>669400</branchId>
							<reflexiveQuestion>
								<id>669400</id>
								<question>Is the province in Tibet or Xinjiang?</question>
								<answerIndex>0</answerIndex>
								<answerValue>true</answerValue>
								<answerText>Yes</answerText>
								<declaration>Is the province in Tibet or Xinjiang? Yes</declaration>
								<interactive>true</interactive>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Refer to UW (Province = Tibet or Xinjiang)</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Refer to UW (Province = Tibet or Xinjiang)</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Refer to UW (Province = Tibet or Xinjiang)</label>
							<manualUnderwritingRequired>true</manualUnderwritingRequired>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>INTERACTIVE</disclosureType>
				</condition>
			</disclosures>
			<underwritingResults>
				<underwritingResult>
					<riskTypeUnderwritingStatus tc="7" code="DECLINED">Declined</riskTypeUnderwritingStatus>
					<riskType tc="1" code="LIFE">Death benefit</riskType>
					<declined>true</declined>
					<manualUnderwritingRequired>true</manualUnderwritingRequired>
					<triggers>
						<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
					</triggers>
				</underwritingResult>
				<underwritingResult>
					<riskTypeUnderwritingStatus tc="7" code="DECLINED">Declined</riskTypeUnderwritingStatus>
					<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
					<declined>true</declined>
					<manualUnderwritingRequired>true</manualUnderwritingRequired>
					<triggers>
						<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
					</triggers>
				</underwritingResult>
				<underwritingResult>
					<riskTypeUnderwritingStatus tc="7" code="DECLINED">Declined</riskTypeUnderwritingStatus>
					<riskType tc="11" code="HC">Hospital Cash</riskType>
					<declined>true</declined>
					<manualUnderwritingRequired>true</manualUnderwritingRequired>
					<triggers>
						<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
					</triggers>
					<exclusions>
						<exclusion tc="21" code="XMA36">No claim shall be admitted in respect of any disease, disability, disorder, injury, any operation, or treatment, whether directly or indirectly caused by the fracture of both arms</exclusion>
						<exclusion tc="292" code="XMS14">No claim shall be admitted in respect to any investigation, hospitalisation, operation or treatment whether directly or indirectly caused by sinusitis</exclusion>
					</exclusions>
				</underwritingResult>
			</underwritingResults>
		</entity>
		<entity type="beneficiary" name="1">
			<stageStatus>FULFILLED</stageStatus>
			<automatedUnderwritingComplete>true</automatedUnderwritingComplete>
			<underwritingStatus tc="2" code="CLEAN_CASE">Clean case</underwritingStatus>
			<dateOrdered>2022-03-21T05:41:53.066Z</dateOrdered>
			<dateCompleted>2022-03-21T05:41:53.066Z</dateCompleted>
			<source>AUTO</source>
			<disclosures>
				<condition id="condition_15425360">
					<known>true</known>
					<stage>beneficiary</stage>
					<category tc="9" code="GENERAL">General</category>
					<id>29119</id>
					<name>Beneficiary</name>
					<autorun>true</autorun>
					<alias>Beneficiary</alias>
					<version>4</version>
					<status tc="3" code="Confirmed">Confirmed</status>
					<decisionPath>
						<questionStep>
							<id>326600</id>
							<branchId>326600</branchId>
							<reflexiveQuestion>
								<id>326600</id>
								<question>Corporate Policy Flag</question>
								<answerIndex>1</answerIndex>
								<answerValue>false</answerValue>
								<answerText>No</answerText>
								<declaration>Corporate Policy Flag No</declaration>
								<interactive>false</interactive>
								<caseData>case/CORPORATE_POLICY_FLAG</caseData>
							</reflexiveQuestion>
						</questionStep>
						<questionStep>
							<id>326618</id>
							<branchId>326618</branchId>
							<reflexiveQuestion>
								<id>326618</id>
								<question>Beneficiary Type</question>
								<answerIndex>3</answerIndex>
								<answerValue>4</answerValue>
								<answerText>Parent</answerText>
								<declaration>Beneficiary Type Parent</declaration>
								<interactive>false</interactive>
								<caseData>beneficiary/BENEFICIARY_TYPE</caseData>
							</reflexiveQuestion>
						</questionStep>
					</decisionPath>
					<actions>
						<action>
							<riskType tc="1" code="LIFE">Death benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
							<label>Standard</label>
						</action>
						<action>
							<riskType tc="11" code="HC">Hospital Cash</riskType>
							<label>Standard</label>
						</action>
					</actions>
					<default>false</default>
					<disclosureType>AUTO</disclosureType>
				</condition>
			</disclosures>
			<underwritingResults>
				<underwritingResult>
					<riskTypeUnderwritingStatus tc="2" code="CLEAN_CASE">Clean case</riskTypeUnderwritingStatus>
					<riskType tc="1" code="LIFE">Death benefit</riskType>
				</underwritingResult>
				<underwritingResult>
					<riskTypeUnderwritingStatus tc="2" code="CLEAN_CASE">Clean case</riskTypeUnderwritingStatus>
					<riskType tc="4" code="ADB">Accidental Death Benefit</riskType>
				</underwritingResult>
				<underwritingResult>
					<riskTypeUnderwritingStatus tc="2" code="CLEAN_CASE">Clean case</riskTypeUnderwritingStatus>
					<riskType tc="11" code="HC">Hospital Cash</riskType>
				</underwritingResult>
			</underwritingResults>
		</entity>
		<entity type="case" name="1">
			<automatedUnderwritingComplete>true</automatedUnderwritingComplete>
			<source>AUTO</source>
		</entity>
		<caseDecision>
			<underwritingStatus tc="7" code="REFERRED">Referred</underwritingStatus>
			<activationDate>2022-03-21T05:46:36.528Z</activationDate>
			<decisionStatus tc="2" code="ACTIVE">Active</decisionStatus>
			<decisionType tc="1" code="FINAL">Final</decisionType>
			<approvedByUser>SYSTEM</approvedByUser>
			<lifeDecision>
				<lifeEntity>life_1</lifeEntity>
				<riskBasedDecisions>
					<riskBasedDecision>
						<riskTypeUnderwritingStatus tc="7" code="REFERRED">Referred</riskTypeUnderwritingStatus>
						# Recommedations to show this or triggers in this case "Route to Underwriting"
						<riskType tc="1" code="LIFE">Death benefit</riskType>
						<declined>true</declined>
						<manualUnderwritingRequired>true</manualUnderwritingRequired>
						<triggers>
							<trigger tc="33" code="ROUTE_TO_UW">Route to Underwriting</trigger>
						</triggers>
					</riskBasedDecision>
				</riskBasedDecisions>
			</lifeDecision>
		</caseDecision>
	</underwriting>
</case>`;
      //appendnew_next_sd_JzeDWWgrquyTZ5IN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JzeDWWgrquyTZ5IN');
    }
  }

  async sd_03m26RJq1KqOOy7y(bh) {
    try {
      bh.local.result = '';
      bh.input.checklist.forEach((list) => {
        bh.local.result += `
    <attribute name="${list}" value="true" investigation_checklist="true" />`;
      });
      //appendnew_next_sd_03m26RJq1KqOOy7y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_03m26RJq1KqOOy7y');
    }
  }

  async sd_2rvBd90SKhVgfQjn(bh) {
    try {
      bh.local.result = [
        {
          investigator: 'CONFIDENTIAL INVESTIGATIVE SERVICES PVT. LTD.',
          agent_category: 'UW1',
          agent_code: 'uw1a',
        },
        {
          investigator: 'FALCON BUSINESS SOLUTION PVT.LTD.',
          agent_category: 'UW1',
          agent_code: 'uw1b',
        },
        {
          investigator: 'VETERAN INVESTIGATION SERVICES',
          agent_category: 'UW2',
          agent_code: 'uw2a',
        },
        {
          investigator: 'STRIKING VISION INTELLIGENCE NETWORK (P) LTD.',
          agent_category: 'UW2',
          agent_code: 'uw2b',
        },
        {
          investigator: 'SHARP DETECTIVE PRIVATE LIMITED',
          agent_category: 'UW3',
          agent_code: 'uw3a',
        },
        {
          investigator: 'G.S. DETECTIVES AND INVESTIGATORS',
          agent_category: 'UW3',
          agent_code: 'uw3b',
        },
      ];
      //appendnew_next_sd_2rvBd90SKhVgfQjn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2rvBd90SKhVgfQjn');
    }
  }

  async sd_aCiSJQ2S28tinnR8(bh) {
    try {
      const today = new Date();
      const birthDate = new Date(bh.input.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      bh.local.age = age;
      //appendnew_next_sd_aCiSJQ2S28tinnR8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aCiSJQ2S28tinnR8');
    }
  }

  async sd_SYKRCBOJghzzhAci(bh) {
    try {
      bh.local.result = bh.input.investigation_types.join(', ');
      //appendnew_next_sd_SYKRCBOJghzzhAci
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SYKRCBOJghzzhAci');
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
  //appendnew_flow_investigation_Catch
}
