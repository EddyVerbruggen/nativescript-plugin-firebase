import { PropertyChangeData } from "tns-core-modules/data/observable";

export abstract class AbstractMLKitViewComponent {
  torchOn: boolean = false;

  toggleTorch(args: PropertyChangeData): void {
    if (args.value !== null && args.value !== this.torchOn) {
      this.torchOn = args.value;
    }
  }
}
