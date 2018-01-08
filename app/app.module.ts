import './util/rxjs-extensions'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContatosModule } from './contatos/contatos.module';
import { AppRountingModule } from './app-routing.module';
import { HttpModule } from '@angular/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './contatos/in-memory-data.service';
import { DialogService } from './dialog.service';


@NgModule({
    imports: [
        AppRountingModule,
        BrowserModule, 
        ContatosModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}