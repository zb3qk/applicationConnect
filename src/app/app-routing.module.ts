import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },  
  { path: 'directory/:id', loadChildren: './directory/directory.module#DirectoryPageModule' },

//Sends to file page
  // { path: 'details/:type/:id', loadChildren: './details/details.module#DetailsPageModule' }, //Determines type of file and builds page as per the type
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
