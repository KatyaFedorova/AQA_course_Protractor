import { $ } from 'protractor';
import {BaseComponent} from "../helper/base.component";

export class DashboardPo extends BaseComponent {
  readonly url: string = '/dashboard';
  textUserInitials = $('fl-heading.Username-displayName');
  textUserName = $('fl-heading.Username-userId')
}
