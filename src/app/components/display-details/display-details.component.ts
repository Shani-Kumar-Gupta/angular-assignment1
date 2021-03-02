import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  public title: string = "Angular Assignment 1";
  public detail: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptas esse vitae molestias quis eligendi. Temporibus architecto eius voluptate maiores harum, rem cupiditate sunt, consectetur impedit odit, fugit sint error?
  Repudiandae ducimus, explicabo omnis deserunt praesentium laborum assumenda, esse amet laboriosam debitis architecto voluptate ipsam nihil officiis corporis tenetur vel iure dolorum aut ullam. Similique dolorum temporibus voluptatibus eum ullam?
  Minus quia ipsa laboriosam maiores, officia quas! Dolorum veritatis asperiores, facilis nam perspiciatis facere earum harum nulla illo. Sint nihil libero nostrum labore repudiandae, aperiam veritatis at voluptate nam dignissimos?
  Reiciendis veniam, nemo natus veritatis quas suscipit quisquam dolore eum, dolorem quibusdam voluptas officiis id consequuntur quaerat fugiat consectetur. Eligendi accusantium totam iure sit incidunt nemo sapiente amet, est dolore.
  Non aut quia consequatur harum rem nemo aliquam deserunt, suscipit maxime ex sint, deleniti perferendis itaque molestias quasi cumque incidunt unde nihil ipsam vitae. Itaque iusto accusamus necessitatibus delectus praesentium.`;

  public isDetailDisplay: boolean = false;
  public count: number = 0;

  public item: string = '';
  public itemList: Array<{item: string}> = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(){
    this.isDetailDisplay = !this.isDetailDisplay;
    this.count += 1;
  }

  listItem(item: any){
    if(item != ""){
      this.itemList.push(item);
    }
    this.item = "";
  }

}
