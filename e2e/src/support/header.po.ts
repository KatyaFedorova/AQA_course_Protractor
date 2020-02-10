import { $ } from "protractor";
import { BaseComponent } from "../helper/base.component";

export class HeaderPo extends BaseComponent {
  readonly buttonUserSettings = $('[fltrackinglabel="UserSettings"] >button');
  readonly linkViewProfile = $('[href*="/u/"]');

  async openUserProfile() {
    await this.buttonUserSettings.click();
    await this.linkViewProfile.click();
  }
}
