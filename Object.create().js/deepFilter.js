  function merge(target, ...sources) {
    for (const source of sources) {
      for (let k in source) {
        let vs = source[k],
          vt = target[k]
          console.log('vt:', vt)
        if (Object(vs) === vs && Object(vt) === vt) {
          target[k] = target.merge(vt, vs)
          continue
        }
        target[k] 
      }
    }
    return target
  }

  console.log(merge({house: 'blue'}, {house: "red", roof: "blue"}))