import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import {HighlightDirective } from "./highlight.directive";
import { AppRoutingModule }     from './app-routing.module';
import { LaiLaiComponent }   from "./lailai.component";
import{ LoggerService } from "./logger.service";
import{ LangService }from "./lang.service";
import{ Language } from "./language.component"
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    LaiLaiComponent,
    HighlightDirective,
    Language
  ],
  providers: [ HeroService,LoggerService, LangService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
