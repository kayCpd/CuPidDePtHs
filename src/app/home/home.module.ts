import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
// import {  ComingSoonPageModule } from '../coming-soon/coming-soon.module';

// import { CV1PageModule } from '../ProsePages/cv1/cv1.module';
// import { TSSL2PageModule } from '../ProsePages/tssl2/tssl2.module';
// import { Lg3PageModule } from '../ProsePages/lg3/lg3.module';
// import { Mt4PageModule } from '../ProsePages/mt4/mt4.module';
// import { Lbtm5PageModule } from '../ProsePages/lbtm5/lbtm5.module';

// import { Tsmop6PageModule } from '../ProsePages/tsmop6/tsmop6.module';
// import { Df7PageModule } from '../ProsePages/df7/df7.module';
// import { Mm8PageModule } from '../ProsePages/mm8/mm8.module';
// import { Tcoe9PageModule } from '../ProsePages/tcoe9/tcoe9.module';
// import { Hlmf10PageModule } from '../ProsePages/hlmf10/hlmf10.module';

// import { Azd11PageModule } from '../ProsePages/azd11/azd11.module';
// import { Trs12PageModule } from '../ProsePages/trs12/trs12.module';
// import { Gat13PageModule } from '../ProsePages/gat13/gat13.module';
// import { Aokol14PageModule } from '../ProsePages/aokol14/aokol14.module';
// import { Tab15PageModule } from '../ProsePages/tab15/tab15.module';

// import { Cttw16PageModule } from '../ProsePages/cttw16/cttw16.module';
// import { Pm17PageModule } from '../ProsePages/pm17/pm17.module';
// import { Err18PageModule } from '../ProsePages/err18/err18.module';
// import { Wy19PageModule } from '../ProsePages/wy19/wy19.module';
// import { Abcog20PageModule} from '../ProsePages/abcog20/abcog20.module';

// import {Br21PageModule} from '../ProsePages/br21/br21.module';
// import {Tld22PageModule} from '../ProsePages/tld22/tld22.module';
// import {Dmol23PageModule} from '../ProsePages/dmol23/dmol23.module';
// import {Otj24PageModule} from '../ProsePages/otj24/otj24.module';
// import {Wdog25PageModule} from '../ProsePages/wdog25/wdog25.module';
// import {Cc26PageModule} from '../ProsePages/cc26/cc26.module';

// import {Tm27PageModule} from '../ProsePages/tm27/tm27.module';
// import {Tfahm28PageModule} from '../ProsePages/tfahm28/tfahm28.module';
// import {Abs29PageModule} from '../ProsePages/abs29/abs29.module';
// import {As30PageModule} from '../ProsePages/as30/as30.module';
// import {Mll31PageModule }from '../ProsePages/mll31/mll31.module';
// import {Wld32PageModule} from '../ProsePages/wld32/wld32.module';
// import {Hgb33PageModule} from '../ProsePages/hgb33/hgb33.module';
// import {Ittoae34PageModule} from '../ProsePages/ittoae34/ittoae34.module';
// import {Jgs35PageModule} from '../ProsePages/jgs35/jgs35.module';
// import {Adoj36PageModule} from '../ProsePages/adoj36/adoj36.module';
// import {Tpod37PageModule} from '../ProsePages/tpod37/tpod37.module';
// import {Tr38PageModule} from '../ProsePages/tr38/tr38.module';
// import {Ts39PageModule} from '../ProsePages/ts39/ts39.module';

