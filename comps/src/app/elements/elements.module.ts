import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';


@NgModule({
  declarations: [],
  imports: [CommonModule,ElementsRoutingModule,ElementHomeComponent]
})
export class ElementsModule { }
