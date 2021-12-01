import {marked} from "marked";
import prism from "prismjs";
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-kotlin';
import {useEffect, useState} from "react";

export const useMarkdown = (document, preview) => {
  const [parsedDoc, setParsedDoc] = useState('');

  useEffect(() => {
    if (preview) {
      marked.setOptions({
        highlight: (code, lang) => {
          if (prism.languages[lang]) {
            return prism.highlight(code, prism.languages[lang], lang)
          } else {
            return code
          }
        }
      })

      const parseMarkdown = (text) => {
        return marked.parse(text)
      }

      const parsedMark = parseMarkdown(document);
      setParsedDoc(parsedMark)
    }
  }, [preview])

  return parsedDoc
}