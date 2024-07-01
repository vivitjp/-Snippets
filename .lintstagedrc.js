export default {
  '**/*.{ts,tsx}': [
    () => 'tsc --incremental false --noEmit', // 型チェック
  ],
};
