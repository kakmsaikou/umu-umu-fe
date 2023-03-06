/// <reference types="vite/client" />

interface LanguagePair {
  example: string;
  translation: string;
}

interface WordData {
  word_id: number;
  word: string;
  pronunciation: string;
  meaning: string;
  part_of_speech: string;
  language_pair_list:
    | []
    | [LanguagePair]
    | [LanguagePair, LanguagePair]
    | [LanguagePair, LanguagePair, LanguagePair];
}
