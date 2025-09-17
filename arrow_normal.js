const obj = {
    name: "NodeJS",
    normalFunc: function() {
        console.log("Normal Function this.name:", this.name);
    },
    arrowFunc: () => {
        console.log("Arrow Function this.name:", this.name);
    }
};

obj.normalFunc();
obj.arrowFunc();
