import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes , )], // {scrollPositionRestoration : 'enabled'}
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation(), withInMemoryScrolling({scrollPositionRestoration: 'top'}) ), provideClientHydration()]
};
