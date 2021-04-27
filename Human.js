class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;

    }

    isMale() {
        return this.gender == male;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(Apple) {
        if (Apple.isEmpty()) {
            alert("Toi da an het");
        } else {
            alert("Toi con " + Apple.getWeight());
        }
    }

    eat(Apple) {
        Apple.decrease();
        this.weight++;
    }

    say(message) {
        alert(message);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}