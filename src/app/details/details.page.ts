declare var hljs: any;

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';

import { GetDisplayService } from '../services/get-display.service';

import { StatusBar } from '@ionic-native/status-bar/ngx';

import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

export interface data {
  html: string;
  file_id: number;
  file_name:string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  // https://ionicacademy.com/ionic-4-image-gallery-zoom/

  doot: data = {
    'file_id':0,
    'file_name': '',
    'html': "",
  };
	id = 0;
  type = "";
  htmlStr: string = '';

  constructor(private route: ActivatedRoute, private getDisplayService: GetDisplayService, 
    private statusBar: StatusBar, private photoViewer: PhotoViewer) { }
  //private photoViewer: PhotoViewer

  //private transfer: FileTransfer, private file: File

  ngOnInit() {

    this.statusBar.overlaysWebView(false);
  	this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id 
      this.id = params['id'];
      this.type = "image";
      this.getDisplayService.getDisplay(this.id).subscribe((res:data) => {
        this.doot = res;
      });
    });
    console.log("displaying...");
    // this.getDisplayService.getDisplay(this.id).subscribe((res:data) => {
    //   console.log(res);
    //   this.doot = res;
    // });

    // this.photoViewer.show('https://tischlibrary.tufts.edu/sites/default/files/creating_links1.png');
  }

  showImage(){
    var url = "https://images.unsplash.com/photo-1548022401-6b11ed578cc7?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9%22";
    console.log("Entering Image View...");
    this.photoViewer.show(url);
  }

  highlightCode(){
    // console.log("highlightCode");
    var aCodes = document.getElementsByTagName('pre');
    for (var i=0; i < aCodes.length; i++) {
      hljs.highlightBlock(aCodes[i]);
    }
  }

  ngAfterContentInit() {
    // viewChild is set after the view has been initialized
   this.highlightCode();
  }

  download(){
  	// const fileTransfer: FileTransferObject = this.transfer.create();
  	// fileTransfer.download("http://192.168.1.167:8000/request/"+this.id, this.file.externalRootDirectory + "boop");
  }

  ngOnDestroy() {
    // this.routeSub.unsubscribe();
  }

}
