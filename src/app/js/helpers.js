Handlebars.registerHelper({
  bossClasses : function(boss) {
    return 'tier-' + boss.tier + ' type-' + boss.types[0].toLowerCase();
  },
  formatArray : function(arr) {
    return arr.join(' / ');
  },
  dexFormat : function(dex) {
    return '#' + ('000' + dex).substr(-3);
  },
  formatNmumber : function(value) {
    return value.toLocaleString();
  },
  cp : function(boss, l, ai, di, si) {
  	return Handlebars.helpers.formatNmumber(boss.cp(ai, di, si, l));
  },
  hp : function(boss, ivStamina, level) {
    return Handlebars.helpers.formatNmumber(boss.hp(ivStamina, level));
  },
  boostSymbols : function(boss) {
    //return Handlebars.helpers.formatArray(boss.weatherBoosts.map(b => WEATHER[b][1]));
    return null;
  },
  getWeatherIcon : function(condition) {
  	//return WEATHER[condition][2];
    return null;
  }
});
