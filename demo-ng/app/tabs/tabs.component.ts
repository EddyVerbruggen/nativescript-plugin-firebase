import { Component, OnInit } from "@angular/core";
import { isAndroid } from "platform";
import { SelectedIndexChangedEventData, TabView } from "tns-core-modules/ui/tab-view";

@Component({
  selector: "TabsComponent",
  moduleId: module.id,
  templateUrl: "./tabs.component.html"
})
export class TabsComponent implements OnInit {
  private _title: string;

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    if (this._title !== value) {
      this._title = value;
    }
  }

  getIconSource(icon: string): string {
    return isAndroid ? "" : "res://tabIcons/" + icon;
  }

  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    const tabView = <TabView>args.object;
    const selectedTabViewItem = tabView.items[args.newIndex];

    this.title = selectedTabViewItem.title;
  }
}
