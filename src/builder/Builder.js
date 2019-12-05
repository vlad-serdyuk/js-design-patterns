class Request {
  constructor() {
    this.url = '';
    this.method = '';
    this.headers = [];
    this.payload = null;
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request();
  }

  setUrl(url) {
    this.request.url = url;
    return this;
  }

  setMethod(method) {
    this.request.method = method;
    return this;
  }

  setHeader(header) {
    this.request.headers.push(header);
    return this;
  }

  setPayload(payload) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}

// usage
const request = new RequestBuilder()
                  .setUrl('http://example.com')
                  .setMethod('GET')
                  .setHeader({ 'Content-Type': 'application/json' })
                  .build();