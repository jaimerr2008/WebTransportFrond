import { Component, Input, Output, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import appSettings from '../../config/app-settings';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {

	usuNombre: string;

    @Input() appSidebarTwo;
	@Output() appSidebarEndToggled = new EventEmitter<boolean>();
	@Output() appSidebarMobileToggled = new EventEmitter<boolean>();
	@Output() appSidebarEndMobileToggled = new EventEmitter<boolean>();
	appSettings = appSettings;
	@Output()
	propagar = new EventEmitter<string>();
  toggleAppSidebarMobile() {
		this.appSidebarMobileToggled.emit(true);
  }
  
	toggleAppSidebarEnd() {
		this.appSidebarEndToggled.emit(true);
	}
	
  toggleAppSidebarEndMobile() {
		this.appSidebarEndMobileToggled.emit(true);
  }

	toggleAppTopMenuMobile() {
	  this.appSettings.appTopMenuMobileToggled = !this.appSettings.appTopMenuMobileToggled;
	}

	toggleAppHeaderMegaMenuMobile() {
	  this.appSettings.appHeaderMegaMenuMobileToggled = !this.appSettings.appHeaderMegaMenuMobileToggled;
	}

	ngOnDestroy() {
	  this.appSettings.appTopMenuMobileToggled = false;
	  this.appSettings.appHeaderMegaMenuMobileToggled = false;
	}
	 
  constructor(private renderer: Renderer2) {
	let  token = JSON.parse(localStorage.getItem('token'));
	this.usuNombre = token.usuNombre;
  }
  logout(){
	localStorage.removeItem('token');
	this.propagar.emit('no');
  }
}
