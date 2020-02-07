import {$} from "protractor";
import {BaseComponent} from "../helper/base.component";

export class HeaderPo extends BaseComponent {

  buttonUserSettings = $('[fltrackinglabel="UserSettings"] >button');
  linkViewProfile = $('[href*="/u/"]');
  textUserInitials = $('fl-text.Username-displayName');
  textUserName = $('fl-text.Username-userId');

  async openUserProfile() {
    await this.click(this.buttonUserSettings);
    await this.click(this.linkViewProfile);
  }
}
