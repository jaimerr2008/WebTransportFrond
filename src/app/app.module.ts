// Core Module
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule }               from '@angular/platform-browser/animations';
import { BrowserModule, Title }                  from '@angular/platform-browser';
import { AppRoutingModule }                      from './app-routing.module';
import { NgbModule }                             from '@ng-bootstrap/ng-bootstrap';
import { NgModule }                              from '@angular/core';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import * as global                               from './config/globals';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// Main Component
import { AppComponent }                    from './app.component';
import { HeaderComponent }                 from './components/header/header.component';
import { SidebarComponent }                from './components/sidebar/sidebar.component';
import { SidebarRightComponent }           from './components/sidebar-right/sidebar-right.component';
import { TopMenuComponent }                from './components/top-menu/top-menu.component';
import { PanelComponent }                  from './components/panel/panel.component';
import { FloatSubMenuComponent }           from './components/float-sub-menu/float-sub-menu.component';
import { ThemePanelComponent }             from './components/theme-panel/theme-panel.component';

// Component Module

import { NgxDaterangepickerMd }            from 'ngx-daterangepicker-material';
import { CalendarModule, DateAdapter }     from 'angular-calendar';
import { adapterFactory }                  from 'angular-calendar/date-adapters/date-fns';
import { TrendModule }                     from 'ngx-trend';
//import { NgChartjsModule }                 from 'ng-chartjs';
import { SweetAlert2Module }               from '@sweetalert2/ngx-sweetalert2';
import { NgxMasonryModule }                from 'ngx-masonry';
import { CountdownModule }                 from 'ngx-countdown';
import { LoadingBarRouterModule }          from '@ngx-loading-bar/router';
import { NgxEditorModule }                 from 'ngx-editor';
import { ColorSketchModule }               from 'ngx-color/sketch';
import { FullCalendarModule }              from '@fullcalendar/angular';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { PerfectScrollbarModule }          from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG }        from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Pages

import { loginComponents } from './pages/login/login.components';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DriverComponent } from './pages/driver/driver.component';

 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    PanelComponent,
    FloatSubMenuComponent,
    ThemePanelComponent,loginComponents,DriverComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    PerfectScrollbarModule,
    HighlightModule,
    FullCalendarModule,
    NgxEditorModule,
    ColorSketchModule, 
    LoadingBarRouterModule,
    NgxMasonryModule,
    CountdownModule,
    NgxDatatableModule,
    SweetAlert2Module.forRoot(),
   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //NgChartjsModule,
    TrendModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [ Title, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },/*UsuarioService*/, {
		provide: HIGHLIGHT_OPTIONS,
		useValue: {
			coreLibraryLoader: () => import('highlight.js/lib/core'),
			lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
			languages: {
				typescript: () => import('highlight.js/lib/languages/typescript'),
				css: () => import('highlight.js/lib/languages/css'),
				xml: () => import('highlight.js/lib/languages/xml')
			}
		}
	}],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        var title = 'WebTransport| ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
      }
    });
  }
}
