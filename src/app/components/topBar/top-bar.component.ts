/**
 * Created by anhle on 10/14/17.
 */
import {Component} from "@angular/core";
import {RobinhoodService} from "../../services/RobinhoodService";
import {Constant} from "../../model/constant";

@Component({
    selector: 'top-bar',
    templateUrl : './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})


export class TopBarComponent {

    public searchText = "";
    isSearch:boolean = false;
    searchResult:any;
    instrument = Constant.INSTRUMENT;

    accountSummary = [
        {   name:"porfolio value",
            value : 0
        },
        {   name: "today profit",
            value: 0,
            gain: ""
        },
        {
            name: "buying power",
            value: 0
        }
    ];

    constructor(public rb:RobinhoodService){

    }

    loadSearchSuggestions(searchText){
        if(searchText !== ""){
            this.isSearch = true;
            this.rb.queryStock(searchText).then(res=>{
                this.searchResult = res.results;
            })
        } else {
            this.isSearch = false;
            this.searchResult = null;
        }

    }

    isSearchNotFound(){
        return this.isSearch && (this.searchResult == null || this.searchResult.length === 0);
    }

    addStockToWatchList(stock){}

    getPortfolioDisplay(){
      if(this.rb.account.information== null || this.rb.account.information.portfolio == null){
        return this.accountSummary;
      }else{
        return(
          [
            {
              name: "portfolio value",
              value : this.rb.account.information.portfolio.equity || 0
            },
            {   name: "today profit",
              value: this.rb.account.information.getMonetaryProfit() || 0,
              gain: this.rb.account.information.isGain()
            },
            {
              name: "buying power",
              value: this.rb.account.information.buying_power || 0
            }
          ]
        );
      }

    }


}
