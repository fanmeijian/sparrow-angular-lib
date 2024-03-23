import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

import { first } from "rxjs";
import * as monaco from "monaco-editor";
import { MonacoEditorService } from "../../monaco-editor.service";
import { RulesService } from "@sparrowmini/rule-api";

@Component({
  selector: "spr-rule-create",
  templateUrl: "./rule-create.component.html",
  styleUrls: ["./rule-create.component.css"],
})
export class RuleCreateComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    ruleSetId: [null, Validators.required],
    name: [null, Validators.required],
    triggerCondition: [null, Validators.required],
    content: [null, Validators.required],
  });

  models: any;
  constructor(
    private fb: FormBuilder,
    private rulesService: RulesService,
    private monacoEditorService: MonacoEditorService
  ) {}

  ngOnInit(): void {
    this.rulesService.models().subscribe((res) => {
      this.models = res;
    });
    console.log(this._editorContainer.nativeElement);
    this.monacoEditorService.load();
    this.initMonaco();
  }

  public _editor: any;
  @ViewChild("editorContainer", { static: true })
  _editorContainer!: ElementRef<any>;

  private async initMonaco(): Promise<void> {
    console.log(this.monacoEditorService.loaded);
    if (!this.monacoEditorService.loaded) {
      this.monacoEditorService.loadingFinished.pipe(first()).subscribe(() => {
        console.log(this.monacoEditorService.loaded);
        this.initMonaco();
      });

      let keywords = ["class", "public"];
      monaco.languages.register({ id: "java" });
      // monaco.languages.setMonarchTokensProvider('java', {
      //   keywords,
      //   tokenizer: {
      //     root: [
      //       [
      //         /@?[a-zA-Z][\w$]*/, {
      //           cases: {
      //             '@keywords': 'keyword',
      //             '@default': 'variable',
      //           }
      //         }
      //       ],
      //       [/".*?"/, 'string'],
      //       [/\/\//, 'comment'],
      //     ]
      //   }
      // })
      const allLangs: any = await monaco.languages.getLanguages();
      const { language: javaLang } = await allLangs
        .find(({ id }: any) => id === "java")
        .loader();
      // Add syntaxhighlighting for handlebars delimiters
      const customTokenizer: any = {
        defaultToken: "",
        tokenPostfix: ".java",

        keywords: [
          "lock-on-active",
          "date-effective",
          "date-expires",
          "no-loop",
          "auto-focus",
          "activation-group",
          "agenda-group",
          "ruleflow-group",
          "entry-point",
          "duration",
          "package",
          "import",
          "dialect",
          "salience",
          "enabled",
          "attributes",
          "rule",
          "extend",
          "when",
          "then",
          "template",
          "query",
          "declare",
          "function",
          "global",
          "eval",
          "not",
          "in",
          "or",
          "and",
          "exists",
          "forall",
          "accumulate",
          "collect",
          "from",
          "action",
          "reverse",
          "result",
          "end",
          "over",
          "init",
        ],

        operators: [
          "=",
          ">",
          "<",
          "!",
          "~",
          "?",
          ":",
          "==",
          "<=",
          ">=",
          "!=",
          "&&",
          "||",
          "++",
          "--",
          "+",
          "-",
          "*",
          "/",
          "&",
          "|",
          "^",
          "%",
          "<<",
          ">>",
          ">>>",
          "+=",
          "-=",
          "*=",
          "/=",
          "&=",
          "|=",
          "^=",
          "%=",
          "<<=",
          ">>=",
          ">>>=",
        ],

        // we include these common regular expressions
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes:
          /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        digits: /\d+(_+\d+)*/,
        octaldigits: /[0-7]+(_+[0-7]+)*/,
        binarydigits: /[0-1]+(_+[0-1]+)*/,
        hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,

        // The main tokenizer for our languages
        tokenizer: {
          root: [
            // identifiers and keywords
            [
              /[a-zA-Z_$][\w$]*/,
              {
                cases: {
                  "@keywords": { token: "keyword.$0" },
                  "@default": "identifier",
                },
              },
            ],

            // whitespace
            { include: "@whitespace" },

            // delimiters and operators
            [/[{}()\[\]]/, "@brackets"],
            [/[<>](?!@symbols)/, "@brackets"],
            [
              /@symbols/,
              {
                cases: {
                  "@operators": "delimiter",
                  "@default": "",
                },
              },
            ],

            // @ annotations.
            [/@\s*[a-zA-Z_\$][\w\$]*/, "annotation"],

            // numbers
            [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, "number.float"],
            [
              /(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/,
              "number.float",
            ],
            [/0[xX](@hexdigits)[Ll]?/, "number.hex"],
            [/0(@octaldigits)[Ll]?/, "number.octal"],
            [/0[bB](@binarydigits)[Ll]?/, "number.binary"],
            [/(@digits)[fFdD]/, "number.float"],
            [/(@digits)[lL]?/, "number"],

            // delimiter: after number because of .\d floats
            [/[;,.]/, "delimiter"],

            // strings
            [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
            [/"/, "string", "@string"],

            // characters
            [/'[^\\']'/, "string"],
            [/(')(@escapes)(')/, ["string", "string.escape", "string"]],
            [/'/, "string.invalid"],
          ],

          whitespace: [
            [/[ \t\r\n]+/, ""],
            [/\/\*\*(?!\/)/, "comment.doc", "@javadoc"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"],
          ],

          comment: [
            [/[^\/*]+/, "comment"],
            // [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
            // [/\/\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/
            [/\*\//, "comment", "@pop"],
            [/[\/*]/, "comment"],
          ],
          //Identical copy of comment above, except for the addition of .doc
          javadoc: [
            [/[^\/*]+/, "comment.doc"],
            // [/\/\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(
            [/\/\*/, "comment.doc.invalid"],
            [/\*\//, "comment.doc", "@pop"],
            [/[\/*]/, "comment.doc"],
          ],

          string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, "string", "@pop"],
          ],
        },
      };

      monaco.languages.setMonarchTokensProvider("java", customTokenizer);

      // {
      //   tokenizer: {
      //     root: [
      //       [/\\{\\{/, { token: 'delimiter.handlebars' }],
      //       [/\\}\\}/, { token: 'delimiter.handlebars' }],
      //       [/\\{\\{#/, { token: 'delimiter.handlebars' }],
      //     ]
      //   }
      // }
      // for (const key in customTokenizer) {
      //   const value = customTokenizer[key]
      //   if (key === 'tokenizer') {
      //     for (const category in value) {
      //       const tokenDefs = value[category]
      //       // eslint-disable-next-line
      //       if (!javaLang.tokenizer.hasOwnProperty(category)) {
      //         javaLang.tokenizer[category] = []
      //       }
      //       if (Array.isArray(tokenDefs)) {
      //         javaLang.tokenizer[category].unshift.apply(javaLang.tokenizer[category], tokenDefs)
      //       }
      //     }
      //   }
      // }

      console.log(allLangs);
      monaco.languages.registerCompletionItemProvider("java", {
        provideCompletionItems: (model: any, position: any) => {
          console.log(model, position);

          const suggestions: any = [
            // ...this.models.map((k:any) => {
            //   return {
            //     label: k.className.split('.')[k.className.split('.').length-1],
            //     kind: monaco.languages.CompletionItemKind.Keyword,
            //     insertText: k.className.split('.')[k.className.split('.').length-1],
            //   }
            // })
            ...customTokenizer.keywords.map((k: any) => {
              return {
                label: k,
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: k,
              };
            }),
          ];
          console.log({ suggestions: [suggestions] });
          return { suggestions: suggestions };
        },
      });

      this._editor = monaco.editor.create(this._editorContainer.nativeElement, {
        language: "java",
        theme: "vs-dark",
      });

      return;
    }
  }
}
