import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { DataFormEventData } from "nativescript-pro-ui/dataform";

import { Harvest } from "../shared/harvest.model";
import { HarvestService } from "../shared/harvest.service";
import { MetrcService } from "../../shared/metrc.service";

import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Image } from 'tns-core-modules/ui/image';
import { screen } from 'platform';
import { View } from 'tns-core-modules/ui/core/view';
import { Page } from "ui/page";


/* ***********************************************************
* This is the harvest details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data harvest by this parameter and displays the detailed data harvest information.
*************************************************************/
@Component({
    selector: "HarvestDetail",
    moduleId: module.id,
    templateUrl: "./harvest-detail.component.html"
})
export class HarvestDetailComponent implements OnInit {
    private _harvest: Harvest;

    constructor(
        private _metrcService: MetrcService,
        private _harvestService: HarvestService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data harvest id parameter passed through navigation.
    * Get the data harvest details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    ngOnInit(): void {
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .switchMap((activatedRoute) => activatedRoute.params)
            .forEach((params) => {
                const harvestId = params.id;

                //this._harvest = this._harvestService.getHarvestById(harvestId);
                this._metrcService.getHarvests()
                    .subscribe((harvests: Array<any>) => {
                        this._harvest = new Harvest(harvests.find(harvest => harvest.Id == harvestId));
                    });
            });
    }

    onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View, fabView: View) {
        // If the header content is still visiible
        if (scrollView.verticalOffset < 200) {
            const offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect.
                topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
                fabView.animate({ translate: { x: 0, y: -1 * offset } }).then(() => { }, () => { });
                fabView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
            } else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
                fabView.translateY = Math.floor(-1 * offset);
                fabView.translateX = Math.floor(offset);
            }
        }
    }

    get harvest(): Harvest {
        return this._harvest;
    }

    /* ***********************************************************
    * The back button is essential for a master-detail feature.
    *************************************************************/
    onBackButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }

    /* ***********************************************************
    * The master-detail template comes with an example of an harvest edit page.
    * Check out the edit page in the /harvests/harvest-detail-edit folder.
    *************************************************************/
    onEditButtonTap(): void {
        this._routerExtensions.navigate(["/harvests/harvest-detail-edit", this._harvest.Id],
            {
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
