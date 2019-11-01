import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { BackendComponent } from './backend.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BMaterialModule } from './b-material/b-material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../shared/auth.guard';

@NgModule({
  declarations: [
    BackendComponent,
 
    SidebarComponent,
    DashboardComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    BackendRoutingModule,
    BMaterialModule,
  ],
  providers: [AuthGuard],

})
export class BackendModule { }
