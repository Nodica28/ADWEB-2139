import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path: 'home', component:HomeComponent, data: { animation: 'isRight' }},
                        {path: 'about', component:AboutComponent, data: { animation: 'isLeft' }},
                        {path: 'skills', component:SkillsComponent, data: { animation: 'isRight' }},
                        {path: 'portfolio', component:PortfolioComponent, data: { animation: 'isLeft' }},
                        {path: 'contact', component:ContactComponent, data: { animation: 'isRight' }},
                        {path: '', component:HomeComponent, data: { animation: 'isLeft' }},
                        {path: '**', component:PagenotfoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
