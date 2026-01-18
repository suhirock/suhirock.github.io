import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import { createHighlighter } from 'shiki'
import { transformerNotationHighlight } from '@shikijs/transformers'

const highlighter = await createHighlighter({
  themes: ['github-dark', 'github-light'],
  langs: ['javascript', 'typescript', 'html', 'css', 'svelte', 'bash', 'json', 'markdown', 'python', 'plaintext']
})

// メタ情報からtitleを抽出
function extractTitle(meta) {
  if (!meta) return null
  const match = meta.match(/title="([^"]+)"/)
  return match ? match[1] : null
}

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  highlight: {
    highlighter: (code, lang, meta) => {
      const language = lang && highlighter.getLoadedLanguages().includes(lang) ? lang : 'plaintext'
      const title = extractTitle(meta)

      let html = highlighter.codeToHtml(code, {
        lang: language,
        themes: {
          light: 'github-light',
          dark: 'github-dark'
        },
        defaultColor: false,
        transformers: [transformerNotationHighlight()]
      })

      // ファイル名がある場合、preタグにdata-title属性を追加
      if (title) {
        html = html.replace('<pre', `<pre data-title="${title}"`)
      }

      // エスケープ処理
      const escaped = html
        .replace(/\{/g, '&#123;')
        .replace(/\}/g, '&#125;')
        .replace(/`/g, '&#96;')
      return escaped
    }
  },

  remarkPlugins: [],
  rehypePlugins: []
})

export default config