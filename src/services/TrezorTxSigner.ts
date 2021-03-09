import TxSigner from '@/services/TxSigner';
import TrezorService from '@/services/TrezorService';
import { Tx } from '@/services/types';

export default class TrezorTxSigner extends TxSigner {
  private trezorService: TrezorService;

  constructor() {
    super();
    this.trezorService = new TrezorService(process.env.VUE_APP_COIN ?? 'test');
  }

  public sign(tx: Tx): Promise<object> {
    return new Promise<object>((resolve) => {
      this.trezorService.sign(tx)
        .then((payload) => {
          console.log(payload);
          resolve(payload);
        })
        .catch(console.error);
    });
  }
}
