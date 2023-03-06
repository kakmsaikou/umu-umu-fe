/// <reference types="vite/client" />

interface WordData {
  word_id: number;
  word: string;
  pronunciation: string;
  meaning: string;
  part_of_speech: string;
  example_list:
    | [{ example: string; translation: string }]
    | [
        { example: string; translation: string },
        { example: string; translation: string }
      ]
    | [
        { example: string; translation: string },
        { example: string; translation: string },
        { example: string; translation: string }
      ];
}
