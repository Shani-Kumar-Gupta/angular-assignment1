import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Assignment 1';
  para =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum lacus libero, dapibus aliquam odio bibendum ut. Mauris ornare placerat urna, laoreet blandit eros consectetur ut. Vivamus vitae dictum augue. Integer in tincidunt metus, id scelerisque lectus. Vivamus feugiat cursus massa, mollis eleifend erat lobortis ac. Ut consectetur libero vulputate sapien finibus accumsan. Suspendisse non maximus odio. Aliquam pretium eleifend metus, ut finibus arcu mollis in. Morbi vitae ipsum sed nibh blandit molestie non at massa. Ut eu aliquam arcu';

  clickCount = 0;
  ele = '';
  isVisible = false;
  itemList: Array<{ ele: string }> = [];
  listEle(e: any) {
    if(e!=""){
    this.itemList.push(e);
    }
    this.ele = "";
  }
  togglePara() {
    this.isVisible = !this.isVisible;
    this.clickCount += 1;
  }
}