import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { DownloaderService } from '../downloader.service';
import { saveAs } from "file-saver";
import { MessageService } from 'primeng/api';
interface Format {
    name: string;
    key: string;
}

@Component({
    selector: 'app-download',
    templateUrl: './download.component.html',
    styleUrls: ['./download.component.css'],
    providers: [MessageService]
})
export class DownloadComponent implements OnInit {

    formats: Format[];
    selectedFormat: Format;
    downLoadUrl: string;
    link: string;
    isDownLoading: boolean = false


    constructor(private downloaderService: DownloaderService
        , private sanitazion: DomSanitizer
        , private messageService: MessageService
    ) {

        this.formats = [
            { name: 'Video', key: 'video' },
            { name: 'Audio', key: 'audio' },
        ];
    }
    ngOnInit(): void {
        this.selectedFormat = this.formats[0];

        //this.downLoadUrl = 'https://yada-api.herokuapp.com/download?'
        this.downLoadUrl = 'http://192.168.178.38:8000/download?'
    }

    setDownloadMode() {
        this.isDownLoading = !this.isDownLoading;
    }


    onSuc(data) {
        console.log("SUCCESS");

        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Video heruntergeladen' });
    }

    onErr(data) {
        console.log(`ERROR downloading in format ${JSON.stringify(this.selectedFormat)}`);

        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Fehler beim herunterladen des Videos' });
    }
}
