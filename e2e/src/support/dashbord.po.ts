import { $ } from 'protractor';

export class DashboardPo {
  textUserInitials = $('fl-heading.Username-displayName');
  textUserName = $('fl-heading.Username-userId')
}
