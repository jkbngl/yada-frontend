import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { DownloadComponent } from './download/download.component';

import { FileSaverModule } from 'ngx-filesaver';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';



@NgModule({
    declarations: [
        AppComponent,
        DownloadComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        HttpClientModule,
        FileSaverModule,
        MessagesModule,
        MessageModule,
        ProgressSpinnerModule,
        ToastModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