// import {Wd40PageModule} from '../ProsePages/wd40/wd40.module';
// import {Rol41PageModule} from '../ProsePages/rol41/rol41.module';
// import {Or42PageModule} from '../ProsePages/or42/or42.module';
// import {Sm43PageModule} from '../ProsePages/sm43/sm43.module';
// import {Puys44PageModule} from '../ProsePages/puys44/puys44.module';
// import {Et45PageModule} from '../ProsePages/et45/et45.module';
// import {Coh46PageModule} from '../ProsePages/coh46/coh46.module';
// import {Bor47PageModule} from '../ProsePages/bor47/bor47.module';
// import {Mtmp48PageModule} from '../ProsePages/mtmp48/mtmp48.module';
// import {Bbts49PageModule} from '../ProsePages/bbts49/bbts49.module';
// import {Tptw50PageModule} from '../ProsePages/tptw50/tptw50.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
      // ,
      // {
      //   path: 'cv1', 
      //   component: CV1PageModule
      // },
      // {
      //   path: 'tssl2', 
      //   component: TSSL2PageModule
      // },
      // {
      //   path: 'lg3', 
      //   component: Lg3PageModule
      // },
      // {
      //   path: 'mt4', 
      //   component: Mt4PageModule
      // },
      // {
      //   path: 'lbtm5', 
      //   component: Lbtm5PageModule
      // },
      // {
      //   path: 'tsmop6', 
      //   component: Tsmop6PageModule
      // },
      // {
      //   path: 'df7', 
      //   component: Df7PageModule
      // },
      // {
      //   path: 'mm8', 
      //   component: Mm8PageModule
      // },
      // {
      //   path: 'tcoe9', 
      //   component: Tcoe9PageModule
      // },
      // {
      //   path: 'hlmf10', 
      //   component: Hlmf10PageModule
      // },
      // {
      //   path: 'azd11', 
      //   component: Azd11PageModule
      // },
      // {
      //   path: 'trs12', 
      //   component: Trs12PageModule
      // },
      // {
      //   path: 'gat13', 
      //   component: Gat13PageModule
      // },
      // {
      //   path: 'aokol14', 
      //   component: Aokol14PageModule
      // },
      // {
      //   path: 'tab15', 
      //   component: Tab15PageModule
      // },
      // {
      //   path: 'cttw16', 
      //   component: Cttw16PageModule
      // },
      // {
      //   path: 'pm17', 
      //   component: Pm17PageModule
      // },
      // {
      //   path: 'err18', 
      //   component: Err18PageModule
      // },
      // {
      //   path: 'wy19', 
      //   component: Wy19PageModule
      // },
      // {
      //   path: 'abcog20', 
      //   component: Abcog20PageModule
      // },
      // {
      //   path: 'br21', 
      //   component: Br21PageModule
      // },
      // {
      //   path: 'tld22', 
      //   component: Tld22PageModule
      // },
      // {
      //   path: 'dmol23', 
      //   component: Dmol23PageModule
      // },
      // {
      //   path: 'otj24', 
      //   component: Otj24PageModule
      // },
      // {
      //   path: 'wdog25', 
      //   component: Wdog25PageModule
      // },
      // {
      //   path: 'cc26', 
      //   component: Cc26PageModule
      // },
      // {
      //   path: 'tm27', 
      //   component: Tm27PageModule
      // },
      // {
      //   path: 'tfahm28', 
      //   component: Tfahm28PageModule
      // },
      // {
      //   path: 'abs29', 
      //   component: Abs29PageModule
      // },
      // {
      //   path: 'as30', 
      //   component: As30PageModule
      // },
      // {
      //   path: 'mll31', 
      //   component: Mll31PageModule
      // },
      // {
      //   path: 'wld32', 
      //   component: Wld32PageModule
      // },
      // {
      //   path: 'hgb33', 
      //   component: Hgb33PageModule
      // },
      // {
      //   path: 'ittoae34', 
      //   component: Ittoae34PageModule
      // },
      // {
      //   path: 'jgs35', 
      //   component: Jgs35PageModule
      // },
      // {
      //   path: 'adoj36', 
      //   component: Adoj36PageModule
      // },
      // {
      //   path: 'tpod37', 
      //   component: Tpod37PageModule
      // },
      // {
      //   path: 'tr38', 
      //   component: Tr38PageModule
      // },
      // {
      //   path: 'ts39', 
      //   component: Ts39PageModule
      // },
      // {
      //   path: 'wd40', 
      //   component: Wd40PageModule
      // },
      // {
      //   path: 'rol41', 
      //   component: Rol41PageModule
      // },
      // {
      //   path: 'or42', 
      //   component: Or42PageModule
      // },
      // {
      //   path: 'sm43', 
      //   component: Sm43PageModule
      // },
      // {
      //   path: 'puys44', 
      //   component: Puys44PageModule
      // },
      // {
      //   path: 'et45', 
      //   component: Et45PageModule
      // },
      // {
      //   path: 'coh46', 
      //   component: Coh46PageModule
      // },
      // {
      //   path: 'bor47', 
      //   component: Bor47PageModule
      // },
      // {
      //   path: 'mtmp48', 
      //   component: Mtmp48PageModule
      // },
      // {
      //   path: 'bbts49',
      //   component: Bbts49PageModule
      // },
      // {
      //   path: 'tptw50',
      //   component: Tptw50PageModule
      // }
      
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
