// Simulating an asynchronous operation (e.g., API call)
function task1(callback) {
    setTimeout(() => {
      console.log('Task 1 completed');
      callback();
    }, 1000);
  }
  
  function task2(callback) {
    setTimeout(() => {
      console.log('Task 2 completed');
      callback();
    }, 1000);
  }
  
  function task3(callback) {
    setTimeout(() => {
      console.log('Task 3 completed');
      callback();
    }, 1000);
  }
  
  // Callback hell example: nesting callbacks
  task1(function() {
    task2(function() {
      task3(function() {
        console.log('All tasks completed!');
      });
    });
  });
  