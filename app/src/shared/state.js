import {observable} from 'mobx';

class StateShared {
  @observable weatherLoaded = false;
  @observable loadingErrorMessage = '';
}

export default new StateShared();