import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {

  connected = true;
  backOnline = false;

  constructor() {
    Network.addListener('networkStatusChange', status => {

      //console.log('NETWORK CHANGED:', status);

      if (!status.connected) {
        this.connected = false;
        this.backOnline = false;
      }
      else {
        this.connected = true;
        this.backOnline = true;

        setTimeout(() => {this.backOnline = false;}, 3000);
      }
    });
  }

  async getNetworkStatus() {
    const status = await Network.getStatus();
    return status;
  }
}
