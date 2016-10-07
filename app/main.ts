import { upgradeAdapter } from './upgrade_adapter';
import { heroApp } from './app1.module';

upgradeAdapter.bootstrap(document.body, [heroApp.name], {strictDi: true});
