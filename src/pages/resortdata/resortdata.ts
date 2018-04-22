import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-resortdata',
  templateUrl: 'resortdata.html',
})
export class ResortdataPage {

  yelpApiKey = 'OlHPqkMUaTVlioS3xXhYDdYVX73MGVo_x7j2zUUvjstTKt09dCjaXjLRyH6z1-NrZE2gXH5agXMcwwMY_tGEC2g5brR_12cnJ4x17Eb7g8edduGIuidFASevqcHPWnYx';

  activitiesList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.yelpApiKey}`
    })
  };

  getActivitiesList() {
    return this.http.get(`/businesses/search?location=westwood blvd&term=food`, this.httpOptions)
      .map((val: any) => {
        return val.businesses;
      });
  }

  ionViewDidLoad(){
    this.getActivitiesList()
      .subscribe(data =>
        {
         this.activitiesList = data
        });
  };

}
