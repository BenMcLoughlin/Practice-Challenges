const hgiher_proto = {
  high_proto: function () {
    console.log("Hello from higher protot");
  },
};

const stream_reducer_proto = Object.assign(Object.create(hgiher_proto), {
  filterFor: function (query) {
    console.log("Hello");
    return Object.values(this).filter((d) => d.id === query.id)[0];
  },
});

let stream_reducer = Object.assign(Object.create(stream_reducer_proto), {
  user1Income_213300: {
    amortization: 0,
    color: "#72929B",
    cppEligible: true,
    createdAt: 1606501946535,
    currentValue: 0,
    flow: "in",
    in: {
      1: {
        start: 2008,
        value: 38000,
        end: 2054,
      },
    },
    id: "user1Income_213300",
    owner: "user1",
    out: {
      1: {
        start: 2020,
        value: 0,
        end: 2030,
      },
    },
    name: "Wal Mart",
    payment: 0,
    streamType: "income",
    rate: 0,
    reg: "Regular Employment",
    taxable: true,
    scenarios: 0,
    startValue: 0,
    startYear: 0,
    periodIn: 1,
    periodOut: 1,
  },
  user2Income_925317: {
    amortization: 0,
    color: "#B0CFE3",
    cppEligible: true,
    createdAt: 1606501977574,
    currentValue: 0,
    flow: "in",
    in: {
      1: {
        start: 1996,
        value: 39000,
        end: 2035,
      },
    },
    id: "user2Income_925317",
    owner: "user2",
    out: {
      1: {
        start: 2020,
        value: 0,
        end: 2030,
      },
    },
    name: "Grabbing boobs",
    payment: 0,
    streamType: "income",
    rate: 0,
    reg: "Investment Income",
    taxable: true,
    scenarios: 0,
    startValue: 0,
    startYear: 0,
    periodIn: 1,
    periodOut: 1,
  },
});

console.log(stream_reducer.high_proto());
