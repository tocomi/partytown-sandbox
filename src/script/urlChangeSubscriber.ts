console.log('Partytown!! 🎉🎉🎉');

const executeHeavyJob = () => {
  console.log('Heavy job start!');
  for (let i = 0; i < 3000000000; i++) {
    // Heavy job
  }
  document.getElementById('root')?.appendChild(document.createTextNode('🎉'));
  console.log('Heavy job end!');
};

window.addEventListener('click', () => {
  console.log('Click!');
  executeHeavyJob();
});
