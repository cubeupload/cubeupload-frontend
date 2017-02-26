import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { accountRouting } from './account.routing';

@NgModule({
  imports: [
    CommonModule,
    accountRouting
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }