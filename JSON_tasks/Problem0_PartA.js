var cat = {
   name: 'Flufffy',
   activities: ['play', 'eat cat food'],
   catFriends: [
   {
   name: 'bar',
   activities: ['be grumpy', 'eat bread omblet'],
   weight: 8,
   furcolor: 'white'
   }, 
   {
   name: 'foo',
   activities: ['sleep', 'pre-sleep naps'],
   weight: 3
   }
   ]
  }
//1
  cat.height = 5.6
  cat.weight = 60
//2
  cat.name = 'Fluffy'
//3
  console.log("names of Fluffys friends");
  for(var i = 0 ; i < cat.catFriends.length ; i++){
      console.log(cat.catFriends[i].name);
  }
  let totalWeight = 0;
  for(var i = 0 ; i < cat.catFriends.length ; i++){
   totalWeight+=cat.catFriends[i].weight;
  }
  console.log("Total Weight of Fluffys friends");
  console.log(totalWeight);
  let totalAct = 0;
  console.log("Total Activities of Fluffys friends");
  for(var i = 0 ; i < cat.catFriends.length ; i++){
   totalAct+=cat.catFriends[i].activities.length;
  }
  cat.catFriends[0].activities.push('asked for pets');
  cat.catFriends[0].activities.push('got me a dead mouse');
  cat.catFriends[0].activities.push('excused for pets');
  cat.catFriends[0].activities.push('got me a dead bird');
  for(var i = 0 ; i < cat.catFriends.length ; i++){
  if(cat.catFriends[i].name == 'bar'){
      cat.catFriends[i].furcolor = 'Black'
  }
  }
  console.log(cat);