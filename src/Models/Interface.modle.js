'use strict';

class Interface {
  constructor(modal) {
    this.modal = modal;
  }

  read(_id) {
    if (_id) {
      return this.modal.find({ _id });
    } else {
      return this.modal.find({});
    }
  }

  create(obj) {
    const doc = new this.modal(obj);
    return doc.save();
  }

  update(_id, obj) {
    return this.modal.findByIdAndUpdate(_id, obj, { new: true });
  }

  delete(_id) {
    return this.modal.findByIdAndDelete({ _id });
  }
}

module.exports = Interface;
