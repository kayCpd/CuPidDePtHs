import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
// import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';


@Component({
  selector: 'app-askme',
  templateUrl: './askme.page.html',
  styleUrls: ['./askme.page.scss'],
})
export class AskmePage implements OnInit {

  submitted = false;
  
  askMeform: FormGroup;  

  firstname:FormControl;
  lastname:FormControl;
  email:FormControl;
  message:FormControl;
  terms:FormControl;


  validation_messages = {
    'firstname': [
      { type: 'required', message: 'First Name is required.' },
      { type: 'minlength', message: 'First Name must be at least 2 characters long.' },
      { type: 'maxlength', message: 'First Name cannot be more than 25 characters long.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last Name is required.' },
      { type: 'minlength', message: 'Last Name must be at least 2 characters long.' },
      { type: 'maxlength', message: 'Last Name cannot be more than 25 characters long.' }
    ],
    'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'Not a valid email.' }
       ],
    'terms': [
        { type: 'pattern', message: 'Read and accept terms.' }
      ],
    'message': [
        { type: 'required', message: 'Message is required.' },
        { type: 'minlength', message: 'Message must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Message cannot be more than 250 characters long.' }
      ]
    }

  // public formbuilder: FormBuilder;

  constructor(public formBuilder: FormBuilder) 
// constructor(public formBuilder: FormBuilder, private admobFree: AdMobFree)
{     
    // const bannerConfig: AdMobFreeBannerConfig = {
    //   // add your config here
    //   // for the sake of this example we will just use the test config
    //   isTesting: true,
    //   autoShow: true,
    //   bannerAtTop: false,
    //   overlap: true
    // };
    
    // this.admobFree.banner.config(bannerConfig);
    
    // this.admobFree.banner.prepare()
    //   .then(() => {
    //     // banner Ad is ready
    //     // if we set autoShow to false, then we will need to call the show method here
    // });
}

  // showIntAd(){
  //   const bannerConfig: AdMobFreeBannerConfig = {
  //     // add your config here
  //     // for the sake of this example we will just use the test config
  //     isTesting: true,
  //     autoShow: true,

  //   };
  //   //FOR INTERSTITIAL
  //   this.admobFree.interstitial.config(bannerConfig);
  //   this.admobFree.interstitial.prepare().then(() => {
  //   });

  //   // FOR BANNER
  //   // this.admobFree.banner.config(bannerConfig);
  //   // this.admobFree.banner.prepare().then(() => {
  //   // });
  // }

  ngOnInit() { 
    this.askMeform = this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(2),  
        Validators.pattern('[a-zA-Z ]*'), 
        Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(2), 
        Validators.pattern('[a-zA-Z ]*'), 
        Validators.required
        ])),
      message: new FormControl('', Validators.compose([
        Validators.maxLength(250),
        Validators.minLength(5),
        Validators.required
      ])),
      email:new FormControl ('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.required
      ])),
      // terms: new FormControl(true, Validators.pattern('true'))
      terms: new FormControl(false, Validators.pattern('true'))
    });
    
  }


        onSubmit() {
          alert('hi');
            // this.submitted = true;
    
            // stop here if form is invalid
            if (this.askMeform.invalid) {
               alert('invalid'); 
               return;                
            }else{
              alert('valid');
            }
    
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.askMeform.value))
        }


}
