webpackJsonp([8],{1017:function(o,a,t){"use strict";var i=t(0),n=t(14),r=t(13),s=t(291),e=t(1052),l=t(1145),c=function(){function o(){}return o=__decorate([i.NgModule({imports:[n.CommonModule,r.ReactiveFormsModule,r.FormsModule,s.NgaModule,l.routing],declarations:[e.Login]}),__metadata("design:paramtypes",[])],o)}();Object.defineProperty(a,"__esModule",{value:!0}),a.default=c},1052:function(o,a,t){"use strict";var i=t(0),n=t(13),r=function(){function o(o){this.submitted=!1,this.form=o.group({email:["",n.Validators.compose([n.Validators.required,n.Validators.minLength(4)])],password:["",n.Validators.compose([n.Validators.required,n.Validators.minLength(4)])]}),this.email=this.form.controls.email,this.password=this.form.controls.password}return o.prototype.onSubmit=function(o){this.submitted=!0,this.form.valid},o=__decorate([i.Component({selector:"login",encapsulation:i.ViewEncapsulation.None,styles:[t(1221)],template:t(1257)}),__metadata("design:paramtypes",["function"==typeof(a="undefined"!=typeof n.FormBuilder&&n.FormBuilder)&&a||Object])],o);var a}();a.Login=r},1145:function(o,a,t){"use strict";var i=t(56),n=t(1052),r=[{path:"",component:n.Login}];a.routing=i.RouterModule.forChild(r)},1221:function(o,a){o.exports='.auth-main{display:flex;align-items:center;height:100%;width:100%;position:absolute}.auth-block{width:540px;margin:0 auto;border-radius:5px;background:rgba(0,0,0,0.55);color:#fff;padding:32px}.auth-block h1{font-weight:300;margin-bottom:28px;text-align:center}.auth-block p{font-size:16px}.auth-block a{text-decoration:none;outline:none;transition:all 0.2s ease;color:#00abff}.auth-block a:hover{color:#0091d9}.auth-block .control-label{padding-top:11px;color:#fff}.auth-block .form-group{margin-bottom:12px}.auth-input{width:300px;margin-bottom:24px}.auth-input input{display:block;width:100%;border:none;font-size:16px;padding:4px 10px;outline:none}a.forgot-pass{display:block;text-align:right;margin-bottom:-20px;float:right;z-index:2;position:relative}.auth-link{display:block;font-size:16px;text-align:center;margin-bottom:33px}.auth-sep{margin-top:36px;margin-bottom:24px;line-height:20px;font-size:16px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 24px;color:#fff}.auth-sep>span>span{margin-top:-12px;display:block}.auth-sep:before,.auth-sep:after{border-top:solid 1px #fff;content:"";height:1px;width:35%;display:table-cell}.al-share-auth{text-align:center}.al-share-auth .al-share{float:none;margin:0;padding:0;display:inline-block}.al-share-auth .al-share li{margin-left:24px}.al-share-auth .al-share li:first-child{margin-left:0}.al-share-auth .al-share li i{font-size:24px}.btn-auth{color:#fff !important}\n'},1257:function(o,a){o.exports='<div class="auth-main">\r\n  <div class="auth-block">\r\n    <h1>Sign in to ng2-admin</h1>\r\n    <a routerLink="/register" class="auth-link">New to ng2-admin? Sign up!</a>\r\n\r\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" class="form-horizontal">\r\n      <div class="form-group row" [ngClass]="{\'has-error\': (!email.valid && email.touched), \'has-success\': (email.valid && email.touched)}">\r\n        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\r\n\r\n        <div class="col-sm-10">\r\n          <input [formControl]="email" type="email" class="form-control" id="inputEmail3" placeholder="Email">\r\n        </div>\r\n      </div>\r\n      <div class="form-group row" [ngClass]="{\'has-error\': (!password.valid && password.touched), \'has-success\': (password.valid && password.touched)}">\r\n        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>\r\n\r\n        <div class="col-sm-10">\r\n          <input [formControl]="password" type="password" class="form-control" id="inputPassword3" placeholder="Password">\r\n        </div>\r\n      </div>\r\n      <div class="form-group row">\r\n        <div class="offset-sm-2 col-sm-10">\r\n          <button [disabled]="!form.valid" type="submit" class="btn btn-default btn-auth">Sign in</button>\r\n          <a routerLink="/login" class="forgot-pass">Forgot password?</a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class="auth-sep"><span><span>or Sign in with one click</span></span></div>\r\n\r\n    <div class="al-share-auth">\r\n      <ul class="al-share clearfix">\r\n        <li><i class="socicon socicon-facebook" title="Share on Facebook"></i></li>\r\n        <li><i class="socicon socicon-twitter" title="Share on Twitter"></i></li>\r\n        <li><i class="socicon socicon-google" title="Share on Google Plus"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n'}});