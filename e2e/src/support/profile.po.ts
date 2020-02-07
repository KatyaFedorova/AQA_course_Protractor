import { $, $$ } from "protractor";
import {BaseComponent} from "../helper/base.component";

export class ProfilePo extends BaseComponent {
  btnEdit = $('.EditButton button');
  inputProfHeadline = $('#professionalHeadlineEdit');
  inputProfSummary = $('#userSummaryEdit');
  inputHourRate = $('#hourlyRateEdit');
  btnProfileSummary = $('[fltrackinglabel= "SaveButtonClick"]');
  textProfHeadline = $('app-user-profile-summary-tagline h2');
  textProfSummary = $('app-user-profile-summary-description div');
  // yes, yes, I know, but is the shortest one selector which I can find for this element
  //xpath: (//div[contains(text(),'USD / hour')])[1]
  textHourRate = $('.UserSummary [data-col-tablet=\'4\'] fl-col app-user-profile-summary-information fl-bit fl-text:nth-of-type(1) div.NativeElement');
  //fl-col:nth-child(1) > fl-grid > fl-col:nth-child(3) > app-user-profile-summary-information > fl-bit:nth-child(1) > fl-bit > fl-text > div

  btnAddEducation = $('[fl-inline-edit-education] .profile-experience-add-btn');
  selectorCountry = $('[name= "country"]');
  selectorUniversity = $('[name="school"]');
  inputDegree = $('[name= "degree"]');
  selectorStartYear = $('[name= "startYear"]');
  selectorEndYear = $('[name= "endYear"]');
  btnSaveEducation = $('[fl-inline-edit-education] [type= "submit"]');
  textDegree = $('[fl-inline-edit-education] .profile-experience-title');
  textEducationDetails = $('[fl-inline-edit-education] .profile-experience-byline');
  educationItem = $$('.profile-experience-item');
  iconDelete = $('.flicon-delete');

  iconOnline = $('[data-status="online"]');
  textOnline = $('.online-text');

}
