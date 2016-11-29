var randomThings = ["well I didn't vote for you", "strange women lying in ponds is no basis for a system of government", "supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony", "you can't expect to wield supreme power just 'cause some watery tart threw a sword at you", "I mean, if I went around saying I was an emperor just because some moistened bint had lobbed a scimitar at me, they'd put me away", "ah, now we see the violence inherent in the system", "help, help, I'm being repressed"];

exports.randomizer = function() {
  return randomThings[Math.floor(Math.random()*randomThings.length)];
};

exports.randomThings = randomThings;
