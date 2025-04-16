export interface OpenCliDocument {
  OpenCLIVersion?: string;
  Info: Info;
  Install?: Install[];
  Global?: Global;
  CommandTrie?: CommandTrie;
}

export interface Info {
  Title: string;
  Summary?: string;
  Description?: string;
  License?: License;
  Contact?: Contact;
  Binary?: string;
  Version?: string;
}

export interface License {
  Name: string;
  SpdxID?: string;
  URL?: string;
}

export interface Contact {
  Name: string;
  Email?: string;
  URL?: string;
}

export interface Install {
  Name: string;
  Command: string;
  URL: string;
  Description: string;
}

export interface Global {
  ExitCodes: ExitCode[];
  Flags: Flag[];
}

export interface ExitCode {
  Code: number;
  Status: string;
  Summary: string;
  Description: string;
}

export interface Command {
  Line: string;
  Name: string;
  LeafName: string;
  Params: string;
  Aliases: string[];
  Summary: string;
  Description: string;
  Arguments: Argument[];
  Flags: Flag[];
  Hidden: boolean;
  Group: boolean;
  CmdSpecificExitCodes: ExitCode[];
  ExitCodes: ExitCode[];
}

export interface Argument {
  Name: string;
  Summary: string;
  Description: string;
  Type: string;
  Variadic: boolean;
  Choices: Choice[];
  Required: boolean;
  Default: DefaultValue;
}

export interface Flag {
  Name: string;
  Aliases: string[];
  Hint: string;
  Summary: string;
  Description: string;
  Type: string;
  Variadic: boolean;
  Choices: Choice[];
  Hidden: boolean;
  Required: boolean;
  Default: DefaultValue;
  AltSources: AlternativeSource[];
}

export interface Choice {
  Value: string;
  Description: string;
}

export interface DefaultValue {
  IsSet: boolean;
  Bool: boolean;
  String: string;
}

export interface AlternativeSource {
  Type: string;
  EnvironmentVariable: string;
  File: FileSource;
}

export interface FileSource {
  Format: string;
  Path: string;
  Property: string;
}

export interface CommandTrie {
  Root?: CommandTrieNode;
}

export interface CommandTrieNode {
  Name: string;
  Command: Command;
  Commands: (CommandTrieNode | undefined)[];
}
