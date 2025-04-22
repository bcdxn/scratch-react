export interface OpenCliDocument {
  openCLIVersion?: string;
  info: Info;
  install?: Install[];
  global?: Global;
  commandTrie?: CommandTrie;
}

export interface Info {
  title: string;
  summary?: string;
  description?: string;
  license?: License;
  contact?: Contact;
  binary?: string;
  version?: string;
}

export interface License {
  name: string;
  spdxID?: string;
  url?: string;
}

export interface Contact {
  name: string;
  email?: string;
  url?: string;
}

export interface Install {
  name: string;
  command?: string;
  url?: string;
  description?: string;
}

export interface Global {
  exitCodes: ExitCode[];
  flags: Flag[];
}

export interface ExitCode {
  code: number;
  status: string;
  summary: string;
  description?: string;
}

export interface Command {
  line?: string;
  name?: string;
  leafName?: string;
  params?: string;
  aliases?: string[];
  summary?: string;
  description?: string;
  arguments?: Argument[];
  flags?: Flag[];
  hidden?: boolean;
  group?: boolean;
  cmdSpecificExitCodes?: ExitCode[];
  exitCodes?: ExitCode[];
}

export interface Argument {
  name: string;
  summary: string;
  description: string;
  type: string;
  variadic: boolean;
  choices: Choice[];
  required: boolean;
  default: DefaultValue;
}

export interface Flag {
  name: string;
  aliases: string[];
  hint: string;
  summary: string;
  description: string;
  type: string;
  variadic: boolean;
  choices: Choice[];
  hidden: boolean;
  required: boolean;
  default: DefaultValue;
  altSources: AlternativeSource[];
}

export interface Choice {
  value: string;
  description: string;
}

export interface DefaultValue {
  isSet: boolean;
  bool: boolean;
  string: string;
}

export interface AlternativeSource {
  type: string;
  environmentVariable: string;
  file: FileSource;
}

export interface FileSource {
  format: string;
  path: string;
  property: string;
}

export interface CommandTrie {
  root?: CommandTrieNode;
}

export interface CommandTrieNode {
  name: string;
  command: Command;
  commands: (CommandTrieNode | undefined)[];
}
