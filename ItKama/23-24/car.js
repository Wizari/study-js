var car1 = {
    name: "reno",
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        horsesPower: 120,
        isTurnOn: false
    },
    start: function () {
        this.isTurnOn = true;
        this.speed = 10;
        this.engine.isTurnOn = true;
    }
};
























