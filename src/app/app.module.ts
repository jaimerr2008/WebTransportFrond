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
/*import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { GridEmpleadoComponent } from './pages/grid-empleado/grid-empleado.component';
import { ParametroNominaComponent } from './pages/parametro-nomina/parametro-nomina.component';
import { BancoComponent } from './pages/banco/banco.component';
import { CajaCompensacionComponent } from './pages/caja-compensacion/caja-compensacion.component';
import { FondoPensionComponent } from './pages/fondo-pension/fondo-pension.component';
import { EpsComponent } from './pages/eps/eps.component';
import { ArlComponent } from './pages/arl/arl.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { AreaComponent } from './pages/area/area.component';
import { ContratoComponent } from './pages/contrato/contrato.component';
import { MaestroDescuentoComponent } from './pages/maestro-descuento/maestro-descuento.component';
import { MaestroDevengoComponent } from './pages/maestro-devengo/maestro-devengo.component';
import { AplicarDevengoComponent } from './pages/aplicar-devengo/aplicar-devengo.component';
import { AplicarDescuentoComponent } from './pages/aplicar-descuento/aplicar-descuento.component';
import { GridEpsComponent } from './pages/grid-eps/grid-eps.component';
import { GridBancoComponent } from './pages/grid-banco/grid-banco.component';
import { GridCajaCompComponent } from './pages/grid-caja-comp/grid-caja-comp.component';
import { GridFondoPensionComponent } from './pages/grid-fondo-pension/grid-fondo-pension.component';
import { GridArlComponent } from './pages/grid-arl/grid-arl.component';
import { GridContratoComponent } from './pages/grid-contrato/grid-contrato.component';
import { GridEmpresaComponent } from './pages/grid-empresa/grid-empresa.component';
import { GridMDescuentoComponent } from './pages/grid-m-descuento/grid-m-descuento.component';
import { GridMDevendoComponent } from './pages/grid-m-devendo/grid-m-devendo.component';
import { GridADevendoComponent } from './pages/grid-a-devendo/grid-a-devendo.component';
import { GridADescuentoComponent } from './pages/grid-a-descuento/grid-a-descuento.component';
import { NovedadGestionHumanaComponent } from './pages/novedad-gestion-humana/novedad-gestion-humana.component';
import { GridGestionHumanaComponent } from './pages/grid-gestion-humana/grid-gestion-humana.component';
import { UsuarioService } from './services/usuario.service';
import { LineasComponent } from './pages/lineas/lineas.component';
import { GridAreaComponent } from './pages/grid-area/grid-area.component';
import { SublineasComponent } from './pages/sublineas/sublineas.component';
import { ProvedoresComponent } from './pages/provedores/provedores.component';
import { UnidadMedidaComponent } from './pages/unidad-medida/unidad-medida.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { MFormaPagoEComponent } from './pages/m-forma-pago-e/m-forma-pago-e.component';
import { MEgresoComponent } from './pages/m-egreso/m-egreso.component';
import { RequisicionComponent } from './pages/requisicion/requisicion.component';
import { CajaTesoreriaComponent } from './pages/caja-tesoreria/caja-tesoreria.component';
import { AprovisionamientoCajaTesoreriaComponent } from './pages/aprovisionamiento-caja-tesoreria/aprovisionamiento-caja-tesoreria.component';
import { EgresoComponent } from './pages/egreso/egreso.component';
import { RevisionRequisicionComponent } from './pages/revision-requisicion/revision-requisicion.component';
import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { PresentacionesComponent } from './pages/presentaciones/presentaciones.component';
import { ListaPreciosComponent } from './pages/lista-precios/lista-precios.component';*/
 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarRightComponent,
    TopMenuComponent,
    PanelComponent,
    FloatSubMenuComponent,
    ThemePanelComponent,loginComponents/*
    HomePage,loginComponents,
    EmpleadoComponent,
    GridEmpleadoComponent,
    ParametroNominaComponent,
    BancoComponent,
    CajaCompensacionComponent,
    FondoPensionComponent,
    EpsComponent,
    ArlComponent,
    EmpresaComponent,
    AreaComponent,
    ContratoComponent,
    MaestroDescuentoComponent,
    MaestroDevengoComponent,
    AplicarDevengoComponent,
    AplicarDescuentoComponent,
    GridEpsComponent,
    GridBancoComponent,
    GridCajaCompComponent,
    GridFondoPensionComponent,
    GridArlComponent,
    GridContratoComponent,
    GridEmpresaComponent,
    GridMDescuentoComponent,
    GridMDevendoComponent,
    GridADevendoComponent,
    GridADescuentoComponent,
    NovedadGestionHumanaComponent,
    GridGestionHumanaComponent,
    LineasComponent,
    GridAreaComponent,
    SublineasComponent,
    ProvedoresComponent,
    UnidadMedidaComponent,
    ProductosComponent,
    MFormaPagoEComponent,
    MEgresoComponent,
    RequisicionComponent,
    CajaTesoreriaComponent,
    AprovisionamientoCajaTesoreriaComponent,
    EgresoComponent,
    RevisionRequisicionComponent,
    BodegasComponent,
    PresentacionesComponent,
  ListaPreciosComponent*/],
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
        var title = 'InvsystemCloud| ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
      }
    });
  }
}
