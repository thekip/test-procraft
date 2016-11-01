export default function(ngModule: ng.IModule) {

  ngModule.component('signUpForm', {
    controllerAs: 'ctrl',
    template: require('./template.jade'),
    controller: SignUpFormController
  })
}

const PROFESSIONS = [
  'Парикмахер',
  'Парикхмахер-Визажист',
  'Стлист',
  'Водитель',
  'Грузчик',
  'Повар',
  'Менеджер',
  'Водитель-грузчик'
];

class SignUpFormController {
  professions = PROFESSIONS;
}
