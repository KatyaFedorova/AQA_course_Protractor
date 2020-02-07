import {$} from 'protractor';
import { BaseComponent } from '../helper/base.component';

export class RegistrCompleteProfilePo extends BaseComponent {
  buttonNext = $('button.CompleteProfile-nextStepButton');
  inputFirstName = $('input.CompleteProfile-form-input-left');
  inputLastName = $('input.CompleteProfile-form-input-right');
  buttonLevelBeginner = $('fl-experience-level:nth-of-type(1)');
}

