import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ResortdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  URL(){
    this.navCtrl.push("https://www.yelp.com/biz/din-tai-fung-los-angeles?adjust_creative=2tfPBfgAkNazbrqMZ6TISQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=2tfPBfgAkNazbrqMZ6TISQ");
  }
  
  onClick():void{
    this.navCtrl.push('https://www.yelp.com/biz/din-tai-fung-los-angeles?adjust_creative=2tfPBfgAkNazbrqMZ6TISQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=2tfPBfgAkNazbrqMZ6TISQ');
  }
  ionViewDidLoad(){
    this.getActivitiesList()
      .subscribe(data => 
        {
         this.activitiesList = data
         console.log('activity',this.activitiesList)
        });
  };

}