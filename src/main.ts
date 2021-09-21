import { basicSetup, EditorState, EditorView } from "@codemirror/basic-setup"

const app = document.getElementById('app')
const initial = [
  'Hello, World',
  '',
  'How are you doing?',
].join('\n')

if (app) {
  new EditorView({
    state: EditorState.create({
      doc: initial,
      extensions: [
        basicSetup,
      ]
    }),
    parent: app,
  })
}
