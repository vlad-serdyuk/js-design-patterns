class WebDialog {
  render() {
    return 'this is web dialog';
  }
}

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

class DialogFactory {
  create(platform) {
    if (platform === 'iOS') {
      return new iOSDialog();
    } else if (platform === 'android') {
      return new AndroidDialog();
    } else if (platform === 'web') {
      return new WebDialog();
    }
  }
}

// usage
const factory = new DialogFactory();

const webDialog = factory.create('web');

webDialog.render();
