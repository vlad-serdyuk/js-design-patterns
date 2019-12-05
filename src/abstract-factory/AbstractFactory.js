class iOSDialog {
  render() {
    return 'this is iOS dialog';
  }
}

class AndroidDialog {
  render() {
    return 'this is android dialog';
  }
}

function iOSFactory() {
  return new iOSDialog();
}

function androidFactory() {
  return new AndroidDialog();
}

function dialogProduced(type) {
  return (type === 'ios') ? iOSFactory : androidFactory;
}

// usage
const produce = dialogProduced('ios');

const dialog = new produce();

dialog.render();