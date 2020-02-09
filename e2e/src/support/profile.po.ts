import {$, $$, By, element} from "protractor";
import {BaseComponent} from "../helper/base.component";

export class ProfilePo extends BaseComponent {
  url = '/u/';
  btnEdit = $('.EditButton button');
  inputProfHeadline = $('#professionalHeadlineEdit');
  inputProfSummary = $('#userSummaryEdit');
  inputHourRate = $('#hourlyRateEdit');
  btnProfileSummary = $('[fltrackinglabel = "SaveButtonClick"]');
  textProfHeadline = $('app-user-profile-summary-tagline h2');
  textProfSummary = $('app-user-profile-summary-description div');
  //this is the shortest one selector which I can find for this element
  textHourRate = element(By.xpath('(//div[contains(text(),\'USD / hour\')])[1]'));
  // or we can use:
  //fl-col:nth-child(1) > fl-grid > fl-col:nth-child(3) > app-user-profile-summary-information > fl-bit:nth-child(1) > fl-bit > fl-text > div
  // or
  //.UserSummary [data-col-tablet='4'] fl-col app-user-profile-summary-information fl-bit fl-text:nth-of-type(1) div.NativeElement

  btnAddEducation = $('[fltrackinglabel = "UserProfileAddEducation"]');
  selectorCountry = $('[fltrackinglabel="EducationEditCountrySelect"] select');
  selectorUniversity = $('[fltrackinglabel="EducationEditUniversitySelect"] select');
  inputDegree = $('[fltrackinglabel= "EducationEditDegree"] input');
  selectorStartYear = $('[fltrackinglabel= "EducationEditStartYear"] select');
  selectorEndYear = $('[fltrackinglabel= "EducationEditEndYear"] select');
  btnSaveEducation = $('app-user-profile-editable-ui-action-row fl-button:nth-of-type(2)');
  textDegree = $$('.Degree h2').get(0);
  textEducationDetails = $$('app-user-profile-educations-view .Education-content').get(0);
}
