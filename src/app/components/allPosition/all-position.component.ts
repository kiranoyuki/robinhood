/**
 * Created by anhle on 8/5/17.
 */
import {Component, OnInit} from "@angular/core";
import {PositionList, PortfolioSummary} from "../../mock";
import {RobinhoodDataService} from "../../services/RobinhoodDataService";

@Component({
    selector: 'all-position',
    templateUrl : './all-position.component.html',
    styleUrls: ['all-position.component.scss'],

})


export class AllPositionComponent{

    positionList:any[] = [];
    portfolioSummary:any[] = [];

    constructor(robinhoodService:RobinhoodDataService){
        this.positionList = PositionList;

        this.portfolioSummary = PortfolioSummary;
    }
}
