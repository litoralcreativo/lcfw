/**
 * For the complete list of languages, lookup this array
 *
 * import hljs from 'highlight.js';
 * hljs.listLanguages();
 */

type listOfLanguages = string;
export type CodeModel = {
  label: string;
  code: string;
  language: listOfLanguages;
};
