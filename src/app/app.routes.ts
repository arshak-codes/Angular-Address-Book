import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddToContactsComponent } from './addtocontacts/addtocontacts.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'addtocontacts',component:AddToContactsComponent},
{path:'addressbook',component:AddressbookComponent},
{path:'',redirectTo:'/dashboard',pathMatch:'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
