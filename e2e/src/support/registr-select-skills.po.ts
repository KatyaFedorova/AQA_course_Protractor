import {$} from 'protractor';

import { BaseComponent } from '../helper/base.component';

export class RegistrSelectSkillsPo extends BaseComponent {
  linkSkillIT = $('[name="ui-computer-screen"]');
  checkboxMySql = $('fl-skill-select-skill:nth-of-type(6)');
  buttonNext = $('.SkillSelectFooter .btn-plain');
}

