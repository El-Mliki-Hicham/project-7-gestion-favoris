

<?php


abstract class Animal {
    protected $age;
    protected $name;
    public static $counter = 0;

    public function __construct($name, $age)
    {
        $this->age = $age;
        $this->name = $name;
        self::$counter++;
    }

    abstract public function makeSound();

    public static function getTotalAnimal()
    {
        return self::$counter;
    }

    public function getAge()
    {
        return $this->age;
    }

    public function getName()
    {
        return $this->name;
    }
}

class Dog extends Animal {
    public function makeSound()
    {
        return "Woof woof";
    }
}

class Cat extends Animal {
    public function makeSound()
    {
        return "Meow meow";
    }
}

interface Flyable {
    public function fly();
}

class Eagle extends Animal implements Flyable {
    public function makeSound()
    {
        return "Screech";
    }

    public function fly()
    {
        return "I can fly ";
    }
}

$dog = new Dog("doggy", 5);
$cat = new Cat("catty", 3);
$eagle = new Eagle("eagley", 8);

echo $dog->getName() . " makes a sound " . $dog->makeSound() . "<br>";
echo $cat->getName() . " makes a sound " . $cat->makeSound() . "<br>";
echo $eagle->getName() . " makes a sound " . $eagle->makeSound() . " and " . $eagle->fly() . "<br>";

echo "Total Animals created: " . Animal::getTotalAnimal();

?>