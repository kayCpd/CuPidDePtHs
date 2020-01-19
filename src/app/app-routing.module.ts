import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'cv1',
    loadChildren: () => import('./ProsePages/cv1/cv1.module').then( m => m.Cv1PageModule)
  },
  {
    path: 'tssl2',
    loadChildren: () => import('./ProsePages/tssl2/tssl2.module').then( m => m.Tssl2PageModule)
  },
  {
    path: 'lg3',
    loadChildren: () => import('./ProsePages/lg3/lg3.module').then( m => m.Lg3PageModule)
  },
  {
    path: 'mt4',
    loadChildren: () => import('./ProsePages/mt4/mt4.module').then( m => m.Mt4PageModule)
  },
  {
    path: 'lbtm5',
    loadChildren: () => import('./ProsePages/lbtm5/lbtm5.module').then( m => m.Lbtm5PageModule)
  },
  {
    path: 'tsmop6',
    loadChildren: () => import('./ProsePages/tsmop6/tsmop6.module').then( m => m.Tsmop6PageModule)
  },
  {
    path: 'df7',
    loadChildren: () => import('./ProsePages/df7/df7.module').then( m => m.Df7PageModule)
  },
  {
    path: 'mm8',
    loadChildren: () => import('./ProsePages/mm8/mm8.module').then( m => m.Mm8PageModule)
  },
  {
    path: 'tcoe9',
    loadChildren: () => import('./ProsePages/tcoe9/tcoe9.module').then( m => m.Tcoe9PageModule)
  },
  {
    path: 'hlmf10',
    loadChildren: () => import('./ProsePages/hlmf10/hlmf10.module').then( m => m.Hlmf10PageModule)
  },
  {
    path: 'azd11',
    loadChildren: () => import('./ProsePages/azd11/azd11.module').then( m => m.Azd11PageModule)
  },
  {
    path: 'trs12',
    loadChildren: () => import('./ProsePages/trs12/trs12.module').then( m => m.Trs12PageModule)
  },
  {
    path: 'gat13',
    loadChildren: () => import('./ProsePages/gat13/gat13.module').then( m => m.Gat13PageModule)
  },
  {
    path: 'aokol14',
    loadChildren: () => import('./ProsePages/aokol14/aokol14.module').then( m => m.Aokol14PageModule)
  },
  {
    path: 'tab15',
    loadChildren: () => import('./ProsePages/tab15/tab15.module').then( m => m.Tab15PageModule)
  },
  {
    path: 'cttw16',
    loadChildren: () => import('./ProsePages/cttw16/cttw16.module').then( m => m.Cttw16PageModule)
  },
  {
    path: 'pm17',
    loadChildren: () => import('./ProsePages/pm17/pm17.module').then( m => m.Pm17PageModule)
  },
  {
    path: 'err18',
    loadChildren: () => import('./ProsePages/err18/err18.module').then( m => m.Err18PageModule)
  },
  {
    path: 'wy19',
    loadChildren: () => import('./ProsePages/wy19/wy19.module').then( m => m.Wy19PageModule)
  },
  {
    path: 'abcog20',
    loadChildren: () => import('./ProsePages/abcog20/abcog20.module').then( m => m.Abcog20PageModule)
  },
  {
    path: 'br21',
    loadChildren: () => import('./ProsePages/br21/br21.module').then( m => m.Br21PageModule)
  },
  {
    path: 'tld22',
    loadChildren: () => import('./ProsePages/tld22/tld22.module').then( m => m.Tld22PageModule)
  },
  {
    path: 'dmol23',
    loadChildren: () => import('./ProsePages/dmol23/dmol23.module').then( m => m.Dmol23PageModule)
  },
  {
    path: 'otj24',
    loadChildren: () => import('./ProsePages/otj24/otj24.module').then( m => m.Otj24PageModule)
  },
  {
    path: 'wdog25',
    loadChildren: () => import('./ProsePages/wdog25/wdog25.module').then( m => m.Wdog25PageModule)
  },
  {
    path: 'cc26',
    loadChildren: () => import('./ProsePages/cc26/cc26.module').then( m => m.Cc26PageModule)
  },
  {
    path: 'tm27',
    loadChildren: () => import('./ProsePages/tm27/tm27.module').then( m => m.Tm27PageModule)
  },
  {
    path: 'tfahm28',
    loadChildren: () => import('./ProsePages/tfahm28/tfahm28.module').then( m => m.Tfahm28PageModule)
  },
  {
    path: 'abs29',
    loadChildren: () => import('./ProsePages/abs29/abs29.module').then( m => m.Abs29PageModule)
  },
  {
    path: 'as30',
    loadChildren: () => import('./ProsePages/as30/as30.module').then( m => m.As30PageModule)
  },
  {
    path: 'mll31',
    loadChildren: () => import('./ProsePages/mll31/mll31.module').then( m => m.Mll31PageModule)
  },
  {
    path: 'wld32',
    loadChildren: () => import('./ProsePages/wld32/wld32.module').then( m => m.Wld32PageModule)
  },
  {
    path: 'hgb33',
    loadChildren: () => import('./ProsePages/hgb33/hgb33.module').then( m => m.Hgb33PageModule)
  },
  {
    path: 'ittoae34',
    loadChildren: () => import('./ProsePages/ittoae34/ittoae34.module').then( m => m.Ittoae34PageModule)
  },
  {
    path: 'jgs35',
    loadChildren: () => import('./ProsePages/jgs35/jgs35.module').then( m => m.Jgs35PageModule)
  },
  {
    path: 'adoj36',
    loadChildren: () => import('./ProsePages/adoj36/adoj36.module').then( m => m.Adoj36PageModule)
  },
  {
    path: 'tpod37',
    loadChildren: () => import('./ProsePages/tpod37/tpod37.module').then( m => m.Tpod37PageModule)
  },
  {
    path: 'tr38',
    loadChildren: () => import('./ProsePages/tr38/tr38.module').then( m => m.Tr38PageModule)
  },
  {
    path: 'ts39',
    loadChildren: () => import('./ProsePages/ts39/ts39.module').then( m => m.Ts39PageModule)
  },
  {
    path: 'wd40',
    loadChildren: () => import('./ProsePages/wd40/wd40.module').then( m => m.Wd40PageModule)
  },
  {
    path: 'rol41',
    loadChildren: () => import('./ProsePages/rol41/rol41.module').then( m => m.Rol41PageModule)
  },
  {
    path: 'or42',
    loadChildren: () => import('./ProsePages/or42/or42.module').then( m => m.Or42PageModule)
  },
  {
    path: 'sm43',
    loadChildren: () => import('./ProsePages/sm43/sm43.module').then( m => m.Sm43PageModule)
  },
  {
    path: 'puys44',
    loadChildren: () => import('./ProsePages/puys44/puys44.module').then( m => m.Puys44PageModule)
  },
  {
    path: 'et45',
    loadChildren: () => import('./ProsePages/et45/et45.module').then( m => m.Et45PageModule)
  },
  {
    path: 'coh46',
    loadChildren: () => import('./ProsePages/coh46/coh46.module').then( m => m.Coh46PageModule)
  },
  {
    path: 'bor47',
    loadChildren: () => import('./ProsePages/bor47/bor47.module').then( m => m.Bor47PageModule)
  },
  {
    path: 'mtmp48',
    loadChildren: () => import('./ProsePages/mtmp48/mtmp48.module').then( m => m.Mtmp48PageModule)
  },
  {
    path: 'bbts49',
    loadChildren: () => import('./ProsePages/bbts49/bbts49.module').then( m => m.Bbts49PageModule)
  },
  {
    path: 'tptw50',
    loadChildren: () => import('./ProsePages/tptw50/tptw50.module').then( m => m.Tptw50PageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./ProsePages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'daily-mantra',
    loadChildren: () => import('./daily-mantra/daily-mantra.module').then( m => m.DailyMantraPageModule)
  },
  {
    path: 'askme',
    loadChildren: () => import('./askme/askme.module').then( m => m.AskmePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
