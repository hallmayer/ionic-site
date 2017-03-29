/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './app-root';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../nav/overlay-portal.ngfactory';
import * as import16 from '../../util/click-block.ngfactory';
export declare class Wrapper_IonicApp {
    _eventHandler: Function;
    context: import0.IonicApp;
    _changed: boolean;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any);
    ngOnDetach(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import1.AppView<any>, componentView: import1.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import1.AppView<any>, _eventHandler: any): void;
}
export declare const IonicAppNgFactory: import7.ComponentFactory<import0.IonicApp>;
export declare class View_IonicApp0 extends import1.AppView<import0.IonicApp> {
    _viewQuery_viewport_0: import13.QueryList<any>;
    _viewQuery_modalPortal_1: import13.QueryList<any>;
    _viewQuery_overlayPortal_2: import13.QueryList<any>;
    _viewQuery_loadingPortal_3: import13.QueryList<any>;
    _viewQuery_toastPortal_4: import13.QueryList<any>;
    _el_0: any;
    _vc_0: import14.ViewContainer;
    _el_1: any;
    _vc_1: import14.ViewContainer;
    _OverlayPortal_1_5: import15.Wrapper_OverlayPortal;
    _el_2: any;
    _vc_2: import14.ViewContainer;
    _OverlayPortal_2_5: import15.Wrapper_OverlayPortal;
    _el_3: any;
    _vc_3: import14.ViewContainer;
    _OverlayPortal_3_5: import15.Wrapper_OverlayPortal;
    _el_4: any;
    _vc_4: import14.ViewContainer;
    _OverlayPortal_4_5: import15.Wrapper_OverlayPortal;
    _el_5: any;
    _ClickBlock_5_3: import16.Wrapper_ClickBlock;
    constructor(viewUtils: import3.ViewUtils, parentView: import1.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
}