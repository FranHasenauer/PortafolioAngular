import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome/fontawesome.module";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FooterComponent } from "./footer.component";


@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
      CommonModule,
      FontAwesomeModule
    ]
  })
  export class MiInformacionModule { 
    faMapLocation = faMapLocation;
  }
