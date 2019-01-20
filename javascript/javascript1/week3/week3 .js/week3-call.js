const watchFirstEpisode = function() {
    // Calling this sentence "Watch first episode"
    console.log('Watch first episode');
  };
  
  const watchBreakingBad = function() {
    console.log('Watching Breaking bad');
    // calling the first function
    watchFirstEpisode();
    console.log('No more for today');
  };
  
  const goForARun = function() {
    console.log('Im running! look at me!');
  }
  
  const helpStudentsWithHomework = function() {
    console.log('Help help help');
  }
  
  function finishMondayEvening(functionThatIsParameter) {
    functionThatIsParameter();
    // calling the third function
    goForARun();
    // calling the fourth function
    helpStudentsWithHomework();
    // calling this sentence"done for today"
    console.log('done for today')
  }
  
  // watchBreakingBad not inside function(finishMondayEvening)
  finishMondayEvening(watchBreakingBad);
  // draw call stack