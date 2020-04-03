import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 public rebalancedata:any;
  constructor() { 
     this.rebalancedata = [
     {label: 'Quarterly', value: 'quarterly'},
     {label: 'Buy and Hold', value: 'Buy and Hold'},
     {label: 'Monthly', value: 'Monthly'},
     {label: 'Annually', value: 'Annually'},
     {label: 'Semi Annually', value: 'Semi Annually'}
     ]; 
  }
  ngOnInit() {
  }

}
