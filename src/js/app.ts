import '../styles/styles.scss';
import phoneInput from './components/phone-input/phone-input.component';
import signUpForm from './components/sign-up-form/sign-up-form.component';
import diXlinkHref from './libs/di-xlink-href.js';

var __svg__ = { path: '../icons/**/*.svg', name: '[hash].icons.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

const ngModule = angular.module('app', ['ui.bootstrap']);
signUpForm(ngModule);
phoneInput(ngModule);
diXlinkHref(ngModule);


angular.bootstrap(document.body, ['app'], {strictDi: true});
