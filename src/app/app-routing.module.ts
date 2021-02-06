import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
    { path: '', component: DownloadComponent },
    { path: 'download', component: DownloadComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
