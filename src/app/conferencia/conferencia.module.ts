import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciaComponent } from './conferencia.component';
import { HttpClientModule } from '@angular/common/http';
import { ConferenciaListComponent } from './conferencia-list/conferencia-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ConferenciaComponent, ConferenciaListComponent],
  exports:[ConferenciaComponent, ConferenciaListComponent]
  
})
export class ConferenciaModule { }
