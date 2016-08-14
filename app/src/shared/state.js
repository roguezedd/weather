import {observable} from 'mobx';

class StateShared {
  @observable weatherLoaded = false;
}

export default new StateShared();