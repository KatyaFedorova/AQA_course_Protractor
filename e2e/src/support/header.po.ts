import { $ } from "protractor";
import { BaseComponent } from "../helper/base.component";

export class HeaderPo extends BaseComponent {
  buttonUserSettings = $('[fltrackinglabel="UserSettings"] >button');
  linkViewProfile = $('[href*="/u/"]');

  async openUserProfile() {
    await this.buttonUserSettings.click();
    await this.linkViewProfile.click();
  }
}
