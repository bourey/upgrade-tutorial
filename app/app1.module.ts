import { HeroDetail2Component } from './hero_detail2.component';
import { upgradeAdapter } from './upgrade_adapter';
import { heroDetail1 } from './hero_detail1.component';

export const heroApp = angular.module('heroApp', []);

class MainCtrl {
    message: string = 'hello';
}

heroApp.controller('MainCtrl', MainCtrl);

heroApp.directive('heroDetail2', upgradeAdapter.downgradeNg2Component(HeroDetail2Component) as ng.Injectable<ng.IDirectiveFactory>);

heroApp.directive('heroDetail1', heroDetail1);
