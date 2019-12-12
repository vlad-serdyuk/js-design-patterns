class News {
  constructor() {
    this.news = '';
    this.actions = [];
  }

  setNews(text) {
    this.news = text;
    this.notifyAll();
  }

  notifyAll() {
    return this.actions.forEach(sub => sub.inform(this));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el instanceof observer));
  }
}

class Times {
  inform(message) {
    console.log(`The Times has been informed about: ${message.news}`);
  }
}

class Guardian {
  inform(message) {
    console.log(`The Guardian has been informed about: ${message.news}`);
  }
}

// usage
const news = new News();

news.register(new Times());
news.register(new Guardian());

news.setNews('Apple has apple released iphone!');

// The Times has been informed about: Apple has apple released iphone!
// The Guardian has been informed about: Apple has apple released iphone!