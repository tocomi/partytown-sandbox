console.log('Partytown!! 🎉🎉🎉');

const executeHeavyJob = () => {
  console.log('Heavy job start!');
  for (let i = 0; i < 3000000000; i++) {
    // Heavy job
  }
  document.getElementById('root')?.appendChild(document.createTextNode('🎉'));
  console.log('Heavy job end!');
};

// ボタンが描画されるのを待つための簡易的な実装
setTimeout(() => {
  const incrementButton = document.getElementById('increment');
  if (!incrementButton) return;

  incrementButton.addEventListener('click', () => {
    console.log('Button click!');
    executeHeavyJob();
  });
  console.log('Click handler registered!');
}, 100);
