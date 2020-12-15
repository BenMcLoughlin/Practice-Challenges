const helpers_proto = {
  /**  merge
   *  merges one object into another without c
   *@param sources an object that can contain nested objects outlineing the specific changes to be made
   *@returns the given object with all changes made via the srouces object
   **/
  merge(...sources) {
    for (const source of sources) {
      for (let k in source) {
        let vs = source[k],
          vt = this[k];
        if (Object(vs) == vs && Object(vt) === vt) {
          this[k] = this.merge(vt, vs);
          continue;
        }
        this[k] = source[k];
      }
    }
    return this;
  },

  filterFor(query) {
    const filterArray = (arr) =>
      arr.filter((d) =>
        Object.entries(query)
          .map(([k, v]) => d[k] === v)
          .every((b) => b)
      );
    if (Array.isArray(this)) {
      return filterArray(this);
    }
    if (typeof this === "object") {
      return filterArray(Object.values(this));
    }
  },
};

const myObject = Object.assign(Object.create(helpers_proto), {
  house: "blue",
});

const obj2 = Object.assign(Object.create(helpers_proto), {
  123: {
    id: 123,
    house: "green",
    123: {
      id: 123,
      house: "green",
    },
    124: {
      id: 124,
      house: "green",
    },
    125: {
      id: 125,
      house: "yellow",
    },
  },
  124: {
    id: 124,
    house: "green",
  },
  125: {
    id: 125,
    house: "yellow",
  },
});

//console.log(myObject.merge({ house: "red", cat: "green" }));
console.log(obj2.filterFor({ id: 123 }));
