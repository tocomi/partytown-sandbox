console.log('Partytown!! 🎉🎉🎉');

/**
 * 無駄に重いループを実行した後に🎉をHTMLに追加する
 */
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

  // ボタンに無駄に重い処理を紐付ける
  incrementButton.addEventListener('click', () => {
    console.log('Button click!');
    executeHeavyJob();
  });
  console.log('Click handler registered!');
}, 500);
