import {$} from "protractor";
import {BaseComponent} from "../helper/base.component";

export class HeaderPo extends BaseComponent {

  iconUserSubDetails = $('.UserCard .UserCard-subDetails');
  linkViewProfile = $('[href*="/u/"]');

  async openUserProfile() {
    await this.iconUserSubDetails.click();
    await this.linkViewProfile.click();
  }
}
