var Formulas = {
  calculateCP : function(baseAtk, baseDef, baseSta, ivAtk, ivDef, ivSta, level){
    return Math.floor(((baseAtk + ivAtk) * Math.sqrt(baseDef + ivDef) * Math.sqrt(baseSta + ivSta) * Math.pow(Constants.CPM[level * 2 - 2], 2)) / 10);
  },

  calculateHP : function(baseSta, ivSta, level) {
    return Math.floor((baseSta + ivSta) * Constants.CPM[level * 2 - 2]);
  },

  calculateBossCP: function(baseAtk, baseDef, tier) {
    return Math.floor(((baseAtk + 15) * Math.sqrt(baseDef + 15) * Math.sqrt(Constants.RAID_BOSS_HP[tier - 1])) / 10);
  },

  calculateBossHP: function(tier) {
    return Constants.RAID_BOSS_HP[tier - 1];
  }
};
