import { $, $$ } from 'protractor';
import { BaseComponent } from '../helper/base.component';

export class ProfilePo extends BaseComponent {
  readonly url = '/u/';

  readonly btnEdit = $('.btn-edit-trigger .Button-icon');
  readonly btnViewProfile = $('.btn-edit-trigger .fl-icon-user');
  readonly iconEditProfHeadline = $('.profile-user-byline .edit-widget-trigger');
  readonly iconEditProfSummary = $('#profile-about-description-wrapper .edit-widget-trigger');
  readonly iconEditHourRate = $('.profile-hourly-rate .edit-widget-trigger');
  readonly inputProfHeadline = $('.edit-widget-input');
  readonly inputProfSummary = $('.profile-about-description-input');
  readonly inputHourRate = $('.hourly-rate-input');
  readonly btnSaveProfHeadline = $('.profile-user-byline [i18n-msg="Save"]');
  readonly btnSaveProfSummary = $('#profile-about-description-wrapper [i18n-msg="Save"]');
  readonly btnSaveHourRate = $('.profile-hourly-rate [i18n-msg="Save"]');
  readonly textProfHeadline = $('.profile-user-byline span:not(.ng-hide)');
  readonly textProfSummary = $('span.profile-about-description:not(.ng-hide)');
  readonly textHourRate = $('.hourly-rate-value .hourly-rate-input');

  readonly btnAddEducation = $('[fl-inline-edit-education] .profile-experience-add-btn');
  readonly selectorCountry = $('[name= "country"]');
  readonly selectorUniversity = $('[name="school"]');
  readonly inputDegree = $('[name= "degree"]');
  readonly selectorStartYear = $('[name= "startYear"]');
  readonly selectorEndYear = $('[name= "endYear"]');
  readonly btnSaveEducation = $('[fl-inline-edit-education] [type= "submit"]');
  readonly textDegree = $$('.profile-experience-title').get(0);
  readonly textEducationDetails = $$('.profile-experience-byline').get(0);
}
