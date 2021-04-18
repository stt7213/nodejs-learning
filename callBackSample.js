function listen(port, cb) {
  if (port == 3000) {
    cb(null, `http://localhost:${port}`);
  } else {
    cb(new Error("wrong port"), null);
  }
}

listen(3000, function (err, address) {
  // will print http://localhost:3000
  if (err) {
    console.log(err);
  } else {
    console.log(address);
  }
});

listen(3000, function (err, address) {
  // will print err
  if (err) {
    console.log(err);
  } else {
    console.log(address);
  }
});
