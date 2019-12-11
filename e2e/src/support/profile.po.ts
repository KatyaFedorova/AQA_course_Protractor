import {$} from "protractor";
import {BaseComponent} from "../helper/base.component";

export class ProfilePo extends BaseComponent {
  btnEdit = $('.btn-edit-trigger .Button-icon');
  btnViewProfile = $('.btn-edit-trigger .fl-icon-user');
  iconEditProfHeadline = $('.profile-user-byline .edit-widget-trigger');
  iconEditProfSummary = $('#profile-about-description-wrapper .edit-widget-trigger');
  iconEditHourRate = $('.profile-hourly-rate .edit-widget-trigger');
  inputProfHeadline = $('.edit-widget-input');
  inputProfSummary = $('.profile-about-description-input');
  inputHourRate = $('.hourly-rate-input');
  btnSaveProfHeadline = $('.profile-user-byline [i18n-msg="Save"]');
  btnSaveProfSummary = $('#profile-about-description-wrapper [i18n-msg="Save"]');
  btnSaveHourRate = $('.profile-hourly-rate [i18n-msg="Save"]');
  textProfHeadline = $('.profile-user-byline span:not(.ng-hide)');
  textProfSummary = $('span.profile-about-description:not(.ng-hide)');
  textHourRate = $('.hourly-rate-value .hourly-rate-input');

  btnAddEducation = $('[fl-inline-edit-education]');
  selectorCountry = $('[name= "country"]');
  selectorDegree = $('[name= "degree"]');
  selectorStartYear = $('[name= "startYear"]');
  selectorEndYear = $('[name= "endYear"]');
  btnSaveEducation = $('[fl-inline-edit-education] [type= "submit"]');

  textDegree = $('[fl-inline-edit-education] .profile-experience-title');
  textEducationDetails = $('[fl-inline-edit-education] .profile-experience-title');
}
