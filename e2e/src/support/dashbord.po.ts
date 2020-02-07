import { $ } from 'protractor';
import {BaseComponent} from "../helper/base.component";

export class DashboardPo extends BaseComponent {
  url = '/dashboard';

  textWelcomeBack = $('.ProfileWidgetHeader-Name fl-text div');
  textUserInitials = $('fl-heading.Username-displayName');
  textUserName = $('fl-heading.Username-userId')
}
