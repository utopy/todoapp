export default {
  rq(url, data, callback) {
    let request = new XMLHttpRequest();
    let err = null
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        let data = JSON.parse(request.responseText);
        callback(err, data)
      } else {
        // We reached our target server, but it returned an error
        err = JSON.parse(request.responseText);
        callback(err, data)
      }
    };

    request.onerror = function () {
      // There was a connection error of some sort
      err = "connection error"
      callback(err)
    };
    request.send(data);
  }
}
