import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from "./app.component";
import { Co2AddComponent } from "./components/co2-add/co2-add.component";
import { EmojiModalComponent } from "./components/co2-add/emoji-modal/emoji-modal.component";
import { Co2ListComponent } from "./components/co2-list/co2-list.component";
import { MaterialModule } from "./material.module";
import { Co2State } from "./state/co2.state";
import { PickerModule } from "@ctrl/ngx-emoji-mart";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([Co2State]),
    MaterialModule,
    PickerModule
  ],
  declarations: [
    AppComponent,
    Co2ListComponent,
    Co2AddComponent,
    EmojiModalComponent
  ],
  entryComponents: [EmojiModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
