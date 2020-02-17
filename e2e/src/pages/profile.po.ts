import { $, $$ } from 'protractor';
import { BaseComponent } from './base.component';

export class ProfilePo extends BaseComponent {
  readonly url = '/u/';

  private readonly btnEdit = $('.btn-edit-trigger .Button-icon');
  private readonly btnViewProfile = $('.btn-edit-trigger .fl-icon-user');
  private readonly iconEditProfHeadline = $('.profile-user-byline .edit-widget-trigger');
  private readonly iconEditProfSummary = $('#profile-about-description-wrapper .edit-widget-trigger');
  private readonly iconEditHourRate = $('.profile-hourly-rate .edit-widget-trigger');
  private readonly inputProfHeadline = $('.edit-widget-input');
  private readonly inputProfSummary = $('.profile-about-description-input');
  private readonly inputHourRate = $('.hourly-rate-input');
  private readonly btnSaveProfHeadline = $('.profile-user-byline [i18n-msg="Save"]');
  private readonly btnSaveProfSummary = $('#profile-about-description-wrapper [i18n-msg="Save"]');
  private readonly btnSaveHourRate = $('.profile-hourly-rate [i18n-msg="Save"]');
  private readonly textProfHeadline = $('.profile-user-byline span:not(.ng-hide)');
  private readonly textProfSummary = $('span.profile-about-description:not(.ng-hide)');
  private readonly textHourRate = $('.hourly-rate-value .hourly-rate-input');
  
  private readonly btnAddEducation = $('[fl-inline-edit-education] .profile-experience-add-btn');
  private readonly selectorCountry = $('[name= "country"]');
  private readonly selectorUniversity = $('[name="school"]');
  private readonly inputDegree = $('[name= "degree"]');
  private readonly selectorStartYear = $('[name= "startYear"]');
  private readonly selectorEndYear = $('[name= "endYear"]');
  private readonly btnSaveEducation = $('[fl-inline-edit-education] [type= "submit"]');
  private readonly textDegree = $$('.profile-experience-title').get(0);
  private readonly textEducationDetails = $$('.profile-experience-byline').get(0);

  public async turnOnEditMode(): Promise<void> {
    await this.btnEdit.click();
  }

  public async turnOffEditMode(): Promise<void> {
    await this.btnViewProfile.click();
  }

  public async getHeadlineText():Promise<string> {
    return this.textProfHeadline.getText()
  }

  public async getProfSummaryText():Promise<string> {
    return this.textProfSummary.getText()
  }

  public async getHourRateText():Promise<string> {
    return this.textHourRate.getText()
  }

  public async editProfileDescription(professionalHeadline: string, summary: string, hourRate: string):Promise<void> {
    await this.iconEditProfHeadline.click();
    await this.clearAndSetInputValue(this.inputProfHeadline, professionalHeadline);
    await this.btnSaveProfHeadline.click();
    await this.iconEditProfSummary.click();
    await this.clearAndSetInputValue(this.inputProfSummary, summary);
    await this.btnSaveProfSummary.click();
    await this.iconEditHourRate.click();
    await this.clearAndSetInputValue(this.inputHourRate, hourRate);
    await this.btnSaveHourRate.click();
  }

  public async addEducationItem(education): Promise<void> {
    await this.btnAddEducation.click();
    await this.selectorCountry.sendKeys(education.country);
    await this.waitForClickable(this.selectorUniversity);
    await this.selectorUniversity.sendKeys(education.university);
    await this.inputDegree.sendKeys(education.degree);
    await this.selectorStartYear.sendKeys(education.startYear);
    await this.selectorEndYear.sendKeys(education.endYear);
    await this.btnSaveEducation.click();
  }

  public async getEducationDegree():Promise<string> {
    return this.textDegree.getText()
  }

  public async getEducationDetails():Promise<string> {
    return  this.textEducationDetails.getText()
  }
}
