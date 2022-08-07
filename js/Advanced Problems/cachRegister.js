function checkCashRegister(price, cash, cid) {
  var result = { status: null, change: [] };
  var change = cash - price;
  var register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }
  if (register.total < change) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  var change_arr = denom.reduce(function (accumulation, curr) {
    var value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      accumulation.push([curr.name, value]);
    }
    return accumulation;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  result.status = "OPEN";
  result.change = change_arr;
  return result;
}
