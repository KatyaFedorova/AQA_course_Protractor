import { $ } from 'protractor';
import {BaseComponent} from "../helper/base.component";

export class DashboardPo extends BaseComponent {
  readonly url = '/dashboard';

  readonly textWelcomeBack = $('.ProfileWidgetHeader-Name fl-text div');
  readonly textUserInitials = $('fl-heading.Username-displayName');
  readonly textUserName = $('fl-heading.Username-userId')
}
