//__IMPORT_MODULES_HERE__
//__LIBRARY__neutrinos\-file\-upload
import {NeutrinosFileUploadModule} from 'neutrinos-file-upload'
//__END__LIBRARY__neutrinos\-file\-upload
//__LIBRARY__idp\-dv
import {IdpDvModule} from 'idp-dv'
//__END__LIBRARY__idp\-dv
//__LIBRARY__@ckeditor/ckeditor5\-angular
import {CKEditorModule} from '@ckeditor/ckeditor5-angular'
//__END__LIBRARY__@ckeditor/ckeditor5\-angular
//__LIBRARY__@angular/material/paginator
import {MatPaginatorModule} from '@angular/material/paginator'
//__END__LIBRARY__@angular/material/paginator
import {NgModule } from '@angular/core';
import { sdProviders} from './sd-providers';
import { environment } from 'environments/environment';
@NgModule({
  imports: [
    //__CUSTOM_IMPORTS_MODULES__
    //__CUSTOM_IMPORTS_MODULES_END__
    //__IMPORTS_MODULES__
    
//__IMPORTED_MODULE__CKEditorModule
CKEditorModule,
//__IMPORTED_MODULE__CKEditorModule__END
//__IMPORTED_MODULE__MatPaginatorModule
MatPaginatorModule,
//__IMPORTED_MODULE__MatPaginatorModule__END
//__IMPORTED_MODULE__IdpDvModule
IdpDvModule,
//__IMPORTED_MODULE__IdpDvModule__END
//__IMPORTED_MODULE__NeutrinosFileUploadModule
NeutrinosFileUploadModule,
//__IMPORTED_MODULE__NeutrinosFileUploadModule__END
//__IMPORTS_MODULES_END__
  ],
  providers: [...sdProviders],
  exports: [
    //__EXPORTS_MODULES__
    
//__EXPORTED_MODULE__CKEditorModule
CKEditorModule,
//__EXPORTED_MODULE__CKEditorModule__END
//__EXPORTED_MODULE__MatPaginatorModule
MatPaginatorModule,
//__EXPORTED_MODULE__MatPaginatorModule__END
//__EXPORTED_MODULE__IdpDvModule
IdpDvModule,
//__EXPORTED_MODULE__IdpDvModule__END
//__EXPORTED_MODULE__NeutrinosFileUploadModule
NeutrinosFileUploadModule,
//__EXPORTED_MODULE__NeutrinosFileUploadModule__END
//__EXPORTS_MODULES_END__
  ]
})
export class DependenciesModule { }