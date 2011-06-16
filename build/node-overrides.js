emptyFn = function() {return false;}
window = {
  navigator : 'Linux',
  attachEvent: emptyFn
};
navigator = {'userAgent' : 'node'};
document = {
  documentElement:{style: {boxShadow: undefined}},
  getElementsByTagName : emptyFn,
  attachEvent: emptyFn
};
top = {};
