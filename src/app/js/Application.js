var BOSSES = [
  '1,129,Magikarp,29/102/40,Water,true',
  '1,320,Wailmer,136/68/260,Water,false',
  '1,333,Swablu,76/139/90,Normal/Flying,true',
  '1,361,Snorunt,95/95/100,Ice,true',
  '2,080,Slowbro,177/194/190,Water,false',
  '2,103,Exeggutor,233/158/190,Grass/Psychic,false',
  '2,302,Sableye,141/141/100,Dark/Ghost,true',
  '2,303,Mawile,155/155/100,Steel/Fairy,true',
  '3,065,Alakazam,271/194/110,Psychic,false',
  '3,068,Machamp,234/162/180,Fighting,false',
  '3,121,Starmie,210/184/120,Water/Psychic,false',
  '3,123,Scyther,218/170/140,Bug/Flying,false',
  '3,142,Aerodactyl,221/164/160,Rock/Flying,false',
  '3,344,Claydol,140/236/120,Ground/Psychic,false',
  '4,006,Charizard,223/176/156,Fire/Flying,false',
  '4,248,Tyranitar,251/212/200,Rock/Dark,false',
  '4,306,Aggron,198/314/140,Steel/Rock,false',
  '4,359,Absol,246/120/130,Dark,true',
  '5,150,Mewtwo,300/182/193,Psychic,false',
  '5,384,Rayquaza,284/170/191,Dragon/Flying,false'
];
  
$(function() {
  $('body').renderTemplate('templates/card.hbs', {
    bosses : BOSSES
      .map(boss => RaidBoss.parse(boss))
      .sort((a, b) => b.bossCp - a.bossCp)
  });
});


