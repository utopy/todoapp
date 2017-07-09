export default {
  rq(url, data, callback) {
    let request = new XMLHttpRequest();
    let err = null
    request.open('POST', this.url2 + url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        console.log("success")
        // Success!
        let data = JSON.parse(request.responseText);
        callback(err, data)
      } else {
        console.log("err")
        // We reached our target server, but it returned an error
        err = JSON.parse(request.responseText);
        callback(err, data)
      }
    };

    request.onerror = function () {
      // There was a connection error of some sort
      err = "connection error"
      console.log(err)
      callback(err)
    };
    request.send(JSON.stringify(data));
  },
  url: "http://192.168.1.8:3333",
  url2: "http://localhost:3333"
}
