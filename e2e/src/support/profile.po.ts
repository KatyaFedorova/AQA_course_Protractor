import {$, $$} from "protractor";
import {BaseComponent} from "../helper/base.component";

export class ProfilePo extends BaseComponent {
  pageUrl = '/u/';

  userName = $('.profile-username-wrapper .profile-intro-username');
  btnEdit = $('.btn-edit-trigger .Button-icon');
  btnViewProfile = $('.btn-edit-trigger .fl-icon-user');
  textProfHeadline = $('.profile-user-byline span:not(.ng-hide)');
  textDescription = $('span.profile-about-description:not(.ng-hide)');
  textHourRate = $('.hourly-rate-value .hourly-rate-input');

  btnAddEducation = $('[fl-inline-edit-education] .profile-experience-add-btn');
  selectorCountry = $('[name= "country"]');
  selectorUniversity = $('[name="school"]');
  inputDegree = $('[name= "degree"]');
  textDegree = $('[fl-inline-edit-education] .profile-experience-title');
  selectorStartYear = $('[name= "startYear"]');
  selectorEndYear = $('[name= "endYear"]');
  btnSaveEducation = $('[fl-inline-edit-education] [type= "submit"]');

  educationSchoolName = $('.profile-experience-byline > span:nth-of-type(1)');
  educationDate = $('.profile-experience-date');
  educationItem = $$('.profile-experience-item');
  nickname = $('.profile-user-name');

  async addEducationItem(educationData: any) {
    await this.click(this.btnEdit);
    await this.click(this.btnAddEducation);
    await this.select(this.selectorCountry, educationData.country);
    await this.select(this.selectorUniversity, educationData.university);
    await this.sendKeys(this.inputDegree, educationData.degree);
    await this.select(this.selectorStartYear, educationData.startYear);
    await this.select(this.selectorEndYear, educationData.endYear);
    await this.click(this.btnSaveEducation);
    await this.click(this.btnViewProfile);
  }

  getEducationDateString(educationData: any) {
    const educationDuration = +educationData.endYear - +educationData.startYear;
    return `${educationData.startYear} - ${educationData.endYear} (${educationDuration}`;
  }

  getEducationDurationPeriodName(yearsCount: number): string {
    if (yearsCount > 1) {
      return 'years';
    } else {
      return 'year';
    }
  }

  async removeEducationItems() {
    await this.click(this.btnEdit);
    const itemsCount = await this.educationItem.count();
    if (itemsCount > 0) {
      await this.educationItem.each(async (item) => {
        await item.$('.flicon-delete').click();
      });
    }
    await this.click(this.btnViewProfile);
  }
}
