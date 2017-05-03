import {NgModule} from '@angular/core';
import {BootstrapComponent} from './bootstrap.component';
import {RouterModule} from '@angular/router';
import {SlidesRoutes} from '../../presentation/slide-routes';

import {ExerciseModule} from '../../exercise/exercise.module';
import {PresentationModule} from '../../presentation/presentation.module';
import {FeedbackModule} from '../../feedback/feedback.module';
import {CommonModule} from '@angular/common';
import {BrowserWindowModule} from '../../browser-window/browser-window.module';
import {ClosingSlideComponent} from '../../presentation/closing-slide/closing-slide.component';


const routes = RouterModule.forChild(
  SlidesRoutes.get(BootstrapComponent)
);

@NgModule({
  imports: [routes, PresentationModule, ExerciseModule, BrowserWindowModule, FeedbackModule, CommonModule],
  declarations: [BootstrapComponent, ClosingSlideComponent],
  exports: [BootstrapComponent]
})
export class BootstrapModule {

}
