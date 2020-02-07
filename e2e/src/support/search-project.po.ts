import {$} from 'protractor';
import { BaseComponent } from '../helper/base.component';

export class SearchProjectPo extends BaseComponent {
  url = '/search/projects';

  textUserName = $('fl-text.Username-displayName');
  textUserId = $('fl-text.Username-userId');
}
