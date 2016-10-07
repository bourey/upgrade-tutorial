import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroDetail2Component } from './hero_detail2.component';
import { upgradeAdapter } from './upgrade_adapter';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HeroDetail2Component, upgradeAdapter.upgradeNg1Component('heroDetail1') ]
})
export class AppModule {}
