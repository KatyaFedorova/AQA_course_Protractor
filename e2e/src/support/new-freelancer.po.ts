import {$} from 'protractor';

export class NewFreelancerPo {
  linkSkillIT = $('[name="ui-computer-screen"]');
  checkboxMySql = $('fl-skill-select-skill:nth-of-type(6)');
  buttonNext = $('.SkillSelectFooter .btn-plain');
  inputFirstName = $('input.CompleteProfile-form-input-left');
  inputLastName = $('input.CompleteProfile-form-input-right');
  buttonLevelBeginner = $('fl-experience-level:nth-of-type(1)');
}
