<template>
  <editor :init="option" />
</template>

<script>
export default {
  name: 'bs-editor',

  data() {
    return {
      option: {
        menubar: false,
        toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | oss',

        setup(editor) {
          editor.ui.registry.addButton('oss', {
            icon: 'insert-time',
            text: 'OSS',
            onSetup(api) {
              console.log('api in setup', api);
            },
            onAction(api) {
              console.log('api in action:', api);
            },
          });
        },

        skin: 'oxide-dark',
        content_css: 'dark',
      },
    };
  },
};
</script>
