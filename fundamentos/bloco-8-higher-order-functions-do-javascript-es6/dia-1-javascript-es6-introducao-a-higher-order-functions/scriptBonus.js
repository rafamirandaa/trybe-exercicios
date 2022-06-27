const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const arrayMembers = [mage, warrior, dragon];

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  dragon["damage"] = Math.floor(Math.random() * (dragon.strength - 15)) + 15;
  return `Dano do Dragon no turno: ${dragon.damage}`
}

console.log(dragonDamage(dragon));

const warriorDamage = (warrior) => {
  warrior["damage"] = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength;
  return `Dano do Warrior no turno: ${warrior.damage}`
}

console.log(warriorDamage(warrior));

const mageDamage = (mage) => {
  mage["damage"] = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence;
  return `Dano do Mago no turno: ${mage["damage"]}`
}

console.log(mageDamage(mage));

const mageTurnAttack = (mage, mageDamage) => {
  if (mageDamage) {
    return mage["mana"] = mage.mana - 15;
  }
  else if (mage.mana < 15) {
    return 'Não possui mana suficiente para o ataque.'
  }
    return
}

console.log(mageTurnAttack(mage, mageDamage(mage)));