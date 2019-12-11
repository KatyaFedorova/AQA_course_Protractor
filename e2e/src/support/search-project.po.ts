import {$} from 'protractor';
import { BaseComponent } from '../helper/base.component';

export class SearchProjectPo extends BaseComponent {
  url = '/search/projects';

  textUserInitials = $('fl-text.Username-displayName');
  textUserName = $('fl-text.Username-userId');
}
