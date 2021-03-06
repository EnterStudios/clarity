/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";
import {
    ClrHeader,
    ClrNavLevel,
    ClrVerticalNav,
    ClrVerticalNavGroup,
    ClrVerticalNavGroupChildren,
    ClrVerticalNavIcon,
    ClrVerticalNavLink,
    Header,
    NavLevelDirective,
    VerticalNav,
    VerticalNavGroup,
    VerticalNavGroupChildren,
    VerticalNavIcon,
    VerticalNavLink
} from "@clr/angular";

import {VerticalNavCases} from "./vertical-nav-cases";

@Component({templateUrl: "./vertical-nav.component.html", providers: [VerticalNavCases]})
export class KSVerticalNav {
    /**
     * @description
     * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
     * This is a catchall for navigation entities.
     */
    private aHeader: Header;
    private aClrHeader: ClrHeader;
    private aNavLevelDirective: NavLevelDirective;
    private aClrNavLevel: ClrNavLevel;
    private aVerticalNav: VerticalNav;
    private aClrVerticalNav: ClrVerticalNav;
    private aVerticalNavGroup: VerticalNavGroup;
    private aClrVerticalNavGroup: ClrVerticalNavGroup;
    private aVerticalNavGroupChildren: VerticalNavGroupChildren;
    private aClrVerticalNavGroupChildren: ClrVerticalNavGroupChildren;
    private aVerticalNavIcon: VerticalNavIcon;
    private aClrVerticalNavIcon: ClrVerticalNavIcon;
    private aVerticalNavLink: VerticalNavLink;
    private aClrVerticalNavLink: ClrVerticalNavLink;

    option: string = "link";

    case: any;

    groupExpand: boolean = true;

    updateGroupExpand(event: any) {
        this.groupExpand = event;
    }

    navCollapsed: boolean = false;

    updateNavCollapsed(val: boolean): void {
        this.navCollapsed = val;
    }

    toggleNav(): void {
        this.navCollapsed = !this.navCollapsed;
    }

    toggleGroup(): void {
        this.groupExpand = !this.groupExpand;
    }

    constructor(public verticalNavCases: VerticalNavCases) {
        this.case = this.verticalNavCases.allNestedIconMenu;
    }
}
