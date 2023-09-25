import { Component } from '@angular/core';
import { Company, Service } from './app.service';
@Component({
  selector: 'app-root',
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPopupVisible: boolean;
  companies: any[];
  employee: any;

  labelMode: string;
  valueForEditableTextArea: string;

  labelLocation: string;

  readOnly: boolean;

  showColon: boolean;

  minColWidth: number;

  colCount: number;

  width: any;

  constructor() {
    this.isPopupVisible = true;
    this.valueForEditableTextArea="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mauris id pretium aliquam. Integer laoreet dui eu ligula ultrices euismod. Curabitur imperdiet molestie felis, vitae tempor dui semper a. Sed eget tempor justo, ut pharetra tellus. Nulla maximus enim mi, sed sagittis urna eleifend vitae. Nunc pretium, mi vitae efficitur convallis, nisl risus imperdiet eros, ut commodo urna justo quis odio. Morbi vulputate odio a vehicula ullamcorper. In elementum mauris vitae enim eleifend, et sollicitudin purus auctor. Vestibulum tristique quam ut ullamcorper efficitur. Sed a diam vel mi ultricies aliquet. Duis sit amet nunc non erat tincidunt viverra. Nulla quis dui sit amet justo elementum luctus id sodales tortor. Etiam sed ultricies sem.\n" +
      "\n" +
      "Mauris lacinia eget urna vitae scelerisque. Cras maximus nunc eu nisl iaculis, ut mollis tortor vulputate. Pellentesque id egestas nibh. Nam bibendum sed ligula ut feugiat. Praesent gravida leo vel velit commodo, a rutrum nisl sollicitudin. Cras lobortis justo et rhoncus consectetur. Etiam nibh justo, ullamcorper at congue ac, tincidunt ut leo. Sed vel hendrerit augue. Donec sollicitudin rhoncus enim in gravida. Etiam quis nibh vel nulla pulvinar fringilla. Aliquam eu purus lacinia, ultricies ante et, accumsan sem. Cras viverra nulla id lobortis luctus.\n" +
      "\n" +
      "Vestibulum nisi lorem, semper ut urna vel, venenatis auctor nisl. Donec eget ex sed massa blandit rutrum. Donec scelerisque elit et sagittis pulvinar. Aliquam erat volutpat. Duis auctor lobortis justo, in aliquet elit tristique non. Praesent ipsum neque, fringilla quis feugiat id, maximus et sem. Proin orci tortor, auctor in auctor a, tincidunt id dolor. Quisque ultricies, arcu a ornare placerat, diam sapien blandit nibh, eget lacinia eros neque non mi. Aliquam eleifend, arcu quis dictum consectetur, velit libero porta sapien, ac pretium metus mi vel nunc. Pellentesque vestibulum risus tempor neque tincidunt suscipit. Proin vehicula sem eget urna convallis, non rutrum leo venenatis. Duis aliquet sapien ut felis eleifend, sed imperdiet orci vulputate. Fusce dictum venenatis est ac euismod. Maecenas congue lacus non porttitor placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In gravida arcu turpis, quis ultricies sem eleifend id.\n" +
      "\n" +
      "Suspendisse in ipsum mauris. Vestibulum non ante id augue laoreet convallis in eget eros. Mauris blandit tellus et leo dictum, vitae mollis purus faucibus. Ut sed urna diam. Duis sodales risus a justo dignissim, in sagittis magna aliquam. Mauris egestas elit justo, nec imperdiet nunc varius et. Nullam rhoncus odio libero. Quisque viverra est et commodo varius. Vestibulum sollicitudin, tellus at fermentum posuere, odio nunc vehicula dui, at suscipit turpis erat at leo. Proin a risus ut nunc faucibus lobortis. Suspendisse potenti. Nunc hendrerit tristique diam a tempus. Pellentesque id fringilla sapien. Proin lectus arcu, posuere eget lobortis sed, accumsan vel lectus. Integer pharetra lorem orci, congue consequat sem tristique a.\n" +
      "\n" +
      "Quisque dictum ligula erat, vel suscipit quam semper a. Ut non mi posuere, vestibulum leo non, bibendum erat. Fusce vel facilisis velit. Sed pharetra dolor id ultrices imperdiet. Sed nec arcu mi. Praesent varius placerat ante a pretium. Nunc lorem lectus, lacinia a mi et, mollis placerat nulla. Pellentesque vestibulum interdum enim, sit amet dignissim diam egestas nec. Sed quis posuere dui, maximus aliquam magna. Nulla quis mi ex.";
    var service = new Service();
    this.labelMode = 'floating';
    this.labelLocation = 'left';
    this.readOnly = false;
    this.showColon = true;
    this.minColWidth = 300;
    this.colCount = 2;
    this.employee = {
      ID: 1,
      FirstName: 'John',
      LastName: 'Heart',
      CompanyName: 'Super Mart of the West',
      Position: 'CEO',
      OfficeNo: '901',
      BirthDate: new Date(1964, 2, 16),
      HireDate: new Date(1995, 0, 15),
      Address: '351 S Hill St.',
      City: 'Los Angeles',
      State: 'CA',
      Zipcode: '90013',
      Phone: '+1(213) 555-9392',
      Email: 'jheart@dx-email.com',
      Skype: 'jheart_DX_skype',
    };
    this.companies = [{
  ID: 1,
  Name: 'Super Mart of the West',
  Address: '702 SW 8th Street',
  City: 'Bentonville',
  State: 'Arkansas',
  ZipCode: 72716,
  Phone: '(800) 555-2797',
  Fax: '(800) 555-2171',
  Website: '',
  Active: true,
}, {
  ID: 2,
  Name: 'Electronics Depot',
  Address: '2455 Paces Ferry Road NW',
  City: 'Atlanta',
  State: 'Georgia',
  ZipCode: 30339,
  Phone: '(800) 595-3232',
  Fax: '(800) 595-3231',
  Website: '',
  Active: true,
}, {
  ID: 3,
  Name: 'K&S Music',
  Address: '1000 Nicllet Mall',
  City: 'Minneapolis',
  State: 'Minnesota',
  ZipCode: 55403,
  Phone: '(612) 304-6073',
  Fax: '(612) 304-6074',
  Website: '',
  Active: true,
}, {
  ID: 4,
  Name: "Tom's Club",
  Address: '999 Lake Drive',
  City: 'Issaquah',
  State: 'Washington',
  ZipCode: 98027,
  Phone: '(800) 955-2292',
  Fax: '(800) 955-2293',
  Website: '',
  Active: true,
}];
  }

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
