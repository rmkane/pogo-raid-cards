class Pokemon {
	constructor() {
    this.dex = 0;
    this.pokemon = '';
    this.attack = 0;
    this.defense = 0;
    this.stamina = 0;
    this.types = [];
    this.shiny = false;
  }

  cp(ivAtk, ivDef, ivSta, level) {
    return Formulas.calculateCP(this.attack, this.defense, this.stamina, ivAtk, ivDef, ivSta, level);
  }

  hp(ivSta, level) {
  	return Formulas.calculateHP(this.stamina, ivSta, level);
  }
  
  retrieveBoosts() {
    return [];
  }
}
