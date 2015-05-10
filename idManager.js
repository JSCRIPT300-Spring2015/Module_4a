var _ = require('underscore');

var lastId;

function setIds(data) {
    var ids = [];
    
    if (_.isArray(data)) {
        ids = _.pluck(data, '_id');
        lastId = _.max(ids);
    }
}

function getId() {
        lastId = lastId + 1;
        return lastId;
}

module.exports = {
  setIds: setIds,
  getId: getId
}