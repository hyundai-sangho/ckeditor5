const editor = document.querySelector('#editor');

// 클래식 에디터
ClassicEditor.create(editor).catch((에러) => {
  console.error(에러);
});

// 인라인 에디터
// InlineEditor.create(editor).catch((에러) => {
//   console.error(에러);
// });
