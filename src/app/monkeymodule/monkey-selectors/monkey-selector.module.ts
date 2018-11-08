import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { SpeciesSelectorComponent } from './species-selector.component';
import { MonkeyDropdownComponent } from './monkey-dropdown.component';
import { MatCardModule } from '@angular/material/card';
import { HabitatSelectorComponent } from './habitat-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [MonkeyDropdownComponent],
  declarations: [
    SpeciesSelectorComponent,
    HabitatSelectorComponent,
    MonkeyDropdownComponent
  ],
  entryComponents: [SpeciesSelectorComponent, HabitatSelectorComponent]
})
export class MonkeySelectorModule {}
