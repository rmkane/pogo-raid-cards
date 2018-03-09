class RaidBoss extends Pokemon {
  constructor() {
    super();
    this.tier = 0;
    this.bossCp = 0;
    this.bossHp = 0;
  }

  calculateBossCp() {
    return Formulas.calculateBossCP(this.attack, this.defense, this.tier);
  }
  calculateBossHp() {
  	return Formulas.calculateBossHP(this.tier);
  }

  static parse(data) {
    let instance = new RaidBoss(),
        tokens = data.split(','),
        stats = tokens[3].split('/').map(Number);

    instance.tier = parseInt(tokens[0], 10);
    instance.dex = parseInt(tokens[1], 10);
    instance.pokemon = tokens[2];
    instance.attack = stats[0];
    instance.defense = stats[1];
    instance.stamina = stats[2];
    instance.types = tokens[4].split('/');
    instance.shiny = tokens[5] === 'true';
    instance.weatherBoosts = instance.retrieveBoosts();
    instance.bossCp = instance.calculateBossCp();
    instance.bossHp = instance.calculateBossHp();

    return instance;
  }
}
