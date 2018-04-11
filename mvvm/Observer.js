function observer(data) {
    if (!data || typeof data !== 'object') {
        return
    }

    Object.keys(data).forEach(function (key) {
        defineReactive(data, key, data[key])
    })
}

function defineReactive(data, key, val) {
    let dep = new Dep()
    observer(val)

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get: function () {
            return val
        },
        set: function (newVal) {
            if (val === newVal) return
            console.log(`监测到变化从${val} ==> ${newVal}`)
            val = newVal
            dep.notify()
        }
    })
}

function Dep() {
    this.subs = []
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub)
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update()
        })
    }
}