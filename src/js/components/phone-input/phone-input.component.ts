export default function(ngModule: ng.IModule) {

  ngModule.component('phoneInput', {
    controllerAs: 'ctrl',
    template: require('./template.jade'),
    controller: PhoneInputCtrl
  })
}

interface CountryDescriptor {
  icon: string;
  code: string;
}

const COUNTRIES: CountryDescriptor[] = [
  {icon: 'flag-rus', code: '+7'},
  {icon: 'flag-uk', code: '+4'},
];

class PhoneInputCtrl {
  isListOpened = false;

  countries = COUNTRIES;
  code: string;
  icon: string;

  $onInit() {
    this.setCountry(this.countries[0]);
  }

  setCountry(country: CountryDescriptor) {
    this.code = country.code;
    this.icon = country.icon;
  }

  toggleList() {
    this.isListOpened = !this.isListOpened;
  }
}
