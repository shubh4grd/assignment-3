import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceHeroComponent } from './components/service-hero/service-hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { CompanyHistoryComponent } from './components/company-history/company-history.component';
import { FeaturesIconComponent } from './components/features-icon/features-icon.component';
import { GradationProcessComponent } from './components/gradation-process/gradation-process.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { ServiceProjectsComponent } from './components/service-projects/service-projects.component';
import { PricingTableComponent } from './components/pricing-table/pricing-table.component';
import { ServiceProjects2Component } from './components/service-projects2/service-projects2.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrandLogoSliderComponent } from './components/brand-logo-slider/brand-logo-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { MobileMenuOverlayComponent } from './components/mobile-menu-overlay/mobile-menu-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    PreLoaderComponent,
    HeaderComponent,
    ServiceHeroComponent,
    FeaturesComponent,
    CompanyHistoryComponent,
    FeaturesIconComponent,
    GradationProcessComponent,
    CallToActionComponent,
    ServiceProjectsComponent,
    PricingTableComponent,
    ServiceProjects2Component,
    ContactUsComponent,
    BrandLogoSliderComponent,
    FooterComponent,
    ScrollTopComponent,
    MobileMenuOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
