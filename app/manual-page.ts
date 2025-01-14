import { EventData, Page } from '@nativescript/core';
import { ManualViewModel } from './manual-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new ManualViewModel();
}