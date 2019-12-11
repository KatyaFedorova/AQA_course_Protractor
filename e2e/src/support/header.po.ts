import {$} from "protractor";
import {BaseComponent} from "../helper/base.component";

export class HeaderPo extends BaseComponent {

  buttonUserSettings = $('[fltrackinglabel="UserSettings"]');
  linkViewProfile = $('[href*="/u/"]');

  async openUserProfile() {
    await this.click(this.buttonUserSettings);``
    await this.click(this.linkViewProfile);
  }
}
